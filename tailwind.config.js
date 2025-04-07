/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "cloud-slow": "cloudMove 30s linear infinite",
        "cloud-fast": "cloudMove 20s linear infinite",
      },

      keyframes: {
        cloudMove: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
    },
  },

  

  plugins: [],
};

