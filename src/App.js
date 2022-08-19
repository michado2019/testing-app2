import React from "react";
import './App.css'
import SideBar from './components/sideBar/SideBar'
import DashBoard from "./components/pages/dashBoard/DashBoard"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Riders from "./components/pages/riders/Riders";

function App() {

  return (
    <BrowserRouter>
    <div className="appWrapper">
        <div className="appFlex">
        <SideBar />
        <Routes>
          <Route path='/' element={<DashBoard />} />
        </Routes>
        <Routes>
          <Route path='/riders' element={<Riders />} />
        </Routes>
        </div>
        
    </div>
    </BrowserRouter>
  );
}
export default App;