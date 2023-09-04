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
		'United States': ' 🇺🇸 '
	}

	return (raceCountries as any)[country] || ' 🇺🇳 '
}
