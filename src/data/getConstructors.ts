import { type Constructors } from '@/types/constructors'

export const getConstructors = async () => {
	const url = 'http://ergast.com/api/f1/current/constructors.json'
	const data = await fetch(url)
	const constructors = (await data.json()) as Constructors

	return {
		constructors: constructors.MRData.ConstructorTable.Constructors
	}
}
