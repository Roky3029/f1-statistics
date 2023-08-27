export const hasDatePassed = (dateOfRace: Date) => {
	return dateOfRace.getTime() < new Date().getTime()
}
