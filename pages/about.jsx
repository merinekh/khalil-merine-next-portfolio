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
              {}I am Khalil Merine, a{" "}
              <span className="text-teal-500">Developer</span> with a
              <span className="text-teal-500"> strong focus </span> on creating
              dynamic interfaces using
              <span className="text-teal-500"> React</span>,
              <span className="text-teal-500"> Python</span>,
              <span className="text-teal-500"> MySQL</span> &
              <span className="text-teal-500"> Mongodb</span>. Currently, I work
              as a{" "}
              <span className="text-teal-500">
                Full-stack Developer at Softvoyage
              </span>
              , gaining valuable experience in{" "}
              <span className="text-teal-500">Python</span>,
              <span className="text-teal-500"> MongoDB</span>, and
              <span className="text-teal-500"> FastAPI</span>.
              <br />
              <br />
              My journey began with a background in
              <span className="text-teal-500"> Chemical Engineering</span> and
              expanded as I delved <span className="text-teal-500">into</span>{" "}
              the world of
              <span className="text-teal-500"> Software Development</span>. I
              excel in enhancing user experiences through
              <span className="text-teal-500"> Next.js</span> and have
              successfully integrated data from legacy systems using{" "}
              <span className="text-teal-500"> FastAPI</span> and{" "}
              <span className="text-teal-500"> Pydantic</span>.
            </p>
            <p className="py-2 text-black dark:text-white">
              With a collaborative and client-focused approach, I am{" "}
              <span className="text-teal-500">Passionate</span> about{" "}
              <span className="text-teal-500">
                Building Exceptional Products
              </span>
              , <span className="text-teal-500">Solving Complex Problems</span>,
              and leveraging data-driven insights.
              <br />
              <br />I{" "}
              <span className="text-teal-500">
                Continually Seek New Technologies
              </span>{" "}
              to improve my craft and{" "}
              <span className="text-teal-500">
                Deliver Innovative Solutions
              </span>
              .<br />
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
