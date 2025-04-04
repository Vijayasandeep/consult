import React from 'react';
import hurryUp from "../images/hurryUp.png"
const Services = () => {
    return (
        <div className='flex'>
          <div >
            <h1 className="text-6xl font-bold mt-20 ml-30 ">SERVICES</h1>
            <button className="text-4xl btn btn-xs sm:btn-sm md:btn-md relative p-6 rounded-lg border-3 border-transparent bg-white 
                bg-clip-padding before:absolute before:inset-0 before:rounded-lg 
                before:bg-gradient-to-r before:from-blue-300 before:to-blue-800
                before:z-[-1] before:m-[-2px] mb-6 mt-15 ml-40 p-9 text-blue-900">ATLAST & IRIS EDUACATION <span className='text-purple-800'> {`>`}  </span></button>
            {/* <h2 className='text-4xl border border-red-500 text-2xl mt-10 ml-40 p-5'>ATLAST & IRIS EDUACATION <span> {`>`}  </span></h2> */}
            {/* <h1 className='border border-red-500 text-2xl mt-7 ml-40 p-5'>TUITION & ALLIED LEARNING</h1>   */}
            <button className="btn btn-xs sm:btn-sm relative p-6 rounded-lg border-3 border-transparent bg-white 
                bg-clip-padding before:absolute before:inset-0 before:rounded-lg 
                before:bg-gradient-to-r before:from-blue-300 before:to-blue-800
                before:z-[-1] before:m-[-2px] mb-6  text-2xl mt-7 ml-40 text-blue-900">TUITION & ALLIED LEARNING <span className='text-purple-800'> {`>`}  </span></button>
          </div>
          <div >
            <img className='mt-30 mr-100 flex mr-10' src={hurryUp} alt="hurryUp" />
            <h1 className="bg-blue-400 p-5 pr-2 text-2xl relative rounded-lg border border-none mr-30 flex justify-center text-white mb-10">
  REGISTER BY APRIL 30 AND ENJOY 30 <br /> DAYS OF FREE HOME CLASSES !!
</h1>

            <h1 className="bg-green-600 p-5 pr-2 text-2xl relative rounded-lg border border-none mr-30 flex justify-center text-white">UPTO 30 STUDENTS EACH IN PUNE, HYDERABAD, AND DELHI FOR EXCLUSIVE CLASSES</h1>
          </div>
        </div>
    );
};

export default Services;