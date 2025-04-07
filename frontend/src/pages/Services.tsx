import hurryUp from "../images/hurryUp.png";

const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-10 gap-8">
            {/* Left Section */}
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-4 lg:mt-20 text-center lg:text-left">
                    SERVICES
                </h1>

                <button className="text-base sm:text-lg md:text-2xl relative px-5 py-3 rounded-lg border-3 border-transparent bg-white
                    bg-clip-padding before:absolute before:inset-0 before:rounded-lg
                    before:bg-gradient-to-r before:from-blue-300 before:to-blue-800
                    before:z-[-1] before:m-[-2px] mt-10 lg:ml-20 text-blue-900 w-fit">
                    ATLAST & IRIS EDUACATION <span className='text-purple-800'>{`>`}</span>
                </button>

                <button className="text-base sm:text-lg md:text-xl relative px-5 py-3 rounded-lg border-3 border-transparent bg-white
                    bg-clip-padding before:absolute before:inset-0 before:rounded-lg
                    before:bg-gradient-to-r before:from-blue-300 before:to-blue-800
                    before:z-[-1] before:m-[-2px] mt-6 lg:ml-20 text-blue-900 w-fit">
                    TUITION & ALLIED LEARNING <span className='text-purple-800'>{`>`}</span>
                </button>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center w-full lg:w-1/2">
                <img className="w-full max-w-md lg:mt-0" src={hurryUp} alt="hurryUp" />

                <h1 className="bg-blue-400 text-white text-center text-sm sm:text-base md:text-lg px-4 py-4 rounded-lg mt-6 w-full max-w-md">
                    REGISTER BY APRIL 30 AND ENJOY <br /> 30 DAYS OF FREE HOME CLASSES !!
                </h1>

                <h1 className="bg-green-600 text-white text-center text-sm sm:text-base md:text-lg px-4 py-4 rounded-lg mt-4 w-full max-w-md">
                    UPTO 30 STUDENTS EACH IN PUNE, HYDERABAD, AND DELHI FOR EXCLUSIVE CLASSES
                </h1>
            </div>
        </div>
    );
};

export default Services;
