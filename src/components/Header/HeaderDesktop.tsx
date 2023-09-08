import Image from 'next/image'
import Link from 'next/link'
import { Titillium_Web } from 'next/font/google'
import HeaderLink from './HeaderLinkDesktop'
import { LINK_LIST } from '@/data/consts'

const font = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin']
})

const HeaderDesktop = () => {
	return (
		<>
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
				{LINK_LIST.map(link => (
					<HeaderLink text={link} key={link} isDisabled={link === 'Seasons'} />
				))}
			</nav>
		</>
	)
}

export default HeaderDesktop
