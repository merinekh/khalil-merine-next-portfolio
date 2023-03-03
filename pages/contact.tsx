import React from "react";
import { useState } from "react";
export default function contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-gray-900 dark:shadow-gray-50 dark:shadow"
    >
      <h1 className="text-2xl font-bold dark:text-teal-500">Send a message</h1>

      <label
        htmlFor="fullname"
        className="text-black font-light mt-8 dark:text-gray-50"
      >
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
      />

      <label
        htmlFor="email"
        className="text-black font-light mt-4 dark:text-gray-50"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
      />

      <label
        htmlFor="subject"
        className="text-black font-light mt-4 dark:text-gray-50"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
      />

      <label
        htmlFor="message"
        className="text-black font-light mt-4 dark:text-gray-50"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg flex flex-row items-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
}