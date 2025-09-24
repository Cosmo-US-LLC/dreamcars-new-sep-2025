/**
 * @typedef {import("../api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("../api/api.types").API.Transaction} Transaction
 */

import toast from "react-hot-toast";
import { parseNum } from "./number.util";
import {
  getAbi,
  getChainIdFromLabel,
  getConfig,
  getContractAddress,
  getDecimals,
  isCurrencyNative,
  sendGenericTransaction,
} from "../web3";
import { $apiState } from "../stores/api.store";
import { api } from "../api";
import { waitForTransactionReceipt } from "@wagmi/core";

/**
 * @typedef {import("../api/api.types").API.TransactionHistoryItem}
 * 
 * @param {string} walletAddress
 * @param {number} createdAt
 * @param {{signal?: AbortSignal}} [args]
 * @returns {Promise<TransactionHistoryItem>}
*/
export const waitForNextTransaction = (
  walletAddress,
  createdAt,
  args
) => {
  return new Promise((resolve, reject) => {
    const confirm = (transaction) => {
      clearInterval(checkInterval)
      resolve(transaction)
    }
    const checkInterval = setInterval(async () => {
      if (args?.signal?.aborted) {
        reject()
        return clearInterval(checkInterval)
      }
      try {
        const res = await api.getTransactionHistory(walletAddress, 0, 1)
        const transaction = res.data[0]
        if (!transaction) return
        if (new Date(transaction.created_at).getTime() < createdAt) return
        if (transaction.status === 'completed') {
          confirm(transaction)
        }
      } catch (_) {}
    }, 5000)
  })
}

export const walletBuyTokens = new Set([
  "ETH-ERC-20",
  "USDT-ERC-20",
  "BNB-BEP-20",
  "BUSD-BEP-20",
  "USDT-BEP-20",
  "ETH-BASE",
  "USDC-BASE",
  "USDC-BEP-20",
]);

/**
 * @typedef {{type: "created", transaction: Transaction}, {type: "sent"}} TransactionFinishedReturn
 * @typedef {import("../api/api.types").API.TransactionHistoryItem} TransactionHistoryItem
 * @typedef {{ type: 'sending' | 'finalizing' } | { type: 'confirming'; transactionHash: string } | { type: 'finished'; transaction: TransactionHistoryItem } | { type: 'errored'; error: unknown }} BuyState
 * @param {object} args
 * @param {PaymentToken} args.paymentToken
 * @param {string} args.paymentTokenNum
 * @param {string} args.walletAddress
 * @param {(state: BuyState) => void} [args.onStateChanged]
 * @returns {Promise<TransactionFinishedReturn>}
 */
export const buyWithCrypto = async (args) => {
  const apiData = $apiState.get();
  if (apiData.presaleEnded) return toast.error("Presale has ended");

  const minimum =
    Math.ceil(
      (parseNum(args.paymentToken.nowpayments_minimum) /
        parseNum(args.paymentToken.price)) *
        10 ** 6
    ) /
    10 ** 6;

  const paymentTokenNum = parseNum(args.paymentTokenNum);
  if (paymentTokenNum < minimum)
    return toast.error(
      `Must pay more than ${minimum} ${args.paymentToken.symbol.toUpperCase()}`
    );

  const walletTransfer = walletBuyTokens.has(
    args.paymentToken.symbol.toUpperCase() +
      "-" +
      args.paymentToken.chain.toUpperCase()
  );
  if (walletTransfer) {
    const createdAt = Date.now()
    try {
      args.onStateChanged?.({ type: 'sending' })
      const { config } = await getConfig();

      const chainId = getChainIdFromLabel(args.paymentToken.chain);
      if (!chainId)
        return toast.error(
          `Invalid chain id for chain ${args.paymentToken.chain}`
        );

      const abi = getAbi(chainId);
      if (!abi) return toast.error(`Invalid ABI for chain id ${chainId}`);

      const native = isCurrencyNative(args.paymentToken.symbol, chainId);
      const contractAddress = getContractAddress(
        chainId,
        args.paymentToken.symbol
      );
      const decimals = getDecimals(chainId, args.paymentToken.symbol);

      if (!native && !contractAddress)
        return toast.error(
          `Invalid contract address for token ${args.paymentToken.symbol}`
        );
      toast("Confirm in your wallet");
      const transactionHash = await sendGenericTransaction(config, {
        to: apiData.info.main_payment_wallet_address,
        value: paymentTokenNum,
        abi,
        chainId,
        contractAddress,
        decimals,
        native,
      });
      args.onStateChanged?.({ type: 'confirming', transactionHash })
      await waitForTransactionReceipt(config, { hash: transactionHash })
      args.onStateChanged?.({ type: 'finalizing' })
      const transaction = await waitForNextTransaction(args.walletAddress, createdAt)
      args.onStateChanged?.({ type: 'finished', transaction })
      api.createTransactionMetadata(
        args.walletAddress ?? "",
        transactionHash
      );
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: "purchase",
        ecommerce: {
          transaction_id: transactionHash, //unique (hash) transaction number
          currency: "USD", //convert crypto currencies to USD
          value:
            parseNum(args.paymentToken.price) *
            parseNum(args.paymentTokenNum), //value (equivalent in USD for crypto values)
        },
      });
      return {
        type: "sent",
      };
    } catch (err) {
      args.onStateChanged?.({ type: 'errored', error: err })
      throw err
    }
  } else {
    try {
      const res = await api.createTransaction({
        payment_token_id: args.paymentToken.id,
        usd_amount: (
          paymentTokenNum * parseNum(args.paymentToken.price)
        ).toString(),
        wallet_address: args.walletAddress,
        token_amount: paymentTokenNum.toString(),
      });
      return {
        type: "created",
        transaction: res.data,
      };
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error creating transaction"));
      throw err;
    }
  }
};
