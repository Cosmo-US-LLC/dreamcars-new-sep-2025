import React from "react";
import { useTranslation } from "react-i18next";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copyIcon from "../../assects/svgs/copy-icon-1.png.svg";
import Solid from "../../assects/images/spicn.png"
import Button from "../../components/Button/button";
import adswth from "../../assects/images/adswht.png"
import icon2 from "../../assects/svgs/iconsds (2).svg"
import icon3 from "../../assects/svgs/iconsds (1).svg"
import icon4 from "../../assects/svgs/iconsds (3).svg"

const DistributionSection = ({ perc }) => {
  const { t } = useTranslation();

  const handleClaimBtn = () => {
    toast.info('You can claim your $DCARS once the pre-sale is completed');
  };

  return (
    <>
      <div className="tokenwillbg">
        <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1440px] space-y-[2rem] py-[4rem] xs:py-[0rem] mx-auto ">
          <center>
            <div className="space-y-[20px] xs:space-y-[10px]">
              <h2 className="font-[700] text-[46px] xs:text-[26px] text-[#fff] xs:mx-10 " dangerouslySetInnerHTML={{ __html: t('DistributionSection.title') }}>
              </h2>
              <p className="max-w-[800px] w-[100%] text-[22px] xs:text-[16px] font-[400] text-center text-[#fff]">
                {t('DistributionSection.para')}
              </p>
            </div>
          </center>
          <div>
            <div className=" max-w-[624px] bg-[#181818] w-[100%] mx-auto">
              <div className="flex justify-between">
                <div className="w-[100%] border-b border-[#374151] flex">
                  <div className="w-[50%] py-[35px] xs:py-[15px] px-[50px] xs:px-[18px] space-y-[5px]">
                    <p className="text-[#6399FF] font-[Lato] text-[40px] xs:text-[22px] font-[600]">
                      {t('DistributionSection.SoldTitle1')}
                    </p>
                    <h4 className="text-[16px] xs:text-[16px] font-[Lato] font-[400] text-[#fff]">
                      {t('DistributionSection.Soldpara')} <br /> {t('DistributionSection.Soldpara2')}
                    </h4>
                  </div>
                  <div className="w-[50%] py-[35px] px-[50px] xs:py-[15px] xs:px-[18px] border-l border-[#374151] space-y-[5px]">
                    <p className="text-[#FFF] xs:text-[22px] font-[Lato] text-[40px] font-[600]">
                      {perc.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
                    </p>
                    <h4 className="text-[16px] xs:text-[16px] font-[Lato] font-[400] text-[#fff]">
                      {t('DistributionSection.Soldpara3')} <br /> {t('DistributionSection.Soldpara4')}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-[100%] px-[50px] space-x-0 xs:space-x-[16px] xs:px-[15px] py-[60px] xs:py-[15px] flex justify-between">
                <div className="space-y-[15px] xs:space-y-[20px]">
                  <div className="space-y-[5px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]">{t('DistributionSection.tokenTitle1')}</p>
                    <h4 className="text-[20px] xs:text-[16px] font-[700] text-[#fff]">
                      {t('DistributionSection.tokenPara1')}
                    </h4>
                  </div>
                  <div className="space-y-[5px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]">{t('DistributionSection.tokenTitle2')}</p>
                    <h4 className="text-[20px] xs:text-[16px] font-[700] text-[#fff]">
                      {t('DistributionSection.tokenPara2')}
                    </h4>
                  </div>
                  <div className="space-y-[5px] xs:space-y-[15px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]"> {t('DistributionSection.tokenTitle3')}</p>
                    <h4 className="text-[20px] xs:text-[16px]  font-[700] text-[#fff]">
                      3,000,000,000
                    </h4>
                  </div>
                  <div className="space-y-[5px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]">{t('DistributionSection.tokenTitle4')}</p>
                    <h4 className="text-[20px] xs:text-[16px]  font-[700] text-[#fff]">
                      1 $DCARS = $0.013
                    </h4>
                  </div>
                </div>
                <div className="space-y-[15px] xs:space-y-[20px]">
                  <div className="space-y-[5px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]">{t('DistributionSection.tokenPara3')}</p>
                    <h4 className="text-[20px] xs:text-[16px] font-[700]  text-[#fff]">
                      1 $DCARS = $0.03
                    </h4>
                  </div>
                  <div className="space-y-[5px] xs:space-y-[7px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]">{t('DistributionSection.tokenPara4')}</p>
                    <div className="">
                      <div className=" flex justify-between gap-x-1">
                        <div className="flex space-x-2 w-[80px] xs:w-[auto] items-center">
                          <div className="w-[22px] h-[22px] bg-[#fff] rounded-[100%] flex items-center justify-center">
                            <img className="w-[18px] h-[18px] xs:h-[18px] xs:w-[18px]" src={icon4} alt="" />
                          </div>
                          <p className="text-[18.859px] xs:text-[14px] font-[400] text-[#fff]">ETH</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <img className="w-[22px] h-[22px] xs:h-[22px] xs:w-[22px]" src={icon3} alt="" />
                          <p className="text-[18.859px] xs:text-[14px] font-[400] text-[#fff]">BNB</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <img className="w-[22px] h-[22px] xs:h-[22px] xs:w-[22px]" src={icon2} alt="" />
                          <p className="text-[18.859px] xs:text-[14px] font-[400] text-[#fff]">USDT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-[5px]">
                    <p className="text-[#6399FF] text-[16px] xs:text-[16px] font-[400]">{t('DistributionSection.tokenAdressTitle1')}</p>
                    <div className="flex items-center space-x-2">
                      <img src={Solid} className="" alt="" />
                      <h4 className="text-[20px] xs:text-[16px] font-[700] xs:font-[500] text-[#fff]">
                        {t('DistributionSection.tokenAdressPara1')}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src={adswth} className="" alt="" />
                      <h4 className="text-[20px] xs:text-[16px] leading-[120%] xs:leading-[110%] font-[700] xs:font-[500] text-[#fff]">
                        {t('DistributionSection.tokenAdressTitle2')}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center xs:pt-[20px] w-[100%]">
              <Button
                classes="font-[700] bg-gray-500 max-w-[624px] w-[100%] mx-auto xs:h-[40px] flex justify-center items-center xs:leading-[14px] h-[50px] xs:text-[16px] rounded-[10px]"
                text="Claim $DCARS"
                onClick={handleClaimBtn}
              />
              {/* <Button
                link="#buynow"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor max-w-[624px] w-[100%] mx-auto xs:h-[40px] flex justify-center items-center xs:leading-[14px] h-[50px] xs:text-[16px] rounded-[10px]"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DistributionSection;
