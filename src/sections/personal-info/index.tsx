"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const textVariant = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariant = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const HomeSection = (): JSX.Element => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        variants={imgVariant}
        initial="initial"
        animate="animate"
        className="absolute bg-home-bg brightness-[15%] xl:brightness-100 bg-top xl:bg-right-top bg-no-repeat w-full h-full bg-contain lg:bg-auto"
      />
      <motion.div
        variants={textVariant}
        initial="initial"
        animate="animate"
        className="relative px-3 md:px-6 lg:px-16 mt-8 pb-3 z-10"
      >
        <p className="text-xl">Hi, My Name is</p>
        <h1 className="tracking-wide text-5xl sm:text-7xl xl:text-8xl font-bold mt-5">
          Ali Hassan
        </h1>
        <div className="mt-5">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              500,
              "React/Next Developer",
              500,
              "MERN Stack Developer",
              500,
            ]}
            className="text-2xl text-primary-main"
            speed={75}
            repeat={Infinity}
          />
        </div>
        <p className="mt-5 text-sm sm:text-lg w-full md:w-3/4 lg:w-1/2 text-gray-300">
          Experienced Software Engineer with a strong focus on React/Next js, Node js, and
          Typescript, creating cutting-edge Web Applications, dynamic data visualization tools and
          custom components. Adept at implementing best practices and delivering scalable,
          high-performance solutions, I continuously strive to push the boundaries of modern web
          development.
        </p>
        <div className="inline">
          <a href="/ali-hassan-SE.pdf" download>
            <button className="mt-5 mb-20 bg-primary-main px-7 py-2 rounded-md text-white font-bold border border-transparent transition-all duration-300 hover:bg-transparent hover:text-primary-main hover:border-primary-main">
              Download CV
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default HomeSection;
