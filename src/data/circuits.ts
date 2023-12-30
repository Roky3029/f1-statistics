const circuitData = [
	{
		id: 'United_States',
		firstRace: '2012',
		numberOfLaps: '56',
		oneLapDistance: '5.513',
		raceDistance: '308.405',
		fastestLap: '1:36.169',
		authorOfFastestLap: 'Charles Leclerc (2019)'
	},
	{
		id: 'Saudi_Arabia',
		firstRace: '2021',
		numberOfLaps: '50',
		oneLapDistance: '6.174',
		raceDistance: '308.45',
		fastestLap: '1:30.734',
		authorOfFastestLap: 'Lewis Hamilton (2021)'
	},
	{
		id: 'Netherlands',
		firstRace: '1952',
		numberOfLaps: '72',
		oneLapDistance: '4.259',
		raceDistance: '306.587',
		fastestLap: '1:11.097',
		authorOfFastestLap: 'Lewis Hamilton (2021)'
	},
	{
		id: 'Mexico',
		firstRace: '1963',
		numberOfLaps: '71',
		oneLapDistance: '4.304',
		raceDistance: '305.354',
		fastestLap: '1:17.774',
		authorOfFastestLap: 'Valtteri Bottas (2021)'
	},
	{
		id: 'United_Arab_Emirates',
		firstRace: '2009',
		numberOfLaps: '58',
		oneLapDistance: '5.281',
		raceDistance: '306.183',
		fastestLap: '1:26.103',
		authorOfFastestLap: 'Max Verstappen (2021)'
	},
	{
		id: 'Belgium',
		firstRace: '1950',
		numberOfLaps: '44',
		oneLapDistance: '7.004',
		raceDistance: '308.052',
		fastestLap: '1:46.286',
		authorOfFastestLap: 'Valtteri Bottas (2018)'
	},
	{
		id: 'Japan',
		firstRace: '1987',
		numberOfLaps: '53',
		oneLapDistance: '5.807',
		raceDistance: '307.471',
		fastestLap: '1:30.983',
		authorOfFastestLap: 'Lewis Hamilton (2019)'
	},
	{
		id: 'Austria',
		firstRace: '1970',
		numberOfLaps: '71',
		oneLapDistance: '4.318',
		raceDistance: '306.452',
		fastestLap: '1:05.619',
		authorOfFastestLap: 'Carlos Sainz (2020)'
	},
	{
		id: 'Azerbaijan',
		firstRace: '2016',
		numberOfLaps: '51',
		oneLapDistance: '6.003',
		raceDistance: '306.049',
		fastestLap: '1:43.009',
		authorOfFastestLap: 'Charles Leclerc (2019)'
	},
	{
		id: 'Australia',
		firstRace: '1996',
		numberOfLaps: '58',
		oneLapDistance: '5.278',
		raceDistance: '306.124',
		fastestLap: '1:20.235',
		authorOfFastestLap: 'Sergio Perez (2023)'
	},
	{
		id: 'Great_Britain',
		firstRace: '1950',
		numberOfLaps: '52',
		oneLapDistance: '5.891',
		raceDistance: '306.198',
		fastestLap: '1:27.097',
		authorOfFastestLap: 'Max Verstappen (2020)'
	},
	{
		id: 'Miami',
		firstRace: '2022',
		numberOfLaps: '57',
		oneLapDistance: '5.412',
		raceDistance: '308.326',
		fastestLap: '1:29.708',
		authorOfFastestLap: 'Max Verstappen (2023)'
	},
	{
		id: 'Brazil',
		firstRace: '1973',
		numberOfLaps: '71',
		oneLapDistance: '4.309',
		raceDistance: '305.879',
		fastestLap: '1:10.540',
		authorOfFastestLap: 'Valtteri Bottas (2018)'
	},
	{
		id: 'China',
		firstRace: '2004',
		numberOfLaps: '56',
		oneLapDistance: '5.451',
		raceDistance: '305.066',
		fastestLap: '1:32:238',
		authorOfFastestLap: 'Michael Schumacher (2004)'
	},
	{
		id: 'Singapore',
		firstRace: '2008',
		numberOfLaps: '62',
		oneLapDistance: '4.94',
		raceDistance: '306.143',
		fastestLap: '1:35.867',
		authorOfFastestLap: 'Lewis Hamilton (2023)'
	},
	{
		id: 'Canada',
		firstRace: '1978',
		numberOfLaps: '70',
		oneLapDistance: '4.361',
		raceDistance: '305.27',
		fastestLap: '1:13.078',
		authorOfFastestLap: 'Valtteri Bottas (2019)'
	},
	{
		id: 'EmiliaRomagna',
		firstRace: '1980',
		numberOfLaps: '63',
		oneLapDistance: '4.909',
		raceDistance: '309.049',
		fastestLap: '1:15.484',
		authorOfFastestLap: 'Lewis Hamilton (2020)'
	},
	{
		id: 'Las_Vegas',
		firstRace: '2023',
		numberOfLaps: '50',
		oneLapDistance: '6.201',
		raceDistance: '309.958',
		fastestLap: '1:35.490',
		authorOfFastestLap: 'Oscar Piastri (2023)'
	},
	{
		id: 'Monaco',
		firstRace: '1950',
		numberOfLaps: '78',
		oneLapDistance: '3.337',
		raceDistance: '260.286',
		fastestLap: '1:12.909',
		authorOfFastestLap: 'Lewis Hamilton (2021)'
	},
	{
		id: 'Qatar',
		firstRace: '2021',
		numberOfLaps: '57',
		oneLapDistance: '5.419',
		raceDistance: '308.611',
		fastestLap: '1:24.319',
		authorOfFastestLap: 'Max Verstappen (2023)'
	},
	{
		id: 'Bahrain',
		firstRace: '2004',
		numberOfLaps: '57',
		oneLapDistance: '5.412',
		raceDistance: '308.238',
		fastestLap: '1:31.447',
		authorOfFastestLap: 'Pedro de la Rosa (2005)'
	},
	{
		id: 'Italy',
		firstRace: '1950',
		numberOfLaps: '53',
		oneLapDistance: '5.793',
		raceDistance: '306.72',
		fastestLap: '1:21.046',
		authorOfFastestLap: 'Rubens Barrichello (2004)'
	},
	{
		id: 'Spain',
		firstRace: '1991',
		numberOfLaps: '66',
		oneLapDistance: '4.657',
		raceDistance: '307.236',
		fastestLap: '1:16.330',
		authorOfFastestLap: 'Max Verstappen (2023)'
	},
	{
		id: 'Hungary',
		firstRace: '1986',
		numberOfLaps: '70',
		oneLapDistance: '4.381',
		raceDistance: '306.63',
		fastestLap: '1:16.627',
		authorOfFastestLap: 'Lewis Hamilton (2020)'
	}
]

export { circuitData }
