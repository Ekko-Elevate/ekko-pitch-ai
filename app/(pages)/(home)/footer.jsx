"use client";

import Link from 'next/link'; 
import Image from 'next/image'; 
import Logo from './Logo.jpg'; 
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Footer = ({children}) => {
    return(
        <footer className = "bg-[#02254D] text-white py-4 mt-auto w-full">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Ekko. All rights reserved.</p>
                <div className="mt-2">
                <Link href='/privacy'>
					<div className="text-gray-400 hover:text-white mx-2">Privacy</div>
				</Link>
                <Link href='/tos'>
					<div className="text-gray-400 hover:text-white mx-2">Terms of Service</div>
				</Link>
                <Link href='/contact'>
					<div className="text-gray-400 hover:text-white mx-2">Contact Us</div>
				</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer