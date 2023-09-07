import { getConstructors } from '@/data/getConstructors'
import ConstructorList from './components/ConstructorList'
import Title from '@/components/Title'

const Drivers = async () => {
	const { constructors } = await getConstructors()

	return (
		<>
			<Title text='Drivers' />

			<div className='w-full py-5 px-10 grid place-content-center gap-8 grid-cols-1 lg:grid-cols-2'>
				{constructors.map(constructor => (
					<ConstructorList
						constructorId={constructor.constructorId}
						name={constructor.name}
					/>
				))}
			</div>
		</>
	)
}

export default Drivers
