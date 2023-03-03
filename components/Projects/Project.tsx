import React from "react";
import Image from "next/image";

import web1 from "../../public/web1.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web2 from "../../public/web2.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Project() {
  return (
    <>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="relative basis-1/3 flex-1">
          <a className="absolute rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
            <button
              type="button"
              className=" items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>{" "}
          </a>
          <a href="#" className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web1}
              />
            </div>
          </a>
        </div>
        <div className="relative basis-1/3 flex-1">
          <a className="absolute rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
            <button
              type="button"
              className=" items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>{" "}
          </a>
          <a href="#" className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web2}
              />
            </div>
          </a>
        </div>

        <div className="relative basis-1/3 flex-1">
          <a className="absolute rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
            <button
              type="button"
              className=" items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>{" "}
          </a>
          <a href="#" className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web3}
              />
            </div>
          </a>
        </div>

        <div className="relative basis-1/3 flex-1">
          <a className="absolute rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
            <button
              type="button"
              className=" items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>{" "}
          </a>
          <a href="#" className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web6}
              />
            </div>
          </a>
        </div>

        <div className="relative basis-1/3 flex-1">
          <a className="absolute rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
            <button
              type="button"
              className=" items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>{" "}
          </a>
          <a href="#" className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web5}
              />
            </div>
          </a>
        </div>

        <div className="relative basis-1/3 flex-1">
          <a className="absolute rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
            <button
              type="button"
              className=" items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Resume
            </button>{" "}
          </a>
          <a href="#" className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web4}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
