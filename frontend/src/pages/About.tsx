import nezuko1 from "../images/nezuko1.webp";
import nezuko2 from "../images/nezuko2.jpeg";
import nezuko3 from "../images/nezuko3.jpeg";
import nezuko4 from "../images/nezuko4.webp";

const About = () => {
  return (
    <div>
      {/* Navbar */}

      {/* About Us Section */}
      <div className="container mx-auto py-10 px-10">
        <h1 className="text-5xl font-bold text-gray-700 mb-7 flex justify-center">ABOUT US</h1>

        {/* Vision Section */}
        <div
          className="relative p-10 rounded-lg border border-transparent bg-white 
 bg-clip-padding before:absolute before:inset-0 before:rounded-lg 
 before:bg-gradient-to-r before:from-blue-300 before:to-blue-800 
 before:z-[-1] before:m-[-2px] mb-10"
        >
          <h2 className="font-semibold text-center text-4xl mb-5 text-blue-900">
            VISION
          </h2>
          <p className="text-center text-gray-600 mt-2 text-3xl ">
            WE BELIEVE THAT TRUE WISDOM COMES FROM EXPERIENCE, AND THROUGH{" "}
            <br /> OUR JOURNEYS, INDIVIDUALS WILL GAIN THE INTELLECT TO CREATE{" "}
            <br /> LASTING SOLUTIONS.
          </p>
        </div>

        {/* Mission Section */}
        <div
          className="relative p-6 rounded-lg border-3 border-transparent bg-white 
                bg-clip-padding before:absolute before:inset-0 before:rounded-lg 
                before:bg-gradient-to-r before:from-blue-300 before:to-blue-800
                before:z-[-1] before:m-[-2px] mb-6"
        >
          <h3 className="font-semibold text-center text-4xl mb-5 text-blue-900 ">
            MISSION
          </h3>
          <ul className="mt-4 space-y-2 flex items-center justify-center flex-col text-2xl">
            <li className="mr-16">
              ✅ <span className="ml-2 text-gray-700">TEAM</span>
            </li>
            <li>
              ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
            </li>
            <li>
              ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
            </li>
            <li>
              ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
            </li>
            <li>
              ✅ <span className="ml-2 text-blue-600">SOLUTIONS</span>
            </li>
          </ul>
        </div>

        <div className="text-5xl flex items-center justify-center text-blue-900 mb-13">
          .........................................................................................
        </div>
        {/* Our Leaders Section */}
        <div
          className="relative p-6 rounded-lg border-3 border-transparent bg-white 
                bg-clip-padding before:absolute before:inset-0 before:rounded-lg 
                before:bg-gradient-to-r before:from-blue-300 before:to-blue-800 
                before:z-[-1] before:m-[-2px] mb-6"
        >
          <h1 className="text-4xl font-semibold text-center text-blue-900">
            OUR LEADERS
          </h1>
          <div className="flex justify-center mt-4 text-black">
            <div className="avatar text-center flex flex-col items-center">
              <div className="mask mask-squircle w-40">
                <img src={nezuko1} alt="Anurag Kumar" />
              </div>
              <h4 className="mt-2 font-bold">DIRECTOR</h4>
              <p className="text-sm">ANURAG KUMAR</p>
            </div>
          </div>

          {/* Leader Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Business Development Manager */}
            <div className="avatar text-center flex flex-col">
              <div className="mask mask-squircle w-40 mx-auto">
                <img src={nezuko2} alt="Pooja Patel" />
              </div>
              <h4 className="mt-2 font-semibold text-sm">
                BUSINESS DEVELOPMENT MANAGER
              </h4>
              <p className="text-xs ">(POOJA PATEL)</p>
              <p className="text-xs ">MBA (MIT-WPU)</p>
            </div>

            {/* Program Execution Manager */}
            <div className="avatar text-center flex flex-col">
              <div className="mask mask-squircle w-40 mx-auto">
                <img src={nezuko3} alt="Harshit Negi" />
              </div>

              <h4 className="mt-2 font-semibold text-sm">
                PROGRAM EXECUTION MANAGER
              </h4>
              <p className="text-xs ">(HARSHIT NEGI)</p>
              <p className="text-xs ">BTECH (IIT TIRUPATI)</p>
            </div>

            {/* Marketing and Sales Manager */}
            <div className="avatar text-center flex flex-col">
              <div className="mask mask-squircle w-40 mx-auto">
                <img src={nezuko4} alt="Nancy" />
              </div>
              <h4 className="mt-2 font-semibold text-sm">
                MARKETING AND SALES MANAGER
              </h4>
              <p className="text-xs text">(NANCY)</p>
              <p className="text-xs text">MASTERS (IIT MADRAS)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        © 2025 ATLAS & IRIS. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
