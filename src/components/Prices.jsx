import React, { useState } from "react";
import { tringle } from "../ui/images";

export default function Prices() {
  const [btnNum, setBtnNum] = useState(5);

  const days = ["45", "10"];
  const priceValues = {
    0: ["500", "500", "500", "1,000", "1,000", "1,000", "800", "500"],
    1: ["250", "250", "250", "500", "500", "500", "500", "250"],
    2: ["500", "500", "500", "1,000", "1,000", "1,000", "1,000", "500"],
    3: ["500", "500", "500", "1,000", "1,000", "1,000", "2,500", "1,250"],
    4: ["2,500", "2,500", "2,500", "5,000", "5,000", "5,000", "5,000", "2,500"],
    5: [
      "5,000",
      "5,000",
      "5,000",
      "10,000",
      "10,000",
      "10,000",
      "10,000",
      "5,000",
    ],
  };

  const refundable = ["1080","57", "127", "227", "327", "527"];

  return (
    <section className="prices relative">
      <div className="container z-10 relative">
        <div className="wrapper grid gap-12">
          <div className="heading grid gap-4 justify-center items-center text-center">
            <h2 className="text-3xl font-extrabold">Price</h2>
            <p className="max-w-[55rem]">
              Choose your favorite account size, start trading, earn
              profit-splits and bonuses
            </p>
          </div>

          {/* Desktop version */}
          <div className="desktop-content relative z-10 hidden lg:grid xl:grid-cols-9 gap-5 w-full border-2 border-primary/20 rounded-xl py-8 px-6">
            {/* Left side */}
            <div className="left col-span-4  grid items-center justify-start gap-4 rounded-xl  font-medium">
              <div className="heading grid gap-5">
                <h4>
                  Choose your <span className="font-bold">Balance</span>:
                </h4>

                <div className="prices grid grid-cols-3 gap-4">
                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 1
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(1)}
                    >
                      $ 5,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 2
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(2)}
                    >
                      $ 10,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 3
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(3)}
                    >
                      $ 25,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 4
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(4)}
                    >
                      $ 50,000
                    </button>
                  </div>

                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md outline leading-[0.7] ${
                        btnNum === 5
                          ? "outline-2 outline-all"
                          : "outline-1 outline-primary"
                      }`}
                      onClick={() => setBtnNum(5)}
                    >
                      $ 100,000
                    </button>
                  </div>
                </div>
              </div>

              <div className="refund flex w-full items-center">
                <span className="text-base text-bold font-codePro">
                  Refundable fee:
                </span>
                <h4 className="text-[1.4rem] font-extrabold ml-4">
                  $ {refundable[btnNum]}
                </h4>
              </div>

              <div className="btn flex justify-start">
                <a
                  href="#"
                  className="uppercase text-xs font-codePro font-bold py-2 px-4 border-2 border-primary  rounded-md"
                >
                  get started now
                </a>
              </div>
            </div>

            <div className="grid col-span-5 gap-3 rounded-xl w-full">
              <div className="  mt-12 item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Trading <span className="font-bold">period</span>:
                </span>
                <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_1'] before:-top-10 before:text-[0.9rem]">
                  <span className="day-one">
                    {btnNum === 0 ? "30" : "45"} Days{" "}
                  </span>
                </div>
                <div className="col-span-2 relative before:absolute before:font-bold before:content-['Phase_2'] before:-top-10 before:text-[0.9rem]">
                  <span className="day-two">
                    {btnNum === 0 ? "30" : "45"} Days
                  </span>
                </div>
                <span className="col-span-2 relative before:absolute before:font-bold before:content-['Funded'] before:-top-10">
                  Indefinite
                </span>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Minimum trading
                  <span className="font-bold"> days</span>:
                </span>
                <span className="col-span-2">
                  {btnNum === 0 ? "5" : "10"} Days
                </span>
                <span className="col-span-2">
                  {btnNum === 0 ? "5" : "10"} Days
                </span>
                <span className="col-span-2">-</span>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Max <span className="font-bold">Daily</span> Loss:
                </span>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][0]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][1]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][2]}</span>
                </div>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Max <span className="font-bold">Overall</span> Loss:
                </span>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][3]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][4]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][5]}</span>
                </div>
              </div>

              <div className="item grid grid-cols-10 gap-6 px-4 py-1 border border-primary/20 rounded-lg text-center">
                <span className="col-span-4 text-start">
                  Profit <span className="font-bold">Target</span>:
                </span>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][6]}</span>
                </div>
                <div className="col-span-2">
                  $ <span className="priceVal">{priceValues[btnNum][7]}</span>
                </div>
                <span className="col-span-2">-</span>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="mobile-content grid lg:hidden gap-8">
            <div className="left font-medium">
              <div className="heading grid gap-5">
                <h4>
                  Choose your <span className="font-bold">Balance</span>:
                </h4>

                <div className="prices flex flex-wrap gap-4">
                  <div className="price">
                    <button
                      className={`w-[7rem] py-2.5 rounded-md bg-primary/20  outline-primary outline-1 outline leading-[0.7]`}
                    >
                      $ 10,000
                    </button>
                  </div>

                  <div className="price">
                    <button className="w-[7rem] py-2.5 rounded-md  bg-primary/20 outline-primary outline-1 outline leading-[0.7]">
                      $ 25,000
                    </button>
                  </div>

                  <div className="price">
                    <button className="w-[7rem] py-2.5 rounded-md  bg-primary/20 outline-primary outline-1 outline leading-[0.7]">
                      $ 50,000
                    </button>
                  </div>

                  <div className="price">
                    <button className="w-[7rem] py-2.5 rounded-md  bg-primary/20 outline-primary outline-1 outline leading-[0.7]">
                      $ 100,000
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="phase1 pt-2 max-w-[28rem] pb-6 item grid gap-6 border-2 border-light rounded-lg">
                  <div className="heading py-3 mt-2 bg-gradient-to-r from-card-inner-left to-card-inner-right">
                    <h3 className="px-5">Phase 1</h3>
                  </div>

                  <div className="items grid gap-4 px-4">
                    <div className="item flex justify-between gap-6">
                      <span>
                        Trading
                        <span className="font-bold">period</span>:
                      </span>
                      <div className="">
                        <span className="day-one">30</span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Minimum trading
                        <span className="font-bold">days</span>:
                      </span>
                      <span className="">5 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold">Daily</span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][0]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold">Overall</span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][1]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Trading
                        <span className="font-bold">period</span>:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][2]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phase1 pt-2 max-w-[28rem] pb-6 item grid gap-6 border-2 border-light rounded-lg">
                  <div className="heading py-3 mt-2 bg-gradient-to-r from-card-inner-left to-card-inner-right">
                    <h3 className="px-5">Phase 2</h3>
                  </div>

                  <div className="items grid gap-4 px-4">
                    <div className="item flex justify-between gap-6">
                      <span>
                        Trading
                        <span className="font-bold">period</span>:
                      </span>
                      <div className="">
                        <span className="day-two">60</span> Days
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Minimum trading
                        <span className="font-bold">days</span>:
                      </span>
                      <span className="">5 Days</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold">Daily</span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][3]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold">Overall</span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][4]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Trading
                        <span className="font-bold">period</span>:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][5]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="funded pt-2 max-w-[28rem] pb-6 item grid gap-6 border-2 border-light rounded-lg">
                  <div className="heading py-3 mt-2 bg-gradient-to-r from-card-inner-left to-card-inner-right">
                    <h3 className="px-5">Funded</h3>
                  </div>

                  <div className="items grid gap-4 px-4">
                    <div className="item flex justify-between gap-6">
                      <span>
                        Trading
                        <span className="font-bold">period</span>:
                      </span>

                      <span>Indefinite</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Minimum trading
                        <span className="font-bold">days</span>:
                      </span>
                      <span className="">-</span>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold">Daily</span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][6]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Max
                        <span className="font-bold">Overall</span> Loss:
                      </span>
                      <div className="">
                        ${" "}
                        <span className="priceVal">
                          {priceValues[btnNum][7]}
                        </span>
                      </div>
                    </div>

                    <div className="item flex justify-between gap-6">
                      <span className="">
                        Trading
                        <span className="font-bold">period</span>:
                      </span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="refund flex gap-6 place-self-center items-center">
                <span> Refundable fee: </span>
                <h4 className="text-3xl">$ {refundable[btnNum]}</h4>
              </div>

              <div className="btn flex justify-center">
                <a
                  href="#"
                  className="uppercase font-Montserrat text-xs font-bold py-2 px-4 bg-primary text-main-bg rounded-md"
                >
                  get started now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -bottom-[25rem] -left-[25rem]  w-[50rem] rotate-[80deg] opacity-[0.2]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
