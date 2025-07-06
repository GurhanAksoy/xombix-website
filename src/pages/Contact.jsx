import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    data.append("_replyto", emailValue);

    const res = await fetch("https://formspree.io/f/xrbkvgpa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();
      setSubmitted(true);
      setEmailValue("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-fit bg-[url('/images/stars.jpg')] bg-cover bg-center flex items-center justify-center py-8 px-4">
      <div className="bg-white/10 backdrop-blur-md border border-orange-500 rounded-2xl p-10 shadow-xl shadow-orange-500/30 w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-4 text-center drop-shadow-md">Contact Us</h2>
        <p className="text-center text-gray-300 mb-8 italic">
          Reach out to the XombiX mission control. Your transmission will be answered!
        </p>

        {submitted && (
          <p className="text-green-400 text-center font-semibold mb-6">
            Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-orange-400 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-xl bg-black/60 text-white placeholder-gray-400 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-orange-400 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl bg-black/60 text-white placeholder-gray-400 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-orange-400 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-xl bg-black/60 text-white placeholder-gray-400 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Message..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-md shadow-orange-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
