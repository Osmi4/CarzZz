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
