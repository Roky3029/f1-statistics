import { getCircuits } from '@/data/newData/getCircuits'
import CircuitItem from './components/CircuitItem'
import Title from '@/components/Title'

const CircuitPage = async () => {
	const circuits = await getCircuits()

	return (
		<>
			<Title text={`Season ${new Date().getFullYear()} circuits`} />

			<div className='w-full grid px-16 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				{circuits.map(circuit => (
					<CircuitItem
						circuitId={circuit.circuitId}
						circuitName={circuit.circuitName}
						key={circuit.circuitName}
					/>
				))}
			</div>
		</>
	)
}

export default CircuitPage
