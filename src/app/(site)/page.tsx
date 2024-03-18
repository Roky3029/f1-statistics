import dynamic from 'next/dynamic'
import Tabs from '@/app/(site)/components/Tabs/Tabs'
import Calendar from './components/Calendar'

const Home = () => {
	const NextRace = dynamic(() => import('./components/NextRace'), {
		ssr: false
	})

	return (
		<>
			<NextRace />
			<Tabs />
			<Calendar />
		</>
	)
}

export default Home
