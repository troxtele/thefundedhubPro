import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { tringle } from "../ui/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { EffectCards } from "swiper";

export default function Evaluation() {
  return (
    <>
      <section className="evaluation relative  py-[2.5rem] md:py-[3.5rem]elative md:max-w-[90%] md:m-auto">
        <div className="container z-10 relative">
          <div className="wrapper">
            <div className="heading grid gap-4 justify-center items-center text-center">
              <h2 className="capitalize font-extrabold text-[1.7rem]">
                Evaluation Program
              </h2>

              <div className="paras">
                <p>
                  Prove your trading skills by passing our 2-Phase Challenge
                  Program.
                </p>
                <p>
                  Achieve the Profit Targets following simple Trading Objectives
                  and start trading with our capital.
                </p>
                <p>You earn up to 80% of the profits.</p>
              </div>
            </div>

            <div className="cards flex flex-wrap gap-8 md:gap-12 justify-center items-center mt-10">
              <Swiper
                breakpoints={{
                  576: {
                    // width: 576,
                    slidesPerView: 2,
                  },
                  768: {
                    // width: 768,
                    slidesPerView: 3,
                  },
                }}
                effect={"cards"}
                grabCursor={true}
                spaceBetween={30}
                className="mySwiper flex flex-wrap gap-8 md:gap-12 justify-center items-center w-full"
              >
                {/* card */}
                <SwiperSlide className="flex justify-center items-center">
                  <div className="card flex flex-col gap-4 py-6 px-1 rounded-2xl bg-main-bg/70 backdrop-blur-xl border-all/70 border max-w-[19rem] w-full">
                    <div className="card-top py-4 px-2 rounded-xl bg-primary flex gap-2 justify-between items-center text-main-bg">
                      <div className="left max-w-[10rem]">
                        <h4 className="font-semibold">Phase 1</h4>
                        <span className="text-sm flex font-codePro font-bold">
                          Starting your Evaluation process
                        </span>
                      </div>
                      <div className="right grid ">
                        <div className="percent">
                          <h3 className=" font-codeProBold text-3xl text-end">
                            10%
                          </h3>
                          <span className="flex justify-end text-xs font-codePro font-bold text-end">
                            Target Profit
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-middle grid gap-3 px-4 font-thin">
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">10</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">5%</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">10%</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        Trading Period up to
                        <span className="font-bold"> 45 days</span>
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        Registration fee
                      </p>
                    </div>

                    <div className="card-bottom mt-4 flex justify-center items-center text-center">
                      <a
                        href="#"
                        className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-primary border-4 rounded-md"
                      >
                        get started now
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                {/* card */}
                <SwiperSlide className="flex justify-center items-center">
                  <div className="card flex flex-col gap-4 py-6 px-1 rounded-2xl bg-main-bg/70 backdrop-blur-xl border-all/70 border max-w-[19rem] w-full">
                    <div className="card-top py-4 px-2 rounded-xl bg-primary flex gap-2 justify-between items-center text-main-bg">
                      <div className="left max-w-[10rem]">
                        <h4 className="font-semibold">Phase 2</h4>
                        <span className="text-sm flex font-codePro font-bold">
                          One step away to be our Funded Trader
                        </span>
                      </div>
                      <div className="right grid">
                        <div className="percent">
                          <h3 className=" font-codeProBold text-3xl text-end">
                            5%
                          </h3>
                          <span className="flex justify-end text-xs font-codePro font-bold text-end">
                            Target Profit
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-middle grid gap-3 px-4 font-thin">
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">10</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">5%</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">10%</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        Trading Period up to
                        <span className="font-bold"> 45 days</span>
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">-</p>
                    </div>

                    <div className="card-bottom mt-4 flex justify-center items-center text-center">
                      <a
                        href="#"
                        className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-primary border-4 rounded-md"
                      >
                        get started now
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                {/* card */}
                <SwiperSlide className="flex justify-center items-center">
                  <div className="card flex flex-col gap-4 py-6 px-1 rounded-2xl bg-main-bg/70 backdrop-blur-xl border-all/70 border max-w-[19rem] w-full">
                    <div className="card-top py-4 px-2 rounded-xl bg-primary flex gap-2 justify-between items-center text-main-bg">
                      <div className="left max-w-[10rem]">
                        <h4 className="font-semibold">Funded</h4>
                        <span className="text-sm flex font-codePro font-bold">
                          Trade with our funds in the Hub
                        </span>
                      </div>
                      <div className="right grid">
                        <div className="percent">
                          <h3 className=" font-codeProBold text-3xl text-end">
                            70/30
                          </h3>
                          <span className="flex justify-end text-xs font-codePro font-bold text-end">
                            Profit Share
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-middle grid gap-3 px-4 font-thin">
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">NO</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">5%</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        <span className="font-bold">10%</span> minimum Trading
                        Days
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        Trading Period -
                        <span className="font-bold capitalize">Indefinite</span>
                      </p>
                      <p className="text-[1.05rem] font-normal font-codePro">
                        Refundable registration fee
                      </p>
                    </div>

                    <div className="card-bottom mt-4 flex justify-center items-center text-center">
                      <a
                        href="#"
                        className="uppercase font-Montserrat text-xs font-bold py-2 px-4 border-primary border-4 rounded-md"
                      >
                        get started now
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* triangle */}
        <img
          className="triangle absolute -top-[2rem] -right-[40rem]  w-[65rem] rotate-[90deg] opacity-[0.32]"
          src={tringle}
          alt="tringle"
        />
      </section>
    </>
  );
}
