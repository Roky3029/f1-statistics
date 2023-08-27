export type Constructors = {
	MRData: MRData
}

export type MRData = {
	xmlns: string
	series: string
	url: string
	limit: string
	offset: string
	total: string
	ConstructorTable: ConstructorTable
}

export type ConstructorTable = {
	season: string
	Constructors: Constructor[]
}

export type Constructor = {
	constructorId: string
	url: string
	name: string
	nationality: string
}
