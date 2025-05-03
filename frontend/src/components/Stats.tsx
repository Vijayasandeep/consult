import React from "react";
import StatsBG from "../images/StatsBG.jpg";
import {FaUserFriends, FaStar, FaTasks} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons";

const stats = [
    {
        icon: <FaUserFriends size={48} />,
        value: "500+",
        label: "Support Given",
    },
    {
        icon: <FaStar size={48} />,
        value: "20+",
        label: "Clients Rating",
    },
    {
        icon: <FaTasks size={48} />,
        value: "50",
        label: "Projects Handled"
    },
    {
        icon:<FontAwesomeIcon icon={faCircleDollarToSlot} size={"3x"}/>,
        value: "2L+",
        label: "Money Saved"
    }
];

const Stats: React.FC = () => {
    return (
        <div className="relative w-full py-20 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={StatsBG}
                    alt="Stats Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Horizontal Stats Layout */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-center">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <div className="bg-white/20 p-6 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-3xl font-bold">{item.value}</h3>
                            <p className="text-base text-gray-300">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
