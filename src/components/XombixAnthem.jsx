import React, { useRef, useEffect } from "react";

export default function XombixAnthem() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAnthem = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1;
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
    <>
      <audio
        ref={audioRef}
        preload="auto"
        src="/xombix.mp3"
        style={{ display: "none" }}
      />
    </>
  );
}
