import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex gap-2 items-center py-10 ">
      <h1 className="text-secondary text-3xl">{title}</h1>
      <div className="w-60 h-[1px] text-secondary bg-blue-700"></div>
    </div>
  );
};

export default SectionTitle;
