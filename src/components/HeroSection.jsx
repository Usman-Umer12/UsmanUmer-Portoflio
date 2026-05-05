import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const HeroSection = () => {

  const [contactFormOpen, setConttactFormOpen ] = useState(false)
  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setConttactFormOpen(false)

  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

      {/* ✅ Left Section (Thoda Niche Kiya) */}
      <div className="z-40 xl:mb-0 mb-[20%] mt-25">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 text-white"
        >
         Fast Reliable <br />
        Web Develop
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          I deliver robust, production-ready websites and SASS Product types
          with speed and precision. Every project is backed by clean
          code, clear communication, and a commitment to getting it
          done, on time, every time. Be on Time in Websites And Professional
        </motion.p>

  <a href="/cv.pdf" download>
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1.1 }}
    transition={{
      delay: 1.6,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15,
    }}
    className="hidden md:block ml-2 mt-10 px-8 py-4 rounded-xl bg-violet-800 text-white font-bold hover:bg-purple-700 transition-all duration-500 text-lg"
  >
    Download CV
  </motion.button>
</a>
      </div>

      {/* ✅ Right Section (Spline 3D Model) */}
      <Spline
  className="absolute xl:right-[-28%] right-0 to-[-20%] lg:top-0"
  scene="https://prod.spline.design/HDZOOYq0iZXePRDH/scene.splinecode"
/>

      {/* ✅ Bottom Center Animated Down Arrow */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowDown className="text-white text-3xl opacity-70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
