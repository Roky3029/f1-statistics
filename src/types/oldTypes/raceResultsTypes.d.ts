export type RaceResults = {
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
	Results: Result[]
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

export type Result = {
	number: string
	position: string
	positionText: string
	points: string
	Driver: Driver
	Constructor: Constructor
	grid: string
	laps: string
	status: Status
	Time?: ResultTime
	FastestLap?: FastestLap
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

export type FastestLap = {
	rank: string
	lap: string
	Time: FastestLapTime
	AverageSpeed: AverageSpeed
}

export type AverageSpeed = {
	units: Units
	speed: string
}

export enum Units {
	Kph = 'kph'
}

export type FastestLapTime = {
	time: string
}

export type ResultTime = {
	millis: string
	time: string
}

export enum Status {
	Accident = 'Accident',
	Collision = 'Collision',
	Engine = 'Engine',
	Finished = 'Finished'
}
