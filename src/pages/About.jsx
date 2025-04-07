import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import "./About.css";

const About = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <section
      id="about"
      className="about-section min-h-screen px-6 py-24 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Avatar Section */}
      {!showTimeline && (
        <div
          className="relative group cursor-pointer animate-avatar-bounce"
          onClick={() => setShowTimeline(true)}
        >
          <img
            src={avatar}
            alt="Theodora Avatar"
            className="w-64 h-64 rounded-full border-4 border-pink-500 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
            <span className="text-white text-lg font-semibold">Click Me</span>
          </div>
        </div>
      )}

      {/* Timeline Section */}
      {showTimeline && (
        <div className="flex flex-col items-center animate-slide-up w-full">
          <div className="timeline mt-10 space-y-10 max-w-3xl w-full">
            {[
              {
                title: "Frontend Developer – Uro Skincare Company",
                year: "2022 – 2023",
                description:
                  "Built and maintained a responsive website, enhanced UI/UX, and improved team collaboration.",
              },
              {
                title: "Product Support Specialist – Kuda Bank",
                year: "2021 – 2022",
                description:
                  "Managed customer issues and provided technical support for mobile and web platforms.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="timeline-item border-l-4 border-pink-500 pl-6 relative"
              >
                <span className="absolute -left-[10px] top-1 w-4 h-4 bg-pink-500 rounded-full"></span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.year}</p>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/*  Certifications & Education */}
          <div className="mt-16 w-full max-w-4xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Education</h3>
            <div className="space-y-6">
              <div className="bg-[#1e1e3f] p-5 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold">Douglas College</h4>
                <p className="text-slate-300 text-sm">
                  PGD in Computer Information Systems (ongoing)
                </p>
              </div>
            </div>
          </div>

          {/*  Back Button */}
          <button
            className="mt-10 px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-white transition"
            onClick={() => setShowTimeline(false)}
          >
            Back to Avatar
          </button>
        </div>
      )}
    </section>
  );
};

export default About;
