export const combineDate = (dateStr: string, timeStr: string) => {
	// Split date string into day, month, and year
	const [day, month, year] = dateStr.split('/')

	// Split time string into hours and minutes
	const [hours, minutes] = timeStr.split(':')

	// Create a new Date object with combined date and time
	const combinedDate = new Date(
		Number(year),
		Number(month) - 1,
		Number(day),
		Number(hours),
		Number(minutes)
	)

	return combinedDate
}
