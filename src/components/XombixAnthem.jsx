
import React from "react";

export default function XombixAnthem() {
  return (
    <section className="anthem" aria-label="XombiX Coin Anthem Section">
      <h2 className="anthem-title">🎵 XombiX Anthem</h2>
      <p className="anthem-description">
        Feel the spirit of XombiX through our official anthem — motivating, uniting, and marching toward Mars!
      </p>
      <div className="anthem-video" role="region" aria-label="XombiX Anthem Audio Visualizer">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="XombiX Official Anthem"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1832492943&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
        ></iframe>
      </div>
    </section>
  );
}
