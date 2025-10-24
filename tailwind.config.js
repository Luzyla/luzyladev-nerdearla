/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans serif"],
      },
      colors: {
        // Colores de Texto (text-*)
        "txt-base": "#b3a3ba",
        "txt-base2": "#d9d8d9",
        "txt-acento": "#b3a3ba",
        "txt-dark": "#d9d8d9",
        "txt-ppal": "#009c86", // Principal
        "txt-white": "#d9d8d9",
        "txt-light": "#b3a3ba",
        "txt-purple": "#d9d8d9",
        "txt-love": "#b3a3ba",

        // Colores de Iconos y Botones
        icons: "#68507b",
        "button-light": "#b3a3ba",

        // Colores de Fondo (bg-*)
        "bg-base": "#10091d", // Mapeado de --background-color
        "bg-light": "#190f2e", // Mapeado de --background-color-light
        "bg-light2": "#28193d90", // Mapeado de --background-color-light2
        "bg-dark": "#46315c", // Mapeado de --background-color-dark
        "bg-white-semi": "#28193d80", // Mapeado de --background-color-white
        "bg-light3": "#68507b", // Mapeado de --background-color-light3
        "bg-mobile-semi": "#10091d99", // Mapeado de --background-mobile

        // Otros Colores
        "card-border": "#46315c", // Mapeado de --color-card-border
      },
      boxShadow: {
        header: "0 0 29px 0 #fafafa40",
        form: "0 4px 8px 0 #00000066, 0 6px 20px 0 #0000004d",
        card: "0 0 10px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
