import React from "react";

export default function Whitepaper() {
  return (
    <main className="relative min-h-screen text-white px-6 py-12 max-w-5xl mx-auto font-mono leading-relaxed text-base overflow-hidden z-10">
      <h1 className="text-3xl font-bold text-red-400 text-center mb-10">XombiX Whitepaper</h1>

      {/* ... (tüm mevcut içerik burada aynı şekilde devam ediyor, sadece bg-black kaldırıldı) ... */}

      {/* 📥 PDF Download Button */}
      <div className="text-center mt-12">
        <a
          href="/xombix-whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300"
          download
        >
          📥 Download Whitepaper (PDF)
        </a>
      </div>

      {/* Footer */}
      <p className="text-sm text-center mt-10 text-gray-500 italic">
        v1.0 – June 2025<br />
        XombiX Project © 2025 | MemeDAO powered | www.xombix.com
      </p>
    </main>
  );
}
