"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./NavBar";

export default function HamMenu() {
  const [navigation, setNavigation] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavigation(false);
  }, [pathname]);

  return (
    <div className="lg:hidden flex gap-1 font-semibold left-[25px] absolute">
      <div
        className="space-y-2"
        onClick={() => {
          setNavigation((prevState) => !prevState);
        }}
      >
        <div className="w-8 h-0.5 bg-slate-900"></div>
        <div className="w-8 h-0.5 bg-slate-900"></div>
        <div className="w-8 h-0.5 bg-slate-900"></div>
      </div>
      {navigation && <Navbar />}
    </div>
  );
}
