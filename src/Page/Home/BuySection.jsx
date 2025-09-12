import React from "react";
import { useTranslation } from "react-i18next";

import Buyimg from "../../assects/images/buysec.webp";
import Buyimgmob from "../../assects/images/buymobimg.webp";

const BuySection = () => {
  const { t } = useTranslation();

  return (
    <div className="howbuygrbg" id="how-to-buy">
      <div className="max-w-[1255px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto space-y-[2rem] xs:space-y-[1rem] pb-[65px] mx-auto">
        {/* <p style={{ top: "-100px", position: "relative" }} id="howItWork"></p> */}
        <h2 className="text-[46px] xs:text-[26px]   text-center font-[700] text-[#fff]  leading-[40px]">
          {t("BuySection.title")}
        </h2>
        <div className=" py-3 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden mt-14 justify-center space-x-6">
          <a className="w-[100%] max-w-[192px]" href="#buynow">
            <button className="bgcolor hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[#fff] xs:text-[14px] flex justify-center items-center  text-[#1C1D23] rounded-[5px] flex justify-center items-center text-[16px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700]  w-[100%] space-x-3">
              {t("BuySection.btn1")}
            </button>
          </a>
          <a className="w-[100%]  max-w-[192px]" href="https://t.me/Dreamcars_bsc">
            <button className="bg-[#000] hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[#fff] xs:text-[14px] flex justify-center items-center  text-[#fff] rounded-[5px] flex justify-center items-center text-[16px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700]  w-[100%] space-x-3">
              {t("BuySection.btn2")}
            </button>
          </a>
        </div>
        <div className="xs:pt-[10px] space-y-[4rem] w-full block xs:space-y-3 sm:space-y-3 md:space-y-3">
          <div className="2xl:flex xl:flex w-[92%] m-auto lg:flex md:flex sm:hidden hidden justify-center">
            <img className="" src={Buyimg} alt="" />
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex justify-center">
            <img className="" src={Buyimgmob} alt="" />
          </div>
          <div className="xs:pt-[35px]">
            <div className="2xl:flex xl:flex lg:flex md:flex  sm:block block 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-5 justify-between mx-auto">
              <div className="backdrop-blur-md bg-[#dcdcdc0f] gradient-border-mask rounded-[34px] space-y-[20px] xs:py-6  py-[43px] xs:space-y-2 px-[40px] ">
                <h3 className="uppercase text-[#fff] text-[18px] xs:text-[18px]  font-[700] leading-[18px]  ">
                  {t("BuySection.cardTitle1")}
                </h3>
                <h4 className=" text-[26px] xs:text-[24px] font-[700]  text-[#EDC22C]  leading-[29px] ">
                  {t("BuySection.cardSubtitle1")}
                </h4>
                <p className="max-w-[297px] w-[100%] text-[16px] xs:text-[16px] xs:leading-[22px]  text-[white] leading-[130%]  font-[400]  ">
                  {t("BuySection.cardPara1")}
                </p>
              </div>
              <div className="backdrop-blur-md bg-[#dcdcdc0f] gradient-border-mask rounded-[34px] space-y-[20px] xs:py-6  py-[43px] px-[40px] xs:space-y-2 ">
                <h3 className="uppercase text-[#fff] text-[18px] xs:text-[18px]  font-[700] leading-[18px]  ">
                  {t("BuySection.cardTitle2")}
                </h3>

                <h4 className="text-[26px] xs:text-[24px]  font-[700]  text-[#EDC22C]  leading-[29px] ">
                  {t("BuySection.cardSubtitle2")}
                </h4>

                <p className="max-w-[297px] w-[100%] text-[16px] xs:text-[16px] xs:leading-[22px]  text-[white] leading-[130%]  font-[400]  ">
                  {t("BuySection.cardPara2")}
                </p>
              </div>
              <div className="backdrop-blur-md bg-[#dcdcdc0f] gradient-border-mask rounded-[34px] space-y-[20px] xs:py-6  py-[43px] px-[40px] xs:space-y-2 ">
                <h3 className="uppercase text-[#fff] text-[18px] xs:text-[18px]  font-[700] leading-[18px]  ">
                  {t("BuySection.cardTitle3")}
                </h3>

                <h4 className="text-[26px] xs:text-[24px]  font-[700]  text-[#EDC22C] leading-[29px] ">
                  {t("BuySection.cardSubtitle3")}
                </h4>
                <p className="max-w-[297px] w-[100%] text-[16px] xs:text-[16px] xs:leading-[22px] text-[white] leading-[130%]  font-[400]  ">
                  {t("BuySection.cardPara3")}
                </p>
              </div>

            </div>
          </div>
          {/* <div className="2xl:hidden xl:hidden lg:hidden xs:w-[100%] xs:mx-auto md:block sm:flex xs:flex pt-3 xs:pt:2  flex mt-0 xs:pb-4 xs:justify-center sm:justify-center space-x-[20px]">
            <a href="#buynow">
              <button className="bgcolor hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[#fff] xs:text-[16px] xs:w-[150px]  text-[#1C1D23] rounded-full flex justify-center items-center text-[14px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700]  w-[110px] space-x-3">
              {t("BuySection.btn1")}
              </button>
            </a>
            <a href="" target="#">
            <button className="bgcolor hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[#fff] xs:text-[16px] xs:w-[150px]  text-[#1C1D23] rounded-full flex justify-center items-center text-[14px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700]  w-[110px] space-x-3 ">
            {t("BuySection.btn2")}
              </button>
            </a>
          </div> */}


        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex py-3  mt-14 justify-center space-x-6">
          <a className="w-[100%] max-w-[192px]" href="#buynow">
            <button className="bgcolor hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[#fff] xs:text-[14px] flex justify-center items-center  text-[#1C1D23] rounded-[5px] flex justify-center items-center text-[16px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700]  w-[100%] space-x-3">
              {t("BuySection.btn1")}
            </button>
          </a>
          <a className="w-[100%]  max-w-[192px]" href="https://t.me/Dreamcars_bsc">
            <button className="bg-[#000] hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[#fff] xs:text-[14px] flex justify-center items-center  text-[#fff] rounded-[5px] flex justify-center items-center text-[16px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700]  w-[100%] space-x-3">
              {t("BuySection.btn2")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default BuySection;
