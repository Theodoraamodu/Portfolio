import React, { useState } from "react";
import "./Projects.css";
import ConstellationBackground from "./ConstellationBackground";

function FlipCard({ title, description, tools, links, image, iframe }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-front bg-[#112240] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
          {image && <img src={image} alt="preview" className="w-28 h-28 mb-4" />}
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-slate-300">{description}</p>
        </div>

        {/* Back */}
        <div className="flip-back bg-[#0d1b2a] p-6 rounded-xl text-sm flex flex-col justify-between">
          <div>
            <h4 className="text-pink-400 font-semibold mb-2">Tools Used</h4>
            <p className="text-slate-300 mb-4">{tools}</p>
          </div>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-pink-400 block"
            >
              🔗 {link.label}
            </a>
          ))}
          {iframe && (
            <iframe
              src={iframe}
              className="w-full h-48 mt-4 border border-white rounded-lg"
              allowFullScreen
              title={title}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-[#0a192f] text-white px-6 py-20 overflow-hidden">
      <ConstellationBackground />
      <h2 className="text-4xl font-bold text-center mb-12 z-10 relative">My Projects</h2>

      {/* Group Projects */}
      <div className="text-left mb-4 text-pink-400 text-2xl font-semibold">👥 Group Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative mb-16">
        <FlipCard
          title="Group UI/UX Project"
          description="A collaborative Figma design with functional UI layouts."
          tools="Figma, Canva"
          image="/book.gif"
          links={[{
            label: "View on Figma",
            url: "https://www.figma.com/file/alQmCg47QNevTOq0A2Ah24/Book-app"
          }]}
          iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/alQmCg47QNevTOq0A2Ah24/Book-app"
        />
        <FlipCard
          title="Fashion Website"
          description="Landing page for a fashion brand made with HTML/CSS/JS."
          tools="HTML, CSS, JavaScript"
          image="/dress.gif"
          links={[{
            label: "Live Site",
            url: "https://dorafashionproject.netlify.app/"
          }]}
        />
      </div>

      {/* Personal Projects */}
      <div className="text-left mb-4 text-pink-400 text-2xl font-semibold">🌿 Personal Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
        <FlipCard
          title="The Bees"
          description="Fun and interactive site for kids themed around buzzing bees."
          tools="HTML, CSS, JavaScript"
          image="/bee.gif"
          links={[{
            label: "Live Site",
            url: "https://beeweb.netlify.app/"
          }]}
        />
      </div>
    </section>
  );
}

export default Projects;
