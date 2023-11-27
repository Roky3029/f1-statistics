import { FastestPitStop } from '@/types/pitStop'
import { notFound } from 'next/navigation'
import { getDriverInfo } from './getDriverInfo'
import { getDriverStandings } from './getStandings'

export const getFastestPitStop = async (round: string) => {
	const url = `https://ergast.com/api/f1/current/${round}/pitstops.json`

	const data = await fetch(url)

	if (!data.ok) notFound()

	const fetchedData = (await data.json()) as FastestPitStop

	// return fetchedData.MRData.RaceTable.Races[0]
	const pitStops = fetchedData.MRData.RaceTable.Races[0]?.PitStops
	let firstPitStop = +pitStops[0].duration

	for (const pitstop of pitStops) {
		if (+pitstop.duration < firstPitStop) firstPitStop = +pitstop.duration
	}

	const [fastestPitStop] = pitStops.filter(
		pitstop => +pitstop.duration === firstPitStop
	)

	const driversAndConstructors = await getDriverStandings()
	const [fastestTeam] = driversAndConstructors.standingList.filter(
		team => team.Driver.driverId === fastestPitStop.driverId
	)

	return {
		lap: fastestPitStop.lap,
		duration: fastestPitStop.duration + ' s',
		driverName: fastestTeam.Driver.givenName,
		driverFamilyName: fastestTeam.Driver.familyName,
		constructorId: fastestTeam.Constructors[0].constructorId
	}
}
