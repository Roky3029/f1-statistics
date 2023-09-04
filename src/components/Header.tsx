import HeaderMobile from '@/components/HeaderMobile'
import HeaderDesktop from '@/components/HeaderDesktop'

const Header = () => {
	return (
		<>
			<header className='mb-10 hidden lg:flex w-full items-center justify-between bg-white pl-36 pr-32'>
				<HeaderDesktop />
			</header>
			<header className='mb-10 lg:hidden flex w-full items-center justify-between pl-36 pr-32'>
				<HeaderMobile />
			</header>
		</>
	)
}

export default Header
