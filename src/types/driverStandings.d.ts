export interface DriverStanding {
	season: number | undefined
	round: number | undefined
	DriverStandings: DriverStandingElement[] | undefined
}

export interface DriverStandingElement {
	position: string
	positionText: string
	points: string
	wins: string
	Driver: Driver
	Constructors: Constructor[]
}

export interface Constructor {
	constructorId: string
	url: string
	name: string
	nationality: string
}

export interface Driver {
	driverId: string
	permanentNumber: string
	code: string
	url: string
	givenName: string
	familyName: string
	dateOfBirth: Date
	nationality: string
}
