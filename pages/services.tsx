import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function services() {
  return (
    <>
      {" "}
      <div className="Services">
        <h3 className="text-3xl py-1 text-black font-semibold  dark:text-white">
          Service I offer
        </h3>
        <p className="dark:text-white text-md py-2 leading-8  text-black-800">
          I provide{" "}
          <span className="text-teal-500">full-stack web and mobile app</span>{" "}
          development,{" "}
          <span className="text-teal-500">software maintenance</span>, and{" "}
          <span className="text-teal-500">technical consulting services</span>{" "}
          to deliver high-quality solutions.
        </p>
        <p className="dark:text-white text-md py-2 leading-8 text-black-800">
          I deliver <span className="text-teal-500">customized</span>,{" "}
          <span className="text-teal-500">high-quality</span> solutions to meet
          my clients' specific needs.
        </p>
      </div>
      <div className="images md:flex gap-10 md:gap-3">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image alt="Image" src={design} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Front-End Development
          </h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
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
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-black-800 py-1">Node.js</p>
          <p className="text-black-800 py-1">Express & Knex</p>
          <p className="text-black-800 py-1">MySQL</p>
          <p className="text-black-800 py-1">Oauth</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image className="flex justify-center" alt="" src={consulting} />
          <h3 className="text-lg font-medium pt-8 pb-2">Data Science</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-black-800 py-1">Python & R</p>
          <p className="text-black-800 py-1">SQL</p>
          <p className="text-black-800 py-1">Scikit & Machine Learning</p>
          <p className="text-black-800 py-1">Statistic</p>
        </div>
      </div>
    </>
  );
}
