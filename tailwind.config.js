/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				jti: '#7a0000'
			},
			fontFamily: {
				'jti': ['Jujutsu Kaisen', 'sans-serif']
			}
		}
	},
	plugins: []
};