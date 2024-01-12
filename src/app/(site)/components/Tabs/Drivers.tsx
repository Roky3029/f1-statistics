import { getDriverStandings } from '@/data/newData/getDrivers'
import {
	DriverStandingElement,
	type DriverStanding
} from '@/types/driverStandings'
import { useEffect, useState } from 'react'
import SingleTab from './SingleTab'
import { GridLoader } from 'react-spinners'

const Drivers = () => {
	const [data, setData] = useState<DriverStanding | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getDriverStandings(setData, setLoading)
	}, [])

	return (
		<>
			<div className='w-full flex flex-col items-center justify-center'>
				{loading ? (
					<div className='py-10'>
						<GridLoader size={20} />
					</div>
				) : (
					<>
						<div className='grid grid-cols-1 place-content-center text-center gap-5 text-2xl font-bold'>
							<span>Drivers' championship</span> <p>Season {data?.season}</p>
						</div>
						<div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] place-content-center gap-3 pt-10'>
							{data?.DriverStandings?.map(
								(driver: DriverStandingElement, i: any) => (
									<SingleTab
										constructorId={driver.Constructors[0].constructorId}
										familyName={driver.Driver.familyName}
										givenName={driver.Driver.givenName}
										key={i}
										points={driver.points}
										position={driver.position}
									/>
								)
							)}
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Drivers
