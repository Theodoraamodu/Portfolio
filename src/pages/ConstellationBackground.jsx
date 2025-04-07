import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ConstellationBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // load tsparticles fully
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#0a192f" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: "bounce" },
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ConstellationBackground;
