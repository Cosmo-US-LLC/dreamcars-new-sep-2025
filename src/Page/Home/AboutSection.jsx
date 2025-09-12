import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import AbCar from "../../assects/images/abcar.png"
import abcars1 from "../../assects/images/abicons (2).png"
import abcars2 from "../../assects/images/abicons (1).png"
import abcars3 from "../../assects/images/abicons (3).png"


const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <div className="Aboutsecbg xs:relative">
            <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1240px] mx-auto pb-[4rem] pt-[2rem] xs:py-[2rem] " >
                <div className=" 2xl:flex xl:flex lg:flex items-center xs:flex-col-reverse justify-between flex sm:block md:block backdrop-blur-md bg-[#d1d5db1f] relative xs:unset  rounded-[34px] pl-[60px] py-[50px] xs:p-5 xs:!pt-[3rem]">
                    <div className=" 2xl:flex xl:flex lg:flex md:flex sm:block block justify-between items-center  w-[100%] "   >
                        <div className=" 2xl:w-[100%] relative z-[1] xl:w-[100%] lg:w-[100%] md:w-[100%] max-w-[595px] sm:w-[100%] w-[100%] py-[2rem] xs:py-[0rem] xs:text-start sm:text-start  space-y-[25px]">
                            <div className="space-y-[15px]">
                                <h3 className="titlespan text-[46px] xs:text-[26px]  font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: t('AboutSection.title') }}></h3>
                                {/* <p className="text-[22px] xs:text-[18px]  xs:text-center text-[#fff]">{t('AboutSection.para1')}</p> */}
                            </div>
                            <div className="flex items-center space-x-4 xs:items-start pr-[1rem] pt-2">
                                <div className="">
                                    <img className="h-[82px] xs:h-[40px]" src={abcars1} alt="" />
                                </div>
                                <div className="w-[80%]">
                                    <h4 className="text-[22px] xs:text-[18px] text-[#fff] font-[800]">{t('AboutSection.bodytitle1')}</h4>
                                    <p className="text-[22px] xs:text-[18px] text-[#fff] font-[400]">{t('AboutSection.para2')}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 xs:items-start">
                                <div className="">
                                    <img className="h-[82px] xs:h-[40px]" src={abcars2} alt="" />
                                </div>
                                <div className="w-[80%]">
                                    <h4 className="text-[22px] xs:text-[18px] text-[#fff] font-[800]">{t('AboutSection.bodytitle2')}</h4>
                                    <p className="text-[22px] xs:text-[18px] text-[#fff] font-[400]">{t('AboutSection.para3')} </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 xs:items-start">
                                <div className="">
                                    <img className="h-[82px] xs:h-[40px]" src={abcars3} alt="" />
                                </div>
                                <div className="w-[80%]">
                                    <h4 className="text-[22px] xs:text-[18px] text-[#fff] font-[800]">{t('AboutSection.bodytitle3')}</h4>
                                    <p className="text-[22px] xs:text-[18px] text-[#fff] font-[400]">{t('AboutSection.para4')}</p>
                                </div>
                            </div>

                            <div className="pt-[25px] xs:pl-0 xs:flex xs:justify-center ">
                                <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[100%] py-[12px] xs:text-[14px] rounded-[10px]" />
                            </div>
                        </div>
                        <div className="xs:h-[360px]">
                            <img className="xs:absolute w-[100%] bottom-[-2%] left-[0%]" src={AbCar} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default AboutSection 
