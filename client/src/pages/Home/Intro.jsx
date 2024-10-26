import React from "react";
import LeftSide from "./LeftSide";

const Intro = () => {
  return (
    <div
      className="bg-primary h-[80vh] flex flex-col sm:flex-wrap sm:px-6 sm:items-center
    sm:p-6 items-start gap-3 justify-center"
    >
      <h1 className="text-black text-2xl sm:text-2xl">Hello, </h1>
      <h1 className="text-4xl sm:text-2xl">My name is </h1>
      <h1 className="text-7xl sm:text-4xl text-secondary font-bold">
        Puja Debnath
      </h1>
      <p className="text-black w-2/3 text-xl text-bold sm:text-xl">
        I am a passionate software developer specializing in the MERN stack
        (MongoDB, Express.js, React, Node.js) and full-stack development. With a
        strong foundation in building dynamic web applications, I excel at
        creating responsive user interfaces and robust back-end solutions.
      </p>
      {/* <button className="border-2 text-white p-2 border-tertiary rounded m-2">
        Get Started
      </button> */}
    </div>
  );
};

export default Intro;
