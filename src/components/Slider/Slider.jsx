import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { axiosInstance } from "../../helpers/axios/data";

export default function Slider() {
  const [height, setHeight] = useState("auto");
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth * 0.3625);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slider = async () => {
      try {
        const response = await axiosInstance.get("/Slider");
        const returnedData = response.data;
        setSlider(returnedData);
        console.log("success", returnedData);
      } catch {
        (error) => {
          console.error(error);
        };
      }
    };
    slider();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Autoplay]}
        className="w-full"
        style={{ height }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {/* {slider.map((item, index) => (
          <SwiperSlide key={index} className="text-center text-lg bg-white flex justify-center items-center">
          <img
            src={item.imgUrl}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        ))} */}

        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img
            src="https://jpeg.org/images/jpeg-home.jpg"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img
            src="https://www.menucool.com/slider/prod/image-slider-2.jpg"
            alt="2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img
            src="https://www.menucool.com/slider/prod/image-slider-5.jpg"
            alt="2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img
            src="https://www.menucool.com/slider/prod/image-slider-3.jpg"
            alt="2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center">
          <img
            src="https://www.menucool.com/slider/prod/image-slider-1.jpg"
            alt="2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <div className="custom-prev bg-[#F38A7B] text-white p-7 rounded-full absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 hover:bg-colorred transition-colors duration-500 hidden md:block">
          <BsArrowLeft
            className="absolute left-5 bottom-0 text-black"
            size={52}
          />
        </div>
        <div className="custom-next bg-[#F38A7B] text-white p-7 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 hover:bg-colorred transition-colors duration-500 hidden md:block">
          <BsArrowRight
            className="absolute right-5 bottom-0 text-black"
            size={52}
          />
        </div>
      </Swiper>
    </>
  );
}
