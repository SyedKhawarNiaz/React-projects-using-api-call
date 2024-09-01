import React from "react";
import "./App.css";
import { Header } from "./Components/Index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
