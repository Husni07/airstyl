"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
    <header className="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link
              href="/"
              className="block py-6 text-3xl font-bold text-transparent playfair-display bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text"
            >
              STAYL
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute block right-4 lg:hidden"
            >
              <span className="transition duration-300 ease-in-out origin-top-left hamburger-line text-slate-400"></span>
              <span className="transition duration-300 ease-in-out hamburger-line"></span>
              <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-slate-200 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    href="/"
                    className="flex py-2 mx-8 text-lg font-semibold text-purple-400 open-sans group-hover:text-purple-600"
                  >
                    Beranda
                  </Link>
                </li>

                <li className="relative group">
                  <button className="flex py-2 mx-8 text-lg font-semibold text-purple-400 open-sans group group-hover:text-purple-600">
                    Property
                    <span className="hidden ml-2 transition duration-300 lg:block group-hover:-rotate-180">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>
                  <ul className="top-0 ml-3 transform rounded-lg lg:absolute lg:hidden lg:left-1/2 lg:-translate-x-1/2 lg:w-72 lg:group-hover:block bg-slate-200 lg:py-2 w-fit lg:top-full">
                    <li>
                      <Link
                        href="villa-casa-grande"
                        className="block mx-8 text-purple-400 hover:translate-x-2 duration-100 open-sans lg:py-2 hover:text-purple-600"
                      >
                        Villa Exclusive Casa Grande
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="pesona-sintuk"
                        className="block mx-8 text-purple-400 hover:translate-x-2 duration-100 open-sans lg:py-2 hover:text-purple-600"
                      >
                        Villa Pesona Sintuk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="griya-merapi"
                        className="block mx-8 text-purple-400 hover:translate-x-2 duration-100 open-sans lg:py-2 hover:text-purple-600"
                      >
                        Griya Merapi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="griya-papringan"
                        className="block mx-8 text-purple-400 hover:translate-x-2 duration-100 open-sans lg:py-2 hover:text-purple-600"
                      >
                        Griya Papringan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="griya-iromejan"
                        className="block mx-8 text-purple-400 hover:translate-x-2 duration-100 open-sans lg:py-2 hover:text-purple-600"
                      >
                        Griya Iromejan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="griya-menjangan"
                        className="block mx-8 text-purple-400 hover:translate-x-2 duration-100 open-sans lg:py-2 hover:text-purple-600"
                      >
                        Griya Menjangan
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="group lg:hidden">
                  <Link
                    href="#"
                    className="flex py-2 mx-8 text-lg font-semibold text-purple-400 open-sans group-hover:text-purple-600"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden px-4 lg:flex">
            <Link
              href="https://wa.me/6281292128595"
              target="_blank"
              className="w-1/2 px-6 py-3 mr-4 text-center text-white transition duration-300 ease-in-out rounded-full open-sans sm:w-fit bg-gradient-to-br from-purple-500 via-purple-500 to-purple-500 hover:bg-purple-200 hover:shadow-lg hover:opacity-80"
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
