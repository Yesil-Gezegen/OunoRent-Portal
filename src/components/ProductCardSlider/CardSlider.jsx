import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import png from "../../assets/png.png";
import { Link } from "react-router-dom";

const productDetail = [
  {
    id: 6,
    brand: "Samsung",
    model: "Tab S4",
    price: 1200,
    categoryName: "Tabletler",
  },
  {
    id: 1,
    brand: "Apple\n",
    model: "Iphone 15 Pro Max",
    price: 4000,
    categoryName: "Telefonlar",
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S21",
    price: 2500,
    categoryName: "Telefonlar",
  },
  {
    id: 4,
    brand: "Apple",
    model: "Iphone 14 Pro",
    price: 3200,
    categoryName: "Telefonlar",
  },
  {
    id: 5,
    brand: "Apple",
    model: "Iphone 14",
    price: 3000,
    categoryName: "Telefonlar",
  },
  {
    id: 7,
    brand: "Samsung",
    model: "Galaxy S24",
    price: 3000,
    categoryName: "Telefonlar",
  },
  {
    id: 3,
    brand: "Xioami",
    model: "S1 Active",
    price: 1000,
    categoryName: "Akıllı saatler",
  },
  {
    id: 8,
    brand: "Apple",
    model: "Watch 9",
    price: 1400,
    categoryName: "Akıllı saatler",
  },
];

const durations = [
  { months: 1, label: "1 Ay", discount: 0 },
  { months: 3, label: "3 Ay", discount: 0.4 },
  { months: 6, label: "6 Ay", discount: 0.6 },
  { months: 12, label: "12 Ay", discount: 0.8 },
];

const CardSlider = () => {
  useEffect(() => {
    const initialDurations = {};
    productDetail.forEach((pro) => {
      const initialDuration = durations.find(
        (duration) => duration.months === 12
      );
      const discountedPrice = pro.price * (1 - initialDuration.discount);
      initialDurations[pro.id] = { ...initialDuration, discountedPrice };
    });
    setSelectedDurations(initialDurations);
  }, []);

  const [selectedDurations, setSelectedDurations] = useState({});

  const handleButtonClick = (productId, duration) => {
    const productPrice = productDetail.find(
      (pro) => pro.id === productId
    ).price;
    const discountedPrice = productPrice * (1 - duration.discount);
    setSelectedDurations({
      ...selectedDurations,
      [productId]: { ...duration, discountedPrice },
    });
  };
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
    <div className="pt-12 ">
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
        className="container"
        style={{ paddingBottom: 16, paddingTop: 16 }}
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {productDetail.map((pro) => (
          <SwiperSlide
            key={pro.id}
            className="text-center bg-white flex justify-center items-center"
          >
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow">
              <div className="space-y-2 relative">
                <div className="absolute right-1">hiii</div>
                <Link to="/productdetails">
                  <img
                    className="object-cover w-full h-52"
                    src={png}
                    alt="NIKE AIR"
                  />
                </Link>

                <p className="mt-1 font-semibold line-clamp-1 text-md uppercase text-qblack">
                  {pro.model}
                </p>
              </div>
              <div className="flex justify-between space-x-2 border border-gray-200 p-0 rounded-full mx-1 my-2">
                {durations.map((duration) => (
                  <button
                    key={duration.months}
                    onClick={() => handleButtonClick(pro.id, duration)}
                    className={`w-14 h-12 ${
                      selectedDurations[pro.id] &&
                      selectedDurations[pro.id].months === duration.months
                        ? "bg-colorred rounded-full text-white shadow"
                        : "rounded-full"
                    }`}
                    id={duration.months}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                {selectedDurations[pro.id] && (
                  <p className="text-sm">
                    <span className="text-md font-semibold">
                      {selectedDurations[pro.id].discountedPrice.toFixed(2)} ₺
                    </span>
                    /aylık ödenecek tutar
                  </p>
                )}
              </div>{" "}
              <button className="px-2 py-2 mb-3 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:text-qwhite hover:bg-colorred focus:bg-gray-400 focus:outline-none">
                Sepete Ekle
              </button>
            </div>
          </SwiperSlide>
        ))}

        <div
          className={`custom-prev rounded-full shadow-lg bg-white absolute top-1/2 left-2 cursor-pointer z-10 p-1 ${
            isBeginning ? "opacity-50 cursor-default" : ""
          }`}
        >
          <IoIosArrowBack className="text-gray-700" size={25} />
        </div>
        <div
          className={`custom-next rounded-full shadow-lg bg-white absolute top-1/2 right-2 cursor-pointer z-10 p-1 ${
            isEnd ? "opacity-50 cursor-default" : ""
          }`}
        >
          <IoIosArrowForward className="text-gray-900" size={25} />
        </div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
