import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./src/data/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			textColor: {
				f1: '#ff1801',
				'f1-second': 'rgb(166, 144, 79)',
				mercedes: '#00D2BE',
				ferrari: '#DC0000',
				red_bull: '#0600EF',
				alpine: '#ff87bc',
				haas: '#FFFFFF',
				aston_martin: '#006F62',
				rb: '#6692ff',
				mclaren: '#FF8700',
				sauber: '#52e252',
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
				f1bold: ['Formula1Bold', 'Arial'],
				f1regular: ['Formula1Regular', 'Arial'],
				f1wide: ['Formula1Wide', 'Arial']
			},
			borderColor: {
				f1: '#ff1801'
			},
			keyframes: {
				opac: {
					'0%': { opacity: '1' },
					'50%': { opacity: '0.5' },
					'100%': { display: 'none', opacity: '0' }
				}
			},
			animation: {
				opac: 'opac .5s'
			}
		}
	}
}
export default config
