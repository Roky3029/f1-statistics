import { Titillium_Web } from 'next/font/google'
import { AiFillHome } from 'react-icons/ai'
import { CiViewTimeline } from 'react-icons/ci'
import { BsFillCarFrontFill, BsMapFill } from 'react-icons/bs'
import Link from 'next/link'

const font = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin']
})

export default function HeaderMobile() {
	return (
		<>
			<div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
				<div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
					<Link
						href='/'
						className='transition-all inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
					>
						<AiFillHome className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
						<span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
							Home
						</span>
					</Link>
					<Link
						href='/seasons'
						className='transition-all inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
					>
						<CiViewTimeline className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
						<span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
							Seasons
						</span>
					</Link>
					<Link
						href='/drivers'
						className='transition-all inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
					>
						<BsFillCarFrontFill className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
						<span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
							Drivers
						</span>
					</Link>
					<Link
						href='/circuits'
						className='transition-all inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
					>
						<BsMapFill className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
						<span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
							Circuits
						</span>
					</Link>
				</div>
			</div>
		</>
	)
}
