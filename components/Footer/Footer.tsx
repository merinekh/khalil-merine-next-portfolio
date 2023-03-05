import React from "react";
import {
  AiFillVideoCamera,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillCalendarEventFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="lg:py-4">
      <footer className="p-2 bg-white  dark:bg-gray-900 ">
        <a href="/" className="flex items-center ">
          <h1 className="text-xl font-burtons dark:text-white lg:text-3xl">
            developedbyKM
          </h1>
        </a>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center lg:text-xl dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Khalil Merine{" "}
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 items-center sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/khalil-merine/"
              target="_blank"
              className="text-gray-500 text-4xl hover:text-gray-900 dark:hover:text-teal-500"
            >
              <AiFillLinkedin />
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              href="https://github.com/merinekh"
              target="_blank"
              className="text-gray-500 text-4xl hover:text-gray-900 dark:hover:text-teal-500"
            >
              <AiFillGithub />

              <span className="sr-only">Gihub page</span>
            </a>
            <a
              href="mailto: merinekh@gmail.com"
              className="text-gray-500 text-4xl hover:text-gray-900 dark:hover:text-teal-500"
            >
              <AiFillMail />
              <span className="sr-only">Send Me An Email</span>
            </a>
            <a
              href="https://www.loom.com/share/a0a80940626549599c2ec54cefb8d9f3"
              target="_blank"
              className="text-gray-500 text-4xl hover:text-gray-900 dark:hover:text-teal-500"
            >
              <AiFillVideoCamera />
              <span className="sr-only">Loom Presentation</span>
            </a>
            <a
              href="https://calendly.com/merinekh/30min"
              target="_blank"
              className="text-gray-500 text-3xl hover:text-gray-900 dark:hover:text-teal-500"
            >
              <BsFillCalendarEventFill />
              <span className="sr-only">Calendly Booking</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
