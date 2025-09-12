import React from "react";
import { useTranslation } from "react-i18next";


import nftimg from "../../assects/images/nftimg.png";


const NftSection = () => {
  const { t } = useTranslation();

  return (
    <div className="nftbggr">
      <div className="pt-[4rem] xs:pt-[2rem]">
        <div className="space-y-12 h-[300px] xs:space-y-4 ">
          <h3 className="text-center text-[40px] xs:text-[26px] xs:leading-[123%] font-[700] uppercase text-[white] ">
          {t('NFTSection.title')}<br />
          {t('NFTSection.title2')} <span className="text-[#FED23D]">{t('NFTSection.title3')}</span>{" "}
          </h3>
          <p className="text-[18px] xs:text-[18px] xs:px-2 font-[400] text-center text-[#fff]">
          {t('NFTSection.para1')} <br /> 
          {t('NFTSection.para2')}
          </p>
          <div className="">
            <img src={nftimg} alt="" />
            <p id="roadmap"></p>
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default NftSection;
