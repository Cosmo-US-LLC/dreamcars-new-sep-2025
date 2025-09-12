import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Betamob from "../../assects/images/betamob3.png"




const BetaSection = () => {
    const { t } = useTranslation();

    return (
        <div className="betabggr" id="what-is-dreamcars">
            <div className="max-w-[1240px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto py-[4rem] xs:py-[2.8rem]" >
                <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                    <div className=" flex justify-center relative items-start  2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] "   >
                        <div className="backdrop-blur-md w-[88%] m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] 2xl:block xl:block lg:block md:block sm:hidden hidden ml-0 mr-auto mt-0 mb-0 h-[500px] xs:h-[250px]  ">
                            <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block w-[80%] mx-auto">
                                <img className="" src={Beta} alt="" />
                            </div>
                        </div>
                        <img className="2xl:block xl:block lg:block md:block sm:hidden hidden absolute right-[3%] xs:right-[3%] top-[-20%] xs:top-[-15%] w-[100%]  xs:h-[320px]" src={Beta} alt="" />
                    </div>
                    
                    <div className=" 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                        <h3 className="text-[46px] xs:text-[26px] font-[700] leading-[130%] text-[#fff] xs:mx-1">The World’s First Blockchain Powered Luxury Car Trading Platform</h3>
                        <ul className="pl-5 xs:pl-2 space-y-[10px] xs:max-w-[350px] w-[100%] xs:w-[90%] mx-auto xs:hidden">
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para1')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para2')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para3')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para4')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para5')}</li>
                            {/* <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para6')}</li> */}
                        </ul>
                        
                        <ul className="pl-5 xs:pl-1 space-y-[10px] xs:max-w-[350px] w-[100%] xs:w-[95%] mx-auto hidden xs:block">
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.paras1')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.paras2')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.paras3')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.paras4')}</li>
                            <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.paras5')}</li>
                            {/* <li className="list-disc text-[22px] leading-[22px] xs:text-[18px] xs:text-left text-white">{t('BetaSection.para6')}</li> */}
                        </ul>

                        <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                            <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[483px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px] xs:mx-auto  rounded-[10px]" />
                        </div>
                    </div>
                    <div className="gradient-border-mask rounded-[34px] w-[88%] mt-[45px] xs:mb-[45px] mx-auto bg-[#d1d5db1f] gradient-border-mask 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block mt-0 mb-0 h-[500px] xs:h-[250px]  ">
                        <div className="2xl:hidden xl:hidden lg:hidden md:hidden -mt-[49px] xs:-mt-[0px] xs:pb-[20px] sm:block block w-[100%] mx-auto">
                            <img className="" src={Beta} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BetaSection 
