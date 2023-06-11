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
				football: 'url("https://i.ibb.co/4j5J58C/football.jpg")',
				batminton: 'url("https://i.ibb.co/DVQCFd0/batminton.jpg")',
				topBanner: 'url("https://i.ibb.co/821yTdN/sectionbg.jpg")',
			},
		},
	},
	plugins: [require("daisyui"), require("flowbite/plugin")],
};
