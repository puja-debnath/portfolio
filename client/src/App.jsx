import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GetInTouch from "./pages/Home/GetInTouch";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import Project from "./pages/Home/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSide from "./pages/Home/LeftSide";
import { useState } from "react";
import Loader from "./components/Loader";


function App() {
  const[Loading, setLoading] = useState(false)
  return (
    <BrowserRouter>
    {Loading? <Loader />  : null}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <Footer />
      <LeftSide />
    </BrowserRouter>
  );
}

export default App;
