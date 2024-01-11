import { NextEvent } from '@/types/next_event'
import { SECONDS_ISR, SERVER_LINK } from './../consts'
import { getCircuits } from './getCircuits'

export const getNextRace = async () => {
	const url = `${SERVER_LINK}/next_event`
	const nextRace = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const nextRaceData = (await nextRace.json()) as NextEvent

	const circuits = await getCircuits()

	const [circuit] = circuits.filter(
		cir => cir.Location.country === nextRaceData.Country
	)

	return { nextRaceData, circuit }
}
