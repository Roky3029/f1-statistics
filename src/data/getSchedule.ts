import { Schedule } from '@/types/scheduleTypes'
import { notFound } from 'next/navigation'

export const getSchedule = async (round?: string) => {
	let url

	if (round) {
		url = `https://ergast.com/api/f1/current/${round}.json`
	} else {
		url = 'https://ergast.com/api/f1/current.json'
	}

	const data = await fetch(url)

	if (!data.ok) notFound()

	const schedule = (await data.json()) as Schedule

	return {
		season: schedule.MRData.RaceTable.season,
		races: schedule.MRData.RaceTable.Races
	}
}
