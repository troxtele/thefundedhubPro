import React from "react";
import { arrow } from "../ui/images";

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
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
            <article className="border border-all/30 rounded-lg">
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

            <article className="border border-all/30 rounded-lg ">
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

            <article className="border border-all/30 rounded-lg ">
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

            <article className="border border-all/30 rounded-lg ">
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
      </div>
    </section>
  );
}