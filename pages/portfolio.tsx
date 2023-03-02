import React from "react";
import Image from "next/image";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function portfolio() {
  return (
    <>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 text-black font-semibold dark:text-white ">
            Portofolio
          </h3>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            As a recent graduate of a bootcamp, I am{" "}
            <span className="text-teal-500"> eager to gain experience</span> and
            begin my career as a developer. While I may not have professional
            experience yet, I am equipped with the{" "}
            <span className="text-teal-500"> knowledge and skills</span> I
            acquired during my studies, and I am committed to applying them to{" "}
            <span className="text-teal-500"> real-world projects.</span>
          </p>
          <p className="text-md py-2 leading-8 text-black-800 dark:text-gray-200">
            I am open to opportunities that allow me to learn and grow as a
            professional in this field.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image
              className="rounded-lg object-cover w-100 h-100"
              alt=""
              layout="responsive"
              src={web1}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover w-100 h-100"
              alt=""
              layout="responsive"
              src={web2}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover w-100 h-100"
              alt=""
              layout="responsive"
              src={web3}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover w-100 h-100"
              alt=""
              layout="responsive"
              src={web6}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover w-100 h-100"
              alt=""
              layout="responsive"
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover w-100 h-100"
              alt=""
              layout="responsive"
              src={web4}
            />
          </div>
        </div>
      </section>
    </>
  );
}
