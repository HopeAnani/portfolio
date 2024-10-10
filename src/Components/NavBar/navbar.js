import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-20 w-full max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow">
            <div className="flex items-center">
                <Link to='/' className="text-2xl font-bold cursor-pointer">My Portfolio</Link>
            </div>
            {/* Hamburger Icon */}
            <div className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
            </div>
            {/* Menu Items */}
            <div
                className={`md:flex md:space-x-8 ${isMenuOpen ? 'flex' : 'hidden'} md:static absolute text-right top-20 right-0 md:shadow-none shadow-sm shadow-white w-auto md:w-auto transition-all duration-300 ease-in-out flex-col md:flex-row`}
                style={{ backgroundColor: isMenuOpen ? '#1e1e1e' : 'transparent' }} // Orange background when menu is open
            >
                <Link
                    to="landingPage"
                    smooth={true}
                    duration={500}
                    className="text-lg py-2 px-4 hover:text-white hover:border-b-4 hover:border-[#FF5213] transition-all cursor-pointer"
                    onClick={toggleMenu} // Close menu on link click
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-lg py-2 px-4 hover:text-white hover:border-b-4 hover:border-[#FF5213] transition-all cursor-pointer"
                    onClick={toggleMenu} // Close menu on link click
                >
                    About
                </Link>
                <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    className="text-lg py-2 px-4 hover:text-white hover:border-b-4 hover:border-[#FF5213] transition-all cursor-pointer"
                    onClick={toggleMenu} // Close menu on link click
                >
                    Portfolio
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-lg py-2 px-4 hover:text-white hover:border-b-4 hover:border-[#FF5213] transition-all cursor-pointer"
                    onClick={toggleMenu} // Close menu on link click
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
