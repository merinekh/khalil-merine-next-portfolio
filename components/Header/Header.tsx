import React from "react";
import NavBar from "../NavBar/NavBar";

function Header({
  darkMode,
  setdarkMode,
  isMenuOpen,
  setIsMenuOpen,
  handleMenuToggle,
}: any) {
  return (
    <>
      <div className="py-4 flex justify-center ">
        <a href="/" className="flex items-center">
          <h1 className="text-xl font-burtons lg:text-2xl dark:text-white">
            developedbyKM
          </h1>
        </a>
      </div>{" "}
      <NavBar
        darkMode={darkMode}
        setdarkMode={setdarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />
    </>
  );
}

export default Header;
