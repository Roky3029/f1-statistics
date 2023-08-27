import dynamic from 'next/dynamic'
import Tabs from '../../components/Tabs/Tabs'
import Calendar from './Calendar'

const Home = () => {
	const NextRace = dynamic(() => import('./NextRace'), {
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
