import React from 'react'

function PressCard({src,href1,href2,title,para}) {
  return (
    <>
    <div className='bg-[#26272C] rounded-[32px] h-[95%]'>
        <div className=' 2xl:h-[241px] xl:h-[241px] lg:h-[241px] md:h-[241px] sm:h-auto h-auto  '>
            <img className='w-[100%] h-[100%] rounded-t-[32px]' src={src} alt="" />
        </div>
        <div className='p-[22px] flex flex-col'>
            <a className='text-[18px] leading-[ 28.80px] text-white font-[600] pb-[8px]' href={href1} target='blank'>{title}</a>
            <a className='text-[16px] text-white opacity-[0.7] font-[400] leading-[24px]' target='blank' href={href2}>{para}</a>
        </div>
    </div>
    </>
  )
}

export default PressCard