import React from "react";
import {
  AiFillVideoCamera,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className="socials flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-teal-500 ">
        <a href="https://www.linkedin.com/in/khalil-merine/">
          <AiFillLinkedin />
        </a>{" "}
        <a href="https://github.com/merinekh/">
          <AiFillGithub />
        </a>{" "}
        <a href="https://www.loom.com/share/a0a80940626549599c2ec54cefb8d9f3">
          <AiFillVideoCamera />
        </a>
      </div>
    </div>
  );
}
