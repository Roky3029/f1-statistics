import Link from 'next/link'

interface DriverItemProps {
	constructorNameDriver: string
	constructorName: string
	givenName: string
	familyName: string
	driverCode: string
	driverId: string
}

const DriverItem: React.FC<DriverItemProps> = ({
	constructorNameDriver,
	constructorName,
	givenName,
	familyName,
	driverCode,
	driverId
}) => {
	return (
		<>
			{constructorNameDriver === constructorName && (
				<Link
					href={`/drivers/${driverId}`}
					className='bg-slate-200 rounded-lg shadow-lg flex items-center justify-center flex-col p-5 pb-0 transition-all hover:bg-slate-300 hover:scale-105'
				>
					<p className='text-lg'>{`${givenName} ${familyName}`}</p>

					<img
						src={`/drivers/${driverCode}.png`}
						alt={`Image of ${familyName}`}
						width={206}
						height={206}
					/>
				</Link>
			)}
		</>
	)
}

export default DriverItem
