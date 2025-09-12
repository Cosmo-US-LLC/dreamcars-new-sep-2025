import React from "react";
import { useTranslation } from "react-i18next";


import img1 from "../../assects/svgs/prdsvgs (4).svg"
import img2 from "../../assects/svgs/prdsvgs (14).svg"
import img3 from "../../assects/svgs/prdsvgs (13).svg"
import img4 from "../../assects/svgs/prdsvgs (12).svg"
import img5 from "../../assects/svgs/prdsvgs (11).svg"
import img6 from "../../assects/svgs/prdsvgs (10).svg"
import img7 from "../../assects/svgs/prdsvgs (9).svg"
import img8 from "../../assects/svgs/prdsvgs (8).svg"
import img9 from "../../assects/svgs/prdsvgs (7).svg"
import img10 from "../../assects/svgs/prdsvgs (6).svg"
import img11 from "../../assects/svgs/prdsvgs (5).svg"
import img12 from "../../assects/svgs/prdsvgs (3).svg"
import img13 from "../../assects/svgs/prdsvgs (2).svg"
import img14 from "../../assects/svgs/prdsvgs (1).svg"
import { v4 as uuidv4 } from "uuid";

// import img1 from "../../Assets/svgs/image (1).svg"
const imgData = [
    {
        id: uuidv4(),
        src:img1
    },
    {
        id: uuidv4(),
        src:img2
    },
    {
        id: uuidv4(),
        src:img3
    },
    {
        id: uuidv4(),
        src:img4
    },
    {
        id: uuidv4(),
        src:img5
    },
    {
        id: uuidv4(),
        src:img6
    },
    {
        id: uuidv4(),
        src:img7
    },
    {
        id: uuidv4(),
        src:img8
    },
    {
        id: uuidv4(),
        src:img9
    },
    {
        id: uuidv4(),
        src:img10
    },
    {
        id: uuidv4(),
        src:img11
    },
    {
        id: uuidv4(),
        src:img12
    },
    {
        id: uuidv4(),
        src:img13
    },
    {
        id: uuidv4(),
        src:img14
    },

]
const imgDatamob = [
  {
      id: uuidv4(),
      src:img3
  },
  {
      id: uuidv4(),
      src:img2
  },
  {
      id: uuidv4(),
      src:img1
  },
  {
      id: uuidv4(),
      src:img4
  },
  {
      id: uuidv4(),
      src:img5
  },
  {
      id: uuidv4(),
      src:img6
  },
  {
      id: uuidv4(),
      src:img7
  },
  {
      id: uuidv4(),
      src:img8
  },
  {
      id: uuidv4(),
      src:img9
  },
  {
      id: uuidv4(),
      src:img10
  },
  {
      id: uuidv4(),
      src:img11
  },
  {
      id: uuidv4(),
      src:img12
  },
  {
      id: uuidv4(),
      src:img13
  },
  {
      id: uuidv4(),
      src:img14
  },

]

function PoweredBy() {
  const { t } = useTranslation(); 

  return (
    <div className="prdbggr py-[100px] xs:py-[20px]">
      <div className=" w-[100%] backdrop-blur-md gradient-border-mask rounded-[34px] xs:rounded-[24px] bg-[#d1d5db1f] xs:pt-8 xs:w-[90%] max-w-[1312px] py-[60px] xs:pb-[40px]  mx-auto">
        <h2 className="2xl:text-[40px] text-[#fff] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[26px] text-center font-[700] leading-[40px] leading-[130%]  pb-[47px] xs:pb-[15px] mb-4">
         {t('PoweredBy.title')}
        </h2>
        <div className="max-w-[1140px] xs:hidden mx-auto grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-y-[2rem]">
        {imgData.slice(0, 10).map((item, id) => (
          <div key={id} className="max-w-[120px] max-h-[50px]  xs:max-h-[60px] mx-auto w-[100%] flex justify-center">
            <img src={item.src} className="" alt="" />
          </div>
        ))}
      </div>

      <div className="max-w-[1140px] xs:hidden mx-auto xs:grid xs:gap-y-[2rem] sm:grid-cols-2 grid-cols-2 flex justify-center gap-x-[0rem] mt-[2rem]">
        {imgData.slice(10, 14).map((item, id) => (
          <div key={id} className="max-w-[120px] max-h-[50px] mx-auto w-[100%] flex justify-center">
            <img src={item.src} className="" alt="" />
          </div>
        ))}
      </div>
      <div className="hidden xs:grid max-w-[1140px] mx-auto grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 grid-cols-2 gap-y-[2rem]">
        {imgDatamob.map((item, id) => (
          <div key={id} className="max-w-[120px] max-h-[50px]  xs:max-h-[60px] mx-auto w-[100%] flex justify-center">
            <img src={item.src} className="" alt="" />
          </div>
        ))}
      </div>
       
      </div>
    </div>
  );
}

export default PoweredBy;
