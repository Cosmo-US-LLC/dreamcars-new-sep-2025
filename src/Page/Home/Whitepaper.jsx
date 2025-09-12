import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Whitepaper from "../../assects/images/Whitepaper.png"
import CASINO from "../../assects/images/CASINO.png"





const WhitepaperSection = () => {
    const { t } = useTranslation();


    return (
        <div className="space-y-[6rem] w-[90%] mx-auto xs:py-8" >
            <div className="flex items-center justify-between xs:block sm:block md:block xs:space-y-10 sm:space-y-10  md:space-y-10 " >
                <div className="space-y-[20px] w-[55%] xs:w-[100%] sm:w-[100%] md:w-[100%] xs:text-center sm:text-center ">
                    <h3 className="font-[Inter] text-[38px] font-[900] uppercase leading-[40px] gradientText xs:text-[30px]">{t('CasinoIndustry.title2')}</h3>
                    <h5 className="font-[Inter] text-[18px] font-[400] leading-[28px] text-[white]  ">
                    {t('CasinoIndustry.para')}
                    </h5>
                    <Button link="/" text={`${t('CasinoIndustry.btn')}`} classes="rounded-[40px] bgcolor text-[18px]  px-[60px] py-4 font-[700]" />


                </div>

                <div className=" w-[45%] xs:w-[100%] sm:w-[100%] md:w-[70%] md:m-auto flex justify-end xs:justify-center sm:justify-center md:justify-center space-y-3" >
                    <img  className="w-[auto] h-[600px] xs:h-[300px] sm:h-[400px] md:h-[400px] " src={Whitepaper} alt="" />
                </div>
                    


            </div>
        </div>
    )
}
export default WhitepaperSection
