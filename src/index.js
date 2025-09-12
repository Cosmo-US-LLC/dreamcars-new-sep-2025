import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";
import Loader from './components/Loader';

import '@rainbow-me/rainbowkit/styles.css';
import { phantomWallet } from '@rainbow-me/rainbowkit/wallets';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
// import { mainnet, bsc } from 'wagmi/chains';

import { Theme } from '@rainbow-me/rainbowkit';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';


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
const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: '...',
  },
  colors: {
    accentColor: 'linear-gradient(90deg, #FFD02F -3.12%, #FFD02F 29.71%, #FFD02F 73.6%, #FFD02F 102.14%)',
    modalBackground: '#fff',
  }
};
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
const config = getDefaultConfig({
  connectors,
  appName: 'DreamCars',
  projectId: 'f1fa989b52589ea5a9f742a48081a6f4',
  chains: [eth, bsc],
  ssr: true,
});
const queryClient = new QueryClient();

const DelayedSuspense = ({ children, delay = 100 }) => {
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return delayPassed ? (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  ) : (
    <Loader />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DelayedSuspense>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact" theme={myCustomTheme}>
            <App />

          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </DelayedSuspense>
  </React.StrictMode>
);
reportWebVitals();
