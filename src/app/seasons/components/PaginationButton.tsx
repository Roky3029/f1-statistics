interface PaginationButtonProps {
	isFirstOrLastPage: boolean
	handleClick: () => void
	children: React.ReactNode
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
	isFirstOrLastPage,
	handleClick,
	children
}) => {
	return (
		<button
			disabled={isFirstOrLastPage}
			onClick={handleClick}
			className='flex items-center justify-center px-4 h-10 text-base font-medium text-white transition-all bg-gray-500 rounded-lg hover:bg-gray-600 disabled:pointer-events-none disabled:scale-95 disabled:opacity-70 gap-3'
		>
			{children}
		</button>
	)
}

export default PaginationButton
