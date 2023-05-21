import React from "react";

import { dashboard } from "../ui/images";

export default function Dashboard() {
  return (
    <section className="dashboard ">
      <div className="wrapper grid gap-12 justify-center items-center">
        <div className="heading grid gap-4 justify-center items-center md:text-center">
          <h2 className="text-[1.7rem] font-extrabold">Dashboard and Tools</h2>
          <p className="text-base max-w-[55rem]">
            To easily track your performance, you will have access to your own
            personal Dashboard to monitor your trading data in real-time. This
            helps you to avoid breaching any of the trading rules.
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
  );
}
