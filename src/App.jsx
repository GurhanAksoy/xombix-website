import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div style={{ backgroundColor: "#111", color: "#fff", padding: "40px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "36px" }}>🏠 Anasayfa (Home)</h1>
      <a href="/whitepaper" style={{ color: "aqua", fontSize: "20px", display: "block", marginTop: "20px" }}>
        → Whitepaper'a Git
      </a>
    </div>
  );
}

function Whitepaper() {
  console.log("✅ Whitepaper bileşeni render edildi.");
  return (
    <div style={{ backgroundColor: "#000", color: "#0f0", padding: "40px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "36px" }}>📜 Whitepaper Sayfası Aktif!</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" elemen
