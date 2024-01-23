'use client'

import Title from '@/components/Title'
import TableStats from './TableStats'
import Data from './Data'
import { DriverStandingElement } from '@/types/driverStandings'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { useState } from 'react'
import dayjs from 'dayjs'
import Fade from './Fade'

const DriverData = ({
	selectedDriver
}: {
	selectedDriver: DriverStandingElement
}) => {
	const [isChampionshipWindow, setIsChampionshipWindow] = useState(true)

	return (
		<div className='flex items-center justify-center flex-col gap-5'>
			<Fade isActive={isChampionshipWindow}>
				<div
					className={`flex items-center justify-center flex-col w-full transition-all`}
				>
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
			</Fade>

			<Fade isActive={!isChampionshipWindow}>
				<div
					className={`flex items-center justify-center flex-col w-full transition-all`}
				>
					<Title text='Driver stats' small />
					<TableStats>
						<Data text='Code' data={selectedDriver.Driver.code} />
						<Data
							text='Date of birth'
							data={dayjs(selectedDriver.Driver.dateOfBirth).format(
								'DD/MM/YYYY'
							)}
						/>
						<Data text='Nationality' data={selectedDriver.Driver.nationality} />
						<Data
							text='Permanent number'
							data={selectedDriver.Driver.permanentNumber}
						/>
					</TableStats>
				</div>
			</Fade>

			<button
				className='bg-amber-200 px-5 py-2 rounded-lg shadow-md flex items-center justify-center text-xl gap-6 hover:scale-105 transition-all'
				onClick={() => setIsChampionshipWindow(!isChampionshipWindow)}
			>
				<p>More data</p>
				{isChampionshipWindow ? (
					<IoIosArrowDropdown size={30} />
				) : (
					<IoIosArrowDropup size={30} />
				)}
			</button>
		</div>
	)
}

export default DriverData
