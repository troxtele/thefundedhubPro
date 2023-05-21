import React from "react";
import { mainLogo } from "../ui/images";

export default function Footer() {
  return (
    <footer className="footer-gradient">
      <div className="container">
        <div className="wrapper grid gap-12">
          <div className="top-content grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="item flex gap-1">
              <div className="logo">
                <a href="#" className="main-logo flex gap-1 relative">
                  <img className="relative" src={mainLogo} alt="TheFundedHub" />
                </a>
              </div>
            </div>

            <div className="item">
              <div className="heading">
                <h4 className="font-bold">Headquarters:</h4>
              </div>

              <div className="info mt-1">
                <span className="uppercase text-sm">THE FUNDED HUB LTD</span>
                <span className="text-sm">
                  Honvéd utca 8. 1st floor, 1054 Budapest, Hungary.
                </span>
              </div>
            </div>

            <div className="item">
              <div className="heading">
                <h4 className="font-bold">Contact Us:</h4>
              </div>

              <div className="contact mt-1 grid gap-1">
                <div className="email flex items-center gap-2">
                  <div className="img">
                    <svg
                      className="text-all"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 14 16"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                      ></path>
                    </svg>
                  </div>

                  <a
                    className="break-all"
                    href="mailto: support@thefundedhub.com"
                  >
                    support@thefundedhub.com
                  </a>
                </div>

                <div className="insta flex items-center gap-2">
                  <div className="img">
                    <svg
                      className="text-all"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1.2em"
                      width="1.2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>

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

            <div className="item">
              <ul>
                <li>
                  <a href="#">Term and Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:block bottom-content text-center">
            <p className="text-xs font-normal">
              The Funded Hub is a brand owned by THE FUNDED HUB LTD (Company
              registration number: 14679272)
            </p>
            <p className="text-xs font-normal mt-2">
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
