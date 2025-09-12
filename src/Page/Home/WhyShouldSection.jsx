import React from "react";
import { useTranslation } from "react-i18next";

import cardimg1 from "../../assects/images/why (4).webp"
import cardimg2 from "../../assects/images/why (3).png"
import cardimg3 from "../../assects/images/why (1).png"
import cardimg4 from "../../assects/images/why (2).png"



const WhyShouldData = [
        {
                id: 1,
                icon: cardimg1,
                title: "WhyShouldSec.card1title",
                para: "WhyShouldSec.card1para",
        },
        {
                id: 2,
                icon: cardimg2,
                title: "WhyShouldSec.card2title",
                para: "WhyShouldSec.card2para",
        },
        {
                id: 3,
                icon: cardimg3,
                title: "WhyShouldSec.card3title",
                para: "WhyShouldSec.card3para",
        },
        {
                id: 4,
                icon: cardimg4,
                title: "WhyShouldSec.card4title",
                para: "WhyShouldSec.card4para",
        },

]


const WhyShouldSection = () => {
        const { t } = useTranslation();


        return (
                <div className="space-y-[6rem] py-[3rem] backgroundgrWhyShi w-[100%] mx-auto xs:py-8" >
                        <div className="">
                                <div className=" 2xl:w-[100%] backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask rounded-[34px] xl:w-[100%] lg:w-[90%] md:w-[90%]  sm:w-[90%] max-w-[1221px] w-[90%] mx-auto">
                                        <div className="2xl:px-[40px] xl:px-[40px] lg:px-[40px] md:px-[40px] sm:px-[0rem] px-[1rem] 2xl:py-[65px] xl:py-[65px] lg:py-[65px]  md:py-[65px] sm:py-[2rem] py-[2rem]  2xl:space-y-[3rem] xl:space-y-[3rem] lg:space-y-[3rem] md:space-y-[3rem] sm:space-y-[2rem] space-y-[2rem] ">
                                                <div className="space-y-[20px]">
                                                        <h3 className=" 2xl:max-w-[100%] xl:max-w-[100%] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[290px] max-w-[290px] w-[100%] m-auto 2xl:leading-[120%] xl:leading-[120%] lg:leading-[120%] md:leading-[120%] sm:leading-[110%] leading-[110%] text-center 2xl:text-[46px] xl:text-[46px] lg:text-[46px] md:text-[46px] sm:text-[26px] text-[26px] font-[700] text-[#fff]">{t('WhyShouldSec.title')}</h3>
                                                </div>
                                                <div className="2xl:flex xl:flex lg:flex md:flex sm:block block 2xl:space-x-[1.5rem] xl:space-x-[1.5rem] lg:space-x-[1.5rem] md:space-x-[1.5rem] sm:space-x-[0rem] space-x-[0rem] 2xl:space-y-[0rem] xl:space-y-[0rem] lg:space-y-[0rem] md:space-y-[0rem] sm:space-y-[1rem] space-y-[1rem] justify-center 2xl:px-[0rem] xl:px-[0rem] lg:px-[0rem] md:px-[0rem] sm:px-[2rem] px-[2rem]">
                                                        {
                                                                WhyShouldData.map((item) => (
                                                                        <div className="w-[100%] 2xl:space-y-[25px] xl:space-y-[25px] lg:space-y-[25px] md:space-y-[25px] sm:space-y-[35px] space-y-[35px]  flex flex-col items-center 2xl:rounded-[37px] xl:rounded-[37px] lg:rounded-[37px] md:rounded-[37px] sm:rounded-[18px] rounded-[18px]  py-6 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 gradient-border-mask-no-blur">
                                                                                <div className="space-y-[15px]">
                                                                                        <h4
                                                                                                className="text-center leading-[120%] text-[#fff] text-[26px] font-[600]"
                                                                                                dangerouslySetInnerHTML={{ __html: `${t(item.title)}` }}
                                                                                        />
                                                                                        <p className="text-center leading-[120%] text-[17px] font-[400] text-[#fff]">{t(item.para)}</p>
                                                                                </div>
                                                                                <div className="flex justify-center items-end min-h-[170px]">
                                                                                        <img src={item.icon} alt="" />
                                                                                </div>
                                                                        </div>
                                                                ))
                                                        }
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
export default WhyShouldSection
