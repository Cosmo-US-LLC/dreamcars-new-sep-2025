import React from "react";
import { useTranslation } from "react-i18next";
import tabLogo from "../../assects/images/tablog.png"

import Button from "../../components/Button/button";
import tick from "../../assects/images/tick4.png";
import cross from "../../assects/images/crossx.png";
// import imgoentbl1 from "../../assects/images/ownimgbg (1).png"
// import imgoentbl2 from "../../assects/images/ownimgbg (2).png"
import imgoentbl2 from "../../assects/images/owndes (1).webp"
import imgoentbl1 from "../../assects/images/owndes (2).webp"
import imgoentbldes2 from "../../assects/images/owndes (1).png"
import imgoentbldes1 from "../../assects/images/owndes (2).webp"
const OwnersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="ownbggr">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1102px] mx-auto pt-[75px] xs:py-[2rem] space-y-[60px] xs:space-y-[25px]">
        <div className="space-y-[20px]">
          <h3 className="font-[700] titlespan text-center xs:max-w-[320px] xs:w-[100%] xs:mx-auto text-[#fff] leading-[46px] text-[46px] xs:leading-[25px] xs:text-[26px] mb-6 xs:mb-1" dangerouslySetInnerHTML={{ __html: t('OwnersSection.title') }}>
          </h3>
          <p className="2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[16px] text-[16px] leading-[25px] max-w-[891px] w-[100%] mx-auto xs:text-[18px] font-[400] text-center text-[#fff]">
            {t('OwnersSection.subTitle')}
          </p>
        </div>
        <div className="backdrop-blur-md border xs:!border-l-none xs:!border-b-none xs:!border-t xs:!border-r 2xl:rounded-[56px] xl:rounded-[56px] lg:rounded-[56px] md:rounded-[56px] sm:rounded-[24px] rounded-[24px] bg-[#d1d5db1f]">
          <div className="px-[4rem] xs:px-[2rem] xs:pb-[2rem] xs:pt-[2rem] pb-[3rem] pt-[4rem]">
            <div className="flex items-end">
              <div className="w-[40%] xs:w-[60%]  ">
                <p className="text-[29px] xs:text-[12px] font-[700] text-[#fff] py-[1rem] uppercase leading-[130%]">
                  {t('OwnersSection.subTitle2')}
                </p>
              </div>
              <div className=" w-[30%] xs:w-[30%] flex justify-center items-center ">
                <div className="flex items-center justify-center text-center w-[72%] xs:w-[100%]">
                  <img src={imgoentbl1} className="hidden xs:block  " alt="" />
                  <img src={imgoentbldes1} className=" block xs:hidden xs:h-[auto] xs:w-[100%]" alt="" />
                </div>
              </div>
              <div className=" w-[30%] xs:w-[30%] items-center flex justify-center">
                <div className="flex items-center justify-center text-center w-[100%]">
                  <img src={imgoentbl2} className=" hidden xs:block " alt="" />
                  <img src={imgoentbldes2} className=" block xs:hidden xs:h-[auto] xs:w-[100%]" alt="" />
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option1')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option2')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option3')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option4')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option5')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option6')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option7')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option8')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option9')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option13')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option10')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option11')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option12')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <img className="h-[30px] xs:h-[20px]" src={tick} alt="" />
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <img className="h-[30px] xs:h-[20px]" src={cross} alt="" />
              </div>
            </div>
            <div className="flex border border-t-0 border-gray-300">
              <div className="w-[40%] xs:w-[60%]  border-r border-gray-300">
                <p className="xs:text-[12px] xs:px-[10px] text-[16px] font-[400] text-[#fff] px-[2rem] py-[1rem] leading-[130%]">
                  {t('OwnersSection.option14')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] flex justify-center items-center  border-r border-gray-300]">
                <p className="text-[16px] xs:text-[12px] font-[600] text-center text-[#fff]">                 {t('OwnersSection.option14para1')}
                </p>
              </div>
              <div className="w-[30%] xs:w-[30%] items-center flex justify-center">
                <p className="text-[16px] xs:text-[12px] text-center text-[#fff] font-[600]	">                 {t('OwnersSection.option14para2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OwnersSection;
