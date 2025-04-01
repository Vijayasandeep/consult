import nezuko1 from "../images/nezuko1.webp";
import nezuko2 from "../images/nezuko2.jpeg";  
import nezuko3 from "../images/nezuko3.jpeg";
import nezuko4 from "../images/nezuko4.webp";

const About = () => {
    return (
        <div className="bg-gray-100">
            {/* Navbar */}
        
            {/* About Us Section */}
            <div className="container mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold text-gray-700">ABOUT US</h2>

                {/* Vision Section */}
                <div className="mt-6 border border-gray-300 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-center">VISION</h3>
                    <p className="text-center text-gray-600 mt-2">
                        WE BELIEVE THAT TRUE WISDOM COMES FROM EXPERIENCE, AND THROUGH OUR JOURNEYS,
                        INDIVIDUALS WILL GAIN THE INTELLECT TO CREATE LASTING SOLUTIONS.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mt-6 border border-gray-300 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-center">MISSION</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            ✅ <span className="ml-2 text-gray-700">TEAM</span>
                        </li>
                        <li className="flex items-center">
                            ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
                        </li>
                        <li className="flex items-center">
                            ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
                        </li>
                        <li className="flex items-center">
                            ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
                        </li>
                        <li className="flex items-center">
                            ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
                        </li>
                    </ul>
                </div>

                {/* Our Leaders Section */}
                <div className="mt-6 border border-gray-300 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-center">OUR LEADERS</h3>
                    <div className="flex justify-center mt-4">
                        <div className="text-center">
                            <img
                                src={nezuko1}
                                alt="Director"
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            <h4 className="mt-2 font-bold">DIRECTOR</h4>
                            <p className="text-sm text-gray-600">ANURAG KUMAR</p>
                        </div>
                    </div>

                    {/* Leader Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {/* Business Development Manager */}
                        <div className="text-center">
                            <img
                                src={nezuko2}
                                alt="Pooja Patel"
                                className="w-16 h-16 rounded-full mx-auto"
                            />
                            <h4 className="mt-2 font-semibold text-sm">BUSINESS DEVELOPMENT MANAGER</h4>
                            <p className="text-xs text-gray-600">(POOJA PATEL)</p>
                            <p className="text-xs text-gray-500">MBA (MIT-WPU)</p>
                        </div>

                        {/* Program Execution Manager */}
                        <div className="text-center">
                            <img
                                src={nezuko3}
                                alt="Harshit Negi"
                                className="w-16 h-16 rounded-full mx-auto"
                            />
                            <h4 className="mt-2 font-semibold text-sm">PROGRAM EXECUTION MANAGER</h4>
                            <p className="text-xs text-gray-600">(HARSHIT NEGI)</p>
                            <p className="text-xs text-gray-500">BTECH (IIT TIRUPATI)</p>
                        </div>

                        {/* Marketing and Sales Manager */}
                        <div className="text-center">
                            <img
                                src={nezuko4}
                                alt="Nancy"
                                className="w-16 h-16 rounded-full mx-auto"
                            />
                            <h4 className="mt-2 font-semibold text-sm">MARKETING AND SALES MANAGER</h4>
                            <p className="text-xs text-gray-600">(NANCY)</p>
                            <p className="text-xs text-gray-500">MASTERS (IIT MADRAS)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-900 text-white text-center py-4">
                © 2025 ATLAS & IRIS. All rights reserved.
            </footer>
        </div>
    );
};

export default About;
