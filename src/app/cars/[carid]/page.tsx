"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { useState } from "react";
import { list } from "../page";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Pagination } from "@nextui-org/pagination";
import { Tabs, Tab } from "@nextui-org/tabs";

export default function CarLookupPage({
  params,
}: {
  params: { carid: string };
}) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const currentCar = list.find((item) => item.id === params.carid) || {
    img: "",
    title: "",
    price: "",
    text: "",
  };

  let tabs = [
    {
      id: "specs",
      label: "Car Specificatios",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "use info",
      label: "Use Information",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "rating",
      label: "Rating & Reviews",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="mx-[50px] lg:grid flex flex-col grid-cols-2 items-center gap-[50px] h-screen grid-rows-[80px_700px]">
      <div className="col-span-2 self-start mt-[30px]">
        <h1 className="text-7xl text-center font-semibold">
          {currentCar.title}
        </h1>
      </div>
      <div className="col-span-1">
        <Card className="py-4 bg-transparent">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{currentCar.title}</p>
            <h4 className="font-bold text-large">{currentCar.price}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center">
            <Image
              src={currentCar.img}
              alt={currentCar.title}
              width={800}
              height={600}
              priority
            />
            <Pagination loop showControls total={5} initialPage={1} />
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Dynamic tabs" variant="underlined" items={tabs}>
            {(item) => (
              <Tab key={item.id} title={item.label} className="px-0">
                <Card className="bg-slate-700">
                  <CardBody>{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
        <Accordion variant="shadow" className="bg-slate-700">
          <AccordionItem key="1" aria-label="Choose Color" title="Choose Color">
            <div className="flex flex-col gap-3">
              <RadioGroup
                label="Select the color"
                value={selectedColor}
                onValueChange={setSelectedColor}
              >
                <Radio value="Black">Black</Radio>
                <Radio value="White">White</Radio>
                <Radio value="Gray">Gray</Radio>
                <Radio value="Dark blue">Dark blue</Radio>
                <Radio value="Orange">Orange</Radio>
              </RadioGroup>
            </div>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Choose Type" title="Choose Type">
            <div className="flex flex-col gap-3">
              <RadioGroup
                label="Select the type"
                value={selectedType}
                onValueChange={setSelectedType}
              >
                <Radio value="Basic">Basic</Radio>
                <Radio value="Comfort">Comfort</Radio>
                <Radio value="Full">Full</Radio>
              </RadioGroup>
            </div>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Choose Time" title="Choose Time">
            Random text
          </AccordionItem>
        </Accordion>
        {selectedColor && (
          <p className="text-default-500 text-small">
            Selected color: {selectedColor}
          </p>
        )}
        {selectedType && (
          <p className="text-default-500 text-small">
            Selected type: {selectedType}
          </p>
        )}
      </div>
    </div>
  );
}
