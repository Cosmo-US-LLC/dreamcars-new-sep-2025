import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

import Tick1 from "../../assects/images/tick1 (1).png";
import cross from "../../assects/images/xcs.svg";
import Crown from "../../assects/images/rng (5).png";
import R1 from "../../assects/images/rng (2).webp";
import R2 from "../../assects/images/rng (3).png";
import R3 from "../../assects/images/rng (1).png";
import R4 from "../../assects/images/rng (4).webp";

import RewardCard from "./RewardsCard";

const RewardSection = ({ range, handleRange }) => {
  const { t } = useTranslation();

  const [rewardAmount, setRewardAmount] = useState(1000);
  const [amountRange, setAmountRange] = useState(1000);
  useEffect(() => {
    handleRange(range);
    setAmountRange(range);
    setRewardAmount(range);
  }, [range])
  const handleImageClick = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: false,
      theme: "light",
    });
  };

  const listData = [
    {
      id: 1,
      packageType: "RewardSection.packageType1",
      spendPrice: amountRange,
      spendImage: R2,

      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText11",
          info: "RewardSection.packageinfo11",
          infotitle: "RewardSection.packageinfotitle11",

        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText12",
          infotitle: "RewardSection.packageinfotitle12",
          info: "RewardSection.packageinfo12",

        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText13",
          infotitle: "RewardSection.packageinfotitle13",
          info: "RewardSection.packageinfo13",

        },
        {
          id: 4,
          icon: cross,
          infotitle: "RewardSection.packageinfotitle14",
          text: "RewardSection.packageText14",
          info: "RewardSection.packageinfo14",

        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText15",
          infotitle: "RewardSection.packageinfotitle15",
          info: "RewardSection.packageinfo15",

        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
          infotitle: "RewardSection.packageinfotitle16",
          info: "RewardSection.packageinfo66",
        },
      ],
    },
    {
      id: 2,
      packageType: "RewardSection.packageType2",
      spendPrice: amountRange,
      spendImage: R1,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText21",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText22",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText23",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText24",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: cross,
          text: "RewardSection.packageText25",
          info: "RewardSection.packageinfo15",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
          infotitle: "RewardSection.packageinfotitle16",
          info: "RewardSection.packageinfo66",
        },
      ],
    },
    {
      id: 3,
      packageType: "RewardSection.packageType3",
      spendPrice: amountRange,
      spendImage: R3,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText31",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText32",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText33",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText34",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText35",
          info: "RewardSection.packageinfo15",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: cross,
          text: "RewardSection.packageText16",
          infotitle: "RewardSection.packageinfotitle16",
          info: "RewardSection.packageinfo66",
        },
      ],
    },
    {
      id: 4,
      packageType: "RewardSection.packageType4",
      spendPrice: amountRange,
      spendImage: Crown,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText41",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText42",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText43",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText44",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText45",
          info: "RewardSection.packageinfo45",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: Tick1,
          text: "RewardSection.packageText16",
          infotitle: "RewardSection.packageinfotitle16",
          info: "RewardSection.packageinfo66",
        },
      ],
    },
    {
      id: 5,
      packageType: "RewardSection.packageType5",
      spendPrice: amountRange,
      spendImage: R4,
      packageList: [
        {
          id: 1,
          icon: Tick1,
          text: "RewardSection.packageText51",
          info: "RewardSection.packageinfo15",
          infotitle: "RewardSection.packageinfotitle11",
        },
        {
          id: 2,
          icon: Tick1,
          text: "RewardSection.packageText52",
          info: "RewardSection.packageinfo12",
          infotitle: "RewardSection.packageinfotitle12",
        },
        {
          id: 3,
          icon: Tick1,
          text: "RewardSection.packageText53",
          info: "RewardSection.packageinfo13",
          infotitle: "RewardSection.packageinfotitle13",
        },
        {
          id: 4,
          icon: Tick1,
          text: "RewardSection.packageText54",
          info: "RewardSection.packageinfo14",
          infotitle: "RewardSection.packageinfotitle14",
        },
        {
          id: 5,
          icon: Tick1,
          text: "RewardSection.packageText55",
          info: "RewardSection.packageinfo55",
          infotitle: "RewardSection.packageinfotitle15",
        },
        {
          id: 6,
          icon: Tick1,
          text: "RewardSection.packageText16",
          infotitle: "RewardSection.packageinfotitle16",
          info: "RewardSection.packageinfo66",
        },
      ],
    },
  ];
  return (
    <div className="backgroundgrRewrd relative" id="membership">
      <div className="bgshade absolute left-[33%]"></div>
      <div className="max-w-[1221px] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto space-y-[2rem] py-[3rem] xs:py-[2rem]">
        <div className="backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask rounded-[34px] px-10 xs:px-4 py-6 xs:py-6">
          <div className=" relative z-[2] flex justify-between items-center md:block sm:block xs:block">
            <div className=" xs:text-center sm:text-center w-[46%] space-y-7 pr-2 md:w-[100%] md:py-4  sm:w-[100%] sm:py-4  xs:w-[100%] xs:py-4">
              <div className="">
                <h3 className="2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[26px] text-[26px] max-w-[400px] w-[100%] xs:text-[30px] xs:leading-[33px] font-[700]  leading-[40px] pb-6 text-[#fff]">
                  {t("RewardSection.title")}<span className=" font-[600]">$1000</span>
                </h3>
                <p className="text-[18px] xs:text-[18px] 2xl:max-w-[445px] xl:max-w-[445px] lg:max-w-[445px] md:max-w-[445px] sm:max-w-[100%] max-w-[100%]  font-[400]  text-white" dangerouslySetInnerHTML={{ __html: t('RewardSection.para') }}>
                </p>
              </div>
              <div className="space-y-4 ">
                <div className="flex justify-between items-center">
                  <h5 className="text-[18px] xs:text-[14px] sm:text-[14px] font-[700]  leading-[25px] text-[#fff]">
                    {" "}
                    {t("RewardSection.spendText")}
                  </h5>
                  <h3 className="text-[20px] text-[#FFD02F] xs:text-[18px] sm:text-[18px] font-[600] ">
                    $ {Number(rewardAmount).toLocaleString("en-US")}
                  </h3>
                </div>

                <div>
                  <RangeSlider
                    className="single-thumb"
                    min={1000}
                    max={100000}
                    rangeSlideDisabled={true}
                    onInput={(e) => {
                      let amount = e[1];
                      handleRange(amount);
                      setAmountRange(amount);
                      setRewardAmount(amount);
                    }}
                    value={[1000, range]}
                    thumbsDisabled={[true, false]}

                  />
                </div>
              </div>
            </div>
            <div className=" 2xl:w-[50%] xl:w-[50%] xs:relative xs:!z-[99] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%]  ">
              {listData.map((item, id, index) =>
                amountRange >= 1000 && amountRange <= 2499 && item.id === 1 ? (
                  // eslint-disable-next-line no-sequences
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    key={item.id}
                    index={index}
                    amountRange={amountRange}
                  />
                ) : "" ||
                  (amountRange >= 2500 &&
                    amountRange <= 9999 &&
                    item.id === 2) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    index={index}
                    key={item.id}
                  />
                ) : "" ||
                  (amountRange >= 10000 &&
                    amountRange <= 24999 &&
                    item.id === 3) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    index={index}
                    key={item.id}
                  />
                ) : "" ||
                  (amountRange >= 25000 &&
                    amountRange <= 99999 &&
                    item.id === 4) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    index={index}
                    key={item.id}
                  />
                ) : "" ||
                  (amountRange >= 100000 &&
                    amountRange <= 100000 &&
                    item.id === 5) ? (
                  <RewardCard
                    handleImageClick={handleImageClick}
                    item={item}
                    index={index}
                    key={item.id}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RewardSection;
