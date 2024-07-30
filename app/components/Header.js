"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    const onScroll = () => {
      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener("scroll", onScroll);

    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    const onClick = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    //klik diluar hamburger
    window.addEventListener("click", function (e) {
      if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    });

    hamburger.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      hamburger.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="/"
              className="font-bold text-2xl  bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent block py-6"
            >
              STAYL
            </Link>
            <Link
              href="/"
              className="font-bold text-2xl hidden bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent py-6"
            >
              Husni
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-slate-300 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href="#home"
                    className="text-base text-gray-600 py-2 mx-8 flex group-hover:text-pink-600 font-semibold"
                  >
                    Beranda
                  </Link>
                </li>

                <li className="group relative">
                <button className="text-base text-gray-600 group py-2 mx-8 flex font-semibold group-hover:text-pink-600">
                    Property<span className="hidden lg:block group-hover:rotate-180 ml-2 transition duration-300">𖤂</span>
                  </button>
                  <ul className="ml-3 lg:absolute lg:hidden lg:left-1/2 transform lg:-translate-x-1/2 lg:w-72  lg:group-hover:block bg-slate-300 lg:py-2 w-fit top-0 rounded-lg lg:top-full">
                    <li>
                      <Link
                        href="#page1"
                        className="block text-gray-600 mx-8 lg:py-2 hover:text-pink-600"
                      >
                        Villa exclusive casa Grande
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#page2"
                        className="block text-gray-600 mx-8 lg:py-2 hover:text-pink-600"
                      >
                        Villa pesona sintuk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#page2"
                        className="block text-gray-600 mx-8 lg:py-2 hover:text-pink-600"
                      >
                        Griya Merapi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#page3"
                        className="block text-gray-600 mx-8 lg:py-2 hover:text-pink-600"
                      >
                        Griya Papringan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#page3"
                        className="block text-gray-600 mx-8 lg:py-2 hover:text-pink-600"
                      >
                        Griya Iromejan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#page3"
                        className="block text-gray-600 mx-8 lg:py-2 hover:text-pink-600"
                      >
                        Griya Menjangan
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="group">
                  <Link
                    href="#"
                    className="text-base text-gray-600 py-2 mx-8 flex group-hover:text-pink-600 font-semibold"
                  >
                    Galery
                  </Link>
                </li>
                <li className="group lg:hidden">
                  <Link
                    href="#"
                    className="text-base text-gray-600 py-2 mx-8 flex group-hover:text-pink-600 font-semibold"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-4 hidden lg:flex">
            <Link
              href="https://wa.me/6285866242248"
              target="_blank"
              className="px-6 py-3 w-1/2 text-center sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
