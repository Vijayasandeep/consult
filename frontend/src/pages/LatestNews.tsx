// import React from "react";
import { useParams } from "react-router-dom";
// import {useLocation} from "react-router-dom";

const servicesData = {
    marketing: {
        title: "Marketing Consultancy",
        tagline: "Strategic marketing solutions to elevate your brand.",
        overview:
            "Our Marketing Consultancy service helps brands connect with the right audience through comprehensive strategies, digital channels, and creative storytelling. Whether you're launching a new product or scaling existing operations, we guide you every step of the way.",
        keyServices: [
            "Brand Strategy and Identity Design",
            "Digital Marketing (SEO, Social Media, Ads)",
            "Market Research and Competitor Analysis",
            "Content Strategy and Copywriting",
            "Campaign Planning and Management",
        ],
        tools: ["Google Analytics", "Meta Ads", "SEMrush", "HubSpot", "Mailchimp", "Canva"],
    },
    it: {
        title: "IT Consultancy",
        tagline: "Tech-driven innovation to streamline your operations.",
        overview:
            "Our IT Consultancy focuses on empowering your business with cutting-edge technology solutions. From infrastructure planning to software development, we help future-proof your organization.",
        keyServices: [
            "Cloud Infrastructure Planning",
            "Custom Software Development",
            "Cybersecurity Consulting",
            "IT Project Management",
            "System Integration & Automation",
        ],
        tools: ["AWS", "Azure", "Node.js", "React", "Docker", "Jira"],
    },
    business: {
        title: "Business Strategy",
        tagline: "Data-driven insights to scale sustainably.",
        overview:
            "Our Business Strategy service is designed to align your organizational goals with long-term growth. We deliver actionable insights, help define KPIs, and design frameworks to improve efficiency and profitability.",
        keyServices: [
            "Strategic Planning & Forecasting",
            "Financial Modelling",
            "Operations Optimization",
            "Organizational Restructuring",
            "Growth Strategy Consulting",
        ],
        tools: ["Excel Modelling", "Power BI", "Notion", "Miro", "Trello"],
    },
};

const LatestNews = () => {
    // const location = useLocation();
    // const serviceKey = location.pathname.split("/").pop();

    const { key } = useParams();
    type ServiceKey = keyof typeof servicesData;

    const serviceKey = key as ServiceKey;

    const data = servicesData[serviceKey];

    if (!data) {
        return <div className="text-center text-xl mt-10">Service not found</div>;
    }

    return (
        <div className="p-6 md:p-12 max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.title}</h1>
                <p className="text-gray-600 text-lg">{data.tagline}</p>
            </div>

            {/* Overview */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{data.overview}</p>
            </section>

            {/* Key Services */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Services</h2>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-5">
                    {data.keyServices.map((service:string, index:number) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </section>

            {/* Tools */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                    {data.tools.map((tool:string, index:number) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
              {tool}
            </span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LatestNews;
