import React, { useState, useEffect, useRef } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import Button from "../../components/Button/button";
import { useTranslation } from "react-i18next";

import Tierimg from "../assects/images/Tierimg.png";

import info from "../assects/svgs/info.svg";

// import RewardCard from "./RewardsCard";
import Dicn1 from "../assects/svgs/heddropicn (4).svg"
import Dicn2 from "../assects/svgs/heddropicn (3).svg"
import Dicn3 from "../assects/svgs/heddropicn (2).svg"
import Dicn4 from "../assects/svgs/heddropicn (1).svg"
import Dicnclose from "../assects/svgs/heddropicncls.svg"
import Button from './Button/button';
import {
  useDisconnect,

} from 'wagmi'


import { useApiState } from "../presale-gg/stores/api.store";
import { userLevelUp, useUserState } from "../presale-gg/stores/user.store";
import { formatNumber, parseNum } from "../presale-gg/util";
import { LAUNCH_PRICE } from "../constants";
import { useUserRanks } from "../presale-gg/web3";
import toast from "react-hot-toast";
import { api } from "../presale-gg/api";
import confetti from "canvas-confetti";

function PersonalDashboard({ accounts, handleClose }) {
  const { t, i18n } = useTranslation();

  const dashboardRef = useRef(null);
  const handleCopy = () => {
    navigator.clipboard.writeText("https://dreamcars.co/")
      .then(() => {
        let link = window.location.origin + "/?referral_code=" + userData.user?.referral_code + "&lang=" + i18n.language
        navigator.clipboard.writeText(link);
        toast.success('Copied!');
      })
      .catch((error) => {
        console.error('Error copying:', error);
        toast.error('Failed to copy.');
      });
  };

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const disconnect = useDisconnect()

  const userData = useUserState()
  const rankData = useUserRanks()
  const visibleRank = rankData.nextRank ?? rankData.current_rank
  const canRankUp = rankData.usd_to_next_rank === 0 && rankData.nextRank !== null
  const [loading, setLoading] = useState(false)
  const rankUp = async () => {
    if (loading || !canRankUp) return
    setLoading(true)
    try {
      await userLevelUp()
      toast.success("Successfully ranked up")
      confetti({ origin: {x: 0.5, y: 0.8} })
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error ranking up"))
    }
    setLoading(false)
  }

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
            <h4 className='text-[16px] text-[#fff] font-[900] text-center'>1 DCARS = ${formatNumber(LAUNCH_PRICE, 0, 6)}</h4>
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
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{formatNumber(parseNum(userData.user?.total_tokens), 0, 2)}</p>
                </div>
              </div>


              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn2} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>Bonus</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{(parseNum(userData.user?.total_tokens) * parseNum(rankData.current_rank?.bonus_percentage) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              </div>


              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn3} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>Staking Rewards</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{formatNumber(parseNum(userData.userStakeData?.total_earnings))}</p>
                </div>
              </div>


              <div className='flex items-center justify-between backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask-per-hed rounded-[12px] px-[15px] py-[0.6rem]'>
                <div className='flex space-x-2 items-center'>
                  <img src={Dicn4} className='h-[20px]' alt="" />
                  <h4 className='text-[16px] font-[700] text-[#fff] leading-[120%]'>Your Membership NFT</h4>
                </div>
                <div>
                  <p className='text-[#FFD02F] font-[700] text-[16px]'>{rankData.current_rank?.rank ?? 'No NFT'} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className='text-[18px] text-[#fff] font-[900] text-center'>{rankData.nextRank !== null ? "Experience even more benefits with" : "You have got the best nft"}</p>
        </div>
        <div className=" 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]  ">
          <>
            <div className="py-6 xs:py-3 2xl:px-5 xl:px-5 lg:px-5 md:px-5 sm:px-2 px-2 backdrop-blur-md gradient-border-mask rounded-[34px] bg-[#d1d5db1f]">
              <div className=" flex justify-between w-[100%] sm:w-[100%] xs:w-[100%]  ">
                {
                  <>
                    <div className="space-y-2 w-[74%] xs:w-[58%] md:w-[100%] sm:w-full xs:w-full pr-2 xs:pr-0">
                      <div className="flex items-center space-x-[1rem] xs:space-x-2">
                        <img className="h-[30px] xs:h-[40px]" src={Tierimg} alt="" />

                        <h3 className="text-[16px] text-white  sm:text-[18px] xs:text-[16px] font-[700] ">
                          {t(visibleRank?.packageType)}
                        </h3>
                      </div>
                      <div className="space-y-2 px-5 xs:px-1 ">
                        {visibleRank?.packageList.map((j, id) => (
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
                      <div key={visibleRank?.id}
                        className={`absolute top-[-10%]  xs:top-[-1%] min-w-[250px] max-w-[220px] w-[100%] pb-3`}
                        style={{ left: visibleRank?.index === 0 ? '-60%' : '-40%' }}>
                        <img
                          className="h-[auto] max-w-[400px] w-[100%] m-auto xs:w-[170px]"
                          src={visibleRank?.image}
                          alt=""
                        />
                      </div>
                      {rankData.nextRank && (
                        <div className="absolute spendbg px-[30px] xs:px-[16px] py-[20px] xs:py-[16px] bottom-[5%] tracking-wide xs:bottom-[12%] xs:pt-3 text-center text-[#292A36] font-bold">
                          <h5 className="text-[14px] xs:text-[9px] text-white ">
                            When you spend
                          </h5>
                          <h3 className="text-[16px] sm:text-[10px] text-white xs:text-[10px] font-[Poppins] ">{`$${Number(
                            visibleRank?.totalUsdNeeded
                          ).toLocaleString("en-US")} ${t("RewardSection.more")}`}</h3>
                        </div>
                      )}
                    </div>
                  </>
                }
              </div>
            </div>
          </>
        </div>
        <div className='' >
          <div className='flex pb-[10px] justify-between items-center'>
            <p className='text-[12px] text-[#fff] font-[400]'>
              {rankData.nextRank ? <>
                  <span style={{}} className="">${(rankData.usd_to_next_rank).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>{' '}
                left to reach the next level
              </> : <>
                Max level reached
              </>}
            </p>
            {rankData.nextRank && (
              <p className='text-[#FFD02F] text-[16px] font-[700]'>${rankData.nextRank?.totalUsdNeeded.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            )}
          </div>
          <RangeSlider
            className="single-thumb"
            min={1}
            max={100}
            value={[1, rankData.nextRank ? rankData.current_level * 100 / (rankData.nextRank?.level ?? 0) : 100]}
            rangeSlideDisabled={true}
            thumbsDisabled={[true, false]}
          />
        </div>
        <Button
          disabled={!canRankUp}
          onClick={rankUp}
          classes={`${!canRankUp ? "bg-gray-500 hover:bg-gray-500 hover:!text-[#000] cursor-not-allowed" : "bgcolor"} relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[13px]  xs:text-[13px] font-[700]  m-auto `}
          text={loading ? "Claiming Next NFT..." : "Claim Next NFT"}
        />{" "}
        {/* { rankData.current_rank && <Button
          link="#"
          classes="bgcolor relative z-[1] rounded-full w-[100%] h-[45px]  sm:h-[30px]  xs:h-[30px] text-[16px] sm:text-[13px]  xs:text-[13px] font-[700]  m-auto "
          text="Activate Staking"
        />}{" "} */}
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