import React from "react";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Home from './components/pages/home/Home'
import './App.css'

function App() {

  return (
    <div className="app-wrapper">
      <TopBar />
      <div className="app-flex">
        <SideBar />
        <div className="home">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;