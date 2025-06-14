export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white px-6 py-10 font-mono">
      <section className="text-center max-w-3xl mx-auto">
        
        <img
          src="/xombix-logo.jpg"
          alt="XombiX Logo"
          className="mx-auto mb-6 w-64 rounded-2xl shadow-lg"
        />

        <h1 className="text-5xl font-bold mb-4">🧿 XombiX</h1>

        <p className="text-xl mb-6">
          Evrenden sızdı. İnterneti ele geçirmeye geliyor.
        </p>

        <p className="text-lg mb-8 italic text-gray-400">
          Bu sadece bir coin değil. Bu bir glitch. Bir kült. Bir XombiX.
        </p>

        <a
          href="#presale"
          className="inline-block bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:text-white"
        >
          🧿 Ön Satışa Katıl
        </a>

      </section>
    </main>
  );
}
