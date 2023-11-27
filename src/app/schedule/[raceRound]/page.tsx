import { getSchedule } from '@/data/getSchedule'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { formatDate, formatTime } from '@/helpers/formatData'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { getRaceResults } from '@/data/getRaceResults'
import { hasDatePassed } from '@/helpers/hasDatePassed'
import InformationParagraph from '@/components/InformationParagraph'
import PodiumStanding from '../../../components/PodiumStanding'
import ResultsTable from './components/ResultsTable'
import FastestLap from './components/FastesetLap'
import Title from '@/components/Title'
import { getFastestPitStop } from '@/data/getFastestPitStop'
import FastestPitStop from './components/FastestPitStop'

const RaceInfo = async ({ params }: { params: { raceRound: string } }) => {
	const Countdown = dynamic(() => import('@/components/Countdown'), {
		ssr: false
	})

	const { season, races } = await getSchedule(params.raceRound)

	if (races.length === 0) notFound()

	const raceResults = await getRaceResults(params.raceRound)
	const podium = [raceResults[1], raceResults[0], raceResults[2]]

	const [race] = races

	const dateOfRace = new Date(
		formatDate(race.date.toString())[1] + ' ' + formatTime(race.time)
	)

	const hasDatePassedNow = hasDatePassed(dateOfRace)

	const fastestPitStop = await getFastestPitStop(params.raceRound)

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			<Title text={race.raceName} uppercase />

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {params.raceRound} | Season {season}
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>
							{race.raceName}
						</p>

						<InformationParagraph
							data={`${race.Circuit.Location.country} ${getCountryFlag(
								race.Circuit.Location.country
							)}`}
							title='Country'
						/>
						<InformationParagraph
							data={race.Circuit.Location.locality}
							title='City'
						/>
						<InformationParagraph
							data={race.Circuit.circuitName}
							title='Circuit name'
						/>
						<InformationParagraph
							data={hasDatePassedNow ? 'Finished 🏁' : 'Yet to be celebrated'}
							title='Race status'
						/>
					</div>

					<Image
						src={`/circuits/${race.Circuit.circuitId}.png`}
						alt={`Image of the ${race.Circuit.Location.country}'s circuit`}
						width={771}
						height={434}
					/>
				</div>
				{!hasDatePassedNow ? (
					<>
						<Title text='Time until the race' small />
						<Countdown
							expiryTimestamp={
								new Date(
									formatDate(race.date.toString())[1] +
										' ' +
										formatTime(race.time)
								)
							}
						/>
					</>
				) : (
					<>
						<Title text='Race results' small />

						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
							{podium.map(pilot => (
								<PodiumStanding
									driverCode={pilot.Driver.code}
									familyName={pilot.Driver.familyName}
									givenName={pilot.Driver.givenName}
									points={pilot.points}
									position={pilot.position}
									time={pilot.Time?.time}
									key={pilot.Driver.code}
								/>
							))}
						</div>

						<div className='flex items-center justify-center flex-col w-full pt-40'>
							<ResultsTable raceResults={raceResults} />
						</div>

						<div className='grid gap-10 grid-cols-1 md:grid-cols-2 w-full'>
							<FastestLap raceResults={raceResults} />

							<FastestPitStop
								constructorId={fastestPitStop.constructorId}
								driverName={fastestPitStop.driverName}
								duration={fastestPitStop.duration}
								familyName={fastestPitStop.driverFamilyName}
								lap={fastestPitStop.lap}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RaceInfo
