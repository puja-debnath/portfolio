import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <div className="px-40 sm:px-10">
        <Intro />
        <About />
      </div>
      <Experience />
    </div>
  );
};

export default Home;
