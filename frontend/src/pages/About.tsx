import React from "react";
// import Image from "next/image";
// import teamImage from "@/public/teamwork.jpg"; // replace with your actual path to image

const About: React.FC = () => {
  return (
    <div className="bg-[#2F3BB6] text-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>       
          <p className="text-sm tracking-wide uppercase mb-2">
            Know Who We Are
          </p>
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
              Its an approach that the bring to gather the best financial planning top
              and the best investment management
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <img
  src="https://i.pravatar.cc/50?img=12"
  alt="Mark Adison"
                className="w-10 h-10 rounded-md"
              />
              <div>
                <p className="font-semibold">Mark Adison</p>
                <p className="text-xs text-[#FFA07A]">CEO @ MICROFOT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Teamwork"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
