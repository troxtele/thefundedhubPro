import React from "react";
import Prices from "../components/Prices";
import Navbar from "../components/Navbar";
import Evaluation from "../components/Evaluation";

import {
  tick,
  growGraph,
  dashboard,
  discord,
  discordMobile,
  arrow,
  globe,
  mainLogo,
} from "../ui/images";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="absolute bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 bg-gradient-to-r from-bg-primary to-bg-primary opacity-50 blur-3xl  block lg:bottom-24 lg:-left-94 lg:h-[250px] lg:w-[250px] lg:-rotate-[140deg] lg:opacity-[0.35] xl:h-[450px] xl:w-[450px]"></div>

      {/* Main Section */}
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
                  Where veteran and rookie traders all come together to compete
                  in the Hub. Trade how you like, pass the challenge & get
                  funded with our capital..
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

      <Evaluation />
      <Benefits />


      <section className="dashboard md:max-w-  py-[2.5rem] md:py-[3.5rem][90%] md:m-auto">
        <div className="wrapper grid gap-12 justify-center items-center">
          <div className="heading grid gap-4 justify-center items-center md:text-center">
            <h2 className="text-[1.7rem] font-extrabold">
              DASHBOARD AND TOOLS
            </h2>
            <p className="text-base max-w-[55rem]">
              To easily track your performance, you will have access to your own
              personal Dashboard to
              <span className="font-bold">monitor</span> your trading data in
              <span className="font-bold">real-time</span>. This helps you to
              avoid breaching any of the trading rules.
            </p>
          </div>

          <div className="dashboard-img">
            <img
              className="md:max-w-[80%] border border-primary rounded-xl m-auto p-5"
              src={dashboard}
              alt="dashboard"
            />
          </div>
        </div>
      </section>

      {/* Prices */}
      <Prices />

      <section className="discord md:max-w-[9  py-[2.5rem] md:py-[3.5rem]0%] md:m-auto">
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
      </section>

      <section className="faq md:max-w-[90%]   py-[2.5rem] md:py-[3.5rem]md:m-auto">
        <div className="wrapper grid gap-12 justify-center items-center">
          <div className="heading grid gap-2 justify-center text-center">
            <h2 className="uppercase text-[1.7rem] font-extrabold">FAQ</h2>

            <p>
              If you don&apos;t find your answer in frequently asked questions
              don&apos;t hesitate contacting us at
            </p>

            <a
              href="mailto: support@thefundedhub.com"
              className="underline text-xl"
            >
              support@thefundedhub.com
            </a>
          </div>

          <div className="articles grid gap-5">
            <article className="border border-primary rounded-lg bg-gradient-to-r from-card-clrs-left to-card-clrs-right">
              <header className="flex justify-between cursor-pointer py-3 px-4">
                <h3 className="text-lg">
                  Do you offer <span className="font-bold">Leverage</span>?
                </h3>

                <div className="arrow flex justify-center items-center">
                  <img
                    className="max-w-[1.2rem] transform-gpu transition-all duration-300"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </header>

              <div className="content max-h-0 transition-all duration-300 overflow-hidden">
                <p className="mt-2 text-base pb-4 px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, saepe necessitatibus totam corrupti, inventore rerum
                  pariatur vero, nostrum impedit tenetur eligendi quibusdam.
                  Commodi itaque quam quidem ducimus quaerat neque quis?
                </p>
              </div>
            </article>

            <article className="border border-primary rounded-lg bg-gradient-to-r from-card-clrs-left to-card-clrs-right">
              <header className="flex justify-between cursor-pointer py-3 px-4">
                <h3 className="text-lg">
                  Can I hold trades over the
                  <span className="font-bold">weekend</span>?
                </h3>

                <div className="arrow flex justify-center items-center">
                  <img
                    className="max-w-[1.2rem] transform-gpu transition-all duration-300"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </header>

              <div className="content max-h-0 transition-all duration-300 overflow-hidden">
                <p className="mt-2 text-base pb-4 px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, saepe necessitatibus totam corrupti, inventore rerum
                  pariatur vero, nostrum impedit tenetur eligendi quibusdam.
                  Commodi itaque quam quidem ducimus quaerat neque quis?
                </p>
              </div>
            </article>

            <article className="border border-primary rounded-lg bg-gradient-to-r from-card-clrs-left to-card-clrs-right">
              <header className="flex justify-between cursor-pointer py-3 px-4">
                <h3 className="text-lg">
                  Can I have more than one challenge ?
                </h3>

                <div className="arrow flex justify-center items-center">
                  <img
                    className="max-w-[1.2rem] transform-gpu transition-all duration-300"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </header>

              <div className="content max-h-0 transition-all duration-300 overflow-hidden">
                <p className="mt-2 text-base pb-4 px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, saepe necessitatibus totam corrupti, inventore rerum
                  pariatur vero, nostrum impedit tenetur eligendi quibusdam.
                  Commodi itaque quam quidem ducimus quaerat neque quis?
                </p>
              </div>
            </article>

            <article className="border border-primary rounded-lg bg-gradient-to-r from-card-clrs-left to-card-clrs-right">
              <header className="flex justify-between cursor-pointer py-3 px-4">
                <h3 className="text-lg">
                  Is there any restrictions on trading?
                </h3>

                <div className="arrow flex justify-center items-center">
                  <img
                    className="max-w-[1.2rem] transform-gpu transition-all duration-300"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </header>

              <div className="content max-h-0 transition-all duration-300 overflow-hidden">
                <p className="mt-2 text-base pb-4 px-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla, saepe necessitatibus totam corrupti, inventore rerum
                  pariatur vero, nostrum impedit tenetur eligendi quibusdam.
                  Commodi itaque quam quidem ducimus quaerat neque quis?
                </p>
              </div>
            </article>
          </div>

          <div className="readmore flex justify-center">
            <a
              href="#"
              className="uppercase font-Montserrat text-sm font-bold py-2.5 px-8 border-primary border-2 rounded-xl"
            >
              read more
            </a>
          </div>
        </div>
      </section>

      <div className="hidden h-0 w-0 opacity-0 left-0 visible invisible"></div>

      <script src="./js/script.js"></script>
    </div>
  );
}
