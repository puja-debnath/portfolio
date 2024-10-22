import React from "react";
import Contact from "../pages/Home/Contact";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-pink-700 flex p-5">
      <h1 className="text-secondary font-semibold text-4xl">Puja Debnath</h1>
      <Contact />
      <a href="/getInTouch">
        <button className=" flex pl-3 text-semibold p-3 rounded-md items-end justify-end  bg-pink-950 ">
          Click Me
        </button>
      </a>
    </div>
  );
};

export default Header;
