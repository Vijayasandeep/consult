import nezuko1 from "../images/nezuko1.webp";
import nezuko2 from "../images/nezuko2.jpeg";
import nezuko3 from "../images/nezuko3.jpeg";
import nezuko4 from "../images/nezuko4.webp";

const About = () => {
  return (
      <div className="bg-white">
        <div className="container mx-auto py-10 px-4 sm:px-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-700 mb-7 text-center">
            ABOUT US
          </h1>

          {/* Vision Section */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-blue-300 to-blue-800 mb-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="font-semibold text-center text-2xl sm:text-4xl mb-5 text-blue-900">
                VISION
              </h2>
              <p className="text-center text-gray-600 text-base sm:text-2xl">
                WE BELIEVE THAT TRUE WISDOM COMES FROM EXPERIENCE, AND THROUGH{" "}
                <br className="hidden sm:block" />
                OUR JOURNEYS, INDIVIDUALS WILL GAIN THE INTELLECT TO CREATE{" "}
                <br className="hidden sm:block" />
                LASTING SOLUTIONS.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-blue-300 to-blue-800 mb-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-center text-2xl sm:text-4xl mb-5 text-blue-900">
                MISSION
              </h3>
              <ul className="space-y-2 flex items-center justify-center flex-col text-base sm:text-2xl">
                <li>✅ <span className="ml-2 text-gray-700">TEAM</span></li>
                <li>✅ <span className="ml-2 text-blue-600">SOLUTIONS</span></li>
                <li>✅ <span className="ml-2 text-blue-600">SOLUTIONS</span></li>
                <li>✅ <span className="ml-2 text-blue-600">SOLUTIONS</span></li>
                <li>✅ <span className="ml-2 text-blue-600">SOLUTIONS</span></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="text-xl sm:text-3xl flex items-center justify-center text-blue-900 mb-8 sm:mb-13">
            .................................................................................
          </div>

          {/* Our Leaders Section */}
          <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-blue-300 to-blue-800 mb-6">
            <div className="bg-white rounded-lg p-6">
              <h1 className="text-2xl sm:text-4xl font-semibold text-center text-blue-900">
                OUR LEADERS
              </h1>

              {/* Director */}
              <div className="flex justify-center mt-6 text-black">
                <div className="avatar text-center flex flex-col items-center">
                  <div className="mask mask-squircle w-28 sm:w-40">
                    <img src={nezuko1} alt="Anurag Kumar" />
                  </div>
                  <h4 className="mt-2 font-bold text-sm sm:text-base">DIRECTOR</h4>
                  <p className="text-xs sm:text-sm">ANURAG KUMAR</p>
                </div>
              </div>

              {/* Other Leaders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="avatar text-center flex flex-col">
                  <div className="mask mask-squircle w-28 sm:w-40 mx-auto">
                    <img src={nezuko2} alt="Pooja Patel" />
                  </div>
                  <h4 className="mt-2 font-semibold text-sm">BUSINESS DEVELOPMENT MANAGER</h4>
                  <p className="text-xs">(POOJA PATEL)</p>
                  <p className="text-xs">MBA (MIT-WPU)</p>
                </div>

                <div className="avatar text-center flex flex-col">
                  <div className="mask mask-squircle w-28 sm:w-40 mx-auto">
                    <img src={nezuko3} alt="Harshit Negi" />
                  </div>
                  <h4 className="mt-2 font-semibold text-sm">PROGRAM EXECUTION MANAGER</h4>
                  <p className="text-xs">(HARSHIT NEGI)</p>
                  <p className="text-xs">BTECH (IIT TIRUPATI)</p>
                </div>

                <div className="avatar text-center flex flex-col">
                  <div className="mask mask-squircle w-28 sm:w-40 mx-auto">
                    <img src={nezuko4} alt="Nancy" />
                  </div>
                  <h4 className="mt-2 font-semibold text-sm">MARKETING AND SALES MANAGER</h4>
                  <p className="text-xs">(NANCY)</p>
                  <p className="text-xs">MASTERS (IIT MADRAS)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center py-4 text-sm sm:text-base">
          © 2025 ATLAS & IRIS. All rights reserved.
        </footer>
      </div>
  );
};

export default About;
