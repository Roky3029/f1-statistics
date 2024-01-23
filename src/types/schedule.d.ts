export interface Schedule {
	RoundNumber: { [key: string]: number }
	Country: { [key: string]: null | string }
	Location: { [key: string]: null | string }
	OfficialEventName: { [key: string]: null | string }
	EventDate: { [key: string]: number }
	EventName: { [key: string]: null | string }
	EventFormat: { [key: string]: null | string }
	Session1: { [key: string]: null | string }
	Session1Date: { [key: string]: null | string }
	Session1DateUtc: { [key: string]: number }
	Session2: { [key: string]: null | string }
	Session2Date: { [key: string]: null | string }
	Session2DateUtc: { [key: string]: number }
	Session3: { [key: string]: null | string }
	Session3Date: { [key: string]: null | string }
	Session3DateUtc: { [key: string]: number }
	Session4: { [key: string]: null | string }
	Session4Date: { [key: string]: null | string }
	Session4DateUtc: { [key: string]: number }
	Session5: { [key: string]: null | string }
	Session5Date: { [key: string]: null | string }
	Session5DateUtc: { [key: string]: number }
	F1ApiSupport: { [key: string]: boolean }
}

interface Event {
	RoundNumber: number
	Country: string
	Location: string
	OfficialEventName: string
	EventDate: number
	EventName: string
	EventFormat: string
	Session1: string
	Session1Date: null
	Session1DateUtc: number
	Session2: string
	Session2Date: null
	Session2DateUtc: number
	Session3: string
	Session3Date: null
	Session3DateUtc: number
	Session4: string
	Session4Date: null
	Session4DateUtc: number
	Session5: string
	Session5Date: null
	Session5DateUtc: number
	F1ApiSupport: boolean
}

interface CalendarRaceProps {
	hasGPPassed: boolean
	round: number
	raceName: string
	country: string
	circuitName: string
	firstPractise: number
	raceDate: number
}
