import React from "react";
import './App.css'
import SideBar from './components/sideBar/SideBar'
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {

  return (
    <div className="appWrapper">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;