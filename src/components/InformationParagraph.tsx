interface InformationParagraphProps {
	title: string
	data: string
}

const InformationParagraph: React.FC<InformationParagraphProps> = ({
	title,
	data
}) => {
	return (
		<p>
			<span className='opacity-70'>{title}: </span>
			{data}
		</p>
	)
}

export default InformationParagraph
