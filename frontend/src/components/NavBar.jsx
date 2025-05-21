import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { cn } from "./lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const menuItems = [
    { name: "Process", link: "#process" },
    { name: "Services", link: "#services" },
    { name: "Benefits", link: "#benefits" },
    { name: "Plans", link: "#plans" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      if (!visible) setVisible(true);
    } else {
      if (visible) setVisible(false);
    }
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      ref={ref}
      className="sticky inset-x-0 top-0 z-40 w-full flex justify-center"
    >
      <motion.div
        initial={{ width: "100%" }}
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "40%" : "100%",
          maxWidth: visible ? "800px" : "1111px",
          y: visible ? 20 : 0,
          borderRadius: visible ? "9999px" : "24px",
          padding: visible ? "0 16px" : "0",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1.2,
          velocity: 2,
        }}
        style={{
          minWidth: visible ? "800px" : "auto",
        }}
        className={cn(
          "relative z-40 flex justify-between items-center",
          visible ? "bg-[#131313]/90 backdrop-blur-md" : "bg-[#131313]"
        )}
      >
        <Card
          className={cn(
            "flex w-full items-center justify-between py-2 bg-transparent overflow-hidden border-b border-[#ffffff17] mx-auto relative",
            visible ? "rounded-full min-h-16" : "rounded-3xl min-h-20"
          )}
        >
          <motion.div
            animate={{
              fontSize: visible ? "1.5rem" : "1.875rem",
              marginLeft: visible ? "0.5rem" : "0.625rem",
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              mass: 1.1,
            }}
            className="font-roboto-condensed font-bold text-[#FEFEFF] whitespace-nowrap z-20"
          >
            CoFounds.
          </motion.div>

          <div className="flex md:hidden mr-4 z-20">
            <Button
              variant="ghost"
              className="p-1 text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          <motion.div
            className="hidden md:flex justify-center flex-wrap gap-1 absolute inset-0 items-center"
            onMouseLeave={() => setHovered(null)}
          >
            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative px-2 py-1"
                onMouseEnter={() => setHovered(idx)}
              >
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-[20px] bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                    }}
                  />
                )}
                <a
                  href={item.link}
                  className={`relative z-10 font-roboto-condensed text-[18px] font-normal transition-all duration-300 ease-in-out ${
                    hovered === idx ? "text-[#3434ff]" : "text-[#FEFEFF]"
                  }`}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            animate={{
              marginRight: visible ? "0.5rem" : "1.5rem",
              scale: visible ? 0.85 : 1,
            }}
            whileHover={{ scale: visible ? 0.9 : 1.05 }}
            whileTap={{ scale: visible ? 0.8 : 0.95 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              mass: 1,
            }}
            className="hidden md:block z-20"
          >
            <Button
              className={cn(
                "bg-[#3535FF] rounded-xl font-roboto-condensed font-bold text-[#FEFEFF] hover:bg-[#2a2ad1]",
                visible
                  ? "w-[180px] h-[40px] text-xl"
                  : "w-[220px] h-[50px] text-[25px]"
              )}
            >
              Join our Community
            </Button>
          </motion.div>
        </Card>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 1.2,
              }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-auto max-h-[80vh] bg-[#131313]/80 backdrop-blur-md z-40 md:hidden rounded-l-2xl shadow-2xl"
            >
              <div className="flex flex-col pt-16 pb-6 px-6">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                      }}
                      className="w-full"
                    >
                      <a
                        href={item.link}
                        className="flex font-roboto-condensed text-[#FEFEFF] text-[18px] font-normal px-2 py-2 w-full group"
                      >
                        <span className="group-hover:text-[#3434ff]">
                          {item.name}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 w-full">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="w-full h-[50px] bg-[#3535FF] rounded-xl font-roboto-condensed font-bold text-[#FEFEFF] text-xl hover:bg-[#2a2ad1]">
                      Join our Community
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
