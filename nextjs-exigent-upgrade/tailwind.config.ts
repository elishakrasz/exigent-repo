import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
    screens: {
      'sm': '520px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1080px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    keyframes: {
      backgroundanimation: {
        "0%, 60%": { opacity: "1", zIndex: "999999" }, // Visible state extended
        "70%, 100%": { opacity: "0", zIndex: "-1" }, // Transition to hidden state
      },
      animationX: {
        "0%": { transform: "rotateZ(0deg)" },
        "10%, 20%": { transform: "rotateZ(90deg)" },
        "50%, 80%": { transform: "rotateZ(450deg)" }, // Hold rotation during visibility
        "100%": { transform: "rotateZ(450deg)" }, // Final state remains same
      },
      animation1: {
        "0%": { opacity: "0" },
        "10%, 80%": { opacity: "1" }, // Stay visible from 10% to 80%
        "100%": { opacity: "0" },
      },
      animation2: {
        "0%, 10%, 40%, 100%": { opacity: "0" },
        "20%, 30%": { opacity: "1" }, // Visible for a longer duration
      },
      animation3: {
        "0%, 20%, 50%, 100%": { opacity: "0" },
        "30%, 40%": { opacity: "1" },
      },
      animation4: {
        "0%, 30%, 60%, 100%": { opacity: "0" },
        "40%, 50%": { opacity: "1" },
      },
      animation8: {
        "0%, 60%": { opacity: "0" },
        "70%, 85%": { opacity: "1" }, // Extend visibility
        "95%, 100%": { opacity: "0" },
      },
    },
    animation: {
      backgroundanimation: "backgroundanimation 9.5s ease-in-out forwards", // Adjusted duration
      "animation-x": "animationX 9.5s cubic-bezier(0.5, 0, 0, 1) forwards",
      "animation-1": "animation1 9.5s cubic-bezier(0.5, 0, 0, 1) forwards",
      "animation-2": "animation2 9.5s cubic-bezier(0.5, 0, 0, 1) forwards",
      "animation-3": "animation3 9.5s cubic-bezier(0.5, 0, 0, 1) forwards",
      "animation-4": "animation4 9.5s cubic-bezier(0.5, 0, 0, 1) forwards",
      "animation-8": "animation8 9.5s ease-in-out forwards", // Adjusted duration
    },
  },    
  plugins: [],
};
export default config;
