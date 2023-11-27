import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			textColor: {
				f1: '#ff1801',
				'f1-second': 'rgb(166, 144, 79)',
				mercedes: '#00D2BE',
				ferrari: '#DC0000',
				red_bull: '#0600EF',
				alpine: '#0090FF',
				haas: '#FFFFFF',
				aston_martin: '#006F62',
				alphatauri: '#2B4562',
				mclaren: '#FF8700',
				alfa: '#900000',
				williams: '#005AFF',
				silver: '#c0c0c0',
				bronze: '#CD7F32',
				gold: '#ffd700'
			},
			backgroundColor: {
				f1: '#ff1801',
				'f1-second': 'rgb(166, 144, 79)',
				silver: '#c0c0c0',
				bronze: '#CD7F32',
				gold: '#ffd700'
			},
			fontFamily: {
				f1: ['var(--font-f1)']
			},
			borderColor: {
				f1: '#ff1801'
			}
		}
	},
	plugins: [nextui(), require('@tailwindcss/typography')]
}
export default config
