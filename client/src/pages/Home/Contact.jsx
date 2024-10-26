import React from "react";

const Contact = () => {
  return (
    <div className="flex gap-20 text-primary sm:flex-col sm:gap-0 sm:items-end sm:p-0 ">
      <a href="/">
        <button className=" flex pl-3 text-semibold p-2 rounded-md  ">
          Home 
        </button>
        </a>
      <a href="/About">
        <button className=" flex pl-3 text-semibold p-2 rounded-md   ">
          About me 
        </button>
        </a>
        <a href="/Project">
        <button className=" flex pl-3 text-semibold p-2 rounded-md   ">
          Project 
        </button>
        </a><a href="/About">
        <button className=" flex pl-3 text-semibold p-2 rounded-md  ">
          Click 
        </button>
        </a>
      <a href="/getInTouch">
        <button className=" flex text-semibold p-2 rounded-md items-end justify-end bg-blue-950 ">
          Get in touch
        </button>
      </a>
      </div>
  );
};

export default Contact;
