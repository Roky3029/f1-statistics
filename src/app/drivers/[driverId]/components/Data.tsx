interface DataProps {
	text: string
	data: string
}

const Data: React.FC<DataProps> = ({ text, data }) => {
	return (
		<p className='text-center bg-slate-100 px-6 py-5 rounded-lg shadow-md flex items-center justify-center flex-col'>
			<span className='opacity-70'>{text}:</span> {data}
		</p>
	)
}

export default Data
