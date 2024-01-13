import Project from "@/components/Projects/Project";
import React from "react";

export default function portfolio() {
  return (
    <>
      <section className="py-2">
        <div>
          <h3 className="text-3xl py-1 text-black font-semibold dark:text-white">
            Portfolio
          </h3>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            Welcome to my portfolio! I'm excited to share my experience and
            projects with you. As a{" "}
            <span className="text-teal-500">Full-stack developer</span> with
            valuable experience at Softvoyage since April 2023, I've expanded my
            skills and worked on diverse projects.
            <br />
            <br />
            Within this portfolio, you'll discover a versatile collection of
            projects that highlight my expertise in{" "}
            <span className="text-teal-500">HTML</span>,{" "}
            <span className="text-teal-500">CSS</span>,{" "}
            <span className="text-teal-500">JavaScript</span>,{" "}
            <span className="text-teal-500">React</span>,{" "}
            <span className="text-teal-500">Node.js</span>, and more. <br />
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
            In my recent role at Softvoyage, I contributed significantly to
            front-end development, crafted personalized components, resolved
            bugs, and led the creation of server interfaces using{" "}
            <span className="text-teal-500">FastAPI</span>. I'm proficient in{" "}
            <span className="text-teal-500">Docker</span> and have successfully
            set up and configured various components for seamless deployment.
            <br />
            <br />
            While honing my skills through professional experience, I bring a
            solid foundation of <span className="text-teal-500">
              Knowledge
            </span>{" "}
            & <span className="text-teal-500">Skills</span> acquired during my{" "}
            <span className="text-teal-500">Studies</span>.
          </p>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            I am <span className="text-teal-500">Open To Opportunities</span>{" "}
            that allow me to <span className="text-teal-500">Learn & Grow</span>{" "}
            as a professional in this field.
          </p>
        </div>
        <Project />
      </section>
    </>
  );
}
