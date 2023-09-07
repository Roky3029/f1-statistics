interface TableStatsProps {
	children: React.ReactNode
}

const TableStats: React.FC<TableStatsProps> = ({ children }) => {
	return (
		<div className='grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] text-xl gap-20 '>
			{children}
		</div>
	)
}

export default TableStats
