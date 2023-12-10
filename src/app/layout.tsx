import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./NavBar";
import { Providers } from "./providers";
import Searchbar from "./Searchbar";
import HamMenu from "./HamMenu";
import { Analytics } from "@vercel/analytics/react";
import Logo from "./Logo";

import Head from "next/head";
export const metadata: Metadata = {
  title: "CarzZz",
  description: "Rent a car with best prices!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#191714,#2234AE_100%)] bg-fixed"
    >
      <body>
        <Head>
          <title>CarzZz</title>
        </Head>
        <Providers>
          <div className="bg-[#2a2e39] flex justify-between items-center gap-5 antialiased px-5 py-2 text-white">
            <HamMenu />
            <Logo />
            <div className="hidden lg:flex">
              <Navbar />
            </div>
            <div className="lg:mr-36">
              <Searchbar />
            </div>
          </div>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
