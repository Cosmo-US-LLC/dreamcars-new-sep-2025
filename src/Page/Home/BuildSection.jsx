import React from "react";
import { useTranslation } from "react-i18next";

import star from "../../assects/images/Star.png";
import buldimgmib from "../../assects/images/buldimgmob.png";
// import licimg3 from "../../assects/images/licimg (3).png";
import Button from "../../components/Button/button";

const BuildSection = ({ participants }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#000]">
      <div className="buildbgimg 2xl:w-[100%] xl:w-[94%] lg:w-[90%] rounded-[60px]  md:w-[90%] sm:w-[90%] w-[90%] mx-auto max-w-[1240px] relative">
        <div className=" gradient-border-mask-build rounded-[60px] bg-[#d1d5db1f] xs:p-8  space-y-[2rem] xs:space-y-[1rem] py-[3rem] px-[3rem] xs:py-[2rem] w-[100%] ">
          <div>
            <h3 className="text-[46px] xs:text-[26px] xs:text-center font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: t('DreamSection.title') }}></h3>
          </div>
          <div className="space-y-[25px] xs:space-y-[15px] max-w-[563px] xs:max-w-[100%] w-[100%]">
            <p className="text-[20px] xs:text-center font-[400] xs:text-[18px] xs:leading-[normal] text-white" dangerouslySetInnerHTML={{ __html: t('DreamSection.para') }}>
            </p>
          </div>
          <div className="flex xs:justify-center xs:mx-auto trustbg max-w-[270px] xs:max-w-[200px] py-3 px-2 items-center space-x-2">
            <div className="flex space-x-[1px]">
              <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
              <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
              <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
              <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
              <img className="h-[22px] xs:h-[17px] xs:w-[17px] w-[22px]" src={star} alt="" />
            </div>
            <p className="text-[15px] font-[500] pt-[3px] xs:text-[10px] text-[#fff]">{t('DreamSection.Trusted')} <span className="font-[600] font-[Poppins]">{participants ? participants : 0}+</span> </p>
          </div>
          <div className="xs:flex xs:justify-center relative z-[1]">
            <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="flex items-center justify-center font-[700] bgcolor w-[563px] xs:max-w-[563px] xs:w-[100%] xs:mx-auto xs:h-[34px] py-[12px] xs:text-[14px] rounded-[10px]" />
          </div>
          <div className="2xl:hidden h-[300px] xl:hidden lg:hidden md:hidden sm:block block">
            <img className="absolute left-[0%] rounded-b-[60px] m-[2px] !pr-[4px] w-[100%] bottom-[0%]" src={buldimgmib} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuildSection;
