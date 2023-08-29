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
		<div className='w-full flex flex-col items-center justify-center'>
			<p className='mb-20 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
				{circuitName}
			</p>

			<p className='text-4xl text-gray-900 mb-10'>
				{country}
				{getCountryFlag(country)} - {locality}
			</p>

			<div className='px-96 bg-slate-300 py-5 mx-auto rounded-lg shadow-md mb-20 w-[90%] flex flex-col'>
				<p className='mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900'>
					Circuit data
				</p>

				<div className='grid grid-cols-2 w-full place-content-center'>
					<div>
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
							{oneLapDistance}
						</p>
						<p>
							<span className='opacity-70'>Total distance</span>
							{raceDistance}
						</p>
						<p>
							<span className='opacity-70'>Total distance</span>
							{raceDistance}
						</p>
						<div>
							<span className='opacity-70'>Fastest lap ever:</span>
							<div>
								<p>{raceDistance}</p>
								<p>{authorOfFastestLap}</p>
							</div>
						</div>
					</div>

					<img
						className='bg-blue-200 grid place-content-center '
						src={`/circuits/${params.circuitId}.png`}
						alt={`Image of the ${data.circuitName}`}
					/>
				</div>
			</div>
		</div>
	)
}

export default CircuitIdPage
