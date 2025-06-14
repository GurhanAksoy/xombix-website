import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 font-mono">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">🛸 XombiX</h1>
        <p className="text-xl mb-6">Evrenden sızdı. İnterneti ele geçirmeye geliyor.</p>
        <p className="text-lg mb-8 italic text-gray-400">
          Bu sadece bir coin değil. Bu bir glitch. Bir kült. Bir XombiX.
        </p>
        <div>
          <a href="#presale" className="inline-block bg-white text-black px-6 py-3 rounded-2xl text-lg hover:bg-gray-300 transition">
            🚀 Ön Satışa Katıl
          </a>
        </div>
      </section>
    </main>
  );
}