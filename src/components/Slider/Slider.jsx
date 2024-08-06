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
      setHeight(window.innerWidth * 0.3025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axiosInstance.get("/Slider/Getactive");
        const returnedData = response.data;
        setSlider(returnedData);
        console.log("Başarılı", returnedData);
      } catch (error) {
        console.error("Slider verilerini çekerken hata oluştu:", error);
      }
    };
    fetchSliderData();
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
        {slider.map((item, index) => (
          <SwiperSlide
            key={index}
            className="text-center text-lg bg-white flex justify-center items-center"
          >
            <img
              src={`http://10.10.3.181:5244/${item.mainImageUrl}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
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
