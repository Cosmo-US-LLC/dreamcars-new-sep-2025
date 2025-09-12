import React from "react";
import { useTranslation } from "react-i18next";

import licimg1 from "../../assects/images/licimg (1).png";
import licimg2 from "../../assects/images/licimg (2).png";
import licimg3 from "../../assects/images/licimg (3).png";

const LicensedCardSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bgsecgr">
      <div className="w-[90%] max-w-[1440px] space-y-[2rem] py-[4rem] xs:py-[2rem] mx-auto ">
        <div className="text-center  ">
          <h3 className="text-[40px] xs:text-[24px] font-[700] leading-[130%] text-[#fff]">
          {t("LicensedCard.mainTitle")}
          </h3>
        </div>
        <div className="flex items-center 2xl:space-y-0 xl:space-y-0 lg:space-y-0  md:space-y-5 sm:space-y-5 space-y-5 justify-between gap-[25px] xs:block sm:block md:block">
          <div className="min-h-[200px] xs:min-h-[auto] rounded-[10px] py-[20px] px-[18px] border border-[#FFF] h-[auto] w-[100%]">
            <div className="flex justify-cenetr">
              <img
                className="mx-auto w-[76.278px] xs:w-[42px] 2xl:h-[76.278px] xl:h-[auto] lg:h-[76.278px] md:h-[auto] sm:h-[auto] h-[42px]"
                src={licimg2}
                alt=""
              />
            </div>
            <div className=" space-y-3 xs:space-y-2 text-center xs:pt-1">
              <h3 className=" text-[20px] 2xl:text-[32px] xl:text-[26px] lg:text-[24px] md:text-[28px] sm:text-[28px] font-[500] leading-[35.064px] xs:leading-[20.064px] text-white">
                {t("LicensedCard.card3Title")}
              </h3>
              <p className=" text-[16px] xs:text-[18px] font-[400] leading-[20.064px] text-white">
                {t("LicensedCard.card3Para")}<a href="" className="underline">{t("LicensedCard.cardhere2")}</a>.
              </p>
            </div>
          </div>

          <div className="min-h-[200px] xs:min-h-[auto] rounded-[10px]  py-[20px] px-[18px] border border-[#FFF] h-[auto] w-[100%]">
            <div className="">
              <div className="flex justify-cenetr">
                <img
                  className="mx-auto w-[76.278px] xs:w-[42px] 2xl:h-[76.278px] xl:h-[auto] lg:h-[76.278px] md:h-[auto] sm:h-[auto] h-[42px]"
                  src={licimg3}
                  alt=""
                />
              </div>
             <div className="space-y-3 xs:space-y-2 xs:pt-1">
             <h3 className="text-center  text-[20px] 2xl:text-[32px] xl:text-[26px] lg:text-[24px] md:text-[28px] sm:text-[28px] font-[500] leading-[35.064px] xs:leading-[20.064px] text-white">
                {t("LicensedCard.card2Title")}
              </h3>
              <p className=" text-center text-[16px] xs:text-[18px] font-[400] leading-[20.064px] text-white">
                {t("LicensedCard.card2Para")}<a href="" className="underline"> {t("LicensedCard.cardhere2")}</a>.
              </p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LicensedCardSection;
