import React from "react";
import { ToastContainer, toast } from 'react-toastify';


import Link1 from "../../assects/svgs/ftsvg (1).svg";
import Link2 from "../../assects/svgs/ftsvg (2).svg";
import Link3 from "../../assects/svgs/ftsvg (3).svg";
import Link4 from "../../assects/svgs/ftsvg (4).svg";
import logo from "../../assects/logo/Logo.svg";
import sharelogo from "../../assects/images/shareicon.png";



import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  function copyUrlToClipboard() {
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
  return (
    <>
      <div className="ftrgrbg">
        <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] space-y-[30px] max-w-[1010px] mx-auto py-12">
          <div className="flex flex-col items-center space-y-[25px]">
            <img src={logo} className="max-w-[280px] w-[100%]" alt="" />
            <p className="text-[39px] xs:text-[24px] text-[#fff] font-[400] text-center leading-[130%]">Dreamcars is the first and only platform worldwide where you can buy shares of luxury rental cars using crypto and start earning monthly income from rentals.</p>
          </div>
          <div className="flex justify-center">
            <a href="#buynow" className="w-[100%] flex justify-center">
              <button className="ftbutton hover:bg-[transparent] bg-[#FFD02F] border border-[#FBDA19] rounded-[8px] px-[40px] py-[8px] text-[18px] font-[700] hover:text-[#fff]">
                BUY $DCARS
              </button>
            </a>
          </div>
          <div className="space-y-[30px] xs:space-y-[15px]">
            <div className="flex space-x-6 justify-center ">
              <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px] hidden xs:block" src={sharelogo} alt="" onClick={handleShare} />
              <img onClick={(e) => {
                e.preventDefault();
                copyUrlToClipboard();
              }} className="h-[35px] xs:h-[18px] cursor-pointer w-[35px] xs:w-[18px]" src={Link1} alt="" />
              <a href="https://twitter.com/dreamcars_bsc" target="_blank" rel="noopener noreferrer">
                <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link2} alt="" /></a>
              <a href="https://t.me/Dreamcars_bsc" target="_blank" rel="noopener noreferrer">
                <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link3} alt="" />
              </a>
              <a href="https://www.instagram.com/dreamcars_bsc/" target="_blank" rel="noopener noreferrer">
                <img className="h-[35px]  xs:h-[20px] cursor-pointer w-[35px] xs:w-[20px]" src={Link4} alt="" />
              </a>

            </div>
          </div>
          <div>
            <p className="text-[14px] xs:text-[16px] font-[300] text-[#fff] text-center">Cryptocurrency may not be regulated in your jurisdiction. The value of cryptocurrencies can fluctuate, which means you may experience both gains and losses. Any profits could be subject to capital gains or other taxes based on your local laws. The information on this website does not represent an offer, recommendation, or financial advice to buy or sell any cryptocurrency. You are responsible for determining whether any transaction is suitable for you, taking into account your personal objectives, financial situation, and risk tolerance. We strongly recommend consulting licensed legal, tax, or financial professionals. Trading cryptocurrencies involves significant risks, including the potential loss of your capital. Thorough research is essential. Dreamcars does not guarantee the performance, outcome, or returns of any cryptocurrency mentioned on this platform. The information provided is not intended for use in any jurisdiction where its distribution or use would contravene local laws or regulations.</p>
          </div>
          <p className="text-[12px] xs:text-[14px] font-[400] text-[#fff] text-center">Copyright 2024 Dreamcars | All rights reserved.</p>


        </div>
      </div>
    </>
  );
}

export default Footer;
