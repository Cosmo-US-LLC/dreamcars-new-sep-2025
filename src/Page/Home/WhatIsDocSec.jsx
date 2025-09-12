import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import whtimg from "../../assects/images/whatisimg.png";

const WhatIsDocSec = () => {
  const { t } = useTranslation();

  return (
    <div className="whatisbggr ">
      <div className="py-[60px] xs:py-[35px]">
        <div className="backdrop-blur-md 2xl:flex xl:flex lg:flex md:flex sm:block block justify-between py-[60px] xs:py-[30px] px-[54px] xs:px-[30px] bg-[#d1d5db1f] gradient-border-mask rounded-[34px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1240px] mx-auto ">

          <div className="2xl:w-[100%] relative z-[1] xl:w-[100%] lg:w-[100%] max-w-[638px] md:w-[100%] sm:w-[100%] w-[100%]  xs:py-0  space-y-[25px]">
            <h3 className="text-[46px] xs:text-center xs:text-[24px] font-[700] leading-[130%] text-[#fff]">
              What Makes $DCARS Special?
            </h3>
            <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-[400] text-[#fff] max-w-[570px] w-[100%]">The $DCARS token is the native cryptocurrency of the Dreamcars platform and the only way to own luxury rental cars using crypto.
              <br />
              <br />
              <span className="font-[700]">Important:</span>{" "}Without $DCARS, you can't purchase any car{" "}
              on Dreamcars. You need to hold a certain amount of $DCARS to access the Dreamcars marketplace and fully engage with the ecosystem. By holding $DCARS tokens, you'll unlock access to exclusive features such as:
              <br />
              <br />
              <ul className="pl-5 pt-[15px] text-[#fff] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-[400] leading-[130%] xs:space-y-[6px] list-disc">
                <li>Buying and selling cars</li>
                <li>Voting rights on car purchases</li>
                <li>Earn montly income from rental cars</li>
                <li>Access all Dreamcars marketplace features</li>
                <li>Use the lending protocol to access instant liquidity</li>
              </ul>
            </p>
            <div className="pt-[15px] 2xl:block xl:block lg:block md:block sm:hidden hidden xs:pt-[10px] flex xs:justify-center">
              <Button
                link="#buynow"
                text={`${t("BetaSection.btn")}`}
                classes="font-[700] bgcolor w-[534px] py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]"
              />
            </div>
          </div>
          <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%]">
            <img src={whtimg} className="absolute xs:static right-[-2%] top-[10%] w-[100%] max-w-[650.339px]" alt="" />
          </div>
          <div className="pt-[15px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex xs:pt-[10px]  xs:justify-center">
            <Button
              link="#buynow"
              text={`${t("BetaSection.btn")}`}
              classes="font-[700] bgcolor max-w-[534px] xs:mx-auto py-[12px] xs:py-[8px] xs:w-[300px] xs:text-[14px]  rounded-[10px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
export default WhatIsDocSec;
