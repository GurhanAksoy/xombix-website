import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-black text-white font-sans">
      <div className="w-full max-w-xl bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-orange-400 mb-6 text-center">
          Contact XombiX Team
        </h1>
        <form
          action="https://formsubmit.co/xombixcoin@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://xombix.com/thanks" />

          <div>
            <label className="block text-sm font-medium text-orange-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
