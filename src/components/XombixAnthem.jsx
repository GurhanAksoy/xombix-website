import React, { useState } from "react";

export default function XombixAnthem() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">🎵 XombiX Anthem</h2>

      {!showVideo && (
        <button
          onClick={() => setShowVideo(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
        >
          Anthem'i Oynat
        </button>
      )}

      {showVideo && (
        <div className="mt-6 aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube-nocookie.com/embed/811uaGAIX8o"
            title="XombiX Anthem"
            loading="lazy"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
