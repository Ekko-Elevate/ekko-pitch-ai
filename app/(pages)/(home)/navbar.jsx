"use client";

import Link from 'next/link'; 
import Image from 'next/image'; 
import Logo from './Logo.jpg'; 
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false); //used for HAMBURGER

	useEffect(() => { // determines if user is on mobile
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1025);
		  };
		
		handleResize(); 
		window.addEventListener('resize', handleResize);
		
		return () => window.removeEventListener('resize', handleResize);
	}, []);


	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	};

	const closeMenu = () =>{
		setIsOpen(false);
	};

	return (
	  <nav className="fixed w-full h-16 shadow-xl bg-[#02254D]">
		<div className="w-full h-full flex justify-between items-center px-4 sm:px-8 md:px-20">
			<div className="justify-between flex space-x-8 items-center">
				<Link href='/'>
					<Image
						src={Logo}
						alt="Logo"
						width={65}
						height={50}
						className="cursor-pointer"
						priority
					/>
				</Link>
				{!isMobile && (
					<>
					<Link href='/about'>
						<div className="font-bold text-lg">About</div>
					</Link>
					<Link href='/pricing'>
						<div className="font-bold text-lg">Pricing</div>
					</Link>
					<Link href='/contact'>
						<div className="font-bold text-lg">Contact Us</div>
					</Link>
					<Link href='/howtouse'>
						<div className="font-bold text-lg">How to Use</div>
					</Link>
					</>
				)}
			</div>
			{!isMobile && (
			<div className="justify-between flex space-x-4 items-center">
				<Link href='/sign-up'>
				<div className="font-bold text-lg bg-[#fff7db] text-black px-4 py-2 rounded-full hover:bg-gray-400 cursor-pointer">
					Sign in
				</div>
				</Link>
				<Link href='/sign-up'>
					<div className="font-bold text-lg">Sign Up </div>
				</Link>
			</div>
			)}
			{isMobile && (
			<div className="cursor-pointer">
				<FaBars onClick={toggleMenu} size={24} />
		  	</div>
			)}
			{isMobile && (
			<>
				{isOpen && ( //panel closer
				<div 
					className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300"
					onClick={toggleMenu}
				></div>
				)}
				<div className={`fixed top-0 right-0 w-3/4 h-full bg-[#02254D] shadow-xl z-50 flex flex-col p-4 transform transition-all duration-300 ease-in-out ${ //panel opener
					isOpen ? 'translate-x-0' : 'translate-x-full' //conditional, isOpen = true -> translates element 0, false -> translates it to right
				}`}
				>
				<div className="flex justify-end">
					<FaTimes onClick={toggleMenu} size={24} className="cursor-pointer" />
				</div>
				<Link href='/about' onClick={closeMenu}>
					<div className="font-bold text-lg py-2">About</div>
				</Link>
				<Link href='/pricing' onClick={closeMenu}>
					<div className="font-bold text-lg py-2">Pricing</div>
				</Link>
				<Link href='/contact' onClick={closeMenu}>
					<div className="font-bold text-lg py-2">Contact Us</div>
				</Link>
				<Link href='/howtouse' onClick={closeMenu}>
					<div className="font-bold text-lg py-2">How to Use</div>
				</Link>
				<Link href='/sign-up' onClick={closeMenu}>
					<div className="font-bold text-lg py-2">Sign Up</div>
				</Link>
				<Link href='/sign-in' onClick={closeMenu}>
					<div className="font-bold text-lg py-2">Sign In</div>
				</Link>
				</div>
			</>
			)}
		</div>
	  </nav>
	);
};

export default Navbar;