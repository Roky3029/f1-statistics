interface TableStatsProps {
	children: React.ReactNode
}

const TableStats: React.FC<TableStatsProps> = ({ children }) => {
	return (
		<div className='grid place-content-center grid-cols-1 md:grid-cols-2 text-xl gap-x-16 gap-y-10 py-5'>
			{children}
		</div>
	)
}

export default TableStats
