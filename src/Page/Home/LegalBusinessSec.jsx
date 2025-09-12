
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import lesimg from "../../assects/images/legbussimg.png"




const LegalBusinessSec = () => {
    const { t } = useTranslation();

    return (
        <div className="LegalBusigr overflow-hidden xs:pt-[4rem]">
            <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1226px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] mx-auto relative xs:py-[1.8rem] py-[1rem] pr-[2rem] xs:px-[2rem]" >
                <div className="relative z-[1] 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                    <div className="2xl:w-[75%] xs:hidden block xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[75%] w-[100%] xs:opacity-[0.4] xs:absolute xs:z-[1] xs:top-[10%] left-[-5%]">
                        <img src={lesimg} className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[90%]" alt="" />
                    </div>
                    <div className="2xl:w-[100%] xs:relative xs:z-[3] xl:w-[100%] lg:w-[100%] max-w-[571px] md:w-[100%] sm:w-[100%] w-[100%] xs:mx-auto py-[2rem] xs:py-0 xs:text-center sm:text-center  space-y-[25px]">
                        {/* <div className="2xl:block xl:block lg:block md:block sm:hidden hidden backdrop-blur-md m-0 max-w-[530px]  bg-[#d1d5db1f] border-r border-t p-2 rounded-[5px]">
                            <p className="text-[#FFD02F] text-center text-[26px] font-[700]">{t('LegalBusinessSec.toppara')}</p>
                        </div> */}
                        <h3 className="text-[46px] xs:text-[26px] xs:max-w-[300px] xs:w-[100%] xs:mx-auto font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t('LegalBusinessSec.title')}` }}></h3>
                        <p className="text-[22px] xs:text-[18px] font-[400] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t('LegalBusinessSec.para')}` }}>
                        </p>
                        <div className="xs:flex xs:space-x-[10px] xs:justify-between">
                            {/* <div className="backdrop-blur-md m-0 bg-[#d1d5db1f] max-w-[530px] border-r border-t 2xl:p-2 xl:p-2 lg:p-2 md:p-2 sm:p-4 p-4 xs:border-[#001dad82] rounded-[5px]">
                                <p className="text-[#FFD02F] 2xl:text-[20px] text-center xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[16px] font-[700]">{t('LegalBusinessSec.bottompara')}</p>
                            </div> */}
                            {/* <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block backdrop-blur-md m-0 max-w-[530px] bg-[#d1d5db1f] border-r border-t 2xl:p-2 xl:p-2 lg:p-2 md:p-2 sm:p-4 p-4 xs:border-[#001dad82] rounded-[5px]">
                                <p className="text-[#FFD02F] text-center 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[16px] text-[16px] font-[700]">{t('LegalBusinessSec.bottompara')}</p>
                            </div> */}
                        </div>

                        <div className="pt-[15px]  xs:pt-[10px] flex xs:justify-center">
                            <Button link="#buynow" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor w-[530px] py-[12px] xs:py-[8px] xs:w-[300px] xs:mx-auto xs:text-[14px]  rounded-[10px]" />
                        </div>
                        <div className="2xl:w-[75%] min-h-[400px] relative hidden xs:block xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[75%] w-[100%] ">
                            <img src={lesimg} className="absolute xs:z-[1] xs:top-[3%] left-[-10%] " alt="" />
                        </div>
                        <p className="text-[#fff] text-center text-[16px] font-[400]">{t('LegalBusinessSec.lastpara')}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default LegalBusinessSec 
