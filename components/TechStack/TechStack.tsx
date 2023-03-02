import React from "react";
import Image from "next/image";
import frontEnd from "../../public/front-end-stack.png";
import backEnd from "../../public/back-end-stack.png";
import dataScience from "../../public/data-science-stack.png";
import colab from "../../public/collab-stack.png";

export default function TechStack() {
  return (
    <>
      <div className="tech-stacks flex flex-wrap justify-center md:grid grid-cols-2 gap-8 lg:grid-cols-3">
        <div className="tech-stack w-100 flex items-center">
          <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-gradient-to-r from-teal-500 to-teal-50 text-white">
            <h3 className="text-center font-semibold py-4 text-black">
              Front-End Stack
            </h3>
            <Image src={frontEnd} className="rounded-xl" alt="/" />
          </div>
        </div>
        <div className="tech-stack w-100 flex items-center">
          <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-gradient-to-r from-teal-500 to-teal-50 text-white">
            <h3 className="text-center font-semibold py-4 text-black">
              Back-End Stack
            </h3>
            <Image src={backEnd} className="rounded-xl" alt="/" />
          </div>
        </div>
        <div className="tech-stack w-100 flex items-center">
          <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-gradient-to-r from-teal-500 to-teal-50 text-white">
            <h3 className="text-center font-semibold py-4 text-black">
              Data Science
            </h3>{" "}
            <Image src={dataScience} className="rounded-xl" alt="/" />
          </div>
        </div>
        <div className="tech-stack w-100 flex items-center lg:col-start-2 lg:col-end-2">
          <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-gradient-to-r from-teal-500 to-teal-50 text-white">
            <h3 className="text-center font-semibold py-4 text-black">
              Collaboration
            </h3>{" "}
            <Image src={colab} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
}
