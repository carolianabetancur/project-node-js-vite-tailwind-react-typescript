/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#fff1ef",
					100: "#efb0a9",
					200: "#e39b93",
					300: "#d7867e",
				},
				secondary: {
					50: "#f3e8e9",
					100: "#bda0a2",
					200: "#a88b8d",
					300: "#937679",
				},
				accent: {
					50: "#f2fbfd",
					100: "#d1eaee",
					200: "#b8d7dc",
					300: "#9fc4ca",
				},
				neutralSoft: {
					50: "#f2f1ea",
					100: "#cbc8b5",
					200: "#b5b29f",
					300: "#9f9c89",
				},
				backgroundSoft: {
					50: "#fff8f4",
					100: "#ffe6db",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				soft: "0 4px 20px rgba(0,0,0,0.05)",
			},
		},
	},
	plugins: [],
};
