import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Iicon from "../../assects/images/i.png";
import Loinp from "../../assects/images/dtoken.png";
// import eth1 from "../../assects/images/loinppre (1).png";
import eth from "../../assects/svgs/ethsv.svg";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/loinppre (2).png";
import BNB2 from "../../assects/svgs/bbbn.svg";
import Button from "../../components/Button/button";
import downarw from "../../assects/svgs/droparw.svg";
import downeth from "../../assects/svgs/dropeth.svg";
import Solid from "../../assects/images/logo-white-3.png.png";
import que from "../../assects/svgs/questionIcon.svg";
import refe from "../../assects/svgs/referralIcon.svg";
import Link1 from "../../assects/svgs/linkss (4).svg";
import Link2 from "../../assects/svgs/linkss (3).svg";
import Link3 from "../../assects/svgs/linkss (2).svg";
import Link4 from "../../assects/svgs/linkss (1).svg";
import cardsvg1 from "../../assects/svgs/cardsvg (1).svg";
import cardsvg2 from "../../assects/svgs/cardsvg (2).svg";


import { useTranslation } from "react-i18next";

const options = [
  { id: 1, label: "USDT", image: downeth },
  { id: 2, label: "BNB", image: BNB },
  { id: 3, label: "ETH", image: eth },
];

const cardData = [
  {
    id: 1,
    title: "Best New Crypto",
    titleWidth: "max-w-[155px] min-w-[155px]",
    para:"By Coinrise, 2024"
  },
  {
    id: 2,
    title: "Best Crypto  Pre-Sale ",
    titleWidth: "max-w-[183px] min-w-[140px]",
    para:"By Coinrise, 2024"
  },
  {
    id: 3,
    title: "Best Crypto Innovation",
    titleWidth: "max-w-[155px] min-w-[150px]",
    para:"Altcoin Daily 2024"

  },
  {
    id: 4,
    title: "Best Crypto Growth Potential",
    titleWidth: "max-w-[223px] min-w-[145px]",
    para:"Altcoin Daily 2024"

  },
];

