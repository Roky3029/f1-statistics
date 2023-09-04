'use client'

import { useTimer } from 'react-timer-hook'

const Countdown = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn('onExpire called')
	})

	return (
		<div className='grid lg:grid-cols-4 place-content-center self-center grid-cols-2 pt-10 gap-10'>
			<p className='flex items-center justify-center flex-col bg-slate-300 w-40 h-40 rounded-full shadow-lg border-4 border-purple-500'>
				<span className='text-center text-4xl'>{days}</span>{' '}
				<span className='text-xl'>days</span>
			</p>
			<p className='flex items-center justify-center flex-col bg-slate-300 w-40 h-40 rounded-full shadow-lg border-4 border-blue-500'>
				<span className='text-center text-4xl'>{hours}</span>{' '}
				<span className='text-xl'>hours</span>
			</p>
			<p className='flex items-center justify-center flex-col bg-slate-300 w-40 h-40 rounded-full shadow-lg border-4 border-green-500'>
				<span className='text-center text-4xl'>{minutes}</span>{' '}
				<span className='text-xl'>minutes</span>
			</p>
			<p className='flex items-center justify-center flex-col bg-slate-300 w-40 h-40 rounded-full shadow-lg border-4 border-amber-500'>
				<span className='text-center text-4xl'>{seconds}</span>{' '}
				<span className='text-xl'>seconds</span>
			</p>
		</div>
	)
}

export default Countdown
