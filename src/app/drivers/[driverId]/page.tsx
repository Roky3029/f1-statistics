import { getDriverInfo } from '@/data/getDriverInfo'
import { constructors } from '@/data/constructors'
import { getDriverStandings } from '@/data/getStandings'
import { formatDate } from '@/helpers/formatData'
import { notFound } from 'next/navigation'
import Title from '@/components/Title'
import TableStats from './components/TableStats'
import Data from './components/Data'

const DriverInfo = async ({ params }: { params: { driverId: string } }) => {
	const driverInfo = await getDriverInfo(params.driverId)
	const driverStandings = await getDriverStandings()

	if (!driverInfo) notFound()

	const [selectedDriver] = driverStandings.standingList.filter(
		driver => driver.Driver.driverId === params.driverId
	)

	const { Driver: driver, Constructors: constructorArray } = selectedDriver
	const [Constructor] = constructorArray

	const date = formatDate(driver.dateOfBirth.toString())[0]

	return (
		<section className=' w-full flex items-center justify-center flex-col'>
			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<div className='flex items-center justify-center flex-col lg:flex-row gap-10 '>
					<div className='text-3xl'>
						<p>{driver.givenName}</p>
						<p
							className={`${
								(constructors as any)[Constructor.constructorId]
							} text-4xl font-bold`}
						>
							{driverInfo.familyName}
						</p>
					</div>
					<img
						src={`/drivers/${driver.code}.png`}
						alt={`Image of ${driver.familyName}`}
					/>
				</div>

				<Title text='Championship stats' small />
				<TableStats>
					<Data text='Position' data={selectedDriver.position} />
					<Data text='Points' data={selectedDriver.points} />
					<Data text='Winned races so far' data={selectedDriver.wins} />
					<Data text='Racing for' data={Constructor.name} />
				</TableStats>

				<Title text='Driver stats' small />
				<TableStats>
					<Data text='Code' data={driver.code} />
					<Data text='Date of birth' data={date} />
					<Data text='Nationality' data={driver.nationality} />
					<Data text='Permanent number' data={driver.permanentNumber} />
				</TableStats>
			</div>
		</section>
	)
}

export default DriverInfo
