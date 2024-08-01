import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import png from "../../assets/png.png";

const CardSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperInstance) {
      handleSlideChange(swiperInstance);
    }
  }, [swiperInstance]);

  return (
    <div className="pt-12">
      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="container px-6"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <SwiperSlide
            key={i}
            className="text-center bg-white flex justify-center items-center"
          >
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  ürün adı
                </h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quos quidem sequi illum facere recusandae voluptatibus
                </p>
              </div>

              <img
                className="object-cover w-full h-48 mt-2"
                src={png}
                alt="NIKE AIR"
              />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">$129</h1>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          className={`custom-prev duration-300 rounded-full hover:bg-colorred bg-white absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10 hidden md:block p-1 ${
            isBeginning ? "opacity-50" : ""
          }`}
        >
          <IoIosArrowBack className="text-red-600 hover:text-white" size={25} />
        </div>
        <div
          className={`custom-next duration-300 rounded-full hover:bg-colorred bg-white absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10 hidden md:block p-1 ${
            isEnd ? "opacity-50" : ""
          }`}
        >
          <IoIosArrowForward
            className="text-red-600 hover:text-white"
            size={25}
          />
        </div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
