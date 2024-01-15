import ConstructorList from './components/ConstructorList'
import Title from '@/components/Title'
import { getConstructorsStandingsSSR } from '@/data/newData/getConstructorsStandings'

const Drivers = async () => {
	const [constructors] = await getConstructorsStandingsSSR()

	return (
		<>
			<Title text='Drivers' />

			<div className='w-full py-5 px-10 grid place-content-center gap-8 grid-cols-1 lg:grid-cols-2'>
				{constructors.ConstructorStandings.map(constructor => (
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
