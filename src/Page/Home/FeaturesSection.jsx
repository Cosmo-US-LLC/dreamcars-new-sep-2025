import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Pagination, Keyboard } from "swiper/modules";

import cardft1 from "../../assects/images/cardft (3).png";
import cardft2 from "../../assects/images/cardft (1).png";
import cardft3 from "../../assects/images/cardft (2).png";
import cardicon from "../../assects/images/cardbtn.png";
import save from "../../assects/images/save.png";
import Button from "../../components/Button/button";

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="Featuresbggr">
      <div className="2xl:w-[100%] xl:w-[94%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1250px] 2xl:space-y-[3rem] xl:space-y-[3rem] lg:space-y-[3rem] md:space-y-[3rem] sm:space-y-[2rem] space-y-[2rem] pb-[75px] xs:py-[1rem] mx-auto ">
        <div className="text-center space-y-[20px] ">
          <h3 className="text-[40px] xs:text-[26px] font-[700] leading-[130%] text-[#fff]" dangerouslySetInnerHTML={{ __html: `${t("FeaturesSection.title")}` }}>
          </h3>
          <p className="text-[20px] sm:text-[18px] text-[#fff] max-w-[802px] mx-auto w-[100%]">
            {t("FeaturesSection.para")}
          </p>
        </div>
        <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden items-center 2xl:space-y-0 xl:space-y-0 lg:space-y-0  md:space-y-5 sm:space-y-5 space-y-2 justify-between gap-[25px] ">
          <div className="min-h-[221px] max-w-[360px] h-[auto] w-[100%]">
            <div className=" rounded-[18px] max-w-[350px] w-[100%]">
              <div className="bgcardfet1 h-[221px] rounded-t-[18px]">
                <div className="flex flex-col pt-5 pb-2 justify-between h-[100%]">
                  <div className="px-4 flex justify-between">
                    <button className="rounded-[5px] bg-[#FFD02F] text-[9px] font-[600] uppercase py-[7px] px-[9px]">
                      {t("FeaturesSection.cardcarpara1")}
                    </button>
                    <img className="cursor-pointer" src={save} alt="" />
                  </div>
                  <div>
                    <div className="bgprice px-[10px] py-[15px] max-w-[220px] w-[100%]">
                      <h4 className="text-[16px] text-[#fff] font-[600]">

                        <span className="text-[16px] font-[500]">
                          {t("FeaturesSection.cardcarparaprice1")}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-[17px] rounded-b-[18px] px-3 bg-[#fff]">
                <h3 className="text-[24px] font-[700]"> {t("FeaturesSection.cardTitle1")}</h3>
                <div className="shadowcard bg-[#fff] flex px-3 py-3 rounded-[8px] justify-between">
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft3} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      32%
                    </p>
                    <p className="text-[10px] font-[400]  text-center">
                      {t("FeaturesSection.carditems1")}
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft2} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      5.20%
                    </p>
                    <p className="text-[10px] font-[400] text-center">
                      {t("FeaturesSection.carditems2")}
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft1} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      {t("FeaturesSection.cardMonthly")}
                    </p>
                    <p className="text-[10px] font-[400] text-center">
                      {t("FeaturesSection.carditems3")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[12px] font-[500]">{t("FeaturesSection.cardfull")}</p>
                    <h5 className="text-[20px] font-[600]">$500,000</h5>
                  </div>
                  <div className="space-x-1">
                    <button className="hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[black] border-[#FFD02F] border text-[14px] font-[500] px-[15px] py-[12px] bg-[#FFD02F] rounded-[10px]">
                      {t("FeaturesSection.btn")}
                      <img
                        className="inline-block h-[15px] ml-1"
                        src={cardicon}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[221px] max-w-[360px] h-[auto] w-[100%]">
            <div className=" rounded-[18px] max-w-[350px] w-[100%]">
              <div className="bgcardfet2 h-[221px] rounded-t-[18px]">
                <div className="flex flex-col pt-5 pb-2 justify-between h-[100%]">
                  <div className="px-4 flex justify-end">
                    <img className="cursor-pointer" src={save} alt="" />
                  </div>
                  <div>
                    <div className="bgprice px-[10px] py-[15px] max-w-[220px] w-[100%]">
                      <h4 className="text-[16px] text-[#fff] font-[600]">
                        <span className="text-[16px] font-[500]">{t("FeaturesSection.cardcarparaprice2")}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-[17px] rounded-b-[18px] px-3 bg-[#fff]">
                <h3 className="text-[24px] font-[700]">{t("FeaturesSection.cardTitle2")}</h3>
                <div className="shadowcard bg-[#fff] flex px-3 py-3 rounded-[8px] justify-between">
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft3} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      24%
                    </p>
                    <p className="text-[10px] font-[400]  text-center">
                      {t("FeaturesSection.carditems1")}
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft2} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      4.3%
                    </p>
                    <p className="text-[10px] font-[400] text-center">
                      {t("FeaturesSection.carditems2")}
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft1} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      {t("FeaturesSection.cardMonthly")}
                    </p>
                    <p className="text-[10px] font-[400] text-center">
                      {t("FeaturesSection.carditems3")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[12px] font-[500]">{t("FeaturesSection.cardfull")}</p>
                    <h5 className="text-[20px] font-[600]">$260,000</h5>
                  </div>
                  <div className="space-x-1">
                    <button className="hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[black] border-[#FFD02F] border text-[14px] font-[500] px-[15px] py-[12px] bg-[#FFD02F] rounded-[10px]">
                      {t("FeaturesSection.btn")}
                      <img
                        className="inline-block h-[15px] ml-1"
                        src={cardicon}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[221px] max-w-[360px] h-[auto] w-[100%]">
            <div className=" rounded-[18px] max-w-[350px] w-[100%]">
              <div className="bgcardfet3 h-[221px] rounded-t-[18px]">
                <div className="flex flex-col pt-5 pb-2 justify-between h-[100%]">
                  <div className="px-4 flex justify-end">
                    <img className="cursor-pointer" src={save} alt="" />
                  </div>
                  <div>
                    <div className="bgprice px-[10px] py-[15px] max-w-[220px] w-[100%]">
                      <h4 className="text-[16px] text-[#fff] font-[600]">
                        <span className="text-[16px] font-[500]">{t("FeaturesSection.cardcarparaprice3")}
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-[17px] rounded-b-[18px] px-3 bg-[#fff]">
                <h3 className="text-[24px] font-[700]"> {t("FeaturesSection.cardTitle3")}</h3>
                <div className="shadowcard bg-[#fff] flex px-3 py-3 rounded-[8px] justify-between">
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft3} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      27%
                    </p>
                    <p className="text-[10px] font-[400]  text-center">
                      {t("FeaturesSection.carditems1")}
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft2} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      3.80%
                    </p>
                    <p className="text-[10px] font-[400] text-center">
                      {t("FeaturesSection.carditems2")}
                    </p>
                  </div>
                  <div className="space-y-[5px]">
                    <div className="flex justify-center items-center">
                      <img className="h-[17px]" src={cardft1} alt="" />
                    </div>
                    <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                      {t("FeaturesSection.cardMonthly")}
                    </p>
                    <p className="text-[10px] font-[400] text-center">
                      {t("FeaturesSection.carditems3")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[12px] font-[500]">{t("FeaturesSection.cardfull")}</p>
                    <h5 className="text-[20px] font-[600]">$290,000</h5>
                  </div>
                  <div className="space-x-1">
                    <button className="hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[black] border-[#FFD02F] border text-[14px] font-[500] px-[15px] py-[12px] bg-[#FFD02F] rounded-[10px]">
                      {t("FeaturesSection.btn")}
                      <img
                        className="inline-block h-[15px] ml-1"
                        src={cardicon}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
          <Swiper
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1124: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            pagination={true}
            keyboard={true}
            spaceBetween={14}
            className="mySwiper xs:h-[500px]"
            navigation={true}
            modules={[Navigation, Pagination, Keyboard]}
          >
            <SwiperSlide>
              <div className="min-h-[221px]  max-w-[360px] mx-auto h-[auto] w-[100%]">
                <div className=" rounded-[18px] mx-auto max-w-[350px] w-[100%]">
                  <div className="bgcardfet1 h-[221px] rounded-t-[18px]">
                    <div className="flex flex-col pt-5 pb-2 justify-between h-[100%]">
                      <div className="px-4 flex justify-between">
                        <button className="rounded-[5px] bg-[#FFD02F] text-[9px] font-[600] uppercase py-[7px] px-[9px]">
                          Car of the week
                        </button>
                        <img className="cursor-pointer" src={save} alt="" />
                      </div>
                      <div>
                        <div className="bgprice px-[10px] py-[15px] max-w-[220px] w-[100%]">
                          <h4 className="text-[16px] text-[#fff] font-[700]">
                            <span className="text-[16px] font-[500]">
                              {t("FeaturesSection.cardcarparaprice1")}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 space-y-[17px] rounded-b-[18px] px-3 bg-[#fff]">
                    <h3 className="text-[24px] font-[700]">
                      Rolls Royce Cullinan
                    </h3>
                    <div className="shadowcard bg-[#fff] flex px-3 py-3 rounded-[8px] justify-between">
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft3} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                          32%
                        </p>
                        <p className="text-[10px] font-[400]  text-center">
                          Expected APY
                        </p>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft2} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        5.20%
                        </p>
                        <p className="text-[10px] font-[400] text-center">
                        Maintenance & Insurance</p>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft1} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        Monthly
                        </p>
                        <p className="text-[10px] font-[400] text-center">
                        Payouts
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[12px] font-[500]">Full Price</p>
                        <h5 className="text-[20px] font-[700]">$500,000</h5>
                      </div>
                      <div className="space-x-1">
                        <button className="hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[black] border-[#FFD02F] border text-[14px] font-[500] px-[15px] py-[12px] bg-[#FFD02F] rounded-[10px]">
                          Coming Soon{" "}
                          <img
                            className="inline-block h-[15px] ml-1"
                            src={cardicon}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[221px] max-w-[360px] mx-auto  h-[auto] w-[100%]">
                <div className=" rounded-[18px] max-w-[350px] mx-auto  w-[100%]">
                  <div className="bgcardfet2 h-[221px] rounded-t-[18px]">
                    <div className="flex flex-col pt-5 pb-2 justify-between h-[100%]">
                      <div className="px-4 flex justify-end">
                        <img className="cursor-pointer" src={save} alt="" />
                      </div>
                      <div>
                        <div className="bgprice px-[10px] py-[15px] max-w-[220px] w-[100%]">
                          <h4 className="text-[16px] text-[#fff] font-[700]">
                            <span className="text-[16px] font-[500]">
                              {t("FeaturesSection.cardcarparaprice2")}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 space-y-[17px] rounded-b-[18px] px-3 bg-[#fff]">
                    <h3 className="text-[24px] font-[700]">
                      Bentley Flying Spur

                    </h3>
                    <div className="shadowcard bg-[#fff] flex px-3 py-3 rounded-[8px] justify-between">
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft3} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        24%
                        </p>
                        <p className="text-[10px] font-[400]  text-center">
                          Expected APY
                        </p>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft2} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        4.3%
                        </p>
                        <p className="text-[10px] font-[400] text-center">
                        Maintenance & Insurance
                        </p>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft1} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        Monthly
                        </p>
                        <p className="text-[10px] font-[400] text-center">
                        Payouts
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[12px] font-[500]">Full Price</p>
                        <h5 className="text-[20px] font-[700]">$260,000</h5>
                      </div>
                      <div className="space-x-1">
                        <button className="hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[black] border-[#FFD02F] border text-[14px] font-[500] px-[15px] py-[12px] bg-[#FFD02F] rounded-[10px]">
                          Coming Soon{" "}
                          <img
                            className="inline-block h-[15px] ml-1"
                            src={cardicon}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[221px] mx-auto  max-w-[360px] h-[auto] w-[100%]">
                <div className=" rounded-[18px] mx-auto  max-w-[350px] w-[100%]">
                  <div className="bgcardfet3 h-[221px] rounded-t-[18px]">
                    <div className="flex flex-col pt-5 pb-2 justify-between h-[100%]">
                      <div className="px-4 flex justify-end">
                        <img className="cursor-pointer" src={save} alt="" />
                      </div>
                      <div>
                        <div className="bgprice px-[10px] py-[15px] max-w-[220px] w-[100%]">
                          <h4 className="text-[16px] text-[#fff] font-[700]">
                            <span className="text-[16px] font-[500]">
                              {t("FeaturesSection.cardcarparaprice3")}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 space-y-[17px] rounded-b-[18px] px-3 bg-[#fff]">
                    <h3 className="text-[24px] font-[700]">
                    McLaren 720S

                    </h3>
                    <div className="shadowcard bg-[#fff] flex px-3 py-3 rounded-[8px] justify-between">
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft3} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        27%
                        </p>
                        <p className="text-[10px] font-[400]  text-center">
                          Expected APY
                        </p>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft2} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        3.80%
                        </p>
                        <p className="text-[10px] font-[400] text-center">
                        Maintenance & Insurance
                        </p>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="flex justify-center items-center">
                          <img className="h-[17px]" src={cardft1} alt="" />
                        </div>
                        <p className="text-[12px] text-center text-[#2E71F1] font-[400]">
                        Monthly
                        </p>
                        <p className="text-[10px] font-[400] text-center">
                        Payouts
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[12px] font-[500]">Full Price</p>
                        <h5 className="text-[20px] font-[700]">$290,000</h5>
                      </div>
                      <div className="space-x-1">
                        <button className="hover:bg-[transparent] hover:border hover:border-[#FFD02F] hover:text-[black] border-[#FFD02F] border text-[14px] font-[500] px-[15px] py-[12px] bg-[#FFD02F] rounded-[10px]">
                          Coming Soon{" "}
                          <img
                            className="inline-block h-[15px] ml-1"
                            src={cardicon}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
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
export default FeaturesSection;
