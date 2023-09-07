import { Result } from '@/types/raceResultsTypes'
import { constructors } from '@/data/constructors'

interface FastestLapProps {
	raceResults: Result[]
}

const FastestLap: React.FC<FastestLapProps> = ({ raceResults }) => {
	const [fastestLapOfTheRace] = raceResults.filter(
		result => result.FastestLap?.rank === '1'
	)

	return (
		<div className='flex items-center justify-center bg-slate-200 px-10 py-5 gap-10 rounded-lg shadow-lg w-full flex-col md:flex-row'>
			<p className='text-3xl md:text-5xl font-bold'>Fastest lap: </p>
			<div>
				<p className='text-4xl'>
					{fastestLapOfTheRace.Driver.givenName}{' '}
					<span
						className={`${
							(constructors as any)[
								fastestLapOfTheRace.Constructor.constructorId
							]
						} font-extrabold`}
					>
						{fastestLapOfTheRace.Driver.familyName}
					</span>
				</p>
				<p className='text-xl'>
					{fastestLapOfTheRace.FastestLap?.Time.time} in lap{' '}
					{fastestLapOfTheRace.FastestLap?.lap}
				</p>
			</div>
		</div>
	)
}

export default FastestLap
