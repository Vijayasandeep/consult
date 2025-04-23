import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Elizabeth Sofia",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    rating: 5,
    text: "Behind the word mountains, far from the countries Vokalia and top consonantia, there live the blind the texts Separated.",
  },
  {
    name: "Jillian J. Dooley",
    role: "WordPress Dev.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
    text: "Behind the word mountains, far from the countries Vokalia and top consonantia, there live the blind the texts Separated.",
  },
  {
    name: "Freda B. Walker",
    role: "WordPress Dev.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    text: "Behind the word mountains, far from the countries Vokalia and top consonantia, there live the blind the texts Separated.",
  },
  {
    name: "Jane Doe",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    rating: 5,
    text: "Creative energy comes from within. Great service and support from the team!",
  },
  {
    name: "Tom Hardy",
    role: "Backend Dev.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
    text: "Reliable work and great communication. Loved working with them!",
  },
  {
    name: "Angela Cruz",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "Helped us elevate our digital experience. Wonderful testimonial setup!",
  },
  {
    name: "New Person",
    role: "Intern",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    rating: 5,
    text: "Awesome experience overall, learned a lot from the team!",
  },
];

const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage((prev) => (prev + newDirection + totalPages) % totalPages);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval); // Clean up
  }, [page]); // Re-run interval when page changes

  const currentSlides = testimonials.slice(
    page * perPage,
    page * perPage + perPage
  );

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const centerClass =
    currentSlides.length === 1
      ? "justify-center"
      : "justify-center md:justify-between";

  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </p>

      <div className="relative overflow-hidden h-[230px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            className={`flex flex-col md:flex-row ${centerClass} gap-6 absolute w-full`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            {currentSlides.map((t, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-xl p-6 pt-10 w-full max-w-sm mx-auto"
              >
                <div className="absolute top-0 right-0 bg-blue-500 text-white p-3 rounded-bl-xl">
                  <FaQuoteRight />
                </div>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-white object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">{t.name}</h3>
                <p className="text-gray-400 text-sm">{t.role}</p>
                <div className="flex justify-center mt-3 mb-4 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{t.text}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
          onClick={() => paginate(-1)}
        >
          <MdArrowBackIos />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
          onClick={() => paginate(1)}
        >
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > page ? 1 : -1);
              setPage(i);
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === page ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
