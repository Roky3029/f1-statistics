import PodiumStanding from '@/components/PodiumStanding'
import { getSeasonResults } from '@/data/getSeasonResults'
import { notFound } from 'next/navigation'

const Page = async ({ params }: { params: { seasonId: string } }) => {
	const standingTable = await getSeasonResults(+params.seasonId)
	if (!standingTable) notFound()

	const podium = [standingTable[1], standingTable[0], standingTable[2]]
	const notPodiumResults = standingTable.filter(result => +result.position > 3)

	return (
		<>
			<p className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
				Season {params.seasonId} results
			</p>

			<div className='grid grid-cols-1 w-1/2 lg:grid-cols-3 gap-5 lg:gap-10'>
				{podium.map(pilot => (
					<PodiumStanding
						position={pilot.position}
						givenName={pilot.Driver.givenName}
						familyName={pilot.Driver.familyName}
						points={pilot.points}
						driverCode={pilot.Driver.code}
						isSeasonResult
						constructorName={pilot.Constructors[0].name}
					/>
				))}
			</div>

			<div className='flex items-center justify-center flex-col w-full pt-40 px-10'>
				<div className='w-full grid grid-cols-3 lg:grid-cols-4 px-0 lg:px-10 pb-5 border-b-2 border-slate-500 gap-24 lg:gap-0'>
					<p className='hidden lg:block'>Position</p>
					<p>Driver</p>
					<p>Constructor</p>
					<p>Points</p>
				</div>
				{notPodiumResults.map(pilot => (
					<div className='border-b-2 border-slate-500 last:border-none px-0 lg:px-10 py-3 w-full grid grid-cols-3 lg:grid-cols-4 gap-24 lg:gap-0'>
						<p className='items-center hidden lg:flex'>{pilot.position}</p>
						<p className='text-lg'>
							{pilot.Driver.givenName}
							<span className='text-lg md:text-2xl'>
								{` ${pilot.Driver.familyName}`}
							</span>
						</p>
						<p className='flex items-center'>{pilot.Constructors[0].name}</p>
						<p className='flex items-center'>{pilot.points}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default Page
