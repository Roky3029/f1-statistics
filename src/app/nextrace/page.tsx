import dynamic from 'next/dynamic'
import Card from '@/components/Card'
import { getNextRace } from '@/data/getNextRace'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { type RaceTable } from '@/types/nextRaceTypes'
import Image from 'next/image'
import { formatTime, formatDate } from '@/helpers/formatData'

const NextRace = async () => {
	const { season, round, Races }: RaceTable = await getNextRace(true)
	const {
		raceName,
		Circuit,
		date,
		time,
		FirstPractice,
		SecondPractice,
		ThirdPractice,
		Qualifying,
		Sprint
	} = Races[0]

	const Countdown = dynamic(() => import('@/components/Countdown'), {
		ssr: false
	})

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			{/* dark:text-white */}
			<p className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
				UPCOMING RACE
			</p>

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {round} | Season {season}
				</p>

				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>{raceName}</p>

						<p>
							<span className='opacity-70'>Country: </span>
							{Circuit.Location.country}{' '}
							{getCountryFlag(Circuit.Location.country)}
						</p>
						<p>
							<span className='opacity-70'>City: </span>
							{Circuit.Location.locality}
						</p>
						<p>
							<span className='opacity-70'>Circuit name: </span>
							{Circuit.circuitName}
						</p>
					</div>

					<Image
						src={`/circuits/${Circuit.Location.locality
							.normalize('NFD')
							.replace(/[\u0300-\u036f]/g, '')
							.replace(/[^\x00-\x7F]/g, '')}.png`}
						alt={`Image of the ${Circuit.Location.country}'s circuit`}
						width={771}
						height={434}
					/>
				</div>

				<p className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
					Time until next race
				</p>
				<Countdown
					expiryTimestamp={
						new Date(formatDate(date.toString())[1] + ' ' + formatTime(time))
					}
				/>

				<p className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
					Racing sessions
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
					<Card
						sessionTitle='FP1'
						day={formatDate(FirstPractice.date.toString())[0]}
						time={formatTime(FirstPractice.time)}
						daySecondary={formatDate(FirstPractice.date.toString())[1]}
					/>
					<Card
						sessionTitle={!Sprint ? 'FP2' : 'Sprint Shootout (Qualifying)'}
						day={formatDate(SecondPractice.date.toString())[0]}
						time={formatTime(SecondPractice.time)}
						daySecondary={formatDate(SecondPractice.date.toString())[1]}
					/>
					{!Sprint && (
						<Card
							sessionTitle='FP3'
							day={formatDate(ThirdPractice.date.toString())[0]}
							time={formatTime(ThirdPractice.time)}
							daySecondary={formatDate(ThirdPractice.date.toString())[1]}
						/>
					)}

					{Sprint && (
						<Card
							sessionTitle='Sprint'
							day={formatDate(Sprint?.date.toString())[0]}
							time={formatTime(Sprint?.time)}
							daySecondary={formatDate(Sprint?.date.toString())[1]}
						/>
					)}

					<Card
						sessionTitle='Qualifying'
						day={formatDate(Qualifying.date.toString())[0]}
						time={formatTime(Qualifying.time)}
						daySecondary={formatDate(Qualifying.date.toString())[1]}
					/>
					<Card
						sessionTitle='Race'
						day={formatDate(date.toString())[0]}
						time={formatTime(time)}
						daySecondary={formatDate(date.toString())[1]}
					/>
				</div>
			</div>
		</div>
	)
}

export default NextRace

// {
//   season: '2023',
//   round: '13',
//   Races: [
//     {
//       season: '2023',
//       round: '13',
//       url: 'https://en.wikipedia.org/wiki/2023_Dutch_Grand_Prix',
//       raceName: 'Dutch Grand Prix',
//       Circuit: [Object],
//       date: '2023-08-27',
//       time: '13:00:00Z',
//       FirstPractice: [Object],
//       SecondPractice: [Object],
//       ThirdPractice: [Object],
//       Qualifying: [Object]
//     }
//   ]
// }
