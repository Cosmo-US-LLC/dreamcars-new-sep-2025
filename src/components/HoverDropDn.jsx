import React from "react";


import ret from "../assects/images/rateg.svg"
import HDicon from "../assects/images/hvdpicon (1).png"
import HDicon2 from "../assects/images/hvdpicon (2).png"
import HDicon3 from "../assects/images/hvdpicon (3).png"
import Xicon1 from "../assects/svgs/xicon (1).svg"
import Xicon2 from "../assects/svgs/xicon (2).svg"
import Xicon3 from "../assects/svgs/xicon (3).svg"
import Xicon4 from "../assects/svgs/xicon (4).svg"
import Xicon5 from "../assects/svgs/xicon (5).svg"

import { useTranslation } from "react-i18next";
import i18n from "i18next";



const HoverDropDn = ({ onLanguageChange, locales }) => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    };
    const handleLangSelection = (locale) => {
        // When a language is selected, pass its data to the parent component
        const selectedLang = locales[locale];
        onLanguageChange(locale);
    };
    return (
        <div className="p-8 xs:p-3 navpopbggr rounded-[20px] !font-[Lato]">
            <div className="relative navpopbggr hovdrobr rounded-[20px] h-[500px] xs:h-[370px]  xs:overflow-scroll xs:py-3 pt-12 flex flex-col justify-between" >
                {/* <img className="xs:hidden w-[40px] absolute -top-[3.5%] right-[19%]" src={ret} alt="" /> */}
                <div className=" px-12 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-around ">
                    {/* <div className="space-y-[35px]">
                        <div>
                            <h3 className="text-[20px] font-[Lato]  uppercase font-[700] text-[#fff]">{t('main.hoverDropDn-title1')}</h3>
                        </div >
                        <div className="flex space-x-4 items-center">
                            <img className="w-[42px] h-[42px]" src={HDicon} alt="" />
                            <div className="">
                                <a href="/" >
                                    <h3 className=" text-[22px] text-[#fff] uppercase leading-[20px] font-[700]">{t('main.hoverDropDn-subTitle1')}</h3>
                                    <p className="text-white">{t('main.hoverDropDn-para1')}</p>
                                </a>
                            </div>

                        </div>
                        <div className="flex space-x-4 items-center">
                            <img className="w-[42px] h-[42px]" src={HDicon3} alt="" />
                            <div className="">
                                <a href="/" >
                                    <h3 className=" text-[22px] text-[#fff] uppercase leading-[20px] font-[700]">{t('main.hoverDropDn-subTitle1')}</h3>
                                    <p className="text-white">{t('main.hoverDropDn-para2')}</p>
                                </a>
                            </div>

                        </div>
                        <div className="flex space-x-4 items-center">
                            <img className="w-[42px] h-[48px]" src={HDicon2} alt="" />
                            <div className="">
                                <a href="/">
                                    <h3 className=" text-[22px] text-[#fff] uppercase leading-[20px] font-[700]">{t('main.hoverDropDn-subTitle2')}</h3>
                                    <p className="text-white">{t('main.hoverDropDn-para3')}</p>
                                </a>
                            </div>

                        </div>

                    </div > */}
                    <div className="space-y-[35px]">
                        <div>
                            <h3 className="text-[20px]  font-[700] uppercase text-[#fff]">{t('main.hoverDropDn-title2')}</h3>
                        </div>
                        <div className="">
                            <a target="_blank" href="https://twitter.com/dreamcars_bsc">
                                <div className="pb-[22px] flex items-center space-x-4">
                                    <img className="w-[20px]" src={Xicon4} alt="" />
                                    <p className="text-[16px] text-[#fff] font-[500] ">{t('main.hoverDropDn-title2-para1')}</p>
                                </div>
                            </a>
                            <a target="_blank" href="">
                                <div className="pb-[22px] flex items-center space-x-4">
                                    <img className="w-[20px]" src={Xicon3} alt="" />
                                    <p className="text-[16px] text-[#fff] font-[500] "> {t('main.hoverDropDn-title2-para2')}</p>
                                </div>
                            </a>

                            <a target="_blank" href="https://www.instagram.com/dreamcars_bsc/">
                                <div className="pb-[22px] flex items-center space-x-4">
                                    <img className="w-[20px]" src={Xicon2} alt="" />
                                    <p className="text-[16px] text-[#fff] font-[500] ">{t('main.hoverDropDn-title2-para3')}</p>
                                </div>
                            </a>
                            <a target="_blank" href="https://t.me/Dreamcars_bsc">
                                <div className="pb-[22px] flex items-center space-x-4">
                                    <img className="w-[20px]" src={Xicon1} alt="" />
                                    <p className="text-[16px] text-[#fff] font-[500] ">{t('main.hoverDropDn-title2-para4')}</p>
                                </div>
                            </a>
                            <a target="_blank" href="https://linktr.ee/dreamcars_bsc">
                                <div className="flex items-center space-x-4">
                                    <img className="w-[20px]" src={Xicon5} alt="" />
                                    <p className="text-[16px] text-[#fff] font-[500] "> {t('main.hoverDropDn-title2-para5')}</p>
                                </div>
                            </a>

                        </div>

                    </div>
                    <div className="space-y-[28px]">
                        <div>
                            <h3 className="text-[20px]  font-[700] uppercase text-[#fff]">{t('main.hoverDropDn-title3')}</h3>
                        </div>
                        <div className="flex flex-wrap space-x-4 justify-between">
                            <div className="space-y-[5px] grid grid-cols-2">
                                {Object.keys(locales).map((locale) => (
                                    <div
                                        key={locale}
                                        className="flex items-center space-x-4 cursor-pointer"
                                        onClick={() => handleLangSelection(locale)}
                                    >
                                        <img src={locales[locale].img} alt="" />
                                        <p className="text-[16px] text-[#fff] font-[500] ">
                                            {locales[locale].title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>
                </div >
                <div className="block xs:hidden sm:hidden py-5 rounded-b-[17.81px] navpopbggr  px-[40px]">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[18px] font-[Inter] text-white font-[700]">Need support?</h3>
                        <a href="https://t.me/Dreamcars_bsc" className="underline font-[Inter] text-white font-[400] text-[18px]">Join our 24/7 Live Chat Support on Telegram</a>
                    </div>
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-2 px-4  ">
                    <div className="space-y-1">
                        {Object.keys(locales).map((locale) => (
                            <div
                                key={locale}
                                className="flex items-center space-x-4 pt-2 cursor-pointer"
                                onClick={() => handleLangSelection(locale)}
                            >
                                <img className="h-[20px]" src={locales[locale].img} alt="" />
                                <p className="text-[12px] text-[#fff] font-[500] font-[Inter]">
                                    {locales[locale].title}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div >
        </div >
    )
}
export default HoverDropDn