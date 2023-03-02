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

  const stacks = techStack.map((e) => (
    <span className="text-teal-500">{e} </span>
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
              I recently completed Brainstation's{" "}
              <span className="text-teal-500">Software Engineering</span>{" "}
              bootcamp, where I became proficient in {stacks}
              Before that, I began programming in data science during my
              university studies in{" "}
              <span className="text-teal-500">Chemical Engineering</span> in
              2019, where I used <span className="text-teal-500">Python</span> &{" "}
              <span className="text-teal-500">SQL</span> for data analysis,
              machine learning, regulation, and statistics. I also hold a {""}
              <span className="text-teal-500">
                Google Data Analyst certificate,
              </span>{" "}
              which includes R and Tableau.
            </p>
            <p className="py-2 text-black dark:text-white">
              My specialization is building{" "}
              <span className="text-teal-500">mobile-responsive front-end</span>{" "}
              UI applications that connect with{" "}
              <span className="text-teal-500">APIs</span> and other{" "}
              <span className="text-teal-500">backend technologies.</span> I am
              skilled in <span className="text-teal-500">HTML</span> ,{" "}
              <span className="text-teal-500">CSS</span>,{" "}
              <span className="text-teal-500">TypeScript</span> &{" "}
              <span className="text-teal-500">NEXT.js</span>, but I believe that
              being a great developer means{" "}
              <span className="text-teal-500">
                using the best tool for the job
              </span>
              . I am passionate about learning new technologies and have
              experience working with clients to take projects from mock
              wireframes to deployed applications.
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
