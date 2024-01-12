export interface ConstructorsStandings {
	season: number
	round: number
	ConstructorStandings: ConstructorStanding[]
}

export interface ConstructorStanding {
	position: string
	positionText: string
	points: string
	wins: string
	Constructor: Constructor
}

export interface Constructor {
	constructorId: string
	url: string
	name: string
	nationality: string
}
