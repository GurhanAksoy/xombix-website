import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import Navbar from "./components/Navbar";
import Presale from "./pages/Presale";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
    </Router>
  );
}
