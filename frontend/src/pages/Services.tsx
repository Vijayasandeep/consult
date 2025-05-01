import {
    Briefcase,
    User,
    BarChart2,
    MessageSquare,
    Target,
} from "lucide-react";
import {GrTechnology} from "react-icons/gr";

const services = [
    {
        icon: <BarChart2 className="w-6 h-6 text-indigo-900" />,
        title: "Marketing Consultancy",
        description:
            "We provide expertise in marketing strategies, brand positioning, market research, and campaign development.",
    },
    {
        icon: <GrTechnology className="w-6 h-6 text-indigo-900" />,
        title: "IT Consultancy",
        description:
            "We provide innovative IT solutions, robust cybersecurity, software development, tech support, and data management for business growth.",
    },
    {
        icon: <Briefcase className="w-6 h-6 text-indigo-900" />,
        title: "Business Strategy",
        description:
            "Our consultants specialize in identifying growth opportunities, forging strategic partnerships, and expanding your customer base.",
    },
    {
        icon: <User className="w-6 h-6 text-indigo-900" />,
        title: "HR & Finance",
        description:
            "We empower businesses through integrated HR and finance solutions—optimizing talent, streamlining operations, and aligning people and capital strategies to drive sustainable growth and success.",
    },

    {
        icon: <Target className="w-6 h-6 text-indigo-900" />,
        title: "Engineering Solutions",
        description:
            "We provide innovative engineering solutions, design support, project management, technical consulting, prototyping, and sustainable development to drive efficiency and achieve project success.",
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-indigo-900" />,
        title: "Human Consultancy",
        description:
            "We enhance human efficiency through wisdom-led guidance, fostering skill development and professional growth to build stronger, future-ready individuals",
    },
];

const Services = () => {
    return (
        <section className="min-h-[calc(100vh-18vh)] bg-white px-4 py-4 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">Services</h2>
                <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg mb-10">
                    We offer customized solutions to satisfy individuals and businesses, including financial services and branding. Our expert team ensures excellent customer satisfaction.
                </p>

                <div className="flex justify-center space-x-2 mb-14">
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    <span className="w-15 h-1 bg-orange-500 rounded-full" />
                </div>

                {/* Grid Container with Bigger Cards */}
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 hover:shadow-lg transition p-6 rounded-xl flex items-start space-x-4 text-left h-full"
                        >
                            <div className="p-3 bg-indigo-100 rounded-full shrink-0">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-900 text-lg mb-1">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
