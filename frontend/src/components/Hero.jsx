import { Button } from "@/components/ui/button";
import React from "react";
import NavBar from "./NavBar";
import star from "../assets/Star.svg";
import broken from "../assets/broken.svg";
import Companies from "./Companies";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-background flex flex-col items-center w-full overflow-x-hidden relative">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={star}
          alt="Star background"
          className="absolute top-0 left-0 w-full h-[45%] object-cover object-bottom brightness-150 scale-150 origin-top"
          animate={{
            scale: [1.5, 1.55, 1.5],
            opacity: [1, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="w-full max-w-[1440px] relative pt-6 px-4 sm:px-6 lg:px-4 z-10">
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-8 mt-3 sm:mt-4 lg:mt-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavBar />
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center max-w-[702px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-[21px] mt-[80px] sm:mt-[120px] lg:mt-[150px] max-w-[702px]">
            <motion.div
              className="w-[200px] sm:w-[230px] lg:w-[250px] h-[30px] mb-4 bg-[#4f4f5445] rounded-full border border-[#3434ff33] shadow-[0px_4px_200px_#3434ff] flex items-center justify-center"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <p
                className="font-bold text-[#FEFEFF] text-sm sm:text-base leading-7 whitespace-nowrap px-2"
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                You Build. We Back You.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mb-[20px] sm:mb-[25px] lg:mb-[30px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="font-roboto-condensed text-center sm:text-start sm:ml-[50px] lg:ml-[100px] leading-[40px] sm:leading-[60px] lg:leading-[80px] tracking-[0] font-bold text-foreground text-[32px] sm:text-[60px] lg:text-[80px]"
              style={{
                fontFamily:
                  "'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Hiring is
              </motion.span>
              <motion.span
                className="relative inline-block mx-1 sm:mx-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <div className="relative">
                  <motion.img
                    src={broken}
                    className="w-auto h-[30px] sm:h-[50px] lg:h-auto"
                    alt="broken"
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  />
                </div>
              </motion.span>
              <br />
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                We are to fix it
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            className="w-full mb-6 sm:mb-8 lg:mb-10 text-[#9b9ba9] font-bold text-muted-foreground text-sm sm:text-base lg:text-lg leading-[20px] sm:leading-[24px] lg:leading-[28px] px-4 sm:px-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Get hired fast through Proof of Work and Community.
            <br /> No more resumes lost in the void. Let your skills speak
            louder than your degree.
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-[40px] w-full px-4 sm:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="w-full sm:w-[183px] h-[50px] sm:h-[59px] bg-[#3535FF] rounded-[50px] font-bold text-[#FEFEFF] text-base sm:text-lg hover:bg-primary/70">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                className="w-full sm:w-[300px] lg:w-[345px] h-[50px] sm:h-[59px] bg-[#232325] rounded-[50px] font-bold text-foreground text-base sm:text-lg hover:bg-muted/40"
              >
                Explore Proof of Work Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Companies />
        </motion.div>

        <motion.div
          className="flex justify-center mb-[40px] sm:mb-[50px] lg:mb-[60px] mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            className="w-[120px] sm:w-[135px] lg:w-[147px] h-[40px] sm:h-[42px] lg:h-[43px] bg-[#1A1A1A] rounded-[20px] border border-muted font-normal text-[#FEFEFF] text-base sm:text-lg hover:bg-muted/40"
          >
            Who We Are
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
