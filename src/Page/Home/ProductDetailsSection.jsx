import React, { useState, useEffect, useCallback } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Loinp from "../../assects/images/dtokens.png";
import eth from "../../assects/svgs/ethsv.svg";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/loinppre (2).png";
import Sol from "../../assects/images/tokens_11.svg";
import USDC from "../../assects/images/tokens (9).svg";
import downarw from "../../assects/svgs/droparw.svg";
import downeth from "../../assects/svgs/dropeth.svg";
import Solid from "../../assects/images/logo-white-3.png.png";
import thumb from "../../assects/images/thumb.webp";
import que from "../../assects/svgs/questionIcon.svg";
import refe from "../../assects/svgs/referralIcon.svg";
import sharelogo from "../../assects/images/shareicon.png";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import icns1 from "../../assects/svgs/whticn (7).svg"
import icns2 from "../../assects/svgs/whticn (6).svg"
import icns6 from "../../assects/svgs/whticn (2).svg"
import icns4 from "../../assects/svgs/whticn (4).svg";
import worldRealyLogo from "../../assects/svgs/world-realy-logo.svg";
import DCtext from "../../assects/svgs/dreamsCars.svg";
import officalMan from "../../assects/svgs/offical-man.svg";
import officalMan2 from "../../assects/images/offical-man2.png";
import token1 from "../../assects/icons/wallet_icon/token (9).svg";
import token2 from "../../assects/icons/wallet_icon/token (8).svg";
import token3 from "../../assects/icons/wallet_icon/token (7).svg";
import token4 from "../../assects/icons/wallet_icon/token (6).svg";
import token5 from "../../assects/icons/wallet_icon/token (5).svg";
import token6 from "../../assects/icons/wallet_icon/token (4).svg";
import token7 from "../../assects/icons/wallet_icon/token (3).svg";
import token8 from "../../assects/icons/wallet_icon/token (2).svg";
import token9 from "../../assects/icons/wallet_icon/token (1).svg";

import Parse from 'parse';
import '@rainbow-me/rainbowkit/styles.css';

import axios from 'axios'

