/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#93BBFB", //lightblue
          "primary-content": "#212638", //bluegray
          secondary: "#DAE8FF", //whiteblue
          "secondary-content": "#212638", //bluegray
          accent: "#93BBFB", //lightblue
          "accent-content": "#212638", //bluegray
          neutral: "#212638", //bluegray
          "neutral-content": "#ffffff", //white
          "base-100": "#ffffff", //white
          "base-200": "#f4f8ff", //white?
          "base-300": "#DAE8FF", //whiteblue
          "base-content": "#212638", //bluegray
          info: "#93BBFB", //lightblue
          success: "#34EEB6", //mintgreen
          warning: "#FFCF72", //yellow
          error: "#FF8863", //red

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#212638", //bluegray
          "primary-content": "#F9FBFF", //white?
          secondary: "#2A3655", //bluebluegray
          "secondary-content": "#F9FBFF", //white?
          accent: "#4969A6", //bluebluebluegray
          "accent-content": "#F9FBFF", //white?
          neutral: "#F9FBFF", //white?
          "neutral-content": "#385183", //bluebluegray??
          "base-100": "#385183", //bluebluegray??
          "base-200": "#2A3655", //bluebluegray
          "base-300": "#212638", //bluegray
          "base-content": "#F9FBFF", //white?
          info: "#385183", //bluebluegray??
          success: "#34EEB6", //mintgreen
          warning: "#FFCF72", //yellow
          error: "#FF8863", //red

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000", //black
          "primary-content": "#ffffff", //white
          secondary: "#FF6644", //red
          "secondary-content": "#212638", //gray
          accent: "#93BBFB", //lightblue
          "accent-content": "#212638", //gray
          neutral: "#f3f3f3", //white?
          "neutral-content": "#212638", //gray
          "base-100": "#ffffff", //white
          "base-200": "#f1f1f1", //white?
          "base-300": "#d0d0d0", //graywhite
          "base-content": "#212638", //gray
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      fontFamily: {
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.1, 1.1)" },
        },
      },
      animation: {
        grow: "grow 5s linear infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        zoom: "zoom 1s ease infinite",
      },
    },
  },
};
