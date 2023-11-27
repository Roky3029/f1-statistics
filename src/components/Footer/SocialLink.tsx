interface SocialLinkProps {
	link: string
	icon: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, link }) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='transition-all hover:scale-[1.2]'
		>
			{icon}
		</a>
	)
}

export default SocialLink
