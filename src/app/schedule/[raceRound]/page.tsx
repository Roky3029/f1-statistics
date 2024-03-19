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
import BasicEvent from './components/BasicEvent'
import Problems from '@/components/Problems'

const RaceInfo = async ({ params }: { params: { raceRound: string } }) => {
	const Countdown = dynamic(() => import('@/components/Countdown'), {
		ssr: false
	})

	const event = await getEvent(params.raceRound)
	const hasDatePassedNow =
		new Date(event.Session5DateUtc).getTime() < new Date().getTime()

	const circuits = await getCircuits()

	const [circuit] = circuits.filter(circ => {
		if (
			circ?.circuitName === 'Autodromo Enzo e Dino Ferrari' &&
			event.EventName === 'Italian Grand Prix'
		)
			return false

		return (
			circ.Location.country === event.Country ||
			circ.Location.locality === event.Location
		)
	})

	if (!hasDatePassedNow) {
		return (
			<>
				<BasicEvent
					circuit={circuit}
					event={event}
					hasDatePassedNow={hasDatePassedNow}
					raceRound={params.raceRound}
				>
					<Title text='Time until the race' small />
					<Countdown expiryTimestamp={new Date(event.Session5DateUtc)} />
				</BasicEvent>
			</>
		)
	}

	return <Problems />

	const race = await getRaceInfo(params.raceRound)

	const podium = race?.filter(result => {
		return result.Position <= 3
	})

	const sortedPodium = podium?.sort((a, b) => {
		if (a.Position === 2) return -1
		if (b.Position === 1) return 1
		return 0
	})

	return (
		<>
			<BasicEvent
				circuit={circuit}
				event={event}
				hasDatePassedNow={hasDatePassedNow}
				raceRound={params.raceRound}
			>
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
			</BasicEvent>
		</>
	)
}

export default RaceInfo
