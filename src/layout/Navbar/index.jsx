import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/Button/button";

import Logo from "../../assects/logo/Logo.svg";

import wallet from "../../assects/images/Wallet.png";
import btnicon from "../../assects/svgs/wlticon (1).svg";
import btnicon2 from "../../assects/svgs/wlticon (2).svg";
import WalletBlue from "../../assects/svgs/walletsvg.svg";
import globe from "../../assects/images/globe.png";
import flg from "../../assects/svgs/fg (13).svg";
import fg1 from "../../assects/svgs/fg (1).svg";
import fg2 from "../../assects/svgs/fg (2).svg";
import fg3 from "../../assects/svgs/fg (3).svg";
import fg4 from "../../assects/svgs/fg (4).svg";
import fg5 from "../../assects/svgs/fg (5).svg";
import fg6 from "../../assects/svgs/fg (6).svg";
import fg7 from "../../assects/svgs/fg (7).svg";
import fg8 from "../../assects/svgs/fg (8).svg";
import fg9 from "../../assects/svgs/fg (9).svg";
import fg10 from "../../assects/svgs/fg (10).svg";
import fg11 from "../../assects/svgs/fg (11).svg";
import fg12 from "../../assects/svgs/fg (12).svg";
import fg13 from "../../assects/svgs/fg (13).svg";
import fg14 from "../../assects/svgs/fg (14).svg";
import copyicn from "../../assects/images/copyicn.png"
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import HoverDropDn from "../../components/HoverDropDn";
import PersonalDashboard from "../../components/PersonalDashboard";
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useAccountEffect } from 'wagmi';
import MyWallet from './MyWallet';
import { toast } from "react-toastify";

