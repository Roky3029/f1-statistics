import { getCountryFlag } from '@/helpers/getCountryFlag'
import Link from 'next/link'

interface CalendarRaceProps {
	hasGPPassed: boolean
	round: string
	raceName: string
	country: string
	circuitName: string
	firstPractise: Date
	raceDate: Date
}

const CalendarRace: React.FC<CalendarRaceProps> = ({
	circuitName,
	country,
	firstPractise,
	hasGPPassed,
	raceDate,
	raceName,
	round
}) => {
	return (
		<div
			className={`${
				hasGPPassed ? 'bg-blue-100' : 'bg-blue-200'
			} space-y-5 p-5 rounded-lg shadow-md`}
		>
			<div className='grid gap-4 grid-cols-3 text-xl'>
				<h4>Round {round}</h4>
				<p className='col-start-2 col-end-4'>{raceName}</p>
				<p className='text-3xl'>{getCountryFlag(country)}</p>
			</div>
			<p className='text-center text-lg'>{circuitName}</p>

			<p className='text-center text-xl'>
				{`${new Date(firstPractise).getDate()}/${new Date(
					firstPractise
				).getMonth()} - ${new Date(raceDate).getDate()}/${new Date(
					raceDate
				).getMonth()} ${new Date(raceDate).getFullYear()}`}
			</p>

			<div className='flex items-center justify-end'>
				<Link
					href={`/schedule/${round}`}
					className='flex w-fit items-center justify-center space-x-2 rounded-lg bg-amber-400 px-5 py-3 text-lg text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-500'
				>
					See more info
				</Link>
			</div>
		</div>
	)
}

export default CalendarRace
