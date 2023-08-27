export type DriverInfo = {
	MRData: MRData
}

export type MRData = {
	xmlns: string
	series: string
	url: string
	limit: string
	offset: string
	total: string
	DriverTable: DriverTable
}

export type DriverTable = {
	season: string
	driverId: string
	Drivers: Driver[]
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
