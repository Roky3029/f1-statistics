import { getCountryFlag } from '@/helpers/getCountryFlag'
import { notFound } from 'next/navigation'
import { circuitData as getData } from '@/data/circuits'
import Image from 'next/image'
import InformationParagraph from '@/components/InformationParagraph'
import Title from '@/components/Title'
import { getCircuits } from '@/data/getCircuits'

const CircuitIdPage = async ({ params }: { params: { circuitId: string } }) => {
	const circuits = await getCircuits()
	const [circuit] = circuits.filter(circ => circ.circuitId === params.circuitId)
	const [circuitData] = getData.filter(
		circuit => circuit.id === params.circuitId
	)

	if (!circuit) notFound()

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			<Title text={circuit.circuitName} />

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-3xl font-bold text-gray-900 text-center'>
					{circuit.Location.country} {getCountryFlag(circuit.Location.country)}{' '}
					- {circuit.Location.locality}
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<InformationParagraph
							data={circuitData.firstRace}
							title='First race'
						/>
						<InformationParagraph
							data={circuitData.numberOfLaps}
							title='Total laps'
						/>
						<InformationParagraph
							data={`${circuitData.oneLapDistance} km`}
							title='One lap distance'
						/>
						<InformationParagraph
							data={`${circuitData.raceDistance} km`}
							title='Total distance'
						/>
						<div className='flex gap-3'>
							<span className='opacity-70'>Fastest lap: </span>
							<div>
								<p>{circuitData.fastestLap}</p>
								<p className='text-2xl font-extrabold'>
									{circuitData.authorOfFastestLap}
								</p>
							</div>
						</div>
					</div>

					<Image
						src={`/circuits/${params.circuitId}.png`}
						alt={`Image of the ${circuit.circuitName}`}
						width={771}
						height={434}
					/>
				</div>
			</div>
		</div>
	)
}

export default CircuitIdPage
