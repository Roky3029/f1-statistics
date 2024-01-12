import { getCountryFlag } from '@/helpers/getCountryFlag'
import dayjs from 'dayjs'
import Link from 'next/link'
import { CalendarRaceProps } from '@/types/schedule'

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
			<p className='text-3xl absolute'>{getCountryFlag(country)}</p>
			<h4 className='text-xl text-center'>
				Round {round} - {raceName}
			</h4>

			<p className='text-center text-lg'>{circuitName}</p>

			<p className='text-center text-xl'>
				{`${dayjs(firstPractise).format('DD/MM/YY')} - ${dayjs(raceDate).format(
					'DD/MM/YY'
				)}`}
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
