import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xrbkvgpa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-black bg-opacity-60 p-8 rounded-xl shadow-2xl border border-orange-500">
        <h2 className="text-4xl font-bold text-center mb-6 text-orange-400 drop-shadow-md">
          {t("contact_title")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-orange-300">
              {t("form_name")}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder={t("form_name")}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-orange-300">
              {t("form_email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder={t("form_email")}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-orange-300">
              {t("form_message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder={t("form_message")}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all duration-200"
          >
            {status === "sending" ? "Sending..." : t("form_submit")}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-center mt-4 font-medium">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4 font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
