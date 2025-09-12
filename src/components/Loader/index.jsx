import React from "react";

import Car from "../../assects/images/carload (1).png";
import whCar1 from "../../assects/images/wheelcar (1).png";
import lines1 from "../../assects/images/carline1.png";
import lines2 from "../../assects/images/carline2.png";

const Loader = () => {
  return (
    <>
      <div className="bg-[#d3d3d3] h-[100vh] py-[80px]  flex items-center justify-center ">
        <div className=" space-y-[70px]">
          <div className="mx-auto overflow-hidden max-w-[600px] xs:max-w-[290px]">
          <div className="h-[145px] xs:h-[60px] relative">
           <img className="m-auto h-[140px] xs:h-[60px] absolute top-[1%] xs:top-[8%] xs:w-[220px]" src={Car} alt="" />
            <img className="absolute 2xl:h-[85px] 2xl:w-[85px] xl:h-[85px] xl:w-[85px] lg:h-[85px] lg:w-[85px] md:h-[85px] md:w-[85px] sm:h-[85px] sm:w-[85px] h-[32px] w-[32px] top-[45%] xs:top-[60%] rotate-infinite left-[6%] xs:left-[7%]" src={whCar1} alt="" />
            <img className="absolute 2xl:h-[85px] 2xl:w-[85px] xl:h-[85px] xl:w-[85px] lg:h-[85px] lg:w-[85px] md:h-[85px] md:w-[85px] sm:h-[85px] sm:w-[85px] h-[32px] w-[32px] top-[45%] xs:top-[60%] rotate-infinite right-[22%] xs:right-[30%]" src={whCar1} alt="" />
           </div>
           
           <div className=" flex items-center relative w-[800px] left-[-10%]">
           <div className="space-y-[10px] relative left-[-15%] ">
            <div className="road flex items-center">
              <img className="w-[100%] h-[2px] xs:h-[2px] " src={lines1} alt="" />
              <img className="w-[100%]  h-[2px] xs:h-[2px] " src={lines1} alt="" />

            </div>
            <div className="road flex items-center">
              <img className="w-[100%] h-[2px] xs:h-[2px] " src={lines2} alt="" />
              <img className="w-[100%]  h-[2px] xs:h-[2px] " src={lines2} alt="" />
            </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loader;
