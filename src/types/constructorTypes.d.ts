export type ConstructorStandings = {
	MRData: MRData
}

export type MRData = {
	xmlns: string
	series: string
	url: string
	limit: string
	offset: string
	total: string
	StandingsTable: StandingsTable
}

export type StandingsTable = {
	season: string
	StandingsLists: StandingsList[]
}

export type StandingsList = {
	season: string
	round: string
	ConstructorStandings: ConstructorStanding[]
}

export type ConstructorStanding = {
	position: string
	positionText: string
	points: string
	wins: string
	Constructor: Constructor
}

export type Constructor = {
	constructorId: string
	url: string
	name: string
	nationality: string
}
