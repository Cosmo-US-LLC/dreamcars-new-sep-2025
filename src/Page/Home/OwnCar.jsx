import React from "react";
import { useTranslation } from "react-i18next";

import ownimgbg from "../../assects/images/owncarimgbg.png";
import ownimgbg2 from "../../assects/images/cardes.png";
import ownimgbgmob from "../../assects/images/owncarimgbg.webp";

import licimg2 from "../../assects/images/licimg (2).png";
import licimg3 from "../../assects/images/licimg (3).png";
import Button from "../../components/Button/button";

const OWnCarSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative  ">
      <div className="bg-[#000000a1]  relative z-[4] xs:py-[1rem]">
        <div className="max-w-[1240px] 2xl:w-[100%]  xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto space-y-[2rem] xs:space-y-[1rem] pt-[3rem] pb-[4rem] xs:py-[2rem]  xs:bg-[#d1d5db1f] gradient-border-mask-own xs:rounded-[34px] xs:pb-0  xs:mb-[20px] xs:px-4 overflow-hidden">
          <div>
            <h3 className="text-[46px] xs:text-[26px] xs:text-center font-[700] leading-[130%] text-[#fff]">{t('OwnCarSection.mainTitle')}<br /> {t('OwnCarSection.mainTitle2')}</h3>
          </div>
          <div className="space-y-[25px] max-w-[525px] xs:max-w-[100%] w-[100%]">
            {/* <p > </p> */}
            <p className="text-[20px] xs:text-[18px] xs:text-center font-[400] leading-[130%] text-white paraOwn" dangerouslySetInnerHTML={{ __html: t('OwnCarSection.para1') }}></p>
            <p className="text-[20px] xs:text-[18px] xs:text-center font-[400] leading-[130%] text-white paraOwn" dangerouslySetInnerHTML={{ __html: t('OwnCarSection.para2') }}></p>
            <p className="text-[20px] xs:text-[18px] xs:text-center font-[400] leading-[130%] text-white" dangerouslySetInnerHTML={{ __html: t('OwnCarSection.para3') }}></p>
            <p className="text-[20px] xs:text-[18px] xs:text-center font-[400] leading-[130%] text-white" dangerouslySetInnerHTML={{ __html: t('OwnCarSection.para4') }}></p>
          </div>
          <div className=" w-[100%] pt-[15px] relative z-[4]">
            <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor max-w-[534px] !w-[100%] xs:w-[100%]  py-[12px] xs:text-[14px] rounded-[10px]" />
          </div>
          <div className="hidden xs:flex xs:h-[260px]  justify-center">
            <img className="absolute top-[69%] z-[-1] " src={ownimgbgmob} alt="" />
          </div>
        </div>
      </div>
      <div className="xs:hidden">
        <img className="absolute top-[20%] z-[1] right-[0%]" src={ownimgbg} alt="" />
      </div>
    </div>
  );
};
export default OWnCarSection;
