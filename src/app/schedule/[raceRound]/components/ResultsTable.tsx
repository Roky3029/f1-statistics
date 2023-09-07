import { type Result } from '@/types/raceResultsTypes'
import TableElement from './TableElement'

interface ResultsTableProps {
	raceResults: Result[]
}

const ResultsTable: React.FC<ResultsTableProps> = ({ raceResults }) => {
	const notPodiumResults = raceResults.filter(result => +result.position > 3)
	const gridClasses = 'grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6'

	return (
		<>
			<div
				className={`w-full ${gridClasses} px-0 lg:px-10 pb-5 border-b-2 text-sm border-slate-500`}
			>
				<p className='hidden lg:block'>Position</p>
				<p>Driver</p>
				<p className='hidden md:block'>Constructor</p>
				<p>Time</p>
				<p>Points</p>
				<p>Race status</p>
			</div>
			{notPodiumResults.map(pilot => (
				<TableElement
					gridClasses={gridClasses}
					constructorId={pilot.Constructor.constructorId}
					constructorName={pilot.Constructor.name}
					familyName={pilot.Driver.familyName}
					givenName={pilot.Driver.givenName}
					points={pilot.points}
					position={pilot.positionText}
					status={pilot.status}
					time={pilot.Time?.time}
					key={pilot.position}
				/>
			))}
		</>
	)
}

export default ResultsTable
