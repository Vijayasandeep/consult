import React from "react";

const teamMembers = [
  {
    name: "Harrison",
    role: "WordPress Dev.",
    img: "https://i.pravatar.cc/300?img=1",
  },
  {
    name: "Elizabeth Sofia",
    role: "WordPress Dev.",
    img: "https://i.pravatar.cc/300?img=2",
  },
  {
    name: "Charlie Cooper",
    role: "WordPress Dev.",
    img: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Lucy Evelyn",
    role: "WordPress Dev.",
    img: "https://i.pravatar.cc/300?img=4",
  },
];

const About: React.FC = () => {
  return (
    <div>
<div className="bg-blue-400 text-white px-6 py-12 md:py-20">
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
                  <p className="text-xs text-red-600">CEO @ MICROFOT</p>
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

      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Our Team</h2>
        <p className="text-gray-500 mb-8">Meet our creative team</p>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-6 bg-orange-500 rounded-full mx-1"></div>
          <div className="h-1 w-2 bg-orange-300 rounded-full mx-1"></div>
          <div className="h-1 w-2 bg-orange-300 rounded-full mx-1"></div>
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
                <p className="text-sm text-gray-600 mb-4">
                  A small river named Duden flows by their place and supplies it with the necessary
                </p>
                <div className="flex justify-center gap-4">
                  <i className="fab fa-facebook-f text-gray-400 hover:text-blue-600"></i>
                  <i className="fab fa-twitter text-gray-400 hover:text-blue-400"></i>
                  <i className="fab fa-linkedin-in text-gray-400 hover:text-blue-700"></i>
                  <i className="fab fa-youtube text-gray-400 hover:text-red-600"></i>
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
