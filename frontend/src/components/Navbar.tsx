import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"

const Navbar = () => {
    return (
        <nav className="bg-[#00287A] text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    <img src={logo} alt="ATLAS & IRIS" className="h-20 w-auto" />
                </div>
                <div className="space-x-6 text-sm">
                    <NavLink to="/about" className="hover:underline">ABOUT US</NavLink>
                    <NavLink to="/services" className="hover:underline">SERVICES</NavLink>
                    <NavLink to="/careers" className="hover:underline">CAREERS</NavLink>
                    <NavLink to="/contact" className="hover:underline">CONNECT US</NavLink>
                </div>
            </div>
        </nav>
     
    );
};

export default Navbar;