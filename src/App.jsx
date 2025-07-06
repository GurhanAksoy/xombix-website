import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import Presale from "./pages/Presale";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const playMarsh = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.muted = false;
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

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <Router>
      <ScrollToTop />

      {/* Müzik */}
      <audio
        ref={audioRef}
        src="/xombix.mp3"
        preload="none"
        aria-hidden="true"
        style={{ display: "none" }}
      ></audio>

      {/* Hoparlör kontrol düğmesi - SAĞ ÜST KÖŞE */}
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-[9999] p-3 bg-black/70 hover:bg-black/90 text-white rounded-full shadow-xl transition duration-300"
        aria-label="Toggle Music"
      >
        {isMuted ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
      </button>

      {/* Arkaplan */}
      <div className="stars"></div>

      {/* Sayfa Yapısı */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
