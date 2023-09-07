import Link from 'next/link'

interface HeaderLinkMobileProps {
	Icon: React.ReactNode
	text: string
}

const HeaderLinkMobile: React.FC<HeaderLinkMobileProps> = ({ Icon, text }) => {
	return (
		<Link
			href={`/${text !== 'Home' ? text.toLowerCase() : ''}`}
			className='transition-all inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
		>
			{Icon}
			<span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
				{text}
			</span>
		</Link>
	)
}

export default HeaderLinkMobile
