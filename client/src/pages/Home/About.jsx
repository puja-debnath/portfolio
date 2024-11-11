import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const About = () => {
  const {  portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { lotteURL, description1, caption, description2, skills } = about;

  return (
    <div className="bg-primary px-20 h-screen">
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col gap-6">
        <div className="h-[50vh] p-20 bg-green-400 w-1/2">
          {/* {lotteURL} */}
        </div>
        <div className="flex flex-col gap-10 pr-20 w-1/2 sm:w-full sm:pl-5 sm:pr-0 font-serif ">
          <p className=" ">{description1}</p>
          <h1 className="text-3xl text-black">{caption}</h1>
          <p className=" ">{description2}</p>
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
