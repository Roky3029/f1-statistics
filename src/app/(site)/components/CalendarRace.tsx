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
	const fp1Date = dayjs(firstPractise).format('DD/MM/YY')
	const raceFecha = dayjs(raceDate).format('DD/MM/YY')
	return (
		<div
			className={`${
				hasGPPassed ? 'bg-blue-100' : 'bg-blue-200'
			} space-y-5 p-5 rounded-lg shadow-md`}
		>
			<p className='text-3xl lg:absolute'>{getCountryFlag(country)}</p>
			<h4 className='text-xl text-center'>
				Round {round} - {raceName}
			</h4>

			<p className='text-center text-lg'>{circuitName}</p>

			<p className='text-center text-xl'>
				{`${fp1Date === 'Invalid Date' ? 'TBC' : fp1Date} - ${
					raceFecha === 'Invalid Date' ? '23/02/24' : raceFecha
				}`}
			</p>

			<div className='flex items-center justify-end'>
				{round === 0 ? (
					<></>
				) : (
					// <Link
					// 	href={`/schedule/${round}`}
					// 	className={`flex w-fit items-center justify-center space-x-2 rounded-lg px-5 py-3 text-lg text-black shadow-lg transition-all duration-300 hover:scale-105 ${
					// 		hasGPPassed
					// 			? 'bg-sky-300 hover:bg-sky-400'
					// 			: 'bg-amber-400 hover:bg-amber-500'
					// 	}`}
					// >
					// 	{hasGPPassed ? 'Race results' : 'More info'}
					// </Link>
					<>
					{!hasGPPassed && (
						<Link
							href={`/schedule/${round}`}
							className={`flex w-fit items-center justify-center space-x-2 rounded-lg px-5 py-3 text-lg text-black shadow-lg transition-all duration-300 hover:scale-105 bg-sky-300 hover:bg-sky-400`}
						>
							More Info
						</Link>
					)}
					</>	
				)}
			</div>
		</div>
	)
}

export default CalendarRace
