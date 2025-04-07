import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Contact.css";
import ConstellationBackground from "./ConstellationBackground";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section relative min-h-screen px-6 py-24 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <ConstellationBackground />

      {/* Sparkles Layer */}
      <div className="sparkles-bg pointer-events-none absolute inset-0 z-0"></div>

      <div className="relative z-10 text-center w-full">
        <div className="text-5xl mb-8 animate-bounce">✉️</div>

        <h2 className="text-4xl font-bold mb-4">Let’s Connect!</h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-10">
          Whether you want to collaborate, chat about design & dev, or just say hi — I’d love to hear from you!
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:theodoraamodu1@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" /> theodoraamodu1@gmail.com
          </a>
          <a
            href="https://github.com/Theodoraamodu"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/theodora-amodu-752755214/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>

        {/* ✅ Netlify Form Fix */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form max-w-xl mx-auto w-full grid grid-cols-1 gap-6 bg-[#1a1a2e] p-6 rounded-xl shadow-md"
        >
          {/* Required Hidden Fields */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <input type="text" name="name" placeholder="Your Name" className="input-style" required />
          <input type="email" name="email" placeholder="Your Email" className="input-style" required />
          <textarea name="message" rows="5" placeholder="Your Message" className="input-style" required></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-pink-600 hover:bg-pink-700 transition text-white font-semibold shadow-md"
          >
            Send Message 🚀
          </button>
        </form>

        {/* 🔧 Built With Footer Info */}
        <footer className="mt-12 text-sm text-slate-400">
          <p>
            This portfolio was built with <strong>Vite</strong>, <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong> and deployed via{" "}
            <a
              href="https://app.netlify.com/teams/theodoraamodu/sites"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-400"
            >
              Netlify
            </a>.
          </p>
          <p className="mt-1">Designed & coded by Theodora ✨ © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