import { bsc } from 'wagmi/chains'
import { useWriteContract, useAccount, useBalance, useSendTransaction } from 'wagmi'
import { useReadContract, useWaitForTransactionReceipt } from 'wagmi'
import { useSwitchChain, useChainId } from 'wagmi'
import {
    useConnectModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import { parseEther } from 'viem'

import { useTranslation } from 'react-i18next';

import { FaLink, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

// const stakeAndClaimContract = "0x255b82eC452E00e3E9D2c56441AB133B616704F8";
// const dreamcarsAddress = "0xa910A46E2F2002Fa9B5aA85F35b9440F6DAC4b10";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel,Pagination, Keyboard } from "swiper/modules";

import cardsvg1 from "../../assects/svgs/cardsvg (1).svg";
import cardsvg2 from "../../assects/svgs/cardsvg (2).svg";
import TokenSelectDropdown from "../../components/TokenDropdown";

const cardData = [
  {
    id: 1,
    title: "Best New Crypto",
    titleWidth: "max-w-[155px] min-w-[155px]",
    para:"By Coinrise, 2025"
  },
  {
    id: 2,
    title: "Best Crypto  Pre-Sale ",
    titleWidth: "max-w-[183px] min-w-[140px]",
    para:"By Coinrise, 2025"
  },
  {
    id: 3,
    title: "Best Crypto Innovation",
    titleWidth: "max-w-[155px] min-w-[150px]",
    para:"Altcoin Daily, 2025"

  },
  {
    id: 4,
    title: "Best Crypto Growth Potential",
    titleWidth: "max-w-[223px] min-w-[145px]",
    para:"Altcoin Daily, 2025"

  },
];


const options = [
{ id: 1, label: "ETH", image: eth },
  { id: 2, label: "USDT", image: downeth },
  { id: 3, label: "BNB", image: BNB },
  { id: 4, label: "SOL", image: Sol },
  { id: 5, label: "USDC", image: USDC },
];
const usdtAbi = [
  {
    "constant": false,
    "inputs": [
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "type": "function"
  }
];

const ProductDetailsSection = ({ range, handleRange, handleClose, setPerc, setParticipants }) => {
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const { sendTransaction } = useSendTransaction()
  const { writeContract: buyUsingUSDTETH} = useWriteContract()
  const { writeContract: buyUsingUSDTBNB} = useWriteContract()

  const usdtAddressETH = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // USDT Contract Address
  const usdtAddressBNB = '0x55d398326f99059fF775485246999027B3197955'; // USDT Contract Address
  const chainId = useChainId();
  const [loading, setLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState("0xCD71914C7c19a59cDFD708405552200151b0BB50");
    const [finalUserTokens, setFinalUserTokens] = useState(0);
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[1]);
    const [showDropdown, setShowDropdown] = useState(false);
    const { t, i18n } = useTranslation();

    const [activeButton, setActiveButton] = useState(null);
    const [selectedToken, setSelectedToken] = useState(null);

   const buttons = [
    { id: 1, label: "ETH", imgSrc: eth },
    { id: 2, label: "USDT", imgSrc: USDT },
    { id: 3, label: "BNB", imgSrc: BNB },
    { id: 4, label: "SOL", imgSrc: Sol },
    { id: 5, label: "USDC", imgSrc: USDC },
    { id: 6, label: "MORE" },
  ];
  const tokenSelect = [
  [
    { id: 1, symbol: "ETH", sub_symbol: "ERC-20", icon: eth },
    { id: 2, symbol: "USDT", sub_symbol: "ERC-20", icon: USDT },
  ],
  [
    { id: 3, symbol: "USDT", sub_symbol: "ERC-20", icon: USDT },
    { id: 4, symbol: "SOL", sub_symbol: "SOLANA", icon: Sol },
  ],
  [
    { id: 5, symbol: "BNB", sub_symbol: "BSC-20", icon: BNB },
    { id: 6, symbol: "USDC", sub_symbol: "BITCOIN", icon: USDC },
  ],
  [
    { id: 7, symbol: "SOL", icon: Sol },
    { id: 8, symbol: "ETH", icon: eth },
  ],
  [
    { id: 9, symbol: "USDC", sub_symbol: "ERC-20", icon: USDC },
    { id: 10, symbol: "BNB", sub_symbol: "ERC-20", icon: BNB },
  ],
  [{ id: 11, symbol: "More" },
    
  ],
];

   const handleClickButton = (id) => {
  handleTokenChange(id);
  setActiveButton(id);

  const selected = options[id - 1];
  if (selected) {
    setSelectedOption(selected);
  } else {
    console.log("No option found for this button");
    // maybe open a modal, show more tokens, etc.
  }
};

    const handleButtonClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleTokenChange(option.id)
        setShowDropdown(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("https://dreamcars.co/")
            .then(() => {
                let link = window.location.origin + "/?ref=" + userAddress + "&lang=" + i18n.language
                navigator.clipboard.writeText(link);
                toast.success('Copied!');
            })
            .catch((error) => {
                console.error('Error copying:', error);
                toast.error('Failed to copy.');
            });
    };

    const handelBonus = () => {
        setShow(!show);
    };

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

    const { chains, switchChain } = useSwitchChain()
    const { isConnected } = useAccount()
    const [currentChain, setCurrentChain] = useState('BSC');
    const [tokenChoice, setTokenChoice] = useState('USDT');
    const [referral, setReferral] = useState('0x0000000000000000000000000000000000000000');
    const [ethPrice, setEthPrice] = useState(1);
    const [bnbPrice, setBNBPrice] = useState(1);
    const [currentDcarsPrice, setCurrentScorpPrice] = useState(76.923);
    const [percentage, setPercentage] = useState(0);
    const [currentAllowance, setCurrentAllowance] = useState(0);
    const [currentAllowanceETH, setCurrentAllowanceETH] = useState(0);
    const [totalContributions, setTotalContributions] = useState(0);
    const [totalParticipants, setTotalParticipants] = useState(0);

    const { openConnectModal } = useConnectModal();
    const { openChainModal } = useChainModal();
    const [userAmount, setUserAmount] = useState(1000);
    const [userUSD, setUserUSD] = useState(76923);
    const [userAddress, setUserAddress] = useState(0);
    const [txHash, setTxHash] = useState("");
    const [buynowbtn, setBuyNowBtn] = useState(t("BUY $DCARS"));
    const [totalContribution, setTotalContribution] = useState(0);


    const handleBuyToken = async () => {

      console.log(chainId)
        if(tokenChoice === "ETH")
          sendTransaction({
            to: walletAddress,
            value: parseEther(userAmount.toString()),
          })
          if(tokenChoice === "BNB")
          sendTransaction({
            to: walletAddress,
            value: parseEther(userAmount.toString()),
          })
          if(tokenChoice === "USDT")
          {

            if(chainId=== 56){
              buyUsingUSDTBNB({
                address: usdtAddressBNB,
                abi: usdtAbi,
                functionName: 'transfer',
                chainId: 56,
                args: [walletAddress, userAmount * 1e18],
            })
          }
            if(chainId=== 1){
              
              buyUsingUSDTETH({
                address: usdtAddressETH,
                abi: usdtAbi,
                functionName: 'transfer',
                chainId: 1,
                args: [walletAddress, userAmount * 1000000],
            })
              }
          }
      setupSubscriptions()
    };
  

    const [coupon, setCoupon] = useState("0");
    const couponCodes = ["dcars50", "dc50", "dream50", "car50", "cars50", "cm80", "xmas80","ny75"]
    const couponCodes2 = ["dcars50", "dc50", "dream50", "car50", "cars50", "xmas80","ny75"]
    const handleCoupon = (e) => {
        e.preventDefault();
    }

    
  const getBNBPrice = useCallback(async () => {
    let a = 0;
    await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD')

      .then(function (response) {
        // handle success
        setEthPrice(Number(response.data.USD))
        // await axios.get('https://min-api.crypt
        a = response.data.USD
      })
    return Number(a);
    }, [bnbPrice])

  const getEthPrice = useCallback(async () => {
    let a = 0;
    await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')

      .then(function (response) {
        // handle success
        setEthPrice(Number(response.data.USD))
        // await axios.get('https://min-api.crypt
        a = response.data.USD
      })
    return Number(a);
  }, [ethPrice])

    const handleUserInput = async (e) => {
      setLoading(true);
      const inputValue = e.target.value;
  
      // Allow any valid number input, including 0 and decimals
      if (inputValue === '' || inputValue === '0' || inputValue === '.') {
        setUserAmount(inputValue);
        setUserUSD(0);
        return;
      }
  
      // Allow typing decimals (e.g., "0." or "0.1")
      if (/^\d*\.?\d*$/.test(inputValue)) {
        setUserAmount(inputValue);
  
        // Only calculate USD if we have a valid number
        const numberValue = parseFloat(inputValue);
        console.log(numberValue)
        if (!isNaN(numberValue)) {
          if(tokenChoice === "ETH"){
          const ethPrice = await getEthPrice();
          const calculatedUSD = numberValue * ethPrice * currentDcarsPrice;
          setUserUSD(calculatedUSD);
        }
          else if (tokenChoice === "BNB" )
          {
            
          const bnbPrice = await getBNBPrice();
          const calculatedUSD = numberValue * bnbPrice * currentDcarsPrice;
          setUserUSD(calculatedUSD);
          }
          else if (tokenChoice === "USDT")
          {
            
          const calculatedUSD = numberValue * currentDcarsPrice;
          setUserUSD(calculatedUSD);
          }
        } else {
          setUserUSD(0);
        }
      }
      setLoading(false);
    }

    const handleDcarsInput = ()=>{
      
    }
    const handleTokenChange = async (token) => {
          if (token === 1) {
                  setTokenChoice('ETH')
              openChainModal()
              setBuyNowBtn(t("BUY $DCARS"))
                  setUserAmount(1)
                      setUserUSD(1 * await getEthPrice() * currentDcarsPrice)
                  }

          else if (token === 2) {
              setTokenChoice('USDT')
              // if (currentAllowance + currentAllowanceETH < userAmount * 1e18)
              //     setBuyNowBtn(t("Approve transaction"))
              // setUserUSD(userAmount * currentDcarsPrice)

              setUserAmount(1000)
              setUserUSD(1000 * currentDcarsPrice)
          }
          else {
                  setTokenChoice('BNB')
                  setBuyNowBtn(t("BUY $DCARS"))
                  setUserAmount(1)
                  openChainModal()
                  setUserUSD(1 * await getBNBPrice() * currentDcarsPrice)
              }
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
    useEffect(() => {
        handleRange(1000)
    }, [])
    useEffect(() => {
        (async () => {
            if (tokenChoice === "USDT") {
                handleRange(userAmount)

            } else
                if (tokenChoice === "ETH") {
                    handleRange(userAmount * await getEthPrice())
                }
                else
                if (tokenChoice === "BNB") {
                    handleRange(userAmount * await getBNBPrice())
                }
        }
        )()
    }, [userAmount])

    
  const fetchData = async () => {
    try {
      const query = new Parse.Query("Transaction_cd7191_BSC");
      const query2 = new Parse.Query("Transaction_cd7191_ETH");

      // Set constraints to find records for this wallet address
      query.equalTo("walletAddress", walletAddress.toLowerCase());
      query2.equalTo("walletAddress", walletAddress.toLowerCase());

      // Fetch all matching records
      const bscTransactions = await query.find();
      const ethTransactions = await query2.find();

      // Calculate totals
      let totalContrib = 0;
      let totalTokens = 0;
      let totalParticipant = 0;

      // Sum up BSC transactions
      bscTransactions.forEach(tx => {
       totalParticipant++;
      totalContrib += tx.get("amountInUSD") || 0;
      });

      // Sum up ETH transactions
      ethTransactions.forEach(tx => {
       totalParticipant++;
        totalContrib += tx.get("amountInUSD") || 0;
      });

      setTotalContribution(totalContrib);
      setTotalParticipants(totalParticipant)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])

    const handleSuccess = (transaction) => {
      console.log(userAmount.toString())
      if (transaction.attributes.amountInToken === userAmount.toString())
        toast.success(`New transaction: ${transaction.attributes.amountInToken} ${transaction.attributes.tokenType} (${(transaction.attributes.amountInUSD).toFixed(2)} USD)`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
    }
    const setupSubscriptions = async () => {
      try {
        // Create queries for both chains
        const bscQuery = new Parse.Query("Transaction_cd7191_BSC");
        const ethQuery = new Parse.Query("Transaction_cd7191_ETH");
  
        // Subscribe to BSC transactions
        try {
          const bscSubscription = await bscQuery.subscribe();
          bscSubscription.on('create', (transaction) => {
            console.log("bsc create", transaction)
            handleSuccess(transaction)
          });
  
  
          // Subscribe to ETH transactions
          const ethSubscription = await ethQuery.subscribe();
          ethSubscription.on('create', (transaction) => {
            console.log("bsc create", transaction)
            handleSuccess(transaction)
          });
  
          // Cleanup subscriptions on component unmount
          return () => {
            bscSubscription.unsubscribe();
            ethSubscription.unsubscribe();
          };
        } catch (error) {
          console.error("Error setting up live query:", error);
          toast.error("Error connecting to live updates");
        }
      } catch (error) {
        console.error("Setup error:", error);
        toast.error("Error setting up live updates");
      }
    };
    useEffect(() => {
      // Initialize Parse
      Parse.initialize("myAppId");
      Parse.serverURL = "https://64.227.103.227/parse";
      Parse.liveQueryServerURL = 'wss://64.227.103.227/parse';
  
    }, []); 
  


    // useEffect(() => {
    //     (async () => {
          
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({ ecommerce: null });

    //     if (bnbData){
    //         window.dataLayer.push({
    //           event: "purchase",
    //           ecommerce: {
    //             currency: "USD",
    //             value: Number(userAmount * await getBNBPrice()), 
    //                   }
    //         });

    //         fbq("track", "Purchase", {
    //         value: Number(userAmount * await getBNBPrice()),
    //         currency: "USD", 
    //         });
    //     }
    //     if (ethData){
    //         setTxHash(ethData)
        
    //         window.dataLayer.push({
    //           event: "purchase",
    //           ecommerce: {
    //             currency: "USD",
    //             value: Number(userAmount * await getEthPrice()), 
    //                   }
    //         });
            
    //             fbq("track", "Purchase", {
    //             value: Number(userAmount * await getEthPrice()),
    //             currency: "USD", 
    //             });
    //     }
    //     if (usdtData){
    //         setTxHash(usdtData)
            
    //         window.dataLayer.push({
    //           event: "purchase",
    //           ecommerce: {
    //             currency: "USD", 
    //             value: Number(userAmount)
    //                   }
    //         });
    //             fbq("track", "Purchase", {
    //             value: Number(userAmount),
    //             currency: "USD", 
    //             });
    //     }
    //     if (usdtethData){
    //         setTxHash(usdtethData)
        
    //         window.dataLayer.push({
    //           event: "purchase",
    //           ecommerce: {
    //             currency: "USD", //USD only
    //             value: Number(userAmount)
    //                   }
    //         });
            
    //             fbq("track", "Purchase", {
    //             value: Number(userAmount),
    //             currency: "USD", 
    //             });
    //     }
    //     }
    //     )()
    // }, [bnbData, usdtethData, usdtData, ethData])


    useEffect(() => {
        // Dynamically load the Wistia player script
        const wistiaScript = document.createElement('script');
        wistiaScript.src = 'https://fast.wistia.com/player.js';
        wistiaScript.async = true;
        document.body.appendChild(wistiaScript);

        // Optionally load additional scripts if needed
        const additionalScript = document.createElement('script');
        additionalScript.src = 'LINK'; // Replace 'LINK' with the actual URL for the other script
        additionalScript.async = true;
        additionalScript.type = 'module';
        document.body.appendChild(additionalScript);

        return () => {
            // Clean up scripts if the component unmounts
            document.body.removeChild(wistiaScript);
            document.body.removeChild(additionalScript);
        };
    }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <div id="hero" className="backgroundgrhero pt-[5rem] xs:pt-[4rem]">
          
            <div className=" space-y-4 py-[4rem] xs:py-[2.2rem] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] max-w-[1276px] mx-auto ">
                <div className="2xl:space-y-[45px]  xl:space-y-[45px] lg:space-y-4 xs:space-y-2 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
                    <div>
                    <div className="w-[100%] max-w-[1200px] mx-auto xl:w-[100%] flex flex-col justify-between lg:w-[100%]  xs:w-[100%] sm:w-[100%] md:w-[100%]  ">

                            <div className="space-y-[10px]  ">
                                <h5 className="2xl:text-[18px] xs:px-[0.5rem] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] leading-[130%] font-[400] font-[Lato] text-white text-center ">
                                    {t("ProductDetails.para1")}
                                </h5>
                                <h3 className="text-[46px]  xs:py-[0.3rem]  text-center xs:text-[27px] leading-[1.3] capitalize font-[900] font-[Lato] text-[#fff] ">
                                    {" "}
                                    Invest In Luxury Rental Cars<br className="hidden xs:block"></br> And Earn Monthly Income
                                </h3>
                                <h5 className="2xl:text-[22px] text-center xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] text-[16px] font-[400] leading-[120%] text-white ">
                                    {t("ProductDetails.para2")}
                                </h5>
                            </div>

                        </div>
                    </div>
                    <div className="xs:pt-[20px] flex justify-between items-center max-w-[1259px] mx-auto w-[100%] xs:pb-[0.8rem] ">
                        <div className="w-[22%] space-y-[20px] 2xl:block xl:block lg:block md:block sm:hidden hidden">
                            <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[24px] max-w-[200px] w-[100%] text-center w-[100%]  font-[800] leading-[22px] ">The Rolls Royce Of Crypto! </h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns1} alt="" />
                            </div>
                            <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[24px] text-center max-w-[220px] w-[100%]  font-[800] leading-[22px] ">A New Era Of Cryptocurrency!   </h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns4} alt="" />
                            </div>
                        </div>
                        {/* <div className=" flex items-center py-[0px] justify-start space-x-[1rem] mt-5 xs:my-5  sm:my-5">
                            <a href="https://github.com/solidproof/projects/blob/main/2024/Dreamcars/EVM_Audit_SolidProof_Dreamcars.pdf" target="_blank" className="2xl:text-[18px]  xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[15px]  text-[15px]  text-white underline font-[Lato]">
                                {t("ProductDetails.para3last")}
                            </a>
                            <img className="h-[35px] xs:h-[33px]" src={Solid} alt="" />
                        </div>*/}
                        <div className="w-[51%] xs:w-[100%]">
                            <style>
                                {`
                                                wistia-player[media-id='8dzagr2loo']:not(:defined) {
                                                    background: center / contain no-repeat url(`+ { thumb } + `);
                                                    filter: blur(5px);
                                                    padding-top: 56.25%;
                                                }
                                                `}
                            </style>

                            <div className="wistia-player-container">
                                <wistia-player media-id="8dzagr2loo"></wistia-player>
                            </div>
                        </div>

                        <div className="w-[22%] space-y-[20px] 2xl:block xl:block lg:block md:block sm:hidden hidden">
                            <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[30px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[24px] text-center max-w-[220px] text-center w-[100%]  font-[800] leading-[22px] ">Own A Piece Of<br />Your Dream Car!</h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns6} alt="" />
                            </div>
                            <div className="max-w-[270px] h-[142px] w-[100%] flex flex-col items-center justify-center py-[30px] px-[0px] backdrop-blur-md m-0 bg-[#d1d5db1f] space-y-[15px] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[24px]  w-[100%]  font-[800] leading-[22px] text-center ">This Has Never
                                <br />Been Done Before!</h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns2} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-[23px] xs:px-[8px] py-[13px] relative z-[9] gradient-border-mask-own-hero-cent backdrop-blur-md bg-[#ffffff08] xs:space-x-2 flex justify-center max-w-[1260px] mx-auto items-center">
                       <div className="flex 2xl:flex-row xl:flex-row 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 sm:space-y-4 space-y-4 lg:flex-row md:flex-row sm:flex-col flex-col justify-between max-w-[1120px] w-[100%] mx-auto items-center">
                         <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[12px] font-[800] text-[#fff] ml-3">$DCARS Pre-Sale is Live <span className="xs:hidden">Now</span></h4>
                        <div className="flex justify-center space-x-[10px] xs:space-x-[4px] ">
                            <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <img className="w-[22px] h-[22px]  xs:h-[20px] xs:h-[20px]" src={token1} alt="" />
                            </div>
                            <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <img className="w-[22px] h-[22px]  xs:h-[20px] xs:h-[20px]" src={token2} alt="" />
                            </div>
                            <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:h-[20px] xs:h-[20px]">
                                    <img src={token3} alt="" />
                                </div>
                            </div>
                              <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]">
                                    <img src={token4} alt="" />
                                </div>
                            </div>
                              <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]">
                                    <img src={token5} alt="" />
                                </div>
                            </div>
                              <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]">
                                    <img src={token6} alt="" />
                                </div>
                            </div>
                              <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]">
                                    <img src={token7} alt="" />
                                </div>
                            </div>
                              <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]">
                                    <img src={token8} alt="" />
                                </div>
                            </div>
                              <div className="w-[58px] h-[41px] xs:w-[30px] xs:h-[30px] flex justify-center items-center gradient-border-mask-own-hero-icn backdrop-blur-md bg-[#ffffff08]">
                                <div className="w-[22px] h-[22px]  xs:w-[20px] xs:h-[20px]">
                                    <img src={token9} alt="" />
                                </div>
                            </div>
                        </div>
                        <button className="text-[16px] xs:text-[10px] ftbutton2  font-[700] text-[#000] w-[158px] xs:w-[70px] h-[41px] xs:h-[24px] bgherobtn xs:!rounded-[7px] border-[transparent] border hover:bg-[transparent] hover:text-[#FFD02F] hover:border hover:border-[#FFD02F] "><a href="#buynow" data-offset="60">Buy Now </a></button>
                       </div>
                    </div>
                    
                    <div className="2xl:hidden xl:hidden lg:hidden !mt-[20px] md:hidden sm:flex flex space-x-3">
                        <div className="w-[50%] space-y-[10px] ">
                            <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[16.099px] max-w-[200px] w-[100%] text-center w-[100%]  font-[800] leading-[110%] pb-[13px] ">The Rolls Royce <br /> Of Crypto! </h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns1} alt="" />
                            </div>
                            <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[16.099px] text-center max-w-[220px] w-[100%]  font-[800] leading-[110%]">A New Era<br />Of Cryptocurrency!                                </h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns4} alt="" />
                            </div>
                        </div>
                        <div className="w-[50%] space-y-[10px] ">
                            <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[16.099px] text-center max-w-[220px] text-center w-[100%]  font-[800] leading-[110%] pb-[8px]  ">Own A Piece Of<br />Your Dream Car!
                                </h4>
                                <img className="opacity-[0.6] max-h-[35px]" src={icns6} alt="" />
                            </div>
                            <div className="max-w-[270px] h-[112px] w-[100%] flex flex-col items-center justify-center py-[20px] px-[15px] backdrop-blur-md m-0 bg-[#d1d5db1f] gradient-border-mask-own-hero rounded-[13.827px]">
                                <h4 className="text-[#fff] text-[16.099px]  w-[100%]  font-[800] leading-[110%] text-center pb-[10px] ">This Has Never
<br />Been Done Before!</h4>
                                <img className="opacity-[0.6] max-h-[24px]" src={icns2} alt="" />
                            </div>
                        </div>
                    </div>
                    
    <div
      className=" pt-[1rem]  xs:pb-[0rem] xs:pt-[2rem]"
    >
      <div className=" space-y-4  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] max-w-[1276px] mx-auto ">
        <div className="2xl:space-y-[45px]  xl:space-y-[45px] lg:space-y-4 xs:space-y-8 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block">
          <div className="">
            <h3 className="text-[46px] xs:text-[28px] xs:leading-[117%] text-center font-[700] text-[#fff]">
              Multiple Times Awarded
            </h3>
          </div>
          <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden flex-wrap gap-x-[24px] pb-[50px]">
            {cardData.map((item) => (
              <div className="gradient-border-mask-build-awarded bg-[#ffffff12] max-w-[293px] w-[100%] min-h-[194px] h-[100%] p-[15px] flex justify-center items-center relative">
                <img
                  src={cardsvg2}
                  className="absolute left-[5%] top-[16%]"
                  alt=""
                />
                <div>
                  <p className="text-[#FFD02F] text-[32px] text-center leading-[34px]">
                    #{" "}
                    <span className="ml-[-10px] text-[63px] font-[400]">1</span>
                  </p>
                  <h3
                    className={`text-[26px] ${item.titleWidth} w-[100%] font-[900] pt-[3px] pb-[8px] text-center text-[#fff] leading-[23.29px]`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-center items-center space-x-2">
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                    <p className="text-[14px] font-[700] text-[#FFD02F] text-center">
                      Dreamcars
                    </p>
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                  </div>
                  <p className="text-[10px] text-[#FFD02F] font-[700] text-center">
                   {item.para}
                  </p>
                </div>
                <img
                  src={cardsvg1}
                  alt=""
                  className="absolute right-[5%] top-[16%]"
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[15px]">
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
            className="mySwiper !px-[0.3rem] xs:!px-[1rem] h-[230px]"
            navigation={true}
            modules={[Navigation, Pagination, Keyboard]}
          >
              {cardData.map((item) => (
                 <SwiperSlide >
                 <div className="gradient-border-mask-build-awarded bg-[#ffffff12] max-w-[293px] mx-auto w-[100%] min-h-[194px] max-h-[194px] h-[100%] p-[15px] flex justify-center items-center relative">
                <img
                  src={cardsvg2}
                  className="absolute left-[5%] top-[16%]"
                  alt=""
                />
                <div>
                  <p className="text-[#FFD02F] text-[32px] text-center leading-[34px]">
                    #{" "}
                    <span className="ml-[-10px] text-[63px] font-[400]">1</span>
                  </p>
                  <h3
                    className={`text-[26px] ${item.titleWidth} w-[100%] font-[900] pt-[3px] pb-[8px] text-center text-[#fff] leading-[23.29px]`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex justify-center items-center space-x-2">
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                    <p className="text-[14px] font-[700] text-[#FFD02F] text-center">
                      Dreamcars
                    </p>
                    <hr className="w-[30px] h-[0px] border-[#FFD02F] border-t" />
                  </div>
                  <p className="text-[10px] text-[#FFD02F] font-[700] text-center">
                   {item.para}
                  </p>
                </div>
                <img
                  src={cardsvg1}
                  alt=""
                  className="absolute right-[5%] top-[16%]"
                />
              </div>
                  </SwiperSlide>
              ))}
          </Swiper>
            </div>
         
    </div>
    </div>
    </div>
    <div className="relative w-full h-auto">
      {isMobile ? (
       <div className="">
       <div className="flex flex-col items-center px-4 backdrop-blur-md bg-[#d1d5db1f] rounded-[30px] gradient-border-mask w-[100%] max-w-[1276px] mx-auto">
          {/* <img
            src={DCBG}
            alt="Mobile Banner"
            className="absolute object-cover w-full h-full "
          /> */}
          <div className="relative z-10 flex flex-col items-center gap-2 mt-8 pb-8">
          <img src={DCtext} alt="dc text" className="flex w-[186.78px] h-[23.72px] justify-center items-center " />
            <p className="text-white text-center font-lato text-[26px] font-[700] leading-[30px] capitalize">
                the official Sponsor Of
            </p>
            <div className="px-1 py-1 mt-6 relative w-full  max-w-[100%] h-[86px] bg-[rgba(0,27,78,0.66)] backdrop-blur-md border border-white rounded-md flex justify-end items-start">
              <img
                src={officalMan2}
                alt="dc text"
                className="max-w-[100px] h-auto absolute top-[-7px] left-0"
              />
              <div className="flex flex-col items-start justify-start">
                <p className="text-white text-center font-lato text-[26px] font-black leading-[25px] uppercase">
                  Ralfs Sirmacis
                </p>
                <p className="text-white font-lato text-[9.5px] font-semibold leading-[18px] capitalize ">
                Winner Of European Rally Championship Events
                </p>
              </div>
            <div className="flex justify-between items-center absolute bottom-[8%]  gap-2">
              <img
                src={worldRealyLogo}
                alt="dc text"
                className="w-[60px] "
              />
              <div className="flex w-[80px]  justify-center items-start text-[#fff] text-[7px] font-semibold">
              Last Race, 11 Jan, 2025
              </div>
            </div>
            </div>
          </div>
        </div>
       </div>
      ) : (
        // Desktop Design
        <div className="relative  w-full h-[530px]">
          {/* <img
            src={DCBG}
            alt="Desktop Banner"
            className="absolute inset-0 object-cover w-full h-full"
          /> */}
         <div className="backdrop-blur-md bg-[#d1d5db1f]  pb-[40px] gradient-border-mask rounded-[30px] w-[100%] max-w-[1276px] mx-auto">
         <div className="relative z-10 flex flex-col items-center gap-1">
            <img
              src={DCtext}
              alt="dc text"
              className="flex w-[623.854px] h-[45px] justify-center items-center mt-8"
            />
            <p className="text-white text-center font-lato text-[43.754px] font-semibold leading-[57.225px] capitalize">
              is the official Sponsor Of
            </p>
            <div className="px-10 py-6 mt-10 relative w-[1070.188px] h-[264.905px] flex-shrink-0 rounded-[31.248px] border-[0.897px] border-white bg-[rgba(0,27,78,0.66)] backdrop-blur-[14.414px] flex flex-col items-end">
              <div className="overflow-hidden">
              <img
                src={officalMan}
                alt="dc text"
                className=" flex-shrink-0 max-w-[400px] absolute left-0 top-[-25px]"
              />
              </div>

              <p className="text-white text-center font-lato text-[99.52px] font-black leading-[97.244px] uppercase">
                Ralfs Sirmacis
              </p>
              <p className="text-white font-lato text-[30px] font-semibold leading-[51.509px] capitalize">
              Winner Of Several European Rally Championship Events
              </p>
            <div className=" z-[99] pt-[20px] flex items-start  ">
          
            <div className="flex  text-[25px] font-lato font-[800]  justify-end items-center text-[#fff]">
            Last Race, 11 Jan, 2025
            </div>
              <div className="ml-5">
            <img
              src={worldRealyLogo}
              alt="dc text"
              className="w-[120.209px] flex-shrink-0 left-[3%]   z-[9]"
            />
            </div>
          </div>
            </div>
          </div>
          {/* <img
            src={DCar}
            alt="dc text"
            className=" w-[1000px] mx-auto flex-shrink-0 mt-[-4rem]"
          /> */}
         </div>
        
        </div>
      )}
    </div>
    <div
    >
      <div id="buynow" className=" space-y-4  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] max-w-[1276px] mx-auto ">
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
                    <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px]  font-[700] text-center text-[#fff]">${totalContribution ? totalContribution.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "1,299,148.38"}
                    </h3>
                    {/* <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px]  font-[700] text-center text-[#fff]">${totalContributions && totalContributions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </h3> */}
                    <div className="flex items-center justify-between space-x-2 ">
                      <h5 className=" text-center font-[Lato] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[13px] xs:text-[12px]  text-[#929292]">{
                            ((totalContribution / 1500000) * 100).toFixed(2)
                        }%  {t("of goal raised")}
                      </h5>
                      {/* <span className="relative">
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
                      </span> */}
                    </div>
                    <div>
                      <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bgcolor h-2.5 rounded-full w-[98%]"style={{
                                                    width: ((totalContribution / 1500000) * 100) + `%`
                                                }}></div>
                                                 {/* <div className="bgcolor h-2.5 rounded-full w-[98%]"style={{
                                                    width: '100%'
                                                }}></div> */}
                      </div>
                      <p className="text-end text-[12px] pt-[3px]  text-[#929292]">
                        
                      $1,500,000
                      </p>
                    </div>
                    <div>
                      <h5 className="font-[Lato] text-center text-[16px] xs:text-[16px] font-[500] text-white">
                      {totalParticipants ? totalParticipants : "1861"} {t("Contributions")}
                      </h5>
                     
                      {/* <h5 className="font-[Lato] text-center text-[15px] xs:text-[14px]  font-[500] space-x-1 text-[#929292]">
                      Launching Price = $0.03
                      </h5> */}
                    </div>
                  </div>
                  <div className="bg-[#3F3F3F] rounded-b-[10px] px-[50px] pt-4 pb-[30px] xs:pb-5 sm:pb-5 md:pb-8  xs:px-[15px] sm:px-14 md:px-10 ">
                    <div className="flex justify-between"></div>
                    <div className="py-1 space-y-3 xs:space-y-3">
                      
                    {userAddress ?
                      <div className="flex backdrop-blur-md bg-[#ffffff40] border-r border-t rounded-[60px]  w-[100%] mx-auto py-[5px]  items-center justify-center">
                          <p className="text-[14px] text-[#fff] text-center font-[700] ">
                              You Own = {finalUserTokens ? finalUserTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0"} DCARS <br></br><span className="underline text-[10px]" onClick={(e) => {
                                  handleClose(e)
                              }}>More Info</span>
                          </p>
                      </div>
                      : ""
                  }
                      <div className="flex backdrop-blur-md bg-[#ffffff40] border-r border-t rounded-[60px]  w-[100%] mx-auto  pb-[10px] pt-[8px] items-center justify-center">
                        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] leading-[100%] text-[#fff] text-center font-[700]">
                        Presale Price = <span className="text-[#0c2f71]">$0.013 </span> <span className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[16px] leading-[70%]">|</span> Launch Price = <span className="text-[#0c2f71]">$0.03</span> 
                            {/* <span className="text-[#19D548] font-[700]">
                              (+500%)
                            </span> */}
                        </p>
                      </div>
                       <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
                  {tokenSelect.map((data, index) => (
                    <TokenSelectDropdown
                      key={index}
                      tokens={data}
                      onChange={(token) =>
                        console.log(`Dropdown ${index + 1}:`, token)
                      }
                    />
                  ))}
                </div>
                       {/* <div className="grid grid-cols-3 gap-3">
                        {buttons.map((button) => (
                          <button
                            key={button.id}
                            onClick={() => handleClickButton(button.id)}
                            className={`flex items-center xs:h-[40px] sm:h-[40px] h-[48px] w-[100%] justify-center  xs:text-[14px] rounded-[14px] xs:py-1 py-[8px] backdrop-blur transition-all duration-300 ${
                              activeButton === button.id
                                ? "bg-white text-black shadow-inner"
                                : "bg-[#ffffff17] text-white"
                            }`}
                          >
                            <div className="flex flex-col items-center justify-center">
                              {
                                 button.imgSrc &&
                                 <img
                                src={button.imgSrc}
                                className="h-[17px]"
                                alt={button.label}
                              />
                              }
                              <p className="text-[14px] xs:text-[10px] font-[Lato] font-[400] mt-[2px] w-[30px]">
                                {button.label}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div> */}
                      {/* <div className="2xl:flex justify-between xl:flex lg:flex md:flex flex sm:flex 2xl:space-x-[11px] xl:space-x-[11px] lg:space-x-[11px] md:space-x-[11px] sm:space-x-0 space-x-1">
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
                      </div> */}
                      <div className="flex relative z-[9]">
                        <div className="w-[100%] space-y-[5px]">
                          <label
                            htmlFor=""
                            className="text-[#D0D0D0] font-[Lato] text-[16px] xs:text-[14px]"
                          >
                                                        Amount in {tokenChoice} you pay
                          </label>
                          <div className="flex justify-between bg-[#fff] rounded-[6px]">
                            <input
                              type="text"
                              className="bg-[#fff] w-[80%] p-2 rounded-l-[6px] text-[#000] text-[20px] h-[44px] font-[Lato] w-[100%] outline-none rounded-l "
                                  placeholder="100" value={userAmount ? userAmount : ""} onChange={(e) => {
                                      handleUserInput(e)
                                  }}
                            />
                            <div className="relative z-[9] inline-block text-left">
                              <button
                                onClick={handleButtonClick}
                                className="h-[44px] flex text-[#fff] text-[12px] font-[400] items-center justify-between p-[7px] !pr-[10px] 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[42px] border rounded-r-[6px] bg-[#D1D5DB]"
                              >
                                <div className="flex items-center space-x-[8px]">
                                  {
                                      selectedOption.image &&
                                    <img
                                    src={selectedOption.image}
                                    alt={selectedOption.label}
                                    className="max-h-[25px] min-h-[22px]"
                                  />
                                  }
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
                                        {
                                          option.image &&
                                          <img
                                          src={option.image}
                                          alt={option.label}
                                          className="max-h-[30px] min-h-[29px]"
                                        />
                                        }
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
                            <a href={"#membership"} className="" >
                              <span className="text-[#FFD02F] font-bold underline">
                                  {userUSD / currentDcarsPrice >= 1000 && userUSD / currentDcarsPrice < 5000 ? "Mercedes NFT" :
                                      userUSD / currentDcarsPrice >= 5000 && userUSD / currentDcarsPrice < 10000 ? "Porsche NFT" :
                                          userUSD / currentDcarsPrice >= 10000 && userUSD / currentDcarsPrice < 25000 ? "Bentley NFT" :
                                              userUSD / currentDcarsPrice >= 21000 && userUSD / currentDcarsPrice < 100000 ? "Ferrari NFT" :
                                                  userUSD / currentDcarsPrice >= 100000 ? "Lamborghini NFT" : ""
                                  }
                              </span>
                          </a>
                            </span>
                          </label>
                          <div className="flex items-center justify-between bg-[#fff] rounded-[6px]">
                            <input
                              type="text"
                              className="text-[#000] p-2 text-[20px] h-[44px] bg-[#fff] font-[Lato] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-[70%] outline-none rounded-l-[6px] "
                              placeholder="58.823" value={userUSD ? userUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ""} onChange={(e) => {
                                  handleDcarsInput(e)
                              }}
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
                        
                      <ConnectButton.Custom>
                            {({
                                account,
                                chain,
                                authenticationStatus,
                                mounted,
                            }) => {
                                const ready = mounted && authenticationStatus !== 'loading';
                                const connected =
                                    ready &&
                                    account &&
                                    chain &&
                                    (!authenticationStatus ||
                                        authenticationStatus === 'authenticated');
                                if (chain)
                                    setCurrentChain(chain.name)
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
                                                <button className='bgcolor ftbutton2 font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[18px]'
                                                    onClick={openConnectModal} > {t('ProductDetails.card-body-walletBtn')}</button>
                                                );
                                            }

                                            if (chain.unsupported) {
                                                return (
                                                    <button onClick={openChainModal} type="button">
                                                        Wrong network
                                                    </button>
                                                );
                                            }

                                            setUserAddress(account.address)
                                            return (
                                                <div>
                                                    <button
                                                        className="bgcolor font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[16px]"
                                                        type="button" onClick={()=>handleBuyToken()}>
                                                        {buynowbtn}
                                                    </button>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>
                      </div>
                      {show && (
                        <div className="flex relative z-[1]">
                          <input
                            type="text"
                            className="h-[44px] w-[100%] px-2 outline-none rounded-l"
                            placeholder="Bonus code" onChange={(e) => {
                                setCoupon(e.target.value.toLowerCase())
                            }}
                          />
                          <button className="flex h-[44px] items-center text-white rounded-r space-y-3 px-5   bg-black"  onClick={handleCoupon}>
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
                    
                    {!userAddress ?
                      <button
                          onClick={openConnectModal}
                      className="cursor-pointer border border-[#DDD] text-[14px] xs:text-[11px] font-[500] font-[Lato] leading-[21px] flex w-[100%] max-w-[356.62px] h-[40px] items-center justify-center text-white  rounded-[10px] bg-[#323232]"
                      >
                          {" "}
                          <img
                        className="pr-[10px] w-[25px] h-[25px]"
                              src={refe}
                              alt=""
                          />
                          {t("ProductDetails.card-body-referralBtn")}
                      </button> :

                      <button
                          onClick={handleCopy}
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
                      
                      }
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
            </div>
          </div>
      </div>
      
      {/* Wallet Dialog */}
      {showWalletDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Send {userAmount} {selectedOption.label} to this Wallet Address to get {userUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DCARS</h3>
                <button
                  onClick={() => setShowWalletDialog(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="border rounded-md p-3 bg-gray-50 flex justify-between items-center">
                <div className="truncate flex-1 pr-2">
                  {walletAddress}
                </div>
                <CopyToClipboard
                  text={walletAddress}
                  onCopy={handleCopy}
                >
                  <button className="bg-[#E5AE00] text-white px-4 py-2 rounded hover:bg-[#c29600] transition-colors">
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                </CopyToClipboard>
              </div>

              <p className="text-sm text-gray-600">
                This is your connected wallet address. Please verify it before proceeding with the purchase.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}
export default ProductDetailsSection;

