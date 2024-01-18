import { constructors } from '@/data/constructors'
import { notFound } from 'next/navigation'
import { getDriverStandingsSSR } from '@/data/getDrivers'
import DriverData from './components/DriverData'

const DriverInfo = async ({ params }: { params: { driverId: string } }) => {
	const [driverStandings] = await getDriverStandingsSSR()

	const [selectedDriver] = driverStandings.DriverStandings.filter(
		driver => driver.Driver.driverId === params.driverId
	)

	if (!selectedDriver) notFound()

	return (
		<section className='w-full flex items-center justify-center flex-col'>
			<div className='bg-slate-300 rounded-lg shadow-md w-[70%] space-y-10 p-5 grid place-content-center grid-cols-2'>
				<div className='flex items-center justify-center flex-col lg:flex-row gap-10 '>
					<div className='text-3xl'>
						<p>{selectedDriver.Driver.givenName}</p>
						<p
							className={`${
								constructors[
									selectedDriver.Constructors[0]
										.constructorId as keyof typeof constructors
								]
							} text-4xl font-bold`}
						>
							{selectedDriver.Driver.familyName}
						</p>
					</div>
					<img
						src={`/drivers/${selectedDriver.Driver.code}.png`}
						alt={`Image of ${selectedDriver.Driver.familyName}`}
					/>
				</div>

				<DriverData selectedDriver={selectedDriver} />
			</div>
		</section>
	)
}

export default DriverInfo
