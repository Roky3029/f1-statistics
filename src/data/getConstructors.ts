import { type Constructors } from '@/types/constructors'
import { SECONDS_ISR } from './consts'

export const getConstructors = async () => {
	const url = 'https://ergast.com/api/f1/current/constructors.json'
	const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const constructors = (await data.json()) as Constructors

	return {
		constructors: constructors.MRData.ConstructorTable.Constructors
	}
}
