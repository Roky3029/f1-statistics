'use client'

import { getAllSeasonsByPage } from '@/data/getAllSeasonsByPage'
import Pagination from './components/Pagination'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

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
			{loading && <HashLoader />}
			{!loading && (
				<>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full place-content-center gap-10 px-10 grid-rows-2'>
						{data?.seasonList?.map((season: any) => (
							<div
								key={season.season}
								className='flex flex-col items-center gap-5 justify-center bg-slate-100 px-5 py-3 rounded-lg shadow-md'
							>
								<p>Season {season.season}</p>

								<Link
									className='text-sm bg-amber-200 px-3 py-2 rounded-lg transition hover:scale-105 hover:bg-amber-300'
									href={`/seasons/${season.season}`}
								>
									Show championship results
								</Link>
							</div>
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
			)}
		</>
	)
}

export default SeasonsHome
