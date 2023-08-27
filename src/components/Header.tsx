import Image from 'next/image'
import Link from 'next/link'
import { Titillium_Web } from 'next/font/google'

const font = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin']
})

const Header = () => {
	return (
		<header className='mb-10 flex w-full items-center justify-between bg-white pl-36 pr-32'>
			<Link href='/' className='flex items-center justify-center'>
				<Image
					src='/logo.png'
					alt='F1 Statistics logo'
					height={150}
					width={150}
				/>
				<h1 className={`${font.className} text-2xl font-bold text-f1`}>
					F1 Statistics
				</h1>
			</Link>

			<nav className='flex items-center justify-center gap-16'>
				<Link
					href='/seasons'
					className='rounded-lg bg-f1 px-3 py-2 font-bold text-white shadow-sm transition-all duration-300 hover:scale-105'
				>
					Seasons
				</Link>
				<Link
					href='/drivers'
					className='rounded-lg bg-f1 px-3 py-2 font-bold text-white shadow-sm transition-all duration-300 hover:scale-105'
				>
					Drivers
				</Link>
				<Link
					href='/circuits'
					className='rounded-lg bg-f1 px-3 py-2 font-bold text-white shadow-sm transition-all duration-300 hover:scale-105'
				>
					Circuits
				</Link>
			</nav>
		</header>
	)
}

export default Header
