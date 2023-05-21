import React from "react";
import { tick, growGraph } from "../ui/images";

export default function Benefits() {
  return (
    <section className="benefits md:max-w-[py-[2.5rem] md:py-[3.5rem]90%] md:m-auto">
      <div className="container">
        <div className="wrapper grid gap-12">
          <div className="heading grid gap-4">
            <h2 className="capitalize font-extrabold text-[1.7rem]">
              The Funded Hub Benefits
            </h2>

            <div className="paras">
              <p>
                At TheFundedHub we care about your success and provide you with
                the latest techonologies, a great trading environment and
                generous funding.
              </p>
            </div>
          </div>

          <div className="Contents w-full grid gap-10">
            {/* Content Top
             */}
            <div className="content-top flex gap-20">
              <div className="left capitalize grid gap-5">
                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[1.9rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span>Weekend Trading</span>
                </div>

                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[1.9rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span>Overnight Trading</span>
                </div>

                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[1.9rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span>News Trading</span>
                </div>
              </div>

              <div className="right grid gap-4">
                <div className="top flex items-center gap-4">
                  <div className="img max-w-[3rem]">
                    <img src={growGraph} alt="graph" />
                  </div>

                  <div className="text grid">
                    <h4 className="font-bold text-xl">Scale your Account</h4>
                    <div className="price">Up to 600,000$</div>
                  </div>
                </div>

                <div className="bottom">
                  <p>
                    Achieve a profit of 10% or more within a 4 month period and
                    if at least 2 of those 4 months were profitable, we will
                    increase your account size by 25% of the original account
                    size.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="content-bottom grid grid-cols-2 justify-center items-center gap-12 mt-10">
              {/* left */}
              <div className="left">
                <h2 className="capitalize font-extrabold text-[1.7rem]">
                  Why trade with The Funded Hub?
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-5">
                  <p>
                    We are partnering up directly with
                    <span className="font-bold"> liquidity providers </span>to
                    offer you the best trading conditions.
                  </p>

                  <p>
                    Our accounts will provide you with an
                    <span className="font-bold"> excellent</span> environment
                    where you can start to trade from 0.0 pips!
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="right text-lg font-black flex justify-center items-center gap-5">
                <div className="items grid grid-cols-2 justify-center items-center gap-5">
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-8 py-2.5 border-primary border rounded-2xl">
                    Metatrader 5
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-8 py-2.5 border-primary border rounded-2xl">
                    <span>
                      <span className=" font-codeProBold">Low</span> Slippage
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-8 py-2.5 border-primary border rounded-2xl">
                    <span>
                      <span className=" font-codeProBold">Fast</span> Payout
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-8 py-2.5 border-primary border rounded-2xl">
                    <span>
                      <span className=" font-codeProBold">Low</span> Spread
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
