"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import CustomHeading from "@/components/custom-heading";
import ExperienceCard from "@/components/experience-card";
import { experienceData } from "./data";

const cardVariants = {
  initial: {
    y: 80,
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 1,
    },
  },
};

const MyExperience = () => {
  const ref: any = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <CustomHeading title="Experience" />
      <motion.div
        variants={cardVariants}
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mt-14"
      >
        {experienceData.map((experience, i) =>
          i === 0 ? (
            <div key={i}>
              <ExperienceCard {...experience} />
            </div>
          ) : (
            <motion.div key={i} variants={cardVariants} className="mt-8">
              <ExperienceCard {...experience} />
            </motion.div>
          )
        )}
      </motion.div>
      <div
        className="mt-20 py-2 invert bg-repeat-x"
        style={{ backgroundImage: "url(/images/border-dark.png)", backgroundSize: "auto 6px" }}
      />
    </>
  );
};
export default MyExperience;
