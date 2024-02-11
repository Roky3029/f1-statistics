import dynamic from 'next/dynamic'
import Tabs from '@/app/(site)/components/Tabs/Tabs'
import Calendar from './components/Calendar'
import Title from '@/components/Title'
import { RiAlertLine } from 'react-icons/ri'

const Home = () => {
	const NextRace = dynamic(() => import('./components/NextRace'), {
		ssr: false
	})

	return (
		<>
			<div className='text-amber-400 bg-amber-200 border-2 border-amber-400 py-5 rounded-lg mx-10 px-10 flex items-center justify-center'>
				<RiAlertLine size={133} />
				<Title
					text="We're experimenting some problems with our API, as a consequence, most of the data showed might be wrong, this will be fixed ASAP. Sorry for the inconveniencies"
					small
				/>
			</div>
			<NextRace />
			<Tabs />
			<Calendar />
		</>
	)
}

export default Home
