import { getConstructors } from '@/data/getConstructors'
import { getDriverStandings } from '@/data/getStandings'
import { constructors as constructorList } from '@/data/constructors'
import Link from 'next/link'

const Drivers = async () => {
	const { standingList } = await getDriverStandings()
	const { constructors } = await getConstructors()

	return (
		<>
			<h2 className='text-4xl'>Drivers</h2>

			<div className='w-full py-5 px-10 grid place-content-center gap-8 grid-cols-2'>
				{constructors.map(constructor => (
					<div className='bg-blue-200 rounded-lg shadow-lg p-5 flex items-center justify-center flex-col space-y-5'>
						<p
							className={`text-2xl ${
								(constructorList as any)[constructor.constructorId]
							}`}
						>
							{constructor.name}
						</p>

						<div className='flex items-center gap-10'>
							{standingList.map(driver => (
								<>
									{driver.Constructors[0].name === constructor.name && (
										<Link
											href={`/drivers/${driver.Driver.driverId}`}
											className='bg-slate-200 rounded-lg shadow-lg flex items-center justify-center flex-col p-5 pb-0 transition-all hover:bg-slate-300 hover:scale-105'
										>
											<p className='text-xl'>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</p>

											<img
												src={`/drivers/${driver.Driver.code}.png`}
												alt={`Image of ${driver.Driver.familyName}`}
												width={206}
												height={206}
											/>
										</Link>
									)}
								</>
							))}
						</div>
						<img
							src={`/cars/${constructor.constructorId}.png`}
							alt={`Car of ${constructor.name}`}
							height={100} // 195px original photo
							width={563} // 658px original photo
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default Drivers
