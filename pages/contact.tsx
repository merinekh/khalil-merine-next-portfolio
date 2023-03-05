import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form: any = useRef();
  async function handleSubmit(e: any) {
    e.preventDefault();

    // console.log(fullname, form);
    emailjs
      .sendForm(
        "service_idsrvvs",
        "template_ta4ej0k",
        form.current,
        "BaFVKBFCQ2PQQyiKN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="rounded-lg shadow-xl flex flex-col px-8 py-8 my-2 bg-white dark:bg-gray-900 dark:shadow-gray-50 dark:shadow"
    >
      <h1 className="text-2xl font-bold dark:text-teal-500">Send a message</h1>

      <label
        htmlFor="fullname"
        className="text-black font-light mt-8 dark:text-gray-50"
      >
        Full name<span className="text-red-500">{"*"}</span>
      </label>
      <input
        name="fullname"
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black dark:bg-white rounded-md"
      />

      <label
        htmlFor="email"
        className="text-black font-light mt-4 dark:text-gray-50"
      >
        E-mail<span className="text-red-500">{"*"}</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black dark:bg-white rounded-md"
      />

      <label
        htmlFor="subject"
        className="text-black font-light mt-4 dark:text-gray-50"
      >
        Subject<span className="text-red-500">{"*"}</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black dark:bg-white rounded-md"
      />

      <label
        htmlFor="message"
        className="text-black font-light mt-4 dark:text-gray-50"
      >
        Message<span className="text-red-500">{"*"}</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black dark:bg-white rounded-md"
      ></textarea>

      <div className="flex flex-col items-center justify-start lg:flex-row">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg flex flex-row items-center"
        >
          Submit
        </button>
        <a
          href="https://calendly.com/merinekh/30min"
          target="_blank"
          className="px-10 mt-8 mx-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg flex flex-row items-center"
        >
          Book A Call!
        </a>
      </div>
    </form>
  );
}
