import { type DriverStandings } from '@/types/driversTypes'
import { type ConstructorStandings } from '@/types/constructorTypes'
import { SECONDS_ISR } from './consts'
import { notFound } from 'next/navigation'

export const getDriverStandings = async () => {
	try {
		const url = 'https://ergast.com/api/f1/current/driverStandings.json'
		const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })
		const drivers = (await data.json()) as DriverStandings

		return {
			currentSeason: drivers.MRData.StandingsTable.season,
			standingList:
				drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings
		}
	} catch (err) {
		console.log(err)
		notFound()
	}
}

export const getConstructorStandings = async () => {
	const url = 'https://ergast.com/api/f1/current/constructorStandings.json'
	const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const constructors = (await data.json()) as ConstructorStandings

	return {
		currentSeason: constructors.MRData.StandingsTable.StandingsLists[0].season,
		standingList:
			constructors.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
	}
}
