import React from "react";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("yourFormspreeID");

  if (state.succeeded) {
    return (
      <main className="min-h-screen text-gray-100 px-4 sm:px-6 py-12 max-w-xl mx-auto font-sans leading-relaxed">
        <h2 className="text-3xl font-extrabold text-orange-400 mb-6 text-center">
          {t("contact_title")}
        </h2>
        <p className="text-center text-green-400 text-lg font-semibold">
          Thank you! Your message has been sent.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-gray-100 px-4 sm:px-6 py-12 max-w-xl mx-auto font-sans leading-relaxed">
      <h2 className="text-3xl font-extrabold text-orange-400 mb-6 text-center">
        {t("contact_title")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            {t("form_name")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-black text-white placeholder-gray-500"
            placeholder={t("form_name")}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            {t("form_email")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-black text-white placeholder-gray-500"
            placeholder={t("form_email")}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            {t("form_message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-black text-white placeholder-gray-500"
            placeholder={t("form_message")}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition duration-300"
        >
          {t("form_submit")}
        </button>
      </form>
    </main>
  );
}
