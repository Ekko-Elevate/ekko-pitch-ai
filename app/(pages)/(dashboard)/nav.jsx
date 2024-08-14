"use client";
import { useState, useEffect } from "react";

const Nav = ({ isMobile, isMenuOpen, setIsMenuOpen }) => {
	const [open, setOpen] = useState(true);
	const Menus = [
		{
			title: "Dashboard",
			src: "https://cdn-icons-png.flaticon.com/128/739/739249.png",
		},
		{
			title: "Inbox",
			src: "https://cdn-icons-png.flaticon.com/128/739/739249.png",
		},
		{
			title: "Accounts",
			src: "https://cdn-icons-png.flaticon.com/128/739/739249.png",
			gap: true,
		},
		{
			title: "Schedule ",
			src: "https://cdn-icons-png.flaticon.com/128/739/739249.png",
		},
		{
			title: "Search",
			src: "https://cdn-icons-png.flaticon.com/128/739/739249.png",
		},
	];
	const toggleMenu = () => {
		if (isMobile) {
			setIsMenuOpen(!isMenuOpen);
		} else {
			setOpen(!open);
		}
	};

	useEffect(() => {
		if (isMobile) {
			document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMobile, isMenuOpen]);

	if (isMobile && !isMenuOpen) {
		return null;
	}

	return (
		<div
			className={`${
				isMobile ? "fixed inset-0 z-40 w-full" : open ? "w-72" : "w-20"
			} bg-zinc-600 h-screen duration-300 flex flex-col relative`}
		>
			{!isMobile && (
				<button
					onClick={toggleMenu}
					className={`absolute -right-3 top-9 bg-white rounded-full p-1 ${
						open ? "" : "rotate-180"
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-zinc-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{open ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						)}
					</svg>
				</button>
			)}

			{isMobile && (
				<button
					onClick={() => setIsMenuOpen(false)}
					className="absolute top-4 right-4 text-white"
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

			<div className="flex gap-x-4 items-center p-4">
				<img
					src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
					className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
				/>
				<h1
					className={`text-white origin-left font-medium text-xl duration-200 ${
						!open && !isMobile && "scale-0"
					}`}
				>
					Designer
				</h1>
			</div>

			<ul className="flex-1 pt-6 overflow-y-auto">
				{Menus.map((Menu, index) => (
					<li
						key={index}
						className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
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
	);
};

export default Nav;
