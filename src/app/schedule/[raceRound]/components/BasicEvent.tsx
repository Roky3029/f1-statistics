import InformationParagraph from '@/components/InformationParagraph'
import Title from '@/components/Title'
import { getCountryFlag } from '@/helpers/getCountryFlag'
import { Circuits } from '@/types/circuits'
import { NextEvent } from '@/types/next_event'
import dayjs from 'dayjs'
import Image from 'next/image'

interface BasicEventProps {
	event: NextEvent
	raceRound: string
	circuit: Circuits
	hasDatePassedNow: boolean
	children?: React.ReactNode
}

const BasicEvent: React.FC<BasicEventProps> = ({
	event,
	raceRound,
	circuit,
	hasDatePassedNow,
	children
}) => {
	return (
		<div className='pb-10 w-full flex items-center justify-center flex-col'>
			<Title text={event.OfficialEventName} uppercase />

			<div className='bg-slate-300 rounded-lg shadow-md w-[90%] space-y-10 flex items-center p-5 justify-center flex-col'>
				<p className='text-xl font-bold text-gray-900'>
					Round {raceRound} | Season {dayjs(event.EventDate).format('YYYY')}
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='grid grid-cols-1 place-content-center text-xl gap-10'>
						<p className='text-center text-2xl font-semibold'>
							{event.EventName}
						</p>

						<InformationParagraph
							data={`${event.Country} ${getCountryFlag(event.Country)}`}
							title='Country'
						/>
						<InformationParagraph data={event.Location} title='City' />
						<InformationParagraph
							data={circuit.circuitName}
							title='Circuit name'
						/>
						<InformationParagraph
							data={hasDatePassedNow ? 'Finished 🏁' : 'Yet to be celebrated'}
							title='Race status'
						/>
						<InformationParagraph
							data={`${dayjs(event.Session1DateUtc).format(
								'DD/MM/YY'
							)} - ${dayjs(event.Session5DateUtc).format('DD/MM/YY')}`}
							title='Days of the event'
						/>
					</div>

					<Image
						src={`/circuits/${circuit.circuitId}.png`}
						alt={`${circuit.circuitName}`}
						width={771}
						height={434}
					/>
				</div>
				{children}
			</div>
		</div>
	)
}

export default BasicEvent
