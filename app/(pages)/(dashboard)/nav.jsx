"use client";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Menus = [
	{ title: "Dashboard", src: "Chart_fill" },
	{ title: "Inbox", src: "Chat" },
	{ title: "Accounts", src: "User" },
];

const Nav = ({ isMobile }) => {
	const { user, error, isLoading } = useUser();

	const [open, setOpen] = useState(!isMobile);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		if (isMobile) {
			setIsMenuOpen(!isMenuOpen);
		} else {
			setOpen(!open);
		}
	};

	return (
		<>
			{/* Hamburger menu for mobile */}
			{isMobile && (
				<button
					onClick={toggleMenu}
					className="fixed top-4 left-4 z-50 text-white bg-zinc-600 p-2 rounded-md"
				>
					<svg
						className="w-6 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			)}

			{/* Main navigation content */}
			<div
				className={`
					${
						isMobile
							? isMenuOpen
								? "fixed inset-0 z-40 w-full left-0 flex flex-col items-start pt-16 pl-[25%] opacity-100"
								: "fixed inset-0 z-40 w-full left-[-100%] flex flex-col items-start pt-16 pl-[25%] opacity-0"
							: open
							? "w-52"
							: "w-20"
					} 
					bg-zinc-600 h-screen min-h-screen transition-all duration-300 ease-in-out flex flex-col relative
				`}
			>
				{/* Close button for mobile */}
				{isMobile && isMenuOpen && (
					<button
						onClick={toggleMenu}
						className="absolute top-4 right-4 text-white z-50 p-2"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				)}

				{/* Open/close arrow for desktop */}
				{!isMobile && (
					<button
						onClick={toggleMenu}
						className="absolute -right-6 top-28 bg-zinc-600 rounded-full p-3 z-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-5 w-5 text-white transform transition-transform duration-300 ease-in-out ${
								open ? "rotate-0" : "rotate-180"
							}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
				)}

				<ul
					className={`flex-1 w-full flex flex-col ${
						isMobile ? "" : "items-center"
					} pt-6 overflow-y-auto`}
				>
					{user && (
						<li className="flex w-full rounded-md cursor-pointer hover:bg-light-white text-gray-300 mb-4">
							<div className="flex items-center w-full px-4 py-2">
								<img
									src={user.picture}
									className="w-12 h-12 rounded-full"
									alt="User profile"
								/>
								<span
									className={`${
										!open && !isMobile ? "hidden" : ""
									} origin-left duration-200 ml-4 text-lg`}
								>
									Profile
								</span>
							</div>
						</li>
					)}
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`flex w-full rounded-md cursor-pointer hover:bg-light-white text-gray-300 ${
								Menu.gap ? "mt-9" : "mt-4"
							}`}
						>
							<div className="flex items-center w-full px-4 py-2">
								<img
									className="w-12 h-12"
									src={`https://cdn-icons-png.flaticon.com/128/739/739249.png`}
									alt={Menu.title}
								/>
								<span
									className={`${
										!open && !isMobile ? "hidden" : ""
									} origin-left duration-200 ml-4 text-lg`}
								>
									{Menu.title}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Nav;
