import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import emampimg from "../../assects/images/exmpimg.png"
import growimg from "../../assects/images/growingimg.png"
import growimgmob from "../../assects/images/growingimg.webp"




const GrowingSection = () => {
    const { t } = useTranslation();

    return (
        <div className="growingbggr">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1226px]  mx-auto 2xl:pb-[75px] xl:pb-[75px] lg:pb-[75px] md:pb-[75px] sm:pb-[00px] pb-[0px]" >
                    <div className="pl-[60px] xs:px-[20px] py-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                <div className="relative z-[1] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] max-w-[517px] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                    <h3 className="text-[46px] xs:text-[24px] font-[700] leading-[130%] text-[#fff] mr-4">The Luxury Car Rental  Industry Is Growing Fast</h3>
                   <p className="text-[22px] xs:text-[18px] font-[400] text-[#fff]">The luxury car rental market is expanding rapidly, with more people wanting to drive supercars for holidays, weddings, or simply to experience the thrill. Currently valued at over $20 billion, the market is expected to reach $30 billion by 2029. Dreamcars allows users to join this thriving industry by buying shares in luxury rental cars. This way, users can earn money from rentals without the hassle of managing or maintaining the cars. As demand for luxury car rentals continues to rise, Dreamcars offers an easy and profitable way to be part of this fast-growing market.
                   </p>

                    <div className="pt-[15px] 2xl:flex xl:flex lg:flex md:flex sm:flex flex  xs:pb-[20px] flex xs:justify-center">
                        <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[517px] py-[12px] xs:py-[8px] xs:w-[330px] xs:text-[14px] xs:mx-auto  rounded-[10px]" />
                    </div>
                </div>
                <div className="2xl:block xl:block lg:block md:block sm:hidden hidden  w-[50%] xs:w-[100%]">
                    <img src={growimg} className="" alt="" />
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block  w-[50%] xs:w-[100%]">
                    <img src={growimgmob} className="" alt="" />
                </div>
            </div>
             </div>
            </div>
    )
}
export default GrowingSection 