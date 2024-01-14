import { SECONDS_ISR, SERVER_LINK } from './../consts'
import { NextEvent } from '@/types/next_event'

export const getEvent = async (round: string) => {
	const url = `${SERVER_LINK}/event/${round}`
	const eventData = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const event = (await eventData.json()) as NextEvent

	return event
}
