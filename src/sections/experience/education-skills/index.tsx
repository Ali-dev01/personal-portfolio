"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

import { data, skills } from "./data";
import CustomHeading from "@/components/custom-heading";

const cardVariants = {
  initial: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 1.3,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1.3,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const EducationSkills = () => {
  const ref: any = useRef(null);
  const iconRef: any = useRef(null);
  const inView = useInView(ref, { margin: "100px" });
  const iconView = useInView(iconRef, { margin: "50px" });

  return (
    <div className="mt-16">
      <CustomHeading title="Education & Skills" />
      <div className="grid grid-cols-12 gap-8 md:gap-16 mt-12">
        <div className="col-span-12 md:col-span-5">
          <motion.div
            variants={cardVariants}
            ref={ref}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="bg-grey-light rounded-xl p-4 md:p-6"
          >
            {data.map((item, i) => (
              <div key={item.title} className={`${i === 0 ? "mt-0" : "mt-6"}`}>
                <h4 className="text-lg font-semibold tracking-wider">{item.title}</h4>
                <h2 className="text-gray-300 text-md mt-1">{item.institute}</h2>
                <p className="text-gray-500 text-sm italic">{item.time}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <motion.div
            variants={iconVariants}
            ref={iconRef}
            initial="initial"
            animate={iconView ? "animate" : "initial"}
            className="flex gap-6 flex-wrap"
          >
            {skills.map((item) => (
              <motion.div variants={iconVariants} key={item.title}>
                <Image src={item.img} alt="icon" width={80} height={80} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default EducationSkills;
