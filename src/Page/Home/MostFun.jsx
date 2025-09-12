import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import mostfun from "../../assects/images/mostfun.png"




const MostFunSection = () => {
    const { t } = useTranslation();

    return (
        <div className="mostfunbg">
            <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] 2xl:max-w-[1250px]  xl:max-w-[1346px] lg:max-w-[1346px] md:max-w-[1346px] sm:max-w-[1346px] sm:w-[90%] w-[90%] max-w-[1346px] ml-auto 2xl:mr-auto xl:mr-0 lg:mr-auto md:mr-auto sm:mr-auto mr-auto mt-0 mb-0 py-[4rem] xs:py-[2rem]" >
                <div className="xs:p-8 xs:backdrop-blur-md xs:bg-[#d1d5db1f] xs:border-r xs:border-t xs:rounded-[23px] 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                    <div className=" 2xl:w-[43%] xl:w-[43%] lg:w-[43%]  md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-[0rem] xs:text-center sm:text-center space-y-[25px]">
                        <h3 className="text-[46px] xs:text-[26px] xs:text-center max-w-[653px] titlespan font-[700]  leading-[119.994%] text-[#fff] capitalize" dangerouslySetInnerHTML={{ __html: t('MostFunSection.title') }}></h3>
                        <p className="2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] text-[22px] sm:text-[18px]  text-[#fff] leading-[130%] font-[400] xs:text-[18px]" dangerouslySetInnerHTML={{ __html: t('MostFunSection.para') }}></p>

                        <div className="pt-[15px] max-w-[100%] w-[100%] flex xs:justify-center xs:py-[25px] xs:pt-[0px]  ">
                            <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor max-w-[600px] w-[100%] xs:mx-auto py-[12px] xs:text-[14px] rounded-[10px]" />
                        </div>
                    </div>
                    <div className=" flex justify-center items-center  2xl:w-[50%] xl:w-[50%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] xs:relative 2xl:h-[930px] xl:h-[930px] lg:h-[930px] md:h-[930px] sm:h-[auto] h-[auto]"   >
                        <div className="2xl:backdrop-blur-md xl:backdrop-blur-md !h-[100%] lg:backdrop-blur-md md:backdrop-blur-md sm:backdrop-blur-none !backdrop-blur-[1] xs:!border-none gradient-border-mask rounded-[34px] bg-[#d1d5db1f] max-h-[930px] xs:!h-[270px] xs:!bg-[#fff0] w-[100%] flex items-center">

                            <style>
                                {`.ssssss {clip-path: inset(0 18% 0 0)}`}
                            </style>
                            <img className=" w-[100%] py-4 xs:absolute xs:right-[-17%] xs:hidden" src={mostfun} alt="" />
                            <img  className="ssssss w-[100%] py-4 xs:absolute xs:right-[-17%] hidden xs:block" src={mostfun} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default MostFunSection 
