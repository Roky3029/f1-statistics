import InformationParagraph from '@/components/InformationParagraph'
import PodiumStanding from '@/components/PodiumStanding'
import Title from '@/components/Title'
import { getCircuits } from '@/data/getCircuits'
import { getEvent } from '@/data/getEvent'
import { getRaceInfo } from '@/data/getRaceInfo'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import dayjs from 'dayjs'
import Image from 'next/image'
import ResultsTable from './components/ResultsTable'
import dynamic from 'next/dynamic'
import Problems from '@/components/Problems'
import { RiAlertLine } from 'react-icons/ri'

const RaceInfo = async ({ params }: { params: { raceRound: string } }) => {
	// return <Problems />

	const Countdown = dynamic(() => import('@/components/Countdown'), {
		ssr: false
	})

	const race = await getRaceInfo(params.raceRound)

	const event = await getEvent(params.raceRound)
	const circuits = await getCircuits()

	const [circuit] = circuits.filter(
		circ => circ.Location.country === event.Country
	)

	const hasDatePassedNow =
		new Date(event.Session5DateUtc).getTime() < new Date().getTime()

	if (hasDatePassedNow) return <Problems />

	const podium = race?.filter(result => {
		return result.Position <= 3
	})

	const sortedPodium = podium?.sort((a, b) => {
		if (a.Position === 2) return -1
		if (b.Position === 1) return 1
		return 0
	})

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			<Title text={event.EventName} uppercase />

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {params.raceRound} | Season{' '}
					{dayjs(event.EventDate).format('YYYY')}
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>
							{event.EventName}
						</p>

						<InformationParagraph
							data={`${event.Country} ${getCountryFlag(event.Country)}`}
							title='Country'
						/>
						<InformationParagraph data={event.Location} title='City' />
						<InformationParagraph
							data={circuit.circuitName}
							title='Circuit name'
						/>
						<InformationParagraph
							data={hasDatePassedNow ? 'Finished 🏁' : 'Yet to be celebrated'}
							title='Race status'
						/>
						{/* <p className='text-center text-xl'>
							{`${dayjs(firstPractise).format('DD/MM/YY')} - ${dayjs(
								raceDate
							).format('DD/MM/YY')}`}
						</p> */}
						<InformationParagraph
							data={`${dayjs(event.Session1DateUtc).format(
								'DD/MM/YY'
							)} - ${dayjs(event.Session5DateUtc).format('DD/MM/YY')}`}
							title='Days of the event'
						/>
					</div>

					<Image
						src={`/circuits/${circuit.circuitId}.png`}
						alt={`${circuit.circuitName}`}
						width={771}
						height={434}
					/>
				</div>
				{!hasDatePassedNow ? (
					<>
						<Title text='Time until the race' small />
						<Countdown expiryTimestamp={new Date(event.Session5DateUtc)} />
					</>
				) : (
					<>
						<Title text='Race results' small />

						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
							{sortedPodium.map(driver => (
								<PodiumStanding
									driverCode={driver.Abbreviation}
									fullName={driver.FullName}
									points={driver.Points}
									position={driver.Position}
									time={driver.Time}
									key={driver.Abbreviation}
								/>
							))}
						</div>

						<div className='flex items-center justify-center flex-col w-full pt-40'>
							<ResultsTable race={race} />
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RaceInfo
