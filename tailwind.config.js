/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				cinzel: ["Cinzel", "serif"],
				inter: ["Inter", "sans-serif"],
			},
			backgroundImage: {
				hokey: 'url("https://i.ibb.co/PjCrf7v/hokey.jpg")',
				cricket: 'url("https://i.ibb.co/X5h2Y1z/cricket.png")',
				bowling: 'url("https://i.ibb.co/YtLXxBx/off-spin.jpg")',
				fielding: 'url("https://i.ibb.co/mXcFwMq/fielding.jpg")',
				women: 'url("https://i.ibb.co/MNk8m42/wemen-cricket.jpg")',
				topBanner: 'url("https://i.ibb.co/WFmrqPG/sectionbg.jpg")',
			},
		},
	},
	plugins: [require("daisyui"), require("flowbite/plugin")],
};
