import * as React from "react";
import "./App.css";
import Items from "./pages/Items";
import LayOut from "./pages/LayOut";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
 
  return (
    <div>
       <LayOut />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="items" element={<Items />} />
       </Routes>
    </div>
  );
}
export default App;
