import { APP_VERSION } from '@/data/consts'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import SocialLink from './SocialLink'

const Footer = () => {
	const socialLinks = [
		{
			link: 'https://github.com/Roky3029',
			icon: <BsGithub size={50} />
		},
		{
			link: 'https://twitter.com/Dev30Kirky',
			icon: <FaXTwitter size={50} />
		}
	]
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
					<Image src='/logo.png' alt='SBOF1 logo' height={150} width={150} />
					<h1 className='text-2xl font-bold text-f1'>Some Bits Of F1</h1>
				</div>

				<div className='flex items-center justify-center gap-10'>
					{socialLinks.map(link => (
						<SocialLink icon={link.icon} link={link.link} key={link.link} />
					))}
				</div>

				<div className='flex items-center justify-center opacity-40'>
					Developed with 💙 and with effort - v.{APP_VERSION}
				</div>
			</div>
			<p className='opacity-30 pb-10 lg:pb-0'>
				Powered by{' '}
				<a
					href='https://github.com/theOehrly/Fast-F1'
					className='underline'
					target='_blank'
					rel='noreferrer'
				>
					FastF1 API
				</a>
			</p>
		</footer>
	)
}

export default Footer
