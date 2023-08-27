export type Seasons = {
	MRData: MRData
}

export type MRData = {
	xmlns: string
	series: string
	url: string
	limit: string
	offset: string
	total: string
	SeasonTable: SeasonTable
}

export type SeasonTable = {
	Seasons: Season[]
}

export type Season = {
	season: string
	url: string
}

export type SeasonsTypes = {
	showingNumber: number
	endNumber: number
	total: string
	seasonList: Season[]
	page: number
	limit: number
	season?: any
}
