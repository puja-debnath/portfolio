import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills = [
    "Javascript",
    "React Js",
    "Node Js",
    "MongoDB",
    "Tailwind",
    "java",
    "",
  ];
  return (
    <div className="bg-primary px-20">
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col gap-6">
        <div className="h-[50vh] p-20 bg-green-400 w-1/2">
          //for photo animation
        </div>
        <div className="flex flex-col gap-10 pr-20 w-1/2 sm:w-full sm:pl-5 sm:pr-0 font-serif ">
          <p className=" ">
            From a young age, I’ve always been fascinated by technology and how
            it shapes our world. My journey into software development began with
            a simple curiosity about how websites and applications work. This
            curiosity quickly transformed into a passion for creating solutions
            that make life easier and more enjoyable for users. As a software
            developer, I thrive on the challenge of problem-solving and the
            satisfaction that comes from building something from the ground up.
          </p>
          <h1 className="text-3xl text-black">My Vision</h1>
          <p className=" ">
            As a software developer, my goal is to leverage technology to create
            innovative solutions that address real-world problems. I am
            committed to continuous learning and staying updated with the latest
            industry trends to ensure that my skills remain sharp and relevant.
            I believe in the power of collaboration and enjoy working with
            cross-functional teams to bring ideas to life. Whether it's through
            building responsive web applications or optimizing existing systems,
            I am dedicated to delivering high-quality results that exceed
            expectations
          </p>
        </div>
      </div>

      <div className="py-10 pl-20 sm:pl-5 items-start sm:flex-col ">
        <h1 className="text-secondary text-2xl sm:items-start gap-5">
          Here are a few technologies that i have been working on{" "}
        </h1>
        <div className="flex gap-10 sm:py-5 sm:gap-5 flex-wrap mt-5">
        {skills.map((skill, index) => (
          <div className="bg-blue-800 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded-lg">
            <h1>{skill}</h1>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default About;