const Navbar = ({ handleClose, open }) => {


  const account = useAccount()
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const [distance, setDistance] = useState(0)
  const [distance2, setDistance2] = useState(0)

  let countDown = new Date('May 31, 2025 15:00:00 UTC').getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;
      if (distance > 0)
        setDistance(distance)
    }, second)


  let countDown2 = new Date('Dec 30, 2025 00:00:00 UTC').getTime(),
    y = setInterval(function () {

      let now = new Date().getTime(),
        distance2 = countDown2 - now;
      if (distance2 > 0)
        setDistance2(distance2)
    }, second)

  const [lang, setLang] = useState("Eng");
  const [selectedLang, setSelectedLang] = useState({
    img: fg13,
    title: "English",
  });
  const [hovered, setHovered] = useState(false);
  const [langStatus, setLangStatus] = useState(false);

  const [navBarOpen, setNavBarOpen] = useState(false);
  const { t } = useTranslation();

  const locales = {
    en: { img: fg13, title: "English" },
    gr: { img: fg12, title: "German" },
    fr: { img: fg11, title: "French" },
    es: { img: fg10, title: "Spanish" },
    it: { img: fg9, title: "Italian" },
    du: { img: fg8, title: "Dutch" },
    tu: { img: fg7, title: "Turkey" },
    jp: { img: fg6, title: "Japan" },
    kr: { img: fg5, title: "Korean" },
    nr: { img: fg4, title: "Norwegian" },
    ru: { img: fg3, title: "Russian" },
    ch: { img: fg2, title: "Chinese" },
    pr: { img: fg1, title: "Portugese" },
    vt: { img: fg14, title: "Vietnamese" },
  };
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const dashboardRef = useRef(null);

  const handleButtonClick = () => {
    setIsDashboardVisible(true);
  };
  const handleButtonClickClose = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };

  const handleLangDropdown = () => {
    setLangStatus(!langStatus);
  };
  const handleNavbarMenu = () => {
    setNavBarOpen(!navBarOpen);
  };
  const handleNavbarMenuClose = () => {
    setNavBarOpen(false);
  };

  const dropdownRef = useRef(null);
  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale);

    setSelectedLang(locales[locale]);
    setLangStatus(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLangStatus(false);
    }
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText("cm80")
      .then(() => {

        toast.success('Copied!');
      })
      .catch((error) => {
        console.error('Error copying:', error);
        toast.error('Failed to copy.');
      });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText("dc50")
      .then(() => {

        toast.success('Copied!');
      })
      .catch((error) => {
        console.error('Error copying:', error);
        toast.error('Failed to copy.');
      });
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  useAccountEffect({
    onConnect(data) {
      if (!data.isReconnected) {

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "wallet",
        });
        console.log("Wallet connected event triggered");
        if (typeof fbq === "function") {
          fbq("track", "Lead");
          console.log("Facebook Pixel 'Lead' event triggered");
        } else {
          console.warn(
            "fbq is not defined. Ensure FB Pixel is correctly initialized."
          );
        }
      }
    },
  })

  return (
    <div className="relative bg-[#0D0904]">

      <header class="w-full header xs:fixed xs:bottom-0 bg-[#0A40A0] text-black items-center md:block sm:block xs:block text-center py-2">
        {
          distance > 0 ?

            <div className="alert-container place-content-center flex items-center md:block sm:block xs:block">
              <div className="copy-container">
                <h1 className="main-head text-[18px] flex text-white xs:text-[14px] xs:items-center xs:justify-center">Official DCARS launch: 31 May 2025 at 3 pm UTC
                </h1>
              </div>
              <div className='flex items-center justify-center'>
                {/* <ul className="countdown-clock text-white  2xl:grid xl:grid lg:grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:inline-flex sm:inline-flex xs:inline-flex">
                  <li className='px-2 xs:px-1 text-[10px]'><span id="days" className='font-bold text-[18px]'>{Math.floor(distance / (day))}</span> {("Days")}</li>
                  <li className='px-2 xs:px-1 text-[10px]'><span id="hours" className='font-bold text-[18px]'>{Math.floor((distance % (day)) / (hour))}</span> {("Hours")}</li>
                  <li className='px-2 xs:px-1 text-[10px]'><span id="minutes" className='font-bold text-[18px]'>{Math.floor((distance % (hour)) / (minute))}</span> {("Mins")}</li>
                  <li className='px-2 xs:px-1 text-[10px]'><span id="seconds" className='font-bold text-[18px]'>{Math.floor((distance % (minute)) / second)}</span> {("Secs")}</li>
                </ul> */}
              </div>
            </div> :
            distance2 > 0 &&
            <div className="alert-container place-content-center flex items-center md:block sm:block xs:block">
              <div className="copy-container">
                {/* <h1 className="main-head text-[18px] flex text-white xs:text-[14px] xs:items-center xs:justify-center">Available Today! 'Use code <p className="font-bold">{" "}DCARS50</p> <img src={copyicn} className="mx-1 h-[14px] w-[12px] mt-[7px] xs:mt-[1px]" onClick={handleCopy} /> to get a 50% bonus'</h1> */}

                <h1 className="main-head text-[18px] flex text-white xs:text-[14px] xs:items-center xs:justify-center">Dreamcars Acquired a Lamborghini Urus! Reveal at $1M</h1>
              </div>
              {/* <div className='flex items-center justify-center'>
                <ul className="countdown-clock text-white  2xl:grid xl:grid lg:grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:inline-flex sm:inline-flex xs:inline-flex">
                  <li className='px-2 xs:px-1 text-[10px]'><span id="days" className='font-bold text-[18px]'>{Math.floor(distance2 / (day))}</span> {("Days")}</li>
                  <li className='px-2 xs:px-1 text-[10px]'><span id="hours" className='font-bold text-[18px]'>{Math.floor((distance2 % (day)) / (hour))}</span> {("Hours")}</li>
                  <li className='px-2 xs:px-1 text-[10px]'><span id="minutes" className='font-bold text-[18px]'>{Math.floor((distance2 % (hour)) / (minute))}</span> {("Mins")}</li>
                  <li className='px-2 xs:px-1 text-[10px]'><span id="seconds" className='font-bold text-[18px]'>{Math.floor((distance2 % (minute)) / second)}</span> {("Secs")}</li>
                </ul>
              </div> */}
            </div>
        }
      </header >
      <nav className="relative 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1300px] mx-auto py-1 xs:py-1">
        <header className="flex justify-between items-center">

          <div className="flex items-center space-x-10 h-16 max-w-screen-2xl sm:px-0 xs:px-0 lg:px- ">
            <div className="flex items-center">
              <div className="flex items-center w-[100%] max-w-[200px] pb-[0.7rem] xs:pb-[0rem] xs:w-[136px]">
                <a href="#buynow">
                  <img
                    src={Logo}
                    className="h-[55px] xs:h-[27px] sm:h-[53px] w-[100%]"
                    alt="LOGO"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between xs:justify-start space-x-[38px] xs:space-x-0 ">
            <div className="flex justify-between  items-center space-x-[3.5rem]  xs:hidden sm:hidden md:hidden ">
              <h4 className="text-white  text-[16px] lg:text-[10px] xl:text-[14px] font-[500] hover:text-[#a0a0a0]">
                {" "}
                <a
                  href="#what-is-dreamcars"
                  data-offset="80"
                  onClick={handleLinkClick}
                >
                  {t("main.navlink1")}
                </a>{" "}
              </h4>
              <h4 className="text-white  text-[16px] lg:text-[10px] xl:text-[14px] font-[500] hover:text-[#a0a0a0]">
                {" "}
                <a href="#how-to-buy" data-offset="70" onClick={handleLinkClick}>
                  {t("main.navlink2")}
                </a>
              </h4>
              <h4 className="text-white  text-[16px] lg:text-[10px] xl:text-[14px] font-[500] hover:text-[#a0a0a0]">
                {" "}
                <a href="#whitepaper" data-offset="0" onClick={handleLinkClick}>
                  {t("main.navlink4")}
                </a>{" "}
              </h4>
              <h4 className="text-white  text-[16px] lg:text-[10px] xl:text-[14px] font-[500] hover:text-[#a0a0a0]">
                {" "}
                <a href="#faqs" data-offset="100" onClick={handleLinkClick}>
                  {t("main.navlink6")}
                </a>{" "}
              </h4>
              <h4 className="text-white  text-[16px] lg:text-[10px] xl:text-[14px] font-[500] hover:text-[#a0a0a0]">
                {" "}
                <a href="https://gleam.io/YACAE/win-a-tesla-crybertruck">
                  {t("main.navlink5")}
                </a>{" "}
              </h4>
            </div>
          </div>
          <div className="flex items-center space-x-[17px] xs:space-x-[5px] ">
            <li className="flex items-center xs:hidden sm:hidden md:hidden">
              <div className="relative border border-[#fff] rounded-[30px] px-2">
                <button
                  onClick={handleLangDropdown}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-white font-medium rounded-lg text-sm w-[full] h-[41px]  py-2.5 text-center inline-flex items-center px-2"
                  style={{}}
                  type="button"
                >
                  <img src={selectedLang.img} width={20} className="mr-2" />
                  {selectedLang.title}

                  <svg
                    className={`fill-current text-white h-4 w-4 transform ${langStatus ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {langStatus && (
                  <>
                    <div className="relative">
                      <div
                        id="dropdown"
                        ref={dropdownRef}
                        className="absolute font-[Poppins] w-[1000px]   -left-[630%] top-[21px] z-10 "
                      >
                        <HoverDropDn
                          onLanguageChange={handleLanguageChange}
                          locales={locales}
                        />
                      </div>
                    </div>
                    <div onClick={handleLangDropdown} className="relative">
                      <div className="bg-[#f0f8ff00] !w-[1400px] -top-[2] right-[-513%]  absolute"></div>
                    </div>
                    {/* <div onClick={handleLangDropdown} className='relative'>
                                            <div className='bg-[#faebd700] !w-[1400px] -top-[2] right-[-513%] h-[100vh] absolute '></div>
                                        </div> */}
                  </>
                )}
              </div>
            </li>
            <div className="">

              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  // Note: If your app doesn't use authentication, you
                  // can remove all 'authenticationStatus' checks
                  const ready = mounted && authenticationStatus !== 'loading';
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');

                  return (
                    <div
                      {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (

                            <button
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                              className="hover:border hover:border-[#FFD02F] border border-[#FFD02F] w-[180px] xs:w-[140px] bg-[#FFD02F] hover:bg-[transparent] relative rounded-[30px] hover:text-[#FFD02F] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[10px] font-[700] rounded-full ftbutton2 xs:h-[31px] h-[41px] flex justify-center items-center" onClick={openConnectModal}
                            >
                              {!hovered && (
                                <img
                                  src={btnicon2}
                                  alt="Icon 1"
                                  className="transition-all duration-300 mr-[9px] "
                                />
                              )}
                              {hovered && (
                                <img
                                  src={btnicon}
                                  alt="Icon 2"
                                  className="transition-all duration-300 mr-[9px]"
                                />
                              )}
                              {t("main.navBtn")}
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button className='bgcolor 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[12px] font-[Inter] font-[700] rounded-full px-4 h-[40px]' onClick={openChainModal}>
                              Switch Network
                            </button>
                          );
                        }

                        return (
                          <div>
                            <button className='px-3  rounded-full items-center justify-start w-[165px] xs:w-[150px] lg:w-[150px] h-[38px] flex items-center  p-1.5 text-[13px] xs:text-[12px] font-semibold font-[lato] text-white space-x-1 relative bg-[#3f3f3f]' onClick={() => handleClose(!open)}>
                              <div className='absolute bg-white -right-[2.5px] h-[40px] w-[40px] rounded-full border border-[#3f3f3f] flex justify-center items-center'>
                                <span className='  '>
                                  <img className='' src={WalletBlue} alt="" />
                                </span>
                              </div>
                              <span className="font-semibold font-[lato]">
                                {/* {userWallet} */}
                                {account.address.slice(0, 6)}...{account.address.slice(-4)}
                              </span>

                            </button>
                            {
                              open ?
                                <div className="!max-w-[610px] overflow-y-scroll h-[90vh] scrolldc bggrdashbord w-[100%] top-[100%] right-[0%] absolute">
                                  <PersonalDashboard handleClose={handleClose} accounts={account.address} />
                                </div> :
                                <></>
                            }
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
          {/* <div className="flex items-center space-x-[3.5rem] xs:space-x-[8px]">
          </div> */}
          <button
            type="button"
            onClick={handleNavbarMenu}
            className="p-1 sm:mr-4 xl:hidden lg:hidden 2xl:hidden"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
                fill="white"
              />
            </svg>
          </button>
        </header>
        {navBarOpen && (
          <div className="">
            <div className=" relative  space-y-4 py-6 px-6 2xl:hidden xl:hidden lg:hidden !h-[1800px] bg-[#111010] w-full left-0 absolute">
              <button
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                <a
                  href="#what-is-dreamcars"
                  data-offset="60"
                  onClick={handleLinkClick}
                >
                  {t("main.navlink1")}
                </a>
              </button>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                <a
                  href="#how-to-buy"
                  data-offset="60"
                  onClick={handleLinkClick}
                >
                  {t("main.navlink2")}
                </a>
              </h4>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                {" "}
                <a href="#whitepaper" data-offset="60" onClick={handleLinkClick}>
                  {t("main.navlink4")}
                </a>
              </h4>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                {" "}
                <a href="#faqs" data-offset="60" onClick={handleLinkClick}>
                  {t("main.navlink6")}
                </a>
              </h4>
              <h4
                className="text-white  text-[16px] font-[400] hover:text-[#a0a0a0]"
                onClick={handleNavbarMenuClose}
              >
                {" "}
                <a href="https://gleam.io/YACAE/win-a-tesla-crybertruck" >
                  {t("main.navlink5")}
                </a>
              </h4>
              <li className="flex items-center ">
                <div className="relative ">
                  <button
                    onClick={handleLangDropdown}
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="text-white font-medium rounded-lg text-sm w-[full]  py-2.5 text-center inline-flex items-center "
                    style={{}}
                    type="button"
                  >
                    <img src={selectedLang.img} width={20} className="mr-2" />
                    {selectedLang.title}
                    <svg
                      className={`fill-current text-white h-4 w-4 transform ${langStatus ? "rotate-180" : ""
                        }`}
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {langStatus && (
                    <>
                      <div className="relative">
                        <div
                          id="dropdown"
                          ref={dropdownRef}
                          className="absolute xs:w-[310px] h-[320px] xs:mx-auto w-[1000px] xs:left-[0%] -left-[860%] top-[3px] z-10 "
                        >
                          <HoverDropDn
                            onLanguageChange={handleLanguageChange}
                            locales={locales}
                          />
                        </div>
                      </div>
                      <div onClick={handleLangDropdown} className="relative">
                        <div className="bg-[#f0f8ff00] w-[1400px]  -top-[2] right-[-513%]  absolute"></div>
                      </div>
                      {/* <div onClick={handleLangDropdown} className='relative'>
                                            <div className='bg-[#faebd700] !w-[1400px] -top-[2] right-[-513%] h-[100vh] absolute '></div>
                                        </div> */}
                    </>
                  )}
                </div>
              </li>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;