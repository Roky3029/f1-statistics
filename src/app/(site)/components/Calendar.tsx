import { getSchedule } from '@/data/getSchedule'
import CalendarRace from './CalendarRace'
import Title from '@/components/Title'
import { getCircuits } from '@/data/getCircuits'

const Calendar = async () => {
	const calendar = await getSchedule()
	const circuits = await getCircuits()

	return (
		<>
			<Title text={`${new Date().getFullYear()} calendar`} small />
			<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 place-content-center p-5 px-10'>
				{calendar.map(event => {
					const hasDatePassedNow =
						new Date(event.Session5DateUtc).getTime() < new Date().getTime()

					const [circuit] = circuits.filter(
						circ => circ.Location.country === event.Country
					)
					return (
						<CalendarRace
							circuitName={circuit.circuitName}
							country={event.Country}
							firstPractise={event.Session1DateUtc}
							hasGPPassed={hasDatePassedNow}
							raceDate={event.Session5DateUtc}
							raceName={event.EventName}
							round={event.RoundNumber}
							key={event.RoundNumber}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Calendar
