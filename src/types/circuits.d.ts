export interface Circuits {
	circuitId: string
	url: string
	circuitName: string
	Location: Location
}

export interface Location {
	lat: number
	long: number
	locality: string
	country: string
}
