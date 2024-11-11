import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Home/Intro";
import GetInTouch from "./pages/Home/GetInTouch";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import Project from "./pages/Home/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSide from "./pages/Home/LeftSide";
import { useEffect } from "react";
import Admin from "./pages/Admin/index.jsx"
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, setPortfolioData, showLoading } from "./redux/rootSlice";


function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortFolioData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get(
        "http://localhost:3000/api/portfolio/get-portfolio-data"
      );
      dispatch(setPortfolioData(response.data));
      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortFolioData();
    }
  }, [portfolioData]);   // it will run everytime the portfolioData chnages

  //to check the data perfected inserted in the reducer or not (basically to cross check)

  // when portfolio data is present then show this ##
  return (
    <BrowserRouter>
    {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-primary z-50">
          <Loader />
        </div>
      )}
      <Header />
      { portfolioData && (<div className="bg-primary h-screen px-40 sm:px-5 ">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      </div>)
}
      <Footer />
      <LeftSide />
    </BrowserRouter>
  );
}

export default App;
