"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import { IoIosMailOpen } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import CustomHeading from "@/components/custom-heading";

const cardVariants = {
  initial: {
    y: 200,
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

const Contact = (): JSX.Element => {
  const ref: any = useRef(null);
  const inView = useInView(ref, { margin: "200px" });

  return (
    <div className="bg-black px-3 md:px-6 lg:px-16 pt-20 pb-20">
      <CustomHeading title="Get In Touch" />
      <div className="grid grid-cols-12 gap-8 md:gap-16 mt-12">
        <motion.div
          variants={cardVariants}
          ref={ref}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="col-span-12 md:col-span-5"
        >
          <h1 className="text-gray-100 text-4xl font-bold tracking-wide">What's your story?</h1>
          <h2 className="text-gray-100 text-3xl font-semibold mt-2">Let's Connect</h2>
          <p className="text-gray-400 text-sm tracking-wide mt-4">
            Always available for freelancing if the right project comes along, Feel free to contact
            me.
          </p>
          <div className="mt-6">
            <div className="flex gap-5">
              <FaMapLocationDot className="text-primary-main text-2xl" />
              <p className="text-gray-200 text-md">Lahore, Pakistan</p>
            </div>
            <div className="flex gap-5 mt-5">
              <IoIosMailOpen className="text-primary-main text-2xl" />
              <p className="text-gray-200 text-md">alidev098@gmail.com</p>
            </div>
            <div className="flex gap-5 mt-5">
              <MdOutlineLocalPhone className="text-primary-main text-2xl" />
              <p className="text-gray-200 text-md">+92-312 0790 641</p>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <Link
              href="https://www.facebook.com/profile.php?id=100014061638759&mibextid=ZbWKwL"
              className="bg-[#262626] p-3 rounded-full transition-all duration-200 hover:bg-primary-main"
            >
              <FaFacebookF className="text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ali-hassan-3756041a3/"
              className="bg-[#262626] p-3 rounded-full transition-all duration-200 hover:bg-primary-main"
            >
              <FaLinkedinIn className="text-white" />
            </Link>
            <Link
              href="#"
              className="bg-[#262626] p-3 rounded-full transition-all duration-200 hover:bg-primary-main"
            >
              <FaInstagram className="text-white" />
            </Link>
            <Link
              href="https://github.com/Ali-dev01"
              className="bg-[#262626] p-3 rounded-full transition-all duration-200 hover:bg-primary-main"
            >
              <FaGithub className="text-white" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          ref={ref}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="col-span-12 md:col-span-7"
        >
          <form>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#262626] rounded-full outline-none border border-transparent focus:border focus:border-primary-main"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-[#262626] rounded-full outline-none border border-transparent focus:border focus:border-primary-main"
                />
              </div>
              <div className="col-span-12">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-[#262626] rounded-full outline-none border border-transparent focus:border focus:border-primary-main"
                />
              </div>
              <div className="col-span-12">
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-[#262626] rounded-xl outline-none border border-transparent focus:border focus:border-primary-main"
                />
              </div>
            </div>
            <button className="mt-4 text-sm rounded-md px-5 py-3 bg-primary-main border border-transparent transition-all duration-500 hover:border hover:border-primary-main hover:text-primary-main hover:bg-transparent">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
