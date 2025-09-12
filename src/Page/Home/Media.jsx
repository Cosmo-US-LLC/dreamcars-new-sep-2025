import React from "react";
import { useTranslation } from "react-i18next";


import MediaCards from "../../components/MediaCards";
import img1 from "../../assects/images/medimg (3).png";
import img2 from "../../assects/images/medimg (2).png";
import img3 from "../../assects/images/medimg (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel,Pagination, Keyboard } from "swiper/modules";

function Media() {
  const { t } = useTranslation();

  return (
   <div className="pressbggr">
     <div className="w-[70%] max-w-[1440px]  py-[3rem] xs:py-[2rem] mx-auto space-y-[50px] xs:space-y-[15px]">
      <div>
        <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[26px] text-center text-[#FFF] font-[700] leading-[40px] 2xl:pb-[39px] xl:pb-[39px] lg:pb-[39px] md:pb-[39px] sm:pb-[30px] pb-[10px]">
        {t('Media.title')}
        </h2>
      </div>
      <Swiper

        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1124: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={14}
        className="mySwiper flex justify-center xs:h-[345px] h-[360px]"
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >

        <SwiperSlide className="wrap"  >
        <MediaCards
          cardContainer={""}
          src={img1}
          imgClass={"max-h-[60px]"}
          title="Yahoo Finance"
          para="“The simple and intuitive Dreamcars platform offers the average person the ability to invest in luxury cars around the world starting as little as $10.”   "
        />
        </SwiperSlide>
        <SwiperSlide className="wrap"  >
          <MediaCards
            cardContainer={""}
            src={img2}
            imgClass={"max-h-[60px]"}
          title="Bloomberg"
            para="“Dreamcars will revolutionize the luxury car market by giving investors a simple platform to own a piece of luxury car.”"
          />
        </SwiperSlide>
        <SwiperSlide className="wrap"  >
          <MediaCards
            cardContainer={""}
            src={img3}
            imgClass={"max-h-[60px]"}
          title="Crypto News"
            para="“Dreamcars power play is disrupting the traditional luxury car ownership market. NFTs are used to represent NFT ownership in properties and all NFTs are 100% backed by real-world luxury cars.” "
          />
        </SwiperSlide>

      </Swiper>
    
    </div>
   </div>
  );
}

export default Media;
