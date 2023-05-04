import React from "react";

import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="sticky w-full h-auto top-0 left-0 bg-black px-4 sm:px-12 py-4 sm:py-5 flex justify-between items-center">
      <Link to="/" className="logo">
        <img src={logo} className="h-12" alt="" />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
