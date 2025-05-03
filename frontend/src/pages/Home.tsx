import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeBGDesktop from "../images/HomeBG.jpg";
import HomeBGMobile from "../images/HomeBGMobile.png";
import Stats from "../components/Stats";
// import Testimonials from "../components/Testimonials";
import LatestNews from "../components/LatestNews";
import FooterSubscribeComponent from "../components/FooterSubcribeComponent";
// import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [bgImage, setBgImage] = useState(HomeBGDesktop);

  useEffect(() => {
    const updateBackground = () => {
      const isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint
      setBgImage(isMobile ? HomeBGMobile : HomeBGDesktop);
    };

    updateBackground(); // Set initially
    window.addEventListener("resize", updateBackground); // Update on resize

    return () => {
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative z-10 flex items-center  min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 text-white bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center sm:text-left max-w-2xl space-y-6">
          <p className="text-orange-400 text-sm uppercase tracking-wider">
            Business Consultant
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Boost productivity with <br />
            mind-power techniques
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            Hire a consultant to unlock your business potential, with insights,
            tailored solutions, and continuous growth. Consult today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 pt-2">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
              HIRE US
            </button>
            <NavLink to="/contact">
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                CONTACT US
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      {/* <Testimonials /> */}
      <Stats />
      <LatestNews />
      <FooterSubscribeComponent />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
