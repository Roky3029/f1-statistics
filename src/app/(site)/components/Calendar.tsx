import { getSchedule } from '@/data/getSchedule'
import Link from 'next/link'
import { hasDatePassed } from '@/helpers/hasDatePassed'
import CalendarRace from './CalendarRace'
import Title from '@/components/Title'

const Calendar = async () => {
	const { season, races } = await getSchedule()

	return (
		<>
			<Title text={`${season} calendar`} small />

			<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 place-content-center p-5 px-10'>
				{races.map(race => {
					const hasGPPassed = hasDatePassed(new Date(race.date))

					return (
						<CalendarRace
							circuitName={race.Circuit.circuitName}
							country={race.Circuit.Location.country}
							firstPractise={race.FirstPractice.date}
							hasGPPassed={hasGPPassed}
							raceDate={race.date}
							raceName={race.raceName}
							round={race.round}
							key={race.round}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Calendar
