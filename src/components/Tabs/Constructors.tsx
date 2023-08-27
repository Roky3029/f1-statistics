import { getConstructorStandings } from '@/data/getStandings'
import { type ConstructorStanding } from '../../types/constructorTypes'
import { useEffect, useState } from 'react'
import LoadingModal from '../Loading'

const constructors = {
	williams: 'text-williams',
	alfa: 'text-alfa',
	mercedes: 'text-mercedes',
	haas: 'text-haas',
	mclaren: 'text-mclaren',
	aston_martin: 'text-aston_martin',
	red_bull: 'text-red_bull',
	alphatauri: 'text-alphatauri',
	ferrari: 'text-ferrari',
	alpine: 'text-alpine'
}

const Drivers = () => {
	const [currentSeason, setCurrentSeason] = useState('')
	const [standingList, setCurrentStandingList] = useState<any[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const dataFetched = await getConstructorStandings()
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
						Constructors' championship | Season {currentSeason}
					</div>
					<div className='grid grid-cols-2 w-[90%] place-content-center gap-3 pt-10'>
						{standingList.map((constructor: ConstructorStanding) => (
							<div
								key={constructor.position}
								className='text-xl bg-blue-200 py-6 flex items-center rounded-xl space-x-10'
							>
								<span
									className={`${
										constructor.position === '1' ? 'text-gold' : ''
									} ${constructor.position === '2' ? 'text-silver' : ''} ${
										constructor.position === '3' ? 'text-bronze' : ''
									}  border-r-1 pl-8 pr-10 py-4 w-[10%] text-center border-black text-2xl`}
								>
									{constructor.position}
								</span>
								<div className='flex items-center justify-between w-full pr-10'>
									<div className='flex flex-col'>
										<span
											className={`text-3xl ${
												(constructors as any)[
													constructor.Constructor.constructorId
												]
											}`}
										>
											{constructor.Constructor.name}
										</span>
									</div>

									<div>
										<span className='text-3xl'>{constructor.points}</span>
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
