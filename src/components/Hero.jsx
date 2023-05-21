import React from "react";

import { globe } from "../ui/images";

export default function Hero() {
  return (
    <main className="main pt-24 md:pt-32  py-[2.5rem] md:py-[3.5rem]">
      <div className="container relative">
        <div className="wrapper relative grid grid-cols-2 justify-center items-center gap-6 pt-10">
          {/* Left content */}
          <div className="left-content grid gap-10">
            <div className="heading grid gap-2 justify-end items-center md:text-center font-medium text-end">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-end">
                Get Funded and trade our capital.
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-end">
                We take the risk.
              </h2>
            </div>

            <div className="botton-content font-Montserrat grid justify-end w-full gap-10 max-w-4xl md:text-right">
              <p className="font-medium text-base-[1.1rem] max-w-[30rem]">
                Where veteran and rookie traders all come together to compete in
                the Hub. Trade how you like, pass the challenge & get funded
                with our capital..
              </p>

              <div className="btn flex justify-end font-extrabold flex-shrink-0">
                <a
                  href="#"
                  className="uppercase font-base flex justify-center items-center py-2 px-4 border-2 border-white rounded-lg whitespace-nowrap text-[0.9rem]"
                >
                  get started now
                </a>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="right-content flex justify-center">
            <div className="globe-img">
              <img className="max-w-[30rem] w-full" src={globe} alt="globe" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
