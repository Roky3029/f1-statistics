import { ConstructorsStandings } from '@/types/constructors'
import { SECONDS_ISR, SERVER_LINK } from '../consts'

export const getConstructorsStandings = (setData: any, setLoading: any) => {
	const url = `${SERVER_LINK}/standings/constructors`
	fetch(url, { next: { revalidate: SECONDS_ISR } })
		.then(res => res.json())
		.then(data => {
			setData(data[0] as ConstructorsStandings)
			setLoading(false)
		})
}
