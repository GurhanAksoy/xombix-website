import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import Presale from "./pages/Presale";
import Contact from "./pages/Contact"; // ✅ Contact sayfası eklendi

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
      <ScrollToTop />

      <audio
        ref={audioRef}
        src="/xombix.mp3"
        preload="none"
        aria-hidden="true"
        style={{ display: "none" }}
      ></audio>

      <div className="stars"></div>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ Contact rotası */}
        </Routes>
      </div>
    </Router>
  );
}
