export interface DriverStanding {
	season: number | undefined
	round: number | undefined
	DriverStandings: DriverStandingElementCSR[] | undefined
}

export interface DriverStandingElementCSR {
	position: string
	positionText: string
	points: string
	wins: string
	Driver: DriverCSR
	Constructors: ConstructorCSR[]
}

export interface ConstructorCSR {
	constructorId: string
	url: string
	name: string
	nationality: string
}

export interface DriverCSR {
	driverId: string
	permanentNumber: string
	code: string
	url: string
	givenName: string
	familyName: string
	dateOfBirth: Date
	nationality: string
}

//------------------------------------------------
export interface DriversStanding {
	season: number
	round: number
	DriverStandings: DriverStandingElement[]
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
