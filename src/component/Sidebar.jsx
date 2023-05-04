import React from "react";
import { categories } from "../utils/constant";

const Sidebar = ({ categorie, setCategorie }) => {
  return (
    <div className="flex flex-row flex-wrap md:flex-col w-full md:mx-4 gap-2 md:gap-3 md:w-1/6 md:h-[100vh] md:sticky left-0 top-[100px] ">
      {categories.map((categorie) => (
        <button
          onClick={() => setCategorie(categorie.name)}
          key={categorie.name}
          className="bg-black text-white px-3 md:px-6 py-3 md:text-xl md:w-full flex justify-center items-center gap-3 cursor-pointer hover:bg-red-600 hover:text-white transition rounded-md"
        >
          <span className="text-red-700">{categorie.icon}</span>
          <span className="text-sm md:text-lg">{categorie.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
