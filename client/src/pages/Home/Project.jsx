import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Projects } from "../../resources/Projects.jsx";

const Project = () => {
  const [selectedItem, setselectedItem] = useState(null);

  return (
    <div className="bg-primary px-20 sm:px-10 h-screen ">
      <SectionTitle title="Projects" />
      <div className="flex sm:flex-col w-full sm:gap-10  sm:flex-wrap  ">
        <div className="  text-xl w-1/3 sm:w-full">
          <div className=" flex flex-col gap-5 border-l-4 border-secondary ">
            {Projects.map((project, index) => (
              <div
                className="cursor-pointer "
                onClick={() => setselectedItem(index)}
              >
                <h1
                  className={`text-xl px-5${
                    selectedItem === index
                      ? "text-secondary border-l-4 bg-secondary rounded-md p-3 w-2/3 sm:w-full  "
                      : " "
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className=" w-2/3 pl-10 sm:w-full  ">
          <h1 className="flex flex-col  ">
            {selectedItem !== null ? (
              <>
                <div className=" w-full flex sm:flex-col">
                  <img
                    src={Projects[selectedItem].image}
                    alt=""
                    className="h-[40vh] w-1/2 rounded-md sm:w-full"
                  ></img>
                  <div className="px-5 p-5">
                    <span className="text-blue-700 text-2xl text-bold p-5">
                      Technologies used
                    </span>
                    <o1 className=" flex flex-col gap-4 px-10 text-xl">
                      {Projects[selectedItem].technologies.map(
                        (TECH, index) => (
                          <li key={index}>{TECH}</li>
                        )
                      )}
                    </o1>
                  </div>
                </div>

                <div className="flex">
                  <span className="p-5 text-semibold">
                    {Projects[selectedItem].algorithms ? (
                      <o1 className=" text-xl text-semibold gap-3 ">
                        <span className="text-blue-950 text-2xl">Algorithms used</span>
                        {Projects[selectedItem].algorithms.map((tech) => (
                          <li>{tech}</li>
                        ))}
                      </o1>
                    ) : null}
                  </span>
                </div>

                <span className="py-3 px-10 ">
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
