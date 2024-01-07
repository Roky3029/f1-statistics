export type FastestPitStop = {
	MRData: MRData
}

export type MRData = {
	xmlns: string
	series: string
	url: string
	limit: string
	offset: string
	total: string
	RaceTable: RaceTable
}

export type RaceTable = {
	season: string
	round: string
	Races: Race[]
}

export type Race = {
	season: string
	round: string
	url: string
	raceName: string
	Circuit: Circuit
	date: Date
	time: string
	PitStops: PitStop[]
}

export type Circuit = {
	circuitId: string
	url: string
	circuitName: string
	Location: Location
}

export type Location = {
	lat: string
	long: string
	locality: string
	country: string
}

export type PitStop = {
	driverId: string
	lap: string
	stop: string
	time: string
	duration: string
}
