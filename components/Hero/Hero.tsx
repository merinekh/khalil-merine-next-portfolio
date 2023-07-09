import React from "react";
import Image from "next/image";
import photo from "../../public/khalil-photo.png";

export default function Hero() {
  return (
    <div className="hero text-center p-1">
      <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
        Khalil Merine
      </h2>
      <div className="main-image relative flex-col mx-auto bg-gradient-to-b from-teal-500 rounded-full w-100 h-80 mt-2 overflow-hidden sm:h-96 sm:w-96">
        <Image
          className="w-80"
          alt="Image"
          src={photo}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-2xl py-2 md:text-3xl text-black font-semibold dark:text-white">
        From Novice to Full-Stack: Documenting My Journey as a Developer
      </h3>
      <p className="text-md py-5 leading-8 text-black-800 md:text-xl max-w-lg mx-auto dark:text-white">
        Welcome to my website! <br /> As a dedicated developer, I have
        transformed my background in chemical engineering into a thriving career
        as a full-stack developer. I am deeply passionate about utilizing
        technology to tackle intricate challenges and create innovative
        solutions. <br /> <br className="hidden sm:flex" />{" "}
        <span className="text-teal-500 font-semibold">
          {" "}
          Let{"'"}s collaborate and building something remarkable together!
        </span>
      </p>
    </div>
  );
}
