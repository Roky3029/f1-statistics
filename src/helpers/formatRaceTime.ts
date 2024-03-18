const formatRaceTime = (position: number, time: number) => {
	if (time === -1) return '-'
	const date = new Date(time)

	if (position === 1) {
		return `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`
	}

	return `+${date.getUTCSeconds()}.${date.getUTCMilliseconds()}`
}

export { formatRaceTime }
