import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard, Pagination } from "swiper/modules";

import ambImg from "../../assects/images/amb (2).png";
import ambImg2 from "../../assects/images/amb (3).png";
import ambImg3 from "../../assects/images/amb (4).png";
import ambImg4 from "../../assects/images/amb (5).png";
import imbico from "../../assects/images/amb (1).png";
import ambx from "../../assects/images/ambX.png";
import Insta from "../../assects/images/instaamb.png";

function AmbassadorsSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="ambgebg">
        <div className="w-[80%] max-w-[1440px]  py-[3rem] xs:py-[2rem] mx-auto space-y-[50px] xs:space-y-[20px]">
          <div>
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[26px]  text-center text-[#fff] font-[700] leading-[40px] ">
            {t('Ambassadors.title')}
            </h2>
          </div>
          <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
          <Swiper
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                750: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1124: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              keyboard={true}
              spaceBetween={35}
              className="mySwiper flex justify-center !px-[2rem] h-[360px]"
              navigation={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                 <SwiperSlide>
                 <div className="ambgsgr 2xl:w-[100%] px-4 xl:w-[100%] flex justify-between flex-col px-4 lg:w-[100%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] leading-[28px] text-[#fff] font-[800] ">
                  {t('Ambassadors.name1')}
                  </h3>
                  <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.followers1')}
                </p>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.Famous1')}
                </p>
                <p className="text-[12px] text-center text-white underline">
                {t('Ambassadors.Official')}
                </p>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[100%] px-4 xl:w-[100%] flex justify-between flex-col lg:w-[100%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg2} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] leading-[28px] text-[#fff] font-[800] ">
                  {t('Ambassadors.name2')}
                  </h3>
                  <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.followers2')}
                </p>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.Famous2')}
                </p>
                <p className="text-[12px] text-center text-white underline">
                {t('Ambassadors.Official')}
                </p>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[100%] px-4 xl:w-[100%] flex justify-between flex-col lg:w-[100%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg3} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] leading-[28px] text-[#fff] font-[800] ">
                  {t('Ambassadors.name3')}
                  </h3>
                  <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.followers3')}
                </p>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.Famous3')}
                </p>
                <p className="text-[12px] text-center text-white underline">
                {t('Ambassadors.Official')}
                </p>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[100%] px-4 xl:w-[100%] flex justify-between flex-col lg:w-[100%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg4} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] leading-[28px] text-[#fff] font-[800] ">
                  {t('Ambassadors.name4')}
                  </h3>
                  <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.followers4')}
                </p>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.Famous4')}
                </p>
                <p className="text-[12px] text-center text-white underline">
                {t('Ambassadors.Official')}
                </p>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[100%] px-4 xl:w-[100%] flex justify-between flex-col lg:w-[100%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
                <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg4} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] leading-[28px] text-[#fff] font-[800] ">
                  {t('Ambassadors.name4')}
                  </h3>
                  <img className="h-[20px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.followers4')}
                </p>
                <p className="text-[12px] text-center text-white">
                {t('Ambassadors.Famous4')}
                </p>
                <p className="text-[12px] text-center text-white underline">
                {t('Ambassadors.Official')}
                </p>
              </div>
            </div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
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
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              spaceBetween={14}
              className="mySwiper flex justify-center"
              navigation={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                 <SwiperSlide>
                  <div className="ambgsgr 2xl:w-[23%] px-4 xl:w-[23%] flex justify-between flex-col px-4 lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <img className="h-[140px]" src={ambImg} alt="" />
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <h3 className="text-[26px] xs:text-[18px] xs:leading-[130%] leading-[28px] text-[#fff] font-[800] ">
                          Sofia Zamolo
                        </h3>
                        <img className="h-[20px] xs:h-[12px]" src={imbico} alt="" />
                      </div>
                      <p className="text-[12px] text-center text-white">
                        1.1M followers
                      </p>
                      <p className="text-[12px] text-center text-white">
                        Famous TV Host, Model and Actress
                      </p>
                      <p className="text-[12px] text-center text-white underline">
                        Official Announcement
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[23%] px-4 xl:w-[23%] flex justify-between flex-col lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg2} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] xs:text-[18px] xs:leading-[130%] leading-[28px] text-[#fff] font-[800] ">
                    Gino Assereto
                  </h3>
                  <img className="h-[20px] xs:h-[12px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                  691.3K followers
                </p>
                <p className="text-[12px] text-center text-white">
                  Crypto Influencer and TV Personality
                </p>
                <p className="text-[12px] text-center text-white underline">
                  Official Announcement
                </p>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[23%] px-4 xl:w-[23%] flex justify-between flex-col lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg3} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] xs:text-[18px] xs:leading-[130%] leading-[28px] text-[#fff] font-[800] ">
                    Coki Ramirez
                  </h3>
                  <img className="h-[20px] xs:h-[12px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                  970.7K followers
                </p>
                <p className="text-[12px] text-center text-white">
                  Famous Singer and Model
                </p>
                <p className="text-[12px] text-center text-white underline">
                  Official Announcement
                </p>
              </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="ambgsgr 2xl:w-[23%] px-4 xl:w-[23%] flex justify-between flex-col lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto py-[25px]  space-y-3">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img className="h-[140px]" src={ambImg4} alt="" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-[26px] xs:text-[18px] xs:leading-[130%] leading-[28px] text-[#fff] font-[800] ">
                    Riccardo Bossio
                  </h3>
                  <img className="h-[20px] xs:h-[12px]" src={imbico} alt="" />
                </div>
                <p className="text-[12px] text-center text-white">
                  1.4M followers
                </p>
                <p className="text-[12px] text-center text-white">
                  Crypto Influencer and Social Media Star
                </p>
                <p className="text-[12px] text-center text-white underline">
                  Official Announcement
                </p>
              </div>
            </div>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default AmbassadorsSection;
