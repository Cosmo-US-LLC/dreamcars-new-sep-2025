import { connectorsForWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { phantomWallet } from '@rainbow-me/rainbowkit/wallets';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';

const eth = {
  id: 1,
  name: 'Ethereum',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://mainnet.infura.io/v3/e8eed4cda42f4818b904965ede803e30'] },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://etherscan.io/' },
  },
}
const bsc = {
  id: 56,
  name: 'Binance Smart Chain',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Binance Smart Chain', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://bsc-mainnet.infura.io/v3/e8eed4cda42f4818b904965ede803e30'] },
  },
  blockExplorers: {
    default: { name: 'BSCScan', url: 'https://bscscan.com/' },
  },
}

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Suggested',
      wallets: [
        rainbowWallet,
        trustWallet,
        walletConnectWallet,
        metaMaskWallet,
        phantomWallet
      ],
    },
  ],
  { appName: 'DreamCars', projectId: 'f1fa989b52589ea5a9f742a48081a6f4' },
);
const projectId = 'f1fa989b52589ea5a9f742a48081a6f4';
export const config = getDefaultConfig({
  connectors,
  appName: 'DreamCars',
  projectId: 'f1fa989b52589ea5a9f742a48081a6f4',
  chains: [eth, bsc],
  ssr: true,
});