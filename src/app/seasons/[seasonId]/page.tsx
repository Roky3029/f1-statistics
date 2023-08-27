import { constructors } from '@/data/constructors'
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

			<div className='grid grid-cols-3 gap-10'>
				{podium.map(pilot => (
					<div
						className={`${
							pilot.position === '1' // -> check if the pilot on the podium is the 1st
								? 'bg-gold' // -> we won't add translation, as it has to be the highest
								: pilot.position === '2' // -> if it's not first, check if it's second
								? 'translate-y-16 bg-silver' // -> if true, translate him
								: 'translate-y-32 bg-bronze' // -> if not, (which will result in him being 3rd) we'll translate him even more
						} flex flex-col items-center justify-center px-10 pt-4 rounded-lg shadow-md`}
					>
						<h2 className='text-2xl font-bold '>
							{pilot.Driver.givenName} {pilot.Driver.familyName}
						</h2>

						<div className='flex items-center justify-center gap-10'>
							<p>{pilot.points} points</p>
						</div>

						<p className='text-lg pt-10'>{pilot.Constructors[0].name}</p>
						<img
							src={`/drivers/${pilot.Driver.code || 'placeholder'}.png`}
							width={256}
							height={256}
							alt=''
						/>
					</div>
				))}
			</div>

			<div className='flex items-center justify-center flex-col w-full pt-40 px-10'>
				<div className='w-full grid grid-cols-4 px-10 pb-5 border-b-2 border-slate-500'>
					<p>Position</p>
					<p>Driver</p>
					<p>Constructor</p>
					<p>Points</p>
				</div>
				{notPodiumResults.map(pilot => (
					<div className='border-b-2 border-slate-500 last:border-none px-10 py-3 w-full grid grid-cols-4'>
						<p className='flex items-center'>{pilot.position}</p>
						<p className='text-xl flex items-center gap-3'>
							{pilot.Driver.givenName}{' '}
							<span className='text-2xl'>{pilot.Driver.familyName}</span>
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
