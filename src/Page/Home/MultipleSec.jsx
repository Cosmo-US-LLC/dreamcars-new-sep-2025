import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel,Pagination, Keyboard } from "swiper/modules";

import { useTranslation } from "react-i18next";
import cardsvg1 from "../../assects/svgs/cardsvg (1).svg";
import cardsvg2 from "../../assects/svgs/cardsvg (2).svg";

const cardData = [
  {
    id: 1,
    title: "Best New Crypto",
    titleWidth: "max-w-[155px] min-w-[155px]",
    para:"By Coinrise, 2024"
  },
  {
    id: 2,
    title: "Best Crypto  Pre-Sale ",
    titleWidth: "max-w-[183px] min-w-[140px]",
    para:"By Coinrise, 2024"
  },
  {
    id: 3,
    title: "Best Crypto Innovation",
    titleWidth: "max-w-[155px] min-w-[150px]",
    para:"Altcoin Daily, 2024"

  },
  {
    id: 4,
    title: "Best Crypto Growth Potential",
    titleWidth: "max-w-[223px] min-w-[145px]",
    para:"Altcoin Daily, 2024"

  },
];

const MultipleSec = () => {
 

 
  return (
    <div
      id="hero"
      className="mulsecbggr pt-[1rem] pb-[2rem] xs:pb-[0rem] xs:pt-[2rem]"
    >
      <div className=" space-y-4  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1276px] mx-auto ">
        <div className="2xl:space-y-[45px]  xl:space-y-[45px] lg:space-y-4 xs:space-y-8 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
          <div className="">
            <h3 className="text-[46px] xs:text-[28px] xs:leading-[117%] text-center font-[700] text-[#fff]">
              Multiple Times Awarded
            </h3>
          </div>
          <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden flex-wrap gap-x-[24px] pb-[50px]">
            {cardData.map((item) => (
              <div className="gradient-border-mask-build-awarded bg-[#ffffff12] max-w-[293px] w-[100%] min-h-[194px] h-[100%] p-[15px] flex justify-center items-center relative">
                <img
                  src={cardsvg2}
                  className="absolute left-[5%] top-[16%]"
                  alt=""
                />
                <div>
                  <p className="text-[#FFD02F] text-[32px] text-center leading-[34px]">
                    #{" "}
                    <span className="ml-[-10px] text-[63px] font-[400]">1</span>
                  </p>
                  <h3
                    className={`text-[26px] ${item.titleWidth} w-[100%] font-[900] pt-[3px] pb-[8px] text-center text-[#fff] leading-[23.29px]`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-center items-center space-x-2">
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                    <p className="text-[14px] font-[700] text-[#FFD02F] text-center">
                      Dreamcars
                    </p>
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                  </div>
                  <p className="text-[10px] text-[#FFD02F] font-[700] text-center">
                   {item.para}
                  </p>
                </div>
                <img
                  src={cardsvg1}
                  alt=""
                  className="absolute right-[5%] top-[16%]"
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[15px]">
            <Swiper
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1124: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            pagination={true}
            keyboard={true}
            spaceBetween={14}
            className="mySwiper !px-[0.3rem] xs:!px-[1rem] h-[230px]"
            navigation={true}
            modules={[Navigation, Pagination, Keyboard]}
          >
              {cardData.map((item) => (
                 <SwiperSlide >
                 <div className="gradient-border-mask-build-awarded bg-[#ffffff12] max-w-[293px] mx-auto w-[100%] min-h-[194px] max-h-[194px] h-[100%] p-[15px] flex justify-center items-center relative">
                <img
                  src={cardsvg2}
                  className="absolute left-[5%] top-[16%]"
                  alt=""
                />
                <div>
                  <p className="text-[#FFD02F] text-[32px] text-center leading-[34px]">
                    #{" "}
                    <span className="ml-[-10px] text-[63px] font-[400]">1</span>
                  </p>
                  <h3
                    className={`text-[26px] ${item.titleWidth} w-[100%] font-[900] pt-[3px] pb-[8px] text-center text-[#fff] leading-[23.29px]`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-center items-center space-x-2">
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                    <p className="text-[14px] font-[700] text-[#FFD02F] text-center">
                      Dreamcars
                    </p>
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                  </div>
                  <p className="text-[10px] text-[#FFD02F] font-[700] text-center">
                   {item.para}
                  </p>
                </div>
                <img
                  src={cardsvg1}
                  alt=""
                  className="absolute right-[5%] top-[16%]"
                />
              </div>
                  </SwiperSlide>
              ))}
          </Swiper>
            </div>
         
    </div>
    </div>
    </div>
  );
};
export default MultipleSec;