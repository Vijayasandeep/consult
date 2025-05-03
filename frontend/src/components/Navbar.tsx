import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        // <nav className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-md">
            <nav className="h-20 sm:h-20 bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-md">

            <div className="w-full px-6 sm:px-16 py-4 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="ATLAS & IRIS" className="h-10 sm:h-15 w-auto" />
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden sm:flex space-x-12 text-sm font-medium text-gray-800">
                    <NavLink to="/" className="hover:underline transition">HOME</NavLink>
                    <NavLink to="/about" className="hover:underline transition">ABOUT US</NavLink>
                    <NavLink to="/services" className="hover:underline transition">SERVICES</NavLink>
                    <NavLink to="/contact" className="hover:underline transition">CONTACT US</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="sm:hidden relative" ref={dropdownRef}>
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute top-14 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-md py-2 w-48 text-sm font-medium z-50">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</Link>
                            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Services</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact Us</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
