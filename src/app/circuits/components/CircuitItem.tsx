import Link from 'next/link'

interface CircuitItemProps {
	circuitId: string
	circuitName: string
}

const CircuitItem: React.FC<CircuitItemProps> = ({
	circuitId,
	circuitName
}) => {
	return (
		<Link
			href={`/circuits/${circuitId}`}
			className='bg-white p-5 flex flex-col transition items-center justify-center space-y-10 shadow-lg rounded-lg hover:scale-105 hover:bg-slate-100'
		>
			<p className='mb-4 text-xl leading-none text-gray-900 font-bold'>
				{circuitName}
			</p>
			<img src={`/circuits/${circuitId}.png`} alt={`Circuit ${circuitName}`} />
		</Link>
	)
}

export default CircuitItem
