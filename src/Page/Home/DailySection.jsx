import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Dailyimg from "../../assects/images/whitepaper.png";
// import Dailyimgmob from "../../assects/images/dailymob.png";

const DailySection = () => {
  const { t } = useTranslation();

  return (
    <div className="paprebggr" id="whitepaper">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1210px] mx-auto pt-[75px] xs:py-[2rem]">
        <div className="flex xs:flex-col-reverse items-center justify-between  xs:flex sm:block md:block xs:backdrop-blur-md xs:bg-[#d1d5db1f] xs:border-r xs:border-t xs:rounded-[23px] xs:p-8">

          <div className="w-[55%] xs:w-[100%]">
            <div className="">
              <div className=" ">
                <img className="" src={Dailyimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" 2xl:w-[34%] xl:w-[34%] lg:w-[34%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-[0rem]  space-y-[20px] xs:space-y-[10px]">
            <h3 className="text-[43px] xs:text-[26px] xs:text-center pr-4 font-[700]  leading-[130%] text-[#fff] " dangerouslySetInnerHTML={{ __html: t('WhitepaperSection.title') }}>
            </h3>
            <h5 className="text-[22px]  font-[400]  xs:text-center leading-[130%] xs:text-[18px] text-white">
              {t('WhitepaperSection.subTitle')}
            </h5>
            <div className="xs:pt-[15px]">
              <Button
                link="https://dreamcarss-organization.gitbook.io/dreamcars-whitepaper"
                text={`${t('WhitepaperSection.btn')}`}
                classes=" bgcolor h-[64px] xs:h-[40px] xs:mx-auto text-[#1C1D23] flex items-center px-[50px] xs:px-[40px] text-[18px] xs:text-[14px] font-[700] leading-[21px] xs:leading-[15px] rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default DailySection;
