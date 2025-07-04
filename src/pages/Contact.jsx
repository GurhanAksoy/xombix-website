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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("contact_title")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              {t("form_name")}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 text-black rounded"
              placeholder={t("form_name")}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              {t("form_email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 text-black rounded"
              placeholder={t("form_email")}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              {t("form_message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 text-black rounded"
              placeholder={t("form_message")}
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            {status === "sending" ? "Sending..." : t("form_submit")}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
