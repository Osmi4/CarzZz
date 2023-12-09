import SubscriptionModal from "./SubscriptionModal";

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-slate-400 tracking-wide">
      <div className="bg-slate-800 flex flex-col lg:flex-row justify-center items-center w-1/2 border-2 border-slate-400 my-[20px] p-5 lg:pb-0">
        <h1 className="lg:text-6xl text-lg font-extrabold lg:pb-6 lg:w-[500px]">
          Pay once, forget about payments for a month!
        </h1>
        <h2 className="lg:text-sm text-xs font-bold lg:w-[300px] lg:pb-5">
          Now, you can choose one of our beneficial monthly packages! No more
          bothering of payment every time! You will certainly find one package
          which perfectly suits your needs!
        </h2>
      </div>
      <SubscriptionModal />
    </div>
  );
}
