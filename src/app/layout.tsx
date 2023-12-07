"use client";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Providers } from "./providers";
import Searchbar from "./Searchbar";
import { useState } from "react";
// export const metadata: Metadata = {
//   title: "CarzZz",
//   description: "Rent a car with best prices!",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigation, setNavigation] = useState(false);

  return (
    <html
      lang="en"
      className="dark bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#191714,#2234AE_100%)] bg-fixed"
    >
      <body className="">
        <Providers>
          <div className="bg-slate-700 flex justify-between rounded-b-lg items-center antialiased px-5 py-2 text-white">
            <div className="md:ml-36 flex flex-row items-center gap-5">
              <Image
                src="/icon.png"
                width={60}
                height={60}
                alt="CarzZz"
                onClick={() => {
                  setNavigation((prevState) => !prevState);
                }}
              />
              <div className="flex lg:gap-5 gap-1 lg:text-2xl font-semibold">
                <div
                  className="space-y-2"
                  onClick={() => {
                    setNavigation((prevState) => !prevState);
                  }}
                >
                  <div className="w-8 h-0.5 bg-slate-800"></div>
                  <div className="w-8 h-0.5 bg-slate-800"></div>
                  <div className="w-8 h-0.5 bg-slate-800"></div>
                </div>
                {navigation && (
                  <div className="flex flex-col absolute bg-slate-700 p-4 rounded-xl top-[50px]">
                    <Link className="hover:text-gray-400" href="/">
                      Home
                    </Link>
                    <Link className="hover:text-gray-400" href="/subscription">
                      Subscription
                    </Link>
                    <Link className="hover:text-gray-400" href="/cars">
                      Available Cars
                    </Link>
                    <Link className="hover:text-gray-400" href="/about">
                      About
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="mr-36">
              <Searchbar />
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
