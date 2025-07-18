/* @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				oxford: "#02254D",
				mag: "#FFF7DB",
				teal: "#0361AD",
			},
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
