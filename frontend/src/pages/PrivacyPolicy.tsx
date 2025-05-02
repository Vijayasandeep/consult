import  { useEffect, useState } from "react";

const PrivacyPolicy = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) setShowTopBtn(true);
            else setShowTopBtn(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 text-gray-800">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-4xl font-bold text-cyan-800 text-center mb-2">Privacy Policy</h1>
                <p className="text-center text-gray-500 mb-8">Effective Date: 01/05/2025</p>

                <div className="space-y-8 text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">1. Information We Collect</h2>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Full Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Portfolio and LinkedIn Profile</li>
                            <li>Geographic Location</li>
                            <li>Resume or CV</li>
                            <li>Browser and Usage Data (Cookies, IP address)</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">2. How We Use Your Information</h2>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>To provide and manage our services</li>
                            <li>To communicate updates and notifications</li>
                            <li>For recruitment and coordination</li>
                            <li>To analyze usage trends and improve performance</li>
                            <li>To comply with applicable laws and regulations</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">3. Sharing Your Information</h2>
                        <p>
                            We may share your data with trusted third parties for service delivery, analytics, and legal compliance. We do not sell your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">4. Data Security</h2>
                        <p>
                            We employ standard security practices to protect your data. However, no system is entirely immune to risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">5. Your Rights & Choices</h2>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Update or delete your account at any time</li>
                            <li>Manage cookies via browser settings</li>
                            <li>Unsubscribe from communications via provided links</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">6. Contact Information</h2>
                        <p>Email: <a href="mailto:advisors02@gmail.com" className="text-cyan-600 underline">advisors02@gmail.com</a></p>
                        <p>Phone: <a href="tel:8857042554" className="text-cyan-600 underline">8857042554</a></p>
                    </section>
                </div>
            </div>

            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-700 transition"
                >
                    ↑ Top
                </button>
            )}
        </div>
    );
};

export default PrivacyPolicy;
