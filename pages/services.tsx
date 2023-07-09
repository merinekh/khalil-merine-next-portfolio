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
          With a focus on customization, I deliver{" "}
          <span className="text-teal-500">customized</span>,{" "}
          <span className="text-teal-500">high-quality</span> solutions to meet
          your <span className="text-teal-500">specific needs.</span>
        </p>
      </div>
      <div className="images  md:flex  gap-10 md:gap-5 lg:gap-10">
        <div className="text-center shadow-lg p-10 md:p-5 rounded-xl my-10  hover:scale-105 ease-in duration-300   dark:bg-white flex-1">
          <Image alt="Image" src={design} />
          <h3 className="text-lg font-bold pt-8 pb-2 ">
            Front-End Development
          </h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600 font-medium">Design Tools I Use</h4>
          <p className="text-black py-1 font-semibold">React & Next.js</p>
          <p className="text-black py-1 font-semibold">
            Typescript & Javascript
          </p>
          <p className="text-black py-1 font-semibold">HTML & CSS</p>
          <p className="text-black py-1 font-semibold">Bootstrap & Tailwind</p>
        </div>
        <div className="text-center shadow-lg p-10 md:p-5 rounded-xl my-10  hover:scale-105 ease-in duration-300  dark:bg-white flex-1">
          <Image alt="Image" src={code} />
          <h3 className="text-lg font-bold pt-8 pb-2 ">Back-End Development</h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let{"'"}s make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600 font-medium">
            Development Tools I Use
          </h4>
          <p className="text-black py-1 font-semibold">Node.js & Python</p>
          <p className="text-black py-1 font-semibold">Express & FastAPI</p>
          <p className="text-black py-1 font-semibold">MySQL & Modongo</p>
          <p className="text-black py-1 font-semibold">Pydantic & Oauth</p>
        </div>
        <div className="text-center shadow-lg p-10 md:p-5 rounded-xl my-10  hover:scale-105 ease-in duration-300  dark:bg-white flex-1">
          <Image className="flex justify-center" alt="" src={consulting} />
          <h3 className="text-lg font-bold pt-8 pb-2">
            Data Science & Analysis
          </h3>
          <p className="py-2">
            Need data science project feedback? Get tips and tricks to level up
            from me.
          </p>
          <h4 className="py-4 text-teal-600 font-medium">
            Data Science Tools I Use
          </h4>
          <p className="text-black py-1 font-semibold">Python & R</p>
          <p className="text-black py-1 font-semibold">SQL</p>
          <p className="text-black py-1 font-semibold">
            Scikit-learn, Numpy & Scipy
          </p>
          <p className="text-black py-1 font-semibold">Statistics</p>
        </div>
      </div>
    </>
  );
}
