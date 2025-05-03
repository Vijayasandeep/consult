import React from 'react';
import StatsBG from "../images/StatsBG.jpg";
import { FaUserFriends, FaStar, FaMoneyBillWave } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserFriends size={28} />,
    value: "500+",
    label: "Support Given",
  },
  {
    icon: <FaStar size={28} />,
    value: "20+",
    label: "Clients Rating",
  },
  {
    icon: <FaMoneyBillWave size={28} />,
    value: "2L+",
    label: "Money Saved",
  },
];

const Stats: React.FC = () => {
  return (
    <div className="relative w-full py-12 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={StatsBG}
          alt="Stats Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Stats Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-4 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.value}</h3>
              <p className="text-sm text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
