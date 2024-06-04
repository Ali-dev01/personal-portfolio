"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import CustomHeading from "@/components/custom-heading";
import ReviewCard from "@/components/review-card";
import useScreenSize from "@/hooks/use-screen-size";
import "./styles.css";
import { reviewData } from "./data";

const cardVariants = {
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

const Reviews = () => {
  const { currentScreenSize: size } = useScreenSize();
  const ref: any = useRef(null);
  const inView = useInView(ref, { margin: "50px" });

  return (
    <>
      <div className="mt-28">
        <CustomHeading title="Testimonilas" />
      </div>
      <motion.div
        variants={cardVariants}
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mt-16"
      >
        <Swiper
          slidesPerView={size === "xl" || size === "lg" ? 2 : 1}
          spaceBetween={30}
          speed={800}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-[86vw] md:w-[83vw] m-auto custom-swiper-wrapper"
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review.name}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};
export default Reviews;
