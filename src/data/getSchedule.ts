import { Schedule } from '@/types/scheduleTypes'
import { notFound } from 'next/navigation'
import { SECONDS_ISR } from './consts'

export const getSchedule = async (round?: string) => {
	let url

	if (round) {
		url = `http://ergast.com/api/f1/current/${round}.json`
	} else {
		url = 'http://ergast.com/api/f1/current.json'
	}

	const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })

	if (!data.ok) notFound()

	const schedule = (await data.json()) as Schedule

	return {
		season: schedule.MRData.RaceTable.season,
		races: schedule.MRData.RaceTable.Races
	}
}
