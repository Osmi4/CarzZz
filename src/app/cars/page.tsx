"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { useRouter } from "next/navigation";
import { list } from "../CarList";

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
