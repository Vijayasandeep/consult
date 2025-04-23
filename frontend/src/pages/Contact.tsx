import React from "react";
import GuyPhn from "../images/GuyPhn.png";

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Request a Call Back?</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise
        </p>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-6 bg-orange-500 rounded-full mx-1"></div>
          <div className="h-1 w-2 bg-orange-300 rounded-full mx-1"></div>
          <div className="h-1 w-2 bg-orange-300 rounded-full mx-1"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image - hidden on mobile */}
        <div className="hidden md:block">
          <img
            src={GuyPhn}
            alt="Business Professional"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg w-full">
          <h3 className="text-xl font-bold mb-1">Make an Appointment</h3>
          <p className="text-sm text-gray-500 mb-6 uppercase">For any inquiry</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <input
                  type="text"
                  placeholder="First"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enquiry or Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
