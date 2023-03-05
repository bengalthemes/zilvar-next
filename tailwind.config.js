/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "100%",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        body: "#6f6d6d",
        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
        "white-smoke": "#f8f9fa",
        "gray-light": "rgba(255, 255, 255, 0.1)",
        yellow: "#efbe13",
        warning: "#facd5d",
        danger: "#ff4c3a",
        broken: "#fd5c63",
        gray: {
          50: "#f2f2f2",
          100: "#ebebeb",
          150: "#e2e3e3",
          200: "#d1d1d1",
          300: "#b3b3b3",
          400: "#999999",
          500: "#838383",
          600: "#646565",
          700: "#4b4c4c",
          750: "#424242",
          800: "#333333",
          900: "#212121",
          1000: "#0a0a0a",
        },
        dark: {
          DEFAULT: "#151515",
          smoke: "#0f0f0f",
          base: "#ababab",
          100: "#1c1c1c",
        },
      },
      boxShadow: {
        header: "0px 0px 8px #d1d1d1",
        headerDark: "0 0 8px rgba(255, 255, 255, 0.15)",
        scrollTop: "0 0 6px rgba(255 255 255, 0.4)",
        testimonial: "0px 0px 6px rgba(0,0,0,0.06)",
        drawer: "2px 0px 8px rgba(0, 0, 0, 0.15)",
        map: "0 2px 6px #ebebeb",
        mapDark: "0 2px 6px #4b4c4c",
      },
      fontFamily: {
        body: ["var(--font-poppins)"],
        awesome: ["'Font Awesome 6 Free'"],
      },
      backgroundPosition: {
        bgLine: "0 95%",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },
        mask: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modal: {
          "0%": { transform: "translateY(-50px)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "active-online": {
          "0%": {
            transform: "scale(0.5)",
            opacity: 1,
          },
          "20%": {
            transform: "scale(1.2)",
            opacity: 0.5,
          },
          "40%": {
            transform: "scale(1.4)",
            opacity: 0.4,
          },
          "60%": {
            transform: "scale(1.6)",
            opacity: 0.3,
          },
          "80%": {
            transform: "scale(1.8)",
            opacity: 0.2,
          },
          "100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
      },
      animation: {
        "active-online": "active-online linear 1s infinite",
        bounce: "bounce linear 2s infinite",
        mask: "mask ease-in-out 0.3s",
        modal: "modal ease-out 0.3s",
      },

      transitionProperty: {
        hoverLine:
          "background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
