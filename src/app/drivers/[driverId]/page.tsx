import { constructors } from '@/data/constructors'
import { notFound } from 'next/navigation'
import Title from '@/components/Title'
import TableStats from './components/TableStats'
import Data from './components/Data'
import { getDriverStandingsSSR } from '@/data/newData/getDrivers'
import dayjs from 'dayjs'

const DriverInfo = async ({ params }: { params: { driverId: string } }) => {
	const [driverStandings] = await getDriverStandingsSSR()

	const [selectedDriver] = driverStandings.DriverStandings.filter(
		driver => driver.Driver.driverId === params.driverId
	)

	if (!selectedDriver) notFound()

	console.log(selectedDriver)

	return (
		<section className='w-full flex items-center justify-center flex-col'>
			<div className='bg-slate-300 rounded-lg shadow-md w-[70%] space-y-10 p-5 grid place-content-center grid-cols-2'>
				<div className='flex items-center justify-center flex-col lg:flex-row gap-10 '>
					<div className='text-3xl'>
						<p>{selectedDriver.Driver.givenName}</p>
						<p
							className={`${
								(constructors as any)[
									selectedDriver.Constructors[0].constructorId
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

				<div className='flex items-center justify-center flex-col gap-5'>
					<div className='flex items-center justify-center flex-col'>
						<Title text='Championship stats' small />
						<TableStats>
							<Data text='Position' data={selectedDriver.position} />
							<Data text='Points' data={selectedDriver.points} />
							<Data text='Winned races so far' data={selectedDriver.wins} />
							<Data
								text='Racing for'
								data={selectedDriver.Constructors[0].name}
							/>
						</TableStats>
					</div>

					<div className='flex items-center justify-center flex-col'>
						<Title text='Driver stats' small />
						<TableStats>
							<Data text='Code' data={selectedDriver.Driver.code} />
							<Data
								text='Date of birth'
								data={dayjs(selectedDriver.Driver.dateOfBirth).format(
									'DD/MM/YYYY'
								)}
							/>
							<Data
								text='Nationality'
								data={selectedDriver.Driver.nationality}
							/>
							<Data
								text='Permanent number'
								data={selectedDriver.Driver.permanentNumber}
							/>
						</TableStats>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DriverInfo
