/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainColor: "#081B29",
				lightBlue: "#1DA0E6",
				shade: "#122E43",
				macGray: "#DEDDE1",
				macNumber: "#333333",
				macYellow: "#E7D181",
			},
			screens: {
				lg: "820px"
			}
		},
	},
	plugins: [],
};
