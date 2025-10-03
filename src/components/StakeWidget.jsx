import { useState } from "react"
import { useApiState, userStakeTokens, userUnstakeTokens, useUserState } from "../presale-gg/stores"
import { formatDollar, formatLargeNumber, parseNum } from "../presale-gg/util"
import toast from "react-hot-toast"
import { api } from "../presale-gg/api"
import clsx from "clsx"

export const StakeWidget = () => {
  const [tokenAmount, setTokenAmount] = useState("0")
  const userData = useUserState()
  const apiData = useApiState()

  const [stakeLoading, setStakeLoading] = useState(false)
  const [unstakeLoading, setUnstakeLoading] = useState(false)

  const partialNumRegexp = /\d*|(\d\.?\d*)?/

  const stake = async () => {
    if (stakeLoading || unstakeLoading) return
    setStakeLoading(true)
    await toast.promise(userStakeTokens(tokenAmount), {
      loading: "Staking tokens",
      error: (err) => api.getApiErrorMessage(err, "Error staking tokens"),
      success: "Successfully staked tokens"
    }).catch(() => {})
    setStakeLoading(false)
  }

  const unstake = async () => {
    if (stakeLoading || unstakeLoading) return
    setUnstakeLoading(true)
    await toast.promise(userUnstakeTokens(tokenAmount), {
      loading: "Unstaking tokens",
      error: (err) => api.getApiErrorMessage(err, "Error unstaking tokens"),
      success: "Successfully unstaked tokens"
    }).catch(() => {})
    setUnstakeLoading(false)
  }

  const canStake = !!userData.rankData?.current_rank

  return (
    <div className="relative !bg-[#3F3F3F] max-w-[733px] w-[100%] mx-auto text-[#fff] rounded-[10px] p-[50px] <xs:p-[15px] sm:p-14 md:p-10 flex flex-col gap-4">
      {!canStake && (
        <div className="p-4 flex items-center justify-center h-[20rem]">
          <p className="text-[20px] text-center <xs:text-[16px]">
            You must have spent at least $1,000 to access staking
            <br />
            You have spent {formatDollar(1000 - parseNum(userData.rankData?.usd_to_next_rank))}
          </p>
        </div>
      )}
      {canStake && <>
        <div className="grid grid-cols-2 gap-2 <sm:flex <sm:flex-col">
          {[
            {label: "Currently Staked", value: `${formatLargeNumber(userData.userStakeData?.total_staked)} $DCARS`},
            {label: "Daily Earned", value: `${formatLargeNumber(userData.userStakeData?.daily_interest)} $DCARS`},
            {label: "Earned Tokens", value: `${formatLargeNumber(userData.userStakeData?.total_earnings)} $DCARS`},
            {label: "Earned USD", value: `${formatLargeNumber(userData.userStakeData?.total_earnings) * parseNum(apiData.stage?.token_price)} $DCARS`},
          ].map((val, i) => (
            <div className={clsx("flex items-center justify-between p-4 bg-[rgba(255,255,255,0.1)] rounded last:odd:col-span-2 <sm:p-3 <sm:text-[14px]")}>
              <p>{val.label}</p>
              <p className="font-bold">{val.value}</p>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-[#D0D0D0] font-[Lato] text-[16px] <xs:text-[14px]"
          >
              Token Amount
          </label>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between bg-[#fff] rounded-[6px]">
              <input
                type="text"
                className="bg-[#fff] w-[80%] p-2 rounded-l-[6px] text-[#000] text-[20px] h-[44px] font-[Lato] w-[100%] outline-none rounded-l "
                placeholder="Token amount"
                value={tokenAmount}
                onFocus={(e) => {
                  if (e.currentTarget.value === "0") {
                    e.currentTarget.value = ""
                    setTokenAmount("")
                  }
                }}
                onBlur={(e) => {
                  if (e.currentTarget.value === "") {
                    e.currentTarget.value = "0"
                    setTokenAmount("0")
                  }
                }}
                onChange={(e) => {
                  let val = e.currentTarget.value
                  if (!partialNumRegexp.test(val)) {
                    val = tokenAmount
                  }
                  e.currentTarget.value = val
                  setTokenAmount(val)
                }}
              />
            </div>
            <div className="flex justify-between gap-2">
              <button
                className="bgcolor text-[12px] px-2 py-1 rounded text-[#000] font-[700] leading-[1.2] <xs:text-[10px]"
                onClick={() => setTokenAmount(userData.userStakeData?.total_can_stake ?? '0')}
              >
                Max Stake ({formatLargeNumber(userData.userStakeData?.total_can_stake)} $DCARS)
              </button>
              <button
                className="bgcolor text-[12px] px-2 py-1 rounded text-[#000] font-[700] leading-[1.2] <xs:text-[10px]"
                onClick={() => setTokenAmount(userData.userStakeData?.total_staked ?? '0')}
              >
                Max Unstake ({formatLargeNumber(userData.userStakeData?.total_staked)} $DCARS)
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 <xs:flex-col <xs:gap-2">
          <button
            className="bgcolor font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[16px] text-[#000]"
            onClick={stake}
          >
            {stakeLoading ? "Staking..." : "Stake"}
          </button>
          <button
            className="bgcolor font-[700] font-[Lato] w-[100%] h-[42px] rounded-[5px] text-[16px] text-[#000]"
            onClick={unstake}
          >
            {unstakeLoading ? "Unstaking..." : "Unstake"}
          </button>
        </div>
      </>}
    </div>
  )
}