import React, { useState } from "react";
import GuyPhn from "../images/GuyPhn.png";
import { FaWhatsapp } from "react-icons/fa6";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setFormStatus(response.data.message);

      // Clear form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    } catch (error) {
      setFormStatus("Error submitting form, please try again.");
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Request a Call Back?</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Feel free to use the form or drop us an email. Old-fashioned phone call works too.
        </p>
        <div className="flex justify-center space-x-2 mb-14 mt-8">
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="w-1 h-1 bg-orange-500 rounded-full" />
          <span className="w-15 h-1 bg-orange-500 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <img
            src={GuyPhn}
            alt="Business Professional"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        <div className="bg-white p-8 shadow-lg rounded-lg w-full">
          <h3 className="text-xl font-bold mb-1">Make an Appointment</h3>
          <p className="text-sm text-gray-500 mb-6 uppercase">For any inquiry</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enquiry or Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
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

          {formStatus && <p className="mt-4 text-center text-sm text-gray-500">{formStatus}</p>}
        </div>
      </div>
      <a
        href="https://wa.me/8421531266"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </section>
  );
};

export default Contact;
