import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";

import Aauaimg from "../../assects/images/aquaimg.png";
import Aauaimgmob from "../../assects/images/aquaimgmob2.webp";

const AcquiredSection = () => {
  const { t } = useTranslation();

  return (
    <div className="aqurbggr">
      <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1180px]  pt-[1rem] pb-[2rem] xs:py-[2rem] mx-auto ">
        <div className=" backdrop-blur-md rounded-[54px] xs:rounded-[24px] bg-[#d1d5db1f] w-[100%] px-[4rem] xs:px-[2rem] pt-[3rem] pb-[3rem] relative xs:unset">
          <div className="flex justify-between xs:block ">
            <div className="space-y-[12px] w-[52%] xs:w-[100%] relative">
              <h3 className="text-[46px] leading-[130%] xs:text-[26px] xs:text-center font-[700] text-[white] ">
                {t('Acquired.title')}
                {t('Acquired.title2')}{" "}
              </h3>
              <div className="space-y-[15px]">
                <p className="text-[22px] xs:text-[18px] xs:text-center font-[400] text-[#fff]">
                  {t('Acquired.para1')}
                </p>
                <p className="text-[22px] xs:text-[18px] xs:text-center font-[400] text-[#fff]">
                  {t('Acquired.para2')}
                </p>
              </div>
              <div className="pt-[15px] 2xl:block xl:block lg:block md:block sm:hidden hidden">
                <Button
                  link="#buynow"
                  text={`${t("BetaSection.btn")}`}
                  classes="font-[700] bgcolor w-[169px] xs:w-[115px] xs:h-[34px] flex justify-center items-center h-[50px] xs:text-[14px] rounded-[10px]"
                />
              </div>
            </div>
            <img src={Aauaimg} className="2xl:block xl:block lg:block md:block sm:hidden hidden absolute 2xl:max-w-[790px] xl:max-w-[790px] lg:max-w-[700px] md:max-w-[700px] sm:max-w-[300px] max-w-[550px] xs:w-[100%] xs:min-w-[240px] top-[-0%] xs:top-[50%] right-[-19%] w-[100%]" alt="" />
            <div className="xs:h-[170px] w-[50%] xs:w-[100%]">
              <img src={Aauaimgmob} className="absolute bottom-[-11%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block w-[100%] max-w-[400px]" alt="" />
            </div>
          </div>
        </div>
        <div className="pt-[75px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
          <Button
            link="#buynow"
            text={`${t("BetaSection.btn")}`}
            classes="font-[700] bgcolor maxw-[500px] w-[100%] mx-auto xs:h-[34px] flex justify-center items-center h-[50px] xs:text-[14px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};
export default AcquiredSection;
