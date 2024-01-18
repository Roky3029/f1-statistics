import dynamic from 'next/dynamic'
import Card from '@/components/Card'
import { getNextRace } from '@/data/getNextRace'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import Image from 'next/image'
import dayjs from 'dayjs'
import InformationParagraph from '@/components/InformationParagraph'
import Title from '@/components/Title'

const NextRace = async () => {
	const { nextRaceData: data, circuit } = await getNextRace()

	if (!data.EventName) {
		return (
			<div className='pb-10 w-full flex items-center justify-center flex-col'>
				<Title text={`¡The season has ended. See you in 2024!`} small />
			</div>
		)
	}

	const Countdown = dynamic(() => import('@/components/Countdown'), {
		ssr: false
	})

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			{/* dark:text-white */}
			<Title text='Next race' />

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {data.RoundNumber} | Season {new Date().getFullYear()}
				</p>

				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>
							{data.EventName}
						</p>

						<InformationParagraph
							data={`${data.Country} ${getCountryFlag(data.Country)}`}
							title='Country'
						/>
						<InformationParagraph data={data.Location} title='City' />
						<InformationParagraph
							data={circuit.circuitName}
							title='Circuit name'
						/>
					</div>

					<Image
						src={`/circuits/${circuit.circuitId}.png`}
						alt={`Image of the ${circuit.circuitName}`}
						width={771}
						height={434}
					/>
				</div>

				<Title small text='Time until next race' />

				<Countdown expiryTimestamp={new Date(data.Session5DateUtc)} />

				<Title text='Racing sessions' small />

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
					<Card
						sessionTitle={data.Session1}
						day={new Date(data.Session1DateUtc).toLocaleDateString('es-ES')}
						time={dayjs(data.Session1DateUtc).format('HH:mm')}
						utcDate={data.Session1DateUtc}
					/>
					<Card
						sessionTitle={data.Session2}
						day={new Date(data.Session2DateUtc).toLocaleDateString('es-ES')}
						time={dayjs(data.Session2DateUtc).format('HH:mm')}
						utcDate={data.Session2DateUtc}
					/>
					<Card
						sessionTitle={data.Session3}
						day={new Date(data.Session3DateUtc).toLocaleDateString('es-ES')}
						time={dayjs(data.Session3DateUtc).format('HH:mm')}
						utcDate={data.Session3DateUtc}
					/>
					<Card
						sessionTitle={data.Session4}
						day={new Date(data.Session4DateUtc).toLocaleDateString('es-ES')}
						time={dayjs(data.Session4DateUtc).format('HH:mm')}
						utcDate={data.Session4DateUtc}
					/>
					<Card
						sessionTitle={data.Session5}
						day={new Date(data.Session5DateUtc).toLocaleDateString('es-ES')}
						time={dayjs(data.Session5DateUtc).format('HH:mm')}
						utcDate={data.Session5DateUtc}
					/>
				</div>
			</div>
		</div>
	)
}

export default NextRace
