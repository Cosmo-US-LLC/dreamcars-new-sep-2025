import React, { useState, useEffect, useCallback, useRef } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

import Tick1 from "../assects/images/tick1 (1).png";
import Tierimg from "../assects/images/Tierimg.png";

import cross from "../assects/images/xcs.svg";
import info from "../assects/svgs/info.svg";
import Crown from "../assects/images/rng (5).png";
import R1 from "../assects/images/rng (2).webp";
import R2 from "../assects/images/rng (3).png";
import R3 from "../assects/images/rng (1).png";
import R4 from "../assects/images/rng (4).webp";

import { useReadContract, useSwitchChain, useWriteContract } from "wagmi";
// import RewardCard from "./RewardsCard";
import Dicn1 from "../assects/svgs/heddropicn (4).svg"
import Dicn2 from "../assects/svgs/heddropicn (3).svg"
import Dicn3 from "../assects/svgs/heddropicn (2).svg"
import Dicn4 from "../assects/svgs/heddropicn (1).svg"
import Dicnclose from "../assects/svgs/heddropicncls.svg"
import RewardCard from '../Page/Home/RewardsCard';
import Button from './Button/button';

import Ferrari from "../assects/images/rng (5).png";
import Mercedes from "../assects/images/rng (2).png";
import Porsche from "../assects/images/rng (3).png";
import Bentley from "../assects/images/rng (1).png";
import Lamborghini from "../assects/images/rng (4).png";
import {
  useDisconnect,

} from 'wagmi'
import Parse from 'parse';


import { mainnet, bsc } from 'wagmi/chains'
const PersonaldashData = [
  {
    id: 1,
    title: "DCARS",
    img: Dicn1,
  },
  {
    id: 2,
    title: "Bonus",
    img: Dicn2,
  },
  {
    id: 3,
    title: "Staking Rewards",
    img: Dicn3,
  },
  {
    id: 4,
    title: "DCARS NFT",
    img: Dicn4,
  },
]

