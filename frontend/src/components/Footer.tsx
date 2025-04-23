import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#2C114D] text-white text-sm px-4 md:px-16 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          ©2023. <span className="font-semibold">Spectamind.</span> All Rights Reserved.
        </p>
        <div className="flex space-x-4 items-center">
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <FaFacebookF /> <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <FaTwitter /> <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <FaLinkedinIn /> <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <FaDribbble /> <span>dribbble</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:underline">
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;