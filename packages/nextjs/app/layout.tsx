"use client";

import { useEffect, useState } from "react";
//import type { AppProps } from "next/app";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>(undefined);
  // const { isDarkMode } = useDarkMode();
  // let isDarkTheme : boolean;
  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);
  // useEffect(() => {
  //   setIsDarkTheme(isDarkMode);
  // }, [isDarkMode]);
  useEffect(() => {
    const value = localStorage.getItem("darkMode");
    setIsDarkTheme(value === "true");
  }, [isDarkTheme]);
  return (
    <html lang="en">
      <WagmiConfig client={wagmiClient}>
        <NextNProgress />
        <RainbowKitProvider
          chains={appChains.chains}
          avatar={BlockieAvatar}
          // theme={isDarkTheme ? darkTheme() : lightTheme()
          theme={isDarkTheme ? darkTheme() : lightTheme()}
        >
          <body className="flex flex-col min-h-screen">
            <Header />
            <main className="relative flex flex-col flex-1">{children}</main>
            <Footer />
          </body>
          <Toaster />
        </RainbowKitProvider>
      </WagmiConfig>
    </html>
  );
};
export default ScaffoldEthApp;
// import { useEffect, useState } from "react";
// import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
// import { useDarkMode } from "usehooks-ts";
// import { WagmiConfig } from "wagmi";
// import { Footer } from "~~/components/Footer";
// import { Header } from "~~/components/Header";
// import { BlockieAvatar } from "~~/components/scaffold-eth";
// import { wagmiClient } from "~~/services/web3/wagmiClient";
// import { appChains } from "~~/services/web3/wagmiConnectors";
// import "~~/styles/globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isDarkTheme, setIsDarkTheme] = useState(true);
//   const { isDarkMode } = useDarkMode();

//   useEffect(() => {
//     setIsDarkTheme(isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <html lang="en">
//       <body className="relative">
//         <WagmiConfig client={wagmiClient}>
//           <RainbowKitProvider
//             chains={appChains.chains}
//             avatar={BlockieAvatar}
//             theme={isDarkTheme ? darkTheme() : lightTheme()}
//           >
//             <Header />
//             {children}
//             <Footer />
//           </RainbowKitProvider>
//         </WagmiConfig>
//       </body>
//     </html>
//   );
// }
