import { notFound } from 'next/navigation'
import { type DriverInfo } from '@/types/driverInfoTypes'

export const getDriverInfo = async (driverId: string) => {
	const url = `http://ergast.com/api/f1/current/drivers/${driverId}.json`

	const data = await fetch(url)
	if (!data.ok) notFound()

	const driverInfo = (await data.json()) as DriverInfo

	return driverInfo.MRData.DriverTable.Drivers[0]
}
