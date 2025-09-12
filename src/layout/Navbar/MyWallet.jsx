import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { toast } from "react-toastify";

import {  useAccount } from 'wagmi'
import {
    useDisconnect,
    
} from 'wagmi'

import { bsc } from 'wagmi/chains'

import Ferrari from "../../assects/images/rng (5).png";
import Mercedes from "../../assects/images/rng (2).png";
import Porsche from "../../assects/images/rng (3).png";
import Bentley from "../../assects/images/rng (1).png";
import Lamborghini from "../../assects/images/rng (4).png";
import { useReadContract, useSwitchChain, useWriteContract } from "wagmi";

const MyWallet = ({ accounts }) => {
    const { t, i18n } = useTranslation()

    const { chains, switchChain } = useSwitchChain()

    const { data: userContribution } = useReadContract({
        address: '0x883178a1571094a6656cca084f3ed5a3192abaf3',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserContribiton",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'getUserContribiton',
        chainId: 56,
        args: [accounts],
    })

    const { data: getClaimTokensData, write: getClaimTokens } = useWriteContract()


    const { data: userClaimed } = useReadContract({
        address: '0x316ff8185a7356dfa00309f88d203c87a20f64c0',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userClaimedUSDT",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'userClaimedUSDT',
        chainId: 56,
        args: [accounts],
    })

    const { data: userClaimedETH } = useReadContract({
        address: '0x3F5C9557dB581Fb853AC541C171766c3E77C3e06',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userClaimedUSDT",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'userClaimedUSDT',
        chainId: 1,
        args: [accounts],
    })

    const { data: userTokensETH, isSuccess: successUserTokensETH } = useReadContract({
        address: '0x076b20436b7cf3d461b5b2260a9eeee1967b1dba',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'getUserTokens',
        chainId: 1,
        args: [accounts],
    })

    const { data: userBonusETH, isSuccess: successUserBonusTokensETH } = useReadContract({
        address: '0x076b20436b7cf3d461b5b2260a9eeee1967b1dba',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserBonusTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'getUserBonusTokens',
        chainId: 1,
        args: [accounts],
    })
    const { data: userContributionETH } = useReadContract({
        address: '0x076b20436b7cf3d461b5b2260a9eeee1967b1dba',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserContribiton",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'getUserContribiton',
        chainId: 1,
        args: [accounts],
    })

    const { data: getUSDTData, write: getUSDT } = useWriteContract({
        address: '0x316ff8185a7356dfa00309f88d203c87a20f64c0',
        abi: [{
            "inputs": [],
            "name": "getUSDT",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }],
        functionName: 'getUSDT',
        chainId: bsc.id
    })

    const { data: getUSDTDataETH, write: getUSDTETH } = useWriteContract()

    const { data: countAllStakingProfit, refetch: refreshContributorsETH } = useReadContract({
        address: '0x316ff8185a7356dfa00309f88d203c87a20f64c0',
        abi: [{
            "inputs": [],
            "name": "countAllStakingProfit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'countAllStakingProfit',
        chainId: 56
    })

    const { data: cdaysBNB, refetch: refetchcdays } = useReadContract({
        address: '0x316ff8185a7356dfa00309f88d203c87a20f64c0',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "userClaimTimes",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }],
        functionName: 'userClaimTimes',
        chainId: 56,
        args: [accounts],
    })

    const { data: cdaysETH } = useReadContract({
        address: '0x3F5C9557dB581Fb853AC541C171766c3E77C3e06',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "userClaimTimes",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }],
        functionName: 'userClaimTimes',
        chainId: 1,
        args: [accounts],
    })
    const handleUSDT = () => {
        if (chains?.id === 56) {
            getUSDT?.()
        }
        if (chains?.id === 1) {
            getUSDTETH({
                address: '0x3F5C9557dB581Fb853AC541C171766c3E77C3e06',
                abi: [{
                    "inputs": [],
                    "name": "getUSDT",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }],
                functionName: 'getUSDT',
                chainId: 1
            })
        }
    }
    const handleClaim = () => {
        if (chains?.id === 56) {
            getClaimTokens({
                address: '0x5d8b4539dff12d6b746c6e0622d88104e3593825',
                abi: [{
                    "inputs": [],
                    "name": "claimTokens",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }],
                functionName: 'claimTokens',
                chainId: bsc.id
            })
        }
    }
    const [totalProfit, setTotalProfit] = useState(0);
    const [usdtProfit, setUsdtProfit] = useState(0);
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

    const [nft, setNFT] = useState(0)
    const [nftData, setNFTData] = useState("No NFT")
    const [nextNFT, setNextNFT] = useState("Bentley")
    const [nextNftImage, setNextNftImage] = useState(Porsche)
    const [nextNftGoal, setNextNftGoal] = useState(1000)
    const [nftImage, setNFTImage] = useState(Mercedes)

    function truncateToDecimals(num, dec = 2) {
        const calcDec = 10 ** dec
        return Math.trunc(num * calcDec) / calcDec;
    }

    const [finalUserTokens, setFinalUserTokens] = useState(0)
    const [finalBonusTokens, setFinalBonusTokens] = useState(0)
    const [finalUserContribution, setFinalUserContribution] = useState(0)

    const { data: userTokens, isSuccess: successUserTokens } = useReadContract({
        address: '0x883178a1571094a6656cca084f3ed5a3192abaf3',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'getUserTokens',
        chainId: 56,
        args: [accounts],
    })


    const { data: userBonus, isSuccess: successUserBonusTokens } = useReadContract({
        address: '0x883178a1571094a6656cca084f3ed5a3192abaf3',
        abi: [{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserBonusTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        functionName: 'getUserBonusTokens',
        chainId: 56,
        args: [accounts],
    })


    const handleRef = () => {
        toast.success("Copied Referral Link")
        let link = window.location.origin + "/?ref=" + accounts + "&lang=" + i18n.language
        navigator.clipboard.writeText(link);

    }
    useEffect(() => {
        setFinalUserTokens(Number(userTokens) / 1e18 + Number(userTokensETH) / 1e18)

        setFinalBonusTokens(Number(userBonusETH) / 1e18 + Number(userBonus) / 1e18)
        setFinalUserContribution(Number(userContribution) / 1e6 + Number(userContributionETH) / 1e6)

    }, [successUserBonusTokens, successUserTokens, successUserBonusTokensETH, successUserTokensETH])

    useEffect(() => {
        if (finalUserContribution >= 1000) {
            setNFT(0.1)
            setNFTData("Mercedes")
            setNFTImage(Mercedes)
            setNextNFT("Porsche")
            setNextNftGoal(5000)
            setNextNftImage(Porsche)
        }
        if (finalUserContribution >= 5000) {
            setNFT(0.15)
            setNFTData("Porsche")
            setNFTImage(Porsche)
            setNextNFT("Bentley")
            setNextNftGoal(10000)
            setNextNftImage(Bentley)
        }
        if (finalUserContribution >= 10000) {
            setNFT(0.25)
            setNFTData("Bentley")
            setNFTImage(Bentley)
            setNextNFT("Ferrari")
            setNextNftGoal(25000)
            setNextNftImage(Ferrari)
        }
        if (finalUserContribution >= 25000) {
            setNFT(0.4)
            setNFTData("Ferrari")
            setNFTImage(Ferrari)
            setNextNftGoal(100000)
            setNextNFT("Lamborghini")
            setNextNftImage(Lamborghini)
        }
        if (finalUserContribution >= 100000) {
            setNFT(0.6)
            setNFTData("Lamborghini")
            setNFTImage(Lamborghini)
        }

    }, [finalUserContribution])

    return (
        <>

            <div
                style={{
                    borderRadius: "10px",
                    display: "block"
                }}>
                <div
                    style={{
                        height: "90px",
                        display: "block",
                        border: "4px",
                        borderStyle: "solid",
                        borderColor: "#f9d548",
                        borderRadius: "10px",
                    }}>
                    <div style={{
                        fontWeight: "bold",
                        lineHeight: "2",
                        fontSize: "15px",
                        color: "#fff",
                        border: "2px",
                        borderRadius: "10px",
                        padding: "10px 20px 20px 20px",
                        textAlign: "center"
                    }}>
                        {("Launch Price")}
                        <div>
                            1 DCARS = $0.05
                        </div>
                    </div>
                </div>
                <div style={{
                    fontWeight: "bold",
                    lineHeight: "2",
                    fontSize: "18px",
                    border: "4px",
                    borderStyle: "solid",
                    borderColor: "#f9d548",
                    borderRadius: "10px",
                    padding: "20px",
                    marginTop: "10px",
                    textAlign: "center",
                    height: "100%",
                    // height: "480px",
                    color: "white"
                }}>
                    {`${month[new Date().getMonth()]} ${new Date().getDate()} ,  ${new Date().getFullYear()}`}
                    <div style={{ display: "grid", fontSize: "13px", marginTop: "13px" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "13px", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="/logo.png" alt='logo' width="30px" height="30px" style={{ marginRight: "6px" }} />

                                <span style={{ justifySelf: "center" }}>DCARS</span>
                            </div>
                            <span style={{ justifySelf: "right" }}>{finalUserTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </span>
                        </div>
                    </div>


                    <div style={{ display: "grid", fontSize: "13px", marginTop: "13px" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "13px", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="/dcars.png" alt='logo' width="30px" height="30px" style={{ marginRight: "6px" }} />

                                <span style={{ justifySelf: "center" }}>Bonus</span>
                            </div>
                            <span style={{ justifySelf: "right" }}>{(finalBonusTokens + (finalUserTokens * nft)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </span>
                        </div>
                    </div>

                    <div style={{ display: "grid", fontSize: "13px", marginTop: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "13px", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="/bonus.png" alt='logo' width="30px" height="30px" style={{ marginRight: "6px" }} />

                                <span style={{ justifySelf: "center" }}>{("Staking Rewards")}</span>
                            </div>
                            <span style={{ justifySelf: "right" }}>{(finalUserTokens * (totalProfit)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            {/* 0.875% / Day in DCARS  */}
                        </div>
                    </div>


                    {/* <div style={{ display: "grid", fontSize: "13px", marginTop: "10px" }} onClick={handleClose}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "13px", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src="/USDT.png" alt='logo' width="30px" height="30px" style={{ marginRight: "6px", padding: "3px" }} />

                                <span style={{ justifySelf: "center" }}>{("USDT Rewards")}</span>
                                <img src={dd} alt='logo' width="20px" height="20px" style={{ marginRight: "6px", padding: "3px" }} />
                            </div>

                            {

                                finalUserContribution < 10000 &&
                                0
                                // <span style={{ justifySelf: "right" }}>{(((((finalUserTokens + finalBonusTokens) * (Number(usdtProfit))) * .1 * .05)) - Number(userClaimed)/1e18).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                                // </span>


                            }
                            {
                                finalUserContribution >= 10000 && finalUserContribution <= 24999 &&
                                <span style={{ justifySelf: "right" }}>{((((finalUserTokens + finalBonusTokens) * (Number(usdtProfit))) * .1 * .05)).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                                </span>
                            }

                            {
                                finalUserContribution >= 25000 && finalUserContribution <= 99999 &&
                                <span style={{ justifySelf: "right" }}>{((((finalUserTokens + finalBonusTokens) * (Number(usdtProfit))) * .15 * .05)).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                                </span>
                            }

                            {
                                finalUserContribution >= 100000 &&
                                <span style={{ justifySelf: "right" }}>{((((finalUserTokens + finalBonusTokens) * (Number(usdtProfit))) * .2 * .05)).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                                </span>
                            }
                        </div>
                    </div> */}



                    <div style={{ display: "grid", fontSize: "13px", marginTop: "13px" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "13px", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={nftImage} alt='logo' width="30px" height="30px" style={{ marginRight: "6px" }} />

                                <span style={{ justifySelf: "center" }}>DCARS NFT</span>
                            </div>
                            <span style={{ justifySelf: "right" }}>{nftData} </span>
                        </div>
                    </div>

                    {/* <div
                        style={{
                            height: "95px",
                            display: "block",
                            border: "4px",
                            borderStyle: "solid",
                            borderColor: "#f9d548",
                            borderRadius: "10px",
                            margin: "10px -15px -15px -15px"
                        }}>
                        <div style={{
                            fontWeight: "bold",
                            lineHeight: "2",
                            fontSize: "15px",
                            color: "#fff",
                            border: "2px",
                            borderRadius: "10px",
                            padding: "5px 10px 10px 10px",
                            textAlign: "center"
                        }}>
                            <div>
                                <div style={{ display: "grid", fontSize: "14px" }}>
                                    <div style={{ display: "flex", alignItems: "center", fontSize: "14px", justifyContent: "space-between" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={nextNftImage} alt='logo' width="30px" height="30px" style={{ marginRight: "6px" }} />
                                            <span style={{ justifySelf: "center" }}>{nextNFT} NFT</span>
                                        </div>
                                        <span style={{ justifySelf: "right", color: "#ffffff" }}>${nextNftGoal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                                    </div>
                                </div>
                                <div className="z-1 w-full bg-gray-200 rounded-full h-3.5 mt-2">
                                    {
                                        finalUserContribution / nextNftGoal * 100 >= 100 ?
                                            <div className="bgcolor h-3.5 rounded-full" style={{ width: `100%` }}>
                                            </div>
                                            :

                                            <div className="bgcolor h-3.5 rounded-full" style={{ width: `${finalUserContribution / nextNftGoal * 100}%` }}>
                                            </div>
                                    }
                                </div>

                                {
                                    finalUserContribution / nextNftGoal * 100 >= 100 ?
                                        <span className="relative top-[-24px] text-black font-[500] font-[Poppins] text-[11px]">100%</span>
                                        :

                                        <span className="relative top-[-24px] text-black font-[500] font-[Poppins] text-[11px]">{(finalUserContribution / nextNftGoal * 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</span>
                                }
                            </div>

                            {
                                finalUserContribution / nextNftGoal * 100 < 100 &&
                                <span style={{}} className="relative top-[-29px] font-[800] font-[Poppins] text-[14px]">${(nextNftGoal - finalUserContribution).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} USD left until {nextNFT} Level</span>
                            }
                        </div>

                    </div> */}

                    <div>
                        <button
                            className="bgcolor w-[100%] py-1  mt-2   text-[15px] rounded xs:text-[14px] font-[600] font-[Poppins] text-black"
                            type="button" onClick={handleRef}>
                            {("Copy Referral Link")}
                        </button>
                    </div>

                    <div>
                        <button
                            className="bgcolor w-[100%] py-1 mt-2 text-[15px] rounded xs:text-[14px] font-[600] font-[Poppins] text-black"
                            type="button"
                            onClick={() => disconnect.disconnect()}>
                            {("Disconnect")}
                        </button>
                    </div>


                </div>

            </div>

        </>
    )
}

export default MyWallet