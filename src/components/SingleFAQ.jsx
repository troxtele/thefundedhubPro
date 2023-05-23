import React from "react";

import { arrow } from "../ui/images";

export default function SingleFAQ({ heading, para }) {
  return (
    <article className="border border-all/30 rounded-lg">
      <header className="flex justify-between cursor-pointer py-3 px-4">
        <h3 className="text-base">{heading}</h3>

        <div className="arrow flex justify-center items-center">
          <img
            className="max-w-[1.2rem] transform-gpu transition-all duration-300"
            src={arrow}
            alt="arrow"
          />
        </div>
      </header>

      <div className="content max-h-0 transition-all duration-300 overflow-hidden">
        <p className="mt-2 text-base pb-4 px-4">{para}</p>
      </div>
    </article>
  );
}
