import { Dispatch, SetStateAction } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import PaginationButton from './PaginationButton'

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
			<div className='inline-flex mt-2 xs:mt-0 gap-1'>
				<PaginationButton
					handleClick={() => setPage(pageState - 1)}
					isFirstOrLastPage={isFirstPage}
				>
					<AiOutlineArrowLeft />
					Previous
				</PaginationButton>
				<PaginationButton
					handleClick={() => setPage(pageState + 1)}
					isFirstOrLastPage={isLastPage}
				>
					Next
					<AiOutlineArrowRight />
				</PaginationButton>
			</div>
		</div>
	)
}

export default Pagination
