/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	important: '#root',
	corePlugins: {
		preflight: false,
	},
	theme: {
		colors: {
			"white": "#F8F8F8",
			"black": "#151317",
			"violet": "#512689",
			"red": "#d32f2f",
		},
	},
	plugins: [],
};
