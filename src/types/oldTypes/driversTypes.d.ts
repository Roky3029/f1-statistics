// Types generated with Quicktype

export type DriverStandings = {
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
	DriverStandings: DriverStanding[]
}

export type DriverStanding = {
	position: string
	positionText: string
	points: string
	wins: string
	Driver: Driver
	Constructors: Constructor[]
}

export type Constructor = {
	constructorId: string
	url: string
	name: string
	nationality: string
}

export type Driver = {
	driverId: string
	permanentNumber: string
	code: string
	url: string
	givenName: string
	familyName: string
	dateOfBirth: Date
	nationality: string
}
