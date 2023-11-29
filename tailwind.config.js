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
        primary: theme.colors.red,
        secondary: theme.colors.leman,
        accent: theme.colors.red,
        neutral: theme.colors.black,
        "neutral-content": theme.colors.white,
        error: theme.colors.red,
        "base-100": theme.colors.white,
        "base-200": theme.colors["gray-100"],
        "base-300": theme.colors["gray-200"],
        "base-content": theme.colors.black,
        "--rounded-box": "0.25rem",
        "--rounded-btn": "0.125rem",
        "--btn-text-case": "none",
      },
    },
  ],
};
