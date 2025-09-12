import React from "react";
import Comas from "../assects/svgs/comas.svg";
import Stars from "../assects/images/stars.png";
import Button from "./Button/button";

function CryptoExperts({
    container,
    title,
    para,
    btnLarge,
    followerslarge,
    srcLarge,
    smallContainer,
    srcSmall,
    name,
    btnFollowers,
    lastSrc
}) {
  return (
    <>
      <div>
        <div className={container}>
          <div className="2xl:w-[37%] xl:w-[37%] lg:w-[37%] md:w-[70%] sm:w-[90%] w-[100%]  flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <img className="w-[60px] h-[53px]" src={Comas} alt="" />
              <img className="w-[138px] h-[22px]" src={Stars} alt="" />
            </div>
            <h3 className="2xl:text-[30px] xl:text-[26px] lg:text-[22px] md:text-[30px] sm:text-[30px] text-[30px] gradientText font-[700] leading-[30.50px] uppercase">
            {title}
            </h3>
            <p className="text-white 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] font-[400] leading-[22px]">
            {para}
            </p>
            <div className=" flex-wrap gap-[15px] items-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden">
              <Button
                text={btnLarge}
                classes={
                  "bgcolor font-[700] text-[18px] leading-[30.50px] rounded-[37px] w-[180px] h-[43px]"
                }
              />
              <p className="text-white text-[16px] font-[400] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center whitespace-nowrap">
                {followerslarge}
              </p>
            </div>
          </div>
          <div className="2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[70%] sm:w-[90%] w-[100%] ">
            <div className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
              <img className=" w-[100%]" src={srcLarge} alt="" />
            </div>
            <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block block ">
            <div className={`flex 2xl:gap-[14px] xl:gap-[14px] lg:gap-[14px] md:gap-[14px] sm:gap-[14px] gap-[10px] justify-between ${smallContainer}`}>
              <img className="w-[135px] h-[135px]" src={srcSmall} alt="" />
              <div>
                <h2 className="pb-[7px] 2xl:text-[40.15px] xl:text-[40.15px] lg:text-[40.15px] md:text-[40.15px] sm:text-[40.15px] text-[38px] gradientText font-[900] leading-[40.82px] uppercase">
                  {name}
                </h2>
                <Button
                  text={btnFollowers}
                  classes={
                    "bgcolor font-[900] text-[11px] text-[#111010] leading-[14.91px] rounded-[37px] 2xl:w-[270px] xl:w-[270px] lg:w-[270px] md:w-[270px] sm:w-[270px] w-[160px] 2xl:h-[49px] xl:h-[49px] lg:h-[49px] md:h-[49px] sm:h-[49px] h-[40px] flex items-center justify-center"
                  }
                />
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-[23px] 2xl:hidden xl:hidden lg:hidden md:block sm:block block 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[90%] w-[100%] mx-auto">
          <img className="w-[100%]" src={lastSrc} alt="" />
        </div> */}
      </div>
    </>
  );
}

export default CryptoExperts;
