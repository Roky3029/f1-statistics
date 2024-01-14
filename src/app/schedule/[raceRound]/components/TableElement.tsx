import { constructors } from '@/data/constructors'

interface TableElementProps {
	position: number
	constructorId: string
	fullName: string
	constructorName: string
	time: number | null
	points: number
	status: string
	gridClasses: string
}

const TableElement: React.FC<TableElementProps> = ({
	constructorId,
	constructorName,
	fullName,
	points,
	position,
	status,
	time,
	gridClasses
}) => {
	let raceStatus
	if (status !== 'Finished' && status !== '+1 Lap' && status !== '+2 Laps') {
		raceStatus = `DNF: ${status}`
	} else {
		raceStatus = status
	}
	return (
		<div
			className={`border-b-2 border-slate-500 last:border-none px-0 lg:px-10 py-3 w-full gap-4 ${gridClasses}`}
		>
			<p className='hidden lg:block'>{position}</p>
			<p className='text-lg lg:text-xl'>
				<span className={`${(constructors as any)[constructorId]}`}>
					{fullName}
				</span>
			</p>
			<p className='hidden md:block'>{constructorName}</p>
			<p>{time || '-'}</p>
			<p>+{points}</p>
			<p>{raceStatus}</p>
		</div>
	)
}

export default TableElement
