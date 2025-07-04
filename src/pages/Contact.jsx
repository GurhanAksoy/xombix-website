import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("your-form-id"); // buraya formspree ID gelecek

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8">
        <h2 className="text-2xl font-bold text-green-400 mb-4">{t("contact.successTitle")}</h2>
        <p className="text-gray-200">{t("contact.successMessage")}</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-white">
      <div className="w-full max-w-xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-orange-400 mb-6 text-center">{t("contact.title")}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">{t("contact.name")}</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white"
          />

          <label htmlFor="email" className="block text-sm font-semibold mb-2">{t("contact.email")}</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="block text-sm font-semibold mb-2">{t("contact.message")}</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition duration-300"
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </main>
  );
}
