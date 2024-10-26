import React, { useState } from "react";
import Footer from "../../components/Footer";
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully", formData);
    setFormData({ firstname: "", lastname: "", email: "", message: "" });
  };

  return (
    <div className="bg-primary px-20 sm:px-10">
      <h1 className="text-3xl p-4 text-bold ">Get In Touch </h1>
      <div className="pb-10 text-xl text-bold ">
        "Let's grab a cup of coffee! Feel free to reach out with any
        project-related questions, and I'll follow up as soon as possible."
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-10  px-20 sm:px-5 ">
          <div className="flex gap-4 ">
            <label className="pl-5 text-xl sm:p-0 ">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="firstname"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-1/3 border border-gray-300
               rounded-md p-2 focus:outline-none focus:ring
               sm:w-full focus:ring-pink-700 "
            />
          </div>

          <div className="flex gap-4">
            <label className="pl-5 text-xl sm:p-0"> Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="lastname"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-1/3 border border-gray-300 sm:w-full
               rounded-md p-2 focus:outline-none focus:ring focus:ring-pink-700"
            />
          </div>
          <div className="flex gap-4">
            <label className="pl-5 text-xl  sm:p-0"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 ml-8 block w-1/3 border border-gray-300 sm:w-full
               rounded-md p-2 focus:outline-none focus:ring focus:ring-pink-700"
            />
          </div>
          <div className="flex gap-4">
            <label className="pl-5 text-xl  sm:p-0"> Message </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block h-[20vh] w-1/3 border border-gray-300 sm:w-full
               rounded-md p-2 focus:outline-none focus:ring focus:ring-pink-700"
            />
          </div>
        </div>
        <div className="flex justify-end pt-10 pr-5">
        <button className="bg-blue-800 text-white rounded-lg p-2">Submit</button>
    </div>
      </form>


    </div>
  );
};

export default GetInTouch;
