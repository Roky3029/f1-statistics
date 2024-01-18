import ConstructorList from './components/ConstructorList'
import Title from '@/components/Title'
import { getConstructorsStandingsSSR } from '@/data/getConstructorsStandings'

const Drivers = async () => {
	const [constructorsData] = await getConstructorsStandingsSSR()
	const { ConstructorStandings: constructorsObj } = constructorsData

	const constructors = constructorsObj.sort((a, b) => {
		if (a.Constructor.name < b.Constructor.name) return -1
		if (a.Constructor.name > b.Constructor.name) return 1
		return 0
	})
	return (
		<>
			<Title text='Drivers' />

			<div className='w-full py-5 px-10 grid place-content-center gap-8 grid-cols-1 lg:grid-cols-2'>
				{constructors.map(constructor => (
					<ConstructorList
						constructorId={constructor.Constructor.constructorId}
						name={constructor.Constructor.name}
					/>
				))}
			</div>
		</>
	)
}

export default Drivers
