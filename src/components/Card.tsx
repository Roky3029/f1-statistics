import { formatDate, formatTime } from '@/helpers/formatData'
import { hasDatePassed } from '@/helpers/hasDatePassed'

interface ComponentProps {
	sessionTitle: string
	day: string
	time: string
	daySecondary: string
}

const Card = ({ sessionTitle, day, time, daySecondary }: ComponentProps) => {
	const dateOfSession = new Date(
		formatDate(daySecondary.toString())[1] + ' ' + formatTime(time)
	)

	const hasDatePassedNow = hasDatePassed(dateOfSession)

	return (
		<>
			<div
				className={`max-w-sm p-6 space-y-5 border border-gray-200 rounded-lg shadow ${
					hasDatePassedNow ? 'bg-gray-600' : 'bg-white'
				}`}
			>
				<div>
					<h5 className='text-center mb-2 text-2xl font-bold tracking-tight text-gray-900'>
						{`${sessionTitle} ${hasDatePassedNow ? '- Finished' : ''}`}
					</h5>
				</div>
				<div className='flex justify-center flex-col'>
					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						Date: {day}
					</p>
					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						Time: {time} (Madrid/Spain)
					</p>
				</div>
			</div>
		</>
	)
}

export default Card
