import { useTranslation } from "react-i18next";
import { useApiState } from "../presale-gg/stores/api.store";
import { buyWithCrypto, formatNumber, formatPrecision, parseNum } from "../presale-gg/util";
import { useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { refetchUserStakeData, useUserState } from "../presale-gg/stores/user.store";
import TokenDropdownGrid from "./TokenDropdownGrid";
import { ConnectButton, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import toast from "react-hot-toast";

import Loinp from "../assects/images/dtokens.png";
import que from "../assects/svgs/questionIcon.svg";
import refe from "../assects/svgs/referralIcon.svg";
import TokenSelectDropdown from "./TokenDropdown";
import { LAUNCH_PRICE } from "../constants";
import { BonusCodeInput, ReferralCodeInput } from "./CodeInput";
import NowpaymentsModal from "./NowPaymentsModal";
import WalletTransferModal from "./WalletTransferModal";
import { baseRankData } from "../presale-gg/web3";
import ContactModal from "./ContactModal";

/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("../presale-gg/api/api.types").API.Transaction} Transaction
 */

const BuyWidget = ({handleClose, others}) => {
  const { t, i18n } = useTranslation();

  const apiData = useApiState()
  const userData = useUserState()
  const account = useAccount()

  /** @type {[PaymentToken | null, ((newToken: PaymentToken | null) => void)]} */
  const [selectedToken, setSelectedToken] = useState(null);
  const stageFrac = useMemo(() => parseNum(apiData.stage?.cumulative_usd_raised) / parseNum(apiData.stage?.next_stage_target_usd || 1))

  const [paymentAmountStr, setPaymentAmountStr] = useState("1")
  const [receiveAmountStr, setReceiveAmountStr] = useState("0")
  const payUsd = parseNum(paymentAmountStr) * parseNum(selectedToken?.price)

  const { openChainModal } = useChainModal();
  const [visibleCode, setVisibleCode] = useState(null)

  useEffect(() => {
    const params = new URL(window.location.href).searchParams
    if (params.has("referral_code")) setVisibleCode("referral")
    else if (params.has("bonus_code")) setVisibleCode("bonus")
  }, [])

  const partialNumRegexp = /^(\d*|(\d\.?\d*)?)$/

  useEffect(() => {
    if (selectedToken !== null || !apiData.paymentTokens?.[0]) return
    setSelectedToken(apiData.paymentTokens.find((token) => token.symbol.toUpperCase() === "ETH") ?? apiData.paymentTokens[0])
  }, [apiData.paymentTokens])

  useEffect(() => {
    if (!selectedToken) return
    setReceiveAmountStr(formatPrecision(parseNum(selectedToken.price) * parseNum(paymentAmountStr) / parseNum(apiData.stage?.token_price ?? 1), 0, 3))
  }, [selectedToken])

  /** @param {InputEvent} e */
  const handlePaymentAmountChange = (e) => {
    let val = e.currentTarget.value
    if (!partialNumRegexp.test(val)) {
      val = paymentAmountStr
    }
    e.currentTarget.value = val
    setPaymentAmountStr(val)
    setReceiveAmountStr(formatPrecision(parseNum(val) * parseNum(selectedToken?.price) / parseNum(apiData.stage?.token_price || 1), 0, 3))
  }

  /** @param {InputEvent} e */
  const handleReceiveAmountChange = (e) => {
    let val = e.currentTarget.value
    if (!partialNumRegexp.test(val)) {
      val = receiveAmountStr
    }
    e.currentTarget.value = val
    setReceiveAmountStr(val)
    setPaymentAmountStr(formatPrecision(parseNum(val) * parseNum(apiData.stage?.token_price) / parseNum(selectedToken?.price || 1), 0, 6))
  }

  const handleCopyReferralCode = () => {
      navigator.clipboard.writeText("https://dreamcars.co/")
          .then(() => {
              let link = window.location.origin + "/?referral_code=" + userData.user?.referral_code
              navigator.clipboard.writeText(link);
              toast.success('Copied!');
          })
          .catch((error) => {
              console.error('Error copying:', error);
              toast.error('Failed to copy.');
          });
  };

  const [transactionLoading, setTransactionLoading] = useState(false)
  /** @type {[Transaction, (newTransaction: Transaction) => void]} */
  const [createdTransaction, setCreatedTransaction] = useState(null)
  const [transactionModalOpen, setTransactionModalOpen] = useState(false)

  /** 
   * @typedef {import("./WalletTransferModal/WalletTransferModal").BaseWalletTransferModalProps["state"]} State
   * @type {[State | null, (newState: State | null) => void]}
   * */
  const [buyState, setBuyState] = useState(null)
  /** @type {[TransactionHistoryItem, (newItem: TransactionHistoryItem) => void]} */
  const [boughtTransaction, setBoughtTransaction] = useState(null)
  /** @type {[string | null, (val: string | null) => void]} */
  const [boughtTransactionHash, setBoughtTransactionHash] = useState(null)
  const [boughtPaymentToken, setBoughtPaymentToken] = useState(null)
  const [boughtPaymentAmountStr, setBoughtPaymentAmountStr] = useState(null)
  const [boughtModalOpen, setBoughtModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const buy = async () => {
    if (apiData.presaleEnded) return toast.error('Presale has ended')
    if (!account.address) return toast.error('You must connect your wallet first')
    if (transactionLoading) return
    if (!selectedToken) return
    setTransactionLoading(true)
    try {
      setBuyState(null)
      setBoughtTransaction(null)
      setBoughtTransactionHash(null)
      setBoughtPaymentToken(selectedToken)
      setBoughtPaymentAmountStr(paymentAmountStr)
      setBoughtModalOpen(true)
      setTransactionLoading(true)
      const res = await buyWithCrypto({
        paymentToken: selectedToken,
        paymentTokenNum: paymentAmountStr,
        walletAddress: account.address,
        onStateChanged: (state) => {
          setBuyState(state.type)
          if (state.type === 'confirming') {
            setBoughtTransactionHash(state.transactionHash)
          } else if (state.type === 'finished') setBoughtTransaction(state.transaction)
          if (state.type !== 'sending') {
            setTransactionLoading(false)
          }
        }
      })
      if (!res) return setTransactionLoading(false)
      if (res.type === 'created') {
        setCreatedTransaction(res.transaction)
        setTimeout(() => {
          setTransactionModalOpen(true)
        }, 50)
        setTransactionLoading(false)
      } else {
        setBoughtModalOpen(true)
      }
      refetchUserStakeData()
    } catch (err) {
      console.error(err)
      setTransactionLoading(false)
    }
  }

  const { openConnectModal } = useConnectModal()
  const nftWillGet = useMemo(() => {
    for (const [rank, data] of Object.entries(baseRankData).reverse()) {
      if (payUsd >= data.totalUsdNeeded) return rank
    }
    return null
  }, [payUsd])

  return (
    <>
        <div className="bgposter !bg-[#232323] max-w-[733px] w-[100%] mx-auto ">
          <div className="bg-[#212121]  rounded-t-[13px] max-w-[571px] w-[100%] mx-auto xs:px-[15px]  sm:px-16 md:px-16 py-6 xs:pt-4 sm:pt-5 md:pt-8 ">
            <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px]  font-[700] text-center text-[#fff]">${parseNum(apiData.stage?.cumulative_usd_raised).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h3>
            <div className="flex items-center justify-between space-x-2 ">
              <h5 className=" text-center font-[Lato] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[13px] xs:text-[12px]  text-[#929292]">{
                    (stageFrac * 100).toFixed(2)
                }%  {t("of goal raised")}
              </h5>
            </div>
            <div>
              <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                <div className="bgcolor h-2.5 rounded-full w-[98%]"style={{
                                            width: `${stageFrac * 100}%`
                                        }}></div>
                                          {/* <div className="bgcolor h-2.5 rounded-full w-[98%]"style={{
                                            width: '100%'
                                        }}></div> */}
              </div>
              <p className="text-end text-[12px] pt-[3px]  text-[#929292]">
                ${parseNum(apiData.stage?.next_stage_target_usd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <h5 className="font-[Lato] text-center text-[16px] xs:text-[16px] font-[500] text-white">
                {apiData.info?.transactions} {t("Contributions")}
              </h5>
            </div>
          </div>
          <div className="bg-[#3F3F3F] rounded-b-[10px] px-[50px] pt-2 pb-[30px] xs:pb-5 sm:pb-5 md:pb-8  xs:px-[15px] sm:px-14 md:px-10 ">
            <div className="flex justify-between"></div>
            <div className="py-1 space-y-3 xs:space-y-3">
              
            {account.address ?
              <div className="flex backdrop-blur-md bg-[#ffffff40] border-r border-t rounded-[60px]  w-[100%] mx-auto py-[5px]  items-center justify-center">
                  <p className="text-[14px] text-[#fff] text-center font-[700] ">
                      You Own = {parseNum(userData.user?.total_tokens).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DCARS <br></br><span className="underline text-[10px]" onClick={(e) => {
                          handleClose(e)
                      }}>More Info</span>
                  </p>
              </div>
              : ""
          }
              <div className="flex backdrop-blur-md bg-[#ffffff40] border-r border-t rounded-[60px]  w-[100%] mx-auto  pb-[10px] pt-[8px] items-center justify-center">
                <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] leading-[100%] text-[#fff] text-center font-[700]">
                Presale Price = <span className="text-[#0c2f71]">${formatNumber(parseNum(apiData.stage?.token_price), 0, 6)} </span> <span className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[16px] leading-[70%]">|</span> Launch Price = <span className="text-[#0c2f71]">${formatNumber(LAUNCH_PRICE, 0, 6)}</span> 
                    {/* <span className="text-[#19D548] font-[700]">
                      (+500%)
                    </span> */}
                </p>
              </div>
              <TokenDropdownGrid
                selectedToken={selectedToken}
                onTokenChange={setSelectedToken}
              />
              <div className="flex relative z-[9]">
                <div className="w-[100%] space-y-[5px]">
                  <label
                    htmlFor=""
                    className="text-[#D0D0D0] font-[Lato] text-[16px] xs:text-[14px]"
                  >
                      Amount in {selectedToken?.symbol.toUpperCase()} you pay
                  </label>
                  <div className="flex justify-between bg-[#fff] rounded-[6px]">
                    <input
                      type="text"
                      className="bg-[#fff] w-[80%] p-2 rounded-l-[6px] text-[#000] text-[20px] h-[44px] font-[Lato] w-[100%] outline-none rounded-l "
                          placeholder="100" value={paymentAmountStr} onChange={(e) => {
                              handlePaymentAmountChange(e)
                          }}
                    />
                    <TokenSelectDropdown
                      onChange={setSelectedToken}
                      selectedToken={selectedToken}
                      selected={false}
                      tokens={apiData.paymentTokens ?? []}
                      variant="contrast"
                      className="flex flex-shrink-0 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[44px] rounded-r-[6px] bg-[#D1D5DB]"
                    />
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
                          {nftWillGet && `${nftWillGet} NFT`}
                      </span>
                  </a>
                    </span>
                  </label>
                  <div className="flex items-center justify-between bg-[#fff] rounded-[6px]">
                    <input
                      type="text"
                      className="text-[#000] p-2 text-[20px] h-[44px] bg-[#fff] font-[Lato] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-[70%] outline-none rounded-l-[6px] "
                      placeholder="58.823" value={receiveAmountStr} onChange={(e) => {
                          handleReceiveAmountChange(e)
                      }}
                    />
                    <button className="flex text-[16px] xs:text-[12px] font-[700] items-center px-2 space-x-[8px] 2xl:w-[130px] xl:w-[130px] lg:w-[130px] md:w-[130px] sm:w-[130px] w-[105px] h-[44px] text-[#000] rounded-r-[6px] bg-[#D1D5DB]">
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

                                    return (
                                        <div>
                                            <button
                                                className="bgcolor font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[16px]"
                                                type="button" onClick={() => {
                                                  if (account.isConnected) buy()
                                                }}>
                                                {apiData.presaleEnded ? "Presale Ended" : "BUY $DCARS"}
                                            </button>
                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>
              </div>
              {visibleCode === "bonus" && (
                <BonusCodeInput />
              )}
              {visibleCode === "referral" && (
                <ReferralCodeInput />
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[733px] pb-[1rem] w-[100%] mx-auto">
          <div className=" flex justify-between relative z-[1] space-x-[15px] xs:pt-[0.5rem]">
            <a
              href="#how-to-buy"
              onClick={(event) => {
                event.preventDefault();
            
                const targetId = event.target.getAttribute("href").substring(1);
                const offset = parseInt(event.target.getAttribute("data-offset"), 10);
            
                const targetElement = document.getElementById(targetId);
            
                window.scrollTo({
                  top: targetElement.offsetTop - offset,
                  behavior: "smooth",
                });
              }}
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
            
            {!account.isConnected ?
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
                  onClick={handleCopyReferralCode}
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
        
        <div className="flex justify-center gap-[2rem] pb-[18px] relative z-[1]">
          <p
            onClick={() => setVisibleCode("bonus")}
            className="cursor-pointer text-[#DDD] underline text-center  text-[16px] font-[500] leading-[7px]"
          >
            {t("ProductDetails.card-body-Bonus-code")}
          </p>
          <p
            onClick={() => setVisibleCode("referral")}
            className="cursor-pointer text-[#DDD] underline text-center  text-[16px] font-[500] leading-[7px]"
          >
            Referral Code
          </p>
        </div>
          
      {createdTransaction && (
        <NowpaymentsModal
          open={transactionModalOpen}
          onClose={() => {
            setTransactionModalOpen(false)
            setContactModalOpen(true)
          }}
          transaction={createdTransaction}
        />
      )}
      {boughtPaymentAmountStr !== null && boughtPaymentToken !== null && buyState !== null && (
        <WalletTransferModal
          open={boughtModalOpen}
          onClose={() => {
            setBoughtModalOpen(false)
            setContactModalOpen(true)
          }}
          payCurrency={boughtPaymentToken}
          payAmount={boughtPaymentAmountStr}
          state={buyState}
          transactionHash={boughtTransactionHash}
          transaction={boughtTransaction}
        />
      )}
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  )
}

export default BuyWidget