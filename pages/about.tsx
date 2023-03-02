import Image from "next/image";
import Link from "next/link";
import React from "react";
import frontEnd from "../public/front-end-stack.png";
import backEnd from "../public/back-end-stack.png";
import dataScience from "../public/data-science-stack.png";
import colab from "../public/collab-stack.png";
function about() {
  return (
    <div>
      {" "}
      <div id="about" className="w-full p-2 flex items-center py-4">
        <div className=" ">
          <div className="col-span-2">
            <p className="text-3xl py-1 text-black font-semibold dark:text-white ">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              I recently completed Brainstation's Software Engineering bootcamp,
              where I became proficient in JavaScript, React, Node, Express,
              MySQL, Agile Development, OAuth, Heroku, and Git. Before that, I
              began programming in data science during my university studies in
              Chemical Engineering in 2019, where I used Python and SQL for data
              analysis, machine learning, regulation, and statistics. I also
              hold a Google Data Analyst certificate, which includes R and
              Tableau.
            </p>
            <p className="py-2 text-gray-600">
              My specialization is building mobile-responsive front-end UI
              applications that connect with APIs and other backend
              technologies. I am skilled in HTML, CSS, JavaScript, and React,
              but I believe that being a great developer means using the best
              tool for the job. I am passionate about learning new technologies
              and have experience working with clients to take projects from
              mock wireframes to deployed applications.
            </p>
            <Link href="/portfolio">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="tech-stacks flex flex-wrap justify-center md:grid grid-cols-2 gap-8 lg:grid-cols-3">
            <div className="tech-stack w-100 flex items-center">
              <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-white">
                <h3 className="text-center font-semibold py-4 text-black">
                  Front-End Stack
                </h3>
                <Image src={frontEnd} className="rounded-xl" alt="/" />
              </div>
            </div>
            <div className="tech-stack w-100 flex items-center">
              <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-white">
                <h3 className="text-center font-semibold py-4 text-black">
                  Back-End Stack
                </h3>
                <Image src={backEnd} className="rounded-xl" alt="/" />
              </div>
            </div>
            <div className="tech-stack w-100 flex items-center">
              <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-white">
                <h3 className="text-center font-semibold py-4 text-black">
                  Data Science
                </h3>{" "}
                <Image src={dataScience} className="rounded-xl" alt="/" />
              </div>
            </div>
            <div className="tech-stack w-100 flex items-center lg:col-start-2 lg:col-end-2">
              <div className="w-full h-auto m-auto shadow-md my-4 shadow-gray-400 rounded-xl flex-col items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:bg-white">
                <h3 className="text-center font-semibold py-4 text-black">
                  Collaboration
                </h3>{" "}
                <Image src={colab} className="rounded-xl" alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
