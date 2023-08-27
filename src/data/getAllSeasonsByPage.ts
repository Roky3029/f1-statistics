import { Seasons } from '@/types/seasonsTypes'

export const getAllSeasonsByPage = async (
	page: number = 1,
	limit: number = 10
) => {
	// with this simple equation we can calculate how many elements we'll have to skip in order to satisfy the page requirements
	const offset = limit * (page - 1)
	const url = `http://ergast.com/api/f1/seasons.json?limit=${limit}&offset=${offset}`

	const results = await fetch(url)
	const data = (await results.json()) as Seasons

	return {
		showingNumber: offset + 1,
		endNumber: page * limit,
		total: data.MRData.total,
		seasonList: data.MRData.SeasonTable.Seasons,
		page,
		limit
	}
}
