import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import spcimg from "../../assects/images/secimg.png";
import Loinp from "../../assects/images/dtoken.png";


import { useTranslation } from "react-i18next";




const SpecialSection = () => {

  const { t } = useTranslation();

  return (
    <div
      id=""
      className="sepsecbggr pt-[4rem] !relative pb-[5rem] xs:pb-[2.2rem] xs:pt-[2rem] relative"
    >
      <div className="2xl:block xl:block lg:block md:block sm:hidden hidden absolute  top-[33%] z-[1] 2xl:left-[-0.5%] xl:left-[-1%] lg:left-[-5%] md:left-[0%] sm:left-[0%] left-[0%]">
            <img src={spcimg} className="max-w-[900px] w-[100%]" alt="" />
          </div>
      <div className=" space-y-4  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1239px] mx-auto  bg-[#d1d5db1f] xs:bg-[transparent] gradient-border-mask-simp rounded-[54.352px] px-[4rem] xs:p-2 pt-5 pb-4 ">
        <div className="relative z-[9]">
            <h3 className="text-[100px] xs:text-[46px] uppercase text-center text-[#fff] font-[700] leading-[110%] xs:leading-[100%]">Special <span className="text-[#FFD02F]">Black</span></h3>
            <h3 className="text-[106.327px] xs:text-[46px] uppercase text-center text-[#fff] font-[700] leading-[110%] xs:leading-[100%]">
            <span className="text-[#FFD02F]">Friday</span> Offer
            </h3>
            <p className="text-[22px] relative z-[20] text-[#fff] mt-[20px] text-center font-[400]">100% more $DCARS tokens only available for a limited time </p>
        </div>    
        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block justify-between items-center py-[40px] xs:py-[25px]">
          <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
            {/* <img src={spcimg} className="absolute max-w-[900px] top-[27%] z-[1] 2xl:left-[-1.5%] xl:left-[-15%] lg:left-[-20%] md:left-[0%] sm:left-[0%] left-[0%] w-[100%]" alt="" /> */}
          </div>
          <div className="max-w-[459.656px] relative z-[9] xs:max-w-[264.802px] xs:mx-auto space-y-[30px] w-[100%] relative z-[5] xs:space-y-[20px]">
            <div className="w-[100%] relative z-[5] h-[60px] xs:h-[57.905px] mx-auto flex justify-center items-center gradient-border-mask-build-awarded backdrop-blur-md bg-[#ffffff12]">
              <h4 className="text-center text-[#fff] text-[22px] xs:text-[20px] leading-[100%] py-[15px] font-[800]">Double Your $DCARS</h4>
            </div>
            <button className=" ftbutton2 font-[400] hover:text-[#fff] hover:bg-[transparent] h-[60px] xs:h-[57.905px] bg-[#FFD02F] font-[Lato] text-[22px] xs:text-[22px] font-[400] w-[100%] max-w-[459.656px] xs:max-w-[264.802px] mx-auto flex items-center justify-center rounded-[13px]">
            Bonus Code:<span className="font-[700] pl-3"> BF100</span>
            </button>
          </div>
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden relative h-[100px] sm:block block">
            <img src={spcimg} className="absolute  top-[20%] z-[1] left-[-15%] max-w-[380px]  w-[100%]" alt="" />
          </div>
          </div> 

      </div>
      
    </div>
  );
};
export default SpecialSection;