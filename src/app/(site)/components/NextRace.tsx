import { getNextRace } from '@/data/getNextRace'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import Countdown from '@/components/Countdown'
import Link from 'next/link'
import { AiOutlineLink } from 'react-icons/ai'
import Title from '@/components/Title'

const NextRace = async () => {
	const { ronda, race, fecha, horaCarrera, circuit, country } =
		await getNextRace(false)

	return (
		<>
			{!race ? (
				<section className='flex w-[80%] flex-col rounded-lg bg-teal-300 px-14 pt-4'>
					<Title text={`¡The season has ended. See you in 2024!`} small />
				</section>
			) : (
				<section className='flex w-[80%] flex-col space-y-8 rounded-lg bg-teal-300 px-14 py-5'>
					<Title text='Next race' small />
					<div className='grid place-content-center grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 lg:grid-cols-3'>
						<h4 className='text-2xl font-bold text-center'>{race}</h4>
						<p className='text-5xl text-center'>{getCountryFlag(country)}</p>
						<p className='text-xl text-center'>{circuit}</p>
					</div>
					<div className='flex justify-between'>
						<div className='flex items-center'>
							<p className='text-xl'>
								Round <span>{ronda}</span>
							</p>
						</div>
						<p className='text-lg font-bold'>{fecha()[0]}</p>
					</div>

					{!horaCarrera() ? (
						<></>
					) : (
						<>
							<Countdown
								expiryTimestamp={new Date(fecha()[1] + ' ' + horaCarrera())}
							/>

							<div className='grid place-content-center'>
								<Link
									href='/nextrace'
									className='flex w-fit items-center justify-center space-x-2 rounded-lg bg-f1 px-5 py-3 text-lg text-white shadow-lg transition-all duration-300 hover:scale-105'
								>
									<AiOutlineLink size={16} />
									<span className='text-sm'>See the full schedule</span>
								</Link>
							</div>
						</>
					)}
				</section>
			)}
		</>
	)
}

export default NextRace
