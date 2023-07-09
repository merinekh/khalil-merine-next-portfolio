import Project from "@/components/Projects/Project";
import React from "react";

export default function portfolio() {
  return (
    <>
      <section className="py-2">
        <div>
          <h3 className="text-3xl py-1 text-black font-semibold dark:text-white ">
            Portofolio
          </h3>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            Welcome to my portfolio! I am thrilled to share my experience and
            projects with you. As a
            <span className="text-teal-500"> Full-stack developer</span> with
            experience working at Softvoyage since April 2023, I have gained
            valuable professional experience in the field.
            <br />
            <br />
            Within this portfolio, you will find a diverse collection of
            projects that highlight my expertise in
            <span className="text-teal-500"> HTML</span>,
            <span className="text-teal-500"> CSS</span>,
            <span className="text-teal-500"> JavaScript</span>,
            <span className="text-teal-500"> React</span>,{" "}
            <span className="text-teal-500"> Node.js</span>,{" "}
            <span className="text-teal-500"> & more</span>. <br />
            These projects showcase my ability to{" "}
            <span className="text-teal-500">
              Create Dynamic and Engaging Applications
            </span>
            , <span className="text-teal-500">Improve User Experiences</span>,
            and{" "}
            <span className="text-teal-500">
              Collaborate Effectively Within Teams
            </span>
            .
            <br />
            <br />
            While I have been developing my skills through professional
            experience, I also bring a solid foundation of{" "}
            <span className="text-teal-500">Knowledge</span> &{" "}
            <span className="text-teal-500">Skills</span> I acquired during my{" "}
            <span className="text-teal-500">Studies</span>.
          </p>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            I am <span className="text-teal-500"> Open To Opportunities</span>{" "}
            that allow me to{" "}
            <span className="text-teal-500">Learn & Grow </span>as a
            professional in this field.
          </p>
        </div>
        <Project />
      </section>
    </>
  );
}
