import React from 'react'

function SuccessCards({src,imgClass,title,para}) {
  return (
    <>
      <div
        className={" uccessCards mediabg 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[48%] sm:w-[60%] w-[80%] shadow-[ 1px 1px 15px #3F3F3F] rounded-[15px] 2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] sm:pt-[34px] pt-[34px] 2xl:pb-[25px] xl:pb-[25px] lg:pb-[25px] md:pb-[25px] sm:pb-[25px] pb-[25px] px-[16px] flex flex-col  justify-center"}
      >
        <div className='h-[210px] xs:h-[190px] flex items-end'>
        <img className={imgClass}  src={src} alt="" />
        </div>
       <div className='h-[265px] xs:h-[242px]'>
       <h3 className='pt-[40px] pb-4 xs:pb-[7px] text-[30px] font-[700] leading-[29.94px] gradientText text-center'>{title}</h3>
        <p className=" xs:text-[15px] text-[white] text-center font-[400] 2xl:leading-[28.80px] xl:leading-[28.80px] lg:leading-[28.80px] md:leading-[28.80px] sm:leading-[28.80px] leading-[18.01px] opacity-[0.7]">
          {para}
        </p>
       </div>
      </div>
    </>
  )
}

export default SuccessCards