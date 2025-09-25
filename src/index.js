import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";
import Loader from './components/Loader';

import '@rainbow-me/rainbowkit/styles.css';
// import { mainnet, bsc } from 'wagmi/chains';

import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { config } from './wagmi/config';
import { addUserListener, fetchApiData } from './presale-gg/stores';

const myCustomTheme = {
  blurs: {
    modalOverlay: '...',
  },
  colors: {
    accentColor: 'linear-gradient(90deg, #FFD02F -3.12%, #FFD02F 29.71%, #FFD02F 73.6%, #FFD02F 102.14%)',
    modalBackground: '#fff',
  }
};


const queryClient = new QueryClient();

const DelayedSuspense = ({ children, delay = 100 }) => {
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    fetchApiData()
    addUserListener()
  }, [])

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
