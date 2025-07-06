import React, { useRef, useEffect } from "react";

export default function XombixAnthem() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAnthem = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25; // %25 sesle başla
        audioRef.current.play().catch((err) => {
          console.warn("Anthem başlatılamadı:", err);
        });
        window.removeEventListener("click", playAnthem);
      }
    };

    window.addEventListener("click", playAnthem);

    return () => {
      window.removeEventListener("click", playAnthem);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        preload="auto"
        src="/xombix.mp3"
        controls
        className="w-48 opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}
