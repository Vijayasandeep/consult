import { useState, useRef, useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import logo from "../images/logo.png";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
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
        <nav className="bg-[#00287A] text-white py-4">
            <div className="container mx-auto px-4 flex items-center justify-between relative">
                {/* Logo */}
                <img src={logo} alt="ATLAS & IRIS" className="h-12 sm:h-16 w-auto" />

                {/* Desktop Links */}
                <div className="hidden sm:flex space-x-6 text-sm">
                    <NavLink to="/about" className="hover:underline">ABOUT US</NavLink>
                    <NavLink to="/services" className="hover:underline">SERVICES</NavLink>
                    <NavLink to="/careers" className="hover:underline">CAREERS</NavLink>
                    <NavLink to="/contact" className="hover:underline">CONNECT US</NavLink>
                </div>

                {/* Mobile Dropdown */}
                <div className="sm:hidden relative" ref={dropdownRef}>
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute top-14 right-4 bg-white shadow-md rounded-md p-4 z-50 min-w-[150px]">
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                                Home
                            </Link>
                            <Link
                                to="/services"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                                Services
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-black hover:bg-gray-100 whitespace-nowrap"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-black hover:bg-gray-100 whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/careers"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-black hover:bg-gray-100 whitespace-nowrap"
                            >
                                Careers
                            </Link>
                        </div>

                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
