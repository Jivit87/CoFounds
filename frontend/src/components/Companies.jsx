import { motion } from "framer-motion";
import React from "react";
import Gizmodo from "../assets/brands/1.svg";
import Bloomberg from "../assets/brands/2.svg";
import TechCrunch from "../assets/brands/3.svg";
import WashingtonPost from "../assets/brands/4.svg";

const Companies = () => {
  const companies = [Gizmodo, Bloomberg, TechCrunch, WashingtonPost];

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0">
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-screen-lg items-center text-center w-full">
        <div className="text-muted-foreground text-[#6C6C6C] font-bold text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-7 lg:mb-8">
          Companies that hired from us
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 h-full w-6 sm:w-8 lg:w-12 bg-gradient-to-r from-background to-transparent z-10"></div>

          <div className="absolute right-0 top-0 h-full w-6 sm:w-8 lg:w-12 bg-gradient-to-l from-background to-transparent z-10"></div>

          <motion.div
            className="flex"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {companies.map((brand, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
              >
                <img
                  src={brand}
                  alt={`Company logo ${idx + 1}`}
                  className="h-8 sm:h-10 lg:h-12 object-contain opacity-80"
                  style={{ filter: "brightness(0) invert(0.4)" }}
                />
              </div>
            ))}

            {companies.map((brand, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
              >
                <img
                  src={brand}
                  alt={`Company logo ${idx + 1}`}
                  className="h-8 sm:h-10 lg:h-12 object-contain opacity-80"
                  style={{ filter: "brightness(0) invert(0.4)" }}
                />
              </div>
            ))}

            {companies.map((brand, idx) => (
              <div
                key={`third-${idx}`}
                className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
              >
                <img
                  src={brand}
                  alt={`Company logo ${idx + 1}`}
                  className="h-8 sm:h-10 lg:h-12 object-contain opacity-80"
                  style={{ filter: "brightness(0) invert(0.4)" }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
