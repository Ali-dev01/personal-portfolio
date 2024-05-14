"use client";
import { TypeAnimation } from "react-type-animation";

const HomeSection = (): JSX.Element => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute bg-home-bg hidden sm:block brightness-50 xl:brightness-100 bg-right-top object-contain bg-no-repeat w-full h-full"></div>
      <div className="relative px-3 md:px-6 lg:px-16 mt-10 pb-2 z-10">
        <p className="text-xl">Hi, My Name is</p>
        <h1 className="tracking-wide text-5xl sm:text-7xl xl:text-8xl font-bold mt-5">
          Ali Hassan
        </h1>
        <div className="mt-5">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              500,
              "React/Next Developer",
              500,
              "Full-Stack Developer",
              500,
            ]}
            className="text-2xl text-primary-main"
            speed={75}
            repeat={Infinity}
          />
        </div>
        <p className="mt-5 text-sm sm:text-lg w-full md:w-3/4 lg:w-1/2 text-gray-300">
          An experienced full-stack developer, I design and develop services for customers of all
          sizes, specializing in creating stylish, modern websites, and crafting visually appealing
          and user-friendly interfaces and highly optimized web applications.
        </p>
        <div className="inline">
          <button className="mt-5 mb-20 bg-white px-8 py-3 rounded-md text-black font-bold border border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-95">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeSection;
