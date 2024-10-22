import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Home from './pages/Home/Home'
import GetInTouch from './pages/Home/GetInTouch'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route  path = "/"  element={<Home />} />
    <Route path="/getInTouch" element={<GetInTouch />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
