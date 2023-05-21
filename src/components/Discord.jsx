import React from "react";

import { discord, discordMobile } from "../ui/images";

export default function Discord() {
  return (
    <section className="discord">
      <div className="container">
        <div className="wrapper flex flex-col xs:flex-row sm:grid grid-cols-2 justify-center items-center gap-6">
          <div className="left flex w-full h-full xs:justify-center items-center">
            <div className="img flex">
              <img
                className="w-[20rem] hidden sm:block text-red-600"
                src={discord}
                alt="discord"
              />

              <img
                className="max-w-[6rem] w-full sm:hidden"
                src={discordMobile}
                alt=""
              />
            </div>
          </div>

          <div className="right grid gap-4">
            <div className="heading hidden sm:block">
              <h2 className="text-[1.7rem] font-extrabold">JOIN OUR DISCORD</h2>
            </div>
            <p>
              Where veteran and rookie traders all come together to talk about
              the markets and keep up to date with all annoucements.
            </p>
            <div className="mt-2 btn uppercase flex">
              <a
                href="#"
                className="uppercase font-Montserrat text-sm font-bold py-2.5 px-8 border-primary border-2 rounded-xl"
              >
                join our discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
