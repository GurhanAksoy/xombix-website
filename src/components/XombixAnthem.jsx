import React, { useRef, useEffect } from "react";

export default function XombixAnthem() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAnthem = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch((err) => {
          console.warn("Audio couldn't start automatically:", err);
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
    <div className="fixed bottom-5 right-5 z-50 bg-black/60 backdrop-blur-md rounded-lg p-2 shadow-lg shadow-orange-500/30">
      <audio
        ref={audioRef}
        preload="auto"
        src="/xombix.mp3"
        controls
        className="w-72 text-white"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
