import { Button } from "@nextui-org/button";

export default function PricingItem({
  name,
  price,
  descr1,
  descr2,
  descr3,
  onSignup,
}: {
  name: string;
  price: number;
  descr1: string;
  descr2: string;
  descr3: string;
  onSignup: () => void;
}) {
  return (
    <div className="border-2 group h-96 w-60 text-center border-solid hover:rounded-xl border-blue-700 text-white hover:scale-105 transition-all ease-linear duration-200 hover:bg-gradient-to-t from-pink-500 to-pink-950 hover:border-amber-600">
      <h2 className="text-base font-bold mb-2 mt-5">{name}</h2>
      <h3 className="text-2xl tracking-wider mb-1.5 ">
        <sup className="text-xs">$</sup>
        {price}
        <span className="text-xs">/mo</span>
      </h3>
      <p className="text-sm mb-6">10,000 monthly visits</p>
      <ul className="mb-6 text-xs text-blue-500 group-hover:text-amber-600 list-none">
        <li className="mb-3.5">{descr1}</li>
        <li className="mb-3.5">{descr2}</li>
        <li className="mb-3.5">{descr3}</li>
      </ul>
      <Button
        color="primary"
        variant="shadow"
        className="group-hover:bg-amber-600 font-bold w-32 top-[70px] px-6 rounded-3xl"
        onPress={onSignup}
      >
        Sign up
      </Button>
    </div>
  );
}
