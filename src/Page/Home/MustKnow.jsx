import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import Button from "../../components/Button/button";
import youmust from "../../assects/images/mustimg.webp";
import icons1 from "../../assects/images/musticon (6).png";
import icons2 from "../../assects/images/musticon (1).png";
import icons3 from "../../assects/images/musticon (5).png";
import icons4 from "../../assects/images/musticon (4).png";
import icons5 from "../../assects/images/musticon (3).png";
import icons6 from "../../assects/images/musticon (2).png";

const muchKnoeData = [
  {
    id: 1,
    titlekey: "MustKnowSection.cardtitke1",
    para: "MustKnowSection.cardLastPara",
    img: icons1,
  },
  {
    id: 2,
    titlekey: "MustKnowSection.cardtitke2",
    para: "MustKnowSection.cardLastPara2",
    img: icons2,
  },
  {
    id: 3,
    titlekey: "MustKnowSection.cardtitke3",
    para: "MustKnowSection.cardLastPara3",
    img: icons3,
  },
  {
    id: 4,
    titlekey: "MustKnowSection.cardtitke4",
    para: "MustKnowSection.cardLastPara4",
    img: icons4,
  },
  {
    id: 5,
    titlekey: "MustKnowSection.cardtitke5",
    para: "MustKnowSection.cardLastPara5",
    img: icons5,
  },
  {
    id: 6,
    titlekey: "MustKnowSection.cardtitke6",
    para: "MustKnowSection.cardLastPara6",
    img: icons6,
  },
];

const MustKnowSection = () => {
  const { t } = useTranslation();

  return (
    <div className="Thingsbggr ">
      <div className="2xl:w-[100%] 2xl:max-w-[1250px] xl:max-w-[1346px] lg:max-w-[1346px] md:max-w-[1346px] sm:max-w-[1346px] xl:w-[94%] lg:w-[94%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1346px] ml-auto 2xl:mr-auto xl:mr-0 lg:mr-auto md:mr-auto sm:mr-auto mr-auto mt-0 mb-0 xs:mr-auto py-[4rem] xs:py-[2rem] space-y-[60px] xs:space-y-[15px]">
        <div className="space-y-[6px] xs:space-y-4 pr-[3rem] xs:pr-0">
          <h3 className="text-center  text-[46px] xs:text-[26px] font-[700] text-[white] mx-8 mb-6 xs:mb-1" dangerouslySetInnerHTML={{ __html: t('MustKnowSection.title') }}>
          </h3>
          <p className="text-[22px] font-[400] text-[#fff] leading-[130%] xs:text-[18px] text-center pb-5" dangerouslySetInnerHTML={{ __html: t('MustKnowSection.Para') }}>
          </p>
        </div>
        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block justify-between relative xs:space-y-[30px]">
          <div className="2xl:w-[53%] xl:w-[53%] lg:w-[53%] md:w-[53%] sm:w-[100%] w-[100%]">
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[20px]">
              {muchKnoeData.map((item) => (
                <>
                  <div className="backdrop-blur-md gradient-border-mask rounded-[34px] bg-[#d1d5db1f] px-8 py-[14px] space-y-[7px] min-h-[181px]">
                    <div className="flex space-x-2 items-center">
                      <img
                        className="w-[32px] h-[32px]"
                        src={item.img}
                        alt=""
                      />
                      <h3 className="text-[15px] font-[900] text-[#fff] uppercase">
                        {t(item.titlekey)}
                      </h3>
                    </div>
                    <p className="text-[#fff] text-[16px] font-[400]">
                      {t(item.para)}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-[44%] xs:w-[90%] xs:hidden sm:hidden mx-auto !mr-0 xs:!mr-auto">
            <div className="mustimgbg relative w-[100%] py-6 min-h-[500px] xs:min-h-[300px] h-[100%] max-h-[680px] flex items-center">
              <div>
                <div className="">
                  <img
                    className="2xl:max-h-[402px] xl:max-h-[424px] lg:max-h-[424px] md:max-h-[424px] sm:max-h-[424px] max-h-[374px] w-[100%] mx-auto"
                    src={youmust}
                    alt=""
                  />
                  <div className="flex justify-center w-[100%] xs:pt-[15px]">
                    <Button
                      link="#buynow"
                      text={`${t("BetaSection.btn")}`}
                      classes="font-[700] bgcolor max-w-[519px] mx-auto w-[100%] xs:h-[40px] h-[50px] xs:text-[18px] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MustKnowSection;
