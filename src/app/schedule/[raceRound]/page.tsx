import PodiumStanding from '@/components/PodiumStanding'
import Title from '@/components/Title'
import { getCircuits } from '@/data/getCircuits'
import { getEvent } from '@/data/getEvent'
import { getRaceInfo } from '@/data/getRaceInfo'
import ResultsTable from './components/ResultsTable'
import dynamic from 'next/dynamic'
import BasicEvent from './components/BasicEvent'
import races from '@/data/raceResults.json'

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

	// I know it's extremely unefficient my approach but if I used the API to fetch the race result the free instance of the server would crash due to free-tier limitations, so I'll have to use that until I find a better solution
	// const race = await getRaceInfo(params.raceRound)

	const race = races[params.raceRound as keyof typeof races]
	// console.log(race)

	if (!race) {
		return (
			<BasicEvent
				circuit={circuit}
				event={event}
				hasDatePassedNow={hasDatePassedNow}
				raceRound={params.raceRound}
			>
				<Title
					text="Whoops! Feels like this data isn't on the web yet. Please wait and try again"
					small
				/>
			</BasicEvent>
		)
	}

	const podium = race?.filter((result: any) => {
		return result.Position <= 3
	})

	const sortedPodium = podium.sort((a, b) => {
		const positionOrder = { 2: 0, 1: 1, 3: 2 }
		return (
			positionOrder[a.Position as keyof typeof positionOrder] -
			positionOrder[b.Position as keyof typeof positionOrder]
		)
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
					{sortedPodium.map((driver: any) => (
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
