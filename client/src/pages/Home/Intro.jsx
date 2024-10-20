import React from "react";

const Intro = () => {
  return (
    <div className="bg-primary h-[80vh] flex flex-col sm:flex-wrap items-start gap-2 justify-center">
      <h1 className="text-white text-2xl sm:text-xl">Hello, </h1>
      <h1 className="text-4xl sm:text-2xl">My name is </h1>
      <h1 className="text-7xl sm:text-4xl text-pink-950 font-bold">Puja Debnath</h1>
      <p className="text-white w-2/3 text-2xl sm:text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
        voluptate tempore aliquid necessitatibus reiciendis repellendus fugit
        vel mollitia iure facilis. Maiores dolor qui, velit earum eum odit esse
        quae error!
      </p>
      <button className="border-2 text-white p-2 border-tertiary rounded m-2">Get Started</button>
    </div>
  );
};

export default Intro;
