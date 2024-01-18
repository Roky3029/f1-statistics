import { Schedule } from '@/types/schedule'
import { SECONDS_ISR, SERVER_LINK } from './consts'
import { createObject } from '@/helpers/createObject'

export const getSchedule = async () => {
	const url = `${SERVER_LINK}/schedule`
	const schedule = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const calendar = (await schedule.json()) as Schedule

	const propertyKeys = Object.keys(calendar)
	const roundKeys = Object.keys(calendar.RoundNumber)

	const scheduleData = roundKeys.map(round => {
		const gpValues = propertyKeys.map(prop => {
			const values = Object.values(calendar[prop as keyof typeof calendar])

			return values[round as keyof typeof values]
		})

		const result = createObject(propertyKeys, gpValues)

		return result
	})

	return scheduleData
}
