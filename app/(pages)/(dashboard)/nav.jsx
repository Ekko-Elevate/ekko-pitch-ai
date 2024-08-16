"use client";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Menus = [
	{ title: "Dashboard", src: "Chart_fill" },
	{ title: "Inbox", src: "Chat" },
	{ title: "Accounts", src: "User" },
];

const Nav = ({ isMobile }) => {
	const { user } = useUser();
	//mobile users should start closed open but desktop people should
	const [isOpen, setIsOpen] = useState(!isMobile);

	const toggleMenu = () => setIsOpen(!isOpen);

	const navClasses = `
    fixed top-0 left-0 h-screen bg-zinc-600 transition-all duration-300 ease-in-out
    ${
			isMobile
				? isOpen
					? "w-60 z-40"
					: "w-0 -left-full"
				: isOpen
				? "w-52"
				: "w-20"
		}
	`;

	return (
		<>
			{isMobile && (
				<button
					onClick={toggleMenu}
					className="fixed top-4 left-4 z-50 text-white bg-zinc-600 p-2 rounded-md"
				>
					{isOpen ? "✕" : "☰"}
				</button>
			)}

			<nav className={navClasses}>
				{!isMobile && (
					<button
						onClick={toggleMenu}
						className="absolute -right-6 top-28 bg-zinc-600 rounded-full p-3"
					>
						{isOpen ? "◀" : "▶"}
					</button>
				)}

				<ul className={`pt-${isMobile ? "16" : "6"} h-full overflow-y-auto`}>
					{user && (
						<li className="flex items-center px-4 py-2 mb-4 text-gray-300">
							<img
								src={user.picture}
								className="w-12 h-12 rounded-full"
								alt="User profile"
							/>
							{isOpen && <span className="ml-4 text-lg">Profile</span>}
						</li>
					)}
					{Menus.map((menu, index) => (
						<li
							key={index}
							className="flex items-center px-4 py-2 mt-4 text-gray-300 cursor-pointer hover:bg-zinc-500"
						>
							<img
								className="w-12 h-12"
								src={`https://cdn-icons-png.flaticon.com/128/739/739249.png`}
								alt={menu.title}
							/>
							{isOpen && <span className="ml-4 text-lg">{menu.title}</span>}
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
