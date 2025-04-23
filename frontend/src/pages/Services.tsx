import {
    Briefcase,
    DollarSign,
    User,
    BarChart2,
    MessageSquare,
    Target,
} from "lucide-react";

const services = [
    {
        icon: <BarChart2 className="w-6 h-6 text-indigo-900" />,
        title: "Marketing Consultancy",
        description:
            "We provide expertise in marketing strategies, brand positioning, market research, and campaign development.",
    },
    {
        icon: <Briefcase className="w-6 h-6 text-indigo-900" />,
        title: "Business Development",
        description:
            "Our consultants specialize in identifying growth opportunities, forging strategic partnerships, and expanding your customer base.",
    },
    {
        icon: <User className="w-6 h-6 text-indigo-900" />,
        title: "HR Consultancy",
        description:
            "Our HR specialists provide guidance on talent acquisition, employee engagement, performance management, and organizational development.",
    },
    {
        icon: <DollarSign className="w-6 h-6 text-indigo-900" />,
        title: "Financial Advisory",
        description:
            "Our finance experts offer comprehensive financial advisory services, including financial analysis, budgeting, forecasting, and risk management.",
    },
    {
        icon: <Target className="w-6 h-6 text-indigo-900" />,
        title: "Start-up Support",
        description:
            "For startups, we provide specialized guidance tailored to their unique needs. Our experienced executives can help with business planning.",
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-indigo-900" />,
        title: "Customer Services Enhancement",
        description:
            "We offer solutions to enhance your customer service operations, focusing on improving customer satisfaction and loyalty.",
    },
];

const Services = () => {
    return (
        <section className="min-h-[18vh] bg-white px-4 py-4 text-center">
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
