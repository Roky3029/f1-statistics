'use client'

import { getAllSeasonsByPage } from '@/data/getAllSeasonsByPage'
import Pagination from './components/Pagination'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import SeasonElement from './components/SeasonElement'
import Error404 from '@/components/Error404'

const SeasonsHome = () => {
	const [data, setData] = useState<any>(null)
	const [loading, setLoading] = useState(true)

	// Create the states for the pagination
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(10)

	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllSeasonsByPage(page, limit)
			setData(response)
		}

		fetchData()
		setLoading(false)
	}, [page, limit])

	return (
		<>
			{/* {loading ? (
				<HashLoader />
			) : (
				<>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full place-content-center gap-10 px-10 grid-rows-2'>
						{data?.seasonList?.map((season: any) => (
							<SeasonElement season={season.season} />
						))}
					</div>
					<Pagination
						endNumber={+data?.endNumber}
						showingNumber={+data?.showingNumber}
						total={+data?.total}
						limit={+data?.limit}
						page={+data?.page}
						pageState={page}
						setPage={setPage}
					/>
				</>
			)} */}
			<Error404
				text='Due to an unexpected problem with the car, we will have to stay in boxes until the problem is solved'
				isNot404
			/>
		</>
	)
}

export default SeasonsHome
