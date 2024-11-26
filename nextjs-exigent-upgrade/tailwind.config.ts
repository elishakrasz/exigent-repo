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

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    keyframes: {
      backgroundanimation:{
        "0%, 60%, 80%": { opacity: "1", zIndex: "999999" },
        "90%, 100%": { opacity: "0", zIndex: "-1" },
      },
      animationX: {
        "10%, 20%": { transform: "rotateZ(90deg)" },
        "50%, 100%": { transform: "rotateZ(450deg)" },
      },
      animation1: {
        "0%": { opacity: "0" },
        "10%, 100%": { opacity: "1" },
      },
      animation2: {
        "0%, 10%, 30%, 100%": { opacity: "0" },
        "20%": { opacity: "1" },
      },
      animation3: {
        "0%, 20%, 40%, 100%": { opacity: "0" },
        "30%": { opacity: "1" },
      },
      animation4: {
        "0%, 30%, 50%, 100%": { opacity: "0" },
        "40%": { opacity: "1" },
      },
      animation8: {
        "0%, 60%": { opacity: "0" },
        "70%, 75%": { opacity: "1" },
        "85%, 100%": { opacity: "0" },
      },
    },
    animation: {
      backgroundanimation: "backgroundanimation 7.5s ease-in-out forwards",
      "animation-x": "animationX 7.5s cubic-bezier(0.5,0,0,1) forwards",
      "animation-1": "animation1 7.5s cubic-bezier(0.5,0,0,1) forwards",
      "animation-2": "animation2 7.5s cubic-bezier(0.5,0,0,1) forwards",
      "animation-3": "animation3 7.5s cubic-bezier(0.5,0,0,1) forwards",
      "animation-4": "animation4 7.5s cubic-bezier(0.5,0,0,1) forwards",
      "animation-8": "animation8 7.5s ease-in-out forwards",
    },
  },
  plugins: [],
};
export default config;
