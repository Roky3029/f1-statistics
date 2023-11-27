interface AvatarProps {
	author: string
}

const Avatar: React.FC<AvatarProps> = ({ author }) => {
	return (
		<>
			{author === 'M' ? (
				<svg
					viewBox='0 0 36 36'
					fill='none'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
				>
					<mask
						id=':r7b:'
						maskUnits='userSpaceOnUse'
						x='0'
						y='0'
						width='36'
						height='36'
					>
						<rect width='36' height='36' fill='#FFFFFF' rx='72'></rect>
					</mask>
					<g mask='url(#:r7b:)'>
						<rect width='36' height='36' fill='#f1f7cd'></rect>
						<rect
							x='0'
							y='0'
							width='36'
							height='36'
							transform='translate(-3 -3) rotate(87 18 18) scale(1)'
							fill='#b5f7cd'
							rx='36'
						></rect>
						<g transform='translate(-7 -4) rotate(7 18 18)'>
							<path
								d='M15 19c2 1 4 1 6 0'
								stroke='#000000'
								fill='none'
								strokeLinecap='round'
							></path>
							<rect
								x='12'
								y='14'
								width='1.5'
								height='2'
								rx='1'
								stroke='none'
								fill='#000000'
							></rect>
							<rect
								x='22'
								y='14'
								width='1.5'
								height='2'
								rx='1'
								stroke='none'
								fill='#000000'
							></rect>
						</g>
					</g>
				</svg>
			) : (
				<svg
					viewBox='0 0 36 36'
					fill='none'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
				>
					<mask
						id=':rh:'
						maskUnits='userSpaceOnUse'
						x='0'
						y='0'
						width='36'
						height='36'
					>
						<rect width='36' height='36' rx='72' fill='#FFFFFF'></rect>
					</mask>
					<g mask='url(#:rh:)'>
						<rect width='36' height='36' fill='#49007e'></rect>
						<rect
							x='0'
							y='0'
							width='36'
							height='36'
							transform='translate(7 1) rotate(133 18 18) scale(1.1)'
							fill='#ff7d10'
							rx='6'
						></rect>
						<g transform='translate(3.5 -2) rotate(-3 18 18)'>
							<path
								d='M15 20c2 1 4 1 6 0'
								stroke='#000000'
								fill='none'
								strokeLinecap='round'
							></path>
							<rect
								x='11'
								y='14'
								width='1.5'
								height='2'
								rx='1'
								stroke='none'
								fill='#000000'
							></rect>
							<rect
								x='23'
								y='14'
								width='1.5'
								height='2'
								rx='1'
								stroke='none'
								fill='#000000'
							></rect>
						</g>
					</g>
				</svg>
			)}
		</>
	)
}

export default Avatar
