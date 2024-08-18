import React from "react";
import { CgAbstract } from "react-icons/cg";

const Header = () => {
  return (
    <div className="bg-black text-[#F4F4F4] flex justify-around items-center py-4 rounded-tr-2xl rounded-tl-2xl">
      <div className="flex justify-center items-center gap-4">
        <CgAbstract className="bg-white text-black text-3xl rounded-md" />
        <h3 className="text-2xl font-semibold">Abstract | Help Center </h3>
      </div>
      <button className="text-2xl border border-white bg-gray-900 text-[#F4F4F4] py-2 px-4 rounded-md">
        Submit a Request
      </button>
    </div>
  );
};

export default Header;
