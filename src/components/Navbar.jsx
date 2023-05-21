import React from "react";

import { mainLogo } from "../ui/images";

export default function Navbar() {
  return (
    <header className="z-50 fixed left-0 right-0 bg-main-bg/80 backdrop-blur-3xl transition-all duration-300 border-b border-transparent py-4">
      <div className="container">
        <div className="wrapper flex justify-between">
          <a href="#" className="main-logo flex gap-1 relative">
            <img
              className="max-w-[11rem] relative"
              src={mainLogo}
              alt="TheFundedHub"
            />
          </a>

          <nav className="nav-links text-white font-thin flex justify-center items-center">
            <ul className="flex gap-6 justify-center items-center text-sm">
              <li>
                <a
                  href="#"
                  className="flex font-semibold border-b border-transparent hover:border-white transition-all duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex font-semibold border-b border-transparent hover:border-white transition-all duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex font-semibold border-b border-transparent hover:border-white transition-all duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex font-semibold text-main-bg bg-primary rounded-lg py-1.5 px-10 -leading-2"
                >
                  Accedi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex font-semibold border-2 border-primary rounded-lg py-1.5 px-10 -leading-2"
                >
                  Free Trial
                </a>
              </li>
            </ul>

            <div className="menu-bar hidden">
              <svg
                className="cursor-pointer"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </div>
          </nav>

          {/* mobile version */}
          <div className="darkbg hidden absolute inset-0 h-full w-full bg-black/50 backdrop-blur-md z-[77] transition-all duration-500 opacity-0 invisible"></div>

          <div className="cross hidden">
            <svg
              className="text-white opacity-0 fixed right-8 top-8 z-[88] transition-all duration-500"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              height="2.2em"
              width="2.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <nav className="mobile-nav hidden absolute -left-full h-screen w-[60%] bg-main-bg z-[99] transition-all duration-500 invisible ">
            <div className="wrapper">
              <div className="logo block pt-6 px-6">
                <img
                  className="w-full max-w-[12rem]"
                  src={mainLogo}
                  alt="logo"
                />
              </div>

              <ul className="flex flex-col justify-start text-sm mt-6">
                <li className="">
                  <a
                    href="#"
                    className="flex py-3 pl-6 w-full font-semibold border-y border-light/50 transition-all duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="flex py-3 pl-6 w-full font-semibold border-b border-light/50 transition-all duration-300"
                  >
                    CONTACT US
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="flex py-3 pl-6 w-full font-semibold border-b border-light/50 transition-all duration-300"
                  >
                    BLOG
                  </a>
                </li>
                <li className="flex mt-4 pl-6">
                  <a
                    href="#"
                    className="flex font-semibold border-2 border-all rounded py-1 px-3 -leading-2"
                  >
                    MEMBER AREA
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
