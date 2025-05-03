import React from 'react';
import StatsBG from "../images/StatsBG.jpg"; // Replace with your image path
import {FaUserFriends, FaStar, FaMoneyBillWave, FaTrophy} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserFriends size={32} />,
    value: "500+",
    label: "Support Given",
  },
  {
    icon: <FaStar size={32} />,
    value: "20+",
    label: "Clients Rating",
  },
  {
    icon: <FaMoneyBillWave size={32} />,
    value: "2L+",
    label: "Money Saved",
  },
  {
    icon: <FaTrophy size={32} />,
    value: "30",
    label: "Projects Handled",
  },

];

const Stats: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src={StatsBG}
        alt="Stats Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Stats */}
      <div className="relative z-10 flex flex-wrap justify-center gap-40 px-6 w-full max-w-6xl">
        {stats.map((item, index) => (
            <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
            >
              <div className="bg-white/20 rounded-full p-4 mb-2">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.value}</h3>
              <p className="text-sm text-gray-300">{item.label}</p>
            </div>
        ))}
      </div>

    </div>
  );
};

export default Stats;
