import Head from "next/head";
import {
  AiFillVideoCamera,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Toggle from "@/components/Toggle/Toggle";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Khalil Merine Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="bg-white px-5 md:px-20 dark:bg-gray-900"
          onClick={isMenuOpen ? handleMenuToggle : () => {}}
        >
          <section className="min-h-screen ">
            {isMenuOpen ? (
              <Toggle
                setIsMenuOpen={setIsMenuOpen}
                handleMenuToggle={handleMenuToggle}
              ></Toggle>
            ) : (
              ""
            )}
            <Header
              darkMode={darkMode}
              setdarkMode={setdarkMode}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handleMenuToggle={handleMenuToggle}
            ></Header>
            <div className="hero text-center p-1">
              <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
                Khalil Merine
              </h2>
              <div className="main-image relative flex-col mx-auto bg-gradient-to-b from-teal-500 rounded-full w-100 h-80 mt-2 overflow-hidden md:h-96 md:w-96">
                <Image
                  className="w-80"
                  alt="Image"
                  src={deved}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl py-2 md:text-3xl text-black font-semibold dark:text-white">
                From Novice to Full-Stack: Documenting My Journey as a Developer
              </h3>
              <p className="text-md py-5 leading-8 text-black-800 md:text-xl max-w-lg mx-auto dark:text-white">
                Welcome to my portfolio, where software engineering and data
                science unite! As an ex-chemical engineer turned full-stack
                developer, I'm passionate about leveraging technology to solve
                complex problems. Let's build something great together!
              </p>
            </div>
            <div className="socials flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-teal-500 ">
              <a href="https://www.linkedin.com/in/khalil-merine/">
                <AiFillLinkedin />
              </a>{" "}
              <a href="https://github.com/merinekh/">
                <AiFillGithub />
              </a>{" "}
              <a href="https://www.loom.com/share/a0a80940626549599c2ec54cefb8d9f3">
                <AiFillVideoCamera />
              </a>
            </div>
          </section>

          <section>
            <div className="Services">
              <h3 className="text-3xl py-1 text-black font-semibold  dark:text-white">
                Service I offer
              </h3>
              <p className="dark:text-white text-md py-2 leading-8  text-black-800">
                I provide{" "}
                <span className="text-teal-500">
                  full-stack web and mobile app
                </span>{" "}
                development,{" "}
                <span className="text-teal-500">software maintenance</span>, and{" "}
                <span className="text-teal-500">
                  technical consulting services
                </span>{" "}
                to deliver high-quality solutions.
              </p>
              <p className="dark:text-white text-md py-2 leading-8 text-black-800">
                I deliver <span className="text-teal-500">customized</span>,{" "}
                <span className="text-teal-500">high-quality</span> solutions to
                meet my clients' specific needs.
              </p>
            </div>

            <div className="images md:flex gap-10 md:gap-3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image alt="Image" src={design} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Front-End Development
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-black-800 py-1">React & Next</p>
                <p className="text-black-800 py-1">Typescript & Javascript</p>
                <p className="text-black-800 py-1">HTML & CSS</p>
                <p className="text-black-800 py-1">Tailwind</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image alt="Image" src={code} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Back-End Development
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let's make it
                  a reality.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-black-800 py-1">Node.js</p>
                <p className="text-black-800 py-1">Express & Knex</p>
                <p className="text-black-800 py-1">MySQL</p>
                <p className="text-black-800 py-1">Oauth</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image
                  className="flex justify-center"
                  alt=""
                  src={consulting}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Data Science</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-black-800 py-1">Python & R</p>
                <p className="text-black-800 py-1">SQL</p>
                <p className="text-black-800 py-1">Scikit & Machine Learning</p>
                <p className="text-black-800 py-1">Statistic</p>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 text-black font-semibold dark:text-white ">
                Portofolio
              </h3>
              <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
                As a recent graduate of a bootcamp, I am{" "}
                <span className="text-teal-500"> eager to gain experience</span>{" "}
                and begin my career as a developer. While I may not have
                professional experience yet, I am equipped with the{" "}
                <span className="text-teal-500"> knowledge and skills</span> I
                acquired during my studies, and I am committed to applying them
                to <span className="text-teal-500"> real-world projects.</span>
              </p>
              <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
                I am open to opportunities that allow me to learn and grow as a
                professional in this field.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover w-100 h-100"
                  alt=""
                  layout="responsive"
                  src={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover w-100 h-100"
                  alt=""
                  layout="responsive"
                  src={web2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover w-100 h-100"
                  alt=""
                  layout="responsive"
                  src={web3}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover w-100 h-100"
                  alt=""
                  layout="responsive"
                  src={web6}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover w-100 h-100"
                  alt=""
                  layout="responsive"
                  src={web5}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover w-100 h-100"
                  alt=""
                  layout="responsive"
                  src={web4}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
