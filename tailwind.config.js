// tailwind.config.js

import { nextui } from "@nextui-org/react";

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./tailwind.css",
		// make sure it's pointing to the ROOT node_module
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [nextui()],
	corePlugins: {
		preflight: false, // 关闭预设样式
	},
};

