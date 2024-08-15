"use client";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Nav = () => {
	const { user, error, isLoading } = useUser();

	const [open, setOpen] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const Menus = [
		// ... (Menus array remains unchanged)
	];

	const toggleMenu = () => {
		if (isMobile) {
			setIsMenuOpen(!isMenuOpen);
		} else {
			setOpen(!open);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (isMobile) {
			document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMobile, isMenuOpen]);

	useEffect(() => {
		if (user) {
			console.log(user);
		}
	}, [user]);

	return (
		<>
			{/* Hamburger menu for mobile */}
			{isMobile && (
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
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
				className={`${
					isMobile
						? isMenuOpen
							? "fixed inset-0 z-40 w-full left-0"
							: "fixed inset-y-0 z-40 w-20 -left-20"
						: open
						? "w-40"
						: "w-24"
				} bg-zinc-600 h-screen min-h-screen transition-all duration-300 ease-in-out flex flex-col relative`}
			>
				{/* Close button for mobile */}
				{isMobile && isMenuOpen && (
					<button
						onClick={() => setIsMenuOpen(false)}
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
						className="absolute -right-3 top-2 bg-zinc-600 rounded-full p-1 z-50"
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

				<div className="flex justify-center items-center mt-8 mb-4">
					{user && (
						<img
							src={user.picture}
							className={`cursor-pointer duration-500 ${
								open && "rotate-[360deg]"
							} ${isMobile ? "w-20 h-20" : ""}`}
							className={`cursor-pointer duration-500 ${
								open && "rotate-[360deg]"
							} ${isMobile ? "w-20 h-20 max-w-[200px]" : ""}`}
						/>
					)}
				</div>
				<h1
					className={`text-white origin-left font-medium text-lg duration-200 text-center ${
						!open && !isMobile && "scale-0"
					}`}
				>
					Designer
				</h1>
				<ul className="flex-1 pt-6 overflow-y-auto">
					{Menus.map((Menu, index) => (
						<li
							key={index}
							className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
								Menu.gap ? "mt-9" : "mt-2"
							} ${index === 0 && "bg-light-white"} `}
						>
							<img
								src={`https://cdn-icons-png.flaticon.com/128/739/739249.png`}
							/>
							<span
								className={`${
									!open && !isMobile && "hidden"
								} origin-left duration-200`}
							>
								{Menu.title}
							</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Nav;
