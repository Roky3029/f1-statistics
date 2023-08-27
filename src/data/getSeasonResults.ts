import { SeasonResults } from '@/types/seasonResults'
import { notFound } from 'next/navigation'

export const getSeasonResults = async (season: number) => {
	const url = `http://ergast.com/api/f1/${season}/driverStandings.json?limit=100`

	const response = await fetch(url)

	if (!response.ok) notFound()

	const responseData = (await response.json()) as SeasonResults

	return responseData.MRData.StandingsTable.StandingsLists[0]?.DriverStandings
}
