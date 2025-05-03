import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#2C114D] text-white text-sm px-4 md:px-16 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          ©2025. <span className="font-semibold">Atlast & Iris.</span> All Rights Reserved.
        </p>
        <div className="flex space-x-4 items-center">
          {/*<a href="#" className="flex items-center space-x-1 hover:underline">*/}
          {/*  <FaFacebookF /> <span>Facebook</span>*/}
          {/*</a>*/}
          <a href="Advisors02office@gmail.com" className="flex items-center space-x-1 hover:underline">
            <FaEnvelope /> <span>Mail</span>
          </a>
          <a href="https://www.linkedin.com/company/atlast-and-iris-consultancy/" className="flex items-center space-x-1 hover:underline">
            <FaLinkedinIn /> <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/atlast_and_iris_consultancy?igsh=MXZsa2tyaGYyN3Vjag==" className="flex items-center space-x-1 hover:underline">
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;