function PersonalDashboard({ accounts, handleClose }) {
  const { t, i18n } = useTranslation();

  const [amountRange, setAmountRange] = useState(1000);

  const dashboardRef = useRef(null);
  const handleCopy = () => {
    navigator.clipboard.writeText("https://dreamcars.co/")
      .then(() => {
        let link = window.location.origin + "/?ref=" + accounts + "&lang=" + i18n.language
        navigator.clipboard.writeText(link);
        toast.success('Copied!');
      })
      .catch((error) => {
        console.error('Error copying:', error);
        toast.error('Failed to copy.');
      });
  };


  const [nft, setNFT] = useState(0)
  const [nftData, setNFTData] = useState("No NFT")
  const [nextNFT, setNextNFT] = useState("Bentley")
  const [nextNFTNum, setNextNFTNum] = useState(1)
  const [nextNftImage, setNextNftImage] = useState(Porsche)
  const [nextNftGoal, setNextNftGoal] = useState(1000)
  const [nftImage, setNFTImage] = useState(Mercedes)

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
        },
      ],
    },
  ];
  function truncateToDecimals(num, dec = 2) {
    const calcDec = 10 ** dec
    return Math.trunc(num * calcDec) / calcDec;
  }
  const [finalUserTokens, setFinalUserTokens] = useState(0)
  const [stakingRewards, setStakingRewards] = useState(0)

  const [finalBonusTokens, setFinalBonusTokens] = useState(0)
  const [totalContribution, setTotalContribution] = useState(0)

  const [totalProfit, setTotalProfit] = useState(0);
  const [tokenAwarded, setTokenAwarded] = useState(0);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const disconnect = useDisconnect({
      onSuccess(data) {
          console.log('Success', data)
      },
      onSettled(data, error) {
          console.log('Settled', { data, error })
      },
      onError(error) {
          console.log('Error', error)
      },
      onMutate(args) {
          console.log('Mutate', args)
      },

  })


  const fetchData = async () => {
      try {
          const query = new Parse.Query("Transaction_cd7191_BSC");
          const query2 = new Parse.Query("Transaction_cd7191_ETH");

          // Set constraints to find records for this wallet address
          query.equalTo("contributor", accounts.toLowerCase());
          query2.equalTo("contributor", accounts.toLowerCase());

          // Fetch all matching records
          const bscTransactions = await query.find();
          const ethTransactions = await query2.find();

          console.log(bscTransactions, ethTransactions, "transactions")
          // Calculate totals
          let totalContrib = 0;
          let totalTokens = 0;
          let totalBonus = 0;

          // Sum up BSC transactions
          bscTransactions.forEach(tx => {
              totalContrib += tx.get("amountInUSD") || 0;
              totalTokens += tx.get("baseTokens") || 0;
              totalBonus += tx.get("bonusTokens") || 0;
          });

          // Sum up ETH transactions
          ethTransactions.forEach(tx => {
              totalContrib += tx.get("amountInUSD") || 0;
              totalTokens += tx.get("baseTokens") || 0;
              totalBonus += tx.get("bonusTokens") || 0;
          });

          setTotalContribution(totalContrib);
          setTokenAwarded(totalTokens);
          setFinalBonusTokens(totalBonus);

      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  useEffect(() => {
      fetchData()
  }, [])

  
  useEffect(() => {
    if (totalContribution >= 1000) {
        setNFT(0.1)
        setNFTData("Mercedes")
        setNFTImage(Mercedes)
        setNextNFT("Porsche")
        setNextNftGoal(5000)
        setNextNftImage(Porsche)
    }
    if (totalContribution >= 5000) {
        setNFT(0.15)
        setNFTData("Porsche")
        setNFTImage(Porsche)
        setNextNFT("Bentley")
        setNextNftGoal(10000)
        setNextNftImage(Bentley)
    }
    if (totalContribution >= 10000) {
        setNFT(0.25)
        setNFTData("Bentley")
        setNFTImage(Bentley)
        setNextNFT("Ferrari")
        setNextNftGoal(25000)
        setNextNftImage(Ferrari)
    }
    if (totalContribution >= 25000) {
        setNFT(0.4)
        setNFTData("Ferrari")
        setNFTImage(Ferrari)
        setNextNftGoal(100000)
        setNextNFT("Lamborghini")
        setNextNftImage(Lamborghini)
    }
    if (totalContribution >= 100000) {
        setNFT(0.6)
        setNFTData("Lamborghini")
        setNFTImage(Lamborghini)
    }

}, [totalContribution])
  return (
    <>
      <div className='pb-[4rem] space-y-[15px] !w-[100%] px-[2rem] pt-[10px] relative' ref={dashboardRef}>
        <img onClick={() => handleClose(false)} className='right-[6%] absolute cursor-pointer top-[0.9%]' src={Dicnclose} alt="" />
        <h3 className='text-[22px] font-[900] !m-0 leading-[130%] text-center text-[#fff]'>Personal Dashboard</h3>
        
        <div className=' mx-[3px] backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] py-[8px]'>
          <div className='relative z-[9]'>
            <p className='text-[#FFD02F] text-center text-[16px]  font-[900]'>Wallet Address</p>
            <p className='text-[#fff] text-[14px] font-[400] text-center'>{accounts.slice(0, 10)}...{accounts.slice(-10)}</p>

          </div>
        </div>
        <div className='px-[2rem] py-[0.6rem] mx-[3px] backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px]'>
          <div className='relative z-[9]'>
            <p className='text-[#FFD02F] text-center text-[16px]  font-[900]'>Launch Price</p>
            <h4 className='text-[16px] text-[#fff] font-[900] text-center'>1 DCARS = $0.03</h4>
          </div>
        </div>
        <div className='space-y-[10px]'>
          <h4 className='text-center text-[16px] text-[#fff] font-[400] leding-[130%]'>
            {`${month[new Date().getMonth()]} ${new Date().getDate()} ,  ${new Date().getFullYear()}`}</h4>
          <div>
            <div className='space-y-[10px] mx-[3px]'>

              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn1} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>DCARS</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{tokenAwarded.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              </div>


              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn2} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>Bonus</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{(finalBonusTokens + (finalUserTokens * nft)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              </div>


              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn3} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>Staking Rewards</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{tokenAwarded > 1000 && stakingRewards ? stakingRewards.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 0}</p>
                </div>
              </div>


              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn4} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>Your Membership NFT</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{nftData} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className='text-[18px] text-[#fff] font-[900] text-center'>Experience even more benefits with</p>
        </div>
        <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]  ">
          {listData.map((item, id, index) =>
            <>
              {Number(item.id) === Number(nextNFTNum) &&
                <div className="py-6 xs:py-3 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 px-2 backdrop-blur-md gradient-border-mask rounded-[34px] bg-[#d1d5db1f]">
                  <div className=" flex justify-between w-[100%] sm:w-[100%] xs:w-[100%]  ">
                    {
                      <>
                        <div className="space-y-2 w-[74%] xs:w-[58%] md:w-[100%] sm:w-full xs:w-full pr-2 xs:pr-0">
                          <div className="flex items-center space-x-[1rem] xs:space-x-2">
                            <img className="h-[30px] xs:h-[40px]" src={Tierimg} alt="" />

                            <h3 className="text-[16px] text-white  sm:text-[18px] xs:text-[16px] font-[700] ">
                              {t(item.packageType)}
                            </h3>
                          </div>
                          <div className="space-y-2 px-5 xs:px-1 ">
                            {item.packageList.map((j, id) => (
                              <div key={id} className="flex space-x-2 items-center ">
                                <img className="w-[14px] h-[14px]" src={j.icon} alt="" />
                                <p className="text-[12px] text-white sm:text-[10px] xs:text-[10px] text-[#222222] font-[400] ">
                                  {t(j.text)}
                                </p>
                                <div className="relative group">
                                  <img src={info} className="cursor-pointer" alt="" />
                                  <div className=" z-[99] absolute bottom-0 left-5   rounded-[18px]  group-hover:flex transition-opacity duration-300 w-[260px] hidden  space-x-3">
                                    <div className="flex-col justify-center items-center flex gradient-border-mask rounded-[34px] backdrop-blur-xl  bg-[#56688494] px-3 py-6 space-y-[8px]">
                                      <img src={info} className="cursor-pointer" alt="" />
                                      <p className="text-[#FFD02F] m-0 text-center text-[20px] font-[600]">{t(j.infotitle)}
                                      </p>
                                      <p className="text-[#fff] m-0 text-center text-[16px] font-[400] leading-[115%]">{t(j.info)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2 xs:space-y-0 flex justify-center relative  w-[40%] xs:w-[80%]">
                          <div key={item.id}
                            className={`absolute top-[-10%]  xs:top-[-1%] min-w-[250px] max-w-[220px] w-[100%] pb-3`}
                            style={{ left: index === 0 ? '-60%' : '-40%' }}>
                            <img
                              className="h-[auto] max-w-[400px] w-[100%] m-auto xs:w-[170px]"
                              src={item.spendImage}
                              alt=""
                            />
                          </div>
                          <div className="absolute spendbg px-[30px] xs:px-[16px] py-[20px] xs:py-[16px] bottom-[5%] tracking-wide xs:bottom-[12%] xs:pt-3 text-center text-[#292A36] font-bold">
                            <h5 className="text-[14px] xs:text-[9px] text-white ">
                              When you spend
                            </h5>
                            <h3 className="text-[16px] sm:text-[10px] text-white xs:text-[10px] font-[Poppins] ">{`$${Number(
                              item.spendPrice
                            ).toLocaleString("en-US")} ${t("RewardSection.more")}`}</h3>
                          </div>
                        </div>
                      </>
                    }
                  </div>
                </div>
              }
            </>
          )}
        </div>
        <div className='' >
          <div className='flex pb-[10px] justify-between items-center'>
            <p className='text-[12px] text-[#fff] font-[400]'>
              {
                totalContribution / nextNftGoal * 100 < 100 ?
                  <span style={{}} className="">${(nextNftGoal - totalContribution).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                  : 0
              } left to reach the next level </p>
            <p className='text-[#FFD02F] text-[16px] font-[700]'>${nextNftGoal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
          </div>
          <RangeSlider
            className="single-thumb"
            min={1}
            max={100}
            value={[1, totalContribution / nextNftGoal * 100]}
            rangeSlideDisabled={true}
            thumbsDisabled={[true, false]}

          />
        </div>
        <Button
          link="#buynow"
          classes="bg-gray-500 relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[13px]  xs:text-[13px] font-[700]  m-auto "
          text="Claim $DCARS"
        />{" "}
        { totalContribution > 1000 && <Button
          link="#"
          classes="bgcolor relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[13px]  xs:text-[13px] font-[700]  m-auto "
          text="Activate Staking"
        />}{" "}
        <div className='pt-[0.2rem] flex justify-between space-x-1'>
          <Button
            link="#buynow"
            classes="bgcolor relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[13px]  xs:text-[13px] font-[700]  m-auto "
            text="Copy Referral Link"
            onClick={handleCopy}
          />{" "}
          <Button
            link="#buynow"
            classes="bgcolor relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[16px]  xs:text-[16px] font-[700]  m-auto "
            onClick={() => disconnect.disconnect()}
            text="Disconnect"
          />{" "}
        </div>
      </div>
    </>
  )
}

export default PersonalDashboard