"use client";
import { TypeAnimation } from "react-type-animation";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation";

export default function Home() {
  const imageList = [
    "/s-class-slide.jpg",
    "/mustang-slide.webp",
    "/audi-a5-slide.avif",
  ];
  const [page, setPage] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= imageList.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(int);
  }, []);

  const changeImage = (page: number) => {
    setPage(page - 1);
  };

  const goToCars = () => {
    router.push("/cars/");
  };

  const goToBmw = () => {
    router.push("/cars/bmw-m5");
  };

  const goToPorsche = () => {
    router.push("/cars/porsche-911-gt3");
  };

  return (
    <div className="text-center text-5xl font-bold grid grid-cols-2">
      <TypeAnimation
        sequence={[
          "Looking for easy car renting app?",
          1000,
          "Looking for cheapest car rental?",
          1000,
          "Looking for enormous choice of cars?",
          1000,
          "You are in the right place.",
          1000,
          "Welcome to CarzZz",
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={0}
        className="col-span-2"
      />
      <div className="col-span-2 flex flex-row justify-center">
        <Card
          isFooterBlurred
          className="h-[400px] aspect-square sm:mx-[50px] sm:mt-[150px]"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Featured Car
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              BMW M5 Manhart
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="M5-Manhart"
            className="z-0 w-full h-full object-cover"
            src="/m5-manhart.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="BMW Logo"
                className="rounded-full w-10 h-10"
                src="/bmw-logo.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Exclusive Edition</p>
                <p className="text-tiny text-white/60">Only in our app.</p>
              </div>
            </div>
            <Button
              radius="full"
              size="sm"
              onClick={goToBmw}
              className="bg-slate-800"
            >
              Book
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="h-[600px] aspect-16/9 sm:mx-[50px] sm:mt-[50px]"
        >
          {/* bg-[#2a2e39] */}
          <CardHeader className="absolute z-10 flex gap-3 flex-row bg-slate-700 items-center justify-start pl-[30px]">
            <Image
              alt="CarzZz logo"
              height={40}
              radius="sm"
              src="/icon.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Various cars for different tastes.
              </p>
              <p className="text-tiny text-white/60">
                All of you will find your favorite.
              </p>
            </div>
            <Button
              radius="full"
              size="sm"
              onClick={goToCars}
              className="bg-slate-800"
            >
              Choose now
            </Button>
          </CardHeader>
          <Image
            removeWrapper
            alt="CarzZz"
            className="z-0 w-full h-full object-cover"
            src={imageList[page]}
          />
          <CardFooter className="absolute flex gap-2 items-center justify-center bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <Pagination
              loop
              showControls
              total={imageList.length}
              page={page + 1}
              onChange={changeImage}
            />
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="h-[400px] aspect-square sm:mx-[50px] sm:mt-[150px]"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Featured Car
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Porsche 911 GT3 RS
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Porsche 911"
            className="z-0 w-full h-full object-cover"
            src="/porsche-911-gt3-rs.webp"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Porsche Logo"
                className="rounded-full w-16 h-9"
                src="/porsche-logo.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Customers' Favorite</p>
                <p className="text-tiny text-white/60"></p>
              </div>
            </div>
            <Button
              radius="full"
              size="sm"
              onClick={goToPorsche}
              className="bg-slate-800"
            >
              Book
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
