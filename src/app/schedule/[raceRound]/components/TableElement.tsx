import { constructors } from '@/data/constructors'

interface TableElementProps {
	position: string
	givenName: string
	constructorId: string
	familyName: string
	constructorName: string
	time: string | undefined
	points: string
	status: string
	gridClasses: string
}

const TableElement: React.FC<TableElementProps> = ({
	constructorId,
	constructorName,
	familyName,
	givenName,
	points,
	position,
	status,
	time,
	gridClasses
}) => {
	return (
		<div
			className={`border-b-2 border-slate-500 last:border-none px-0 lg:px-10 py-3 w-full gap-4 ${gridClasses}`}
		>
			<p className='hidden lg:block'>{position}</p>
			<p className='text-lg lg:text-xl'>
				{givenName}{' '}
				<span className={`${(constructors as any)[constructorId]}`}>
					{familyName}
				</span>
			</p>
			<p className='hidden md:block'>{constructorName}</p>
			<p>{time || '-'}</p>
			<p>+{points}</p>
			<p>{position === 'R' ? `DNF: ${status}` : status}</p>
		</div>
	)
}

export default TableElement
