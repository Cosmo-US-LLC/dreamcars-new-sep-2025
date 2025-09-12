import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import logo from "../../assects/svgs/spotlogo.svg";
import spotimg from "../../assects/images/spotimg.png";
import spotsvg1 from "../../assects/svgs/spotsvg (8).svg";
import spotsvg2 from "../../assects/svgs/spotsvg (7).svg";
import spotsvg3 from "../../assects/svgs/spotsvg (1).svg";
import spotsvg4 from "../../assects/svgs/spotsvg (2).svg";
import spotsvg5 from "../../assects/svgs/spotsvg (6).svg";
import spotsvg6 from "../../assects/svgs/spotsvg (5).svg";
import spotsvg7 from "../../assects/svgs/spotsvg (4).svg";
import spotsvg8 from "../../assects/svgs/spotsvg (3).svg";
import spotsvg9 from "../../assects/svgs/spotsvg (9).svg";
import iconsnoblur from "../../assects/svgs/iconsnoblur.svg";
import cardicon from "../../assects/images/cardbtn.png";
import save from "../../assects/images/save.png";
import Button from "../../components/Button/button";

const SpotForCryptoSec = () => {
  const { t } = useTranslation();

  return (
    <div className="spotbggr py-[3rem] xs:pt-[1rem] pb-[0rem]">
      <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1250px] 2xl:space-y-[2rem] xl:space-y-[2rem] lg:space-y-[2rem] md:space-y-[3rem] sm:space-y-[2rem] space-y-[2rem] pt-[2rem] pb-[2rem] xs:py-[1rem] mx-auto bgspot spotbgmob relative z-[8] rounded-[18px] overflow-hidden">
        <div className="spotbgmob hidden xs:block xs:h-[100%] xs:max-h-[300px] xs:absolute xs:z-[3] xs:rounded-t-[18px] w-[100%]"></div>
        <div className="text-center !mt-0 xs:!mt-[30px] space-y-[20px] relative z-[10] xs:px-[15px]">
          <h3 className="text-[40px] xs:text-[26px] font-[700] leading-[130%] capitalize text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t("SpotForCryptoSec.title")}` }}>
          </h3>
          <p className="2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] text-[18px] sm:text-[18px] text-[#fff] max-w-[900px] mx-auto w-[100%]">
            {t("SpotForCryptoSec.para")}
          </p>
        </div>

        <div className=" bgspotmob xs:rounded-b-[18px] xs:!pb-[15px] xs:m-0 xs:relative xs:bottom-[90px]">
          <div className="flex xs:pt-[5rem] justify-center mb-[9rem] xs:mb-[3rem]">
            <img className="xs:max-w-[200px]" src={logo} alt="" />
          </div>
          <div className="flex justify-center ">
            <img src={spotimg} alt="" />
          </div>
          <div className="flex justify-between xs:block px-[2rem]">
            <div className="flex space-x-2 items-center xs:justify-center">
              {/* <img src={spotsvg1} alt="" />
                    <img src={spotsvg2} alt="" /> */}
              {/* <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg3} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg2} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg4} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg7} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg6} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg5} alt="" /> */}
              <img className="w-[300px] h-[50px] xs:h-[40px] xs:w-[300px]" src={iconsnoblur} alt="" />

            </div>
            <div className="flex space-x-3 xs:justify-center items-center">
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg1} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg8} alt="" />
              <img className="w-[50px] h-[50px] xs:h-[40px] xs:w-[40px]" src={spotsvg9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpotForCryptoSec;
