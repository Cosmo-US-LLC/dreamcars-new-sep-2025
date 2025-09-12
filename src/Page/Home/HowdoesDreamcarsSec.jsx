import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import line from "../../assects/svgs/linesvg.svg";
import img1 from "../../assects/images/01.webp";
import img2 from "../../assects/images/2.webp";
import img3 from "../../assects/images/3.webp";
import img4 from "../../assects/images/4.webp";
import img5 from "../../assects/images/5.webp";
import img6 from "../../assects/images/6.webp";
import img7 from "../../assects/images/7.webp";

const howDoseData = [
  {
    id: 1,
    number: "01",
    para: "HowdoesDreamcarsSec.cardpara1",
    image: img1,
  },
  {
    id: 2,
    number: "02",
    para: "HowdoesDreamcarsSec.cardpara2",
    image: img1,
  },
  {
    id: 3,
    number: "03",
    para: "HowdoesDreamcarsSec.cardpara3",
    image: img1,
  },
  {
    id: 4,
    number: "04",
    para: "HowdoesDreamcarsSec.cardpara4",
    image: img1,
  },
  {
    id: 5,
    number: "05",
    para:
      "HowdoesDreamcarsSec.cardpara5",
    image: img1,
  },
  {
    id: 6,
    number: "06",
    para: "HowdoesDreamcarsSec.cardpara6",
    image: img1,
  },
  {
    id: 7,
    number: "07",
    para: "HowdoesDreamcarsSec.cardpara7",
    image: img1,
  },
];

const HowdoesDreamcarsSec = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="Howdoesbggr">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1232px] mx-auto 2xl:py-[75px] xl:py-[75px] lg:py-[75px] md:py-[75px] sm:py-[30px] py-[30px]">
        <div>
          <h3 className="2xl:text-[46px] xl:text-[46px] lg:text-[46px] md:text-[46px] sm:text-[26px] text-[26px] font-[700] text-center text-[#fff] capitalize mx-10 " dangerouslySetInnerHTML={{ __html: `${t('HowdoesDreamcarsSec.title')}` }}>
          </h3>
          <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden block justify-between items-end py-[60px] xs:py-[30px]">
            <div className="w-[50%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[15px]">
              {howDoseData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`flex items-center h-[116px] backdrop-blur-md gradient-border-mask rounded-[34px] px-[22px] py-[18px]  space-x-[20px] cursor-pointer ${activeId === item.id
                      ? "bg-[#0000008c]"
                      : "bg-[#d1d5db1f]"
                    }`}
                >
                  <h3 className="text-[61.412px] font-[900] text-[#FFC83D] leading-[130%]">
                    {item.number}
                  </h3>
                  <img src={line} alt="" />
                  <p className="text-[18px] font-[400] leading-[130%] text-[#fff]">
                    {t(item.para)}
                  </p>
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
                className="mySwiper !px-[0.3rem] xs:!px-[1rem] h-[240px]"
                navigation={true}
                modules={[Navigation, Pagination, Keyboard]}
              >
                {howDoseData.map((item) => (
                  <SwiperSlide >
                    <div
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={`flex items-center h-[210px] backdrop-blur-md gradient-border-mask rounded-[34px] px-[22px] py-[18px]  space-x-[20px] cursor-pointer ${activeId === item.id
                          ? "bg-[#0000008c]"
                          : "bg-[#d1d5db1f]"
                        }`}
                    >
                      <h3 className="text-[48px] font-[900] text-[#FFC83D] leading-[130%]">
                        {item.number}
                      </h3>
                      <img src={line} alt="" />
                      <p className="2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-[400] leading-[130%] text-[#fff]">
                        {t(item.para)}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[45%] sm:w-[100%] w-[100%] flex justify-center items-center 2xl:pb-[2rem] xl:pb-[2rem] lg:pb-[2rem] md:pb-[2rem] sm:pb-[0rem] pb-[0rem]">
              <img
                src={
                  howDoseData.find((item) => item.id === activeId)?.image
                }
                className="w-[100%]"
                alt="Active display"
              />
            </div>
          </div>
          <div>
            <p className="max-w-[589px] w-[100%] mx-auto text-center text-[16px] font-[400] text-[#fff]" >*If all shares are not sold within the requested time frame, buyers will be refunded, and they can choose to purchase another car if they wish.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowdoesDreamcarsSec;
