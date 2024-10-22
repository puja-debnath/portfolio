import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-4 flex">
      <a
        href="https://github.com/puja-debnath"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mx-2"
      >
        {" "}
        <FaGithub className="mr-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/puja-debnath001"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mx-2"
      >
        <FaLinkedin className="mr-2" />
      </a>
      <a
        href="https://x.com/PujaDebnath001"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mx-2"
      >
        <FaTwitter className="mr-2" />
      </a>
    </div>
  );
};

export default Contact;
