"use client";

import React, { useEffect, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import MapBox from "@/components/contact/map-box";
import PageHeader from "@/components/page-header";
import config from "@/config";

const { title } = config;

// 🔥 CHANGE THIS TO YOUR NUMBER (country code + number, no +)
const WHATSAPP_NUMBER = "918100532886";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 📦 Create WhatsApp message
    const text = `
New Contact Form Submission

Name: ${formData.fullname}
Email: ${formData.email}
Message: ${formData.message}
    `;

    // 🔐 Encode for URL
    const encodedText = encodeURIComponent(text);

    // 🚀 Redirect
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");

    // Clear form
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };

  const isFormValid =
    formData.fullname && formData.email && formData.message;

  return (
    <article>
      <PageHeader header="Contact" />

      <section className="mb-10">
        <MapBox googleMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689619735!2d88.2649499507587!3d22.535564937865654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1771099816392!5m2!1sen!2sin" />

        <h3 className="text-white-2 text-2xl font-bold mb-5">
          Contact Form
        </h3>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
          />

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid}
          >
            <FaRegPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
