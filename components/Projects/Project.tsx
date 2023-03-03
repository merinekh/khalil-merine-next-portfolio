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
      <div className="flex flex-col flex-nowrap gap-10 py-10 md:flex-row md:flex-wrap">
        <div className="relative basis-1/3 flex-1">
          <div className="absolute h-full rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider lg:p-1 font-semibold">
              Air Canada Industry Project
            </h1>
            <p className="mx-2 text-xs lg:p-2 mb-2">
              I collaborated with a multidisiplinary team on enhancing customer
              experience for a diverse user base and increasing engagement.
            </p>
            <a
              href="https://www.github.com/merinekh/"
              target="_blank"
              className="m-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Take A Look at MyCode
            </a>{" "}
          </div>
          <div className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web1}
              />
            </div>
          </div>
        </div>
        <div className="relative basis-1/3 flex-1">
          <div className="absolute h-full rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider lg:p-1 font-semibold">DailyFit </h1>
            <p className="mx-2 text-xs lg:p-2 mb-2">
              I developed a single-page web app with React, Sass, and Bootstrap
              for personalized meal and workout planning. the back-end built
              with Node.js and Express to store user information and profiles.
              This project demonstrates my proficiency in full-stack development
              and ability to create a comprehensive platform for users seeking a
              personalized experience.
            </p>
            <a
              href="https://www.github.com/merinekh/my-fitness-app"
              target="_blank"
              className="m-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Take A Look at MyCode
            </a>{" "}
          </div>
          <div className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web2}
              />
            </div>
          </div>
        </div>
        <div className="relative basis-1/3 flex-1">
          <div className="absolute h-fit sm:h-full md:h-fit rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider lg:p-1 font-semibold">InStock </h1>
            <p className="mx-2 text-xs lg:p-2 mb-2">
              Collaborated with a team to build a full-stack web app for
              inventory and warehouse management, utilizing an API for seamless
              user experience. Demonstrates my ability to deliver effective
              solutions using the latest technologies.
            </p>
            <a
              href="https://www.github.com/merinekh/siar-instock-client"
              target="_blank"
              className="m-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Take A Look at MyCode
            </a>{" "}
          </div>
          <div className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web3}
              />
            </div>
          </div>
        </div>
        <div className="relative basis-1/3 flex-1">
          <div className="absolute h-fit sm:h-full md:h-fit rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider lg:p-1 font-semibold">Travel Site</h1>
            <p className="mx-2 text-xs lg:p-2 mb-2">
              Built the front-end for a travel agency, creating a visually
              appealing and user-friendly interface. Demonstrates my expertise
              in front-end development for the travel industry.
            </p>
            <a
              href="https://www.github.com/merinekh/"
              target="_blank"
              className="m-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Take A Look at MyCode
            </a>{" "}
          </div>
          <div className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </div>
        <div className="relative basis-1/3 flex-1">
          <div className="absolute h-full rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider lg:p-1 font-semibold">BrainFlix </h1>
            <p className="mx-2 text-xs lg:p-2 mb-2">
              I built a single-page clone of YouTube with server-side
              functionality, allowing for storage of video and user information.
              With dynamic changes to the video page upon selection, users can
              upload videos and login to their accounts with ease. This project
              demonstrates my proficiency in full-stack development and ability
              to create dynamic and functional web applications.
            </p>
            <a
              href="https://www.github.com/merinekh/khalil-merine-brainflix"
              target="_blank"
              className="m-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Take A Look at MyCode
            </a>{" "}
          </div>
          <div className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web5}
              />
            </div>
          </div>
        </div>
        <div className="relative basis-1/3 flex-1">
          <div className="absolute h-full rounded-lg inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <h1 className="tracking-wider lg:p-1 font-semibold">Bandsite </h1>
            <p className="mx-2 text-xs lg:p-2 mb-2">
              I built the front-end of a site similar to Ticketmaster, allowing
              users to easily view upcoming shows in their area and book
              tickets. This project showcases my expertise in front-end
              development and ability to create user-friendly interfaces for
              ticket booking websites.
            </p>
            <a
              href="https://www.github.com/merinekh/khalil-merine-bandsite"
              target="_blank"
              className="m-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-teal-500 dark:focus:ring-blue-800"
            >
              Take A Look at MyCode
            </a>{" "}
          </div>
          <div className="relative">
            <div className="h-100 flex flex-wrap content-center">
              <Image
                className="rounded-lg object-cover z-0 w-full h-100"
                alt=""
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
