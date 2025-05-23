import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {VITE_URL} from "../Constants.ts";

const FooterSubscribeComponent: React.FC = () => {
  const [email, setEmail] = useState("");

  const subscribe = async (email: string) => {
    try {
      const res = await axios.post(`${VITE_URL}/api/subscribe`, { email });
      alert(res.data.message);
      setEmail(""); // Clear input on success
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email.");
      return;
    }
    subscribe(email);
  };

  return (
      <div className="bg-[#15126D] text-white py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h1 className="text-xl font-bold text-sky-400">Atlast & Iris</h1>
            <p className="text-sm mt-4">
              We are a group of Freelancers with specialization in Marketing, Business Strategy, IT,
              Engineering Solutions, HR and Finance.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-cyan-400 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-cyan-400 hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Subscription Form */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Subscribe Now</h2>
            <p className="text-sm mb-4">Don’t miss our future updates! Get Subscribed Today!</p>
            <form onSubmit={handleSubmit} className="flex rounded-full overflow-hidden max-w-md">
              <input
                  type="email"
                  placeholder="Your mail here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 text-black outline-none bg-white"
                  required
              />
              <button
                  type="submit"
                  className="bg-red-500 px-4 flex items-center justify-center"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.615 1.548l-7.5 8.25a2.25 2.25 0 01-3.27 0l-7.5-8.25a2.25 2.25 0 01-.615-1.548V6.75"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default FooterSubscribeComponent;
