import { type RaceResults } from '@/types/raceResultsTypes'
import { notFound } from 'next/navigation'

export const getRaceResults = async (round: string) => {
	const url = `http://ergast.com/api/f1/current/${round}/results.json`

	const data = await fetch(url)

	if (!data.ok) notFound()

	const raceResults = (await data.json()) as RaceResults

	return raceResults.MRData.RaceTable.Races[0]?.Results ?? []
}
