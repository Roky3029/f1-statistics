export const getNextRace = async (getAllData?: boolean) => {
	// Gets, from the current season, the next race is going to be celebrated
	const url = 'http://ergast.com/api/f1/current/next.json'
	const nextRace = await fetch(url, { cache: 'no-cache' })
	const nextRaceData = await nextRace.json()

	if (getAllData) return nextRaceData.MRData.RaceTable

	return {
		ronda: nextRaceData.MRData.RaceTable.round, // The race's position in the calendar of that year
		race: nextRaceData.MRData.RaceTable.Races[0].raceName, // The title of the race (Eg: Dutch Grand Prix)
		fecha: () => {
			// Returns the date of the race itself
			const fecha = nextRaceData.MRData.RaceTable.Races[0].date
			const [year, month, day] = fecha.split('-')
			// fecha()[0] return the date formatted in the normal mode (DD/MM/YYYY) and fecha()[1] returns the date in the way the new Date() can parse it
			return [day + '/' + month + '/' + year, month + '/' + day + '/' + year]
		},
		horaCarrera: () => {
			// Returns the hour of the race in the Europe/Madrid timezone based on the UTC hour
			const time = nextRaceData.MRData.RaceTable.Races[0].time
			const [horas, minutos, segundos] = time.slice(0, -1).split(':')

			const horaLocal = new Date()
			horaLocal.setUTCHours(horas)
			horaLocal.setUTCMinutes(minutos)
			horaLocal.setUTCSeconds(segundos)

			return horaLocal.toLocaleTimeString('es-ES', {
				timeZone: 'Europe/Madrid'
			})
		},
		circuit: nextRaceData.MRData.RaceTable.Races[0].Circuit.circuitName, // Returns the circuit name
		country: nextRaceData.MRData.RaceTable.Races[0].Circuit.Location.country // The country where the GP takes place
	}
}
