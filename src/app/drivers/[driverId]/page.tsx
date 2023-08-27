import { getDriverInfo } from '@/data/getDriverInfo'
import { constructors } from '@/data/constructors'
import { getDriverStandings } from '@/data/getStandings'
import { formatDate } from '@/helpers/formatData'
import { notFound } from 'next/navigation'

const DriverInfo = async ({ params }: { params: { driverId: string } }) => {
	const driverInfo = await getDriverInfo(params.driverId)
	const driverStandings = await getDriverStandings()

	if (!driverInfo) notFound()

	// console.log()
	const [selectedDriver] = driverStandings.standingList.filter(
		driver => driver.Driver.driverId === params.driverId
	)

	const { Driver: driver, Constructors } = selectedDriver

	const date = formatDate(driver.dateOfBirth.toString())[0]

	return (
		<section className=' w-full flex items-center justify-center flex-col'>
			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<div className='flex items-center justify-center space-x-80 '>
					<div className='text-3xl'>
						<p>{driver.givenName}</p>
						<p
							className={`${
								(constructors as any)[Constructors[0].constructorId]
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

				<p className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
					Championship stats
				</p>
				<div className='flex items-center justify-center text-xl gap-56'>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Position:</span>{' '}
						{selectedDriver.position}
					</p>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Points:</span> {selectedDriver.points}
					</p>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Winned races so far:</span>{' '}
						{selectedDriver.wins}
					</p>
				</div>

				<p className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl '>
					Driver stats
				</p>
				<div className='flex items-center justify-center text-xl gap-56'>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Code:</span> {driver.code}
					</p>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Date of birth:</span> {date}
					</p>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Nationality:</span>{' '}
						{driver.nationality}
					</p>
					<p className='bg-slate-100 px-6 py-5 rounded-lg shadow-md'>
						<span className='opacity-70'>Permanent number:</span>{' '}
						{driver.permanentNumber}
					</p>
				</div>
			</div>
		</section>
	)
}

export default DriverInfo

// {
//   MRData: {
//     xmlns: 'http://ergast.com/mrd/1.5',
//     series: 'f1',
//     url: 'http://ergast.com/api/f1/current/drivers/perez.json',
//     limit: '30',
//     offset: '0',
//     total: '1',
//     DriverTable: { season: '2023', driverId: 'perez', Drivers: [Array] }
//   }
// }
