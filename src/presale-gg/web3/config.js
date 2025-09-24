import walletConnectImg from "../assets/img/wallet-connect.svg";
import metamaskImg from "../assets/img/metamask.svg";
import coinbaseImg from "../assets/img/coinbase.svg";
import phantomWalletImg from "../assets/img/phantom.svg";
import { getIsMobile } from "../util";

/**
 * @typedef {"metamask" | "walletconnect" | "coinbase"} SupportedConnection
 * @typedef {1 | 56 | 8453} SupportedChainId
 *
 * @typedef {object} Connection
 * @property {string} Connection.label
 * @property {SupportedConnection} Connection.key
 * @property {string} Connection.icon
 * @property {number} Connection.connectorIndex,
 * @property {() => boolean} [hide]
 * @property {() => boolean} [onClick]
 */

/** @type {Promise<import("../../wagmi/config")> | undefined} */
let configPromise = undefined;

/**
 * @typedef {object} ConfigRef
 * @property {Promise<import("../../wagmi/config")> | undefined} ConfigRef.current
 */

/** @type {ConfigRef} */
export let configRef = { current: undefined };

/** @returns {Promise<import("../../wagmi/config")>} */
export const getConfig = async () => {
  if (configRef.current) return configRef.current;
  if (!configPromise) configPromise = import("../../wagmi/config");
  const res = await configPromise;
  configRef.current = res;
  document.dispatchEvent(new Event("wagmi-loaded"));
  getPublicClient();
  return res;
};

/** @type {Promise<import("./public-client")> | undefined} */
let publicClientPromise = undefined;

/**
 * @typedef {object} GetPublicClientRef
 * @property {Promise<((chainId?: number) => import("viem").PublicClient>) | undefined} PublicClientRef.current
 */

/** @type {GetPublicClientRef} */
export let getPublicClientRef = { current: undefined };

/** @returns {Promise<import("viem").PublicClient>} */
export const getPublicClient = async (chainId) => {
  if (getPublicClientRef.current) {
    return getPublicClientRef.current(chainId);
  }
  if (!publicClientPromise) publicClientPromise = import("./public-client");
  const res = await publicClientPromise;
  getPublicClientRef.current = res.getPublicClient;
  return res.getPublicClient(chainId);
};