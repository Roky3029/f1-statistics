import { AiFillHome } from 'react-icons/ai'
import { CiViewTimeline } from 'react-icons/ci'
import { BsFillCarFrontFill, BsMapFill } from 'react-icons/bs'
import { LINK_LIST } from '@/data/consts'
import HeaderLinkMobile from './HeaderLinkMobile'

export default function HeaderMobile() {
	const linkClasses =
		'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'

	const iconsOfLinks = {
		Home: <AiFillHome className={linkClasses} />,
		Seasons: <CiViewTimeline className={linkClasses} />,
		Drivers: <BsFillCarFrontFill className={linkClasses} />,
		Circuits: <BsMapFill className={linkClasses} />
	}
	return (
		<>
			<div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
				<div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
					{LINK_LIST.map(link => (
						<HeaderLinkMobile
							Icon={(iconsOfLinks as any)[link]}
							text={link}
							key={link}
						/>
					))}
				</div>
			</div>
		</>
	)
}
