import React from "react";
import { footerBg } from "../ui/images";

export default function Footer() {
  return (
    <footer className="footer relative bg-main-bg pt-12 pb-10">
      <div className="container">
        <div className="wrapper grid gap-12 ml-20">
          <div className="top-content grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="item flex gap-1">
              <div className="logo absolute -left-[10rem]">
                <img
                  className="w-[18rem] globe-rotate"
                  src={footerBg}
                  alt="TheFundedHub"
                />
              </div>

              <div className="tfh">
                <h2 className="text-3xl font-bold">
                  TheFunded <br /> Hub
                </h2>
              </div>
            </div>

            <div className="item -ml-10">
              <div className="heading">
                <h4 className="font-bold">Headquarters:</h4>
              </div>

              <div className="info grid">
                <span className="uppercase text-sm font-codePro">
                  THE FUNDED HUB LTD
                </span>
                <span className="text-sm font-codePro font-extrabold">
                  27 Old Gloucester Street, London, United Kingdom, WC1N 3AX
                </span>
              </div>
            </div>

            <div className="item ml-10">
              <div className="heading">
                <h4 className="font-bold">Contact Us:</h4>
              </div>

              <div className="contact mt-1 grid">
                <div className="email flex items-center gap-2">
                  <a
                    className="break-all"
                    href="mailto: support@thefundedhub.com"
                  >
                    support@thefundedhub.com
                  </a>
                </div>

                <div className="insta flex items-center gap-2">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fundedhub/"
                    rel="noreferrer"
                  >
                    @fundedhub
                  </a>
                </div>
              </div>
            </div>

            <div className="item flex justify-center">
              <ul>
                <li>
                  <a href="#" className="text-sm">
                    Term and Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:block bottom-content text-center">
            <p className="text-[0.6rem] font-normal">
              The Funded Hub is a brand owned by THE FUNDED HUB LTD (Company
              registration number: 14679272)
            </p>
            <p className="text-[0.6rem] font-normal mt-2">
              The Funded Hub is a brand owned by THE FUNDED HUB LTD. All
              information available on this site is intended solely for the
              study purposes related to trading on financial markets and does
              not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis or
              similar general recommendation regarding the trading of investment
              instruments. Trading in financial markets is a high-risk activity
              and it is advised not to risk more than one can afford to lose!
              THE FUNDED HUB LTD does not provide any of the investment services
              listed in the Capital Market Undertakings Act No. 256/2004 Coll.
              The information on this site is not directed at residents in any
              country or jurisdiction where such distribution or use would be
              contrary to local laws or regulations. Either The Funded Hub and
              THE FUNDED HUB LTD is not a broker and do not accept deposits. The
              offered technical solution for the The Funded Hub MT5 platforms
              and data feed are powered by our institutional liquidity
              providers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
