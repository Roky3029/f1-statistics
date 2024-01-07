export type SingleCircuit = {
	MRData: MRData
}

export type MRData = {
	xmlns: string
	series: string
	url: string
	limit: string
	offset: string
	total: string
	CircuitTable: CircuitTable
}

export type CircuitTable = {
	circuitId: string
	Circuits: Circuit[]
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
