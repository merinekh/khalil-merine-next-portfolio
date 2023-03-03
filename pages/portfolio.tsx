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
            As a recent{" "}
            <span className="text-teal-500">Full-stack developer</span>, I am{" "}
            <span className="text-teal-500">Eager to gain experience</span> and
            further <span className="text-teal-500">Enhance my skills</span> in
            this exciting field. While I may not have professional experience
            yet, I am equipped with the{" "}
            <span className="text-teal-500">Knowledge</span> &{" "}
            <span className="text-teal-500">Skills</span> I acquired during my{" "}
            <span className="text-teal-500">Studies</span>, and I am committed
            to applying them to{" "}
            <span className="text-teal-500"> Real-world projects.</span>
          </p>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            I am open to opportunities that allow me to learn and grow as a
            professional in this field.
          </p>
        </div>
        <Project />
      </section>
    </>
  );
}
