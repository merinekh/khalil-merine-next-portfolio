import TechStack from "@/components/TechStack/TechStack";
import Link from "next/link";
import React from "react";

function about() {
  const techStack = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MySQL",
    "Agile Development",
    "OAuth",
    "Heroku",
    "Git",
  ];

  const stacks = techStack.map((e, i) => (
    <span key={i} className="text-teal-500">
      {e}{" "}
    </span>
  ));
  return (
    <div>
      {" "}
      <div id="about" className="w-full p-2 flex items-center py-4">
        <div className=" ">
          <div className="col-span-2">
            <p className="text-3xl py-1 text-black font-semibold dark:text-white ">
              About
            </p>
            <h2 className="py-4 text-black dark:text-white">Who I Am</h2>
            <p className="py-2 text-black dark:text-white">
              {}I am Khalil Merine, a Full-stack developer with a strong focus
              on creating dynamic interfaces using React, Node.js, and MySQL. My
              journey began with a background in Chemical Engineering and
              expanded as I delved into the world of software development.
            </p>
            <p className="py-2 text-black dark:text-white">
              With a collaborative and client-focused approach, I am{" "}
              <span className="text-teal-500">Passionate</span> about{" "}
              <span className="text-teal-500">Building Great Products</span>,{" "}
              <span className="text-teal-500">Solving Complex Problems</span>,
              and using data-driven insights. I{" "}
              <span className="text-teal-500">
                Continually Seek New Technologies
              </span>{" "}
              to improve my craft and{" "}
              <span className="text-teal-500">
                Deliver Innovative Solutions
              </span>
              .
            </p>
            <Link href="/portfolio">
              <p className="py-2 text-black dark:text-white underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default about;
