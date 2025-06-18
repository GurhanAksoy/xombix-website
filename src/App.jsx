import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import Presale from "./pages/Presale";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMarsh = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.play().catch((err) => {
          console.error("Marş başlatılamadı:", err);
        });
        window.removeEventListener("click", playMarsh);
      }
    };

    window.addEventListener("click", playMarsh);

    return () => {
      window.removeEventListener("click", playMarsh);
    };
  }, []);

  return (
    <Router>
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* 🎵 XombiX Anthem - sayfa değişiminden etkilenmez */}
      <audio ref={audioRef} src="/xombix.mp3" preload="auto" />

      {/*  Arka plan yıldız efekti */}
      <div className="stars"></div>

      {/* 🔗 Navbar ve Sayfalar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
    </Router>
  );
}
