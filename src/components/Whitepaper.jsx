import React from "react";

export default function Whitepaper() {
  console.log("✅ Whitepaper bileşeni başarıyla render edildi.");

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "40px", color: "#0f0", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: '48px', textAlign: 'center' }}>
        XombiX Whitepaper Aktif
      </h1>
      <p style={{ fontSize: '24px', textAlign: 'center', marginTop: '20px' }}>
        Bu sayfa başarıyla yüklendi ve görünüyor 🛠️✨
      </p>
    </div>
  );
}
