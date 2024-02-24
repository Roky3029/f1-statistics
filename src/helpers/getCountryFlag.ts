export const getCountryFlag = (country: string) => {
	const raceCountries = {
		Bahrain: ' 🇧🇭 ',
		'Saudi Arabia': '🇸🇦',
		Australia: ' 🇦🇺 ',
		Azerbaijan: ' 🇦🇿 ',
		USA: ' 🇺🇸 ',
		Monaco: ' 🇲🇨 ',
		Spain: ' 🇪🇸 ',
		Canada: ' 🇨🇦 ',
		Austria: ' 🇦🇹 ',
		UK: ' 🇬🇧 ',
		Hungary: ' 🇭🇺 ',
		Belgium: ' 🇧🇪 ',
		Netherlands: ' 🇳🇱 ',
		Italy: ' 🇮🇹 ',
		Singapore: ' 🇸🇬 ',
		Japan: ' 🇯🇵 ',
		Qatar: ' 🇶🇦 ',
		Mexico: ' 🇲🇽 ',
		Brazil: ' 🇧🇷 ',
		UAE: ' 🇦🇪 ',
		China: ' 🇨🇳 ',
		'United States': ' 🇺🇸 ',
		'Great Britain': ' 🇬🇧 ',
		'Abu Dhabi': ' 🇦🇪 '
	}

	return (raceCountries as any)[country] || ' 🇺🇳 '
}
