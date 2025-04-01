import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-lg font-bold">ATLAS & IRIS</div>
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