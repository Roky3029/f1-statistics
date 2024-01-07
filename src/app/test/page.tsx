import { getNextRace } from '@/data/newData/getNextRace'

const Test = async () => {
	const results = await getNextRace()
	console.log(results)

	return (
		<div>
			<h1>Hola</h1>
		</div>
	)
}

export default Test
