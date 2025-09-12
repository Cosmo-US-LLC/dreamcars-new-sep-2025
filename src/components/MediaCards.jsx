import React from "react";

function MediaCards({ cardContainer, imgClass, src, para, title }) {
  return (
    <>
      <div
        className={`2xl:w-[100%] rounded-b-[54px]  xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto h-[335px]    ${cardContainer}`}
      >
       <div className="2xl:h-[160px] !rounded-t-[34px]  bg-[#fff] flex justify-center xl:h-[160px] lg:h-[160px] md:h-[160px] sm:h-[160px] h-[160px] items-center">
       <img className={`p-[10px] ${imgClass}`} src={src} alt="" />
       </div>
       <div className="backdrop-blur-md !rounded-b-[54px]  min-h-[200px] bg-[#d1d5db1f] p-[20px] ">
        <h4 className="text-[#fff] text-center text-[22px] font-[700] pb-[15px]">{title}</h4>
       <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[14px] text-[white] text-center font-[400] 2xl:leading-[20.30px] xl:leading-[20.30px] lg:leading-[20.30px] md:leading-[20.30px] sm:leading-[20.30px] leading-[20.01px] xs:pt-3">"
          {para}
        </p>
       </div>
      </div>
    </>
  );
}

export default MediaCards;
