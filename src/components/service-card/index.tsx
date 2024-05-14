"use client";

import { FaLaptopCode } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="bg-black rounded-xl p-8 overflow-hidden transition-all group duration-500 hover:bg-primary-main">
      <div className="relative">
        <FaLaptopCode className="text-4xl relative z-10" />
        <div className="absolute -top-16 -left-12 bg-primary-main group-hover:bg-black w-36 h-36 rounded-full" />
      </div>
      <div>
        <h4 className="text-2xl font-semibold mt-20">Web Design</h4>
        <p className="text-gray-400 group-hover:text-gray-100 text-md mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;
