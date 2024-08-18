import React from "react";
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa6";

const Search = () => {
  return (
    <div className="bg-[#DADBF0] h-1/2">
      <Header />
      <div className="flex flex-col justify-center items-center gap-8 py-24">
        <h1 className="text-7xl font-semibold">How can we help?</h1>
        <div className="flex items-center w-full max-w-2xl bg-white p-2 rounded-md shadow-md border border-black ">
          <input
            placeholder="Search"
            className="w-full p-2 border-none outline-none rounded-md"
          />
          <button className="ml-2 text-2xl text-gray-500">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
