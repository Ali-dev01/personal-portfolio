"use client";
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

const Reviews = () => {
  const { currentScreenSize: size } = useScreenSize();

  console.log(size);

  return (
    <>
      <div className="mt-28">
        <CustomHeading title="Testimonilas" />
      </div>
      <div className="mt-16 w-full">
        <Swiper
          slidesPerView={size === "xl" || size === "lg" ? 2 : 1}
          spaceBetween={30}
          speed={800}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-[84.2vw] m-auto custom-swiper-wrapper"
        >
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Reviews;
