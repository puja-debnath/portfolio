import React from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { welcomeText1, welcomeText2, firstname, lastname, description } =
    intro;
  return (
    <div
      className="bg-primary h-[80vh] flex flex-col sm:flex-wrap sm:px-6 sm:items-center
    sm:p-6 items-start gap-3 justify-center"
    >
      <h1 className="text-black text-2xl sm:text-2xl">{welcomeText1}, </h1>
      <h1 className="text-4xl sm:text-2xl">{welcomeText2} </h1>
      <h1 className="text-7xl sm:text-4xl text-secondary font-bold">
        {firstname} {lastname}
      </h1>
      <p className="text-black w-2/3 text-xl text-bold sm:text-xl">
        {description}
      </p>
      {/* <button className="border-2 text-white p-2 border-tertiary rounded m-2">
        Get Started
      </button> */}
    </div>
  );
};

export default Intro;
