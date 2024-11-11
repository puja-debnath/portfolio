import React from "react";
import Contact from "../pages/Home/Contact";
import LeftSide from "../pages/Home/LeftSide";
import { useSelector } from "react-redux";

const Header = () => {
  const {portfolioData } = useSelector((state) => state.root);

  return (
    <div className="bg-blue-900 flex p-4 gap-4 px-10">
      <h1 className="text-black font-semibold text-4xl w-1/3 font-serif sm:w-2/3 ">Puja Debnath</h1>
     <Contact />
    </div>
  );
};

export default Header;
