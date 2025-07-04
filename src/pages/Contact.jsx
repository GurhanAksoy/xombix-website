import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-gray-100 px-4 sm:px-6 py-12 font-sans flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-xl backdrop-blur">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-400 text-center mb-8">
          Contact XombiX Team
        </h1>

        <form
          action="https://formsubmit.co/xombixcoin@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* GİZLİ GÖNDERİM AYARLARI */}
          <input type="hidden" name="_next" value="https://xombix.com/thanks" />
          <input type="hidden" name="_captcha" value="false" />

          {/* AD */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold text-orange-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your name"
            />
          </div>

          {/* E-POSTA */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-orange-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="your@email.com"
            />
          </div>

          {/* MESAJ */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-semibold text-orange-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* GÖNDER BUTONU */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-8 rounded-full shadow-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
