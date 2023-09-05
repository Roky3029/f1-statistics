import { type RaceResults } from '@/types/raceResultsTypes'
import { notFound } from 'next/navigation'
import { SECONDS_ISR } from './consts'

export const getRaceResults = async (round: string) => {
	const url = `https://ergast.com/api/f1/current/${round}/results.json`

	const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })

	if (!data.ok) notFound()

	const raceResults = (await data.json()) as RaceResults

	return raceResults.MRData.RaceTable.Races[0]?.Results ?? []
}
