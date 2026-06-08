import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1A0612",
        indigo: "#590D22",
        mauve: "#FFB3C1",
        blush: "#FF4D6D",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        aurora: "aurora 15s ease infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        aurora:
          "linear-gradient(135deg, #1A0612, #590D22, #A4133C, #FF758F, #590D22, #1A0612)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(255, 77, 109, 0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(255, 77, 109, 0.25)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
