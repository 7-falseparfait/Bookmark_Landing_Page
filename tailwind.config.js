/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Ensure the paths are correct
  theme: {
    extend: {
      colors: {
        blue: {
          600: "rgb(83,104,223)",
          950: "hsl(229, 31%, 30%)",
        },
        red: {
          400: "hsl(0, 94%, 66%)",
        },
        gray: {
          50: "hsl(0, 0%, 97%)",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        mobile: "375px",
        xs: "400px",
        md: "1500px", // ✅ added this line
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
