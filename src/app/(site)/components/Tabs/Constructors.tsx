import { getConstructorsStandings } from '@/data/getConstructorsStandings'
import { useEffect, useState } from 'react'
import {
	ConstructorsStandings,
	ConstructorStanding
} from '@/types/constructors'
import SingleTab from './SingleTab'
import { GridLoader } from 'react-spinners'

const Drivers = () => {
	const [data, setData] = useState<ConstructorsStandings | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getConstructorsStandings(setData, setLoading)
	}, [])

	return (
		<>
			<div className='w-full flex flex-col items-center justify-center'>
				{loading ? (
					<div className='py-10'>
						<GridLoader size={20} />
						<p>
							The data fetching may take a while. Please wait a few seconds or
							refresh the page.
						</p>
					</div>
				) : (
					<>
						<div className='grid grid-cols-1 place-content-center text-center gap-5 text-2xl font-bold'>
							<span>Constructors' championship</span>{' '}
							<p>Season {data?.season}</p>
						</div>
						<div className='grid grid-cols-1 lg:grid-cols-2 w-[90%] place-content-center gap-3 pt-10'>
							{data?.ConstructorStandings?.map(
								(team: ConstructorStanding, i: any) => (
									<SingleTab
										constructorId={team.Constructor.constructorId}
										constructorName={team.Constructor.name}
										key={i}
										points={team.points}
										position={team.position}
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
