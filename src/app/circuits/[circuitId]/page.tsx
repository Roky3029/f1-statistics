import { getSingleCircuit } from '@/data/getSingleCircuit'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { notFound } from 'next/navigation'

const CircuitIdPage = async ({ params }: { params: { circuitId: string } }) => {
	const data = await getSingleCircuit(params.circuitId)
	if (!data) notFound()

	const { circuitName, country, latitude, locality, longitude } = data

	return (
		<div className='w-full flex flex-col items-center justify-center space-y-5'>
			<p className='mb-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
				{circuitName}
			</p>

			<p className='text-2xl text-gray-900'>
				{country}
				{getCountryFlag(country)} - {locality}
			</p>

			<div className='flex justify-between w-full px-10'>
				<img
					className='flex items-center bg-white justify-center px-10 py-5'
					src={`/circuits/${params.circuitId}.png`}
					alt={`Circuit ${circuitName}`}
				/>
				<img
					className='bg-white flex items-center justify-center px-10 py-5'
					src={`/circuits/${params.circuitId}.png`}
					alt={`Circuit ${circuitName}`}
				/>
			</div>
		</div>
	)
}

export default CircuitIdPage
