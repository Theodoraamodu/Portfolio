import React from "react";
import Navbar from "./Navbar";
import Starfield from "./Starfield";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      {/*  Hero Section */}
      <div
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/stars.png')" }}
        id="home"
      >
        <Navbar />
        <Starfield />

        {/*  Clouds */}
        <img
          src="/cloud1.png"
          alt="cloud"
          className="absolute top-20 left-10 w-60 opacity-70 animate-cloud-slow z-10"
        />
        <img
          src="/cloud2.png"
          alt="cloud"
          className="absolute bottom-10 left-20 w-72 opacity-60 animate-cloud-fast z-10"
        />

        {/*  Intro Text */}
        <div className="z-20 px-4 max-w-3xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Hi, I’m Theodora —{" "}
            <span className="italic text-pink-300">“Dora the Explorer”</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-2xl mt-6 leading-relaxed">
            I’m an aspiring{" "}
            <span className="font-semibold italic text-white">
              “Software Engineer / UI/UX Designer”
            </span>{" "}
            with a touch of{" "}
            <span className="glow-hover font-semibold text-pink-400">“creativity”</span>.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-lg transition duration-300"
            >
              See My Work
            </a>

            {/* Resume Button */}
            <a
              href="/Theodora O.O Amodu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:bg-pink-100 transition duration-300"
            >
              View Resume 📄
            </a>
          </div>
        </div>

        {/* ⬇️ Scroll Cue */}
        <div className="absolute bottom-6 flex justify-center w-full z-20">
          <span className="animate-bounce text-white text-3xl">↓</span>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
