import React from "react";
import { NavLink } from "react-router-dom";
import HomeBG from "../images/HomeBG.jpg";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import LatestNews from "../components/LatestNews";
import FooterSubscribeComponent from "../components/FooterSubcribeComponent";
// import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background image */}
      {/* <div className="absolute inset-0">
        <img
          src={HomeBG}
          alt="Business Consultant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div> */}

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HomeBG})` }}
      >
        <p className="text-orange-400 text-sm uppercase tracking-wider mb-2">
          Business Consultant
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-xl">
          Boost productivity with <br />
          mind-power techniques
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-md">
          Hire a consultant to unlock your business potential, with insights,
          tailored solutions, and continuous growth. Consult today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
      <Testimonials />
      <Stats />
      <LatestNews/>
      <FooterSubscribeComponent/>
      {/*<Footer/>*/}
    </div>
  );
};

export default Home;
