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
				<Image src='/logo.png' alt='SBOF1 logo' height={150} width={150} />
				<h1 className={`${font.className} text-2xl font-bold text-f1`}>
					Some Bits Of F1
				</h1>
			</Link>

			<nav className='flex items-center justify-center gap-16'>
				{LINK_LIST.map(link => (
					<HeaderLink text={link} key={link} />
				))}
			</nav>
		</>
	)
}

export default HeaderDesktop
