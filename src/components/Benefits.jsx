import { tick, growGraph, tringle } from "../ui/images";

export default function Benefits() {
  return (
    <section className="benefits relative md:max-w-[py-[2.5rem] md:py-[3.5rem] md:m-auto">
      <div className="container">
        <div className="wrapper grid gap-12">
          <div className="heading grid gap-4">
            <h2 className="capitalize font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
              The Funded Hub{" "}
              <span className="text-primary md:text-inherit font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                Benefits
              </span>
            </h2>

            <div className="paras max-w-[55rem]">
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
            <div className="content-top relative z-10 flex flex-col md:flex-row gap-10 md:gap-24">
              {/* Left */}
              <div className="left hidden capitalize md:grid gap-5">
                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[2.2rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span className="font-normal font-codePro text-[1.3rem]">
                    Weekend Trading
                  </span>
                </div>

                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[2.2rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span className="font-normal font-codePro text-[1.3rem]">
                    Overnight Trading
                  </span>
                </div>

                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[2.2rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span className="font-normal font-codePro text-[1.3rem]">
                    News Trading
                  </span>
                </div>
              </div>

              {/* Mobile version */}
              <div className="mobile-version grid md:hidden sm:grid-cols-2 gap-8">
                {/* Left */}
                <div className="left md:hidden capitalize grid gap-4 border-2 border-primary/20   rounded-xl">
                  <div className="heading bg-primary text-black w-full mt-4 px-4 py-3 font-bold font-codePro text-[1.1rem] rounded-lg">
                    <h5>Flexible Rules</h5>
                  </div>
                  <div className="trands grid gap-7 px-4 pb-6">
                    <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                      <div className="tick w-[1.8rem] md:w-[2.2rem]">
                        <img src={tick} alt="tick" />
                      </div>
                      <span className="font-normal font-codePro text-base">
                        <span className="font-bold font-codePro text-base">
                          Weekend
                        </span>{" "}
                        Trading
                      </span>
                    </div>

                    <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                      <div className="tick w-[1.8rem]">
                        <img src={tick} alt="tick" />
                      </div>
                      <span className="font-normal font-codePro text-base">
                        <span className="font-bold font-codePro text-base">
                          Overnight
                        </span>{" "}
                        Trading
                      </span>
                    </div>

                    <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                      <div className="tick w-[1.8rem]">
                        <img src={tick} alt="tick" />
                      </div>
                      <span className="font-normal font-codePro text-base">
                        <span className="font-bold font-codePro text-base">
                          News
                        </span>{" "}
                        Trading
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="right md:hidden capitalize grid gap-4 border-2 border-primary/20   rounded-xl">
                  <div className="heading bg-primary text-black w-full mt-4 px-4 py-3 font-bold font-codePro text-[1.1rem] rounded-lg">
                    <h5>Broker</h5>
                  </div>
                  <div className="trands grid gap-7 px-4 pb-6">
                    <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                      <div className="tick w-[1.8rem] md:w-[2.2rem]">
                        <img src={tick} alt="tick" />
                      </div>
                      <span className="font-normal font-codePro text-base">
                        <span className="font-bold font-codePro text-base">
                          0.2 Pips
                        </span>{" "}
                        avg spread
                      </span>
                    </div>

                    <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                      <div className="tick w-[1.8rem]">
                        <img src={tick} alt="tick" />
                      </div>
                      <span className="font-normal font-codePro text-base">
                        low{" "}
                        <span className="font-bold font-codePro text-base">
                          Slippage
                        </span>
                      </span>
                    </div>

                    <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                      <div className="tick w-[1.8rem]">
                        <img src={tick} alt="tick" />
                      </div>
                      <span className="font-normal font-codePro text-base">
                        <span className="font-bold font-codePro text-base">
                          Metatrader
                        </span>{" "}
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right grid gap-4 p-5 md:p-0 border-2 md:border-none border-primary/20 rounded-xl">
                <div className="top flex items-center gap-4">
                  <div className="img max-w-[4rem] opacity-90">
                    <img src={growGraph} alt="graph" />
                  </div>

                  <div className="text grid">
                    <h4 className=" font-codeProBold text-xl">
                      Scale your Account
                    </h4>
                    <div className="price text-xl">Up to 600,000$</div>
                  </div>
                </div>

                <div className="bottom">
                  <p className="font-normal font-codePro text-[1.2rem] max-w-[50rem]">
                    Achieve a profit of 10% or more within a 4 month period and
                    if at least 2 of those 4 months were profitable, we will
                    increase your account size by 25% of the original account
                    size.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="content-bottom relative z-10 grid md:grid-cols-2 justify-center items-center gap-8 mt-6 md:mt-[6rem]">
              {/* left */}
              <div className="left">
                <h2 className="capitalize font-medium text-[2rem] tracking-tight">
                  <span className="text-primary md:text-inherit font-medium text-3xl xs:text-4xl md:text-[2rem] tracking-tight">
                    Why
                  </span>{" "}
                  trade with The Funded Hub?
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-5">
                  <p className="font-codePro">
                    We are partnering up directly with
                    <span className="font-codeProBold text-inherit">
                      {" "}
                      liquidity providers{" "}
                    </span>
                    to offer you the best trading conditions.
                  </p>

                  <p className="font-codePro">
                    Our accounts will provide you with an
                    <span className="font-codeProBold text-inherit">
                      {" "}
                      excellent
                    </span>{" "}
                    environment where you can start to trade from 0.0 pips!
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="right relative z-10 text-lg font-black md:flex justify-start items-center gap-5">
                <div className="items grid xs:grid-cols-2 justify-center items-center gap-5 font-codeProLight">
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-4 xs:px-5 sm:px-12 py-1 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[1.2rem] sm:text-[1.2rem]">
                      Metatrader 5
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-4 xs:px-5 sm:px-12 py-1 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[1.2rem] sm:text-[1.2rem]">
                      <span className="text-[1.2rem] sm:text-[1.2rem] font-codeProBold">
                        Low
                      </span>{" "}
                      Slippage
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-4 xs:px-5 sm:px-12 py-1 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[1.2rem] sm:text-[1.2rem]">
                      <span className="text-[1.2rem] sm:text-[1.2rem] font-codeProBold">
                        Fast
                      </span>{" "}
                      Payout
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg/20 flex justify-center px-4 xs:px-5 sm:px-12 py-1 xs:py-3 sm:py-4 border-primary/5 md:border-primary/20 border rounded-2xl">
                    <span className="font-thin text-[1.2rem] sm:text-[1.2rem]">
                      <span className="text-[1.2rem] sm:text-[1.2rem] font-codeProBold">
                        Low
                      </span>{" "}
                      Spread
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -top-[10rem] -left-[18%]  w-[40rem] rotate-[80deg] opacity-[0.1]"
        src={tringle}
        alt="tringle"
      />
      <img
        className="triangle absolute -bottom-[25rem] -right-[20rem]  w-[65rem] rotate-[80deg] opacity-[0.09]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
