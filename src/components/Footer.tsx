import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='border-t-1 border-black w-full flex items-center justify-center p-10 flex-col'>
			<p>
				Created by{' '}
				<a
					href='https://github.com/Roky3029'
					className='text-blue-400 transition-all hover:text-blue-600'
					target='_blank'
				>
					Miguel R.
				</a>
			</p>

			<div className='grid grid-cols-3 place-content-center gap-20'>
				<div className='flex items-center justify-center'>
					<Image
						src='/logo.png'
						alt='F1 Statistics logo'
						height={150}
						width={150}
					/>
					<h1 className='text-2xl font-bold text-f1'>F1 Statistics</h1>
				</div>

				<div className='flex items-center justify-center gap-10'>
					<a
						href='https://twitter.com/Dev30Kirky'
						className='transition-all hover:scale-[1.2]'
					>
						<Image
							src='/icons/twitter.svg'
							alt='Twitter'
							height={50}
							width={50}
						/>
					</a>
					<a
						href='https://github.com/Roky3029'
						className='transition-all hover:scale-[1.2]'
					>
						<Image
							src='/icons/github.svg'
							alt='Github'
							height={50}
							width={50}
						/>
					</a>
				</div>

				<div className='flex items-center justify-center opacity-40'>
					Developed with 💙 and with effort
				</div>
			</div>
			<p className='opacity-30'>
				Powered by{' '}
				<a href='http://ergast.com/mrd/' className='underline' target='_blank'>
					Ergast's F1 API
				</a>
			</p>
		</footer>
	)
}

export default Footer
