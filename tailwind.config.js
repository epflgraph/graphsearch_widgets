/** @type {import('tailwindcss').Config} */

export const content = ["./src/components/**/*.{js,ts,jsx,tsx}"];

export const plugins = [require("daisyui")];

export const theme = {
  colors: {
    red: "#ff0000",
    "red-dark": "#B51F1F",
    white: "#FFFFFF",
    "gray-100": "#E6E6E6",
    "gray-200": "#D5D5D5",
    "gray-300": "#C1C1C1",
    "gray-600": "#707070",
    black: "#212121",
    leman: "#00A79F",
    canard: "007480",
  },
};

export const daisyui = {
  themes: [
    {
      epfl: {
        primary: "#ff0000",
        secondary: "#00A79F",
        accent: "#ff0000",
        neutral: "#212121",
        "neutral-content": "#ffffff",
        error: "#ff0000",
        "base-100": "#ffffff",
        "base-200": "#e6e6e6",
        "base-300": "#d5d5d5",
        "base-content": "#212121",
        "--rounded-box": "0.25rem",
        "--rounded-btn": "0.125rem",
        "--btn-text-case": "none",
      },
    },
  ],
};
