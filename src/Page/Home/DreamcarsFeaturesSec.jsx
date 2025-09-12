
import React from "react";
import { useTranslation } from "react-i18next";

import icns1 from "../../assects/svgs/dcftsvg (4).svg"
import icns2 from "../../assects/svgs/dcftsvg (3).svg"
import icns3 from "../../assects/svgs/dcftsvg (2).svg"
import icns4 from "../../assects/svgs/dcftsvg (1).svg"
import icns5 from "../../assects/svgs/dcftsvg (5).svg"
import Button from "../../components/Button/button";

import dcftcar1 from "../../assects/images/dcftimg(2).webp"
import dcftcar2 from "../../assects/images/dcftimg (1).webp"



const DreamcarsFeaturesSec = () => {
    const { t } = useTranslation();

    return (
        <div className="dcftbggr ">
            <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] relative mx-auto 2xl:pb-[80px] xl:pb-[80px] lg:pb-[80px] md:pb-[80px] sm:pb-[30px] pb-[30px]" >
                <div className="space-y-[20px]">
                    <h3 className="text-[46px] xs:text-[26px] font-[700] leading-[53px] text-[#FFF] text-center">{t('DreamcarsFeaturesSec.title')}</h3>
                </div>
                <div className="2xl:flex xs:relative xs:w-[100%] xl:flex lg:flex md:flex sm:block block justify-between items-end ">
                    <div className="absolute xs:relative xs:h-[163px] left-[-6%] xs:left-[-40%] 3xl:max-w-[740px] 2xl:max-w-[600px] xl:max-w-[480px] lg:max-w-[480px] md:max-w-[480px] xs:z-[10] xs:max-w-[300px] xs:w-[100%] bottom-0 xs:top-[0%] xs:opacity-[0.6] xs:left-[-40%]">
                        <img className="" src={dcftcar1} alt="" />
                    </div>
                    <div className="2xl:space-y-[40px]  xl:space-y-[40px] lg:space-y-[40px] md:space-y-[40px] sm:space-y-[1rem] space-y-[1rem] pt-[48px] xs:pt-[20px] max-w-[983px] w-[100%] mx-auto">

                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block justify-between 2xl:space-y-[0rem] xl:space-y-[0rem] lg:space-y-[0rem] md:space-y-[0rem] sm:space-y-[1rem] space-y-[1rem]">
                            <div className="2xl:max-w-[315px] xl:max-w-[315px] lg:max-w-[315px] md:max-w-[315px] sm:max-w-[100%] max-w-[100%] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] space-y-[10px] ">
                                <img className="" src={icns1} alt="" />
                                <h4 className="text-[#FFC83D] 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[24px] text-[24px] 2xl:max-w-[150px] xl:max-w-[150px] lg:max-w-[150px] md:max-w-[150px] sm:max-w-[100%] max-w-[100%] w-[100%]  font-[700] leading-[119.994%] ">{t('DreamcarsFeaturesSec.card1tit1')}</h4>
                                <h5 className="text-[18px] font-[400] text-[#fff]">{t('DreamcarsFeaturesSec.card1para1')}</h5>
                            </div>
                            <div className="2xl:max-w-[315px] xl:max-w-[315px] lg:max-w-[315px] md:max-w-[315px] sm:max-w-[100%] max-w-[100%] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] gradient-border-mask rounded-[34px] ">
                                <img className="" src={icns2} alt="" />
                                <h4 className="text-[#FFC83D] 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[24px] text-[24px] 2xl:max-w-[200px] xl:max-w-[200px] lg:max-w-[200px] md:max-w-[200px] sm:max-w-[100%] max-w-[100%] w-[100%]  font-[700] leading-[119.994%] ">{t('DreamcarsFeaturesSec.card1tit2')}</h4>
                                <h5 className="text-[18px] font-[400] text-[#fff]">{t('DreamcarsFeaturesSec.card1para2')}</h5>
                            </div>
                            <div className="2xl:max-w-[315px] xl:max-w-[315px] lg:max-w-[315px] md:max-w-[315px] sm:max-w-[100%] max-w-[100%] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] gradient-border-mask rounded-[34px] ">
                                <img className="" src={icns3} alt="" />
                                <h4 className="text-[#FFC83D] 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[24px] text-[24px] 2xl:max-w-[150px] xl:max-w-[150px] lg:max-w-[150px] md:max-w-[150px] sm:max-w-[100%] max-w-[100%] w-[100%]  font-[700] leading-[119.994%] ">{t('DreamcarsFeaturesSec.card1tit3')}</h4>
                                <h5 className="text-[18px] font-[400] text-[#fff]">{t('DreamcarsFeaturesSec.card1para3')}</h5>
                            </div>
                        </div>
                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block justify-center 2xl:space-x-[2rem] xl:space-x-[2rem] lg:space-x-[2rem] md:space-x-[2rem] sm:space-x-[0rem] space-x-[0rem] 2xl:space-y-[0rem] xl:space-y-[0rem] lg:space-y-[0rem] md:space-y-[0rem] sm:space-y-[1rem] space-y-[1rem]">

                            <div className="2xl:max-w-[315px] xl:max-w-[315px] lg:max-w-[315px] md:max-w-[315px] sm:max-w-[100%] max-w-[100%] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] gradient-border-mask rounded-[34px] ">
                                <img className="" src={icns4} alt="" />
                                <h4 className="text-[#FFC83D] 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[24px] text-[24px] 2xl:max-w-[220px] xl:max-w-[220px] lg:max-w-[220px] md:max-w-[220px] sm:max-w-[100%] max-w-[100%px] w-[100%]  font-[700] leading-[119.994%] ">{t('DreamcarsFeaturesSec.card1tit4')}</h4>
                                <h5 className="text-[18px] font-[400] text-[#fff]">{t('DreamcarsFeaturesSec.card1para4')}</h5>
                            </div>
                            <div className="2xl:max-w-[315px] xl:max-w-[315px] lg:max-w-[315px] md:max-w-[315px] sm:max-w-[100%] max-w-[100%] w-[100%] py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[10px] gradient-border-mask rounded-[34px] ">
                                <img className="" src={icns5} alt="" />
                                <h4 className="text-[#FFC83D] 2xl:text-[26px] xl:text-[26px] lg:text-[26px] md:text-[26px] sm:text-[24px] text-[24px] 2xl:max-w-[150px] xl:max-w-[150px] lg:max-w-[150px] md:max-w-[150px] sm:max-w-[100%] max-w-[100%] w-[100%]  font-[700] leading-[119.994%] ">{t('DreamcarsFeaturesSec.card1tit5')}</h4>
                                <h5 className="text-[18px] font-[400] text-[#fff]">{t('DreamcarsFeaturesSec.card1para5')}</h5>
                            </div>
                        </div>
                        <div className="flex justify-center xs:pt-[0px] xs:z-[9] w-[100%]  ">
                            <img className="xs:block hidden absolute xs:relative xs:h-[163px] right-[-6%] bottom-0 xs:left-auto xs:right-[-45%] 3xl:max-w-[770px] 2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[500px] md:max-w-[480px] xs:max-w-[300px] xs:max-w-[250px] xs:w-[100%] bottom-0 xs:bottom-[2%] xs:z-[1] xs:opacity-[0.6]" src={dcftcar2} alt="" />
                        </div>

                        <div className="flex justify-center xs:pt-[0px] xs:z-[9] w-[100%]  ">

                            <Button
                                link="#buynow"
                                text={`${t("BetaSection.btn")}`}
                                classes="font-[700] bgcolor flex justify-center items-center max-w-[480px] w-[100%] mx-auto py-[12px] xs:text-[14px] rounded-[10px]"
                            />
                        </div>
                    </div>

                    <img className="xs:hidden block absolute xs:relative xs:h-[163px] right-[-6%] bottom-0 xs:left-auto xs:right-[-4%] 3xl:max-w-[770px] 2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[500px] md:max-w-[480px] xs:max-w-[300px] xs:max-w-[250px] xs:w-[100%] bottom-0 xs:bottom-[2%] xs:z-[1] xs:opacity-[0.2]" src={dcftcar2} alt="" />
                </div>

            </div>
        </div>
    )
}
export default DreamcarsFeaturesSec 
