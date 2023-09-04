import { APP_VERSION } from '@/data/consts'
import Image from 'next/image'
import { BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer className='border-t-1 border-black w-full flex items-center justify-center p-10 flex-col'>
			<p>
				Created by{' '}
				<a
					href='https://github.com/Roky3029'
					className='text-blue-400 transition-all hover:text-blue-600'
					target='_blank'
					rel='noreferrer'
				>
					Miguel R.
				</a>
			</p>

			<div className='grid grid-cols-1 lg:grid-cols-3 place-content-center lg:gap-20 gap-10'>
				<div className='flex items-center justify-center'>
					<Image
						src='/logo.png'
						alt='F1 Statistics logo'
						height={150}
						width={150}
					/>
					<h1 className='text-2xl font-bold text-f1'>F1 Statistics</h1>
				</div>

				<div className='flex items-center justify-center gap-10'>
					<a
						href='https://twitter.com/Dev30Kirky'
						className='transition-all hover:scale-[1.2]'
						target='_blank'
						rel='noreferrer'
					>
						<BsTwitter size={50} />
					</a>
					<a
						href='https://github.com/Roky3029'
						target='_blank'
						rel='noreferrer'
						className='transition-all hover:scale-[1.2]'
					>
						<BsGithub size={50} />
					</a>
				</div>

				<div className='flex items-center justify-center opacity-40'>
					Developed with 💙 and with effort - v.{APP_VERSION}
				</div>
			</div>
			<p className='opacity-30 pb-10 lg:pb-0'>
				Powered by{' '}
				<a
					href='http://ergast.com/mrd/'
					className='underline'
					target='_blank'
					rel='noreferrer'
				>
					Ergast's F1 API
				</a>
			</p>
		</footer>
	)
}

export default Footer
