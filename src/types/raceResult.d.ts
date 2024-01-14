export interface RaceResult {
	DriverNumber: string
	BroadcastName: string
	Abbreviation: string
	DriverId: string
	TeamName: string
	TeamColor: string
	TeamId: string
	FirstName: string
	LastName: string
	FullName: string
	HeadshotUrl: string
	CountryCode: string
	Position: number
	ClassifiedPosition: string
	GridPosition: number
	Q1: null
	Q2: null
	Q3: null
	Time: number | null
	Status: Status
	Points: number
}

export enum Status {
	Accident = 'Accident',
	Finished = 'Finished',
	Overheating = 'Overheating',
	The1Lap = '+1 Lap'
}

export interface RaceResultRaw {
	DriverNumber: { [key: string]: number | null | string }
	BroadcastName: { [key: string]: number | null | string }
	Abbreviation: { [key: string]: number | null | string }
	DriverId: { [key: string]: number | null | string }
	TeamName: { [key: string]: number | null | string }
	TeamColor: { [key: string]: number | null | string }
	TeamId: { [key: string]: number | null | string }
	FirstName: { [key: string]: number | null | string }
	LastName: { [key: string]: number | null | string }
	FullName: { [key: string]: number | null | string }
	HeadshotUrl: { [key: string]: number | null | string }
	CountryCode: { [key: string]: number | null | string }
	Position: { [key: string]: number }
	ClassifiedPosition: { [key: string]: number | null | string }
	GridPosition: { [key: string]: number }
	Q1: { [key: string]: number | null | string }
	Q2: { [key: string]: number | null | string }
	Q3: { [key: string]: number | null | string }
	Time: { [key: string]: number | null | string }
	Status: { [key: string]: number | null | string }
	Points: { [key: string]: number }
}
