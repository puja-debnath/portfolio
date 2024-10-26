import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center fixed inset-0">
      <div className=" flex text-bold gap-5 text-5xl font-serif ">
        <h1 className=" text-[#1B1A55] puja">Puja</h1>
        <h1 className="text--[#070F2B] debnath">Debnath</h1>
      </div>
    </div>
  );
};

export default Loader;
