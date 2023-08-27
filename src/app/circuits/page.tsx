import { getCircuits } from '@/data/getCircuits'
import Link from 'next/link'

const CircuitPage = async () => {
	const { season, circuits } = await getCircuits()

	return (
		<>
			<p className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
				Season {season} circuits
			</p>

			<div className='w-full grid px-16 py-5 grid-cols-4 gap-5'>
				{circuits.map(circuit => (
					<Link
						href={`/circuits/${circuit.circuitId}`}
						className='bg-white p-5 flex flex-col transition items-center justify-center space-y-10 shadow-lg rounded-lg hover:scale-105 hover:bg-slate-100'
					>
						<p className='mb-4 text-xl leading-none text-gray-900 font-bold'>
							{circuit.circuitName}
						</p>
						<img
							src={`/circuits/${circuit.circuitId}.png`}
							alt={`Circuit ${circuit.circuitName}`}
						/>
					</Link>
				))}
			</div>
		</>
	)
}

export default CircuitPage
