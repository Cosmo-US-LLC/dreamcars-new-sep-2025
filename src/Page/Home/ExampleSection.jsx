
import React from "react";
import { useTranslation } from "react-i18next";

import emampimg from "../../assects/images/exmpimg.png"




const ExampleSection = () => {
    const { t } = useTranslation();

    return (
        <div className="Examplebggr pb-[75px]">
             <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1216px]  mx-auto  backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask rounded-[34px] pt-[35px] pb-[25px] px-[15px]" >
            <div className="space-y-[20px] relative z-[1]">
                <h3 className="2xl:text-[46px] xl:text-[46px] lg:text-[46px] md:text-[46px] sm:text-[46px] text-[24px] font-[700] leading-[53px]  text-[#FFF] text-center" dangerouslySetInnerHTML={{ __html: `${t('SimpleExampleSec.title')}` }}></h3>
                <p className="2xl:text-[22px] capitalize xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[22px] text-[18px] font-[500] text-center text-[#fff] leading-[150%] xs:leading-[120%]  2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[100%] mx-auto">{t('SimpleExampleSec.para')}</p>
            </div>
            <div className="space-y-[60px] relative z-[1] pt-[48px]">
            <div className="max-w-[424px] w-[100%] mx-auto 2xl:p-[32px] xl:p-[32px] lg:p-[32px] md:p-[32px] sm:p-[32px] p-[20px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask gradient-border-mask-no-blur rounded-[34px]">
                    <p className="text-[#FFC83D] text-center 2xl:text-[36px]  xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[24px] text-[24px] font-[700] leading-[119.994%] ">{t('SimpleExampleSec.calculation')}</p>
                </div>
                <div className="flex justify-center">
                    <img src={emampimg} alt="" />
                </div>
                <div className="2xl:flex xl:flex lg:flex md:flex sm:block block xs:space-y-[1rem] justify-between xs:w-[300px] xs:mx-auto">
                    <div className="max-w-[390px] w-[100%] 2xl:py-[30px] xl:py-[30px] lg:py-[30px] md:py-[30px] sm:py-[50px] py-[50px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-no-blur rounded-[34px]">
                        <h4 className="text-[#FFC83D] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[24px] font-[700] leading-[119.994%] text-center">{t('SimpleExampleSec.totalcard')}</h4>
                        <h5 className="2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[45px] text-[24px] text-center font-[700] tracking-[-0.45px] text-[#fff]">{t('SimpleExampleSec.amountcard1')}</h5>
                    </div>
                    <div className="max-w-[390px] w-[100%] 2xl:py-[30px] xl:py-[30px] lg:py-[30px] md:py-[30px] sm:py-[50px] py-[50px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-no-blur rounded-[34px]">
                        <h4 className="text-[#FFC83D] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[24px] font-[700] leading-[119.994%] text-center">{t('SimpleExampleSec.yearlycard')}</h4>
                        <h5 className="2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[45px] text-[24px] text-center font-[700] tracking-[-0.45px] text-[#fff]">{t('SimpleExampleSec.amountcard2')}</h5>
                    </div>
                    <div className="max-w-[390px] w-[100%] 2xl:py-[30px] xl:py-[30px] lg:py-[30px] md:py-[30px] sm:py-[50px] py-[50px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-no-blur rounded-[34px]">
                        <h4 className="text-[#FFC83D] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[36px] text-[24px] font-[700] leading-[119.994%] text-center">{t('SimpleExampleSec.apycard3')}</h4>
                        <h5 className="2xl:text-[45px] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[45px] text-[24px] text-center font-[700] tracking-[-0.45px] text-[#fff]">{t('SimpleExampleSec.amountcard3')}</h5>
                    </div>
                   
                </div>
            </div>
                    <div className="relative z-[1]  pt-[3rem]">
                        <p className="text-center text-[14px] text-[#fff] font-[400]" dangerouslySetInnerHTML={{ __html: `${t('SimpleExampleSec.paralast')}` }}></p>
                    </div>
             </div>
            </div>
    )
}
export default ExampleSection 