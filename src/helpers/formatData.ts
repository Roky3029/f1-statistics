export const formatTime = (time: string): string => {
	const [horasUTC, minutosUTC, segundosUTC] = time
		.toString()
		.slice(0, -1)
		.split(':')
	const horaLocal = new Date()
	horaLocal.setUTCHours(+horasUTC)
	horaLocal.setUTCMinutes(+minutosUTC)
	horaLocal.setUTCSeconds(+segundosUTC)

	const horaCarrera = horaLocal.toLocaleTimeString('es-ES', {
		timeZone: 'Europe/Madrid'
	})

	return horaCarrera
}

export const formatDate = (date: string): string[] => {
	const [year, month, day] = date.toString().split('-')
	const newDateForDateConstructor = month + '/' + day + '/' + year
	const newDateForHumans = day + '/' + month + '/' + year

	return [newDateForHumans, newDateForDateConstructor]
}
