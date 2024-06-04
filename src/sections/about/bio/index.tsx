"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import CustomHeading from "@/components/custom-heading";
import SocialIcon from "./social-icon";

import { LINKTYPES, socialLinks } from "./data";
import useScreenSize from "@/hooks/use-screen-size";

const imgVariant = {
  initial: {
    y: 100,
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
      staggerChildren: 0.1,
    },
  },
};

const Bio = () => {
  const ref: any = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const { currentScreenSize: size } = useScreenSize();

  return (
    <>
      <motion.div
        variants={imgVariant}
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="grid grid-cols-12 gap-8"
      >
        <motion.div className="col-span-12 lg:col-span-5 flex flex-col items-center">
          <div className="relative">
            <Image
              src="/images/user.jpg"
              alt="user"
              width={size === "sm" ? 250 : 350}
              height={size === "sm" ? 250 : 350}
              style={{
                height: size === "sm" ? "250px" : "350px",
                width: size === "sm" ? "250px" : "350px",
              }}
              className="mx-auto rounded-full border-4 border-primary-main"
            />
            {socialLinks.map((item: LINKTYPES, i: number) => (
              <div
                key={i}
                style={{
                  bottom: size === "sm" ? item.smBottom : item.bottom,
                  left: size === "sm" ? item.smLeft : item.left,
                }}
                className={`absolute`}
              >
                <SocialIcon>{item.icon}</SocialIcon>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-md text-gray-300">Full-Stack Developer</p>
            <h2 className="text-5xl font-semibold">Ali Hassan</h2>
          </div>
        </motion.div>
        <div className="col-span-12 lg:col-span-7">
          <CustomHeading title="Biography" />
          <p className="mt-16 text-gray-300">
            As a passionate and dedicated MERN stack developer, I bring 2+ years of hands-on
            experience in building dynamic and responsive web applications using React.js, Next.js
            and TypeScript. <br />
            <br /> Further i have expanded my expertise to the backend, diving deep into MERN stack,
            enabling me to build efficient server-side solutions. I thrive in collaborative
            settings, constantly seeking to innovate and deliver impactful solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-5 sm:gap-20 md:gap-30">
            <ul>
              <li className="text-lg font-bold">
                Name : <span className="font-extralight text-gray-300">&nbsp; Ali Hassan</span>
              </li>
              <li className="text-lg font-bold mt-4">
                Age : <span className="font-extralight text-gray-300">&nbsp; 27 Years</span>
              </li>
              <li className="text-lg font-bold mt-4">
                Address : <span className="font-extralight text-gray-300">&nbsp; Lahore</span>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-bold">
                Phone : <span className="font-extralight text-gray-300">&nbsp; +92-3120790641</span>
              </li>
              <li className="text-lg font-bold mt-4">
                Email :{" "}
                <span className="font-extralight text-gray-300">&nbsp; alidev098@gmail.com</span>
              </li>
              <li className="text-lg font-bold mt-4">
                Freelance : <span className="font-extralight text-gray-300">&nbsp; Available</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <div
        className="mt-20 py-2 invert bg-repeat-x"
        style={{ backgroundImage: "url(/images/border-dark.png)", backgroundSize: "auto 6px" }}
      />
    </>
  );
};
export default Bio;
