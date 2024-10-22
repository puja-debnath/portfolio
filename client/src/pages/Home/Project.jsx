import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Projects } from "../../resources/Projects.jsx";

const Project = () => {
  const [selectedItem, setselectedItem] = useState(null);
  const images = ["image1", "image2", "image3"];
  return (
    <div className="bg-primary px-20">
      <SectionTitle title="Projects" />
      <div className="flex sm:flex-col w-full   ">
        <div className="  text-xl w-1/3">
          <div className=" flex flex-col gap-5 border-l-4 border-pink-900  ">
            {Projects.map((project, index) => (
              <div
                className="cursor-pointer "
                onClick={() => setselectedItem(index)}
              >
                <h1
                  className={`text-xl px-5${
                    selectedItem === index
                      ? "text-tertiary border-l-4 bg-pink-700 rounded-md p-3 w-2/3  "
                      : " "
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className=" w-2/3 pl-10 ">
          <h1 className="flex flex-col">
            {selectedItem !== null ? (
              <>
                <div className=" w-full flex">
                  <img
                    src={Projects[selectedItem].image}
                    alt=""
                    className="h-[40vh] w-1/2"
                  ></img>

                  <span className=" w-1/2 flex flex-col gap-10 ">
                    {Projects[selectedItem].technologies.map((TECH) => (
                      <h1>{TECH}</h1>
                    ))}
                  </span>
                </div>

                <span className="p-5 text-semibold">
                  {Projects[selectedItem].algorithms ? (
                    <h1 className=" text-2xl text-semibold">
                      {Projects[selectedItem].algorithms.map((tech) => (
                        <h1>{tech}</h1>
                      ))}
                    </h1>
                  ) : null}
                </span>
                <span className="py-3">
                  {Projects[selectedItem].description}
                </span>
                <a
                  className="py-3 text-black font-bold"
                  href={Projects[selectedItem].githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github link :{Projects[selectedItem].githublink}
                </a>
              </>
            ) : (
              "Please Select an option"
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
