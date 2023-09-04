import { SingleCircuit } from '@/types/singleCircuit'
import { notFound } from 'next/navigation'
import { SECONDS_ISR } from './consts'

export const getSingleCircuit = async (circuitId: string = 'spa') => {
	const url = `http://ergast.com/api/f1/circuits/${circuitId}.json`

	const response = await fetch(url, { next: { revalidate: SECONDS_ISR } })

	if (!response.ok) notFound()
	const data = (await response.json()) as SingleCircuit

	return {
		circuitName: data.MRData.CircuitTable.Circuits[0]?.circuitName,
		latitude: data.MRData.CircuitTable.Circuits[0]?.Location.lat,
		longitude: data.MRData.CircuitTable.Circuits[0]?.Location.long,
		locality: data.MRData.CircuitTable.Circuits[0]?.Location.locality,
		country: data.MRData.CircuitTable.Circuits[0]?.Location.country
	}
}
