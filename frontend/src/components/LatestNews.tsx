import React from "react";

const newsData = [
  {
    title:
      "Solving Business Challenges: Consulting Solutions for Mid-Size Organizations and Startups",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde16", // Replace with your actual image
    link: "#",
  },
  {
    title:
      "Unlocking Growth Potential: Consultancy Strategies for Startups and Mid-Sized Companies",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    link: "#",
  },
  {
    title:
      "Boost Your Business: How Marketing Experts Can Drive Success for Mid-Size Organizations",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee1f",
    link: "#",
  },
];

const LatestNews: React.FC = () => {
  return (
    <section className="bg-[#f8f9fc] py-16 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Latest News
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-6">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradise
      </p>

      {/* Decorative dots */}
      <div className="flex justify-center mb-10">
        <span className="w-2 h-2 bg-orange-500 rounded-full mx-0.5" />
        <span className="w-2 h-2 bg-orange-500 rounded-full mx-0.5" />
        <span className="w-2 h-2 bg-orange-500 rounded-full mx-0.5" />
      </div>

      {/* News cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {newsData.map((news, idx) => (
          <div
            key={idx}
            className="bg-[#102263] text-white rounded-xl p-5 shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={news.image}
              alt={news.title}
              className="rounded-lg mb-4 object-cover h-48 w-full shadow-md"
            />
            <h3 className="text-lg font-medium mb-4">{news.title}</h3>
            <a
              href={news.link}
              className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
