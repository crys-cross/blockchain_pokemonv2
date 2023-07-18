"use client";

// import * as React from "react";
import { useEffect, useState } from "react";
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  lightTheme,
} from "@rainbow-me/rainbowkit";
//import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { argentWallet, ledgerWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { Metadata } from "next";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode, useIsMounted } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  // const [isMounted, setIsMounted] = useState(true);
  const { isDarkMode } = useDarkMode();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);
  useEffect(() => {
    // setIsMounted(true);
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={appChains.chains}
        // appInfo={demoAppInfo}
        avatar={BlockieAvatar}
        theme={isDarkTheme ? darkTheme() : lightTheme()}
      >
        <NextNProgress />
        {mounted && children}
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
