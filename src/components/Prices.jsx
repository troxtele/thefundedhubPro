import React from "react";

export default function Prices() {
  return (
    <section className=" price md:max  py-[2.5rem] md:py-[3.5rem]-w-[90%] md:m-auto">
      <div className="wrapper grid gap-12 justify-center items-center">
        <div className="heading grid gap-4 justify-center items-center text-center">
          <h2 className="text-[1.7rem] font-extrabold">PRICES</h2>
          <p className="text-base max-w-[55rem]">
            Choose your favorite account size, start trading, earn profit-splits
            and bonuses
          </p>
        </div>

        <div className="desktop-content hidden lg:flex min-w-full">
          <div className="left p-6 pr-12 border border-light grid items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-card-clrs-left to-card-clrs-right font-medium">
            <div className="heading grid gap-5">
              <h4>
                Choose your <span className="font-bold">Balance</span>:
              </h4>

              <div className="prices grid grid-cols-2 gap-4">
                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline outline-1 outline-all leading-[0.7]">
                    $ 10.000
                  </button>
                </div>

                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline-all outline-1 outline leading-[0.7]">
                    $ 25.000
                  </button>
                </div>

                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline-all outline-1 outline leading-[0.7]">
                    $ 50.000
                  </button>
                </div>

                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline-all outline-1 outline leading-[0.7]">
                    $ 100.000
                  </button>
                </div>
              </div>
            </div>

            <div className="refund flex justify-around items-center">
              <span> Refundable fee: </span>
              <span className="text-xl font-extrabold">$ 1080</span>
            </div>

            <div className="btn flex justify-center">
              <a
                href="#"
                className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-all border-2 rounded-md"
              >
                get started now
              </a>
            </div>
          </div>

          <div className="-ml-6 p-6 grid justify-start gap-3 border border-light rounded-xl bg-gradient-to-r from-card-clrs-left to-card-clrs-right">
            <div className="mt-12 item grid grid-cols-6 gap-6 px-4 py-1 border border-all rounded-lg">
              <span className="col-span-3">
                Trading <span className="font-bold">period</span>:
              </span>
              <div className="col-span-1 relative before:absolute before:content-['Phase_1'] before:-top-12">
                <span className="day-one">30</span> Days
              </div>
              <div className="col-span-1 relative before:absolute before:content-['Phase_2'] before:-top-12">
                <span className="day-two">60</span> Days
              </div>
              <span className="col-span-1 relative before:absolute before:content-['Funded'] before:-top-12">
                Indefinite
              </span>
            </div>

            <div className="item grid grid-cols-6 gap-6 px-4 py-1 border border-all rounded-lg">
              <span className="col-span-3">
                Minimum trading
                <span className="font-bold">days</span>:
              </span>
              <span className="col-span-1">5 Days</span>
              <span className="col-span-1">5 Days</span>
              <span className="col-span-1">-</span>
            </div>

            <div className="item grid grid-cols-6 gap-6 px-4 py-1 border border-all rounded-lg">
              <span className="col-span-3">
                Max <span className="font-bold">Daily</span> Loss:
              </span>
              <div className="col-span-1">
                $ <span className="priceVal">500</span>
              </div>
              <div className="col-span-1">
                $ <span className="priceVal">500</span>
              </div>
              <div className="col-span-1">
                $ <span className="priceVal">500</span>
              </div>
            </div>

            <div className="item grid grid-cols-6 gap-6 px-4 py-1 border border-all rounded-lg">
              <span className="col-span-3">
                Max <span className="font-bold">Overall</span> Loss:
              </span>
              <div className="col-span-1">
                $ <span className="priceVal">1,000</span>
              </div>
              <div className="col-span-1">
                $ <span className="priceVal">1,000</span>
              </div>
              <div className="col-span-1">
                $ <span className="priceVal">1,000</span>
              </div>
            </div>

            <div className="item grid grid-cols-6 gap-6 px-4 py-1 border border-all rounded-lg">
              <span className="col-span-3">
                Trading <span className="font-bold">period</span>:
              </span>
              <div className="col-span-1">
                $ <span className="priceVal">500</span>
              </div>
              <div className="col-span-1">
                $ <span className="priceVal">500</span>
              </div>
              <span className="col-span-1">-</span>
            </div>
          </div>
        </div>

        <div className="mobile-content grid lg:hidden gap-8">
          <div className="left font-medium">
            <div className="heading grid gap-5">
              <h4>
                Choose your <span className="font-bold">Balance</span>:
              </h4>

              <div className="prices flex flex-wrap gap-4">
                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline outline-1 outline-all leading-[0.7]">
                    $ 10.000
                  </button>
                </div>

                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline-all outline-1 outline leading-[0.7]">
                    $ 25.000
                  </button>
                </div>

                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline-all outline-1 outline leading-[0.7]">
                    $ 50.000
                  </button>
                </div>

                <div className="price">
                  <button className="w-[7rem] py-2.5 rounded-md outline-all outline-1 outline leading-[0.7]">
                    $ 100.000
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
                      $ <span className="priceVal">500</span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6">
                    <span className="">
                      Max
                      <span className="font-bold">Overall</span> Loss:
                    </span>
                    <div className="">
                      $ <span className="priceVal">1,000</span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6">
                    <span className="">
                      Trading
                      <span className="font-bold">period</span>:
                    </span>
                    <div className="">
                      $ <span className="priceVal">500</span>
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
                      $ <span className="priceVal">500</span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6">
                    <span className="">
                      Max
                      <span className="font-bold">Overall</span> Loss:
                    </span>
                    <div className="">
                      $ <span className="priceVal">1,000</span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6">
                    <span className="">
                      Trading
                      <span className="font-bold">period</span>:
                    </span>
                    <div className="">
                      $ <span className="priceVal">500</span>
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
                      $ <span className="priceVal">500</span>
                    </div>
                  </div>

                  <div className="item flex justify-between gap-6">
                    <span className="">
                      Max
                      <span className="font-bold">Overall</span> Loss:
                    </span>
                    <div className="">
                      $ <span className="priceVal">1,000</span>
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
              <span className="text-xl font-extrabold">$ 1080</span>
            </div>

            <div className="btn flex justify-center">
              <a
                href="#"
                className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-all border-2 rounded-md"
              >
                get started now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
