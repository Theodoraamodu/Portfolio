import ConstellationBackground from "./ConstellationBackground";
import { useState } from "react";
import "./Projects.css";

function FlipCard({ title, description, tools, links, iframe, image }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-front bg-[#112240] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center text-center">
          {image && (
            <img
              src={image}
              alt="preview"
              className="w-40 h-40 mb-4"
              draggable="false"
            />
          )}
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-slate-300">{description}</p>
        </div>

        <div className="flip-back bg-[#0d1b2a] p-6 rounded-xl shadow-lg text-sm flex flex-col justify-between">
          <div>
            <h4 className="text-pink-400 text-lg font-semibold mb-2">Tools Used</h4>
            <p className="text-slate-300 mb-4">{tools}</p>
          </div>
          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white underline hover:text-pink-400 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 {link.label}
              </a>
            ))}
          </div>
          {iframe && (
            <iframe
              src={iframe}
              className="w-full h-[200px] mt-4 border border-white rounded-lg"
              allowFullScreen
              title="Figma preview"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0a192f] text-white px-6 py-20 overflow-hidden"
    >
      <ConstellationBackground />

      <h2 className="text-4xl font-bold text-center mb-12 z-10 relative">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
        <FlipCard
          title="Group UI/UX Project"
          description="Collaborative design and dev project built in Figma."
          tools="Figma and Canva"
          image="/book.gif"
          links={[
            {
              label: "View on Figma",
              url: "https://www.figma.com/file/alQmCg47QNevTOq0A2Ah24/Book-app",
            },
          ]}
          iframe="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/alQmCg47QNevTOq0A2Ah24/Book-app"
        />
        <FlipCard
          title="The Bees 🐝"
          description="A fun interactive webpage designed with buzzing bees and nature vibes."
          tools="HTML, CSS, JavaScript, Netlify"
          image="/bee.gif"
          links={[
            {
              label: "Live Site",
              url: "https://beeweb.netlify.app/",
            },
          ]}
        />
        <FlipCard
          title="Fashion"
          description="A sleek and stylish collaborative landing page for a fashion brand."
          tools="HTML, CSS, JavaScript, Netlify"
          image="/dress.gif"
          links={[
            {
              label: "Live Site",
              url: "https://dorafashionproject.netlify.app/",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
