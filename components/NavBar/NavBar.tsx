import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBar({ darkMode, setdarkMode, isMenuOpen, handleMenuToggle }: any) {
  const router = useRouter();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto md:flex-nowrap">
        <div className="flex justify-between w-full md:order-2 md:w-40">
          <button
            type="button"
            onClick={handleMenuToggle}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                className="cursor-pointer te dark:text-white"
                onClick={() => setdarkMode(!darkMode)}
              />
              {/* {!darkMode ? "En" : "Fr"} */}
            </li>
          </ul>

          <button
            type="button"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
          >
            Resume
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={
                  router.pathname == "/"
                    ? "text-teal-500 " +
                      "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 "
                    : "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 dark:text-white"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  router.pathname == "/about"
                    ? "text-teal-500 " +
                      "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 "
                    : "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 dark:text-white"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={
                  router.pathname == "/services"
                    ? "text-teal-500 " +
                      "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 "
                    : "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 dark:text-white"
                }
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={
                  router.pathname == "/portfolio"
                    ? "text-teal-500 " +
                      "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 "
                    : "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 dark:text-white"
                }
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  router.pathname == "/contact"
                    ? "text-teal-500 " +
                      "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0"
                    : "block py-2 pl-3 pr-4 text-gray-700 bg-teal-500 rounded md:bg-transparent md:p-0 dark:text-white"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
