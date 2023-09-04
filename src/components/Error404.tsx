import { Titillium_Web } from 'next/font/google'
import Link from 'next/link'
import { GiSoundWaves } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'

const font = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin']
})

const Error404 = () => {
	return (
		<section className='grid place-content-center grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-64 w-[85%] px-32 py-16'>
			<div className='bg-gray-600 text-white w-fit border-t-8 border-red-600'>
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
				</div>
			</div>

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
		</section>
	)
}

export default Error404
