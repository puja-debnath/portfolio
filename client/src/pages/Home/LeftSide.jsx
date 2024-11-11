import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="fixed left-0 bottom-0 px-8 sm:px-0 ">
      <div className="flex flex-col items-center bg--300 ">
        <div className="flex flex-col gap-10 ">
          <a
            href="https://github.com/puja-debnath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-2 cursor-pointer hover:text-pink-900"
          >
            {" "}
            <FaGithub className="mr-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/puja-debnath001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-2 cursor-pointer hover:text-pink-900"
          >
            <FaLinkedin className="mr-2" />
          </a>
          <a
            href="mailto:pujadebanth570@gmail.com"
            className="text-blue-500  mx-2 cursor-pointer hover:text-pink-900"
          >
            <FaEnvelope className="mr-2" />
          </a>
          <a
            href="https://x.com/PujaDebnath001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500  mx-2 cursor-pointer hover:text-pink-900"
          >
            <FaTwitter className="mr-2" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500  mx-2 cursor-pointer hover:text-pink-900"
          >
            {" "}
            <FaInstagram className="mr-2" />
          </a>
          <div className="w-[1px] h-1/3 bg-pink-200"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
