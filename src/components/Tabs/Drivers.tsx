import { getDriverStandings } from '@/data/getStandings'
import { type DriverStanding } from '../../types/driversTypes'
import { useEffect, useState } from 'react'
import { constructors } from '@/data/constructors'
import LoadingModal from '../Loading'

const Drivers = () => {
	const [currentSeason, setCurrentSeason] = useState('')
	const [standingList, setCurrentStandingList] = useState<any[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const dataFetched = await getDriverStandings()
			setCurrentSeason(dataFetched.currentSeason)
			setCurrentStandingList(dataFetched.standingList)
			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<>
			{!loading ? (
				<>
					<div className='flex items-center justify-center space-x-7 text-2xl font-bold'>
						Drivers' championship | Season {currentSeason}
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] place-content-center gap-3 pt-10'>
						{standingList.map((driver: DriverStanding) => (
							<div
								key={driver.Driver.code}
								className='text-xl bg-blue-200 py-6 flex items-center rounded-xl space-x-10'
							>
								<span
									className={`${driver.position === '1' ? 'text-gold' : ''} ${
										driver.position === '2' ? 'text-silver' : ''
									} ${
										driver.position === '3' ? 'text-bronze' : ''
									}  border-r-1 pl-8 pr-10 py-4 w-[10%] text-center border-black text-2xl`}
								>
									{driver.position}
								</span>
								<div className='flex items-center justify-between w-full pr-10'>
									<div className='flex flex-col'>
										<span>{driver.Driver.givenName}</span>
										<span
											className={`text-3xl ${
												(constructors as any)[
													driver.Constructors[0].constructorId
												]
											}`}
										>
											{driver.Driver.familyName}
										</span>
									</div>

									<div>
										<span className='text-3xl'>{driver.points}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<LoadingModal />
			)}
		</>
	)
}

export default Drivers
