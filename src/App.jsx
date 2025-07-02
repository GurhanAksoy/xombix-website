
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
      {/* Sayfa değişiminde yukarı kaydır */}
      <ScrollToTop />

      {/* 🎵 XombiX Anthem - performans için preload kaldırıldı */}
      <audio
        ref={audioRef}
        src="/xombix.mp3"
        preload="none"
        style={{ display: "none" }}
        aria-label="XombiX Anthem"
      />

      {/* Arka plan yıldız efekti */}
      <div className="stars" role="presentation" />

      {/* Navigasyon ve Sayfa Yönlendirme */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
    </Router>
  );
}
