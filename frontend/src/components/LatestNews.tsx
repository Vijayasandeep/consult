import React from "react";
import { Link } from "react-router-dom";
import business from "../images/business.jpg";
import marketing from "../images/marketing.jpg";

const newsData = [
    {
        title:
            "Solving Business Challenges: Consulting Solutions for Mid-Size Organizations and Startups",
        image: business,
        summary:
            "Discover how our expert business consultants can help streamline operations, optimize KPIs, and overcome common growth barriers.",
        link: "/services/business",
    },
    {
        title:
            "IT",
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
        summary:
            "Explore how IT transformation, automation, and digital enablement strategies can accelerate your company's scalability.",
        link: "/services/it",
    },
    {
        title:
            "Boost Your Business: How Marketing Experts Can Drive Success for Mid-Size Organizations",
        image: marketing,
        summary:
            "Learn how a strong marketing foundation, digital strategy, and branding tactics can elevate your market presence.",
        link: "/services/marketing",
    },
];

const LatestNews: React.FC = () => {
    return (
        <section className="bg-[#f8f9fc] py-16 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Latest News
            </h2>

            <div className="flex justify-center mb-10">
                <span className="w-2 h-2 bg-orange-500 rounded-full mx-0.5" />
                <span className="w-2 h-2 bg-orange-500 rounded-full mx-0.5" />
                <span className="w-2 h-2 bg-orange-500 rounded-full mx-0.5" />
            </div>

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
                        {/*<h3 className="text-lg font-semibold mb-2">{news.title}</h3>*/}
                        <p className="text-sm text-gray-300 mb-4">{news.summary}</p>
                        <Link
                            to={news.link}
                            className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded"
                        >
                            Learn more
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;
