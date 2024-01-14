import { RaceResult } from '@/types/raceResult'
import TableElement from './TableElement'

interface ResultsTableProps {
	race: RaceResult[]
}

const ResultsTable: React.FC<ResultsTableProps> = ({ race }) => {
	console.log(race)
	const notPodiumResults = race
		.filter(result => result.Position > 3)
		.sort((a, b) => a.Position - b.Position)
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
			{notPodiumResults.map(driver => (
				<TableElement
					gridClasses={gridClasses}
					constructorId={driver.TeamId}
					constructorName={driver.TeamName}
					fullName={driver.FullName}
					points={driver.Points}
					position={driver.Position}
					status={driver.Status}
					time={driver.Time}
					key={driver.Abbreviation}
				/>
			))}
		</>
	)
}

export default ResultsTable
