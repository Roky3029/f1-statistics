import { getDriverStandings } from '@/data/getStandings'
import { type DriverStanding } from '@/types/driversTypes'
import { useEffect, useState } from 'react'
import LoadingModal from '@/components/Loading'
import SingleTab from './SingleTab'

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
					<div className='grid grid-cols-1 place-content-center text-center gap-5 text-2xl font-bold'>
						<span>Drivers' championship</span>{' '}
						<span>Season {currentSeason}</span>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] place-content-center gap-3 pt-10'>
						{standingList.map((driver: DriverStanding) => (
							<SingleTab
								constructorId={driver.Constructors[0].constructorId}
								familyName={driver.Driver.familyName}
								givenName={driver.Driver.givenName}
								key={driver.Driver.code}
								points={driver.points}
								position={driver.position}
							/>
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
