interface ComponentProps {
	sessionTitle: string
	day: string
	time: string
	utcDate: number
}

const Card = ({ sessionTitle, day, time, utcDate }: ComponentProps) => {
	const hasDatePassedNow = new Date(utcDate).getTime() < new Date().getTime()

	return (
		<>
			{sessionTitle !== 'None' && (
				<div
					className={`max-w-sm p-6 space-y-5 border border-gray-200 rounded-lg shadow ${
						hasDatePassedNow ? 'bg-gray-600' : 'bg-slate-200'
					}`}
				>
					<div>
						<h5 className='text-center mb-2 text-2xl font-bold tracking-tight text-gray-900'>
							{sessionTitle}
						</h5>
					</div>
					<div className='flex justify-center flex-col'>
						{hasDatePassedNow ? (
							<p className='mb-3 font-normal text-gray-700 dark:text-gray-300 uppercase text-center text-lg'>
								Finished
							</p>
						) : (
							<></>
						)}
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
							Date: {day}
						</p>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
							Time: {time} (Madrid/Spain)
						</p>
					</div>
				</div>
			)}
		</>
	)
}

export default Card
