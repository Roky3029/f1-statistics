interface HeaderLayoutProps {
	children: React.ReactNode
	isPcHeader?: boolean
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
	children,
	isPcHeader
}) => {
	return (
		<header
			className={`mb-10 ${
				isPcHeader ? 'lg:flex hidden' : 'lg:hidden flex'
			} w-full items-center justify-between bg-slate-100 pl-36 pr-32`}
		>
			{children}
		</header>
	)
}

export default HeaderLayout
