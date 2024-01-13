import TechStack from "@/components/TechStack/TechStack";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div>
      <div id="about" className="w-full p-2 flex items-center py-4">
        <div className="col-span-2">
          <p className="text-3xl py-1 text-black font-semibold dark:text-white">
            About Me
          </p>
          <h2 className="py-4 text-black dark:text-white">Who I Am</h2>
          <p className="py-2 text-black dark:text-white">
            Hi, I'm Khalil Merine, a{" "}
            <span className="text-teal-500">Full-Stack Developer</span> with a
            focus on creating dynamic interfaces using{" "}
            <span className="text-teal-500">React</span>,{" "}
            <span className="text-teal-500">Python</span>, and{" "}
            <span className="text-teal-500">MySQL</span>. Currently, I work at{" "}
            <span className="text-teal-500">Softvoyage</span>, specializing in{" "}
            <span className="text-teal-500">React</span>,{" "}
            <span className="text-teal-500">Next.js</span>,{" "}
            <span className="text-teal-500">Python</span>,{" "}
            <span className="text-teal-500">FastAPI</span>,{" "}
            <span className="text-teal-500">Docker</span>, and{" "}
            <span className="text-teal-500">Linux</span>.
          </p>
          <p className="py-2 text-black dark:text-white">
            My journey began with a background in{" "}
            <span className="text-teal-500">Chemical Engineering</span> and
            expanded into the world of{" "}
            <span className="text-teal-500">Software Development</span>. I excel
            in enhancing user experiences through{" "}
            <span className="text-teal-500">Next.js</span> and have successfully
            integrated data from legacy systems using{" "}
            <span className="text-teal-500">FastAPI</span> and{" "}
            <span className="text-teal-500">Pydantic</span>.
          </p>
          <p className="py-2 text-black dark:text-white">
            My expertise lies in crafting bespoke components, eliminating
            unnecessary libraries, and customizing solutions for optimal
            performance. I actively contribute to both front-end and back-end
            development, creating models for tables imported from ODBC systems.
            Proficient in connecting to APIs and manipulating data, I contribute
            to the development of robust projects.
          </p>
          <p className="py-2 text-black dark:text-white">
            Passionate about software development, I am open to opportunities
            within innovative teams. Feel free to reach out for potential
            collaborations.
          </p>
          <p className="py-2 text-black dark:text-white">
            Explore my{" "}
            <Link className="text-teal-500 underline" href="/portfolio">
              Portfolio
            </Link>
            .{" "}
          </p>
        </div>
      </div>
      <TechStack />
    </div>
  );
}

export default About;
