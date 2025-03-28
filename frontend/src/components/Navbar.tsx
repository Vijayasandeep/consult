import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-8">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-primary ${isActive ? "font-bold" : ""}`
                        }
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-primary ${isActive ? "font-bold" : ""}`
                        }
                    >
                        SERVICES
                    </NavLink>
                    <NavLink
                        to="/careers"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-primary ${isActive ? "font-bold" : ""}`
                        }
                    >
                        CAREERS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-primary ${isActive ? "font-bold" : ""}`
                        }
                    >
                        CONNECT US
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;