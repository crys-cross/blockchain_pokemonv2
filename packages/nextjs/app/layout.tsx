"use client";

import { useEffect, useState } from "react";
import { Providers } from "./providers";
//import type { AppProps } from "next/app";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode, useIsMounted } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const metadata: Metadata = {
  title: "PokeDApp",
  description: "Pokemon concept on a blockchain",
};

// const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen">
//         <Providers>
//           <Header />
//           <main className="relative flex flex-col flex-1">{children}</main>
//           <Footer />
//         </Providers>
//       </body>
//     </html>
//   );
// };
// export default ScaffoldEthApp;

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
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

  // if (!isMounted) return null;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <WagmiConfig client={wagmiClient}>
          <NextNProgress />
          <RainbowKitProvider
            chains={appChains.chains}
            avatar={BlockieAvatar}
            theme={isDarkTheme ? darkTheme() : lightTheme()}
          >
            <Header />
            <main className="relative flex flex-col flex-1">{mounted && children}</main>
            <Footer />
            <Toaster />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
};
export default ScaffoldEthApp;
