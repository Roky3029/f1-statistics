import { getSchedule } from '@/data/getSchedule'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import Link from 'next/link'
import { hasDatePassed } from '@/helpers/hasDatePassed'

const Calendar = async () => {
	const { season, races } = await getSchedule()

	return (
		<>
			<h2 className='text-4xl'>{season} Calendar</h2>

			<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 place-content-center p-5 px-10'>
				{races.map(race => {
					const hasGPPassed = hasDatePassed(new Date(race.date))

					return (
						<>
							<div
								className={`${
									hasGPPassed ? 'bg-blue-100' : 'bg-blue-200'
								} space-y-5 p-5 rounded-lg shadow-md`}
							>
								<div className='grid grid-cols-3 text-xl'>
									<h4>Round {race.round}</h4>
									<p className='col-start-2 col-end-4'>{race.raceName}</p>
									<p className='text-3xl'>
										{getCountryFlag(race.Circuit.Location.country)}
									</p>
								</div>
								<p className='text-center text-lg'>
									{race.Circuit.circuitName}
								</p>

								<p className='text-center text-xl'>
									{`${new Date(race.FirstPractice.date).getDate()}/${new Date(
										race.FirstPractice.date
									).getMonth()} - ${new Date(race.date).getDate()}/${new Date(
										race.date
									).getMonth()} ${new Date(race.date).getFullYear()}`}
								</p>

								<div className='flex items-center justify-end'>
									<Link
										href={`/schedule/${race.round}`}
										className='flex w-fit items-center justify-center space-x-2 rounded-lg bg-amber-400 px-5 py-3 text-lg text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-500'
									>
										See more info
									</Link>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}

export default Calendar
