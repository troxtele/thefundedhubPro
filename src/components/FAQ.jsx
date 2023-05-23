import React from "react";
import { arrow, tringle } from "../ui/images";

import SingleFAQ from "./SingleFAQ";

export default function FAQ() {
  const headings = [
    `Do you offer <span className="font-extrabold text-base"> Leverage</span>?`,
    'Can I hold trades over the <span className="font-extrabold text-base"> weekend</span>?',
    'Can I have <span className="font-extrabold text-base"> more</span> than one challenge ?',
    'Is there any <span className="font-extrabold text-base"> restrictions </span> on trading?',
  ];

  const paras = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti,",
  ];

  return (
    <section className="faq relative">
      <div className="container">
        <div className="wrapper grid gap-12 justify-center items-center">
          <div className="heading grid gap-2 justify-center text-center">
            <h2 className="font-medium text-[2rem] tracking-tight">Faq</h2>

            <div className="paras">
              <p className="font-codePro">
                If you don&apos;t find your answer in frequently asked questions
                don&apos;t hesitate contacting us at
              </p>

              <a
                href="mailto: support@thefundedhub.com"
                className="underline text-lg"
              >
                support@thefundedhub.com
              </a>
            </div>
          </div>

          <div className="articles md:max-w-[90%] m-auto grid gap-5">
            {/* {headings.map((heading, index) => (
              <SingleFAQ key={index} heading={heading} para={paras[index]} />
            ))} */}

            <article className="border border-all/30 rounded-lg">
              <header className="flex justify-between cursor-pointer py-3 px-4">
                <h3 className="text-base">
                  Do you offer
                  <span className="font-extrabold text-base"> Leverage</span>?
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
                <h3 className="text-base">
                  Can I hold trades over the
                  <span className="font-extrabold text-base"> weekend</span>?
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
                <h3 className="text-base">
                  Can I have{" "}
                  <span className="font-extrabold text-base"> more</span> than
                  one challenge ?
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
                <h3 className="text-base">
                  Is there any{" "}
                  <span className="font-extrabold text-base">
                    restrictions{" "}
                  </span>
                  on trading?
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
              className="uppercase font-Montserrat text-xs font-bold py-2 px-10 border-primary border-2 rounded-xl"
            >
              read more
            </a>
          </div>

          {/* Bottom Text */}
          <div className="bottom-texts grid justify-center items-center mt-12 mb-16 text-center">
            <h2 className="font-codePro text-3xl">Your Skills, Our Capital.</h2>
            <h4>TheFundedHub</h4>
          </div>
        </div>
      </div>

      {/* triangle */}
      <img
        className="triangle absolute -bottom-[18rem] -right-[15rem]  w-[40rem] rotate-[140deg] opacity-[0.25]"
        src={tringle}
        alt="tringle"
      />
    </section>
  );
}
