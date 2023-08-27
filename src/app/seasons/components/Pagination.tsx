import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface PaginationTypes {
	showingNumber: number
	endNumber: number
	total: number
	limit: number
	page: number
	pageState: number
	setPage: Dispatch<SetStateAction<number>>
}

const Pagination: React.FC<PaginationTypes> = ({
	showingNumber,
	endNumber,
	total,
	limit,
	page,
	pageState,
	setPage
}) => {
	const isEndNumberGreaterThanTotal = endNumber > total
	const isFirstPage = page === 1
	const maxPages = Math.ceil(total / limit)
	const isLastPage = page === maxPages
	return (
		<div className='flex flex-col items-center'>
			<span className='text-sm text-gray-700 dark:text-gray-400'>
				Showing
				<span className='font-semibold text-gray-900 dark:text-black'>
					{` ${showingNumber} `}
				</span>
				to
				<span className='font-semibold text-gray-900 dark:text-black'>
					{` ${isEndNumberGreaterThanTotal ? total : endNumber} `}
				</span>
				of
				<span className='font-semibold text-gray-900 dark:text-black'>
					{` ${total} `}
				</span>
				Entries
			</span>
			<div className='inline-flex mt-2 xs:mt-0'>
				<button
					disabled={isFirstPage}
					onClick={() => setPage(pageState - 1)}
					className='flex items-center justify-center px-4 h-10 text-base font-medium text-white transition-all bg-gray-500 rounded-l hover:bg-gray-600 disabled:pointer-events-none disabled:scale-95 disabled:opacity-70'
				>
					<svg
						className='w-3.5 h-3.5 mr-2'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 5H1m0 0 4 4M1 5l4-4'
						/>
					</svg>
					Previous
				</button>
				<button
					disabled={isLastPage}
					onClick={() => setPage(pageState + 1)}
					className='flex items-center justify-center px-4 h-10 text-base font-medium text-white transition-all bg-gray-500 border-0 border-l border-gray-700 rounded-r hover:bg-gray-600 disabled:pointer-events-none disabled:scale-95 disabled:opacity-70'
				>
					Next
					<svg
						className='w-3.5 h-3.5 ml-2'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M1 5h12m0 0L9 1m4 4L9 9'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Pagination
