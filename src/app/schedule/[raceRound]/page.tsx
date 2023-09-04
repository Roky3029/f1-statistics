import { getSchedule } from '@/data/getSchedule'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { formatDate, formatTime } from '@/helpers/formatData'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { getRaceResults } from '@/data/getRaceResults'
import { constructors } from '@/data/constructors'
import { hasDatePassed } from '@/helpers/hasDatePassed'

const RaceInfo = async ({ params }: { params: { raceRound: string } }) => {
	const Countdown = dynamic(() => import('@/components/Countdown'), {
		ssr: false
	})

	const { season, races } = await getSchedule(params.raceRound)

	if (races.length === 0) notFound()

	const raceResults = await getRaceResults(params.raceRound)
	const podium = [raceResults[1], raceResults[0], raceResults[2]]
	const notPodiumResults = raceResults.filter(result => +result.position > 3)
	const [fastestLapOfTheRace] = raceResults.filter(
		result => result.FastestLap?.rank === '1'
	)

	const [race] = races

	const dateOfRace = new Date(
		formatDate(race.date.toString())[1] + ' ' + formatTime(race.time)
	)

	const hasDatePassedNow = hasDatePassed(dateOfRace)

	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			{/* dark:text-white */}
			<p className='uppercase mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
				{race.raceName}
			</p>

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {params.raceRound} | Season {season}
				</p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>
							{race.raceName}
						</p>

						<p>
							<span className='opacity-70'>Country: </span>
							{race.Circuit.Location.country}{' '}
							{getCountryFlag(race.Circuit.Location.country)}
						</p>
						<p>
							<span className='opacity-70'>City: </span>
							{race.Circuit.Location.locality}
						</p>
						<p>
							<span className='opacity-70'>Circuit name: </span>
							{race.Circuit.circuitName}
						</p>
						<p>
							<span className='opacity-70'>Race status: </span>
							{hasDatePassedNow ? 'Finished 🏁' : 'Yet to be celebrated'}
						</p>
					</div>

					<Image
						src={`/circuits/${race.Circuit.circuitId}.png`}
						alt={`Image of the ${race.Circuit.Location.country}'s circuit`}
						width={771}
						height={434}
					/>
				</div>

				{!hasDatePassedNow && (
					<>
						<p className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
							Time until the race
						</p>
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
				)}

				{hasDatePassedNow && (
					<>
						<p className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
							Race results
						</p>

						<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
							{podium.map(pilot => (
								<div
									className={`${
										pilot.position === '1' // -> check if the pilot on the podium is the 1st
											? 'bg-gold row-start-1 row-end-3' // -> we won't add translation, as it has to be the highest
											: pilot.position === '2' // -> if it's not first, check if it's second
											? 'translate-y-16 bg-silver' // -> if true, translate him
											: 'translate-y-32 bg-bronze' // -> if not, (which will result in him being 3rd) we'll translate him even more
									} flex flex-col items-center justify-center px-10 pt-4 rounded-lg shadow-md`}
								>
									<h2 className='text-2xl font-bold '>
										{pilot.Driver.givenName} {pilot.Driver.familyName}
									</h2>

									<div className='flex items-center justify-center gap-10'>
										<p>{pilot.Time?.time}</p>
										<p>+{pilot.points}</p>
									</div>

									<img
										src={`/drivers/${pilot.Driver.code}.png`}
										alt={pilot.Driver.familyName}
									/>
								</div>
							))}
						</div>

						<div className='flex items-center justify-center flex-col w-full pt-40'>
							<div className='w-full grid grid-cols-5 lg:grid-cols-6 px-0 lg:px-10 pb-5 border-b-2 text-sm border-slate-500'>
								<p className='hidden lg:block'>Position</p>
								<p>Driver</p>
								<p>Constructor</p>
								<p>Time</p>
								<p>Points</p>
								<p>Race status</p>
							</div>
							{notPodiumResults.map(pilot => (
								<div className='border-b-2 border-slate-500 last:border-none px-0 lg:px-10 py-3 w-full grid gap-4 grid-cols-5 lg:grid-cols-6'>
									<p className='hidden lg:block'>{pilot.position}</p>
									<p className='text-lg lg:text-xl'>
										{pilot.Driver.givenName}{' '}
										<span
											className={`${
												(constructors as any)[pilot.Constructor.constructorId]
											}`}
										>
											{pilot.Driver.familyName}
										</span>
									</p>
									<p>{pilot.Constructor.name}</p>
									<p>{pilot.Time?.time || '-'}</p>
									<p>+{pilot.points}</p>
									<p>
										{pilot.positionText === 'R'
											? `DNF: ${pilot.status}`
											: pilot.status}
									</p>
								</div>
							))}
						</div>

						<div className='flex items-center justify-center bg-slate-200 px-10 py-5 gap-10 rounded-lg shadow-lg'>
							<p className='text-5xl font-bold'>Fastest lap: </p>
							<div>
								<p className='text-4xl'>
									{fastestLapOfTheRace.Driver.givenName}{' '}
									<span
										className={`${
											(constructors as any)[
												fastestLapOfTheRace.Constructor.constructorId
											]
										} font-extrabold`}
									>
										{fastestLapOfTheRace.Driver.familyName}
									</span>
								</p>
								<p className='text-xl'>
									{fastestLapOfTheRace.FastestLap?.Time.time} in lap{' '}
									{fastestLapOfTheRace.FastestLap?.lap}
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RaceInfo
