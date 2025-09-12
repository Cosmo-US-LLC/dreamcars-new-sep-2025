import React from "react";
import Tierimg from "../../assects/images/Tierimg.png";

import Button from "../../components/Button/button";
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import info from "../../assects/svgs/info.svg";

const RewardCard = ({ item, index, amountRange, handleRange, handleImageClick }) => {
  const { t } = useTranslation();

  const handleClick = (message) => {
    handleImageClick(message);
  };
  return (
    <div className="py-6 xs:py-3 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 px-2  rounded-[34px] gradient-border-mask-no-blur ">
      <div className=" flex justify-between w-[100%] sm:w-[100%] xs:w-[100%]  ">
        {
          <>
            <div className="space-y-4 w-[74%] xs:w-[58%] md:w-[100%] sm:w-full xs:w-full pr-2 xs:pr-0">
              <div className="flex items-center space-x-[1rem] xs:space-x-2">
                <img className="h-[60px] xs:h-[40px]" src={Tierimg} alt="" />

                <h3 className="text-[36px] text-white  sm:text-[18px] xs:text-[16px] font-[700] pt-2 ">
                  {t(item.packageType)}
                </h3>
              </div>
              <div className="space-y-2 px-5 xs:px-1 xs:relative z-[10]">
                {item.packageList.map((j, id) => (
                  <div key={id} className="relative flex space-x-2 items-center ">
                    <img className="w-[14px] h-[14px]" src={j.icon} alt="" />
                    <p className="text-[13px] text-white sm:text-[16px] xs:text-[16px] text-[#222222] font-[400] ">
                      {t(j.text)}
                    </p>
                    <div className=" group">
                      <img src={info} className="cursor-pointer" alt="" />
                      {
                        j.infotitle &&
                        <div className=" absolute bottom-[18px] xs:bottom-[18px] left-5 xs:left-10   rounded-[18px]  group-hover:flex transition-opacity duration-300 w-[260px] hidden  space-x-3">
                          <div className="flex-col justify-center items-center flex  rounded-[34px] backdrop-blur-xl bg-popup-red !z-[99] px-3 py-6 space-y-[8px]">
                            <img src={info} className="cursor-pointer" alt="" />
                            <p className="text-[#FFD02F] m-0 text-center text-[20px] font-[600]">{t(j.infotitle)}
                            </p>
                            <p className="text-[#fff] m-0 text-center text-[16px] font-[400] leading-[115%]">{t(j.info)}
                            </p>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 xs:space-y-0 flex justify-center relative  xs:z-[4] xs:absolute xs:top-[-3%] xs:right-[-6%] xs:max-w-[200px]  xs:h-[200px]  w-[40%] xs:w-[80%]">
              <div key={item.id}
                className={`absolute top-[-20%] left-[-40%] xs:left-[-20%] xs:top-[-1%] min-w-[315px] max-w-[370px] w-[100%] pb-3`}
              >
                <img
                  className="h-[auto] max-w-[400px] w-[100%] m-auto xs:w-[190px]"
                  src={item.spendImage}
                  alt=""
                />
              </div>
              <div className="absolute spendbg px-[30px] xs:px-[8px] py-[20px] xs:py-[8px] bottom-[5%] tracking-wide xs:bottom-[25%] xs:pt-3 text-center text-[#292A36] font-bold">
                <h5 className="text-[14px] xs:text-[16px] xs:leading-[100%] text-white ">
                  {t("When you spend")}
                </h5>
                <h3 className="text-[16px] sm:text-[16px] text-white xs:text-[16px]  ">{`$${Number(
                  item.spendPrice
                ).toLocaleString("en-US")} ${t("RewardSection.more")}`}</h3>
              </div>
            </div>
          </>
        }
      </div>
      <div className="pt-3 px-5 xs:px-1">
        <a href="#" className="">
          <Button
            link="#buynow"
            classes="bgcolor relative z-[1] rounded-full w-[100%] h-[46px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[14px] xs:text-[14px] font-Poppins font-[700]  m-auto "
            text="BUY $DCARS"
          />{" "}
        </a>
        <p id="groth"></p>
      </div>
    </div>
  );
};
export default RewardCard;
