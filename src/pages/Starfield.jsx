import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Starfield() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // loads all tsParticles features
  }, []);

  return (
    <Particles
      id="starfield"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#0d1b2a" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["push"], // creates particles as you move!
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1, // how many stars per movement
            },
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            outModes: {
              default: "bounce",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Starfield;
