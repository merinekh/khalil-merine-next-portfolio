import React from "react";

function Toggle({ handleMenuToggle }: any) {
  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 "
      id="mobile-menu"
    >
      <div className="fixed left-0 flex justify-center h-full w-1/2 bg-white border-r border-gray-200 py-2.5 dark:bg-gray-900">
        <ul className="flex flex-col justify-center space-y-4 p-4">
          <li>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/About"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleMenuToggle}
              className="flex justify-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Toggle;
