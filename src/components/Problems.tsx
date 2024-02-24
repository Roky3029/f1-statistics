import { Titillium_Web } from 'next/font/google'
import Link from 'next/link'
import { GiSoundWaves } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'

const font = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin']
})

const Problems = () => {
	return (
		<section className='flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-64 lg:w-[70%]'>
			<div className='bg-gray-600 text-white border-t-8 border-[#006F62] w-[90%] lg:w-1/2'>
				<div
					className={`bg-gray-800 px-3 py-2 text-2xl ${font.className} font-extrabold`}
				>
					Team Radio
				</div>
				<div className='flex items-center justify-center'>
					<GiSoundWaves size={200} className='mx-5' fill='#006F62' />
				</div>
				<div
					className={`bg-gray-800 ${font.className} text-2xl px-1 py-2 font-extrabold `}
				>
					<span className='border-l-8 border-[#006F62] px-2'>User</span>
				</div>
				<div className='px-10 font-bold text-3xl pt-5 pb-10 space-y-5'>
					<span>
						"Safety Car on track, maintain your delta within the limit"
					</span>

					<p>
						"It seems like we're experiencing some problems getting this data.
						While we try to fix the issue you can{' '}
						<Link
							href='/'
							className='transition-all underline hover:text-gray-300'
						>
							get to the main straight here
						</Link>
						"
					</p>
				</div>
			</div>
		</section>
	)
}

export default Problems
