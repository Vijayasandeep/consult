import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anuragImg from "../images/anurag.jpg";
import poojaImg from "../images/pooja.jpg";
import harshithImg from "../images/harshith.jpg";
import deekshaImg from "../images/deeksha.jpg";
import about from "../images/about.jpg";
import {
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    name: "Anurag Kumar",
    role: "Director",
    img: anuragImg,
    social: {
      facebook: "https://facebook.com/harrison",
      instagram: "https://www.instagram.com/_its_anuraag?igsh=MTB5YXZvazlkbmt3ag==",
      linkedin: "https://www.linkedin.com/in/anurag-kumar-367aab244",
      mail: "mailto:harrison@example.com",
    },
  },
  {
    name: "Pooja J Patil",
    role: "Business Development",
    img: poojaImg,
    social: {
      facebook: "https://facebook.com/elizabeth",
      instagram: "https://instagram.com/",
      linkedin: "https://www.linkedin.com/in/pooja-j-patil-505598225",
      mail: "mailto:elizabeth@example.com",
    },
  },
  {
    name: "Harshith Negi",
    role: "Project Management",
    img: harshithImg,
    social: {
      facebook: "https://facebook.com/charlie",
      instagram: "https://www.instagram.com/harshit_negi_12v?igsh=MXU3cnZodmJxYjJ0cQ==",
      linkedin: "https://www.linkedin.com/in/harshit-negi-23933b232",
      mail: "mailto:charlie@example.com",
    },
  },
  {
    name: "Deeksha Jha",
    role: "Marketing & Sales",
    img: deekshaImg,
    social: {
      facebook: "https://facebook.com/lucy",
      instagram: "https://www.instagram.com/dakshhhh_j?igsh=dnFnbzM2ZG5oNHo=",
      linkedin: "https://www.linkedin.com/in/diksha-kumari-8a26aa255",
      mail: "mailto:lucy@example.com",
    },
  },
];

const About: React.FC = () => {
  return (
    <div>
      <div className="bg-[#00287a] text-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm tracking-wide uppercase mb-2">Know Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About our company</h2>
            <p className="mb-4">
              We are group of Corporate Executives with specialization in Marketing,
              Business Development, Demand Generation, Customer Services, HR and Finance.
            </p>
            <p className="mb-6">
              We offer consultancy services to Mid size organizations and startups who
              are looking to get experienced hands in enhancing their business and/or
              solve their business issues.
            </p>
            <div className="border-l-4 pl-4 border-white text-sm mb-4">
              <p className="mb-2">
                <span className="text-3xl text-white">“</span>
                True leadership in consulting isn't about having all the answers-it's about empowering teams and clients to discover what's possible beyond the obvious
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <img
                  src={anuragImg}
                  alt="Anurag"
                  className="w-20 h-20 rounded-md"
                />
                <div>
                  <p className="text-lg font-bold">Anurag Kumar</p>
                  <p className="text-lg ">Director @ ATLAST</p>
                  <p className="text-lg ">Alumni IIT Tirupati</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img
              src={about}
              alt="Teamwork"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Our Team</h2>
        <p className="text-gray-500 mb-8">Meet our leadership team</p>
        <div className="flex justify-center space-x-2 mb-14">
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="w-15 h-1 bg-orange-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <img src={member.img} alt={member.name} className="w-full h-60 md:h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                {/*<p className="text-sm text-gray-600 mb-4">*/}
                {/*  A small river named Duden flows by their place and supplies it with the necessary*/}
                {/*</p>*/}
                <div className="flex justify-center gap-4 text-gray-500">
                  {/*<a href={member.social.facebook} target="_blank" rel="noopener noreferrer">*/}
                  {/*  <FontAwesomeIcon icon={faFacebookF} className="hover:text-blue-600 transition-colors duration-200" />*/}
                  {/*</a>*/}
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition-colors duration-200" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-blue-700 transition-colors duration-200" />
                  </a>
                  {/*<a href={member.social.mail} target="_blank" rel="noopener noreferrer">*/}
                  {/*  <FontAwesomeIcon icon={faEnvelope} className="hover:text-red-500 transition-colors duration-200" />*/}
                  {/*</a>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
