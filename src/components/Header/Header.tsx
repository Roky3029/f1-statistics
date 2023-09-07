import HeaderMobile from '@/components/Header/HeaderMobile'
import HeaderDesktop from '@/components/Header/HeaderDesktop'
import HeaderLayout from './HeaderLayout'

const Header = () => {
	return (
		<>
			<HeaderLayout isPcHeader>
				<HeaderDesktop />
			</HeaderLayout>
			<HeaderLayout>
				<HeaderMobile />
			</HeaderLayout>
		</>
	)
}

export default Header
