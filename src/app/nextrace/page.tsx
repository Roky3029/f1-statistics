import dynamic from 'next/dynamic'
import Card from '@/components/Card'
import { getNextRace } from '@/data/getNextRace'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { type RaceTable } from '@/types/nextRaceTypes'
import Image from 'next/image'
import { formatTime, formatDate } from '@/helpers/formatData'
import InformationParagraph from '@/components/InformationParagraph'
import Title from '@/components/Title'

const NextRace = async () => {
	const { season, round, Races }: RaceTable = await getNextRace(true)

	if (!season || !round || !Races[0]?.Circuit) {
		return (
			<div className='pb-10 w-full flex items-center justify-center flex-col'>
				<Title text={`¡The season has ended. See you in 2024!`} small />
			</div>
		)
	}
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
			<Title text='Next race' />

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {round} | Season {season}
				</p>

				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>{raceName}</p>

						<InformationParagraph
							data={`${Circuit.Location.country} ${getCountryFlag(
								Circuit.Location.country
							)}`}
							title='Country'
						/>
						<InformationParagraph
							data={Circuit.Location.locality}
							title='City'
						/>
						<InformationParagraph
							data={Circuit.circuitName}
							title='Circuit name'
						/>
					</div>

					<Image
						src={`/circuits/${Circuit.circuitId}.png`}
						alt={`Image of the ${Circuit.Location.country}'s circuit`}
						width={771}
						height={434}
					/>
				</div>

				<Title small text='Time until next race' />

				<Countdown
					expiryTimestamp={
						new Date(formatDate(date.toString())[1] + ' ' + formatTime(time))
					}
				/>

				<Title text='Racing sessions' small />

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
