import Link from 'next/link'

interface HeaderLinkProps {
	text: string
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ text }) => {
	return (
		<Link
			href={`/${text.toLowerCase()}`}
			className='rounded-lg bg-f1 px-3 py-2 font-bold text-white shadow-sm transition-all duration-300 hover:scale-105'
		>
			{text}
		</Link>
	)
}

export default HeaderLink
