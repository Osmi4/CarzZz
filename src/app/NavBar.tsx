import Link from "next/link";

export default function Navbar() {
  return (
    <div className="z-20 text-slate-400 flex flex-col absolute bg-slate-700 lg:bg-transparent p-4 rounded-xl top-[40px] left-0 lg:left-[250px] lg:flex-row lg:gap-5 lg:text-2xl lg:top-[5px] lg:font-semibold">
      <Link className="hover:text-white" href="/">
        Home
      </Link>
      <Link className="hover:text-white" href="/subscription">
        Subscription
      </Link>
      <Link className="hover:text-white" href="/cars">
        Cars
      </Link>
      <Link className="hover:text-white" href="/about">
        About
      </Link>
    </div>
  );
}
