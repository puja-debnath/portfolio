import React, { useState } from "react";

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
    <div>
      <h1 className="text-3xl">Get In Touch </h1>
      <span>
        "Let's grab a cup of coffee! Feel free to reach out with any
        project-related questions, and I'll follow up as soon as possible."
      </span>
      <from onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onchange={handleChange}
            required
            className=""
          />
        </div>
        <div></div>
      </from>
    </div>
  );
};

export default GetInTouch;
