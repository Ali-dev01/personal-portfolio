"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import CustomHeading from "@/components/custom-heading";
import ServiceCard from "@/components/service-card";

const cardVariants = {
  initial: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: -0.7,
    },
  },
};

const MyServices = () => {
  const ref: any = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  return (
    <>
      <div className="mt-28">
        <CustomHeading title="What I do?" />
      </div>
      <motion.div
        variants={cardVariants}
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mt-16"
      >
        <div className="grid grid-cols-12 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              variants={cardVariants}
              key={item}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <ServiceCard />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div
        className="mt-20 py-2 invert bg-repeat-x"
        style={{ backgroundImage: "url(/images/border-dark.png)", backgroundSize: "auto 6px" }}
      />
    </>
  );
};
export default MyServices;
