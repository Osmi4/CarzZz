"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Logo() {
  const router = useRouter();

  const goToHomePage = () => {
    router.push("./");
  };
  return (
    <div className="lg:ml-36 invisible lg:visible" onClick={goToHomePage}>
      <Image src="/icon.png" width={60} height={60} alt="CarzZz" />
    </div>
  );
}
