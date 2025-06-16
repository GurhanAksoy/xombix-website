import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import Navbar from "./components/Navbar"; // ← Yeni eklenen üst menü

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Bu menü her sayfada üstte kalır */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Router>
  );
}
