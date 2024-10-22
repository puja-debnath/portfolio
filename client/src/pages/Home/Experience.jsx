import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Experiences } from "../../resources/Experiences.jsx";

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  return (
    <div className="px-40 sm:pl-10 sm:pr-5">
      <SectionTitle title="Experience" />
      <div className="flex sm:flex-col py-10 gap-20 ">
        <div className="flex flex-col gap-5 border-l-4 border-pink-950 ">
          {Experiences.map((experience, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h1
                className={`text-xl px-5  ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 sm:w-1/3 bg-pink-700 p-3 rounded-md"
                    : ""
                }`}
              >
                {experience.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="py-10 sm:py-5">
          <h1 className="text-xl flex flex-col  pl-40 sm:pl-5 gap-5">
            {selectedItemIndex !== null
              ?<> <span className="text-black text-4xl">{Experiences[selectedItemIndex].company} </span> 
              <span className="text-white pl-50 ">{Experiences[selectedItemIndex].description}</span></>
              : "Please select an experience"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
