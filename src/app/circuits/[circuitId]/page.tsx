/* eslint-disable */
import { getSingleCircuit } from '@/data/getSingleCircuit'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { notFound } from 'next/navigation'
import { circuitData as getData } from '@/data/circuits'
import Image from 'next/image'

const CircuitIdPage = async ({ params }: { params: { circuitId: string } }) => {
	const data = await getSingleCircuit(params.circuitId)
	const circuitData = getData.filter(circuit => circuit.id === params.circuitId)

	if (!data.circuitName || circuitData.length > 1 || !circuitData) notFound()

	const [
		{
			authorOfFastestLap,
			fastestLap,
			firstRace,
			numberOfLaps,
			oneLapDistance,
			raceDistance
		}
	] = circuitData
	const { circuitName, country, latitude, locality, longitude } = data

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			{/* dark:text-white */}
			<p className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
				{circuitName}
			</p>

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-3xl font-bold text-gray-900'>
					{country} {getCountryFlag(country)} - {locality}
				</p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p>
							<span className='opacity-70'>First race: </span>
							{firstRace}
						</p>
						<p>
							<span className='opacity-70'>Total laps: </span>
							{numberOfLaps}
						</p>
						<p>
							<span className='opacity-70'>One lap distance: </span>
							{oneLapDistance} km
						</p>
						<p>
							<span className='opacity-70'>Total distance: </span>
							{raceDistance} km
						</p>
						<div className='flex gap-3'>
							<span className='opacity-70'>Fastest lap: </span>
							<div>
								<p>{fastestLap}</p>
								<p className='text-2xl font-extrabold'>{authorOfFastestLap}</p>
							</div>
						</div>
					</div>

					<Image
						src={`/circuits/${params.circuitId}.png`}
						alt={`Image of the ${circuitName}`}
						width={771}
						height={434}
					/>
				</div>
			</div>
		</div>
	)
}

export default CircuitIdPage
