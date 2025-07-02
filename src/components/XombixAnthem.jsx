import React from "react";

export default function XombixAnthem() {
  return (
    <div className="text-center my-12">
      <h2 className="text-white text-2xl font-bold mb-4">🎵 XombiX Anthem</h2>
      
      <div className="max-w-xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
  className="w-full h-full"
  loading="lazy"
  src="https://www.youtube-nocookie.com/embed/811uaGAIX8o"
  title="XombiX Anthem"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

      </div>
    </div>
  );
}
