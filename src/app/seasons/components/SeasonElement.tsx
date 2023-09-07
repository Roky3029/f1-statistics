import Link from 'next/link'

interface SeasonElementProps {
	season: string
}

const SeasonElement: React.FC<SeasonElementProps> = ({ season }) => {
	return (
		<div
			key={season}
			className='flex flex-col items-center gap-5 justify-center bg-slate-100 px-5 py-3 rounded-lg shadow-md'
		>
			<p>Season {season}</p>

			<Link
				className='text-sm bg-amber-200 px-3 py-2 rounded-lg transition hover:scale-105 hover:bg-amber-300'
				href={`/seasons/${season}`}
			>
				Show championship results
			</Link>
		</div>
	)
}

export default SeasonElement