const OnlyAvaibel = () => {
  const [isOPen, setIsOPen] = useState(false);
  const [isOPenSpin, setIsOPenSpin] = useState(false);
  const [pop2, setPop2] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation();

  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 1, label: "ETH", imgSrc: eth },
    { id: 2, label: "USDT", imgSrc: USDT },
    { id: 3, label: "BNB", imgSrc: BNB2 },
  ];

  const handleClickButton = (id) => {
    setActiveButton(id);
  };

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleClick = () => {
    setIsOPen(!isOPen);
  };

  const handleClose = () => {
    setIsOPen(false);
  };

  const handelBonus = () => {
    setShow(!show);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").substring(1);
    const offset = parseInt(event.target.getAttribute("data-offset"), 10);

    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });
  };

  function copyUrlToClipboard() {
    const url = "https://dreamcars.co/";

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("URL copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy the URL");
        console.error("Failed to copy the URL", err);
      });
  }

  return (
    <div
      id="dashboard"
      className="avsecbggr pt-[1rem] pb-[4rem] xs:pb-[2.2rem] xs:pt-[1rem]"
    >
      <div className=" space-y-4  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1276px] mx-auto ">
        <div className="2xl:space-y-[45px]  xl:space-y-[45px] lg:space-y-4 xs:space-y-3 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
         
          <div className="w-[100%] xl:w-[100%] mt-[50px] lg:w-[100%] lg:mx-auto flex flex-col justify-end  xs:w-[100%] sm:w-[100%] md:w-[100%] z-[2]">
            <div className="backdrop-blur-md max-w-[950px] w-[100%] bg-[#d1d5db1f] mx-auto gradient-border-mask rounded-[34px] space-y-[10px]">
              <div className=" pt-[30px] xs:pt-[20px] pb-[14px] xs:pb-[20px] relative  2xl:px-[52px] xl:px-[45px] lg:px-[32px] md:px-[52px] sm:px-[52px] px-[10px]  space-y-4">
                <div className="w-[267px] xs:w-[133px] mx-auto absolute top-[-2.5%] left-[35.5%] xs:left-[33.8%]">
                  <div className="gradient-border-mask-own-hero-title backdrop-blur-xl w-[267px] xs:w-[133px] mx-auto  h-[47px] xs:h-[35px]  flex justify-center items-center">
                    <h3 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px] text-[12px] font-[700] text-center  2xl:leading-[110%] xl:leading-[110%]  lg:leading-[110%] md:leading-[110%] sm:leading-[110%] text-white">
                      {t("ProductDetails.card-title")}
                    </h3>
                  </div>
                </div>
                <div className="bgposter !bg-[#232323] max-w-[733px] w-[100%] mx-auto ">
                  <div className="bg-[#212121]  rounded-t-[13px] max-w-[571px] w-[100%] mx-auto xs:px-[15px]  sm:px-16 md:px-16 py-6 xs:pt-4 sm:pt-5 md:pt-8 ">
                    <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px]  font-[700] text-center text-[#fff]">
                      {t("ProductDetails.card-main-amount")}
                    </h3>
                    <div className="flex items-center justify-between space-x-2 ">
                      <h5 className=" text-center font-[Lato] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[13px] xs:text-[12px]  text-[#929292]">
                        {t("ProductDetails.card-goal-raised")}
                      </h5>
                      <span className="relative">
                        <button
                          onMouseEnter={() => setPop1(true)}
                          onMouseOut={() => setPop1(false)}
                          type="button"
                          className={`cursor-pointer `}
                        >
                          <img
                            src={Iicon}
                            alt=""
                            style={{ marginBottom: "-8px", width: "20px" }}
                          />
                        </button>
                        <div
                          className={`${
                            pop1
                              ? "absolute z-10 w-[220px] right-28  2xl:right-[0px] xl:right-[0px] lg:right-[0px] 2xl:top-[-104px] xl:top-[-104px] lg:top-[-104px] md:right-[0px] md:top-[-56px] sm:right-[0px] sm:top-[-56px] xs:right-[0px] top-[-92px] text-center py-2 px-3 bg-[#ffffff]  rounded-lg text-[#22222] text-sm"
                              : "hidden"
                          }`}
                        >
                          <span className="text-black font-[Lato]">
                            The pre-sale (ICO) will take place in multiple
                            stages, with the $DCARS token price increasing at
                            each stage.
                          </span>
                          <div className="absolute -z-99 w-5 h-5 -bottom-1 sm:right-[10px] xs:right-[10px] right-[10px] bg-[#ffffff] rotate-45"></div>
                        </div>
                      </span>
                    </div>
                    <div>
                      <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bgcolor h-2.5 rounded-full w-[98%]"></div>
                      </div>
                      <p className="text-end text-[12px] pt-[3px]  text-[#929292]">
                        {t("ProductDetails.card-small-amount")}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-[Lato] text-center text-[16px] xs:text-[16px] font-[500] text-white">
                        {t("ProductDetails.card-participants")}
                      </h5>
                      <div></div>
                      <h5 className="font-[Lato] text-center text-[15px] xs:text-[14px]  font-[500] space-x-1 text-[#929292]">
                        {t("ProductDetails.card-listingPrice")}
                      </h5>
                    </div>
                  </div>
                  <div className="bg-[#3F3F3F] rounded-b-[10px] px-[50px] pt-4 pb-[30px] xs:pb-5 sm:pb-5 md:pb-8  xs:px-[15px] sm:px-14 md:px-10 ">
                    <div className="flex justify-between"></div>
                    <div className="py-1 space-y-3 xs:space-y-3">
                      <div className="flex backdrop-blur-md bg-[#ffffff40] border-r border-t rounded-[60px]  w-[100%] mx-auto py-[5px]  items-center justify-center">
                        <p className="text-[16px] text-[#fff] text-center font-[700]">
                          Current Price = $0.0105{" "}
                          <span className="text-[#19D548] font-[700]">
                            (+500%)
                          </span>
                        </p>
                      </div>
                      <div className="2xl:flex justify-between xl:flex lg:flex md:flex flex sm:flex 2xl:space-x-[11px] xl:space-x-[11px] lg:space-x-[11px] md:space-x-[11px] sm:space-x-0 space-x-1">
                        {buttons.map((button) => (
                          <button
                            key={button.id}
                            onClick={() => handleClickButton(button.id)}
                            className={`flex items-center xs:h-[40px] sm:h-[40px] h-[48px] 2xl:w-[100%] xl:w-[1000%] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] justify-center max-w-[212px] xs:text-[14px] rounded-[14px] xs:py-1 py-[8px] backdrop-blur transition-all duration-300 ${
                              activeButton === button.id
                                ? "bg-white text-black shadow-inner"
                                : "bg-[#ffffff17] text-white"
                            }`}
                          >
                            <div className="flex flex-col items-center justify-center">
                              <img
                                src={button.imgSrc}
                                className="h-[17px]"
                                alt={button.label}
                              />
                              <p className="text-[14px] xs:text-[10px] font-[Lato] font-[400] mt-[2px] w-[30px]">
                                {button.label}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="flex relative z-[9]">
                        <div className="w-[100%] space-y-[5px]">
                          <label
                            htmlFor=""
                            className="text-[#D0D0D0] font-[Lato] text-[16px] xs:text-[14px]"
                          >
                            {t("ProductDetails.card-body-amount-pay")}
                          </label>
                          <div className="flex justify-between bg-[#fff] rounded-[6px]">
                            <input
                              type="text"
                              className="bg-[#fff] w-[80%] p-2 rounded-l-[6px] text-[#000] text-[20px] h-[44px] font-[Lato] w-[100%] outline-none rounded-l "
                              placeholder="100"
                            />
                            <div className="relative z-[9] inline-block text-left">
                              <button
                                onClick={handleButtonClick}
                                className="h-[44px] flex text-[#fff] text-[12px] font-[400] items-center justify-between p-[7px] !pr-[10px] 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[42px] border rounded-r-[6px] bg-[#D1D5DB]"
                              >
                                <div className="flex items-center space-x-[8px]">
                                  <img
                                    src={selectedOption.image}
                                    alt={selectedOption.label}
                                    className="max-h-[25px] min-h-[22px]"
                                  />
                                  <span className="text-[#000] leading-[100%] text-[14px] xs:text-[10px] font-[700] pt-1 xs:pt-0">
                                    <span>{selectedOption.label}</span>
                                  </span>
                                </div>
                                <img
                                  src={downarw}
                                  className=""
                                  alt="dropdown arrow"
                                />
                              </button>
                              {showDropdown && (
                                <div className="absolute right-0 mt-2 w-[130px] backdrop-blur-md bg-[#646464e6] rounded-[12px] shadow-lg">
                                  {options.map((option) => (
                                    <div
                                      key={option.id}
                                      onClick={() => handleOptionClick(option)}
                                      className="cursor-pointer flex  items-center p-[7px] space-x-[8px] hover:bg-[#737373] rounded-[5px]"
                                    >
                                      <div className="flex items-center justify-center min-w-[32px]">
                                        <img
                                          src={option.image}
                                          alt={option.label}
                                          className="max-h-[30px] min-h-[29px]"
                                        />
                                      </div>
                                      <span className="text-[#fff] text-[14px] font-[500]">
                                        {option.label}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex relative z-[1]">
                        <div className="w-[100%] space-y-[5px]">
                          <label
                            htmlFor=""
                            className="text-[#D0D0D0] font-[Lato] text-[16px] xs:text-[14px]"
                          >
                            {t("ProductDetails.card-body-amount-receive")}{" "}
                            <span className="text-[#FFD02F] font-[800] underline">
                              {t("ProductDetails.card-body-amount-receivespan")}
                            </span>
                          </label>
                          <div className="flex items-center justify-between bg-[#fff] rounded-[6px]">
                            <input
                              type="text"
                              className="text-[#000] p-2 text-[20px] h-[44px] bg-[#fff] font-[Lato] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-[70%] outline-none rounded-l-[6px] "
                              placeholder="58.823"
                            />
                            <button className="flex text-[16px] xs:text-[10px] font-[700] items-center px-2 space-x-[8px] 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[44px] text-[#000] rounded-r-[6px] bg-[#D1D5DB]">
                              <img
                                src={Loinp}
                                className="h-[32px] xs:w-[35px] xs:h-[35px] mr-2 xs:mr-1"
                                alt=""
                              />
                              $DCARS
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-[100%] relative z-[1] pt-[15px] xs:pt-[20px]">
                        <Button
                          classes="bgcolor ftbutton2 font-[700] font-[Lato] w-[100%] h-[44px] rounded-[13px] text-[18px]"
                          text={`${t("ProductDetails.card-body-walletBtn")}`}
                        />
                      </div>
                      {show && (
                        <div className="flex relative z-[1]">
                          <input
                            type="text"
                            className="h-[44px] w-[100%] px-2 outline-none rounded-l"
                            placeholder="Bonus code"
                          />
                          <button className="flex h-[44px] items-center text-white rounded-r space-y-3 px-5   bg-black">
                            <p className="text-[12px] text-whites font-[700]">
                              {t("ProductDetails.card-body-Bonus-code-apply")}
                            </p>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="max-w-[733px] pb-[1rem] w-[100%] mx-auto">
                  <div className=" flex justify-between relative z-[1] space-x-[15px] xs:pt-[0.5rem]">
                    <a
                      href="#how-to-buy"
                      onClick={handleLinkClick}
                      data-offset="100"
                      className="cursor-pointer border border-[#DDD] text-[14px] xs:text-[11px] font-[500]  leading-[21px] flex w-[100%] max-w-[356.62px] h-[40px] items-center justify-center text-white font-[Lato] rounded-[10px] bg-[#323232]"
                    >
                      {" "}
                      <img
                        className="pr-[10px] w-[25px] h-[25px]"
                        src={que}
                        alt=""
                      />{" "}
                      {t("ProductDetails.card-body-buyBtn")}
                    </a>
                    <button
                      onClick={handleClick}
                      className="cursor-pointer border border-[#DDD] text-[14px] xs:text-[11px] font-[500] font-[Lato] leading-[21px] flex w-[100%] max-w-[356.62px] h-[40px] items-center justify-center text-white  rounded-[10px] bg-[#323232]"
                    >
                      {" "}
                      <img
                        className="pr-[10px] w-[25px] h-[25px]"
                        src={refe}
                        alt=""
                      />
                      {t("ProductDetails.card-body-referralBtn")}
                    </button>
                  </div>
                </div>
                
                {!show && (
                  <div className="pb-[18px] relative z-[1]">
                    <p
                      onClick={handelBonus}
                      className="cursor-pointer text-[#DDD] underline text-center  text-[16px] font-[500] leading-[7px]"
                    >
                      {t("ProductDetails.card-body-Bonus-code")}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="max-w-[894px] mt-[25px] mx-auto w-[100%] flex items-center py-[0px] xs:!pt-[0px] justify-between space-x-[1rem]">
              <div className="w-[518px] h-[50px] xs:h-[40px] relative z-[9] flex justify-center items-center gradient-border-mask-own-last backdrop-blur-md bg-[#5555556e] xs:bg-[#ffffff08]">
                <a
                  href="https://github.com/solidproof/projects/blob/main/2024/Dreamcars/EVM_Audit_SolidProof_Dreamcars.pdf"
                  target="_blank"
                  className="relative z-[20] 2xl:text-[18px]  xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16.871px]  text-[11px]  text-white underline font-[Lato]"
                >
                  {t("ProductDetails.para3last")}
                </a>
              </div>
              <div className="w-[100%] max-w-[345.254px] h-[50px] xs:h-[40px] relative z-[9] flex justify-center items-center gradient-border-mask-own-last backdrop-blur-md bg-[#5555556e] xs:bg-[#ffffff08]">
                <img className="max-h-[40px] xs:h-[28px]" src={Solid} alt="" />
              </div>
            </div>
            
          </div>
        </div>
        <div className="px-[23px] !pr-[18px] py-[10px] !mt-[15px] relative z-[9] gradient-border-mask-own-hero-cent backdrop-blur-md bg-[#ffffff08] flex justify-between max-w-[894px] mx-auto items-center">
                  <h4 className="text-[18px] xs:text-[13px] font-[700] w-[378px] mx-auto text-[#fff]">
                    Share Dreamcars with your Friends
                  </h4>
                  <div className="flex justify-center space-x-[10px] xs:space-x-[5px]">
                    <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] relative z-[9] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                      <a
                        href=""
                        target=""
                        rel="noopener noreferrer"
                        className="relative z-[20]"
                        onClick={(e) => {
                          e.preventDefault();
                          copyUrlToClipboard();
                        }}
                      >
                        <img
                          className="h-[22px] xs:h-[15px] cursor-pointer w-[22px] xs:w-[20px]"
                          src={Link1}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                      <a
                        href="https://twitter.com/dreamcars_bsc"
                        target="_blank"
                        className="cursor-pointer relative z-[20] "
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-[22px]  xs:h-[15px] cursor-pointer w-[22px] xs:w-[20px]"
                          src={Link2}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                      <a
                        href="https://t.me/Dreamcars_bsc"
                        target="_blank"
                        className="relative z-[20]  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-[22px]  xs:h-[15px] cursor-pointer w-[22px] xs:w-[20px]"
                          src={Link3}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                      <a
                        href="https://www.instagram.com/dreamcars_bsc/"
                        className="relative z-[20]  cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-[22px]  xs:h-[15px] cursor-pointer w-[22px] xs:w-[20px]"
                          src={Link4}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>

      </div>
    </div>
  );
};
export default OnlyAvaibel;