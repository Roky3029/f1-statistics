import { formatRaceTime } from '@/helpers/formatRaceTime'
import dayjs from 'dayjs'

interface PodiumStandingProps {
	position: number
	fullName: string
	time?: number | null
	points: number
	driverCode: string | undefined
	isSeasonResult?: boolean
	constructorName?: string
}

const PodiumStanding: React.FC<PodiumStandingProps> = ({
	driverCode,
	fullName,
	points,
	position,
	time,
	isSeasonResult = false,
	constructorName
}) => {
	return (
		<div
			className={`${
				position === 1 // -> check if the pilot on the podium is the 1st
					? 'bg-gold row-start-1 lg:row-auto' // -> we won't add translation, as it has to be the highest
					: position === 2 // -> if it's not first, check if it's second
					? 'translate-y-16 bg-silver' // -> if true, translate him
					: 'translate-y-32 bg-bronze' // -> if not, (which will result in him being 3rd) we'll translate him even more
			} flex flex-col items-center justify-center px-10 pt-4 rounded-lg shadow-md`}
		>
			<h2 className='text-2xl font-bold '>{fullName}</h2>

			{isSeasonResult ? (
				<>
					<div className='flex items-center justify-center gap-10'>
						<p>{points} points</p>
					</div>

					<p className='text-lg pt-10'>{constructorName}</p>
				</>
			) : (
				<div className='flex items-center justify-center gap-10'>
					<p>{formatRaceTime(position, time || -1)}</p>
					<p>+{points}</p>
				</div>
			)}

			<img src={`/drivers/${driverCode || 'placeholder'}.png`} alt={fullName} />
		</div>
	)
}

export default PodiumStanding
