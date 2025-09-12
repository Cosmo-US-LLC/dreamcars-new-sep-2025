import React from "react";
import { useTranslation } from "react-i18next";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copyIcon from "../../assects/images/copyicn.png"
import Button from "../../components/Button/button";


const TokenDetailsSection = () => {
    const { t } = useTranslation();

    const handleCopy = () => {
        navigator.clipboard.writeText("0x376e34c7D10BF0f13Cb71FbB9B4996Edbb4a04eF");
        toast.success('Contract Address Copied!', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <>
            <div className="tokengrbg">
                <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1240px] space-y-[2rem] xs:space-y-[1rem] pt-[4rem] pb-[2rem] xs:py-[3.5rem] mx-auto ">
                    <center>
                        <div className="xs:space-y-[15px]">
                            <h2 className="font-[700] text-[46px] xs:text-[26px] text-[#fff]">{t('TokenDetailsSection.title')}</h2>
                            <p className="text-[22px] xs:text-[18px] font-[400] text-center text-[#fff]">{t('TokenDetailsSection.para')}</p>

                        </div>
                    </center>
                    <div className="space-y-[20px]">
                        <div className=" backdrop-blur-md gradient-border-mask rounded-[34px] xs:rounded-[26px] bg-[#d1d5db1f] px-[60px] xs:px-[30px] xs:py-[30px] py-[40px] flex justify-between xs:block xs:space-y-[30px]">
                            <div className="w-[40%] xs:w-[100%] space-y-[30px] relative z-[9] xs:space-y-[20px]">
                                <div className="space-y-[5px] h-[100px] xs:h-[auto]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle1')}</p>
                                    <h4 className="text-[23px] xs:text-[18px] font-[700] text-[#fff]">{t('TokenDetailsSection.tokenPara1')}</h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle2')}</p>
                                    <h4 className="text-[23px] xs:text-[18px]  font-[700] text-[#fff]">{t('TokenDetailsSection.tokenPara2')}</h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenAdressTitle1')}</p>
                                    <div className="flex xs:justify-between xs:items-center space-x-[10px]">
                                        <h4 className="text-[23px] break-words xs:w-[230px] xs:text-[18px] font-[700]  text-[#fff]">0x376e34c7D10BF0f13Cb71FbB9B4996Edbb4a04eF</h4>
                                        <img className="h-[24px] xs:h-[17px] xs:w-[17px] cursor-pointer w-[22px]" onClick={handleCopy} src={copyIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[30%] xs:w-[100%] relative z-[3] space-y-[30px]">
                                <div className="space-y-[5px] h-[100px] xs:h-[auto]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle4')}</p>
                                    <h4 className="text-[23px] xs:text-[18px] font-[700] text-[#fff]" dangerouslySetInnerHTML={{ __html: t('TokenDetailsSection.tokenPara4') }}></h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenAdressTitle2')}</p>
                                    <h4 className="text-[23px] xs:text-[18px]  font-[700] text-[#fff]">18</h4>
                                </div>
                            </div>
                            <div className="w-[25%] xs:w-[100%] relative z-[3] space-y-[30px]">
                            <div className="space-y-[5px] h-[100px] xs:h-[auto]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.tokenTitle3')}</p>
                                    <h4 className="text-[23px] xs:text-[18px]  font-[700] text-[#fff]">{t('TokenDetailsSection.tokenPara3')}</h4>
                                </div>
                                <div className="space-y-[5px]">
                                    <p className="text-[#6399FF] text-[16px] xs:text-[14px] font-[400]">{t('TokenDetailsSection.pre-saleTitle1')}</p>
                                    <h4 className="text-[23px] xs:text-[18px]  font-[700] text-[#fff]">{t('TokenDetailsSection.pre-salePara1')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="2xl:hidden relative z-[1] xl:hidden lg:hidden md:hidden sm:flex flex justify-center w-[100%]">
                            <Button
                                link="#buynow"
                                text={`${t("BetaSection.btn")}`}
                                classes="font-[700] bgcolor max-w-[624px] w-[100%] mx-auto  xs:h-[34px] flex justify-center items-center xs:leading-[14px] h-[50px] xs:text-[14px] rounded-[10px]"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default TokenDetailsSection