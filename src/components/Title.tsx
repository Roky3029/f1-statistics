interface TitleProps {
	text: string
	small?: boolean
	uppercase?: boolean
}

const Title: React.FC<TitleProps> = ({
	text,
	small = false,
	uppercase = false
}) => {
	return (
		<p
			className={`mb-4 font-extrabold font-f1regular text-center leading-none tracking-tight text-gray-900 ${
				!small ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-3xl lg:text-4xl'
			} ${uppercase && 'uppercase'}`}
		>
			{text}
		</p>
	)
}

export default Title
