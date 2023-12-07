"use client";

import { Card, CardBody, CardFooter, Image, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Car = {
  id: string;
  title: string;
  img: string;
  price: string;
  logo: string;
  segment: string;
};

export const list: Car[] = [
  {
    id: "m-benz-s-class",
    title: "Mercedes-Benz S-500",
    img: "/s-class.png",
    price: "$200/day",
    logo: "/merc-logo.png",
    segment: "F",
  },
  {
    id: "m-benz-e-class-electric",
    title: "Mercedes-Benz E-300",
    img: "/e-class.png",
    price: "$150/day",
    logo: "/merc-logo.png",
    segment: "E",
  },
  {
    id: "bmw-5-series",
    title: "BMW 5 series",
    img: "/bmw-5.png",
    price: "$130/day",
    logo: "/bmw-logo.png",
    segment: "E",
  },
  {
    id: "bmw-m5",
    title: "BMW M5",
    img: "/m5.png",
    price: "$250/day",
    logo: "/bmw-logo.png",
    segment: "E+",
  },
  {
    id: "bmw-x5",
    title: "BMW X5",
    img: "/x5.png",
    price: "$200/day",
    logo: "/bmw-logo.png",
    segment: "J",
  },
  {
    id: "toyota-camry",
    title: "Toyota Camry 3.5L",
    img: "/camry.png",
    price: "$60/day",
    logo: "/toyota-logo.png",
    segment: "D",
  },
  {
    id: "audi-a5",
    title: "Audi A5",
    img: "/audi-a5.png",
    price: "$110/day",
    logo: "/audi-logo.png",
    segment: "E",
  },
  {
    id: "ford-mustang",
    title: "Ford Mustang",
    img: "/mustang.webp",
    price: "$80/day",
    logo: "/ford-logo.png",
    segment: "E",
  },
  {
    id: "porsche-911-gt3",
    title: "Porsche GT3 RS",
    img: "/porsche-911-gt3.png",
    price: "$300/day",
    logo: "/porsche-logo.png",
    segment: "-",
  },
];

export default function CarsPage() {
  const router = useRouter();

  const inspectCar = (car: {
    id: string;
    title: string;
    img: string;
    price: string;
    logo: string;
  }) => {
    router.push(`/cars/${car.id}`);
  };

  return (
    <div className="flex flex-col 2xl:grid items-center 2xl:grid-cols-7 mt-5 mx-5 gap-5">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => {
            inspectCar(item);
          }}
          className="h-[350px] w-[250px] flex flex-col justify-items-center bg-gradient-to-b from-slate-800 to-slate-800"
        >
          <CardBody className="overflow-visible p-0 flex flex-col justify-center items-center">
            <Image
              alt="Logo"
              src={item.logo}
              height={60}
              width={60}
              radius="sm"
              className="w-full object-cover"
            />
            <Image
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
            <b>{item.title}</b>
          </CardBody>
          <Divider />
          <CardFooter className="text-small justify-between">
            {item.segment === "E" ? (
              <div className="border-3 rounded-full h-[30px] w-[30px] border-red-800 text-red-800 font-bold">
                <p>{item.segment}</p>
              </div>
            ) : (
              <div className="border-3 rounded-full h-[30px] w-[30px] border-green-800 text-green-800 font-bold">
                <p>{item.segment}</p>
              </div>
            )}
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
