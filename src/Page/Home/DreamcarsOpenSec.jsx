import React from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";
import Button from "../../components/Button/button";

const items = [
  {
    id: 1,
    city: "Dubai",
    status: "Preparations on-going",
    bgClass: "bgimg",
  },
  {
    id: 2,
    city: "Miami",
    status: "Coming Soon",
    bgClass: "bgimg2",
  },
  {
    id: 3,
    city: "Marbella (Spain)",
    status: "Coming Soon",
    bgClass: "bgimg3",
  },
];

const DreamcarsOpenSec = () => {
  const { t } = useTranslation();

  return (
    <div className="opensinbggr py-[2rem] xs:py-0 ">
      <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1240px] mx-auto">
        <div className="w-[100%] h-[100%]">
          <div className="py-[3rem] xs:py-[0rem] 2xl:space-y-[50px] xl:space-y-[50px] lg:space-y-[50px] md:space-y-[50px] sm:space-y-[50px] space-y-[25px]">
            <div>
              <h3 className="text-[46px] text-center xs:text-[24px] xs:text-center font-[700] leading-[130%] text-[#fff]"> Dreamcars Opens in </h3>
            </div>
            <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-between max-w-[1160px] mx-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`${item.bgClass} pt-[25px] px-[30px] pb-[20px] w-[100%] max-w-[364px] rounded-[10px] min-h-[491px] flex justify-between flex-col`}
                >
                  <h4 className="text-[36px] font-[700] text-[#fff] textshad max-w-[200px] w-[100%] leading-[130%]">{item.city}</h4>
                  <div className="flex justify-center">
                    <div className="px-[13px] backdrop-blur-md rounded-[7px] bg-[#d1d5db1f] py-[14px] mx-auto ">
                      <p className="text-[18px] text-[#fff] font-[500]">{item.status}</p>
                    </div>
                  </div>
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
                className="mySwiper !px-[1rem] h-[525px] flex justify-center"
                navigation={true}
                modules={[Navigation, Pagination, Keyboard]}
              >
                {items.map((item) => (
                  <SwiperSlide >
                    <div
                      key={item.id}
                      className={`${item.bgClass} pt-[25px] px-[30px] pb-[20px] w-[100%] max-w-[364px] rounded-[10px] min-h-[491px] flex justify-between flex-col`}
                    >
                      <h4 className="text-[36px] font-[700] text-[#fff] textshad max-w-[200px] w-[100%] leading-[130%]">{item.city}</h4>
                      <div className="flex justify-center">
                        <div className="px-[13px] backdrop-blur-md rounded-[7px] bg-[#d1d5db1f] py-[14px] mx-auto ">
                          <p className="text-[18px] text-[#fff] font-[500]">{item.status}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="pt-[10px]  xs:pt-[10px] flex xs:justify-center">
                <Button
                  link="#buynow"
                  text={`${t("BetaSection.btn")}`}
                  classes="font-[700] bgcolor w-[509px] xs:mx-auto py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]"
                />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
export default DreamcarsOpenSec;
