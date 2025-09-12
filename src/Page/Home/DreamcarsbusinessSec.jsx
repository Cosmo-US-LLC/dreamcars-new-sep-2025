
import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";

import bdmodimg from "../../assects/images/dcmodimg.png"



const DreamcarsbusinessSec = () => {
    const { t } = useTranslation();

    return (
        <div className="dcmodelbggr">
            <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] xs:backdrop-blur-md xs:rounded-[23px] xs:bg-[#d1d5db1f] xs:border-r xs:border-t max-w-[1138px] mx-auto 2xl:py-[80px] xl:py-[80px] lg:py-[80px] md:py-[80px] sm:py-[30px] py-[30px] xs:p-8" >
                <div className="space-y-[20px]">
                    <h3 className="text-[46px] xs:text-[26px] capitalize font-[700] leading-[130%] text-[#FFF] text-center">The Dreamcars business model continuously <br/>supports the growth of $DCARS</h3>
                    <p className="text-[#fff] text-[22px] xs:text-[18px] leading-[130%] text-center font-[400]">The Dreamcars marketplace lets you buy, sell, and trade shares of luxury rental cars from anywhere in the world using cryptocurrency. To own car shares, you’ll need to hold a specific amount of $DCARS and lock it for as long as you wish to maintain ownership.
                            This process ensures that as more cars are added to the marketplace, the value of $DCARS steadily increases over time.</p>
                </div>
                <div className="flex justify-center  ">
                    <div className="space-y-[36px] pt-[25px] w-[100%] ">
                        <h4 className="2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] text-[#fff] font-[700] text-center">3 Different Car Categories:</h4>
                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block justify-between w-[100%] relative xs:space-y-[20px]">
                            <div className="max-w-[368px] 2xl:h-[367px] xl:h-[367px] lg:h-[367px] md:h-[367px] sm:h-[auto] h-[auto] w-[100%] py-[38px] px-[30px] gradient-border-mask-no-blur m-0 rounded-[34px] space-y-[6px] ">
                                {/* <img className="" src={icns1} alt="" /> */}
                                <h3 className="2xl:text-[31px] xl:text-[31px] lg:text-[31px] md:text-[31px] sm:text-[24px] text-[24px] font-[700] leading-[28px] text-[#fff] pb-[10px]">Entry-Level Cars</h3>
                                <h4 className="text-[#fff] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[18px] text-[18px] font-[400] leading-[119.994%] ">Less than <span className="text-[#FFD02F] font-[700]">20% APY</span> </h4>
                                <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">(2% in $DCARS locked in the vault)</h5>
                            </div>
                            <div className="max-w-[368px] 2xl:h-[367px] xl:h-[367px] lg:h-[367px] md:h-[367px] sm:h-[auto] h-[auto] w-[100%] py-[38px] px-[30px] m-0 space-y-[6px] gradient-border-mask-no-blur rounded-[34px]">
                                {/* <img className="" src={icns2} alt="" /> */}
                                <h3 className="2xl:text-[31px] xl:text-[31px] lg:text-[31px] md:text-[31px] sm:text-[24px] text-[24px] font-[700] leading-[28px] text-[#fff] pb-[10px]">Premium Cars </h3>
                                <h4 className="text-[#FFC83D] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[18px] text-[18px] font-[700] leading-[119.994%] ">20% - 30%  APY</h4>
                                <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">(5% in $DCARS locked in the vault)</h5>
                            </div>
                            <div className="max-w-[368px] 2xl:h-[367px] xl:h-[367px] lg:h-[367px] md:h-[367px] sm:h-[auto] h-[auto] w-[100%] py-[38px] px-[30px] m-0 space-y-[6px] gradient-border-mask-no-blur rounded-[34px]">
                                {/* <img className="" src={icns3} alt="" /> */}
                                <h3 className="2xl:text-[31px] xl:text-[31px] lg:text-[31px] md:text-[31px] sm:text-[24px] text-[24px] font-[700] leading-[28px] text-[#fff] pb-[10px]">Top Performers</h3>
                                <h4 className="text-[#FFC83D] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[18px] text-[18px] font-[700] leading-[119.994%] "> 30%+ APY</h4>
                                <h5 className="text-[16px] font-[400] text-[#fff] leading-[100%]">(7% in $DCARS locked in the vault)</h5>
                            </div>
                            <div className="absolute bottom-[-18%] xs:bottom-[-12%] flex justify-center w-[100%]">
                                <img src={bdmodimg} className="xs:w-[100%] mx-auto " alt="" />
                            </div>
                        </div>
                        <div className="pt-[4rem]">
                            <Button
                                link="#buynow"
                                text={`${t("BetaSection.btn")}`}
                                classes="font-[700] bgcolor flex justify-center items-center max-w-[565px] w-[100%] mx-auto py-[12px] xs:text-[14px] rounded-[10px]"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default DreamcarsbusinessSec 
