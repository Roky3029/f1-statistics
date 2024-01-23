import { Event } from '@/types/schedule'

export const createObject = (keys: any, properties: any) => {
	const resultObject = {}

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i]
		const property = properties[i]

		// @ts-ignore
		resultObject[key] = property
	}

	return resultObject as Event
}
