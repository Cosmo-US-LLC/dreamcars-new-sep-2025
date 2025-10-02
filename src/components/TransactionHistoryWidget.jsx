import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import Spinner from "./Spinner"
import { capitalize, formatLargeNumber, parseNum } from "../presale-gg/util"
import { tokenNameMap } from "../presale-gg/assets/img/tokens"
import logoImg from "../assects/images/dtokens.png"
import { api } from "../presale-gg/api"

/**
 * @typedef {import("../presale-gg/api/api.types").API.TransactionHistoryItemV2} TransactionHistoryItemV2 
 **/

const TransactionHistoryWidget = () => {
  const [loading, setLoading] = useState(false)
  /** @type {[TransactionHistoryItemV2[], (newTransactions: TransactionHistoryItemV2[]) => void]} */
  const [transactions, setTransactions] = useState([])
  const accountData = useAccount()

  const fetchData = async () => {
    setLoading(true)
    const res = await api.getTransactionHistoryV2(accountData.address, 0, 100)
    setTransactions(res.data)
    setLoading(false)
  }

  useEffect(() => {
    if (!accountData.address) return
    fetchData()
  }, [accountData.address])


  const statusColMap = {
    completed: ['#00bf9a', '#0b4b29'],
    error: ['#fa332f', '#000'],
    failed: ['#fa332f', '#000'],
    expired: ['#fa332f', '#000'],
    pending: ['#bf7e15', '#000'],
    finalising: ['#0c6db3', '#000'],
    processing: ['#0c6db3', '#000'],
    refunded: ['#00bf9a', '#000']
  }

  return (
    <div className="!bg-[#3F3F3F] max-w-[733px] w-[100%] mx-auto text-[#fff] rounded-[10px] p-[50px] xs:p-[15px] sm:p-14 md:p-10 flex flex-col gap-4">
      <p className="text-center text-[1.25rem] font-bold">Transaction History</p>
      <div style={{colorScheme: 'dark'}} className="flex flex-col h-[30rem] overflow-y-auto max-w-[25rem] mx-auto w-full gap-4 <xs:gap-2 pr-2 -m4-2">
        {loading ? (
          <Spinner size={10} className="m-auto" />
        ) : (
          transactions.map((trx) => (
            <div className="bg-[rgba(255,255,255,0.1)] rounded-md px-3 py-2 text-[12px] gap-1 flex flex-col" key={trx.id}>
              <div className="flex gap-1 flex-wrap">
                {[
                  {text: capitalize(trx.record_type === "bonus_transaction" ? `${trx.bonus_type}_transaction` : trx.record_type), bg: '#222', textColor: '#fff'},
                  trx.status ? {text: capitalize(trx.status === "pending" ? "unpaid" : trx.status), bg: statusColMap[trx.status][0], textColor: statusColMap[trx.status][1]} : undefined,
                  trx.stage_name ? {text: trx.stage_name, bg: '#222', textColor: '#fff'} : undefined,
                ].filter((chip) => chip !== undefined).map((chip, i) => (
                  <div className="px-2 py-[0.125rem] flex gap-1 items-center justify-center rounded-full text-[10px] font-bold" style={{backgroundColor: chip.bg, color: chip.textColor}} key={i}>
                    {chip.text}
                  </div>
                ))}
              </div>
              <div className="flex">
                <div className="flex-[2] w-0 flex items-center gap-1">
                  <img className="w-6 h-6" src={trx.record_type === "transaction" ? tokenNameMap[trx.payment_token_name.toLowerCase()] : logoImg} />
                  <div className="flex flex-col">
                    {trx.record_type === "transaction" && <>
                        <p className="font-bold leading-[1.2]">{formatLargeNumber(trx.payment_token_amount)} {trx.payment_token_name.toUpperCase()}</p>
                      {trx.tokens_bought !== null ? (
                        <p className="text-[#aaa] leading-[1.2] text-[11px]">{formatLargeNumber(parseNum(trx.tokens_bought))} $DCARS for ${formatLargeNumber(parseNum(trx.payment_usd_amount))}</p>
                      ) : (
                        <p className="font-bold leading-[1.2]">In progress</p>
                      )}
                    </>}
                    {trx.record_type === "manual_transaction" && (
                      <p className="font-bold leading-[1.2]">+{formatLargeNumber(trx.tokens_bought)} DCARS</p>
                    )}
                    {trx.record_type === "bonus_transaction" && (
                      <p className="font-bold leading-[1.2]">+{formatLargeNumber(trx.bonus_token_amount)} DCARS</p>
                    )}
                  </div>
                </div>
                <div className="w-16 flex justify-end">
                  <p>{new Date(trx.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              {trx.record_type === "manual_transaction" && (
                <p><span className="font-bold">Reason:</span> {trx.reason}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TransactionHistoryWidget