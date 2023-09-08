import { Titillium_Web } from 'next/font/google'
import Link from 'next/link'
import { GiSoundWaves } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'

const font = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin']
})

interface Error404Props {
	text?: string
	isNot404?: boolean
}

const Error404: React.FC<Error404Props> = ({ isNot404, text }) => {
	return (
		<section className='flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-64 w-[90%] px-32 py-16'>
			<div className='bg-gray-600 text-white border-t-8 border-red-600 w-1/2'>
				<div
					className={`bg-gray-800 px-3 py-2 text-2xl ${font.className} font-extrabold`}
				>
					Team Radio
				</div>
				<div className='flex items-center justify-center'>
					<GiSoundWaves size={200} className='mx-5' fill='red' />
				</div>
				<div
					className={`bg-gray-800 ${font.className} text-2xl px-1 py-2 font-extrabold `}
				>
					<span className='border-l-8 border-red-600 px-2'>User</span>
				</div>
				<div className='px-10 font-bold text-3xl pt-5 pb-10 space-y-5'>
					<span>"Box box"</span>
					{text ? (
						<p>
							"{text}"
							<Link
								href='/'
								className='transition-all underline hover:text-gray-300 block mt-5'
							>
								"In the meantime, you can continue looking statistics of other
								drivers by clicking here"
							</Link>
						</p>
					) : (
						<p>
							"You went to far at turn 1, try to recover by{' '}
							<Link
								href='/'
								className='transition-all underline hover:text-gray-300'
							>
								returning to the track by clicking here
							</Link>
							"
						</p>
					)}
				</div>
			</div>

			{!isNot404 && (
				<div className='flex items-center justify-center flex-col gap-52'>
					<div className='flex items-center justify-center gap-10 bg-gray-500 text-2xl pr-5 rounded-md shadow-md text-gray-300'>
						<p className='border-r-2 px-5 border-gray-300 py-3 font-extrabold'>
							404
						</p>
						<div className='flex items-center justify-center gap-2 font-bold'>
							<MdComputer />
							<p>USR</p>
						</div>
						<p className='italic'>OUT</p>
					</div>
				</div>
			)}
		</section>
	)
}

export default Error404
