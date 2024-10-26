import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="bg-primary">
      <div className="px-40 sm:px-10">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
