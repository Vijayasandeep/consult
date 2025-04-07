import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ConnectUs = () => {
    return (
        <div className="bg-gray-100 py-10 px-4 sm:px-8 relative min-h-screen">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-blue-900 mb-10">
                CONNECT WITH US
            </h2>

            {/* Map + Contact Form */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
                {/* Map */}
                <div className="w-full md:w-1/2 h-[470px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2080.4771297138896!2d78.3497224215764!3d17.445479268445336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b805b55e67%3A0x1ce21a8b8ac5f6b!2sIIIT%20Main%20Gate!5e0!3m2!1sen!2sin!4v1743955114521!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center md:text-left">
                        Send Us a Message
                    </h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Follow Us Section */}
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md text-center mb-20">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Follow Us</h3>
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="flex items-center gap-2 text-blue-700">
                        <FaFacebook size={24} />
                        <span>Facebook</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-600">
                        <FaInstagram size={24} />
                        <span>Instagram</span>
                    </div>
                    <div className="flex items-center gap-2 text-sky-500">
                        <FaTwitter size={24} />
                        <span>Twitter</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-800">
                        <FaLinkedin size={24} />
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Chat Button */}
            <a
                href="https://wa.me/919100979115" // Replace with your WhatsApp number in international format (without +)
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
            >
                <FaWhatsapp size={24} />
            </a>

            {/* Floating Phone Call CTA */}
            {/*<a*/}
            {/*    href="tel:+919100979115" // Replace with your phone number (include country code)*/}
            {/*    className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center gap-2"*/}
            {/*>*/}
            {/*    <FaPhoneAlt size={24} />*/}
            {/*    <span className="hidden sm:block">Call Us</span>*/}
            {/*</a>*/}
        </div>
    );
};

export default ConnectUs;
