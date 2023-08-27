'use client'

import { useTimer } from 'react-timer-hook'

const Countdown = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn('onExpire called')
	})

	return (
		<div className='flex items-center justify-around pt-10 space-x-10'>
			<p className='bg-slate-300 w-40 h-40 grid place-content-center rounded-full shadow-lg border-4 border-purple-500'>
				<span className='text-center text-4xl'>{days}</span>{' '}
				<span className='text-xl'>days</span>
			</p>
			<p className='bg-slate-300 w-40 h-40 grid place-content-center rounded-full shadow-lg border-4 border-blue-500'>
				<span className='text-center text-4xl'>{hours}</span>{' '}
				<span className='text-xl'>hours</span>
			</p>
			<p className='bg-slate-300 w-40 h-40 grid place-content-center rounded-full shadow-lg border-4 border-green-500'>
				<span className='text-center text-4xl'>{minutes}</span>{' '}
				<span className='text-xl'>minutes</span>
			</p>
			<p className='bg-slate-300 w-40 h-40 grid place-content-center rounded-full shadow-lg border-4 border-amber-500'>
				<span className='text-center text-4xl'>{seconds}</span>{' '}
				<span className='text-xl'>seconds</span>
			</p>
		</div>
	)
}

export default Countdown
