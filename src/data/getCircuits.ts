import { CircuitInformation } from '@/types/circuit'
import { SECONDS_ISR } from './consts'

export const getCircuits = async () => {
	const url = 'https://ergast.com/api/f1/2023/circuits.json'
	const response = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const data = (await response.json()) as CircuitInformation

	return {
		circuits: data.MRData.CircuitTable.Circuits,
		season: data.MRData.CircuitTable.season
	}
}
