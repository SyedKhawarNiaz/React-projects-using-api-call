import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
