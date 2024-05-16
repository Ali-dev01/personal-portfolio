"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import CertificateCard from "@/components/certificate-card";
import CustomHeading from "@/components/custom-heading";
import { DATATYPE, data } from "./data";

const cardVariants = {
  initial: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 1.3,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.1,
    },
  },
};

const Certificates = () => {
  const ref: any = useRef(null);
  const inView = useInView(ref, { margin: "50px" });

  return (
    <>
      <div className="mt-28">
        <CustomHeading title="Certificates" />
      </div>
      <div className="mt-16">
        <motion.div
          variants={cardVariants}
          ref={ref}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-12 gap-6"
        >
          {data.map((item: DATATYPE, i: number) => (
            <motion.div
              variants={cardVariants}
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="hover:-translate-y-2 transition-all duration-500">
                <CertificateCard data={item} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div
        className="mt-20 py-2 invert bg-repeat-x"
        style={{ backgroundImage: "url(/images/border-dark.png)", backgroundSize: "auto 6px" }}
      />
    </>
  );
};
export default Certificates;
