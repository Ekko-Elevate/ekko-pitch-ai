"use client";
import { useState, useEffect } from "react";
import Nav from "./nav.jsx";

export default function DashboardLayout({ children }) {
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex h-screen">
			{isMobile && (
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="fixed top-4 left-4 z-50"
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			)}
			<Nav
				isMobile={isMobile}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
			<main className="flex-1 overflow-y-auto p-4">{children}</main>
		</div>
	);
}
