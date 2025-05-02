import  { useEffect, useState } from "react";

const TermsAndConditions = () => {
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
                <h1 className="text-4xl font-bold text-cyan-800 text-center mb-2">Terms & Conditions</h1>
                <p className="text-center text-gray-500 mb-8">Effective Date: 01/05/2025</p>

                <div className="space-y-8 text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">1. Acceptance of Terms</h2>
                        <p>By accessing or using our services, you agree to be bound by these Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">2. Services Offered</h2>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Marketing & Business Strategy</li>
                            <li>Information Technology</li>
                            <li>HR & Finance</li>
                            <li>Engineering Solutions</li>
                            <li>Human Consultancy</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">3. User Accounts</h2>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Maintain confidentiality of login credentials</li>
                            <li>Provide accurate, current information</li>
                            <li>You are responsible for all account activity</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">4. Payment Terms</h2>
                        <p>All payments are subject to agreement terms and are generally non-refundable.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">5. Prohibited Conduct</h2>
                        <ol className="list-decimal pl-6 space-y-1">
                            <li>Violating laws or regulations</li>
                            <li>Submitting false or harmful content</li>
                            <li>Infringing on intellectual property</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">6. Intellectual Property</h2>
                        <p>All content and branding is owned by Atlast and Iris Consultancy unless otherwise stated.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">7. Disclaimer</h2>
                        <p>Services are provided "as-is" without guarantees or warranties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">8. Limitation of Liability</h2>
                        <p>We are not liable for indirect or consequential damages related to service use.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">9. Termination</h2>
                        <p>We reserve the right to suspend accounts violating these Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">10. Governing Law</h2>
                        <p>These Terms are governed by Indian law. Jurisdiction: Pune, India.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-2">11. Contact Information</h2>
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

export default TermsAndConditions;
