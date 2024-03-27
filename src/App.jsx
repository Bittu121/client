import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import User from "./components/getuser/User";
import Add from "./components/adduser/Add";
import Edit from "./components/updateuser/Edit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const url = window.location.href;
  return (
    <>
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
