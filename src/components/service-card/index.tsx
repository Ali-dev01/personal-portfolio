"use client";

import { FaLaptopCode } from "react-icons/fa";

interface Props {
  title: string;
  desc: string;
}

const ServiceCard = (props: Props) => {
  const { title, desc } = props;
  return (
    <div className="bg-black min-h-[405px] rounded-xl p-8 overflow-hidden transition-all group duration-500 hover:bg-primary-main">
      <div className="relative">
        <FaLaptopCode className="text-4xl relative z-10" />
        <div className="absolute -top-16 -left-12 bg-primary-main group-hover:bg-black w-36 h-36 rounded-full" />
      </div>
      <div>
        <h4 className="text-xl font-thin mt-16">{title}</h4>
        <p className="text-gray-400 group-hover:text-gray-100 text-sm mt-3">{desc}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
