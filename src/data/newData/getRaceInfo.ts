import { SECONDS_ISR, SERVER_LINK } from '../consts'
import { RaceResult, RaceResultRaw } from '@/types/raceResult'

function transformObject(originalObject: RaceResultRaw) {
	const resultArray = []

	// Assuming all inner objects have the same keys
	const innerKeys = Object.keys(
		originalObject[
			Object.keys(originalObject)[0] as keyof typeof originalObject
		]
	)

	for (const innerKey of innerKeys) {
		const newObj = {}
		for (const outerKey in originalObject) {
			if (originalObject.hasOwnProperty(outerKey)) {
				//@ts-ignore
				newObj[outerKey] = originalObject[outerKey][innerKey]
			}
		}
		resultArray.push(newObj)
	}

	return resultArray
}

export const getRaceInfo = async (round: string) => {
	const url = `${SERVER_LINK}/results/${round}`
	const race = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const raceData = await race.json()

	const raceResult = transformObject(raceData) as unknown as RaceResult[]

	return raceResult
}
