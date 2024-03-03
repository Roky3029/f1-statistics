import { DriversStanding, DriverStanding } from '@/types/driverStandings'
import { SECONDS_ISR, SERVER_LINK } from './consts'

export const getDriverStandings = (setData: any, setLoading: any) => {
	const url = `${SERVER_LINK}/standings/drivers`
	fetch(url, { next: { revalidate: SECONDS_ISR } })
		.then(res => res.json())
		.then(data => {
			setData(data[0] as DriverStanding)
			setLoading(false)
		})
}

export const getDriverStandingsSSR = async () => {
	const url = `${SERVER_LINK}/standings/drivers`
	const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })
	const fetchedData = (await data.json()) as DriversStanding[]

	return fetchedData
}
