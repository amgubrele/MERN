import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Regester from "./pages/regester";
import Service from "./pages/service";
import Login from "./pages/Login";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <>
      <header>
        {" "}
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/regester" element={<Regester />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </header>
      <main></main>
    </>
  );
}

export default App;
