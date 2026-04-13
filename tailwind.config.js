/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			colors: {
				accent: {
					DEFAULT: "#475569",
					light: "#64748b",
					dark: "#334155",
				},
			},
		},
	},
	plugins: [],
};
