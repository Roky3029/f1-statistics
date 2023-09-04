import { notFound } from 'next/navigation'
import { type DriverInfo } from '@/types/driverInfoTypes'
import { SECONDS_ISR } from './consts'

export const getDriverInfo = async (driverId: string) => {
	try {
		const url = `http://ergast.com/api/f1/current/drivers/${driverId}.json`

		const data = await fetch(url, { next: { revalidate: SECONDS_ISR } })
		if (!data.ok) notFound()

		const driverInfo = (await data.json()) as DriverInfo

		return driverInfo.MRData.DriverTable.Drivers[0]
	} catch (err) {
		console.log(err)
		notFound()
	}
}
