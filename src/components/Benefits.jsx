import { tick, growGraph, tringle } from "../ui/images";

export default function Benefits() {
  return (
    <section className="benefits relative md:max-w-[py-[2.5rem] md:py-[3.5rem]90%] md:m-auto">
      <div className="container">
        <div className="wrapper grid gap-12">
          <div className="heading grid gap-4">
            <h2 className="capitalize font-extrabold text-[1.7rem]">
              The Funded Hub Benefits
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
            <div className="content-top flex flex-col md:flex-row gap-10 md:gap-20">
              <div className="left capitalize grid gap-5">
                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[1.9rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span className="font-normal font-codePro text-[1.2rem]">
                    Weekend Trading
                  </span>
                </div>

                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[1.9rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span className="font-normal font-codePro text-[1.2rem]">
                    Overnight Trading
                  </span>
                </div>

                <div className="trand whitespace-nowrap flex justify-start items-center gap-5">
                  <div className="tick w-[1.9rem]">
                    <img src={tick} alt="tick" />
                  </div>
                  <span className="font-normal font-codePro text-[1.2rem]">
                    News Trading
                  </span>
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
            <div className="content-bottom grid md:grid-cols-2 justify-center items-center gap-12 mt-6 md:mt-10">
              {/* left */}
              <div className="left">
                <h2 className="capitalize font-extrabold text-[1.7rem]">
                  Why trade with The Funded Hub?
                </h2>
                {/* Paras */}
                <div className="paras grid gap-5 mt-5">
                  <p className="font-codePro text-base">
                    We are partnering up directly with
                    <span className="font-extrabold text-inherit">
                      {" "}
                      liquidity providers{" "}
                    </span>
                    to offer you the best trading conditions.
                  </p>

                  <p className="font-codePro text-base">
                    Our accounts will provide you with an
                    <span className="font-extrabold text-inherit">
                      {" "}
                      excellent
                    </span>{" "}
                    environment where you can start to trade from 0.0 pips!
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="right relative z-10 text-lg font-black flex justify-start md:justify-center items-center gap-5">
                <div className="items grid xs:grid-cols-2 justify-center items-center gap-5 font-codeProLight">
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-4 xs:px-5 sm:px-8 py-1 xs:py-1.5 sm:py-2.5 border-primary border rounded-2xl">
                    <span className="font-codePro text-[0.9rem] sm:text-[1.1rem]">
                      Metatrader 5
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-4 xs:px-5 sm:px-8 py-1 xs:py-1.5 sm:py-2.5 border-primary border rounded-2xl">
                    <span className="font-codePro text-[0.9rem] sm:text-[1.1rem]">
                      <span className="text-[0.9rem] sm:text-[1.1rem] font-codeProBold">Low</span> Slippage
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-4 xs:px-5 sm:px-8 py-1 xs:py-1.5 sm:py-2.5 border-primary border rounded-2xl">
                    <span className="font-codePro text-[0.9rem] sm:text-[1.1rem] ">
                      <span className="text-[0.9rem] sm:text-[1.1rem] font-codeProBold">Fast</span> Payout
                    </span>
                  </div>
                  {/* Item */}
                  <div className="item bg-main-bg flex justify-center px-4 xs:px-5 sm:px-8 py-1 xs:py-1.5 sm:py-2.5 border-primary border rounded-2xl">
                    <span className="font-codePro text-[0.9rem] sm:text-[1.1rem] ">
                      <span className="text-[0.9rem] sm:text-[1.1rem] font-codeProBold">Low</span> Spread
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
        className="triangle absolute -bottom-[25rem] -right-[20rem]  w-[65rem] rotate-[80deg] opacity-[0.09]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
