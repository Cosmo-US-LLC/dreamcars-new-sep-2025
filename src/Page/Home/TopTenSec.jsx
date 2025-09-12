import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import toptemimg1 from "../../assects/images/top10 (10).png";
import toptemimg2 from "../../assects/images/top10 (9).png";
import toptemimg3 from "../../assects/images/top10 (8).png";
import toptemimg4 from "../../assects/images/top10 (7).png";
import toptemimg5 from "../../assects/images/top10 (6).png";
import toptemimg6 from "../../assects/images/top10 (5).png";
import toptemimg7 from "../../assects/images/top10 (4).png";
import toptemimg8 from "../../assects/images/top10 (3).png";
import toptemimg9 from "../../assects/images/top10 (2).png";
import toptemimg10 from "../../assects/images/top10 (1).png";
import cardft2 from "../../assects/images/cardft (1).png";
import cardft3 from "../../assects/images/cardft (2).png";
import topcrdicn1 from "../../assects/svgs/topcardicn (2).svg";
import topcrdicn2 from "../../assects/svgs/topcardicn (1).svg";
import save from "../../assects/images/save.png";
import Button from "../../components/Button/button";


const topTenData = [
    {
        id:1,
        para:"I chose Dreamcars because I've always wanted multiple sources of income that could earn me tens or even hundreds of thousands of dollars each month, providing financial security.",
        number:"#1",
        img:toptemimg1,
    },
    {
        id:2,
        para:"I've loved supercars since I was a kid, so I was thrilled when I first heard about Dreamcars. It’s the most exciting way to earn income I’ve ever come across. My goal is to fully own 3 cars on Dreamcars and earn between $30,000 and $50,000 monthly.",
        number:"#2",
        img:toptemimg2,
    },
    {
        id:3,
        para:"I’ve made a lot of money with crypto, but I fear losing it all over time, so I chose Dreamcars to add rental cars to my portfolio, helping me diversify, protect, and grow my wealth.",
        number:"#3",
        img:toptemimg3,
    },
    {
        id:4,
        para:"I’m no longer searching for 1000x gains like most people in the crypto space because you lose more than you win chasing those ‘big opportunities.’ Now, I’m looking for something reliable that makes sense to me and isn’t too volatile, like rental cars.",
        number:"#4",
        img:toptemimg4,
    },
    {
        id:5,
        para:"As a crypto trader, Dreamcars is the perfect place to park my funds and earn income while waiting for new opportunities, without having to cash out into fiat.",
        number:"#5",
        img:toptemimg5,
    },
    {
        id:6,
        para:"Dreamcars is exactly what I’ve been looking for—something stable and tangible outside the traditional banking system that helps grow my capital.",
        number:"#6",
        img:toptemimg6,
    },
    {
        id:7,
        para:"I’ve rented supercars in different countries a dozen times, spending over $20k easily, and I’ve always been fascinated by the business model. So, when I discovered Dreamcars, it was clear to me that I wanted to be a part of it.",
        number:"#7",
        img:toptemimg7,
    },
    {
        id:8,
        para:"I like the concept that Dreamcars allows me to buy luxury rental cars and build an income stream with something I truly understand, all while providing the flexibility to access my funds whenever needed.",
        number:"#8",
        img:toptemimg8,
    },
    {
        id:9,
        para:"Rental car companies earn thousands of dollars every day with their cars. I thought about starting one myself after the last bull run in 2021, but I quickly got overwhelmed. Now, I’m eager to see the solution Dreamcars offers.",
        number:"#9",
        img:toptemimg9,
    },
    {
        id:10,
        para:"I’m always one of the first to test innovative concepts, which helped me build a big portion of my fortune with new projects like Dreamcars. Being early gives me a huge advantage, as I see significant profit potential from owning the token, membership, and cars.",
        number:"#10",
        img:toptemimg10,
    },
]

const TopTenSec = () => {
  const { t } = useTranslation();

  return (
    <div className="toptenbggr">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1250px] 2xl:space-y-[3rem] xl:space-y-[3rem] lg:space-y-[3rem] md:space-y-[3rem] sm:space-y-[2rem] space-y-[2rem] pb-[0rem] xs:py-[1rem] mx-auto ">
        <div className="text-center space-y-[20px] ">
          <h3 className="text-[40px] xs:text-[26px] font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t("TopTenSec.title")}` }}>
          </h3>
          <p className="2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[18px] text-[18px] text-[#fff] max-w-[1102px] mx-auto w-[100%]">
          {t("TopTenSec.para")}
          </p>
        </div>
      
        <div className="whysec">
          <Swiper
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },
              750: {
                slidesPerView: 1,
              },
              1124: {
                slidesPerView: 1,
              },
              1440: {
                slidesPerView: 1,
              },
            }}
            keyboard={true}
            spaceBetween={14}
            className="mySwiper "
            navigation={true}
            modules={[Navigation, Keyboard]}
          >
           {
            topTenData.map((item)=>(
                <SwiperSlide>
                <div className="w-[100%] !overflow-hidden">
                <div className="min-h-[621px] xs:min-h-[400px] xs:max-h-[520px] pt-[15px] px-[2rem] xs:px-[1rem] backdrop-blur-md xs:!backdrop-blur-none bg-[#d1d5db1f] xs:!bg-[transparent] rounded-[38px] max-w-[1102px] mx-auto h-[auto] w-[100%]">
                <div className="relative gradient-border-mask-no-blur flex judtigy-between items-center border rounded-[38px] py-[4rem] xs:px-[2rem]">
                <img className="absolute top-[5%] left-[1%] h-[100px] xs:h-[40px]" src={topcrdicn1} alt="" />
                       <p className="text-[36px] xs:text-[22px] text-[#fff] font-[400] text-center max-w-[792px] w-[100%] mx-auto leading-[118%]">{item.para}</p>
                       <img className="absolute bottom-[5%] right-[2%] h-[57.643px] xs:h-[30px]" src={topcrdicn2} alt="" />
                       <div className="hidden xs:block">
                       <p className="text-[#043798] mt-[3rem] bg-[#fff] leading-[124.914px] px-[32px] rounded-[100px] text-[95px] font-[300] xs:absolute xs:bottom-[0%] left-[0%] xs:px-[20px] xs:rounded-[50px] xs:text-[26px] xs:leading-[150%]">{item.number}</p>
                   </div>
   
                  </div>
                  <div className="flex items-center h-[420px] xs:h-[220px]">
                   <div className="block xs:hidden">
                       <p className="text-[#043798] mt-[3rem] bg-[#fff] leading-[124.914px] px-[32px] rounded-[100px] text-[95px] font-[300] xs:absolute xs:top-[34%] xs:px-[20px] xs:rounded-[50px] xs:text-[26px] xs:leading-[150%]">{item.number}</p>
                   </div>
                  <img className="absolute bottom-[-3%] xs:bottom-[3%] xs:min-w-[420px] !max-w-[900px] !w-[100%] right-[-9%]" src={item.img} alt="" />
                  </div>
                 </div>
                </div>
               </SwiperSlide>
            ))
           }
          </Swiper>
        </div>
        <div className="pt-[25px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block xs:!mt-[10px] xs:py-[0px] flex justify-center xs:pt-[0px] w-[100%] ">
          <Button
            link="#buynow"
            text={`${t("BetaSection.btn")}`}
            classes="font-[700] bgcolor flex justify-center items-center max-w-[169px] xs:max-w-[358px] w-[100%] mx-auto py-[12px] xs:text-[14px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};
export default TopTenSec;
