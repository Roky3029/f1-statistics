import { Circuits } from '@/types/circuits'
import { SECONDS_ISR, SERVER_LINK } from './../consts'

export const getCircuits = async () => {
	const url = `${SERVER_LINK}/circuits`
	const circuits = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const circuitsData = (await circuits.json()) as Circuits[]

	return circuitsData
}
