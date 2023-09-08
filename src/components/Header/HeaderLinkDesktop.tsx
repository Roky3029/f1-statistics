import Link from 'next/link'

interface HeaderLinkProps {
	text: string
	isDisabled?: boolean
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ text, isDisabled }) => {
	return (
		<Link
			href={`/${text !== 'Home' ? text.toLowerCase() : ''}`}
			className={`rounded-lg bg-f1 px-3 py-2 font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 ${
				isDisabled && 'opacity-70 pointer-events-none'
			}`}
		>
			{text}
		</Link>
	)
}

export default HeaderLink
