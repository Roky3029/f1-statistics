import { constructors } from '@/data/constructors'

interface FastestPitSTopProps {
	driverName: string
	constructorId: string
	familyName: string
	duration: string
	lap: string
}

const FastestPitStop: React.FC<FastestPitSTopProps> = ({
	driverName,
	constructorId,
	familyName,
	duration,
	lap
}) => {
	return (
		<div className='flex items-center justify-center bg-slate-200 px-10 py-5 gap-10 rounded-lg shadow-lg w-full flex-col md:flex-row'>
			<p className='text-3xl md:text-5xl font-bold'>Fastest pit stop: </p>
			<div>
				<p className='text-4xl'>
					{driverName}{' '}
					<span
						className={`${(constructors as any)[constructorId]} font-extrabold`}
					>
						{familyName}
					</span>
				</p>
				<p className='text-xl'>
					{duration} in lap {lap}
				</p>
			</div>
		</div>
	)
}

export default FastestPitStop
