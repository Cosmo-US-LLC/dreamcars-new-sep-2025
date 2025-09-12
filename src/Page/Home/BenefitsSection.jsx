import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import benefits1 from "../../assects/images/benficon (3).png";
import benefits2 from "../../assects/images/benficon (4).png";
import benefits3 from "../../assects/images/benficon (5).png";
import benefits4 from "../../assects/images/benficon (2).png";
import benefits5 from "../../assects/images/benficon (1).png";
import benefits6 from "../../assects/images/benficon (6).png";
import Button from "../../components/Button/button";

const BenefitData = [
  {
    id: 1,
    image: benefits1,
    titlekey: "BenefitSection.cardTitle",
    titlekey2: "BenefitSection.cardTitle2",
    subtitlekey: "BenefitSection.cardSubtitle",
  },
  {
    id: 2,
    image: benefits2,
    titlekey: "BenefitSection.cardTitle21",
    subtitlekey: "BenefitSection.cardSubtitle2",
  },
  {
    id: 3,
    image: benefits3,
    titlekey: "BenefitSection.cardTitle3",
    subtitlekey: "BenefitSection.cardSubtitle3",
  },
  {
    id: 4,
    image: benefits4,
    titlekey: "BenefitSection.cardTitle4",
    subtitlekey: "BenefitSection.cardSubtitle4",
  },
  {
    id: 5,
    image: benefits5,
    titlekey: "BenefitSection.cardTitle5",
    subtitlekey: "BenefitSection.cardSubtitle5",
  },
  {
    id: 6,
    image: benefits6,
    titlekey: "BenefitSection.cardTitle6",
    subtitlekey: "BenefitSection.cardSubtitle6",
  },
];

const BenefitSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bgbenfsecgr">
      <div className="max-w-[1221px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto space-y-[2rem] 2xl:py-[4rem] xl:py-[4rem] lg:py-[4rem] md:py-[4rem] sm:py-[2rem] py-[2rem]">
        <div className="text-center mt-4">
          <h2 className="font-[700] text-[#fff] leading-[40px] text-[40px] xs:leading-[30px] xs:text-[26px] mb-6 ">
            {t("BenefitSection.title")}
          </h2>
        </div>
        <div className="2xl:block xl:block lg:block md:block sm:block block">
          <div
            className="2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2
             sm:grid sm:grid-cols-2 grid grid-cols-1 gap-y-4 gap-x-5 "
          >
            {BenefitData.map((item, id) => (
              <div
                key={id}
                className="text-white z-[2]  px-10 py-6 space-y-3 cardbenf border border-[#fff]"
              >
                <div className="justify-center items-center 2xl:h-[49px] xl:h-[49px] lg:h-[49px] md:h-[49px] sm:h-[49px] h-[49px]">
                  <img
                    src={item.image}
                    alt=""
                    className="2xl:h-[49px] xl:h-[49px] lg:h-[49px] md:h-[49px] sm:h-[49px] h-[49px]"
                  />
                </div>
                <div className="space-y-[15px] ">
                  <h3 className=" font-[700] 2xl:text-[28px]  xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] text-[24px] tracking-[-0.5px] ">
                    {t(item.titlekey)}
                  </h3>
                  <p
                    id="howtobuy"
                    className=" font-[400] text-[17px] xs:text-[16px]  text-[#FFF]"
                  >
                    {t(item.subtitlekey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BenefitSection;
