/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				geo: ['Geo', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#DAE7EC',

					secondary: '#DAE7EC',

					accent: '#D9D9D9',

					neutral: '#3D85F5',

					'base-100': '#DAE7EC',

					info: '#FFFFFF',

					success: '#84EDAF',

					warning: '#4B88C0',

					error: '#9238EB'
				}
			}
		]
	}
};
