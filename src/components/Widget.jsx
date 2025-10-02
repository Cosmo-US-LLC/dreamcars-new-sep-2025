import { useTranslation } from "react-i18next";

import BuyWidget from "./BuyWidget";

import Solid from "../assects/images/logo-white-3.png.png";
import sharelogo from "../assects/images/shareicon.png";

import { FaLink, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { useApiState } from "../presale-gg/stores";
import { useEffect, useMemo, useState } from "react";
import { capitalize } from "../presale-gg/util";
import clsx from "clsx";
import { StakeWidget } from "./StakeWidget";
import { useAccount } from "wagmi";
import TransactionHistoryWidget from "./TransactionHistoryWidget";
import presaleGgLogo from "../assects/images/presale-gg.svg"

const Widget = ({ handleClose }) => {
  const { t } = useTranslation()

  const handleShare = async () => {
    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share({
          url: window.location.href, // You can customize this URL
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  const copyUrlToClipboard = () => {
      const url = "https://dreamcars.co/";

      // Use the Clipboard API to copy the URL
      navigator.clipboard.writeText(url)
        .then(() => {
          toast.success("URL copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy the URL");
          console.error("Failed to copy the URL", err);
        });
  }

  const apiData = useApiState()
  const accountData = useAccount()
  const tabs = ["buy", "stake", "transaction_history"]
  const [selectedTab, setSelectedTab] = useState("buy")
  const disabledTabs = useMemo(() => accountData.isConnected ? [] : ['stake', 'transaction_history'], [accountData.isConnected])

  useEffect(() => {
    if (selectedTab === "buy") return
    if (!accountData.isConnected) setSelectedTab("buy")
  }, [selectedTab, accountData.isConnected])

  return (
    <div id="buynow" className=" space-y-4  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] max-w-[1276px] mx-auto ">
        <div className="2xl:space-y-[45px]  xl:space-y-[45px] lg:space-y-4 xs:space-y-3 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
         
          <div className="w-[100%] xl:w-[100%] mt-[50px] lg:w-[100%] lg:mx-auto flex flex-col justify-end  xs:w-[100%] sm:w-[100%] md:w-[100%] z-[2]">
            <div className="backdrop-blur-md max-w-[950px] w-[100%] bg-[#d1d5db1f] mx-auto gradient-border-mask rounded-[34px] space-y-[10px]">
                <div className=" pt-[30px] xs:pt-[20px] pb-[14px] xs:pb-[20px] relative  2xl:px-[52px] xl:px-[45px] lg:px-[32px] md:px-[52px] sm:px-[52px] px-[10px]  space-y-4">
                  <div className="w-[267px] xs:w-[133px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="gradient-border-mask-own-hero-title backdrop-blur-xl w-[267px] xs:w-[133px] mx-auto  h-[47px] xs:h-[35px]  flex justify-center items-center">
                      <h3 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px] text-[12px] font-[700] text-center  2xl:leading-[110%] xl:leading-[110%]  lg:leading-[110%] md:leading-[110%] sm:leading-[110%] text-white">
                        {apiData.presaleEnded ? "Presale Ended" : t("ProductDetails.card-title")}
                      </h3>
                    </div>
                  </div>
                <div className="flex justify-center gap-4 xs:gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      title={disabledTabs.includes(tab) ? "Connect your wallet" : undefined}
                      className={clsx(
                        "rounded-full px-3 bg-[#3F3F3F] text-[#fff] h-[32px] flex-1 max-w-[11rem] hover:brightness-110 transition-color text-[14px] font-bold xs:flex-1 min-w-[max-content] <xs:text-[12px] <xs:px-1 <xs:h-[24px]",
                        {"!bg-[#FFD02F] !text-[#000]": selectedTab === tab,
                        "!bg-[#666] hover:!bg[#666] !cursor-not-allowed !text-[#444]": disabledTabs.includes(tab)}
                      )}
                    >
                      {capitalize(tab)}
                    </button>
                  ))}
                </div>
                {selectedTab === "buy" && <BuyWidget handleClose={handleClose} />}
                {selectedTab === "stake" && <StakeWidget />}
                {selectedTab === "transaction_history" && <TransactionHistoryWidget />}
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href="https://presale.gg" target="_blank" className="text-[#fff] flex items-center gap-2 justify-center">
                  Powered by
                  <img src={presaleGgLogo} alt="Presale.gg" className="h-5 w-auto" />
                </a>
              </div>
             </div>
            <div className="max-w-[894px] mt-[25px] mx-auto w-[100%] flex items-center py-[0px] xs:!pt-[0px] justify-between space-x-[1rem]">
              <div className="w-[518px] h-[50px] xs:h-[40px] relative z-[9] flex justify-center items-center gradient-border-mask-own-last backdrop-blur-md bg-[#5555556e] xs:bg-[#ffffff08]">
                <a
                  href="https://github.com/solidproof/projects/blob/main/2024/Dreamcars/EVM_Audit_SolidProof_Dreamcars.pdf"
                  target="_blank"
                  className="relative z-[20] 2xl:text-[18px]  xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16.871px]  text-[11px]  text-white underline font-[Lato]" rel="noreferrer"
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
        <div className="px-[23px]  py-[10px] !mt-[15px] relative z-[9] gradient-border-mask-own-hero-cent backdrop-blur-md bg-[#ffffff08] flex justify-between max-w-[894px] mx-auto ">
          <h4 className="text-[18px] xs:text-[9px] font-[700] w-[378px] mx-auto text-[#fff] self-center">
            Share Dreamcars with Friends
          </h4>
          <div className="flex justify-end space-x-[10px] xs:space-x-[5px] ">
            <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] relative z-[9] flex justify-center items-center gradient-border-mask-no-blur-button overflow-hidden hidden xs:flex">
              <a
                href="#"
                target=""
                rel="noopener noreferrer"
                className="relative z-[20]"
                onClick={(e) => {
                  e.preventDefault();
                  handleShare();
                }}
              >
                <img src={sharelogo} className="h-[22px] xs:h-[18px] w-[22px] xs:w-[18px] text-white cursor-pointer" />
              </a>
            </div>
            <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] relative z-[9] flex justify-center items-center overflow-hidden gradient-border-mask-no-blur-button">
              <a
                href="#"
                target=""
                rel="noopener noreferrer"
                className="relative z-[20]"
                onClick={(e) => {
                  e.preventDefault();
                  copyUrlToClipboard();
                }}
              >
                <FaLink className="h-[22px] xs:h-[15px] w-[22px] xs:w-[20px] text-white cursor-pointer" />
              </a>
            </div>
            <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] flex justify-center items-center gradient-border-mask-no-blur-button overflow-hidden">
              <a
                href="https://twitter.com/dreamcars_bsc"
                target="_blank"
                className="cursor-pointer relative z-[20]"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-[22px] xs:h-[15px] w-[22px] xs:w-[20px] text-white cursor-pointer" />
              </a>
            </div>
            <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] flex justify-center items-center gradient-border-mask-no-blur-button overflow-hidden">
              <a
                href="https://t.me/Dreamcars_bsc"
                target="_blank"
                className="relative z-[20] cursor-pointer"
                rel="noopener noreferrer"
              >
                <BsFillSendFill className="h-[22px] xs:h-[15px] w-[22px] xs:w-[20px] text-white cursor-pointer" />
              </a>
            </div>

            <div className="w-[58px] h-[41px] xs:w-[24px] xs:h-[24px] flex justify-center items-center gradient-border-mask-no-blur-button">
              <a
                href="https://www.instagram.com/dreamcars_bsc/"
                className="relative z-[20] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-[22px] xs:h-[15px] w-[22px] xs:w-[20px] text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Widget