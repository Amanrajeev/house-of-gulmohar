import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./app/views/Navbar/Navbar";
import AboutPage from "./app/pages/AboutPage";
import HomePage from "./app/pages/HomePage";

function App() {
  return (
    <BrowserRouter basename="/e-commerce-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
