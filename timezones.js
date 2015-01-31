/*
InfCloud - the open source CalDAV/CardDAV Web Client
Copyright (C) 2011-2015
    Jan Mate <jan.mate@inf-it.com>
    Andrej Lezo <andrej.lezo@inf-it.com>
    Matej Mihalik <matej.mihalik@inf-it.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

var timezones = {
	'Arctic/Longyearbyen': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160522T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19800406T020000','19650425T020000','19640315T020000','19630317T020000','19620318T020000','19610319T020000','19600320T020000','19590315T020000','19450402T020000','19440403T020000','19430329T020000','19400810T230000','19160522T010000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19160930T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19650919T030000','19640920T030000','19630915T030000','19620916T030000','19610917T030000','19600918T030000','19590920T030000','19451001T030000','19441002T030000','19431004T030000','19421102T030000','19160930T000000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0043',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'Africa/Dar_es_Salaam': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Mbabane': {
		daylightComponents:
		[
			{
				dtStart: '19420920T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19430919T020000','19420920T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19430321T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440319T020000','19430321T020000']
			},
			{
				dtStart: '19030301T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0130',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			},
			{
				dtStart: '18920208T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0152',
				tzOffsetTO: '+0130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18920208T000000']
			}
		]
	},
	'Africa/Lagos': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Bissau': {
		standardComponents:
		[
			{
				dtStart: '19750101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19750101T000000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'WAT',
				tzOffsetFROM: '-010220',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Nairobi': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Tunis': {
		daylightComponents:
		[
			{
				dtStart: '19390415T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20080330T020000','20070325T020000','20060326T020000','20050501T000000','19900501T000000','19890326T000000','19880601T000000','19780501T000000','19770430T000000','19450402T020000','19440403T020000','19430425T020000','19430329T020000','19420309T000000','19400225T230000','19390415T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19391119T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081026T030000','20071028T030000','20061029T030000','20050930T020000','19900930T010000','19890924T010000','19880925T010000','19781001T010000','19770924T010000','19450916T000000','19441008T000000','19431004T020000','19430417T020000','19421102T030000','19411006T000000','19391119T000000']
			},
			{
				dtStart: '19110311T000000',
				tzName: 'CET',
				tzOffsetFROM: '+000921',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110311T000000']
			},
			{
				dtStart: '18810512T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+004044',
				tzOffsetTO: '+000921',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18810512T000000']
			}
		]
	},
	'Africa/Khartoum': {
		daylightComponents:
		[
			{
				dtStart: '19700501T000000',
				tzName: 'CAST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19850428T000000','19840429T000000','19830424T000000','19820425T000000','19810426T000000','19800427T000000','19790429T000000','19780430T000000','19770424T000000','19760425T000000','19750427T000000','19740428T000000','19730429T000000','19720430T000000','19710430T000000','19700501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000115T120000',
				tzName: 'EAT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 12,
				rDates: ['20000115T120000']
			},
			{
				dtStart: '19701015T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19851015T000000','19841015T000000','19831015T000000','19821015T000000','19811015T000000','19801015T000000','19791015T000000','19781015T000000','19771015T000000','19761015T000000','19751015T000000','19741015T000000','19731015T000000','19721015T000000','19711015T000000','19701015T000000']
			},
			{
				dtStart: '19310101T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021008',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310101T000000']
			}
		]
	},
	'Africa/Asmara': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Lubumbashi': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Blantyre': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Bamako': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Algiers': {
		daylightComponents:
		[
			{
				dtStart: '19440403T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19780324T010000','19450402T020000','19440403T020000']
			},
			{
				dtStart: '19160614T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800425T000000','19770506T000000','19710425T230000','19390911T230000','19210314T230000','19200214T230000','19190301T230000','19180309T230000','19170324T230000','19160614T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19771021T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19771021T000000']
			},
			{
				dtStart: '19441008T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19780922T030000','19450916T010000','19441008T020000']
			},
			{
				dtStart: '19400225T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19810501T000000','19560129T000000','19400225T020000']
			},
			{
				dtStart: '19161002T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19801031T020000','19791026T000000','19710927T000000','19630414T000000','19461007T000000','19391119T010000','19210622T000000','19201024T000000','19191006T000000','19181007T000000','19171008T000000','19161002T000000']
			},
			{
				dtStart: '19110311T000000',
				tzName: 'WET',
				tzOffsetFROM: '+000921',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110311T000000']
			},
			{
				dtStart: '18910315T000100',
				tzName: 'PMT',
				tzOffsetFROM: '+001212',
				tzOffsetTO: '+000921',
				startMinutes: 1,
				startHours: 0,
				rDates: ['18910315T000100']
			}
		]
	},
	'Africa/Ouagadougou': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Djibouti': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Sao_Tome': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Ndjamena': {
		daylightComponents:
		[
			{
				dtStart: '19791014T000000',
				tzName: 'WAST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19791014T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19800308T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800308T000000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+010012',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Malabo': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Porto-Novo': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Addis_Ababa': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Gaborone': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Brazzaville': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Lusaka': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Windhoek': {
		daylightComponents:
		[
			{
				dtStart: '19940904T020000',
				tzName: 'WAST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 9,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19420920T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420920T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19950402T020000',
				tzName: 'WAT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19940403T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940403T000000']
			},
			{
				dtStart: '19900321T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900321T000000']
			},
			{
				dtStart: '19430321T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19430321T020000']
			},
			{
				dtStart: '19030301T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0130',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			},
			{
				dtStart: '18920208T000000',
				tzName: 'SWAT',
				tzOffsetFROM: '+010824',
				tzOffsetTO: '+0130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18920208T000000']
			}
		]
	},
	'Africa/Kinshasa': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Mogadishu': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Casablanca': {
		daylightComponents:
		[
			{
				dtStart: '20260329T020000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20170326T020000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20250405T020000','20240413T020000','20230422T020000','20220327T020000','20210328T020000','20200329T020000','20190331T020000','20180325T020000','20170326T020000']
			},
			{
				dtStart: '19390912T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20220507T020000','20210515T020000','20200530T020000','20190608T020000','20180616T020000','20170701T020000','20160709T020000','20160327T020000','20150718T020000','20150329T020000','20140802T020000','20140330T020000','20130810T020000','20130428T020000','20120820T020000','20120429T020000','20110403T000000','20100502T000000','20090601T000000','20080601T000000','19780601T000000','19770501T000000','19760501T000000','19740624T000000','19670603T120000','19500611T000000','19400225T000000','19390912T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20361018T030000',
				tzName: 'WET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20371010T030000','20361018T030000']
			},
			{
				dtStart: '20131027T030000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19840316T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19840316T000000']
			},
			{
				dtStart: '19391119T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20351027T030000','20220402T030000','20210410T030000','20200418T030000','20190504T030000','20180512T030000','20170520T030000','20160604T030000','20150613T030000','20140628T030000','20130707T030000','20120930T030000','20120720T030000','20110731T000000','20100808T000000','20090821T000000','20080901T000000','19860101T000000','19780804T000000','19770928T000000','19760801T000000','19740901T000000','19671001T000000','19501029T000000','19451118T000000','19391119T000000']
			},
			{
				dtStart: '19131026T000000',
				tzName: 'WET',
				tzOffsetFROM: '-003020',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19131026T000000']
			}
		]
	},
	'Africa/Kigali': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Douala': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Abidjan': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Cairo': {
		daylightComponents:
		[
			{
				dtStart: '20230428T010000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 1,
				startMonth: 4,
				startDay: 5,
				startCount: -1
			},
			{
				dtStart: '20170428T010000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 1,
				rDates: ['20220505T235959','20210513T235959','20200528T235959','20190426T010000','20180427T010000','20170428T010000']
			},
			{
				dtStart: '19400715T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20190606T235959','20180614T235959','20170629T235959','20160707T235959','20160429T000000','20150723T235959','20150424T000000','20140731T235959','20140515T235959','20100909T235959','20100430T000000','20090424T000000','20080425T000000','20070427T000000','20060428T000000','20050429T000000','20040430T000000','20030425T000000','20020426T000000','20010427T000000','20000428T000000','19990430T000000','19980424T000000','19970425T000000','19960426T000000','19950428T000000','19940501T010000','19930501T010000','19920501T010000','19910501T010000','19900501T010000','19890506T010000','19880501T010000','19870501T010000','19860501T010000','19850501T010000','19840501T010000','19830712T010000','19820725T010000','19810501T010000','19800501T010000','19790501T010000','19780501T010000','19770501T010000','19760501T010000','19750501T010000','19740501T010000','19730501T010000','19720501T010000','19710501T010000','19700501T010000','19690501T010000','19680501T010000','19670501T010000','19660501T010000','19650501T010000','19640501T010000','19630501T010000','19620501T010000','19610501T010000','19600501T010000','19590501T010000','19580501T000000','19570510T000000','19450416T000000','19440401T000000','19430401T000000','19420401T000000','19410415T000000','19400715T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20140925T235959',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 59,
				startHours: 23,
				startMonth: 9,
				startDay: 4,
				startCount: -1
			},
			{
				dtStart: '19401001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20190502T235959','20180510T235959','20170525T235959','20160602T235959','20150611T235959','20140626T235959','20100930T235959','20100810T235959','20090820T235959','20080828T235959','20070906T235959','20060921T235959','20050929T235959','20040930T235959','20030925T235959','20020926T235959','20010927T235959','20000928T235959','19990930T235959','19980924T235959','19970925T235959','19960926T235959','19950928T235959','19941001T030000','19931001T030000','19921001T030000','19911001T030000','19901001T030000','19891001T030000','19881001T030000','19871001T030000','19861001T030000','19851001T030000','19841001T030000','19831001T030000','19821001T030000','19811001T030000','19801001T030000','19791001T030000','19781001T030000','19771001T030000','19761001T030000','19751001T030000','19741001T030000','19731001T030000','19721001T030000','19711001T030000','19701001T030000','19691001T030000','19681001T030000','19671001T030000','19661001T030000','19650930T030000','19640930T030000','19630930T030000','19620930T030000','19610930T030000','19600930T030000','19590930T030000','19581001T000000','19571001T000000','19451101T000000','19441101T000000','19431101T000000','19421027T000000','19410916T000000','19401001T000000']
			},
			{
				dtStart: '19001001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+020509',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19001001T000000']
			}
		]
	},
	'Africa/Freetown': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Luanda': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Nouakchott': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Harare': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Tripoli': {
		daylightComponents:
		[
			{
				dtStart: '19511014T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20130329T010000','19970404T000000','19890401T000000','19880401T000000','19870401T000000','19860404T000000','19850406T000000','19840401T000000','19830401T000000','19820401T000000','19550930T000000','19531009T020000','19511014T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19971004T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20131025T020000','19971004T000000']
			},
			{
				dtStart: '19960930T000000',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20121110T020000','19960930T000000']
			},
			{
				dtStart: '19590101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900504T000000','19590101T000000']
			},
			{
				dtStart: '19520101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19891001T000000','19881001T000000','19871001T000000','19861003T000000','19851001T000000','19841001T000000','19831001T000000','19821001T000000','19820101T000000','19560101T000000','19540101T000000','19520101T000000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+005244',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Africa/Maseru': {
		daylightComponents:
		[
			{
				dtStart: '19420920T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19430919T020000','19420920T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19430321T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440319T020000','19430321T020000']
			},
			{
				dtStart: '19030301T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0130',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			},
			{
				dtStart: '18920208T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0152',
				tzOffsetTO: '+0130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18920208T000000']
			}
		]
	},
	'Africa/Monrovia': {
		standardComponents:
		[
			{
				dtStart: '19720501T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-004430',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19720501T000000']
			},
			{
				dtStart: '19190301T000000',
				tzName: 'LRT',
				tzOffsetFROM: '-004308',
				tzOffsetTO: '-004430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190301T000000']
			},
			{
				dtStart: '18820101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '-004308',
				tzOffsetTO: '-004308',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18820101T000000']
			}
		]
	},
	'Africa/Conakry': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Juba': {
		daylightComponents:
		[
			{
				dtStart: '19700501T000000',
				tzName: 'CAST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19850428T000000','19840429T000000','19830424T000000','19820425T000000','19810426T000000','19800427T000000','19790429T000000','19780430T000000','19770424T000000','19760425T000000','19750427T000000','19740428T000000','19730429T000000','19720430T000000','19710430T000000','19700501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000115T120000',
				tzName: 'EAT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 12,
				rDates: ['20000115T120000']
			},
			{
				dtStart: '19701015T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19851015T000000','19841015T000000','19831015T000000','19821015T000000','19811015T000000','19801015T000000','19791015T000000','19781015T000000','19771015T000000','19761015T000000','19751015T000000','19741015T000000','19731015T000000','19721015T000000','19711015T000000','19701015T000000']
			},
			{
				dtStart: '19310101T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021008',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310101T000000']
			}
		]
	},
	'Africa/El_Aaiun': {
		daylightComponents:
		[
			{
				dtStart: '20260329T020000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20170326T020000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20250405T020000','20240413T020000','20230422T020000','20220327T020000','20210328T020000','20200329T020000','20190331T020000','20180325T020000','20170326T020000']
			},
			{
				dtStart: '19760501T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20220507T020000','20210515T020000','20200530T020000','20190608T020000','20180616T020000','20170701T020000','20160709T020000','20160327T020000','20150718T020000','20150329T020000','20140802T020000','20140330T020000','20130810T020000','20130428T020000','20120820T020000','20120429T020000','20110403T000000','20100502T000000','20090601T000000','20080601T000000','19780601T000000','19770501T000000','19760501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20361018T030000',
				tzName: 'WET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20371010T030000','20361018T030000']
			},
			{
				dtStart: '20131027T030000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19760801T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20351027T030000','20220402T030000','20210410T030000','20200418T030000','20190504T030000','20180512T030000','20170520T030000','20160604T030000','20150613T030000','20140628T030000','20130707T030000','20120930T030000','20120720T030000','20110731T000000','20100808T000000','20090821T000000','20080901T000000','19780804T000000','19770928T000000','19760801T000000']
			},
			{
				dtStart: '19760414T000000',
				tzName: 'WET',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19760414T000000']
			},
			{
				dtStart: '19340101T000000',
				tzName: 'WAT',
				tzOffsetFROM: '-005248',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19340101T000000']
			}
		]
	},
	'Africa/Accra': {
		daylightComponents:
		[
			{
				dtStart: '19200901T000000',
				tzName: 'GHST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0020',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420901T000000','19410901T000000','19400901T000000','19390901T000000','19380901T000000','19370901T000000','19360901T000000','19350901T000000','19340901T000000','19330901T000000','19320901T000000','19310901T000000','19300901T000000','19290901T000000','19280901T000000','19270901T000000','19260901T000000','19250901T000000','19240901T000000','19230901T000000','19220901T000000','19210901T000000','19200901T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19201231T000000',
				tzName: 'GMT',
				tzOffsetFROM: '+0020',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19421231T000000','19411231T000000','19401231T000000','19391231T000000','19381231T000000','19371231T000000','19361231T000000','19351231T000000','19341231T000000','19331231T000000','19321231T000000','19311231T000000','19301231T000000','19291231T000000','19281231T000000','19271231T000000','19261231T000000','19251231T000000','19241231T000000','19231231T000000','19221231T000000','19211231T000000','19201231T000000']
			},
			{
				dtStart: '19180101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-000052',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180101T000000']
			}
		]
	},
	'Africa/Bujumbura': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Bangui': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Lome': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Johannesburg': {
		daylightComponents:
		[
			{
				dtStart: '19420920T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19430919T020000','19420920T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19430321T020000',
				tzName: 'SAST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440319T020000','19430321T020000']
			},
			{
				dtStart: '19030301T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0130',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			},
			{
				dtStart: '18920208T000000',
				tzName: 'SAST',
				tzOffsetFROM: '+0152',
				tzOffsetTO: '+0130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18920208T000000']
			}
		]
	},
	'Africa/Maputo': {
		standardComponents:
		[
			{
				dtStart: '19030301T000000',
				tzName: 'CAT',
				tzOffsetFROM: '+021020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19030301T000000']
			}
		]
	},
	'Africa/Niamey': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Ceuta': {
		daylightComponents:
		[
			{
				dtStart: '19860330T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19180506T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19780601T000000','19770501T000000','19760501T000000','19740624T000000','19670603T120000','19280414T230000','19270409T230000','19260417T230000','19240416T230000','19180506T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19860928T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000']
			},
			{
				dtStart: '19860101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19860101T000000']
			},
			{
				dtStart: '19840316T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19840316T000000']
			},
			{
				dtStart: '19240101T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19290101T000000','19240101T000000']
			},
			{
				dtStart: '19181007T230000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19780804T000000','19770928T000000','19760801T000000','19740901T000000','19671001T000000','19281007T000000','19271002T000000','19261003T000000','19241005T000000','19181007T230000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'WET',
				tzOffsetFROM: '-002116',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Africa/Dakar': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Africa/Libreville': {
		standardComponents:
		[
			{
				dtStart: '19190901T000000',
				tzName: 'WAT',
				tzOffsetFROM: '+001336',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190901T000000']
			}
		]
	},
	'Africa/Kampala': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Africa/Banjul': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Atlantic/Azores': {
		daylightComponents:
		[
			{
				dtStart: '19940327T000000',
				tzName: 'AZOST',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19930328T010000',
				tzName: 'AZOST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19930328T010000']
			},
			{
				dtStart: '19770327T000000',
				tzName: 'AZOST',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920329T010000','19910331T010000','19900325T010000','19890326T010000','19880327T010000','19870329T010000','19860330T010000','19850331T010000','19840325T010000','19830327T020000','19820328T010000','19810329T010000','19800330T000000','19790401T000000','19780402T000000','19770327T000000']
			},
			{
				dtStart: '19420816T000000',
				tzName: 'AZOST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450826T000000','19440827T000000','19430829T000000','19420816T000000']
			},
			{
				dtStart: '19420425T230000',
				tzName: 'AZOMT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450421T230000','19440422T230000','19430417T230000','19420425T230000']
			},
			{
				dtStart: '19160617T230000',
				tzName: 'AZOST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19650404T020000','19640405T020000','19630407T020000','19620401T020000','19610402T020000','19600403T020000','19590405T020000','19580406T020000','19570407T020000','19560401T020000','19550403T020000','19540404T020000','19530405T020000','19520406T020000','19510401T020000','19490403T020000','19480404T020000','19470406T020000','19460406T230000','19450310T230000','19440311T230000','19430313T230000','19420314T230000','19410405T230000','19400224T230000','19390415T230000','19380326T230000','19370403T230000','19360418T230000','19350330T230000','19340407T230000','19320402T230000','19310418T230000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19240416T230000','19210228T230000','19200229T230000','19190228T230000','19180301T230000','19170228T230000','19160617T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T010000',
				tzName: 'AZOT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19920927T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920927T020000']
			},
			{
				dtStart: '19770925T010000',
				tzName: 'AZOT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T010000','19940925T010000','19930926T010000','19910929T020000','19900930T020000','19890924T020000','19880925T020000','19870927T020000','19860928T020000','19850929T020000','19840930T020000','19830925T020000','19820926T020000','19810927T020000','19800928T020000','19790930T020000','19781001T010000','19770925T010000']
			},
			{
				dtStart: '19660403T020000',
				tzName: 'AZOT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19660403T020000']
			},
			{
				dtStart: '19161101T010000',
				tzName: 'AZOT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19651003T030000','19641004T030000','19631006T030000','19621007T030000','19611001T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521005T030000','19511007T030000','19491002T030000','19481003T030000','19471005T030000','19461006T000000','19451028T000000','19441029T000000','19431031T000000','19421025T000000','19411006T000000','19401006T000000','19391119T000000','19381002T000000','19371003T000000','19361004T000000','19351006T000000','19341007T000000','19321002T000000','19311004T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19241015T000000','19211015T000000','19201015T000000','19191015T000000','19181015T000000','19171015T000000','19161101T010000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'AZOT',
				tzOffsetFROM: '-015432',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'HMT',
				tzOffsetFROM: '-014240',
				tzOffsetTO: '-015432',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Atlantic/South_Georgia': {
		standardComponents:
		[
			{
				dtStart: '18900101T000000',
				tzName: 'GST',
				tzOffsetFROM: '-022608',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Atlantic/Canary': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800928T010000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19800928T010000']
			},
			{
				dtStart: '19800406T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800406T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800928T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950924T020000','19940925T020000','19930926T020000','19920927T020000','19910929T020000','19900930T020000','19890924T020000','19880925T020000','19870927T020000','19860928T020000','19850929T020000','19840930T020000','19830925T020000','19820926T020000','19810927T020000','19800928T020000']
			},
			{
				dtStart: '19460930T010000',
				tzName: 'WET',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19460930T010000']
			},
			{
				dtStart: '19220301T000000',
				tzName: 'CANT',
				tzOffsetFROM: '-010136',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19220301T000000']
			}
		]
	},
	'Atlantic/Madeira': {
		daylightComponents:
		[
			{
				dtStart: '19840325T010000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770327T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830327T020000','19820328T010000','19810329T010000','19800330T000000','19790401T000000','19780402T000000','19770327T000000']
			},
			{
				dtStart: '19420816T000000',
				tzName: 'MADST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450826T000000','19440827T000000','19430829T000000','19420816T000000']
			},
			{
				dtStart: '19420425T230000',
				tzName: 'MADMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450421T230000','19440422T230000','19430417T230000','19420425T230000']
			},
			{
				dtStart: '19160617T230000',
				tzName: 'MADST',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19650404T020000','19640405T020000','19630407T020000','19620401T020000','19610402T020000','19600403T020000','19590405T020000','19580406T020000','19570407T020000','19560401T020000','19550403T020000','19540404T020000','19530405T020000','19520406T020000','19510401T020000','19490403T020000','19480404T020000','19470406T020000','19460406T230000','19450310T230000','19440311T230000','19430313T230000','19420314T230000','19410405T230000','19400224T230000','19390415T230000','19380326T230000','19370403T230000','19360418T230000','19350330T230000','19340407T230000','19320402T230000','19310418T230000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19240416T230000','19210228T230000','19200229T230000','19190228T230000','19180301T230000','19170228T230000','19160617T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770925T010000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T020000','19940925T020000','19930926T020000','19920927T020000','19910929T020000','19900930T020000','19890924T020000','19880925T020000','19870927T020000','19860928T020000','19850929T020000','19840930T020000','19830925T020000','19820926T020000','19810927T020000','19800928T020000','19790930T020000','19781001T010000','19770925T010000']
			},
			{
				dtStart: '19660403T020000',
				tzName: 'WET',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19660403T020000']
			},
			{
				dtStart: '19161101T010000',
				tzName: 'MADT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19651003T030000','19641004T030000','19631006T030000','19621007T030000','19611001T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521005T030000','19511007T030000','19491002T030000','19481003T030000','19471005T030000','19461006T000000','19451028T000000','19441029T000000','19431031T000000','19421025T000000','19411006T000000','19401006T000000','19391119T000000','19381002T000000','19371003T000000','19361004T000000','19351006T000000','19341007T000000','19321002T000000','19311004T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19241015T000000','19211015T000000','19201015T000000','19191015T000000','19181015T000000','19171015T000000','19161101T010000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'MADT',
				tzOffsetFROM: '-010736',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'FMT',
				tzOffsetFROM: '-010736',
				tzOffsetTO: '-010736',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Atlantic/Cape_Verde': {
		daylightComponents:
		[
			{
				dtStart: '19420901T000000',
				tzName: 'CVST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420901T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19751125T020000',
				tzName: 'CVT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19751125T020000']
			},
			{
				dtStart: '19451015T000000',
				tzName: 'CVT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19451015T000000']
			},
			{
				dtStart: '19070101T000000',
				tzName: 'CVT',
				tzOffsetFROM: '-013404',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19070101T000000']
			}
		]
	},
	'Atlantic/Stanley': {
		daylightComponents:
		[
			{
				dtStart: '19850915T000000',
				tzName: 'FKST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19850915T000000']
			},
			{
				dtStart: '19830925T000000',
				tzName: 'FKST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19840916T000000','19830925T000000']
			},
			{
				dtStart: '19370926T000000',
				tzName: 'FKST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090906T020000','20080907T020000','20070902T020000','20060903T020000','20050904T020000','20040905T020000','20030907T020000','20020901T020000','20010902T020000','20000910T000000','19990912T000000','19980913T000000','19970914T000000','19960915T000000','19950910T000000','19940911T000000','19930912T000000','19920913T000000','19910915T000000','19900909T000000','19890910T000000','19880911T000000','19870913T000000','19860914T000000','19420927T000000','19410928T000000','19400929T000000','19391001T000000','19380925T000000','19370926T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20100905T020000',
				tzName: 'FKST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100905T020000']
			},
			{
				dtStart: '19840429T000000',
				tzName: 'FKT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19850428T000000','19840429T000000']
			},
			{
				dtStart: '19830501T000000',
				tzName: 'FKT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830501T000000']
			},
			{
				dtStart: '19380320T000000',
				tzName: 'FKT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100418T020000','20090419T020000','20080420T020000','20070415T020000','20060416T020000','20050417T020000','20040418T020000','20030420T020000','20020421T020000','20010415T020000','20000416T000000','19990418T000000','19980419T000000','19970420T000000','19960421T000000','19950416T000000','19940417T000000','19930418T000000','19920419T000000','19910421T000000','19900422T000000','19890416T000000','19880417T000000','19870419T000000','19860420T000000','19430101T000000','19420322T000000','19410323T000000','19400324T000000','19390319T000000','19380320T000000']
			},
			{
				dtStart: '19120312T000000',
				tzName: 'FKT',
				tzOffsetFROM: '-035124',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120312T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'SMT',
				tzOffsetFROM: '-035124',
				tzOffsetTO: '-035124',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Atlantic/Bermuda': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19740428T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19760101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19760101T000000']
			},
			{
				dtStart: '19741027T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000']
			},
			{
				dtStart: '19300101T020000',
				tzName: 'AST',
				tzOffsetFROM: '-041918',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19300101T020000']
			}
		]
	},
	'Atlantic/Reykjavik': {
		daylightComponents:
		[
			{
				dtStart: '19170219T230000',
				tzName: 'ISST',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19670402T010000','19660403T010000','19650404T010000','19640405T010000','19630407T010000','19620401T010000','19610402T010000','19600403T010000','19590405T010000','19580406T010000','19570407T010000','19560401T010000','19550403T010000','19540404T010000','19530405T010000','19520406T010000','19510401T010000','19500402T010000','19490403T010000','19480404T010000','19470406T010000','19460303T010000','19450304T010000','19440305T010000','19430307T010000','19420308T010000','19410302T010000','19400225T020000','19390429T230000','19180219T230000','19170219T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19680407T010000',
				tzName: 'GMT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19680407T010000']
			},
			{
				dtStart: '19171021T010000',
				tzName: 'IST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19671029T020000','19661023T020000','19651024T020000','19641025T020000','19631027T020000','19621028T020000','19611022T020000','19601023T020000','19591025T020000','19581026T020000','19571027T020000','19561028T020000','19551023T020000','19541024T020000','19531025T020000','19521026T020000','19511028T020000','19501022T020000','19491030T020000','19481024T020000','19471026T020000','19461027T020000','19451028T020000','19441022T020000','19431024T020000','19421025T020000','19411102T020000','19401103T020000','19391129T020000','19181116T010000','19171021T010000']
			},
			{
				dtStart: '19080101T000000',
				tzName: 'IST',
				tzOffsetFROM: '-012748',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080101T000000']
			},
			{
				dtStart: '18370101T000000',
				tzName: 'RMT',
				tzOffsetFROM: '-012724',
				tzOffsetTO: '-012748',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18370101T000000']
			}
		]
	},
	'Atlantic/St_Helena': {
		standardComponents:
		[
			{
				dtStart: '19120101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-001608',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Atlantic/Faroe': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810927T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950924T020000','19940925T020000','19930926T020000','19920927T020000','19910929T020000','19900930T020000','19890924T020000','19880925T020000','19870927T020000','19860928T020000','19850929T020000','19840930T020000','19830925T020000','19820926T020000','19810927T020000']
			},
			{
				dtStart: '19810101T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000']
			},
			{
				dtStart: '19080111T000000',
				tzName: 'WET',
				tzOffsetFROM: '-002704',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080111T000000']
			}
		]
	},
	'America/Sitka': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19840429T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19841028T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000']
			},
			{
				dtStart: '19831130T000000',
				tzName: 'AKST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19831030T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000','19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'PST',
				tzOffsetFROM: '-090113',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+145847',
				tzOffsetTO: '-090113',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/Caracas': {
		standardComponents:
		[
			{
				dtStart: '20071209T030000',
				tzName: 'VET',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20071209T030000']
			},
			{
				dtStart: '19650101T000000',
				tzName: 'VET',
				tzOffsetFROM: '-0430',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650101T000000']
			},
			{
				dtStart: '19120212T000000',
				tzName: 'VET',
				tzOffsetFROM: '-042740',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120212T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042744',
				tzOffsetTO: '-042740',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Resolute': {
		daylightComponents:
		[
			{
				dtStart: '20080309T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20010401T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070311T020000','20010401T020000']
			},
			{
				dtStart: '19800427T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'CDDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20001029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20001029T020000']
			},
			{
				dtStart: '19801026T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19470831T000000',
				tzName: 'CST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470831T000000']
			}
		]
	},
	'America/Porto_Velho': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 11,
				rDates: ['19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19880912T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-041536',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Sao_Paulo': {
		daylightComponents:
		[
			{
				dtStart: '20081019T000000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				startMonth: 10,
				startDay: 0,
				startCount: 3
			},
			{
				dtStart: '19640101T000000',
				tzName: 'BRST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19640101T000000']
			},
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20071014T000000','20061105T000000','20051016T000000','20041102T000000','20031019T000000','20021103T000000','20011014T000000','20001008T000000','19991003T000000','19981011T000000','19971006T000000','19961006T000000','19951015T000000','19941016T000000','19931017T000000','19921025T000000','19911020T000000','19901021T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631023T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20170219T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20370222T000000','20360217T000000','20350218T000000','20340226T000000','20330220T000000','20320215T000000','20310216T000000','20300217T000000','20290218T000000','20280220T000000','20270221T000000','20260222T000000','20250216T000000','20240218T000000','20230226T000000','20220220T000000','20210221T000000','20200216T000000','20190217T000000','20180218T000000','20170219T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20160221T000000','20150222T000000','20140216T000000','20130217T000000','20120226T000000','20110220T000000','20100221T000000','20090215T000000','20080217T000000','20070225T000000','20060219T000000','20050220T000000','20040215T000000','20030216T000000','20020217T000000','20010218T000000','20000227T000000','19990221T000000','19980301T000000','19970216T000000','19960211T000000','19950219T000000','19940220T000000','19930131T000000','19920209T000000','19910217T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-030628',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Marigot': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Juneau': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19840429T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000']
			},
			{
				dtStart: '19800427T020000',
				tzName: 'YDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800427T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19841028T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000']
			},
			{
				dtStart: '19831130T000000',
				tzName: 'AKST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19831030T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19821031T020000','19811025T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19801026T020000','19690101T000000','19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'PST',
				tzOffsetFROM: '-085741',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+150219',
				tzOffsetTO: '-085741',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/North_Dakota/Center': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19930404T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000']
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19931031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000']
			},
			{
				dtStart: '19921025T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19921025T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121448',
				tzName: 'MST',
				tzOffsetFROM: '-064512',
				tzOffsetTO: '-0700',
				startMinutes: 14,
				startHours: 12,
				rDates: ['18831118T121448']
			}
		]
	},
	'America/North_Dakota/New_Salem': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20040404T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000']
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20041031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000']
			},
			{
				dtStart: '20031026T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20031026T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121421',
				tzName: 'MST',
				tzOffsetFROM: '-064539',
				tzOffsetTO: '-0700',
				startMinutes: 14,
				startHours: 12,
				rDates: ['18831118T121421']
			}
		]
	},
	'America/North_Dakota/Beulah': {
		daylightComponents:
		[
			{
				dtStart: '20110313T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100314T020000','20090308T020000','20080309T020000','20070311T020000','20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20111106T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20101107T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20101107T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20091101T020000','20081102T020000','20071104T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121253',
				tzName: 'MST',
				tzOffsetFROM: '-064707',
				tzOffsetTO: '-0700',
				startMinutes: 12,
				startHours: 12,
				rDates: ['18831118T121253']
			}
		]
	},
	'America/Rio_Branco': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'ACST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 11,
				rDates: ['19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080624T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080624T000000']
			},
			{
				dtStart: '19880912T000000',
				tzName: 'ACT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'ACT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20131110T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'ACT',
				tzOffsetFROM: '-043112',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Lower_Princes': {
		standardComponents:
		[
			{
				dtStart: '19650101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0430',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650101T000000']
			},
			{
				dtStart: '19120212T000000',
				tzName: 'ANT',
				tzOffsetFROM: '-043547',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120212T000000']
			}
		]
	},
	'America/Denver': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19210327T020000','19200328T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19200101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670101T000000','19460101T000000','19420101T000000','19200101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19450930T020000','19210522T020000','19201031T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T120004',
				tzName: 'MST',
				tzOffsetFROM: '-065956',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 12,
				rDates: ['18831118T120004']
			}
		]
	},
	'America/Santo_Domingo': {
		daylightComponents:
		[
			{
				dtStart: '19691026T000000',
				tzName: 'EHDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19731028T000000','19721029T000000','19711031T000000','19701025T000000','19691026T000000']
			},
			{
				dtStart: '19661030T000000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19661030T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19741027T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20001203T010000','19741027T000000']
			},
			{
				dtStart: '19700221T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0430',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740121T000000','19730121T000000','19720121T000000','19710120T000000','19700221T000000']
			},
			{
				dtStart: '19670228T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20001029T020000','19670228T000000']
			},
			{
				dtStart: '19330401T120000',
				tzName: 'EST',
				tzOffsetFROM: '-0440',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19330401T120000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'SDMT',
				tzOffsetFROM: '-043936',
				tzOffsetTO: '-0440',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Halifax': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T200000',
				tzName: 'APT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 20,
				rDates: ['19450814T200000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'AWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19160401T000000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19410504T000000','19400505T000000','19390528T000000','19380501T000000','19370502T000000','19360601T000000','19350602T000000','19340520T000000','19330430T000000','19320501T000000','19310510T000000','19300511T000000','19290512T000000','19280513T000000','19270501T000000','19260516T000000','19250503T000000','19240504T000000','19230506T000000','19220430T000000','19210506T000000','19200509T000000','19180414T020000','19160401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19180101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740101T000000','19460101T000000','19190101T000000','19180101T000000']
			},
			{
				dtStart: '19161001T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19490925T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19410929T000000','19400930T000000','19390925T000000','19380926T000000','19370927T000000','19360914T000000','19350930T000000','19340916T000000','19331002T000000','19320926T000000','19310928T000000','19300915T000000','19290903T000000','19280909T000000','19270926T000000','19260913T000000','19250928T000000','19240915T000000','19230904T000000','19220905T000000','19210905T000000','19200829T000000','19181027T020000','19161001T000000']
			},
			{
				dtStart: '19020615T000000',
				tzName: 'AST',
				tzOffsetFROM: '-041424',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19020615T000000']
			}
		]
	},
	'America/Dominica': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/St_Kitts': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Merida': {
		daylightComponents:
		[
			{
				dtStart: '20020407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19960407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010506T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19821202T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20010930T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19821202T000000']
			},
			{
				dtStart: '19811223T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811223T000000']
			},
			{
				dtStart: '19220101T000132',
				tzName: 'CST',
				tzOffsetFROM: '-055828',
				tzOffsetTO: '-0600',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19220101T000132']
			}
		]
	},
	'America/St_Johns': {
		daylightComponents:
		[
			{
				dtStart: '20120311T020000',
				tzName: 'NDT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20111101T000000',
				tzName: 'NDT',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20111101T000000']
			},
			{
				dtStart: '19880403T000100',
				tzName: 'NDDT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0130',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19880403T000100']
			},
			{
				dtStart: '19450814T203000',
				tzName: 'NPT',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0230',
				startMinutes: 30,
				startHours: 20,
				rDates: ['19450814T203000']
			},
			{
				dtStart: '19420511T000000',
				tzName: 'NWT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420511T000000']
			},
			{
				dtStart: '19350505T230000',
				tzName: 'NDT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20110313T000100','20100314T000100','20090308T000100','20080309T000100','20070311T000100','20060402T000100','20050403T000100','20040404T000100','20030406T000100','20020407T000100','20010401T000100','20000402T000100','19990404T000100','19980405T000100','19970406T000100','19960407T000100','19950402T000100','19940403T000100','19930404T000100','19920405T000100','19910407T000100','19900401T000100','19890402T000100','19870405T000100','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500514T020000','19490508T020000','19480509T020000','19470511T020000','19460512T020000','19410512T000000','19400513T000000','19390515T000000','19380509T000000','19370510T000000','19360511T000000','19350505T230000']
			},
			{
				dtStart: '19170408T020000',
				tzName: 'NDT',
				tzOffsetFROM: '-033052',
				tzOffsetTO: '-023052',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19340506T230000','19330507T230000','19320501T230000','19310503T230000','19300504T230000','19290505T230000','19280506T230000','19270501T230000','19260502T230000','19250503T230000','19240504T230000','19230506T230000','19220507T230000','19210501T230000','19200502T230000','19190505T230000','19180414T020000','19170408T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20111106T020000',
				tzName: 'NST',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19881030T000100',
				tzName: 'NST',
				tzOffsetFROM: '-0130',
				tzOffsetTO: '-0330',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19881030T000100']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19351027T230000',
				tzName: 'NST',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20101107T000100','20091101T000100','20081102T000100','20071104T000100','20061029T000100','20051030T000100','20041031T000100','20031026T000100','20021027T000100','20011028T000100','20001029T000100','19991031T000100','19981025T000100','19971026T000100','19961027T000100','19951029T000100','19941030T000100','19931031T000100','19921025T000100','19911027T000100','19901028T000100','19891029T000100','19871025T000100','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19501008T020000','19491002T020000','19481003T020000','19471005T020000','19461006T020000','19450930T020000','19411006T000000','19401007T000000','19391002T000000','19381003T000000','19371004T000000','19361005T000000','19351027T230000']
			},
			{
				dtStart: '19350330T000000',
				tzName: 'NST',
				tzOffsetFROM: '-033052',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19350330T000000']
			},
			{
				dtStart: '19170917T020000',
				tzName: 'NST',
				tzOffsetFROM: '-023052',
				tzOffsetTO: '-033052',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19341028T230000','19331029T230000','19321030T230000','19311025T230000','19301026T230000','19291027T230000','19281028T230000','19271030T230000','19261031T230000','19251025T230000','19241026T230000','19231028T230000','19221029T230000','19211030T230000','19201031T230000','19190812T230000','19181027T020000','19170917T020000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-033052',
				tzOffsetTO: '-033052',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190101T000000','19180101T000000','18840101T000000']
			}
		]
	},
	'America/New_York': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'EWT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19410427T020000','19400428T020000','19390430T020000','19380424T020000','19370425T020000','19360426T020000','19350428T020000','19340429T020000','19330430T020000','19320424T020000','19310426T020000','19300427T020000','19290428T020000','19280429T020000','19270424T020000','19260425T020000','19250426T020000','19240427T020000','19230429T020000','19220430T020000','19210424T020000','19200328T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19200101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670101T000000','19460101T000000','19420101T000000','19200101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19591025T020000','19581026T020000','19571027T020000','19561028T020000','19551030T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19410928T020000','19400929T020000','19390924T020000','19380925T020000','19370926T020000','19360927T020000','19350929T020000','19340930T020000','19330924T020000','19320925T020000','19310927T020000','19300928T020000','19290929T020000','19280930T020000','19270925T020000','19260926T020000','19250927T020000','19240928T020000','19230930T020000','19220924T020000','19210925T020000','19201031T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T120358',
				tzName: 'EST',
				tzOffsetFROM: '-045602',
				tzOffsetTO: '-0500',
				startMinutes: 3,
				startHours: 12,
				rDates: ['18831118T120358']
			}
		]
	},
	'America/Adak': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'HADT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19840429T020000',
				tzName: 'HADT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'BDT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T130000',
				tzName: 'NPT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 13,
				rDates: ['19450814T130000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'NWT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'HAST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19841028T020000',
				tzName: 'HAST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000']
			},
			{
				dtStart: '19831130T000000',
				tzName: 'HAST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19831030T020000',
				tzName: 'AHST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000']
			},
			{
				dtStart: '19691026T020000',
				tzName: 'BST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000']
			},
			{
				dtStart: '19670401T000000',
				tzName: 'BST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000','19670401T000000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'NST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'NST',
				tzOffsetFROM: '-114638',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+121321',
				tzOffsetTO: '-114638',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/Nipigon': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'EWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19400929T000000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19181027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19450930T020000','19181027T020000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-055304',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'America/Montreal': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'EWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19400428T000000','19390430T000000','19380424T000000','19370424T235959','19360425T235959','19350427T235959','19340428T235959','19330429T235959','19320430T235959','19310425T235959','19300426T235959','19290427T235959','19280428T235959','19270430T235959','19260502T020000','19250503T020000','19240517T020000','19220430T020000','19210501T020000','19200502T023000','19190331T023000','19180414T020000','19170325T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19180101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740101T000000','19460101T000000','19190101T000000','19180101T000000']
			},
			{
				dtStart: '19170424T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19591025T020000','19581026T020000','19571027T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19501029T020000','19491030T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19390924T000000','19380925T000000','19370925T235959','19360926T235959','19350928T235959','19340929T235959','19330930T235959','19320924T235959','19310926T235959','19300927T235959','19290928T235959','19280929T235959','19270924T235959','19260926T023000','19250927T023000','19240928T023000','19221001T023000','19211002T023000','19201003T023000','19191025T023000','19181027T020000','19170424T000000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-045416',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'America/Godthab': {
		daylightComponents:
		[
			{
				dtStart: '19810328T220000',
				tzName: 'WGST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 22,
				startMonth: 3,
				startDay: 6,
				startCount: 0
			},
			{
				dtStart: '19800406T020000',
				tzName: 'WGST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800406T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961026T230000',
				tzName: 'WGT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 23,
				startMonth: 10,
				startDay: 6,
				startCount: 0
			},
			{
				dtStart: '19800927T230000',
				tzName: 'WGT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19950923T230000','19940924T230000','19930925T230000','19920926T230000','19910928T230000','19900929T230000','19890923T230000','19880924T230000','19870926T230000','19860927T230000','19850928T230000','19840929T230000','19830924T230000','19820925T230000','19810926T230000','19800927T230000']
			},
			{
				dtStart: '19160728T000000',
				tzName: 'WGT',
				tzOffsetFROM: '-032656',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160728T000000']
			}
		]
	},
	'America/Montserrat': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Guyana': {
		standardComponents:
		[
			{
				dtStart: '19910101T000000',
				tzName: 'GYT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910101T000000']
			},
			{
				dtStart: '19750731T000000',
				tzName: 'GYT',
				tzOffsetFROM: '-0345',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19750731T000000']
			},
			{
				dtStart: '19660526T000000',
				tzName: 'GYT',
				tzOffsetFROM: '-0345',
				tzOffsetTO: '-0345',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19660526T000000']
			},
			{
				dtStart: '19150301T000000',
				tzName: 'GBGT',
				tzOffsetFROM: '-035240',
				tzOffsetTO: '-0345',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19150301T000000']
			}
		]
	},
	'America/Thule': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19910331T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920329T020000','19910331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19910929T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19920927T020000','19910929T020000']
			},
			{
				dtStart: '19160728T000000',
				tzName: 'AST',
				tzOffsetFROM: '-043508',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160728T000000']
			}
		]
	},
	'America/Los_Angeles': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19480314T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19460101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670101T000000','19460101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19610924T020000','19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490101T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T120702',
				tzName: 'PST',
				tzOffsetFROM: '-075258',
				tzOffsetTO: '-0800',
				startMinutes: 7,
				startHours: 12,
				rDates: ['18831118T120702']
			}
		]
	},
	'America/Goose_Bay': {
		daylightComponents:
		[
			{
				dtStart: '20120311T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20111101T000000',
				tzName: 'ADT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20111101T000000']
			},
			{
				dtStart: '19880403T000100',
				tzName: 'ADDT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19880403T000100']
			},
			{
				dtStart: '19660424T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110313T000100','20100314T000100','20090308T000100','20080309T000100','20070311T000100','20060402T000100','20050403T000100','20040404T000100','20030406T000100','20020407T000100','20010401T000100','20000402T000100','19990404T000100','19980405T000100','19970406T000100','19960407T000100','19950402T000100','19940403T000100','19930404T000100','19920405T000100','19910407T000100','19900401T000100','19890402T000100','19870405T000100','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000']
			},
			{
				dtStart: '19450814T203000',
				tzName: 'NPT',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0230',
				startMinutes: 30,
				startHours: 20,
				rDates: ['19450814T203000']
			},
			{
				dtStart: '19420511T000000',
				tzName: 'NWT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420511T000000']
			},
			{
				dtStart: '19360511T000000',
				tzName: 'NDT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500514T020000','19490508T020000','19480509T020000','19470511T020000','19460512T020000','19410512T000000','19400513T000000','19390515T000000','19380509T000000','19370510T000000','19360511T000000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'NDT',
				tzOffsetFROM: '-033052',
				tzOffsetTO: '-023052',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20111106T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19881030T000100',
				tzName: 'AST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19881030T000100']
			},
			{
				dtStart: '19661030T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20101107T000100','20091101T000100','20081102T000100','20071104T000100','20061029T000100','20051030T000100','20041031T000100','20031026T000100','20021027T000100','20011028T000100','20001029T000100','19991031T000100','19981025T000100','19971026T000100','19961027T000100','19951029T000100','19941030T000100','19931031T000100','19921025T000100','19911027T000100','19901028T000100','19891029T000100','19871025T000100','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000']
			},
			{
				dtStart: '19660315T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19660315T020000']
			},
			{
				dtStart: '19361005T000000',
				tzName: 'NST',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19501008T020000','19491002T020000','19481003T020000','19471005T020000','19461006T020000','19450930T020000','19411006T000000','19401007T000000','19391002T000000','19381003T000000','19371004T000000','19361005T000000']
			},
			{
				dtStart: '19360101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000','19360101T000000']
			},
			{
				dtStart: '19350330T000000',
				tzName: 'NST',
				tzOffsetFROM: '-033052',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19350330T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'NST',
				tzOffsetFROM: '-023052',
				tzOffsetTO: '-033052',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19181027T020000']
			},
			{
				dtStart: '19180101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-033052',
				tzOffsetTO: '-033052',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190101T000000','19180101T000000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-040140',
				tzOffsetTO: '-033052',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'America/Blanc-Sablon': {
		daylightComponents:
		[
			{
				dtStart: '19450814T200000',
				tzName: 'APT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 20,
				rDates: ['19450814T200000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'AWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19700101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19700101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000','19181027T020000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-034828',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'America/Regina': {
		daylightComponents:
		[
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19590426T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460414T020000','19410413T000000','19400414T000000','19390409T000000','19380410T000000','19370411T000000','19340506T000000','19330507T000000','19320501T000000','19310503T000000','19300504T000000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19600424T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19600424T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19591025T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19461013T020000','19450930T020000','19411012T000000','19401013T000000','19391008T000000','19381002T000000','19371010T000000','19341007T000000','19331001T000000','19321002T000000','19311004T000000','19301005T000000','19181027T020000']
			},
			{
				dtStart: '19050901T000000',
				tzName: 'MST',
				tzOffsetFROM: '-065836',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050901T000000']
			}
		]
	},
	'America/Rainy_River': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19400929T000000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19450930T020000','19181027T020000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-061816',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'America/Anguilla': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Toronto': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'EWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T000000','19480425T000000','19470427T000000','19460428T020000','19400428T020000','19390430T020000','19380424T020000','19370425T020000','19360426T020000','19350428T020000','19340429T020000','19330430T020000','19320501T020000','19310426T020000','19300427T020000','19290428T020000','19280429T020000','19270501T020000','19260502T020000','19250503T020000','19240504T020000','19230513T020000','19220514T020000','19210515T020000','19200502T020000','19190330T233000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19190101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740101T000000','19460101T000000','19190101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19591025T020000','19581026T020000','19571027T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19501126T020000','19491127T000000','19480926T000000','19470928T000000','19460929T020000','19450930T020000','19390924T020000','19380925T020000','19370926T020000','19360927T020000','19350929T020000','19340930T020000','19331001T020000','19320925T020000','19310927T020000','19300928T020000','19290929T020000','19280930T020000','19270925T020000','19260919T020000','19250920T020000','19240921T020000','19230916T020000','19220917T020000','19210915T020000','19200926T000000','19191026T000000','19181027T020000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-051732',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'America/Costa_Rica': {
		daylightComponents:
		[
			{
				dtStart: '19790225T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920118T000000','19910119T000000','19800224T000000','19790225T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19790603T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920315T000000','19910701T000000','19800601T000000','19790603T000000']
			},
			{
				dtStart: '19210115T000000',
				tzName: 'CST',
				tzOffsetFROM: '-053613',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210115T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'SJMT',
				tzOffsetFROM: '-053613',
				tzOffsetTO: '-053613',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Maceio': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20011014T000000','20001008T000000','19991003T000000','19951015T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19900917T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20021001T000000','20010913T000000','19990930T000000','19960904T000000','19951013T000000','19900917T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020217T000000','20001022T000000','20000227T000000','19960211T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-022252',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Araguaina': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20121021T000000','20021103T000000','20011014T000000','20001008T000000','19991003T000000','19981011T000000','19971006T000000','19961006T000000','19951015T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19900917T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20130901T000000','20030924T000000','19950914T000000','19900917T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20130217T000000','20030216T000000','20020217T000000','20010218T000000','20000227T000000','19990221T000000','19980301T000000','19970216T000000','19960211T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-031248',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Whitehorse': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19800427T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'YDDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			},
			{
				dtStart: '19450814T150000',
				tzName: 'YPT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 15,
				rDates: ['19450814T150000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'YWT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'YDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190525T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19801026T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000']
			},
			{
				dtStart: '19800101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19660701T020000',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19660701T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000','19191101T000000','19181027T020000']
			},
			{
				dtStart: '19000820T000000',
				tzName: 'YST',
				tzOffsetFROM: '-090012',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19000820T000000']
			}
		]
	},
	'America/Santa_Isabel': {
		daylightComponents:
		[
			{
				dtStart: '19870405T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420424T000000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420424T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19480405T000000','19310401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19761031T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19540101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020220T000000','20010101T000000','19960101T000000','19760101T000000','19610101T000000','19540101T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19270610T230000']
			},
			{
				dtStart: '19240101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19490114T000000','19451112T000000','19310930T000000','19301115T000000','19240101T000000']
			},
			{
				dtStart: '19220101T002032',
				tzName: 'MST',
				tzOffsetFROM: '-073928',
				tzOffsetTO: '-0700',
				startMinutes: 20,
				startHours: 0,
				rDates: ['19220101T002032']
			}
		]
	},
	'America/Vancouver': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19870101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19870101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19610924T020000','19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19461013T020000','19450930T020000','19181027T020000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-081228',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'America/St_Barthelemy': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Bogota': {
		daylightComponents:
		[
			{
				dtStart: '19920503T000000',
				tzName: 'COST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920503T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19930404T000000',
				tzName: 'COT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19930404T000000']
			},
			{
				dtStart: '19141123T000000',
				tzName: 'COT',
				tzOffsetFROM: '-045616',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19141123T000000']
			},
			{
				dtStart: '18840313T000000',
				tzName: 'BMT',
				tzOffsetFROM: '-045616',
				tzOffsetTO: '-045616',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840313T000000']
			}
		]
	},
	'America/Pangnirtung': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20000402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20000402T020000']
			},
			{
				dtStart: '19960407T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000']
			},
			{
				dtStart: '19950402T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950402T020000']
			},
			{
				dtStart: '19800427T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'ADDT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			},
			{
				dtStart: '19450814T200000',
				tzName: 'APT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 20,
				rDates: ['19450814T200000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'AWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20001029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20001029T020000']
			},
			{
				dtStart: '19991031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19991031T020000']
			},
			{
				dtStart: '19951029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19450930T020000']
			},
			{
				dtStart: '19210101T000000',
				tzName: 'AST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210101T000000']
			}
		]
	},
	'America/Santarem': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 11,
				rDates: ['19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080624T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080624T000000']
			},
			{
				dtStart: '19880912T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-033848',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Boise': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19670430T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740203T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000']
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19740101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740101T000000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19450930T020000']
			},
			{
				dtStart: '19230513T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19230513T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121511',
				tzName: 'PST',
				tzOffsetFROM: '-074449',
				tzOffsetTO: '-0800',
				startMinutes: 15,
				startHours: 12,
				rDates: ['18831118T121511']
			}
		]
	},
	'America/Recife': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20011014T000000','20001008T000000','19991003T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19900917T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20021001T000000','20010913T000000','19990930T000000','19900917T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020217T000000','20001015T000000','20000227T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-021936',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Glace_Bay': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T200000',
				tzName: 'APT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 20,
				rDates: ['19450814T200000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'AWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19530426T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19530101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740101T000000','19720101T000000','19540101T000000','19530101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19530927T020000','19450930T020000','19181027T020000']
			},
			{
				dtStart: '19020615T000000',
				tzName: 'AST',
				tzOffsetFROM: '-035948',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19020615T000000']
			}
		]
	},
	'America/Lima': {
		daylightComponents:
		[
			{
				dtStart: '19380101T000000',
				tzName: 'PEST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940101T000000','19900101T000000','19870101T000000','19860101T000000','19390924T000000','19380925T000000','19380101T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19380401T000000',
				tzName: 'PET',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940401T000000','19900401T000000','19870401T000000','19860401T000000','19400324T000000','19390326T000000','19380401T000000']
			},
			{
				dtStart: '19080728T000000',
				tzName: 'PET',
				tzOffsetFROM: '-050836',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080728T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'LMT',
				tzOffsetFROM: '-050812',
				tzOffsetTO: '-050836',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Dawson': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19800427T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'YDDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			},
			{
				dtStart: '19450814T150000',
				tzName: 'YPT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 15,
				rDates: ['19450814T150000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'YWT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'YDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190525T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19801026T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000']
			},
			{
				dtStart: '19800101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19731028T000000',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19731028T000000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000','19191101T000000','19181027T020000']
			},
			{
				dtStart: '19000820T000000',
				tzName: 'YST',
				tzOffsetFROM: '-091740',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19000820T000000']
			}
		]
	},
	'America/Tijuana': {
		daylightComponents:
		[
			{
				dtStart: '20100314T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420424T000000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420424T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090405T020000','20080406T020000','20070401T020000','20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19480405T000000','19310401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20101107T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19540101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100101T000000','20020220T000000','20010101T000000','19960101T000000','19760101T000000','19610101T000000','19540101T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19270610T230000']
			},
			{
				dtStart: '19240101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091025T020000','20081026T020000','20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19490114T000000','19451112T000000','19310930T000000','19301115T000000','19240101T000000']
			},
			{
				dtStart: '19220101T001156',
				tzName: 'MST',
				tzOffsetFROM: '-074804',
				tzOffsetTO: '-0700',
				startMinutes: 11,
				startHours: 0,
				rDates: ['19220101T001156']
			}
		]
	},
	'America/Cuiaba': {
		daylightComponents:
		[
			{
				dtStart: '20081019T000000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 10,
				startDay: 0,
				startCount: 3
			},
			{
				dtStart: '19311003T110000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20071014T000000','20061105T000000','20051016T000000','20041102T000000','20021103T000000','20011014T000000','20001008T000000','19991003T000000','19981011T000000','19971006T000000','19961006T000000','19951015T000000','19941016T000000','19931017T000000','19921025T000000','19911020T000000','19901021T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20030924T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20370222T000000','20360217T000000','20350218T000000','20340226T000000','20330220T000000','20320215T000000','20310216T000000','20300217T000000','20290218T000000','20280220T000000','20270221T000000','20260222T000000','20250216T000000','20240218T000000','20230226T000000','20220220T000000','20210221T000000','20200216T000000','20190217T000000','20180218T000000','20170219T000000','20041001T000000','20030924T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20160221T000000','20150222T000000','20140216T000000','20130217T000000','20120226T000000','20110220T000000','20100221T000000','20090215T000000','20080217T000000','20070225T000000','20060219T000000','20050220T000000','20030216T000000','20020217T000000','20010218T000000','20000227T000000','19990221T000000','19980301T000000','19970216T000000','19960211T000000','19950219T000000','19940220T000000','19930131T000000','19920209T000000','19910217T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-034420',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Creston': {
		standardComponents:
		[
			{
				dtStart: '19180602T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180602T000000']
			},
			{
				dtStart: '19161001T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19161001T000000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-074604',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'America/Fortaleza': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20011014T000000','20001008T000000','19991003T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19900917T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20021001T000000','20010913T000000','19990930T000000','19900917T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020217T000000','20001022T000000','20000227T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0234',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Atikokan': {
		daylightComponents:
		[
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19400929T000000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19450930T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19181027T020000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-060628',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'America/Puerto_Rico': {
		daylightComponents:
		[
			{
				dtStart: '19450814T200000',
				tzName: 'APT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 20,
				rDates: ['19450814T200000']
			},
			{
				dtStart: '19420503T000000',
				tzName: 'AWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420503T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19460101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000']
			},
			{
				dtStart: '18990328T120000',
				tzName: 'AST',
				tzOffsetFROM: '-042425',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 12,
				rDates: ['18990328T120000']
			}
		]
	},
	'America/St_Thomas': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Indiana/Petersburg': {
		daylightComponents:
		[
			{
				dtStart: '20080309T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20060402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070311T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550501T000000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20081102T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19771030T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20071104T020000','19771030T020000']
			},
			{
				dtStart: '19650425T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19650425T020000']
			},
			{
				dtStart: '19550101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19550101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121053',
				tzName: 'CST',
				tzOffsetFROM: '-054907',
				tzOffsetTO: '-0600',
				startMinutes: 10,
				startHours: 12,
				rDates: ['18831118T121053']
			}
		]
	},
	'America/Indiana/Indianapolis': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19410622T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19691026T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19701025T020000','19691026T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060101T000000','19710101T000000','19690101T000000']
			},
			{
				dtStart: '19550424T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19580427T020000','19550424T020000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000','19420101T000000','19200101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19570929T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19410928T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121522',
				tzName: 'CST',
				tzOffsetFROM: '-054438',
				tzOffsetTO: '-0600',
				startMinutes: 15,
				startHours: 12,
				rDates: ['18831118T121522']
			}
		]
	},
	'America/Indiana/Tell_City': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20060402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550501T000000','19540425T020000','19530426T020000','19460428T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19691026T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19701025T020000','19691026T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000','19690101T000000']
			},
			{
				dtStart: '19640426T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19640426T020000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19631027T020000','19621028T020000','19610924T020000','19601030T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19460929T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121257',
				tzName: 'CST',
				tzOffsetFROM: '-054703',
				tzOffsetTO: '-0600',
				startMinutes: 12,
				startHours: 12,
				rDates: ['18831118T121257']
			}
		]
	},
	'America/Indiana/Vevay': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19691026T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060101T000000','19730101T000000','19690101T000000']
			},
			{
				dtStart: '19540425T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19540425T020000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121944',
				tzName: 'CST',
				tzOffsetFROM: '-054016',
				tzOffsetTO: '-0600',
				startMinutes: 19,
				startHours: 12,
				rDates: ['18831118T121944']
			}
		]
	},
	'America/Indiana/Marengo': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19740106T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19740106T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','19750223T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19510429T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19691026T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19751026T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060101T000000','19760101T000000','19741027T020000','19690101T000000']
			},
			{
				dtStart: '19610430T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19610430T020000']
			},
			{
				dtStart: '19510101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19510101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19510930T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121437',
				tzName: 'CST',
				tzOffsetFROM: '-054523',
				tzOffsetTO: '-0600',
				startMinutes: 14,
				startHours: 12,
				rDates: ['18831118T121437']
			}
		]
	},
	'America/Indiana/Winamac': {
		daylightComponents:
		[
			{
				dtStart: '20080309T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070311T020000']
			},
			{
				dtStart: '20060402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19691026T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19701025T020000','19691026T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000','19690101T000000']
			},
			{
				dtStart: '19610430T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19610430T020000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19600925T020000','19590927T020000','19580928T020000','19570929T020000','19561028T020000','19551030T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121335',
				tzName: 'CST',
				tzOffsetFROM: '-054625',
				tzOffsetTO: '-0600',
				startMinutes: 13,
				startHours: 12,
				rDates: ['18831118T121335']
			}
		]
	},
	'America/Indiana/Vincennes': {
		daylightComponents:
		[
			{
				dtStart: '20080309T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20060402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070311T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550501T000000','19540425T020000','19530426T020000','19460428T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20081102T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19691026T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19701025T020000','19691026T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071104T020000','19710101T000000','19690101T000000']
			},
			{
				dtStart: '19640426T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19640426T020000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19631027T020000','19621028T020000','19610924T020000','19601030T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19460929T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T120953',
				tzName: 'CST',
				tzOffsetFROM: '-055007',
				tzOffsetTO: '-0600',
				startMinutes: 9,
				startHours: 12,
				rDates: ['18831118T120953']
			}
		]
	},
	'America/Indiana/Knox': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20060402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19911027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19911027T020000']
			},
			{
				dtStart: '19620429T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19620429T020000']
			},
			{
				dtStart: '19470101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19631027T020000','19611029T020000','19601030T020000','19591025T020000','19580928T020000','19570929T020000','19561028T020000','19551030T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121330',
				tzName: 'CST',
				tzOffsetFROM: '-054630',
				tzOffsetTO: '-0600',
				startMinutes: 13,
				startHours: 12,
				rDates: ['18831118T121330']
			}
		]
	},
	'America/Nassau': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19640426T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19760101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19760101T000000']
			},
			{
				dtStart: '19641025T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000']
			},
			{
				dtStart: '19120302T000000',
				tzName: 'EST',
				tzOffsetFROM: '-050930',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Tegucigalpa': {
		daylightComponents:
		[
			{
				dtStart: '19870503T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060507T000000','19880501T000000','19870503T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19870927T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060807T000000','19880925T000000','19870927T000000']
			},
			{
				dtStart: '19210401T000000',
				tzName: 'CST',
				tzOffsetFROM: '-054852',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210401T000000']
			}
		]
	},
	'America/Noronha': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'FNST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20011014T000000','20001008T000000','19991003T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19900917T000000',
				tzName: 'FNT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20021001T000000','20010913T000000','19990930T000000','19900917T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'FNT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020217T000000','20001015T000000','20000227T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'FNT',
				tzOffsetFROM: '-020940',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Eirunepe': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'ACST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 11,
				rDates: ['19931017T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080624T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080624T000000']
			},
			{
				dtStart: '19880912T000000',
				tzName: 'ACT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940922T000000','19930928T000000','19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'ACT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20131110T000000','19940220T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'ACT',
				tzOffsetFROM: '-043928',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Jamaica': {
		daylightComponents:
		[
			{
				dtStart: '19740106T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19741027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000']
			},
			{
				dtStart: '19740101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19840101T000000','19740101T000000']
			},
			{
				dtStart: '19120201T000000',
				tzName: 'EST',
				tzOffsetFROM: '-050711',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120201T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'KMT',
				tzOffsetFROM: '-050711',
				tzOffsetTO: '-050711',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Monterrey': {
		daylightComponents:
		[
			{
				dtStart: '20020407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19880403T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010506T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19880403T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19881030T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010930T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19881030T020000']
			},
			{
				dtStart: '19880101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890101T000000','19880101T000000']
			},
			{
				dtStart: '19211231T231844',
				tzName: 'CST',
				tzOffsetFROM: '-064116',
				tzOffsetTO: '-0600',
				startMinutes: 18,
				startHours: 23,
				rDates: ['19211231T231844']
			}
		]
	},
	'America/Managua': {
		daylightComponents:
		[
			{
				dtStart: '19790318T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060430T020000','20050410T000000','19800316T000000','19790318T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19750216T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061001T010000','20051002T000000','19970101T000000','19920924T000000','19800623T000000','19790625T000000','19750216T000000']
			},
			{
				dtStart: '19730501T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19930101T000000','19920101T040000','19730501T000000']
			},
			{
				dtStart: '19340623T000000',
				tzName: 'CST',
				tzOffsetFROM: '-054512',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19340623T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '-054508',
				tzOffsetTO: '-054512',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Iqaluit': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20000402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20000402T020000']
			},
			{
				dtStart: '19800427T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'EDDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420801T000000',
				tzName: 'EWT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420801T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20001029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20001029T020000']
			},
			{
				dtStart: '19991031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19991031T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19450930T020000']
			}
		]
	},
	'America/Kentucky/Monticello': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20010401T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20011028T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000']
			},
			{
				dtStart: '20001029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20001029T020000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19680101T000000','19460101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T122036',
				tzName: 'CST',
				tzOffsetFROM: '-053924',
				tzOffsetTO: '-0600',
				startMinutes: 20,
				startHours: 12,
				rDates: ['18831118T122036']
			}
		]
	},
	'America/Kentucky/Louisville': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19680428T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000']
			},
			{
				dtStart: '19460428T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19740106T020000','19500430T020000','19490424T020000','19480425T020000','19460428T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19470427T020000','19460101T000000','19410427T020000','19210501T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19681027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000']
			},
			{
				dtStart: '19610723T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19741027T020000','19680101T000000','19610723T020000']
			},
			{
				dtStart: '19210101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420101T000000','19210101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19601030T020000','19591025T020000','19581026T020000','19571027T020000','19561028T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19460602T020000','19450930T020000','19410928T020000','19210901T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T121658',
				tzName: 'CST',
				tzOffsetFROM: '-054302',
				tzOffsetTO: '-0600',
				startMinutes: 16,
				startHours: 12,
				rDates: ['18831118T121658']
			}
		]
	},
	'America/Barbados': {
		daylightComponents:
		[
			{
				dtStart: '19770612T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800420T020000','19790415T020000','19780416T020000','19770612T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19771002T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800925T020000','19790930T020000','19781001T020000','19771002T020000']
			},
			{
				dtStart: '19320101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-035829',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19320101T000000']
			},
			{
				dtStart: '19240101T000000',
				tzName: 'BMT',
				tzOffsetFROM: '-035829',
				tzOffsetTO: '-035829',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240101T000000']
			}
		]
	},
	'America/St_Vincent': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Santiago': {
		daylightComponents:
		[
			{
				dtStart: '20120902T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 9,
				startDay: 0,
				startCount: 0
			},
			{
				dtStart: '19681103T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110821T000000','20101010T000000','20091011T000000','20081012T000000','20071014T000000','20061015T000000','20051009T000000','20041010T000000','20031012T000000','20021013T000000','20011014T000000','20001015T000000','19991010T000000','19980927T000000','19971012T000000','19961013T000000','19951015T000000','19941009T000000','19931010T000000','19921011T000000','19911013T000000','19900916T000000','19891015T000000','19881002T000000','19871011T000000','19861012T000000','19851013T000000','19841014T000000','19831009T000000','19821010T000000','19811011T000000','19801012T000000','19791014T000000','19781015T000000','19771009T000000','19761010T000000','19751012T000000','19741013T000000','19730930T000000','19721015T000000','19711010T000000','19701011T000000','19691123T000000','19681103T000000']
			},
			{
				dtStart: '19460715T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460715T000000']
			},
			{
				dtStart: '19280901T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420801T000000','19320901T000000','19310901T000000','19300901T000000','19290901T000000','19280901T000000']
			},
			{
				dtStart: '19270901T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-044246',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19270901T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20120429T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				startMonth: 4,
				startDay: 0,
				startCount: 0
			},
			{
				dtStart: '19690330T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110508T000000','20100404T000000','20090315T000000','20080330T000000','20070311T000000','20060312T000000','20050313T000000','20040314T000000','20030309T000000','20020310T000000','20010311T000000','20000312T000000','19990404T000000','19980315T000000','19970330T000000','19960310T000000','19950312T000000','19940313T000000','19930314T000000','19920315T000000','19910310T000000','19900318T000000','19890312T000000','19880313T000000','19870412T000000','19860309T000000','19850310T000000','19840311T000000','19830313T000000','19820314T000000','19810315T000000','19800309T000000','19790311T000000','19780312T000000','19770313T000000','19760314T000000','19750309T000000','19740310T000000','19730311T000000','19720312T000000','19710314T000000','19700329T000000','19690330T000000']
			},
			{
				dtStart: '19470522T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470522T000000']
			},
			{
				dtStart: '19470331T230000',
				tzName: 'CLT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19470331T230000']
			},
			{
				dtStart: '19280401T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460831T230000','19420601T000000','19320401T000000','19310401T000000','19300401T000000','19290401T000000','19280401T000000']
			},
			{
				dtStart: '19190701T000000',
				tzName: 'SMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-044246',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190701T000000']
			},
			{
				dtStart: '19180901T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-044246',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180901T000000']
			},
			{
				dtStart: '19160701T000000',
				tzName: 'SMT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-044246',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160701T000000']
			},
			{
				dtStart: '19100101T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-044246',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19100101T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'SMT',
				tzOffsetFROM: '-044246',
				tzOffsetTO: '-044246',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Montevideo': {
		daylightComponents:
		[
			{
				dtStart: '20061001T020000',
				tzName: 'UYST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19741222T000000',
				tzName: 'UYST',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19741222T000000']
			},
			{
				dtStart: '19680527T000000',
				tzName: 'UYHST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740310T000000','19700527T000000','19690527T000000','19680527T000000']
			},
			{
				dtStart: '19590524T000000',
				tzName: 'UYST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20051009T020000','20040919T000000','19921018T000000','19911027T000000','19901021T000000','19891029T000000','19881211T000000','19871214T000000','19791001T000000','19771204T000000','19720424T000000','19670402T000000','19660403T000000','19650404T000000','19600117T000000','19590524T000000']
			},
			{
				dtStart: '19421214T000000',
				tzName: 'UYST',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19421214T000000']
			},
			{
				dtStart: '19231002T000000',
				tzName: 'UYHST',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410801T000000','19401027T000000','19391029T000000','19381030T000000','19371031T000000','19361101T000000','19351027T000000','19341028T000000','19331029T000000','19251001T000000','19241001T000000','19231002T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'UYT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19681202T000000',
				tzName: 'UYT',
				tzOffsetFROM: '-0230',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19701202T000000','19691202T000000','19681202T000000']
			},
			{
				dtStart: '19430314T000000',
				tzName: 'UYT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060312T020000','20050327T020000','19930228T000000','19920301T000000','19910303T000000','19900304T000000','19890312T000000','19880314T000000','19800501T000000','19780401T000000','19761001T000000','19720815T000000','19671031T000000','19661031T000000','19650926T000000','19600306T000000','19591115T000000','19430314T000000']
			},
			{
				dtStart: '19240401T000000',
				tzName: 'UYT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420101T000000','19410330T000000','19400331T000000','19390326T000000','19380327T000000','19370328T000000','19360329T000000','19350331T000000','19340401T000000','19260401T000000','19250401T000000','19240401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'UYT',
				tzOffsetFROM: '-034444',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18980628T000000',
				tzName: 'MMT',
				tzOffsetFROM: '-034444',
				tzOffsetTO: '-034444',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18980628T000000']
			}
		]
	},
	'America/Chihuahua': {
		daylightComponents:
		[
			{
				dtStart: '20020407T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19990404T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010506T020000','20000402T020000','19990404T020000']
			},
			{
				dtStart: '19980405T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19980405T020000']
			},
			{
				dtStart: '19960407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19961027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19971026T020000','19961027T020000']
			},
			{
				dtStart: '19960101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980101T000000','19960101T000000']
			},
			{
				dtStart: '19301115T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20010930T020000','20001029T020000','19991031T020000','19981025T020000','19311001T000000','19301115T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19320401T000000','19310501T230000','19270610T230000']
			},
			{
				dtStart: '19211231T235540',
				tzName: 'MST',
				tzOffsetFROM: '-070420',
				tzOffsetTO: '-0700',
				startMinutes: 55,
				startHours: 23,
				rDates: ['19211231T235540']
			}
		]
	},
	'America/Bahia_Banderas': {
		daylightComponents:
		[
			{
				dtStart: '20110403T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20100404T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100404T020000']
			},
			{
				dtStart: '19960407T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20090405T020000','20080406T020000','20070401T020000','20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010506T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20101031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19700101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19700101T000000']
			},
			{
				dtStart: '19490114T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19490114T000000']
			},
			{
				dtStart: '19301115T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091025T020000','20081026T020000','20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20010930T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19420424T000000','19311001T000000','19301115T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19320401T000000','19310501T230000','19270610T230000']
			},
			{
				dtStart: '19211231T235900',
				tzName: 'MST',
				tzOffsetFROM: '-0701',
				tzOffsetTO: '-0700',
				startMinutes: 59,
				startHours: 23,
				rDates: ['19211231T235900']
			}
		]
	},
	'America/Bahia': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20111016T000000','20021103T000000','20011014T000000','20001008T000000','19991003T000000','19981011T000000','19971006T000000','19961006T000000','19951015T000000','19941016T000000','19931017T000000','19921025T000000','19911020T000000','19901021T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20030924T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20121021T000000','20030924T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120226T000000','20030216T000000','20020217T000000','20010218T000000','20000227T000000','19990221T000000','19980301T000000','19970216T000000','19960211T000000','19950219T000000','19940220T000000','19930131T000000','19920209T000000','19910217T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-023404',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Guatemala': {
		daylightComponents:
		[
			{
				dtStart: '19731125T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060430T000000','19910323T000000','19830521T000000','19731125T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19740224T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061001T000000','19910907T000000','19830922T000000','19740224T000000']
			},
			{
				dtStart: '19181005T000000',
				tzName: 'CST',
				tzOffsetFROM: '-060204',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19181005T000000']
			}
		]
	},
	'America/Mexico_City': {
		daylightComponents:
		[
			{
				dtStart: '20020407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19431216T000000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19431216T000000']
			},
			{
				dtStart: '19390205T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20010506T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19500212T000000','19401209T000000','19390205T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20020220T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020220T000000']
			},
			{
				dtStart: '19390625T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20010930T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19500730T000000','19440501T000000','19410401T000000','19390625T000000']
			},
			{
				dtStart: '19301115T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19311001T000000','19301115T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19320401T000000','19310501T230000','19270610T230000']
			},
			{
				dtStart: '19220101T002324',
				tzName: 'MST',
				tzOffsetFROM: '-063636',
				tzOffsetTO: '-0700',
				startMinutes: 23,
				startHours: 0,
				rDates: ['19220101T002324']
			}
		]
	},
	'America/Martinique': {
		daylightComponents:
		[
			{
				dtStart: '19800406T000000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800406T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19800928T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800928T000000']
			},
			{
				dtStart: '19110501T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040420',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110501T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'FFMT',
				tzOffsetFROM: '-040420',
				tzOffsetTO: '-040420',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Belize': {
		daylightComponents:
		[
			{
				dtStart: '19731205T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821218T000000','19731205T000000']
			},
			{
				dtStart: '19181006T000000',
				tzName: 'CHDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19421004T000000','19411005T000000','19401006T000000','19391008T000000','19381002T000000','19371003T000000','19361004T000000','19351006T000000','19341007T000000','19331008T000000','19321002T000000','19311004T000000','19301005T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19251004T000000','19241005T000000','19231007T000000','19221008T000000','19211002T000000','19201003T000000','19191005T000000','19181006T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19740209T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830212T000000','19740209T000000']
			},
			{
				dtStart: '19190209T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0530',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19430214T000000','19420215T000000','19410209T000000','19400211T000000','19390212T000000','19380213T000000','19370214T000000','19360209T000000','19350210T000000','19340211T000000','19330212T000000','19320214T000000','19310215T000000','19300209T000000','19290210T000000','19280212T000000','19270213T000000','19260214T000000','19250215T000000','19240210T000000','19230211T000000','19220212T000000','19210213T000000','19200215T000000','19190209T000000']
			},
			{
				dtStart: '19120401T000000',
				tzName: 'CST',
				tzOffsetFROM: '-055248',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120401T000000']
			}
		]
	},
	'America/St_Lucia': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Asuncion': {
		daylightComponents:
		[
			{
				dtStart: '20101003T000000',
				tzName: 'PYST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19751001T000000',
				tzName: 'PYST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091018T000000','20081019T000000','20071021T000000','20061015T000000','20051016T000000','20041017T000000','20030907T000000','20020901T000000','20011007T000000','20001001T000000','19991003T000000','19981004T000000','19971005T000000','19961006T000000','19951001T000000','19941001T000000','19931001T000000','19921005T000000','19911006T000000','19901001T000000','19891022T000000','19881001T000000','19871001T000000','19861001T000000','19851001T000000','19841001T000000','19831001T000000','19821001T000000','19811001T000000','19801001T000000','19791001T000000','19781001T000000','19771001T000000','19761001T000000','19751001T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20130324T000000',
				tzName: 'PYT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				startMonth: 3,
				startDay: 0,
				startCount: 4
			},
			{
				dtStart: '19750301T000000',
				tzName: 'PYT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19750301T000000']
			},
			{
				dtStart: '19740401T000000',
				tzName: 'PYT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120408T000000','20110410T000000','20100411T000000','20090308T000000','20080309T000000','20070311T000000','20060312T000000','20050313T000000','20040404T000000','20030406T000000','20020407T000000','20010304T000000','20000305T000000','19990307T000000','19980301T000000','19970223T000000','19960301T000000','19950226T000000','19940227T000000','19930331T000000','19920301T000000','19910401T000000','19900401T000000','19890401T000000','19880401T000000','19870401T000000','19860401T000000','19850401T000000','19840401T000000','19830401T000000','19820401T000000','19810401T000000','19800401T000000','19790401T000000','19780301T000000','19770301T000000','19760301T000000','19740401T000000']
			},
			{
				dtStart: '19721001T000000',
				tzName: 'PYT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19721001T000000']
			},
			{
				dtStart: '19311010T000000',
				tzName: 'PYT',
				tzOffsetFROM: '-035040',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19311010T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-035040',
				tzOffsetTO: '-035040',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Havana': {
		daylightComponents:
		[
			{
				dtStart: '20130310T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19280610T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120401T000000','20110320T000000','20100314T000000','20090308T000000','20080316T000000','20070311T000000','20040328T000000','20030406T000000','20020407T000000','20010401T000000','20000402T000000','19990328T000000','19980329T000000','19970406T000000','19960407T000000','19950402T000000','19940403T000000','19930404T000000','19920405T000000','19910407T000000','19900401T000000','19890319T000000','19880320T000000','19870315T000000','19860316T000000','19850505T000000','19840506T000000','19830508T000000','19820509T000000','19810510T000000','19800316T000000','19790318T000000','19780507T000000','19770424T000000','19760425T000000','19750427T000000','19740428T000000','19730429T000000','19720430T000000','19710425T000000','19700426T000000','19690427T000000','19680414T000000','19670408T000000','19660529T000000','19650601T000000','19460602T000000','19450603T000000','19420607T000000','19410601T000000','19400602T000000','19280610T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20121104T010000',
				tzName: 'CST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 1,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19281010T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20111113T010000','20101031T010000','20091025T010000','20081026T010000','20071028T010000','20061029T010000','20031026T010000','20021027T010000','20011028T010000','20001029T010000','19991031T010000','19981025T010000','19971012T010000','19961006T010000','19951008T010000','19941009T010000','19931010T010000','19921011T010000','19911013T010000','19901014T000000','19891008T000000','19881009T000000','19871011T000000','19861012T000000','19851013T000000','19841014T000000','19831009T000000','19821010T000000','19811011T000000','19801012T000000','19791014T000000','19781008T000000','19771030T000000','19761031T000000','19751026T000000','19741008T000000','19731008T000000','19721008T000000','19711031T000000','19701025T000000','19691026T000000','19680908T000000','19670910T000000','19661002T000000','19650930T000000','19460901T000000','19450902T000000','19420906T000000','19410907T000000','19400901T000000','19281010T000000']
			},
			{
				dtStart: '19250719T120000',
				tzName: 'CST',
				tzOffsetFROM: '-052936',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19250719T120000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'HMT',
				tzOffsetFROM: '-052928',
				tzOffsetTO: '-052936',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Detroit': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19480425T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740106T020000','19730429T020000','19670614T020000','19480425T020000']
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'EWT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19450930T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19671029T020000','19480926T020000','19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19750101T000000','19730101T000000','19460101T000000','19420101T000000']
			},
			{
				dtStart: '19150515T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19150515T020000']
			},
			{
				dtStart: '19050101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-053211',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050101T000000']
			}
		]
	},
	'America/Metlakatla': {
		daylightComponents:
		[
			{
				dtStart: '19690427T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19450930T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000','19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'PST',
				tzOffsetFROM: '-084618',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+151342',
				tzOffsetTO: '-084618',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/Guayaquil': {
		standardComponents:
		[
			{
				dtStart: '19310101T000000',
				tzName: 'ECT',
				tzOffsetFROM: '-0514',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310101T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'QMT',
				tzOffsetFROM: '-051920',
				tzOffsetTO: '-0514',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Rankin_Inlet': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20010401T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010401T020000']
			},
			{
				dtStart: '19800427T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'CDDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20001029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20001029T020000']
			},
			{
				dtStart: '19801026T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19570101T000000',
				tzName: 'CST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19570101T000000']
			}
		]
	},
	'America/Argentina/Ushuaia': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19911020T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040530T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040530T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19910303T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040620T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-043312',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Rio_Gallegos': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19911020T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040601T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040601T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19910303T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040620T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-043652',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/San_Luis': {
		daylightComponents:
		[
			{
				dtStart: '20080121T000000',
				tzName: 'WARST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080121T000000']
			},
			{
				dtStart: '19991003T000000',
				tzName: 'WARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19901015T000000',
				tzName: 'WARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081012T000000','19901015T000000']
			},
			{
				dtStart: '19900101T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900101T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040725T000000',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040725T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20000303T000000']
			},
			{
				dtStart: '19910301T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090308T000000','20080309T000000','20040531T000000','19910301T000000']
			},
			{
				dtStart: '19900314T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900314T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091011T000000','19910601T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042524',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Catamarca': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19911020T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911020T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040601T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040601T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19910303T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040620T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042308',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/San_Juan': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19911020T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040531T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040531T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19910301T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910301T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040725T000000','19910507T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-043404',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Mendoza': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19921018T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19921018T000000']
			},
			{
				dtStart: '19901015T000000',
				tzName: 'WARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911015T000000','19901015T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19910301T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040523T000000','19920301T000000','19910301T000000']
			},
			{
				dtStart: '19900304T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900304T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040926T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-043516',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Jujuy': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19920101T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920101T000000']
			},
			{
				dtStart: '19911006T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911006T000000']
			},
			{
				dtStart: '19901028T000000',
				tzName: 'WARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19901028T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19910317T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910317T000000']
			},
			{
				dtStart: '19900304T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900304T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042112',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/La_Rioja': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19911020T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040601T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040601T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19910301T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910301T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040620T000000','19910507T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042724',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Cordoba': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19911020T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911020T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081019T000000','20071230T000000','19921018T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20000303T000000']
			},
			{
				dtStart: '19910303T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090315T000000','20080316T000000','19930307T000000','19920301T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Tucuman': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19911020T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911020T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081019T000000','20071230T000000','19921018T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20040601T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040601T000000']
			},
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20000303T000000']
			},
			{
				dtStart: '19910303T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090315T000000','20080316T000000','19930307T000000','19920301T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040613T000000','19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042052',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Salta': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19911020T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911020T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071230T000000','19921018T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081018T000000','20000303T000000']
			},
			{
				dtStart: '19910303T000000',
				tzName: 'WART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080316T000000','19930307T000000','19920301T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-042140',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Argentina/Buenos_Aires': {
		daylightComponents:
		[
			{
				dtStart: '19991003T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991003T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081019T000000','20071230T000000','19921018T000000','19911020T000000','19901021T000000','19891015T000000','19881201T000000','19740123T000000']
			},
			{
				dtStart: '19301201T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000','19641015T000000','19631215T000000','19461001T000000','19431015T000000','19411015T000000','19400701T000000','19391101T000000','19381101T000000','19371101T000000','19361101T000000','19351101T000000','19341101T000000','19331101T000000','19321101T000000','19311015T000000','19301201T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000303T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20000303T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090315T000000','20080316T000000','19930307T000000','19920301T000000','19910303T000000','19900304T000000','19890305T000000','19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691005T000000']
			},
			{
				dtStart: '19310401T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000','19640301T000000','19631001T000000','19460301T000000','19430801T000000','19410615T000000','19400301T000000','19390301T000000','19380301T000000','19370301T000000','19360301T000000','19350301T000000','19340301T000000','19330301T000000','19320301T000000','19310401T000000']
			},
			{
				dtStart: '19200501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-041648',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200501T000000']
			},
			{
				dtStart: '18941031T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-035348',
				tzOffsetTO: '-041648',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941031T000000']
			}
		]
	},
	'America/Panama': {
		standardComponents:
		[
			{
				dtStart: '19080422T000000',
				tzName: 'EST',
				tzOffsetFROM: '-051936',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080422T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-051808',
				tzOffsetTO: '-051936',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Yakutat': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19840429T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'YDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T150000',
				tzName: 'YPT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 15,
				rDates: ['19450814T150000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'YWT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19841028T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000']
			},
			{
				dtStart: '19831130T000000',
				tzName: 'AKST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'YST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000','19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'YST',
				tzOffsetFROM: '-091855',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+144105',
				tzOffsetTO: '-091855',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/Cayenne': {
		standardComponents:
		[
			{
				dtStart: '19671001T000000',
				tzName: 'GFT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19671001T000000']
			},
			{
				dtStart: '19110701T000000',
				tzName: 'GFT',
				tzOffsetFROM: '-032920',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110701T000000']
			}
		]
	},
	'America/Menominee': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19730429T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19730429T020000']
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19660424T020000','19460428T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19690427T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19690427T020000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19661030T020000','19460929T020000','19450930T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18850918T120000',
				tzName: 'CST',
				tzOffsetFROM: '-055027',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 12,
				rDates: ['18850918T120000']
			}
		]
	},
	'America/Swift_Current': {
		daylightComponents:
		[
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19610430T020000','19600424T020000','19590426T020000','19570428T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19720430T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19720430T020000']
			},
			{
				dtStart: '19500101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19610924T020000','19600925T020000','19591025T020000','19571027T020000','19490925T020000','19480926T020000','19470928T020000','19461013T020000','19450930T020000','19181027T020000']
			},
			{
				dtStart: '19050901T000000',
				tzName: 'MST',
				tzOffsetFROM: '-071120',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050901T000000']
			}
		]
	},
	'America/Campo_Grande': {
		daylightComponents:
		[
			{
				dtStart: '20081019T000000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 10,
				startDay: 0,
				startCount: 3
			},
			{
				dtStart: '19311003T110000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20071014T000000','20061105T000000','20051016T000000','20041102T000000','20031019T000000','20021103T000000','20011014T000000','20001008T000000','19991003T000000','19981011T000000','19971006T000000','19961006T000000','19951015T000000','19941016T000000','19931017T000000','19921025T000000','19911020T000000','19901021T000000','19891015T000000','19881016T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20170219T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20370222T000000','20360217T000000','20350218T000000','20340226T000000','20330220T000000','20320215T000000','20310216T000000','20300217T000000','20290218T000000','20280220T000000','20270221T000000','20260222T000000','20250216T000000','20240218T000000','20230226T000000','20220220T000000','20210221T000000','20200216T000000','20190217T000000','20180218T000000','20170219T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20160221T000000','20150222T000000','20140216T000000','20130217T000000','20120226T000000','20110220T000000','20100221T000000','20090215T000000','20080217T000000','20070225T000000','20060219T000000','20050220T000000','20040215T000000','20030216T000000','20020217T000000','20010218T000000','20000227T000000','19990221T000000','19980301T000000','19970216T000000','19960211T000000','19950219T000000','19940220T000000','19930131T000000','19920209T000000','19910217T000000','19900211T000000','19890129T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-033828',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Grenada': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/El_Salvador': {
		daylightComponents:
		[
			{
				dtStart: '19870503T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880501T000000','19870503T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19870927T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880925T000000','19870927T000000']
			},
			{
				dtStart: '19210101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-055648',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210101T000000']
			}
		]
	},
	'America/Anchorage': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19840429T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'AHDT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T140000',
				tzName: 'CAPT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 14,
				rDates: ['19450814T140000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CAWT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19841028T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000']
			},
			{
				dtStart: '19831130T000000',
				tzName: 'AKST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19831030T020000',
				tzName: 'YST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000']
			},
			{
				dtStart: '19691026T020000',
				tzName: 'AHST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000']
			},
			{
				dtStart: '19670401T000000',
				tzName: 'AHST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000','19670401T000000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'CAT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'CAT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'CAT',
				tzOffsetFROM: '-095936',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+140024',
				tzOffsetTO: '-095936',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/Edmonton': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19690427T020000','19670430T020000','19470427T020000','19230429T020000','19220430T020000','19210424T020000','19200425T020000','19190413T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19870101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19870101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19691026T020000','19671029T020000','19470928T020000','19450930T020000','19230930T020000','19220924T020000','19210925T020000','19201031T020000','19190527T020000','19181027T020000']
			},
			{
				dtStart: '19060901T000000',
				tzName: 'MST',
				tzOffsetFROM: '-073352',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19060901T000000']
			}
		]
	},
	'America/Scoresbysund': {
		daylightComponents:
		[
			{
				dtStart: '19820328T000000',
				tzName: 'EGST',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810329T000000',
				tzName: 'EGST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810329T000000']
			},
			{
				dtStart: '19800406T020000',
				tzName: 'CGST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800406T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T010000',
				tzName: 'EGT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810927T010000',
				tzName: 'EGT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T010000','19940925T010000','19930926T010000','19920927T010000','19910929T010000','19900930T010000','19890924T010000','19880925T010000','19870927T010000','19860928T010000','19850929T010000','19840930T010000','19830925T010000','19820926T010000','19810927T010000']
			},
			{
				dtStart: '19800928T030000',
				tzName: 'CGT',
				tzOffsetFROM: '-0100',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19800928T030000']
			},
			{
				dtStart: '19160728T000000',
				tzName: 'CGT',
				tzOffsetFROM: '-012752',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160728T000000']
			}
		]
	},
	'America/Moncton': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T200000',
				tzName: 'APT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 20,
				rDates: ['19450814T200000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'AWT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'ADT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T000100','20050403T000100','20040404T000100','20030406T000100','20020407T000100','20010401T000100','20000402T000100','19990404T000100','19980405T000100','19970406T000100','19960407T000100','19950402T000100','19940403T000100','19930404T000100','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19410504T010000','19400519T010000','19390527T010000','19380605T010000','19370606T010000','19360607T010000','19350609T010000','19340610T010000','19330611T010000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19330101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20070101T000000','19930101T000000','19730101T000000','19460101T000000','19420101T000000','19330101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T000100','20051030T000100','20041031T000100','20031026T000100','20021027T000100','20011028T000100','20001029T000100','19991031T000100','19981025T000100','19971026T000100','19961027T000100','19951029T000100','19941030T000100','19931031T000100','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19591025T020000','19581026T020000','19571027T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19410927T010000','19400921T010000','19390923T010000','19380904T010000','19370905T010000','19360906T010000','19350908T010000','19340909T010000','19330910T010000','19181027T020000']
			},
			{
				dtStart: '19020615T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19020615T000000']
			},
			{
				dtStart: '18831209T000000',
				tzName: 'EST',
				tzOffsetFROM: '-041908',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18831209T000000']
			}
		]
	},
	'America/Thunder_Bay': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19700426T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19720430T020000','19710425T020000','19700426T020000']
			},
			{
				dtStart: '19450814T190000',
				tzName: 'EPT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 19,
				rDates: ['19450814T190000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'EWT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19450930T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19721029T020000','19711031T020000','19701025T020000','19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740101T000000','19730101T000000','19700101T000000','19420101T000000']
			},
			{
				dtStart: '19100101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19100101T000000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0557',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'America/Phoenix': {
		daylightComponents:
		[
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440401T000100','19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19670430T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19670101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19680321T000000','19670101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19671029T020000','19441001T000100','19440101T000100','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T113142',
				tzName: 'MST',
				tzOffsetFROM: '-072818',
				tzOffsetTO: '-0700',
				startMinutes: 31,
				startHours: 11,
				rDates: ['18831118T113142']
			}
		]
	},
	'America/Boa_Vista': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 11,
				rDates: ['20001008T000000','19991003T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19880912T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19990930T000000','19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20001015T000000','20000227T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-040240',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Aruba': {
		standardComponents:
		[
			{
				dtStart: '19650101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0430',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650101T000000']
			},
			{
				dtStart: '19120212T000000',
				tzName: 'ANT',
				tzOffsetFROM: '-043547',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120212T000000']
			}
		]
	},
	'America/Nome': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19840429T020000',
				tzName: 'AKDT',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000']
			},
			{
				dtStart: '19690427T020000',
				tzName: 'BDT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000']
			},
			{
				dtStart: '19450814T130000',
				tzName: 'NPT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 13,
				rDates: ['19450814T130000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'NWT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19841028T020000',
				tzName: 'AKST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000']
			},
			{
				dtStart: '19831130T000000',
				tzName: 'AKST',
				tzOffsetFROM: '-0900',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19831030T020000',
				tzName: 'YST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19831030T020000']
			},
			{
				dtStart: '19691026T020000',
				tzName: 'BST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000']
			},
			{
				dtStart: '19670401T000000',
				tzName: 'BST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000','19670401T000000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'NST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450930T020000']
			},
			{
				dtStart: '19420101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000','19420101T000000']
			},
			{
				dtStart: '19000820T120000',
				tzName: 'NST',
				tzOffsetFROM: '-110138',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19000820T120000']
			},
			{
				dtStart: '18671018T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+125821',
				tzOffsetTO: '-110138',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18671018T000000']
			}
		]
	},
	'America/Guadeloupe': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Ojinaga': {
		daylightComponents:
		[
			{
				dtStart: '20100314T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19990404T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20090405T020000','20080406T020000','20070401T020000','20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010506T020000','20000402T020000','19990404T020000']
			},
			{
				dtStart: '19980405T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19980405T020000']
			},
			{
				dtStart: '19960407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20101107T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20100101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100101T000000']
			},
			{
				dtStart: '19961027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19971026T020000','19961027T020000']
			},
			{
				dtStart: '19960101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980101T000000','19960101T000000']
			},
			{
				dtStart: '19301115T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091025T020000','20081026T020000','20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20010930T020000','20001029T020000','19991031T020000','19981025T020000','19311001T000000','19301115T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19320401T000000','19310501T230000','19270610T230000']
			},
			{
				dtStart: '19220101T000220',
				tzName: 'MST',
				tzOffsetFROM: '-065740',
				tzOffsetTO: '-0700',
				startMinutes: 2,
				startHours: 0,
				rDates: ['19220101T000220']
			}
		]
	},
	'America/Belem': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'BRST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 11,
				rDates: ['19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19880912T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'BRT',
				tzOffsetFROM: '-031356',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Mazatlan': {
		daylightComponents:
		[
			{
				dtStart: '20020407T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19960407T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010506T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19700101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19700101T000000']
			},
			{
				dtStart: '19490114T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19490114T000000']
			},
			{
				dtStart: '19301115T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20010930T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19420424T000000','19311001T000000','19301115T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19320401T000000','19310501T230000','19270610T230000']
			},
			{
				dtStart: '19211231T235420',
				tzName: 'MST',
				tzOffsetFROM: '-070540',
				tzOffsetTO: '-0700',
				startMinutes: 54,
				startHours: 23,
				rDates: ['19211231T235420']
			}
		]
	},
	'America/Port-au-Prince': {
		daylightComponents:
		[
			{
				dtStart: '20120311T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19830508T000000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060402T000000','20050403T000000','19970406T010000','19960407T010000','19950402T010000','19940403T010000','19930404T010000','19920405T010000','19910407T010000','19900401T010000','19890402T010000','19880403T010000','19870426T000000','19860427T000000','19850428T000000','19840429T000000','19830508T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20121104T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19831030T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061029T000000','20051030T000000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T000000','19861026T000000','19851027T000000','19841028T000000','19831030T000000']
			},
			{
				dtStart: '19170124T120000',
				tzName: 'EST',
				tzOffsetFROM: '-0449',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19170124T120000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'PPMT',
				tzOffsetFROM: '-044920',
				tzOffsetTO: '-0449',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Port_of_Spain': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Paramaribo': {
		standardComponents:
		[
			{
				dtStart: '19841001T000000',
				tzName: 'SRT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19841001T000000']
			},
			{
				dtStart: '19751120T000000',
				tzName: 'SRT',
				tzOffsetFROM: '-0330',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19751120T000000']
			},
			{
				dtStart: '19451001T000000',
				tzName: 'NEGT',
				tzOffsetFROM: '-034036',
				tzOffsetTO: '-0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19451001T000000']
			},
			{
				dtStart: '19350101T000000',
				tzName: 'PMT',
				tzOffsetFROM: '-034052',
				tzOffsetTO: '-034036',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19350101T000000']
			},
			{
				dtStart: '19110101T000000',
				tzName: 'PMT',
				tzOffsetFROM: '-034040',
				tzOffsetTO: '-034052',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110101T000000']
			}
		]
	},
	'America/Winnipeg': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19160423T000000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750427T020000','19740428T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19630428T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500501T020000','19490424T020000','19480425T020000','19470427T020000','19460512T020000','19370516T020000','19180414T020000','19160423T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20060101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060101T000000']
			},
			{
				dtStart: '19160917T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061029T020000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19951029T030000','19941030T030000','19931031T030000','19921025T030000','19911027T030000','19901028T030000','19891029T030000','19881030T030000','19871025T030000','19861026T030000','19851027T030000','19841028T030000','19831030T030000','19821031T030000','19811025T030000','19801026T030000','19791028T030000','19781029T030000','19771030T030000','19761031T030000','19751026T030000','19741027T030000','19731028T030000','19721029T030000','19711031T030000','19701025T030000','19691026T030000','19681027T030000','19671029T030000','19661030T030000','19630922T020000','19600925T020000','19591025T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500930T020000','19490925T020000','19480926T020000','19470928T020000','19461013T020000','19450930T020000','19370926T020000','19181027T020000','19160917T000000']
			},
			{
				dtStart: '18870716T000000',
				tzName: 'CST',
				tzOffsetFROM: '-062836',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18870716T000000']
			}
		]
	},
	'America/Antigua': {
		standardComponents:
		[
			{
				dtStart: '19510101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19510101T000000']
			},
			{
				dtStart: '19120302T000000',
				tzName: 'EST',
				tzOffsetFROM: '-040712',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Manaus': {
		daylightComponents:
		[
			{
				dtStart: '19311003T110000',
				tzName: 'AMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 11,
				rDates: ['19931017T000000','19871025T000000','19861025T000000','19851102T000000','19671101T000000','19661101T000000','19651201T000000','19650131T000000','19631209T000000','19521201T000000','19511201T000000','19501201T000000','19491201T000000','19321003T000000','19311003T110000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19880912T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940922T000000','19930928T000000','19880912T000000']
			},
			{
				dtStart: '19320401T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940220T000000','19880207T000000','19870214T000000','19860315T000000','19680301T000000','19670301T000000','19660301T000000','19650331T000000','19640301T000000','19530301T000000','19520401T000000','19510401T000000','19500416T010000','19330401T000000','19320401T000000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '-040004',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'America/Grand_Turk': {
		daylightComponents:
		[
			{
				dtStart: '19790429T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20150308T020000','20140309T020000','20130310T020000','20120311T020000','20110313T020000','20100314T020000','20090308T020000','20080309T020000','20070311T020000','20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20151101T020000',
				tzName: 'AST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20151101T020000']
			},
			{
				dtStart: '19791028T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141102T020000','20131103T020000','20121104T020000','20111106T020000','20101107T020000','20091101T020000','20081102T020000','20071104T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000']
			},
			{
				dtStart: '19790101T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790101T000000']
			},
			{
				dtStart: '19120201T000000',
				tzName: 'EST',
				tzOffsetFROM: '-050711',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120201T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'KMT',
				tzOffsetFROM: '-044432',
				tzOffsetTO: '-050711',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Hermosillo': {
		daylightComponents:
		[
			{
				dtStart: '19960407T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19980405T020000','19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19990101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19990101T000000']
			},
			{
				dtStart: '19700101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19700101T000000']
			},
			{
				dtStart: '19490114T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19490114T000000']
			},
			{
				dtStart: '19301115T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19981025T020000','19971026T020000','19961027T020000','19420424T000000','19311001T000000','19301115T000000']
			},
			{
				dtStart: '19270610T230000',
				tzName: 'CST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19320401T000000','19310501T230000','19270610T230000']
			},
			{
				dtStart: '19211231T233608',
				tzName: 'MST',
				tzOffsetFROM: '-072352',
				tzOffsetTO: '-0700',
				startMinutes: 36,
				startHours: 23,
				rDates: ['19211231T233608']
			}
		]
	},
	'America/Inuvik': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19800427T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'PDDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19801026T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000']
			},
			{
				dtStart: '19800101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19790429T020000',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19790429T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19530101T000000',
				tzName: 'PST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19530101T000000']
			}
		]
	},
	'America/Cayman': {
		standardComponents:
		[
			{
				dtStart: '19120201T000000',
				tzName: 'EST',
				tzOffsetFROM: '-050711',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120201T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'KMT',
				tzOffsetFROM: '-052532',
				tzOffsetTO: '-050711',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Cambridge_Bay': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '20010401T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010401T020000']
			},
			{
				dtStart: '20000402T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20000402T020000']
			},
			{
				dtStart: '19800427T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'MDDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20001105T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20001105T000000']
			},
			{
				dtStart: '20001029T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20001029T020000']
			},
			{
				dtStart: '19991031T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19991031T020000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19450930T020000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'MST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'America/Cancun': {
		daylightComponents:
		[
			{
				dtStart: '20020407T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19990404T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010506T020000','20000402T020000','19990404T020000']
			},
			{
				dtStart: '19980802T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19980802T020000']
			},
			{
				dtStart: '19960407T020000',
				tzName: 'EDT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19980405T020000','19970406T020000','19960407T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19981025T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20010930T020000','20001029T020000','19991031T020000','19981025T020000']
			},
			{
				dtStart: '19961027T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19971026T020000','19961027T020000']
			},
			{
				dtStart: '19811223T000000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811223T000000']
			},
			{
				dtStart: '19220101T001256',
				tzName: 'CST',
				tzOffsetFROM: '-054704',
				tzOffsetTO: '-0600',
				startMinutes: 12,
				startHours: 0,
				rDates: ['19220101T001256']
			}
		]
	},
	'America/Kralendijk': {
		standardComponents:
		[
			{
				dtStart: '19650101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0430',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650101T000000']
			},
			{
				dtStart: '19120212T000000',
				tzName: 'ANT',
				tzOffsetFROM: '-043547',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120212T000000']
			}
		]
	},
	'America/Tortola': {
		standardComponents:
		[
			{
				dtStart: '19120302T000000',
				tzName: 'AST',
				tzOffsetFROM: '-040604',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120302T000000']
			}
		]
	},
	'America/Curacao': {
		standardComponents:
		[
			{
				dtStart: '19650101T000000',
				tzName: 'AST',
				tzOffsetFROM: '-0430',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650101T000000']
			},
			{
				dtStart: '19120212T000000',
				tzName: 'ANT',
				tzOffsetFROM: '-043547',
				tzOffsetTO: '-0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120212T000000']
			}
		]
	},
	'America/Matamoros': {
		daylightComponents:
		[
			{
				dtStart: '20100314T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19880403T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20090405T020000','20080406T020000','20070401T020000','20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010506T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19880403T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20101107T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19881030T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20091025T020000','20081026T020000','20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20010930T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19881030T020000']
			},
			{
				dtStart: '19880101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100101T000000','19890101T000000','19880101T000000']
			},
			{
				dtStart: '19211231T232000',
				tzName: 'CST',
				tzOffsetFROM: '-0640',
				tzOffsetTO: '-0600',
				startMinutes: 20,
				startHours: 23,
				rDates: ['19211231T232000']
			}
		]
	},
	'America/Miquelon': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'PMDT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19870405T020000',
				tzName: 'PMDT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'PMST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19871025T020000',
				tzName: 'PMST',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000']
			},
			{
				dtStart: '19870101T000000',
				tzName: 'PMST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19870101T000000']
			},
			{
				dtStart: '19800501T000000',
				tzName: 'PMST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800501T000000']
			},
			{
				dtStart: '19110515T000000',
				tzName: 'AST',
				tzOffsetFROM: '-034440',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110515T000000']
			}
		]
	},
	'America/Yellowknife': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19800427T020000',
				tzName: 'MDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000']
			},
			{
				dtStart: '19650425T000000',
				tzName: 'MDDT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650425T000000']
			},
			{
				dtStart: '19450814T170000',
				tzName: 'MPT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 17,
				rDates: ['19450814T170000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'MWT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19651031T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19651031T020000']
			},
			{
				dtStart: '19450930T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19450930T020000']
			},
			{
				dtStart: '19350101T000000',
				tzName: 'MST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19350101T000000']
			}
		]
	},
	'America/La_Paz': {
		daylightComponents:
		[
			{
				dtStart: '19311015T000000',
				tzName: 'BOST',
				tzOffsetFROM: '-043236',
				tzOffsetTO: '-033236',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19311015T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19320321T000000',
				tzName: 'BOT',
				tzOffsetFROM: '-033236',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19320321T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'CMT',
				tzOffsetFROM: '-043236',
				tzOffsetTO: '-043236',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'America/Chicago': {
		daylightComponents:
		[
			{
				dtStart: '20070311T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: 2
			},
			{
				dtStart: '19450814T180000',
				tzName: 'CPT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 18,
				rDates: ['19450814T180000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'CWT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180331T020000',
				tzName: 'CDT',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20060402T020000','20050403T020000','20040404T020000','20030406T020000','20020407T020000','20010401T020000','20000402T020000','19990404T020000','19980405T020000','19970406T020000','19960407T020000','19950402T020000','19940403T020000','19930404T020000','19920405T020000','19910407T020000','19900401T020000','19890402T020000','19880403T020000','19870405T020000','19860427T020000','19850428T020000','19840429T020000','19830424T020000','19820425T020000','19810426T020000','19800427T020000','19790429T020000','19780430T020000','19770424T020000','19760425T020000','19750223T020000','19740106T020000','19730429T020000','19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19460428T020000','19410427T020000','19400428T020000','19390430T020000','19380424T020000','19370425T020000','19350428T020000','19340429T020000','19330430T020000','19320424T020000','19310426T020000','19300427T020000','19290428T020000','19280429T020000','19270424T020000','19260425T020000','19250426T020000','19240427T020000','19230429T020000','19220430T020000','19210327T020000','19200613T020000','19190330T020000','19180331T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071104T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19360301T020000',
				tzName: 'EST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19360301T020000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'CST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670101T000000','19460101T000000','19420101T000000','19200101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'CST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19611029T020000','19601030T020000','19591025T020000','19581026T020000','19571027T020000','19561028T020000','19551030T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19460929T020000','19450930T020000','19410928T020000','19400929T020000','19390924T020000','19380925T020000','19370926T020000','19361115T020000','19350929T020000','19340930T020000','19330924T020000','19320925T020000','19310927T020000','19300928T020000','19290929T020000','19280930T020000','19270925T020000','19260926T020000','19250927T020000','19240928T020000','19230930T020000','19220924T020000','19211030T020000','19201031T020000','19191026T020000','19181027T020000']
			},
			{
				dtStart: '18831118T120924',
				tzName: 'CST',
				tzOffsetFROM: '-055036',
				tzOffsetTO: '-0600',
				startMinutes: 9,
				startHours: 12,
				rDates: ['18831118T120924']
			}
		]
	},
	'America/Danmarkshavn': {
		daylightComponents:
		[
			{
				dtStart: '19800406T020000',
				tzName: 'WGST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950325T220000','19940326T220000','19930327T220000','19920328T220000','19910330T220000','19900324T220000','19890325T220000','19880326T220000','19870328T220000','19860329T220000','19850330T220000','19840324T220000','19830326T220000','19820327T220000','19810328T220000','19800406T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19960101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000']
			},
			{
				dtStart: '19800927T230000',
				tzName: 'WGT',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19950923T230000','19940924T230000','19930925T230000','19920926T230000','19910928T230000','19900929T230000','19890923T230000','19880924T230000','19870926T230000','19860927T230000','19850928T230000','19840929T230000','19830924T230000','19820925T230000','19810926T230000','19800927T230000']
			},
			{
				dtStart: '19160728T000000',
				tzName: 'WGT',
				tzOffsetFROM: '-011440',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160728T000000']
			}
		]
	},
	'America/Dawson_Creek': {
		daylightComponents:
		[
			{
				dtStart: '19450814T160000',
				tzName: 'PPT',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 16,
				rDates: ['19450814T160000']
			},
			{
				dtStart: '19420209T020000',
				tzName: 'PWT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000']
			},
			{
				dtStart: '19180414T020000',
				tzName: 'PDT',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19720430T020000','19710425T020000','19700426T020000','19690427T020000','19680428T020000','19670430T020000','19660424T020000','19650425T020000','19640426T020000','19630428T020000','19620429T020000','19610430T020000','19600424T020000','19590426T020000','19580427T020000','19570428T020000','19560429T020000','19550424T020000','19540425T020000','19530426T020000','19520427T020000','19510429T020000','19500430T020000','19490424T020000','19480425T020000','19470427T020000','19180414T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19720830T020000',
				tzName: 'MST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19720830T020000']
			},
			{
				dtStart: '19470101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0800',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470101T000000']
			},
			{
				dtStart: '19181027T020000',
				tzName: 'PST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671029T020000','19661030T020000','19651031T020000','19641025T020000','19631027T020000','19621028T020000','19610924T020000','19600925T020000','19590927T020000','19580928T020000','19570929T020000','19560930T020000','19550925T020000','19540926T020000','19530927T020000','19520928T020000','19510930T020000','19500924T020000','19490925T020000','19480926T020000','19470928T020000','19450930T020000','19181027T020000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'PST',
				tzOffsetFROM: '-080056',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Asia/Jerusalem': {
		daylightComponents:
		[
			{
				dtStart: '20130329T020000',
				tzName: 'IDT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 5,
				startCount: 0
			},
			{
				dtStart: '19480901T000000',
				tzName: 'IDT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19480901T000000']
			},
			{
				dtStart: '19480523T000000',
				tzName: 'IDDT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19480523T000000']
			},
			{
				dtStart: '19400601T000000',
				tzName: 'IDT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120330T020000','20110401T020000','20100326T020000','20090327T020000','20080328T020000','20070330T020000','20060331T020000','20050401T020000','20040407T010000','20030328T010000','20020329T010000','20010409T010000','20000414T020000','19990402T020000','19980320T000000','19970321T000000','19960315T000000','19950331T000000','19940401T000000','19930402T000000','19920329T000000','19910324T000000','19900325T000000','19890430T000000','19880410T000000','19870415T000000','19860518T000000','19850414T000000','19750420T000000','19740707T000000','19570429T020000','19560603T000000','19550611T020000','19540613T000000','19530412T020000','19520420T020000','19510401T000000','19500416T000000','19490501T000000','19460416T020000','19450416T000000','19440401T000000','19430401T020000','19400601T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20131027T020000',
				tzName: 'IST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19421101T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120923T020000','20111002T020000','20100912T020000','20090927T020000','20081005T020000','20070916T020000','20061001T020000','20051009T020000','20040922T010000','20031003T010000','20021007T010000','20010924T010000','20001006T010000','19990903T020000','19980906T000000','19970914T000000','19960916T000000','19950903T000000','19940828T000000','19930905T000000','19920906T000000','19910901T000000','19900826T000000','19890903T000000','19880904T000000','19870913T000000','19860907T000000','19850915T000000','19750831T000000','19741013T000000','19570922T000000','19560930T030000','19550911T000000','19540912T000000','19530913T030000','19521019T030000','19511111T030000','19500915T030000','19491101T020000','19481101T020000','19461101T000000','19451101T020000','19441101T000000','19431101T000000','19421101T000000']
			},
			{
				dtStart: '19180101T000000',
				tzName: 'IST',
				tzOffsetFROM: '+022040',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'JMT',
				tzOffsetFROM: '+022054',
				tzOffsetTO: '+022040',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Irkutsk': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'IRKST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'IRKST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'IRKT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'IRKT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'IRKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'IRKT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19200125T000000',
				tzName: 'IRKT',
				tzOffsetFROM: '+065705',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200125T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'IMT',
				tzOffsetFROM: '+065705',
				tzOffsetTO: '+065705',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Novokuznetsk': {
		daylightComponents:
		[
			{
				dtStart: '20100328T020000',
				tzName: 'NOVST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'KRAST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'KRAST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20141026T020000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141026T020000']
			},
			{
				dtStart: '20110327T020000',
				tzName: 'NOVT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '20101031T030000',
				tzName: 'NOVT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20101031T030000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19240501T000000',
				tzName: 'KRAT',
				tzOffsetFROM: '+054848',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240501T000000']
			}
		]
	},
	'Asia/Vientiane': {
		standardComponents:
		[
			{
				dtStart: '19200401T000000',
				tzName: 'ICT',
				tzOffsetFROM: '+064204',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200401T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+064204',
				tzOffsetTO: '+064204',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Colombo': {
		daylightComponents:
		[
			{
				dtStart: '19420901T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420901T000000']
			},
			{
				dtStart: '19420105T000000',
				tzName: 'IHST',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420105T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20060415T003000',
				tzName: 'IST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0530',
				startMinutes: 30,
				startHours: 0,
				rDates: ['20060415T003000']
			},
			{
				dtStart: '19961026T003000',
				tzName: 'LKT',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0600',
				startMinutes: 30,
				startHours: 0,
				rDates: ['19961026T003000']
			},
			{
				dtStart: '19960525T000000',
				tzName: 'LKT',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960525T000000']
			},
			{
				dtStart: '19451016T020000',
				tzName: 'IST',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19451016T020000']
			},
			{
				dtStart: '19060101T000000',
				tzName: 'IST',
				tzOffsetFROM: '+051932',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19060101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+051924',
				tzOffsetTO: '+051932',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Krasnoyarsk': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'KRAST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'KRAST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'KRAT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19200106T000000',
				tzName: 'KRAT',
				tzOffsetFROM: '+061126',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200106T000000']
			}
		]
	},
	'Asia/Qatar': {
		standardComponents:
		[
			{
				dtStart: '19720601T000000',
				tzName: 'AST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19720601T000000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'GST',
				tzOffsetFROM: '+032608',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Bahrain': {
		standardComponents:
		[
			{
				dtStart: '19720601T000000',
				tzName: 'AST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19720601T000000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'GST',
				tzOffsetFROM: '+032220',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Urumqi': {
		standardComponents:
		[
			{
				dtStart: '19280101T000000',
				tzName: 'XJT',
				tzOffsetFROM: '+055020',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280101T000000']
			}
		]
	},
	'Asia/Beirut': {
		daylightComponents:
		[
			{
				dtStart: '19930328T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19200328T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920501T000000','19910501T000000','19900501T000000','19890510T000000','19880601T000000','19870501T000000','19860501T000000','19850501T000000','19840501T000000','19780430T000000','19770501T000000','19760501T000000','19750501T000000','19740501T000000','19730501T000000','19720622T000000','19610501T000000','19600501T000000','19590501T000000','19580501T000000','19570501T000000','19230422T000000','19220326T000000','19210403T000000','19200328T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19991031T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19201025T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980927T000000','19970928T000000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19921004T000000','19911016T000000','19901016T000000','19891016T000000','19881016T000000','19871016T000000','19861016T000000','19851016T000000','19841016T000000','19780930T000000','19771001T000000','19761001T000000','19751001T000000','19741001T000000','19731001T000000','19721001T000000','19611001T000000','19601001T000000','19591001T000000','19581001T000000','19571001T000000','19230916T000000','19221008T000000','19211003T000000','19201025T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0222',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Sakhalin': {
		daylightComponents:
		[
			{
				dtStart: '19980329T020000',
				tzName: 'SAKST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'SAKST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19970330T020000','19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'SAKST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19920119T020000',
				tzName: 'SAKT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000','19920119T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'SAKT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'SAKT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19450825T000000',
				tzName: 'SAKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450825T000000']
			},
			{
				dtStart: '19371001T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19371001T000000']
			},
			{
				dtStart: '19050823T000000',
				tzName: 'JCST',
				tzOffsetFROM: '+093048',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050823T000000']
			}
		]
	},
	'Asia/Karachi': {
		daylightComponents:
		[
			{
				dtStart: '20020407T000100',
				tzName: 'PKST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20090415T000000','20080601T000000','20020407T000100']
			},
			{
				dtStart: '19420901T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420901T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021006T000100',
				tzName: 'PKT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20091101T000000','20081101T000000','20021006T000100']
			},
			{
				dtStart: '19710326T000000',
				tzName: 'PKT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710326T000000']
			},
			{
				dtStart: '19510930T000000',
				tzName: 'KART',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19510930T000000']
			},
			{
				dtStart: '19451015T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19451015T000000']
			},
			{
				dtStart: '19070101T000000',
				tzName: 'IST',
				tzOffsetFROM: '+042812',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19070101T000000']
			}
		]
	},
	'Asia/Bishkek': {
		daylightComponents:
		[
			{
				dtStart: '19920412T000000',
				tzName: 'KGST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050327T023000','20040328T023000','20030330T023000','20020331T023000','20010325T023000','20000326T023000','19990328T023000','19980329T023000','19970330T023000','19960407T000000','19950409T000000','19940410T000000','19930411T000000','19920412T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'FRUST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'FRUST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20050812T000000',
				tzName: 'KGT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050812T000000']
			},
			{
				dtStart: '19910831T020000',
				tzName: 'KGT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20041031T023000','20031026T023000','20021027T023000','20011028T023000','20001029T023000','19991031T023000','19981025T023000','19971026T023000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910831T020000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'FRUT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'FRUT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'FRUT',
				tzOffsetFROM: '+045824',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Macau': {
		daylightComponents:
		[
			{
				dtStart: '19610319T033000',
				tzName: 'MOST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 30,
				startHours: 3,
				rDates: ['19800420T000000','19790415T000000','19780416T000000','19770417T033000','19760418T033000','19750420T033000','19740421T000000','19730415T000000','19720416T000000','19710418T033000','19700419T033000','19690420T033000','19680421T033000','19670416T033000','19660417T033000','19650321T000000','19640322T033000','19630317T000000','19620318T033000','19610319T033000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19991220T000000',
				tzName: 'CST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19991220T000000']
			},
			{
				dtStart: '19611105T033000',
				tzName: 'MOT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 30,
				startHours: 3,
				rDates: ['19801019T000000','19791021T000000','19781015T000000','19771016T033000','19761017T033000','19751019T033000','19741020T033000','19731021T000000','19721015T000000','19711017T033000','19701018T033000','19691019T033000','19681020T033000','19671022T033000','19661016T033000','19651031T000000','19641101T033000','19631103T033000','19621104T033000','19611105T033000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'MOT',
				tzOffsetFROM: '+073420',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Asia/Kolkata': {
		daylightComponents:
		[
			{
				dtStart: '19420901T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420901T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19420515T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19451015T000000','19420515T000000']
			},
			{
				dtStart: '19411001T000000',
				tzName: 'BURT',
				tzOffsetFROM: '+055320',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19411001T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'HMT',
				tzOffsetFROM: '+055328',
				tzOffsetTO: '+055320',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Hong_Kong': {
		daylightComponents:
		[
			{
				dtStart: '19740421T033000',
				tzName: 'HKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 30,
				startHours: 3,
				rDates: ['19740421T033000']
			},
			{
				dtStart: '19410401T033000',
				tzName: 'HKST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 30,
				startHours: 3,
				rDates: ['19790513T033000','19760418T033000','19750420T033000','19731230T033000','19730422T033000','19720416T033000','19710418T033000','19700419T033000','19690420T033000','19680421T033000','19670416T033000','19660417T033000','19650418T033000','19640322T033000','19630324T033000','19620318T033000','19610319T033000','19600320T033000','19590322T033000','19580323T033000','19570324T033000','19560318T033000','19550320T033000','19540321T033000','19530405T033000','19520406T033000','19510401T033000','19500402T033000','19490403T033000','19480502T033000','19470413T033000','19460420T033000','19410401T033000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19411225T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19411225T000000']
			},
			{
				dtStart: '19410930T033000',
				tzName: 'HKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 30,
				startHours: 3,
				rDates: ['19791021T033000','19761017T033000','19751019T033000','19741020T033000','19731021T033000','19721022T033000','19711017T033000','19701018T033000','19691019T033000','19681020T033000','19671022T033000','19661016T033000','19651017T033000','19641101T033000','19631103T033000','19621104T033000','19611105T033000','19601106T033000','19591101T033000','19581102T033000','19571103T033000','19561104T033000','19551106T033000','19541031T033000','19531101T033000','19521025T033000','19511028T033000','19501029T033000','19491030T033000','19481031T033000','19471230T033000','19461201T033000','19450915T000000','19410930T033000']
			},
			{
				dtStart: '19041030T000000',
				tzName: 'HKT',
				tzOffsetFROM: '+073642',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19041030T000000']
			}
		]
	},
	'Asia/Makassar': {
		standardComponents:
		[
			{
				dtStart: '19450923T000000',
				tzName: 'WITA',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450923T000000']
			},
			{
				dtStart: '19420209T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420209T000000']
			},
			{
				dtStart: '19321101T000000',
				tzName: 'WITA',
				tzOffsetFROM: '+075736',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19321101T000000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+075736',
				tzOffsetTO: '+075736',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Kuwait': {
		standardComponents:
		[
			{
				dtStart: '19500101T000000',
				tzName: 'AST',
				tzOffsetFROM: '+031156',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500101T000000']
			}
		]
	},
	'Asia/Chita': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'YAKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'YAKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20141026T020000',
				tzName: 'IRKT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141026T020000']
			},
			{
				dtStart: '20110327T020000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19191215T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+073352',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19191215T000000']
			}
		]
	},
	'Asia/Tehran': {
		daylightComponents:
		[
			{
				dtStart: '19790321T000000',
				tzName: 'IRDT',
				tzOffsetFROM: '+0330',
				tzOffsetTO: '+0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20370321T000000','20360321T000000','20350322T000000','20340322T000000','20330321T000000','20320321T000000','20310322T000000','20300322T000000','20290321T000000','20280321T000000','20270322T000000','20260322T000000','20250322T000000','20240321T000000','20230322T000000','20220322T000000','20210322T000000','20200321T000000','20190322T000000','20180322T000000','20170322T000000','20160321T000000','20150322T000000','20140322T000000','20130322T000000','20120321T000000','20110322T000000','20100322T000000','20090322T000000','20080321T000000','20050322T000000','20040321T000000','20030322T000000','20020322T000000','20010322T000000','20000321T000000','19990322T000000','19980322T000000','19970322T000000','19960321T000000','19950322T000000','19940322T000000','19930322T000000','19920322T000000','19910503T000000','19800321T000000','19790321T000000']
			},
			{
				dtStart: '19780321T000000',
				tzName: 'IRDT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19780321T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19790919T000000',
				tzName: 'IRST',
				tzOffsetFROM: '+0430',
				tzOffsetTO: '+0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20370921T000000','20360921T000000','20350922T000000','20340922T000000','20330921T000000','20320921T000000','20310922T000000','20300922T000000','20290921T000000','20280921T000000','20270922T000000','20260922T000000','20250922T000000','20240921T000000','20230922T000000','20220922T000000','20210922T000000','20200921T000000','20190922T000000','20180922T000000','20170922T000000','20160921T000000','20150922T000000','20140922T000000','20130922T000000','20120921T000000','20110922T000000','20100922T000000','20090922T000000','20080921T000000','20050922T000000','20040921T000000','20030922T000000','20020922T000000','20010922T000000','20000921T000000','19990922T000000','19980922T000000','19970922T000000','19960921T000000','19950922T000000','19940922T000000','19930922T000000','19920922T000000','19910922T000000','19800923T000000','19790919T000000']
			},
			{
				dtStart: '19790101T000000',
				tzName: 'IRST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790101T000000']
			},
			{
				dtStart: '19781021T000000',
				tzName: 'IRST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19781021T000000']
			},
			{
				dtStart: '19771101T000000',
				tzName: 'IRST',
				tzOffsetFROM: '+0330',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19771101T000000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'IRST',
				tzOffsetFROM: '+032544',
				tzOffsetTO: '+0330',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19160101T000000',
				tzName: 'TMT',
				tzOffsetFROM: '+032544',
				tzOffsetTO: '+032544',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160101T000000']
			}
		]
	},
	'Asia/Magadan': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'MAGST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MAGST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20141026T020000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141026T020000']
			},
			{
				dtStart: '20110327T020000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+100312',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Yakutsk': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'YAKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'YAKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19191215T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+083858',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19191215T000000']
			}
		]
	},
	'Asia/Kabul': {
		standardComponents:
		[
			{
				dtStart: '19450101T000000',
				tzName: 'AFT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0430',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450101T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'AFT',
				tzOffsetFROM: '+043648',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Asia/Oral': {
		daylightComponents:
		[
			{
				dtStart: '19920328T230000',
				tzName: 'ORAST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19900325T020000',
				tzName: 'URAST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19900325T020000']
			},
			{
				dtStart: '19890326T020000',
				tzName: 'URAST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19890326T020000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'URAST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820401T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'URAST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20050315T000000',
				tzName: 'ORAT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050315T000000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'ORAT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19911216T000000',
				tzName: 'ORAT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911216T000000']
			},
			{
				dtStart: '19910101T000000',
				tzName: 'URAT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910101T000000']
			},
			{
				dtStart: '19890924T030000',
				tzName: 'URAT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19900930T030000','19890924T030000']
			},
			{
				dtStart: '19821001T000000',
				tzName: 'URAT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'URAT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'URAT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'URAT',
				tzOffsetFROM: '+032524',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Srednekolymsk': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'MAGST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MAGST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20141026T020000',
				tzName: 'SRET',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141026T020000']
			},
			{
				dtStart: '20110327T020000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+101452',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Novosibirsk': {
		daylightComponents:
		[
			{
				dtStart: '19940327T020000',
				tzName: 'NOVST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000']
			},
			{
				dtStart: '19930523T000000',
				tzName: 'NOVST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19930523T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'NOVST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'NOVST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19910929T030000',
				tzName: 'NOVT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'NOVT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'NOVT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110327T020000','19920119T020000','19300621T000000']
			},
			{
				dtStart: '19191214T060000',
				tzName: 'NOVT',
				tzOffsetFROM: '+053140',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 6,
				rDates: ['19191214T060000']
			}
		]
	},
	'Asia/Rangoon': {
		standardComponents:
		[
			{
				dtStart: '19450503T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450503T000000']
			},
			{
				dtStart: '19420501T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420501T000000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'BURT',
				tzOffsetFROM: '+062440',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'RMT',
				tzOffsetFROM: '+062440',
				tzOffsetTO: '+062440',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Aqtau': {
		daylightComponents:
		[
			{
				dtStart: '19960331T020000',
				tzName: 'AQTST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000']
			},
			{
				dtStart: '19950326T020000',
				tzName: 'AQTST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950326T020000']
			},
			{
				dtStart: '19920328T230000',
				tzName: 'AQTST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19830401T000000',
				tzName: 'SHEST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'SHEST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20050315T000000',
				tzName: 'AQTT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050315T000000']
			},
			{
				dtStart: '19950924T030000',
				tzName: 'AQTT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'AQTT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19911216T000000',
				tzName: 'AQTT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911216T000000']
			},
			{
				dtStart: '19821001T000000',
				tzName: 'SHET',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'SHET',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811001T000000']
			},
			{
				dtStart: '19630101T000000',
				tzName: 'SHET',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910101T000000','19630101T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'FORT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'FORT',
				tzOffsetFROM: '+032104',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Damascus': {
		daylightComponents:
		[
			{
				dtStart: '20120330T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 3,
				startDay: 5,
				startCount: -1
			},
			{
				dtStart: '19200418T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110401T000000','20100402T000000','20090327T000000','20080404T000000','20070330T000000','20060401T000000','20050401T000000','20040401T000000','20030401T000000','20020401T000000','20010401T000000','20000401T000000','19990401T000000','19980330T000000','19970331T000000','19960401T000000','19950401T000000','19940401T000000','19930326T000000','19920408T000000','19910401T000000','19900401T020000','19890331T020000','19880315T020000','19870301T020000','19860216T020000','19840409T020000','19830409T020000','19780501T020000','19770501T020000','19760501T020000','19750501T020000','19740501T020000','19730501T020000','19720501T020000','19710501T020000','19700501T020000','19690501T020000','19680501T020000','19670501T020000','19660424T020000','19650501T020000','19640501T020000','19630501T020000','19620429T020000','19230415T020000','19220416T020000','19210417T020000','19200418T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20091030T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				startMonth: 10,
				startDay: 5,
				startCount: -1
			},
			{
				dtStart: '19201003T020000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20081101T000000','20071102T000000','20060922T000000','20051001T000000','20041001T000000','20031001T000000','20021001T000000','20011001T000000','20001001T000000','19991001T000000','19981001T000000','19971001T000000','19961001T000000','19951001T000000','19941001T000000','19930925T000000','19921001T000000','19911001T000000','19900930T020000','19891001T020000','19881031T020000','19871031T020000','19861009T020000','19841001T020000','19831001T020000','19780901T020000','19770901T020000','19761001T020000','19751001T020000','19741001T020000','19731001T020000','19721001T020000','19711001T020000','19701001T020000','19691001T020000','19681001T020000','19671001T020000','19661001T020000','19650930T020000','19641001T020000','19630930T020000','19621001T020000','19231007T020000','19221001T020000','19211002T020000','19201003T020000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+022512',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Pontianak': {
		standardComponents:
		[
			{
				dtStart: '19880101T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880101T000000']
			},
			{
				dtStart: '19640101T000000',
				tzName: 'WITA',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19640101T000000']
			},
			{
				dtStart: '19500501T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500501T000000']
			},
			{
				dtStart: '19480501T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19480501T000000']
			},
			{
				dtStart: '19450923T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450923T000000']
			},
			{
				dtStart: '19420129T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420129T000000']
			},
			{
				dtStart: '19321101T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+071720',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19321101T000000']
			},
			{
				dtStart: '19080501T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+071720',
				tzOffsetTO: '+071720',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080501T000000']
			}
		]
	},
	'Asia/Samarkand': {
		daylightComponents:
		[
			{
				dtStart: '19910901T000000',
				tzName: 'UZST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910901T000000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'SAMST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820401T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'SAMST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910331T020000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19920101T000000',
				tzName: 'UZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920101T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'UZT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19821001T000000',
				tzName: 'SAMT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'TAST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'SAMT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'SAMT',
				tzOffsetFROM: '+042753',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Jayapura': {
		standardComponents:
		[
			{
				dtStart: '19640101T000000',
				tzName: 'WIT',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19640101T000000']
			},
			{
				dtStart: '19440901T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440901T000000']
			},
			{
				dtStart: '19321101T000000',
				tzName: 'WIT',
				tzOffsetFROM: '+092248',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19321101T000000']
			}
		]
	},
	'Asia/Choibalsan': {
		daylightComponents:
		[
			{
				dtStart: '19840401T000000',
				tzName: 'CHOST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060325T020000','20050326T020000','20040327T020000','20030329T020000','20020330T020000','20010428T020000','19980329T000000','19970330T000000','19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T000000','19890326T000000','19880327T000000','19870329T000000','19860330T000000','19850331T000000','19840401T000000']
			},
			{
				dtStart: '19830401T000000',
				tzName: 'CHOST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080331T000000',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20080331T000000']
			},
			{
				dtStart: '19831001T000000',
				tzName: 'CHOT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060930T020000','20050924T020000','20040925T020000','20030927T020000','20020928T020000','20010929T020000','19980927T000000','19970928T000000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T000000','19900930T000000','19890924T000000','19880925T000000','19870927T000000','19860928T000000','19850929T000000','19840930T000000','19831001T000000']
			},
			{
				dtStart: '19780101T000000',
				tzName: 'ULAT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19780101T000000']
			},
			{
				dtStart: '19050801T000000',
				tzName: 'ULAT',
				tzOffsetFROM: '+0738',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050801T000000']
			}
		]
	},
	'Asia/Baghdad': {
		daylightComponents:
		[
			{
				dtStart: '19820501T000000',
				tzName: 'ADT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20070401T030000','20060401T030000','20050401T030000','20040401T030000','20030401T030000','20020401T030000','20010401T030000','20000401T030000','19990401T030000','19980401T030000','19970401T030000','19960401T030000','19950401T030000','19940401T030000','19930401T030000','19920401T030000','19910401T030000','19900325T010000','19890326T010000','19880327T010000','19870329T010000','19860330T010000','19850401T000000','19840401T000000','19830331T000000','19820501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19821001T000000',
				tzName: 'AST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20071001T040000','20061001T040000','20051001T040000','20041001T040000','20031001T040000','20021001T040000','20011001T040000','20001001T040000','19991001T040000','19981001T040000','19971001T040000','19961001T040000','19951001T040000','19941001T040000','19931001T040000','19921001T040000','19911001T040000','19900930T020000','19890924T020000','19880925T020000','19870927T020000','19860928T020000','19850929T020000','19841001T000000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19180101T000000',
				tzName: 'AST',
				tzOffsetFROM: '+025736',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180101T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+025740',
				tzOffsetTO: '+025736',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Asia/Tashkent': {
		daylightComponents:
		[
			{
				dtStart: '19910901T000000',
				tzName: 'UZST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910901T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'TASST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'TASST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19920101T000000',
				tzName: 'UZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920101T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'UZT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'TAST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'TAST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'TAST',
				tzOffsetFROM: '+043711',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Hebron': {
		daylightComponents:
		[
			{
				dtStart: '20120329T235959',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 59,
				startHours: 23,
				startMonth: 3,
				startDay: 4,
				startCount: -1
			},
			{
				dtStart: '19740707T000000',
				tzName: 'IDT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950331T000000','19940401T000000','19930402T000000','19920329T000000','19910324T000000','19900325T000000','19890430T000000','19880410T000000','19870415T000000','19860518T000000','19850414T000000','19750420T000000','19740707T000000']
			},
			{
				dtStart: '19570510T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110830T000000','20110401T000100','20100326T000000','20090327T000000','20080328T000000','20070401T000000','20060401T000000','20050415T000000','20040416T000000','20030418T000000','20020419T000000','20010420T000000','20000421T000000','19990416T000000','19980403T000000','19970404T000000','19960405T000000','19670501T010000','19660501T010000','19650501T010000','19640501T010000','19630501T010000','19620501T010000','19610501T010000','19600501T010000','19590501T010000','19580501T000000','19570510T000000']
			},
			{
				dtStart: '19400601T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460416T020000','19450416T000000','19440401T000000','19430401T020000','19400601T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20130927T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				startMonth: 9,
				startDay: 5,
				startCount: 0
			},
			{
				dtStart: '19670605T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950903T000000','19940828T000000','19930905T000000','19920906T000000','19910901T000000','19900826T000000','19890903T000000','19880904T000000','19870913T000000','19860907T000000','19850915T000000','19750831T000000','19741013T000000','19670605T000000']
			},
			{
				dtStart: '19480515T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19990101T000000','19960101T000000','19480515T000000']
			},
			{
				dtStart: '19421101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120921T010000','20110930T000000','20110801T000000','20100811T000000','20090904T010000','20080901T000000','20070913T020000','20060922T000000','20051004T020000','20041001T010000','20031017T000000','20021018T000000','20011019T000000','20001020T000000','19991015T000000','19980918T010000','19970919T010000','19960920T010000','19661001T030000','19650930T030000','19640930T030000','19630930T030000','19620930T030000','19610930T030000','19600930T030000','19590930T030000','19581001T000000','19571001T000000','19461101T000000','19451101T020000','19441101T000000','19431101T000000','19421101T000000']
			},
			{
				dtStart: '19001001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+022023',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19001001T000000']
			}
		]
	},
	'Asia/Nicosia': {
		daylightComponents:
		[
			{
				dtStart: '19990328T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19980901T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980901T000000']
			},
			{
				dtStart: '19750413T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980329T000000','19970330T000000','19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T000000','19890326T000000','19880327T000000','19870329T000000','19860330T000000','19850331T000000','19840325T000000','19830327T000000','19820328T000000','19810329T000000','19800406T000000','19790401T000000','19780402T000000','19770403T000000','19760515T000000','19750413T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19981025T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19751012T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970928T000000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T000000','19900930T000000','19890924T000000','19880925T000000','19870927T000000','19860928T000000','19850929T000000','19840930T000000','19830925T000000','19820926T000000','19810927T000000','19800928T000000','19790930T000000','19781002T000000','19770925T000000','19761011T000000','19751012T000000']
			},
			{
				dtStart: '19211114T000000',
				tzName: 'EET',
				tzOffsetFROM: '+021328',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19211114T000000']
			}
		]
	},
	'Asia/Aden': {
		standardComponents:
		[
			{
				dtStart: '19500101T000000',
				tzName: 'AST',
				tzOffsetFROM: '+025954',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500101T000000']
			}
		]
	},
	'Asia/Dhaka': {
		daylightComponents:
		[
			{
				dtStart: '20090619T230000',
				tzName: 'BDST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20090619T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20091231T235959',
				tzName: 'BDT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 59,
				startHours: 23,
				rDates: ['20091231T235959']
			},
			{
				dtStart: '19710326T000000',
				tzName: 'BDT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090101T000000','19710326T000000']
			},
			{
				dtStart: '19510930T000000',
				tzName: 'DACT',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19510930T000000']
			},
			{
				dtStart: '19420901T000000',
				tzName: 'BURT',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420901T000000']
			},
			{
				dtStart: '19420515T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0630',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420515T000000']
			},
			{
				dtStart: '19411001T000000',
				tzName: 'BURT',
				tzOffsetFROM: '+055320',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19411001T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'HMT',
				tzOffsetFROM: '+060140',
				tzOffsetTO: '+055320',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Asia/Aqtobe': {
		daylightComponents:
		[
			{
				dtStart: '19920328T230000',
				tzName: 'AQTST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'AKTST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820401T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'AKTST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19920926T230000',
				tzName: 'AQTT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19911216T000000',
				tzName: 'AQTT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050315T000000','19911216T000000']
			},
			{
				dtStart: '19910101T000000',
				tzName: 'AKTT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910101T000000']
			},
			{
				dtStart: '19821001T000000',
				tzName: 'AKTT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'AKTT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'AKTT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'AKTT',
				tzOffsetFROM: '+034840',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Brunei': {
		standardComponents:
		[
			{
				dtStart: '19330101T000000',
				tzName: 'BNT',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19330101T000000']
			},
			{
				dtStart: '19260301T000000',
				tzName: 'BNT',
				tzOffsetFROM: '+073940',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19260301T000000']
			}
		]
	},
	'Asia/Ho_Chi_Minh': {
		standardComponents:
		[
			{
				dtStart: '19550701T000000',
				tzName: 'ICT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19750613T000000','19550701T000000']
			},
			{
				dtStart: '19450902T000000',
				tzName: 'ICT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450902T000000']
			},
			{
				dtStart: '19450314T230000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450314T230000']
			},
			{
				dtStart: '19421231T230000',
				tzName: 'IDT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19591231T230000','19470401T000000','19421231T230000']
			},
			{
				dtStart: '19110501T000000',
				tzName: 'ICT',
				tzOffsetFROM: '+070630',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110501T000000']
			},
			{
				dtStart: '19060701T000000',
				tzName: 'PLMT',
				tzOffsetFROM: '+070640',
				tzOffsetTO: '+070630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19060701T000000']
			}
		]
	},
	'Asia/Ashgabat': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'ASHST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'ASHST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19920119T020000',
				tzName: 'TMT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920119T020000']
			},
			{
				dtStart: '19911027T000000',
				tzName: 'TMT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911027T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'ASHT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'ASHT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'ASHT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'ASHT',
				tzOffsetFROM: '+035332',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Seoul': {
		daylightComponents:
		[
			{
				dtStart: '19870510T020000',
				tzName: 'KDT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19880508T020000','19870510T020000']
			},
			{
				dtStart: '19550505T000000',
				tzName: 'KDT',
				tzOffsetFROM: '+0830',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600501T000000','19590503T000000','19580504T000000','19570505T000000','19560520T000000','19550505T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19871011T030000',
				tzName: 'KST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19881009T030000','19871011T030000']
			},
			{
				dtStart: '19610810T000000',
				tzName: 'KST',
				tzOffsetFROM: '+0830',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19610810T000000']
			},
			{
				dtStart: '19550909T000000',
				tzName: 'KST',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+0830',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600918T000000','19590920T000000','19580921T000000','19570922T000000','19560930T000000','19550909T000000']
			},
			{
				dtStart: '19540321T000000',
				tzName: 'KST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0830',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19540321T000000']
			},
			{
				dtStart: '19450908T000000',
				tzName: 'KST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450908T000000']
			},
			{
				dtStart: '19371001T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19371001T000000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'JCST',
				tzOffsetFROM: '+0830',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			},
			{
				dtStart: '19080401T000000',
				tzName: 'KST',
				tzOffsetFROM: '+082752',
				tzOffsetTO: '+0830',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080401T000000']
			}
		]
	},
	'Asia/Dubai': {
		standardComponents:
		[
			{
				dtStart: '19200101T000000',
				tzName: 'GST',
				tzOffsetFROM: '+034112',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Thimphu': {
		standardComponents:
		[
			{
				dtStart: '19871001T000000',
				tzName: 'BTT',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19871001T000000']
			},
			{
				dtStart: '19470815T000000',
				tzName: 'IST',
				tzOffsetFROM: '+055836',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470815T000000']
			}
		]
	},
	'Asia/Shanghai': {
		daylightComponents:
		[
			{
				dtStart: '19400603T000000',
				tzName: 'CDT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910414T000000','19900415T000000','19890416T000000','19880410T000000','19870412T000000','19860504T000000','19410316T000000','19400603T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19490101T000000',
				tzName: 'CST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19490101T000000']
			},
			{
				dtStart: '19401001T000000',
				tzName: 'CST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910915T000000','19900916T000000','19890917T000000','19880911T000000','19870913T000000','19860914T000000','19411001T000000','19401001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'CST',
				tzOffsetFROM: '+080543',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Asia/Almaty': {
		daylightComponents:
		[
			{
				dtStart: '19810401T000000',
				tzName: 'ALMST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19910101T000000',
				tzName: 'ALMT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050315T000000','19920101T000000','19910101T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'ALMT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'ALMT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'ALMT',
				tzOffsetFROM: '+050748',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Pyongyang': {
		standardComponents:
		[
			{
				dtStart: '19450824T000000',
				tzName: 'KST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450824T000000']
			},
			{
				dtStart: '19371001T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19371001T000000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'JCST',
				tzOffsetFROM: '+0830',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			},
			{
				dtStart: '19080401T000000',
				tzName: 'KST',
				tzOffsetFROM: '+0823',
				tzOffsetTO: '+0830',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19080401T000000']
			}
		]
	},
	'Asia/Singapore': {
		daylightComponents:
		[
			{
				dtStart: '19330101T000000',
				tzName: 'MALST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0720',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19330101T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19820101T000000',
				tzName: 'SGT',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820101T000000']
			},
			{
				dtStart: '19650809T000000',
				tzName: 'SGT',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650809T000000']
			},
			{
				dtStart: '19450912T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450912T000000']
			},
			{
				dtStart: '19420216T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420216T000000']
			},
			{
				dtStart: '19410901T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+0720',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410901T000000']
			},
			{
				dtStart: '19360101T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+0720',
				tzOffsetTO: '+0720',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19360101T000000']
			},
			{
				dtStart: '19050601T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+065525',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050601T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'SMT',
				tzOffsetFROM: '+065525',
				tzOffsetTO: '+065525',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Asia/Phnom_Penh': {
		standardComponents:
		[
			{
				dtStart: '19200401T000000',
				tzName: 'ICT',
				tzOffsetFROM: '+064204',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200401T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+064204',
				tzOffsetTO: '+064204',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Gaza': {
		daylightComponents:
		[
			{
				dtStart: '20120329T235959',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 59,
				startHours: 23,
				startMonth: 3,
				startDay: 4,
				startCount: -1
			},
			{
				dtStart: '19740707T000000',
				tzName: 'IDT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950331T000000','19940401T000000','19930402T000000','19920329T000000','19910324T000000','19900325T000000','19890430T000000','19880410T000000','19870415T000000','19860518T000000','19850414T000000','19750420T000000','19740707T000000']
			},
			{
				dtStart: '19570510T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110401T000100','20100327T000100','20090327T000000','20080328T000000','20070401T000000','20060401T000000','20050415T000000','20040416T000000','20030418T000000','20020419T000000','20010420T000000','20000421T000000','19990416T000000','19980403T000000','19970404T000000','19960405T000000','19670501T010000','19660501T010000','19650501T010000','19640501T010000','19630501T010000','19620501T010000','19610501T010000','19600501T010000','19590501T010000','19580501T000000','19570510T000000']
			},
			{
				dtStart: '19400601T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460416T020000','19450416T000000','19440401T000000','19430401T020000','19400601T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20130927T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				startMonth: 9,
				startDay: 5,
				startCount: 0
			},
			{
				dtStart: '19670605T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950903T000000','19940828T000000','19930905T000000','19920906T000000','19910901T000000','19900826T000000','19890903T000000','19880904T000000','19870913T000000','19860907T000000','19850915T000000','19750831T000000','19741013T000000','19670605T000000']
			},
			{
				dtStart: '19480515T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120101T000000','20100101T000000','20080901T000000','19990101T000000','19960101T000000','19480515T000000']
			},
			{
				dtStart: '19421101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120921T010000','20110801T000000','20100811T000000','20090904T010000','20080829T000000','20070913T020000','20060922T000000','20051004T020000','20041001T010000','20031017T000000','20021018T000000','20011019T000000','20001020T000000','19991015T000000','19980918T010000','19970919T010000','19960920T010000','19661001T030000','19650930T030000','19640930T030000','19630930T030000','19620930T030000','19610930T030000','19600930T030000','19590930T030000','19581001T000000','19571001T000000','19461101T000000','19451101T020000','19441101T000000','19431101T000000','19421101T000000']
			},
			{
				dtStart: '19001001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+021752',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19001001T000000']
			}
		]
	},
	'Asia/Jakarta': {
		standardComponents:
		[
			{
				dtStart: '19640101T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19640101T000000']
			},
			{
				dtStart: '19500501T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500501T000000']
			},
			{
				dtStart: '19480501T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19480501T000000']
			},
			{
				dtStart: '19450923T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450923T000000']
			},
			{
				dtStart: '19420323T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420323T000000']
			},
			{
				dtStart: '19321101T000000',
				tzName: 'WIB',
				tzOffsetFROM: '+0720',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19321101T000000']
			},
			{
				dtStart: '19231231T234712',
				tzName: 'JAVT',
				tzOffsetFROM: '+070712',
				tzOffsetTO: '+0720',
				startMinutes: 47,
				startHours: 23,
				rDates: ['19231231T234712']
			},
			{
				dtStart: '18670810T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+070712',
				tzOffsetTO: '+070712',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18670810T000000']
			}
		]
	},
	'Asia/Kathmandu': {
		standardComponents:
		[
			{
				dtStart: '19860101T000000',
				tzName: 'NPT',
				tzOffsetFROM: '+0530',
				tzOffsetTO: '+0545',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19860101T000000']
			},
			{
				dtStart: '19200101T000000',
				tzName: 'IST',
				tzOffsetFROM: '+054116',
				tzOffsetTO: '+0530',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Manila': {
		daylightComponents:
		[
			{
				dtStart: '19361101T000000',
				tzName: 'PHST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19780322T000000','19540412T000000','19361101T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19420501T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420501T000000']
			},
			{
				dtStart: '19370201T000000',
				tzName: 'PHT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19780921T000000','19540701T000000','19441101T000000','19370201T000000']
			},
			{
				dtStart: '18990511T000000',
				tzName: 'PHT',
				tzOffsetFROM: '+0804',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18990511T000000']
			},
			{
				dtStart: '18441231T000000',
				tzName: 'LMT',
				tzOffsetFROM: '-1556',
				tzOffsetTO: '+0804',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18441231T000000']
			}
		]
	},
	'Asia/Bangkok': {
		standardComponents:
		[
			{
				dtStart: '19200401T000000',
				tzName: 'ICT',
				tzOffsetFROM: '+064204',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200401T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+064204',
				tzOffsetTO: '+064204',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Baku': {
		daylightComponents:
		[
			{
				dtStart: '19970330T040000',
				tzName: 'AZST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 4,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19960331T050000',
				tzName: 'AZST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 5,
				rDates: ['19960331T050000']
			},
			{
				dtStart: '19920328T230000',
				tzName: 'AZST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19920328T230000']
			},
			{
				dtStart: '19910830T000000',
				tzName: 'AZST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910830T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'BAKST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'BAKST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19971026T050000',
				tzName: 'AZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 5,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19961027T060000',
				tzName: 'AZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 6,
				rDates: ['19961027T060000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'AZT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19970101T000000','19960101T000000','19920926T230000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'AZT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'BAKT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19570301T000000',
				tzName: 'BAKT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19570301T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'BAKT',
				tzOffsetFROM: '+031924',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Kuala_Lumpur': {
		daylightComponents:
		[
			{
				dtStart: '19330101T000000',
				tzName: 'MALST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0720',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19330101T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19820101T000000',
				tzName: 'MYT',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820101T000000']
			},
			{
				dtStart: '19450912T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450912T000000']
			},
			{
				dtStart: '19420216T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420216T000000']
			},
			{
				dtStart: '19410901T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+0720',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410901T000000']
			},
			{
				dtStart: '19360101T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+0720',
				tzOffsetTO: '+0720',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19360101T000000']
			},
			{
				dtStart: '19050601T000000',
				tzName: 'MALT',
				tzOffsetFROM: '+065525',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050601T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'SMT',
				tzOffsetFROM: '+064646',
				tzOffsetTO: '+065525',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Asia/Riyadh': {
		standardComponents:
		[
			{
				dtStart: '19470314T000000',
				tzName: 'AST',
				tzOffsetFROM: '+030652',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470314T000000']
			}
		]
	},
	'Asia/Ulaanbaatar': {
		daylightComponents:
		[
			{
				dtStart: '19830401T000000',
				tzName: 'ULAST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060325T020000','20050326T020000','20040327T020000','20030329T020000','20020330T020000','20010428T020000','19980329T000000','19970330T000000','19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T000000','19890326T000000','19880327T000000','19870329T000000','19860330T000000','19850331T000000','19840401T000000','19830401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19831001T000000',
				tzName: 'ULAT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060930T020000','20050924T020000','20040925T020000','20030927T020000','20020928T020000','20010929T020000','19980927T000000','19970928T000000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T000000','19900930T000000','19890924T000000','19880925T000000','19870927T000000','19860928T000000','19850929T000000','19840930T000000','19831001T000000']
			},
			{
				dtStart: '19780101T000000',
				tzName: 'ULAT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19780101T000000']
			},
			{
				dtStart: '19050801T000000',
				tzName: 'ULAT',
				tzOffsetFROM: '+070732',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050801T000000']
			}
		]
	},
	'Asia/Omsk': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'OMSST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'OMSST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'OMST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'OMST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'OMST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'OMST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19191114T000000',
				tzName: 'OMST',
				tzOffsetFROM: '+045330',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19191114T000000']
			}
		]
	},
	'Asia/Yekaterinburg': {
		daylightComponents:
		[
			{
				dtStart: '19920328T230000',
				tzName: 'YEKST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'SVEST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'SVEST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'YEKT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'YEKT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19920119T020000',
				tzName: 'YEKT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920119T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'SVET',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'SVET',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'SVET',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19190715T040000',
				tzName: 'SVET',
				tzOffsetFROM: '+034505',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 4,
				rDates: ['19190715T040000']
			},
			{
				dtStart: '19160703T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+040233',
				tzOffsetTO: '+034505',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160703T000000']
			}
		]
	},
	'Asia/Ust-Nera': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'MAGST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'MAGST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MAGST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20141026T020000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141026T020000']
			},
			{
				dtStart: '20110913T000000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110913T000000']
			},
			{
				dtStart: '20110327T020000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19920119T020000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920119T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MAGT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19191215T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+093254',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19191215T000000']
			}
		]
	},
	'Asia/Yerevan': {
		daylightComponents:
		[
			{
				dtStart: '19970330T020000',
				tzName: 'AMST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000','20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000']
			},
			{
				dtStart: '19920328T230000',
				tzName: 'AMST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19910923T000000',
				tzName: 'AMST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910923T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'YERST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'YERST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19971026T030000',
				tzName: 'AMT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20111030T030000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000']
			},
			{
				dtStart: '19950924T030000',
				tzName: 'AMT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20120325T020000','19970101T000000','19950924T030000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'AMT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19940925T030000','19930926T030000','19920926T230000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'YERT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19570301T000000',
				tzName: 'YERT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19570301T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'YERT',
				tzOffsetFROM: '+0258',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Khandyga': {
		daylightComponents:
		[
			{
				dtStart: '20040328T020000',
				tzName: 'VLAST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'YAKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'YAKST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110913T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110913T000000']
			},
			{
				dtStart: '20110327T020000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '20041031T030000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000']
			},
			{
				dtStart: '20040101T000000',
				tzName: 'VLAT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040101T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19191215T000000',
				tzName: 'YAKT',
				tzOffsetFROM: '+090213',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19191215T000000']
			}
		]
	},
	'Asia/Anadyr': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'ANAST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000','19910331T020000']
			},
			{
				dtStart: '19830401T000000',
				tzName: 'ANAST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'ANAST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820401T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'ANAST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19920119T020000',
				tzName: 'ANAT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000','19920119T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'ANAT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20101031T030000','19910929T030000']
			},
			{
				dtStart: '19821001T000000',
				tzName: 'ANAT',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'ANAT',
				tzOffsetFROM: '+1400',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'ANAT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'ANAT',
				tzOffsetFROM: '+114956',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Dushanbe': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'DUSST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'DUSST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19910909T030000',
				tzName: 'TJT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910909T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'DUST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'DUST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'DUST',
				tzOffsetFROM: '+043512',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Kuching': {
		daylightComponents:
		[
			{
				dtStart: '19350914T000000',
				tzName: 'BORTST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0820',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410914T000000','19400914T000000','19390914T000000','19380914T000000','19370914T000000','19360914T000000','19350914T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19820101T000000',
				tzName: 'MYT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820101T000000']
			},
			{
				dtStart: '19450912T000000',
				tzName: 'BORT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450912T000000']
			},
			{
				dtStart: '19420216T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420216T000000']
			},
			{
				dtStart: '19351214T000000',
				tzName: 'BORT',
				tzOffsetFROM: '+0820',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19411214T000000','19401214T000000','19391214T000000','19381214T000000','19371214T000000','19361214T000000','19351214T000000']
			},
			{
				dtStart: '19330101T000000',
				tzName: 'BORT',
				tzOffsetFROM: '+0730',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19330101T000000']
			},
			{
				dtStart: '19260301T000000',
				tzName: 'BORT',
				tzOffsetFROM: '+072120',
				tzOffsetTO: '+0730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19260301T000000']
			}
		]
	},
	'Asia/Qyzylorda': {
		daylightComponents:
		[
			{
				dtStart: '19920328T230000',
				tzName: 'QYZST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19820401T000000',
				tzName: 'KIZST',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820401T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'KIZST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20050315T000000',
				tzName: 'QYZT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050315T000000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'QYZT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19920119T020000',
				tzName: 'QYZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920119T020000']
			},
			{
				dtStart: '19911216T000000',
				tzName: 'QYZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19911216T000000']
			},
			{
				dtStart: '19910101T000000',
				tzName: 'KIZT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910101T000000']
			},
			{
				dtStart: '19821001T000000',
				tzName: 'KIZT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'KIZT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'KIZT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'KIZT',
				tzOffsetFROM: '+042152',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			}
		]
	},
	'Asia/Tbilisi': {
		daylightComponents:
		[
			{
				dtStart: '20040627T000000',
				tzName: 'GEST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040627T000000']
			},
			{
				dtStart: '19961027T000000',
				tzName: 'GEST',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970330T000000','19961027T000000']
			},
			{
				dtStart: '19950326T000000',
				tzName: 'GEST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20040328T000000','20030330T000000','20020331T000000','20010325T000000','20000326T000000','19990328T000000','19980329T000000','19960331T000000','19950326T000000']
			},
			{
				dtStart: '19920329T000000',
				tzName: 'GEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940327T000000','19930328T000000','19920329T000000']
			},
			{
				dtStart: '19910409T000000',
				tzName: 'GEST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910409T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'TBIST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'TBIST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20050327T020000',
				tzName: 'GET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20050327T020000']
			},
			{
				dtStart: '19950924T000000',
				tzName: 'GET',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20031026T000000','20021027T000000','20011028T000000','20001029T000000','19991031T000000','19981025T000000','19971026T000000','19950924T000000']
			},
			{
				dtStart: '19940925T000000',
				tzName: 'GET',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940925T000000']
			},
			{
				dtStart: '19920101T000000',
				tzName: 'GET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920101T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'GET',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20041031T030000','19930926T000000','19920927T000000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'TBIT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19570301T000000',
				tzName: 'TBIT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19570301T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'TBIT',
				tzOffsetFROM: '+025911',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'TBMT',
				tzOffsetFROM: '+025911',
				tzOffsetTO: '+025911',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Istanbul': {
		daylightComponents:
		[
			{
				dtStart: '20150329T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19850420T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19850420T000000']
			},
			{
				dtStart: '19790401T030000',
				tzName: 'TRST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19790401T030000']
			},
			{
				dtStart: '19781015T000000',
				tzName: 'TRST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830731T000000','19820328T030000','19810329T030000','19800406T030000','19781015T000000']
			},
			{
				dtStart: '19160501T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20140331T030000','20130331T030000','20120325T030000','20110328T030000','20100328T030000','20090329T030000','20080330T030000','20070325T030000','20060326T010000','20050327T010000','20040328T010000','20030330T010000','20020331T010000','20010325T010000','20000326T010000','19990328T010000','19980329T010000','19970330T010000','19960331T010000','19950326T010000','19940327T010000','19930328T010000','19920329T010000','19910331T010000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19780402T000000','19770403T000000','19760601T000000','19750330T000000','19740331T020000','19730603T010000','19720507T000000','19710502T000000','19700503T000000','19640515T000000','19620715T000000','19510422T000000','19500419T000000','19490410T000000','19480418T000000','19470420T000000','19460601T000000','19450402T000000','19420401T000000','19401201T000000','19400630T000000','19250501T000000','19240513T000000','19220326T000000','19210403T000000','19200328T000000','19160501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071028T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20070101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20140330T030000','20110327T030000','20070101T000000']
			},
			{
				dtStart: '19791015T000000',
				tzName: 'TRT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831002T000000','19821011T000000','19811012T000000','19801013T000000','19791015T000000']
			},
			{
				dtStart: '19161001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19950924T020000','19940925T020000','19930926T020000','19920927T020000','19910929T020000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850928T000000','19771016T000000','19761031T000000','19751026T000000','19741103T050000','19731104T030000','19721008T000000','19711003T000000','19701004T000000','19641001T000000','19621008T000000','19511008T000000','19501008T000000','19491002T000000','19481003T000000','19471005T000000','19461001T000000','19451008T000000','19421101T000000','19410921T000000','19401005T000000','19251001T000000','19241001T000000','19221008T000000','19211003T000000','19201025T000000','19161001T000000']
			},
			{
				dtStart: '19101001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+015656',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19101001T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'IMT',
				tzOffsetFROM: '+015552',
				tzOffsetTO: '+015656',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Asia/Amman': {
		daylightComponents:
		[
			{
				dtStart: '20140327T235959',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 59,
				startHours: 23,
				startMonth: 3,
				startDay: 4,
				startCount: -1
			},
			{
				dtStart: '19730606T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20120329T235959','20110331T235959','20100325T235959','20090326T235959','20080327T235959','20070329T235959','20060330T235959','20050331T235959','20040325T235959','20030327T235959','20020328T235959','20010329T000000','20000330T000000','19990701T000000','19980403T000000','19970404T000000','19960405T000000','19950407T000000','19940401T000000','19930402T000000','19920410T000000','19910417T000000','19900427T000000','19890508T000000','19880401T000000','19870403T000000','19860404T000000','19850401T000000','19780430T000000','19770501T000000','19760501T000000','19750501T000000','19740501T000000','19730606T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20141031T010000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				startMonth: 10,
				startDay: 5,
				startCount: -1
			},
			{
				dtStart: '19731001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20131220T000000','20111028T010000','20101029T010000','20091030T010000','20081031T010000','20071026T010000','20061027T010000','20050930T010000','20041015T010000','20031024T010000','20020927T010000','20010928T010000','20000929T010000','19990924T010000','19980918T010000','19970919T010000','19960920T010000','19950915T010000','19940916T000000','19931001T000000','19921002T000000','19910927T000000','19901005T000000','19891006T000000','19881007T000000','19871002T000000','19861003T000000','19851001T000000','19780930T000000','19771001T000000','19761101T000000','19751001T000000','19741001T000000','19731001T000000']
			},
			{
				dtStart: '19310101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+022344',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310101T000000']
			}
		]
	},
	'Asia/Taipei': {
		daylightComponents:
		[
			{
				dtStart: '19460515T000000',
				tzName: 'CDT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790701T000000','19750401T000000','19740401T000000','19610601T000000','19600601T000000','19590401T000000','19580401T000000','19570401T000000','19560401T000000','19550401T000000','19540401T000000','19530401T000000','19520301T000000','19510501T000000','19500501T000000','19490501T000000','19480501T000000','19470415T000000','19460515T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19450921T010000',
				tzName: 'CST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19791001T000000','19751001T000000','19741001T000000','19611001T000000','19601001T000000','19591001T000000','19581001T000000','19571001T000000','19561001T000000','19551001T000000','19541101T000000','19531101T000000','19521101T000000','19511001T000000','19501001T000000','19491001T000000','19481001T000000','19471101T000000','19461001T000000','19450921T010000']
			},
			{
				dtStart: '19371001T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19371001T000000']
			},
			{
				dtStart: '18960101T000000',
				tzName: 'JWST',
				tzOffsetFROM: '+0806',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18960101T000000']
			}
		]
	},
	'Asia/Muscat': {
		standardComponents:
		[
			{
				dtStart: '19200101T000000',
				tzName: 'GST',
				tzOffsetFROM: '+035424',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200101T000000']
			}
		]
	},
	'Asia/Vladivostok': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'VLAST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'VLAST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'VLAT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'VLAT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19221115T000000',
				tzName: 'VLAT',
				tzOffsetFROM: '+084731',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19221115T000000']
			}
		]
	},
	'Asia/Dili': {
		standardComponents:
		[
			{
				dtStart: '20000917T000000',
				tzName: 'TLT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20000917T000000']
			},
			{
				dtStart: '19760503T000000',
				tzName: 'WITA',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19760503T000000']
			},
			{
				dtStart: '19450923T000000',
				tzName: 'TLT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450923T000000']
			},
			{
				dtStart: '19420221T230000',
				tzName: 'JST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19420221T230000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'TLT',
				tzOffsetFROM: '+082220',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			}
		]
	},
	'Asia/Hovd': {
		daylightComponents:
		[
			{
				dtStart: '19830401T000000',
				tzName: 'HOVST',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060325T020000','20050326T020000','20040327T020000','20030329T020000','20020330T020000','20010428T020000','19980329T000000','19970330T000000','19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T000000','19890326T000000','19880327T000000','19870329T000000','19860330T000000','19850331T000000','19840401T000000','19830401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19831001T000000',
				tzName: 'HOVT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20060930T020000','20050924T020000','20040925T020000','20030927T020000','20020928T020000','20010929T020000','19980927T000000','19970928T000000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T000000','19900930T000000','19890924T000000','19880925T000000','19870927T000000','19860928T000000','19850929T000000','19840930T000000','19831001T000000']
			},
			{
				dtStart: '19780101T000000',
				tzName: 'HOVT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19780101T000000']
			},
			{
				dtStart: '19050801T000000',
				tzName: 'HOVT',
				tzOffsetFROM: '+060636',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19050801T000000']
			}
		]
	},
	'Asia/Tokyo': {
		daylightComponents:
		[
			{
				dtStart: '19480502T020000',
				tzName: 'JDT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19510506T020000','19500507T020000','19490403T020000','19480502T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19480911T020000',
				tzName: 'JST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19510908T020000','19500909T020000','19490910T020000','19480911T020000']
			},
			{
				dtStart: '19371001T000000',
				tzName: 'JST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19371001T000000']
			},
			{
				dtStart: '18960101T000000',
				tzName: 'JCST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18960101T000000']
			},
			{
				dtStart: '18880101T001859',
				tzName: 'JST',
				tzOffsetFROM: '+091859',
				tzOffsetTO: '+0900',
				startMinutes: 18,
				startHours: 0,
				rDates: ['18880101T001859']
			}
		]
	},
	'Asia/Kamchatka': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'PETST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000','19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'PETST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19910929T030000',
				tzName: 'PETT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20101031T030000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'PETT',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'PETT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110327T020000','19920119T020000','19300621T000000']
			},
			{
				dtStart: '19221110T000000',
				tzName: 'PETT',
				tzOffsetFROM: '+103436',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19221110T000000']
			}
		]
	},
	'Pacific/Johnston': {
		daylightComponents:
		[
			{
				dtStart: '19330430T020000',
				tzName: 'HDT',
				tzOffsetFROM: '-1030',
				tzOffsetTO: '-0930',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000','19330430T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19470608T020000',
				tzName: 'HST',
				tzOffsetFROM: '-1030',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470608T020000']
			},
			{
				dtStart: '19330521T120000',
				tzName: 'HST',
				tzOffsetFROM: '-0930',
				tzOffsetTO: '-1030',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19450930T020000','19330521T120000']
			},
			{
				dtStart: '18960113T120000',
				tzName: 'HST',
				tzOffsetFROM: '-103126',
				tzOffsetTO: '-1030',
				startMinutes: 0,
				startHours: 12,
				rDates: ['18960113T120000']
			}
		]
	},
	'Pacific/Niue': {
		standardComponents:
		[
			{
				dtStart: '19781001T000000',
				tzName: 'NUT',
				tzOffsetFROM: '-1130',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19781001T000000']
			},
			{
				dtStart: '19510101T000000',
				tzName: 'NUT',
				tzOffsetFROM: '-1120',
				tzOffsetTO: '-1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19510101T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'NUT',
				tzOffsetFROM: '-111940',
				tzOffsetTO: '-1120',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Pohnpei': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'PONT',
				tzOffsetFROM: '+103252',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Tahiti': {
		standardComponents:
		[
			{
				dtStart: '19121001T000000',
				tzName: 'TAHT',
				tzOffsetFROM: '-095816',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19121001T000000']
			}
		]
	},
	'Pacific/Rarotonga': {
		daylightComponents:
		[
			{
				dtStart: '19791028T000000',
				tzName: 'CKHST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19901028T000000','19891029T000000','19881030T000000','19871025T000000','19861026T000000','19851027T000000','19841028T000000','19831030T000000','19821031T000000','19811025T000000','19801026T000000','19791028T000000']
			},
			{
				dtStart: '19781112T000000',
				tzName: 'CKHST',
				tzOffsetFROM: '-1030',
				tzOffsetTO: '-0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19781112T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19790304T000000',
				tzName: 'CKT',
				tzOffsetFROM: '-0930',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910303T000000','19900304T000000','19890305T000000','19880306T000000','19870301T000000','19860302T000000','19850303T000000','19840304T000000','19830306T000000','19820307T000000','19810301T000000','19800302T000000','19790304T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'CKT',
				tzOffsetFROM: '-103904',
				tzOffsetTO: '-1030',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Tongatapu': {
		daylightComponents:
		[
			{
				dtStart: '19991007T020000',
				tzName: 'TOST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20011104T020000','20001105T020000','19991007T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20000319T030000',
				tzName: 'TOT',
				tzOffsetFROM: '+1400',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20020127T020000','20010128T020000','20000319T030000']
			},
			{
				dtStart: '19990101T000000',
				tzName: 'TOT',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19990101T000000']
			},
			{
				dtStart: '19410101T000000',
				tzName: 'TOT',
				tzOffsetFROM: '+1220',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410101T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'TOT',
				tzOffsetFROM: '+121920',
				tzOffsetTO: '+1220',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Port_Moresby': {
		standardComponents:
		[
			{
				dtStart: '18950101T000000',
				tzName: 'PGT',
				tzOffsetFROM: '+094832',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'PMMT',
				tzOffsetFROM: '+094840',
				tzOffsetTO: '+094832',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Pacific/Guadalcanal': {
		standardComponents:
		[
			{
				dtStart: '19121001T000000',
				tzName: 'SBT',
				tzOffsetFROM: '+103948',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19121001T000000']
			}
		]
	},
	'Pacific/Saipan': {
		standardComponents:
		[
			{
				dtStart: '20001223T000000',
				tzName: 'ChST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20001223T000000']
			},
			{
				dtStart: '19691001T000000',
				tzName: 'MPT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'MPT',
				tzOffsetFROM: '+0943',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			},
			{
				dtStart: '18441231T000000',
				tzName: 'LMT',
				tzOffsetFROM: '-1417',
				tzOffsetTO: '+0943',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18441231T000000']
			}
		]
	},
	'Pacific/Gambier': {
		standardComponents:
		[
			{
				dtStart: '19121001T000000',
				tzName: 'GAMT',
				tzOffsetFROM: '-085948',
				tzOffsetTO: '-0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19121001T000000']
			}
		]
	},
	'Pacific/Honolulu': {
		daylightComponents:
		[
			{
				dtStart: '19330430T020000',
				tzName: 'HDT',
				tzOffsetFROM: '-1030',
				tzOffsetTO: '-0930',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19420209T020000','19330430T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19470608T020000',
				tzName: 'HST',
				tzOffsetFROM: '-1030',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470608T020000']
			},
			{
				dtStart: '19330521T120000',
				tzName: 'HST',
				tzOffsetFROM: '-0930',
				tzOffsetTO: '-1030',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19450930T020000','19330521T120000']
			},
			{
				dtStart: '18960113T120000',
				tzName: 'HST',
				tzOffsetFROM: '-103126',
				tzOffsetTO: '-1030',
				startMinutes: 0,
				startHours: 12,
				rDates: ['18960113T120000']
			}
		]
	},
	'Pacific/Wake': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'WAKT',
				tzOffsetFROM: '+110628',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Fiji': {
		daylightComponents:
		[
			{
				dtStart: '20141102T020000',
				tzName: 'FJST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 11,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19981101T020000',
				tzName: 'FJST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20131027T020000','20121021T020000','20111023T020000','20101024T020000','20091129T020000','19991107T020000','19981101T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20150118T030000',
				tzName: 'FJT',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 3,
				startMonth: 1,
				startDay: 0,
				startCount: 0
			},
			{
				dtStart: '19990228T030000',
				tzName: 'FJT',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20140119T020000','20130120T030000','20120122T030000','20110306T030000','20100328T030000','20000227T030000','19990228T030000']
			},
			{
				dtStart: '19151026T000000',
				tzName: 'FJT',
				tzOffsetFROM: '+115544',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19151026T000000']
			}
		]
	},
	'Pacific/Kwajalein': {
		standardComponents:
		[
			{
				dtStart: '19930820T000000',
				tzName: 'MHT',
				tzOffsetFROM: '-1200',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19930820T000000']
			},
			{
				dtStart: '19691001T000000',
				tzName: 'KWAT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '-1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'MHT',
				tzOffsetFROM: '+110920',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Nauru': {
		standardComponents:
		[
			{
				dtStart: '19790501T000000',
				tzName: 'NRT',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790501T000000']
			},
			{
				dtStart: '19440815T000000',
				tzName: 'NRT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440815T000000']
			},
			{
				dtStart: '19420315T000000',
				tzName: 'JST',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420315T000000']
			},
			{
				dtStart: '19210115T000000',
				tzName: 'NRT',
				tzOffsetFROM: '+110740',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210115T000000']
			}
		]
	},
	'Pacific/Kiritimati': {
		standardComponents:
		[
			{
				dtStart: '19950101T000000',
				tzName: 'LINT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '+1400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950101T000000']
			},
			{
				dtStart: '19791001T000000',
				tzName: 'LINT',
				tzOffsetFROM: '-1040',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19791001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'LINT',
				tzOffsetFROM: '-102920',
				tzOffsetTO: '-1040',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Midway': {
		daylightComponents:
		[
			{
				dtStart: '19560603T000000',
				tzName: 'NDT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19560603T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19831130T000000',
				tzName: 'SST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19670401T000000',
				tzName: 'BST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670401T000000']
			},
			{
				dtStart: '19560902T000000',
				tzName: 'NST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19560902T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-114928',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Funafuti': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'TVT',
				tzOffsetFROM: '+115652',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Chuuk': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'CHUT',
				tzOffsetFROM: '+100708',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Auckland': {
		daylightComponents:
		[
			{
				dtStart: '20070930T020000',
				tzName: 'NZDT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 9,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19741103T020000',
				tzName: 'NZDT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061001T020000','20051002T020000','20041003T020000','20031005T020000','20021006T020000','20011007T020000','20001001T020000','19991003T020000','19981004T020000','19971005T020000','19961006T020000','19951001T020000','19941002T020000','19931003T020000','19921004T020000','19911006T020000','19901007T020000','19891008T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741103T020000']
			},
			{
				dtStart: '19281014T020000',
				tzName: 'NZST',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19400929T020000','19390924T020000','19380925T020000','19370926T020000','19360927T020000','19350929T020000','19340930T020000','19331008T020000','19321009T020000','19311011T020000','19301012T020000','19291013T020000','19281014T020000']
			},
			{
				dtStart: '19271106T020000',
				tzName: 'NZST',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+1230',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19271106T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'NZST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19750223T030000',
				tzName: 'NZST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20070318T030000','20060319T030000','20050320T030000','20040321T030000','20030316T030000','20020317T030000','20010318T030000','20000319T030000','19990321T030000','19980315T030000','19970316T030000','19960317T030000','19950319T030000','19940320T030000','19930321T030000','19920315T030000','19910317T030000','19900318T030000','19890305T030000','19880306T030000','19870301T030000','19860302T030000','19850303T030000','19840304T030000','19830306T030000','19820307T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750223T030000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'NZST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19290317T020000',
				tzName: 'NZMT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19400428T020000','19390430T020000','19380424T020000','19370425T020000','19360426T020000','19350428T020000','19340429T020000','19330319T020000','19320320T020000','19310315T020000','19300316T020000','19290317T020000']
			},
			{
				dtStart: '19280304T020000',
				tzName: 'NZMT',
				tzOffsetFROM: '+1230',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19280304T020000']
			},
			{
				dtStart: '18681102T000000',
				tzName: 'NZMT',
				tzOffsetFROM: '+113904',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18681102T000000']
			}
		]
	},
	'Pacific/Pitcairn': {
		standardComponents:
		[
			{
				dtStart: '19980427T000000',
				tzName: 'PST',
				tzOffsetFROM: '-0830',
				tzOffsetTO: '-0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980427T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'PNT',
				tzOffsetFROM: '-084020',
				tzOffsetTO: '-0830',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Majuro': {
		standardComponents:
		[
			{
				dtStart: '19691001T000000',
				tzName: 'MHT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'MHT',
				tzOffsetFROM: '+112448',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Pago_Pago': {
		standardComponents:
		[
			{
				dtStart: '19831130T000000',
				tzName: 'SST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831130T000000']
			},
			{
				dtStart: '19670401T000000',
				tzName: 'BST',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670401T000000']
			},
			{
				dtStart: '19110101T000000',
				tzName: 'NST',
				tzOffsetFROM: '-112248',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110101T000000']
			},
			{
				dtStart: '18790705T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+123712',
				tzOffsetTO: '-112248',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18790705T000000']
			}
		]
	},
	'Pacific/Easter': {
		daylightComponents:
		[
			{
				dtStart: '20120901T220000',
				tzName: 'EASST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 22,
				startMonth: 9,
				startDay: 6,
				startCount: 1
			},
			{
				dtStart: '19821009T220000',
				tzName: 'EASST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 22,
				rDates: ['20110820T220000','20101009T220000','20091010T220000','20081011T220000','20071013T220000','20061014T220000','20051008T220000','20041009T220000','20031011T220000','20021012T220000','20011013T220000','20001014T220000','19991009T220000','19980926T220000','19971011T220000','19961012T220000','19951014T220000','19941008T220000','19931009T220000','19921010T220000','19911012T220000','19900915T220000','19891014T220000','19881001T220000','19871010T220000','19861011T220000','19851012T220000','19841013T220000','19831008T220000','19821009T220000']
			},
			{
				dtStart: '19460714T220000',
				tzName: 'EASST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 22,
				rDates: ['19460714T220000']
			},
			{
				dtStart: '19420731T220000',
				tzName: 'EASST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 22,
				rDates: ['19811010T210000','19801011T210000','19791013T210000','19781014T210000','19771008T210000','19761009T210000','19751011T210000','19741012T210000','19730929T210000','19721014T210000','19711009T210000','19701010T210000','19691122T210000','19681102T210000','19420731T220000']
			},
			{
				dtStart: '19320901T000000',
				tzName: 'EASST',
				tzOffsetFROM: '-071728',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19320901T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20120428T220000',
				tzName: 'EAST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 22,
				startMonth: 4,
				startDay: 6,
				startCount: 4
			},
			{
				dtStart: '19830312T220000',
				tzName: 'EAST',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 22,
				rDates: ['20110507T220000','20100403T220000','20090314T220000','20080329T220000','20070310T220000','20060311T220000','20050312T220000','20040313T220000','20030308T220000','20020309T220000','20010310T220000','20000311T220000','19990403T220000','19980314T220000','19970329T220000','19960309T220000','19950311T220000','19940312T220000','19930313T220000','19920314T220000','19910309T220000','19900317T220000','19890311T220000','19880312T220000','19870411T220000','19860308T220000','19850309T220000','19840310T220000','19830312T220000']
			},
			{
				dtStart: '19820313T210000',
				tzName: 'EAST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 21,
				rDates: ['19820313T210000']
			},
			{
				dtStart: '19470331T210000',
				tzName: 'EAST',
				tzOffsetFROM: '-0700',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 21,
				rDates: ['19470331T210000']
			},
			{
				dtStart: '19420531T220000',
				tzName: 'EAST',
				tzOffsetFROM: '-0600',
				tzOffsetTO: '-0700',
				startMinutes: 0,
				startHours: 22,
				rDates: ['19810314T210000','19800308T210000','19790310T210000','19780311T210000','19770312T210000','19760313T210000','19750308T210000','19740309T210000','19730310T210000','19720311T210000','19710313T210000','19700328T210000','19690329T210000','19460831T210000','19420531T220000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'EMT',
				tzOffsetFROM: '-071744',
				tzOffsetTO: '-071728',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Pacific/Efate': {
		daylightComponents:
		[
			{
				dtStart: '19830925T000000',
				tzName: 'VUST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19921025T000000','19910929T000000','19900923T000000','19890924T000000','19880925T000000','19870927T000000','19860928T000000','19850929T000000','19841023T000000','19830925T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19840325T000000',
				tzName: 'VUT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19930124T000000','19920126T000000','19910324T000000','19900325T000000','19890326T000000','19880327T000000','19870329T000000','19860323T000000','19850324T000000','19840325T000000']
			},
			{
				dtStart: '19120113T000000',
				tzName: 'VUT',
				tzOffsetFROM: '+111316',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120113T000000']
			}
		]
	},
	'Pacific/Tarawa': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'GILT',
				tzOffsetFROM: '+113204',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Guam': {
		standardComponents:
		[
			{
				dtStart: '20001223T000000',
				tzName: 'ChST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20001223T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'GST',
				tzOffsetFROM: '+0939',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			},
			{
				dtStart: '18441231T000000',
				tzName: 'LMT',
				tzOffsetFROM: '-1421',
				tzOffsetTO: '+0939',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18441231T000000']
			}
		]
	},
	'Pacific/Apia': {
		daylightComponents:
		[
			{
				dtStart: '20120930T030000',
				tzName: 'WSDT',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1400',
				startMinutes: 0,
				startHours: 3,
				startMonth: 9,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20111229T235959',
				tzName: 'WSDT',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '+1400',
				startMinutes: 59,
				startHours: 23,
				rDates: ['20111229T235959']
			},
			{
				dtStart: '20100926T000000',
				tzName: 'SDT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '-1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110924T030000','20100926T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20120401T040000',
				tzName: 'WSST',
				tzOffsetFROM: '+1400',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 4,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20110402T040000',
				tzName: 'SST',
				tzOffsetFROM: '-1000',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 4,
				rDates: ['20110402T040000']
			},
			{
				dtStart: '19500101T000000',
				tzName: 'SST',
				tzOffsetFROM: '-1130',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500101T000000']
			},
			{
				dtStart: '19110101T000000',
				tzName: 'WSST',
				tzOffsetFROM: '-112656',
				tzOffsetTO: '-1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110101T000000']
			},
			{
				dtStart: '18790705T000000',
				tzName: 'LMT',
				tzOffsetFROM: '+123304',
				tzOffsetTO: '-112656',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18790705T000000']
			}
		]
	},
	'Pacific/Norfolk': {
		standardComponents:
		[
			{
				dtStart: '19510101T000000',
				tzName: 'NFT',
				tzOffsetFROM: '+1112',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19510101T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'NMT',
				tzOffsetFROM: '+111152',
				tzOffsetTO: '+1112',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Bougainville': {
		standardComponents:
		[
			{
				dtStart: '20141228T020000',
				tzName: 'BST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20141228T020000']
			},
			{
				dtStart: '19450821T000000',
				tzName: 'PGT',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450821T000000']
			},
			{
				dtStart: '19420701T000000',
				tzName: 'JST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19420701T000000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'PGT',
				tzOffsetFROM: '+094832',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'PMMT',
				tzOffsetFROM: '+102216',
				tzOffsetTO: '+094832',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Pacific/Kosrae': {
		standardComponents:
		[
			{
				dtStart: '19990101T000000',
				tzName: 'KOST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19990101T000000']
			},
			{
				dtStart: '19691001T000000',
				tzName: 'KOST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'KOST',
				tzOffsetFROM: '+105156',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Wallis': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'WFT',
				tzOffsetFROM: '+121520',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Chatham': {
		daylightComponents:
		[
			{
				dtStart: '20070930T024500',
				tzName: 'CHADT',
				tzOffsetFROM: '+1245',
				tzOffsetTO: '+1345',
				startMinutes: 45,
				startHours: 2,
				startMonth: 9,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19741103T024500',
				tzName: 'CHADT',
				tzOffsetFROM: '+1245',
				tzOffsetTO: '+1345',
				startMinutes: 45,
				startHours: 2,
				rDates: ['20061001T024500','20051002T024500','20041003T024500','20031005T024500','20021006T024500','20011007T024500','20001001T024500','19991003T024500','19981004T024500','19971005T024500','19961006T024500','19951001T024500','19941002T024500','19931003T024500','19921004T024500','19911006T024500','19901007T024500','19891008T024500','19881030T024500','19871025T024500','19861026T024500','19851027T024500','19841028T024500','19831030T024500','19821031T024500','19811025T024500','19801026T024500','19791028T024500','19781029T024500','19771030T024500','19761031T024500','19751026T024500','19741103T024500']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T034500',
				tzName: 'CHAST',
				tzOffsetFROM: '+1345',
				tzOffsetTO: '+1245',
				startMinutes: 45,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19750223T034500',
				tzName: 'CHAST',
				tzOffsetFROM: '+1345',
				tzOffsetTO: '+1245',
				startMinutes: 45,
				startHours: 3,
				rDates: ['20070318T034500','20060319T034500','20050320T034500','20040321T034500','20030316T034500','20020317T034500','20010318T034500','20000319T034500','19990321T034500','19980315T034500','19970316T034500','19960317T034500','19950319T034500','19940320T034500','19930321T034500','19920315T034500','19910317T034500','19900318T034500','19890305T034500','19880306T034500','19870301T034500','19860302T034500','19850303T034500','19840304T034500','19830306T034500','19820307T034500','19810301T034500','19800302T034500','19790304T034500','19780305T034500','19770306T034500','19760307T034500','19750223T034500']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CHAST',
				tzOffsetFROM: '+1215',
				tzOffsetTO: '+1245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '18681102T000000',
				tzName: 'CHAST',
				tzOffsetFROM: '+121348',
				tzOffsetTO: '+1215',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18681102T000000']
			}
		]
	},
	'Pacific/Marquesas': {
		standardComponents:
		[
			{
				dtStart: '19121001T000000',
				tzName: 'MART',
				tzOffsetFROM: '-0918',
				tzOffsetTO: '-0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19121001T000000']
			}
		]
	},
	'Pacific/Galapagos': {
		standardComponents:
		[
			{
				dtStart: '19860101T000000',
				tzName: 'GALT',
				tzOffsetFROM: '-0500',
				tzOffsetTO: '-0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19860101T000000']
			},
			{
				dtStart: '19310101T000000',
				tzName: 'ECT',
				tzOffsetFROM: '-055824',
				tzOffsetTO: '-0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310101T000000']
			}
		]
	},
	'Pacific/Fakaofo': {
		standardComponents:
		[
			{
				dtStart: '20111230T000000',
				tzName: 'TKT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20111230T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'TKT',
				tzOffsetFROM: '-112456',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Enderbury': {
		standardComponents:
		[
			{
				dtStart: '19950101T000000',
				tzName: 'PHOT',
				tzOffsetFROM: '-1100',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950101T000000']
			},
			{
				dtStart: '19791001T000000',
				tzName: 'PHOT',
				tzOffsetFROM: '-1200',
				tzOffsetTO: '-1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19791001T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'PHOT',
				tzOffsetFROM: '-112420',
				tzOffsetTO: '-1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Pacific/Noumea': {
		daylightComponents:
		[
			{
				dtStart: '19771204T000000',
				tzName: 'NCST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19961201T020000','19781203T000000','19771204T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19780227T000000',
				tzName: 'NCT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970302T030000','19790227T000000','19780227T000000']
			},
			{
				dtStart: '19120113T000000',
				tzName: 'NCT',
				tzOffsetFROM: '+110548',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120113T000000']
			}
		]
	},
	'Pacific/Palau': {
		standardComponents:
		[
			{
				dtStart: '19010101T000000',
				tzName: 'PWT',
				tzOffsetFROM: '+085756',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Antarctica/Davis': {
		standardComponents:
		[
			{
				dtStart: '20100311T010000',
				tzName: 'DAVT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 1,
				rDates: ['20120222T010000','20100311T010000']
			},
			{
				dtStart: '20091018T020000',
				tzName: 'DAVT',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20111028T020000','20091018T020000']
			},
			{
				dtStart: '19641101T000000',
				tzName: 'zzz',
				tzOffsetFROM: '+0700',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19641101T000000']
			},
			{
				dtStart: '19570113T000000',
				tzName: 'DAVT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690201T000000','19570113T000000']
			}
		]
	},
	'Antarctica/Rothera': {
		standardComponents:
		[
			{
				dtStart: '19761201T000000',
				tzName: 'ROTT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19761201T000000']
			}
		]
	},
	'Antarctica/McMurdo': {
		daylightComponents:
		[
			{
				dtStart: '20070930T020000',
				tzName: 'NZDT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 2,
				startMonth: 9,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19741103T020000',
				tzName: 'NZDT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20061001T020000','20051002T020000','20041003T020000','20031005T020000','20021006T020000','20011007T020000','20001001T020000','19991003T020000','19981004T020000','19971005T020000','19961006T020000','19951001T020000','19941002T020000','19931003T020000','19921004T020000','19911006T020000','19901007T020000','19891008T020000','19881030T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741103T020000']
			},
			{
				dtStart: '19281014T020000',
				tzName: 'NZST',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19400929T020000','19390924T020000','19380925T020000','19370926T020000','19360927T020000','19350929T020000','19340930T020000','19331008T020000','19321009T020000','19311011T020000','19301012T020000','19291013T020000','19281014T020000']
			},
			{
				dtStart: '19271106T020000',
				tzName: 'NZST',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+1230',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19271106T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'NZST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19750223T030000',
				tzName: 'NZST',
				tzOffsetFROM: '+1300',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20070318T030000','20060319T030000','20050320T030000','20040321T030000','20030316T030000','20020317T030000','20010318T030000','20000319T030000','19990321T030000','19980315T030000','19970316T030000','19960317T030000','19950319T030000','19940320T030000','19930321T030000','19920315T030000','19910317T030000','19900318T030000','19890305T030000','19880306T030000','19870301T030000','19860302T030000','19850303T030000','19840304T030000','19830306T030000','19820307T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750223T030000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'NZST',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19290317T020000',
				tzName: 'NZMT',
				tzOffsetFROM: '+1200',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19400428T020000','19390430T020000','19380424T020000','19370425T020000','19360426T020000','19350428T020000','19340429T020000','19330319T020000','19320320T020000','19310315T020000','19300316T020000','19290317T020000']
			},
			{
				dtStart: '19280304T020000',
				tzName: 'NZMT',
				tzOffsetFROM: '+1230',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19280304T020000']
			},
			{
				dtStart: '18681102T000000',
				tzName: 'NZMT',
				tzOffsetFROM: '+113904',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18681102T000000']
			}
		]
	},
	'Antarctica/Mawson': {
		standardComponents:
		[
			{
				dtStart: '20091018T020000',
				tzName: 'MAWT',
				tzOffsetFROM: '+0600',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20091018T020000']
			},
			{
				dtStart: '19540213T000000',
				tzName: 'MAWT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19540213T000000']
			}
		]
	},
	'Antarctica/Troll': {
		daylightComponents:
		[
			{
				dtStart: '20050327T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			}
		],
		standardComponents:
		[
			{
				dtStart: '20051030T030000',
				tzName: 'UTC',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20050212T000000',
				tzName: 'UTC',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20050212T000000']
			}
		]
	},
	'Antarctica/DumontDUrville': {
		standardComponents:
		[
			{
				dtStart: '19561101T000000',
				tzName: 'DDUT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19561101T000000']
			},
			{
				dtStart: '19520114T000000',
				tzName: 'zzz',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19520114T000000']
			},
			{
				dtStart: '19470101T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19470101T000000']
			}
		]
	},
	'Antarctica/Casey': {
		standardComponents:
		[
			{
				dtStart: '20100305T020000',
				tzName: 'AWST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20120222T040000','20100305T020000']
			},
			{
				dtStart: '20091018T020000',
				tzName: 'CAST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20111028T020000','20091018T020000']
			},
			{
				dtStart: '19690101T000000',
				tzName: 'AWST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690101T000000']
			}
		]
	},
	'Antarctica/Palmer': {
		daylightComponents:
		[
			{
				dtStart: '20120902T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				startMonth: 9,
				startDay: 0,
				startCount: 0
			},
			{
				dtStart: '19821010T000000',
				tzName: 'CLST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110821T000000','20101010T000000','20091011T000000','20081012T000000','20071014T000000','20061015T000000','20051009T000000','20041010T000000','20031012T000000','20021013T000000','20011014T000000','20001015T000000','19991010T000000','19980927T000000','19971012T000000','19961013T000000','19951015T000000','19941009T000000','19931010T000000','19921011T000000','19911013T000000','19900916T000000','19891015T000000','19881002T000000','19871011T000000','19861012T000000','19851013T000000','19841014T000000','19831009T000000','19821010T000000']
			},
			{
				dtStart: '19740123T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740123T000000']
			},
			{
				dtStart: '19651015T000000',
				tzName: 'ARST',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681006T000000','19671001T000000','19661015T000000','19651015T000000']
			},
			{
				dtStart: '19650101T000000',
				tzName: 'ARST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19650101T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20120429T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				startMonth: 4,
				startDay: 0,
				startCount: 0
			},
			{
				dtStart: '19820501T000000',
				tzName: 'CLT',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110508T000000','20100404T000000','20090315T000000','20080330T000000','20070311T000000','20060312T000000','20050313T000000','20040314T000000','20030309T000000','20020310T000000','20010311T000000','20000312T000000','19990404T000000','19980315T000000','19970330T000000','19960310T000000','19950312T000000','19940313T000000','19930314T000000','19920315T000000','19910310T000000','19900318T000000','19890312T000000','19880313T000000','19870412T000000','19860309T000000','19850310T000000','19840311T000000','19830313T000000','19820501T000000']
			},
			{
				dtStart: '19740501T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0200',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19740501T000000']
			},
			{
				dtStart: '19691005T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0400',
				tzOffsetTO: '-0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19691005T000000']
			},
			{
				dtStart: '19650301T000000',
				tzName: 'ART',
				tzOffsetFROM: '-0300',
				tzOffsetTO: '-0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19690406T000000','19680407T000000','19670402T000000','19660301T000000','19650301T000000']
			}
		]
	},
	'Antarctica/Syowa': {
		standardComponents:
		[
			{
				dtStart: '19570129T000000',
				tzName: 'SYOT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19570129T000000']
			}
		]
	},
	'Antarctica/Vostok': {
		standardComponents:
		[
			{
				dtStart: '19571216T000000',
				tzName: 'VOST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19571216T000000']
			}
		]
	},
	'Antarctica/Macquarie': {
		daylightComponents:
		[
			{
				dtStart: '19170201T000000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19170201T000000']
			},
			{
				dtStart: '19161001T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20091004T020000','20081005T020000','20071007T020000','20061001T020000','20051002T020000','20041003T020000','20031005T020000','20021006T020000','20011007T020000','20000827T020000','19991003T020000','19981004T020000','19971005T020000','19961006T020000','19951001T020000','19941002T020000','19931003T020000','19921004T020000','19911006T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671001T020000','19161001T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20100404T030000',
				tzName: 'MIST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20100404T030000']
			},
			{
				dtStart: '19670101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670101T000000']
			},
			{
				dtStart: '19480325T000000',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19480325T000000']
			},
			{
				dtStart: '19190401T000000',
				tzName: 'zzz',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190401T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20090405T030000','20080406T030000','20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950326T030000','19940327T030000','19930328T030000','19920329T030000','19910331T030000','19900318T030000','19890319T030000','19880320T030000','19870315T030000','19860302T030000','19850303T030000','19840304T030000','19830327T030000','19820328T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19710314T030000','19700308T030000','19690309T030000','19680331T030000','19170325T020000']
			},
			{
				dtStart: '18991101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18991101T000000']
			}
		]
	},
	'Europe/Dublin': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'IST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19220326T020000',
				tzName: 'IST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800316T020000','19790318T020000','19780319T020000','19770320T020000','19760321T020000','19750316T020000','19740317T020000','19730318T020000','19720319T020000','19680218T020000','19670319T020000','19660320T020000','19650321T020000','19640322T020000','19630331T020000','19620325T020000','19610326T020000','19600410T020000','19590419T020000','19580420T020000','19570414T020000','19560422T020000','19550417T020000','19540411T020000','19530419T020000','19520420T020000','19510415T020000','19500416T020000','19490403T020000','19480418T020000','19470316T020000','19400225T020000','19390416T020000','19380410T020000','19370418T020000','19360419T020000','19350414T020000','19340422T020000','19330409T020000','19320417T020000','19310419T020000','19300413T020000','19290421T020000','19280422T020000','19270410T020000','19260418T020000','19250419T020000','19240413T020000','19230422T020000','19220326T020000']
			},
			{
				dtStart: '19170408T020000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19210403T020000','19200328T020000','19190330T020000','19180324T020000','19170408T020000']
			},
			{
				dtStart: '19160521T020000',
				tzName: 'IST',
				tzOffsetFROM: '-002521',
				tzOffsetTO: '+003439',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19160521T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19681027T000000',
				tzName: 'IST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681027T000000']
			},
			{
				dtStart: '19211206T000000',
				tzName: 'GMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000','19211206T000000']
			},
			{
				dtStart: '19170917T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19951022T020000','19941023T020000','19931024T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881023T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831023T020000','19821024T020000','19811025T020000','19801026T030000','19791028T030000','19781029T030000','19771023T030000','19761024T030000','19751026T030000','19741027T030000','19731028T030000','19721029T030000','19711031T030000','19671029T030000','19661023T030000','19651024T030000','19641025T030000','19631027T030000','19621028T030000','19611029T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521026T030000','19511021T030000','19501022T030000','19491030T030000','19481031T030000','19471102T020000','19461006T020000','19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19240921T030000','19230916T030000','19221008T030000','19211003T030000','19201025T030000','19190929T030000','19180930T030000','19170917T030000']
			},
			{
				dtStart: '19161001T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+003439',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19161001T030000']
			},
			{
				dtStart: '18800802T000000',
				tzName: 'DMT',
				tzOffsetFROM: '-0025',
				tzOffsetTO: '-002521',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800802T000000']
			}
		]
	},
	'Europe/Andorra': {
		daylightComponents:
		[
			{
				dtStart: '19850331T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19850929T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000']
			},
			{
				dtStart: '19460930T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460930T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'WET',
				tzOffsetFROM: '+000604',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Europe/Vienna': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T000000','19480418T020000','19470406T020000','19460414T020000','19450402T020000','19440403T020000','19430329T020000','19400401T020000','19200405T020000','19180415T020000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19200101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000','19460101T000000','19200101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T000000','19481003T030000','19471005T030000','19461006T030000','19450412T030000','19441002T030000','19431004T030000','19421102T030000','19200913T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '18930401T000000',
				tzName: 'CET',
				tzOffsetFROM: '+010521',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18930401T000000']
			}
		]
	},
	'Europe/Vaduz': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410505T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19420504T010000','19410505T010000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000']
			},
			{
				dtStart: '19411006T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19421005T020000','19411006T020000']
			},
			{
				dtStart: '18940601T000000',
				tzName: 'CET',
				tzOffsetFROM: '+002946',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18940601T000000']
			},
			{
				dtStart: '18530716T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+003408',
				tzOffsetTO: '+002946',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18530716T000000']
			}
		]
	},
	'Europe/Ljubljana': {
		daylightComponents:
		[
			{
				dtStart: '19830327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410418T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450508T020000','19440403T020000','19430329T020000','19410418T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821127T000000','19450101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Brussels': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19440903T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440903T000000']
			},
			{
				dtStart: '19190301T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19400225T020000','19390416T020000','19380327T020000','19370404T020000','19360419T020000','19350331T020000','19340408T020000','19330326T020000','19320403T020000','19310419T020000','19300413T020000','19290421T020000','19280414T230000','19270409T230000','19260417T230000','19250404T230000','19240329T230000','19230421T230000','19220325T230000','19210314T230000','19200214T230000','19190301T230000']
			},
			{
				dtStart: '19160501T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800406T020000','19790401T020000','19780402T020000','19770403T020000','19460519T020000','19450402T020000','19440403T020000','19430329T020000','19400520T030000','19180415T020000','19170416T020000','19160501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19770101T000000']
			},
			{
				dtStart: '19181111T120000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 12,
				rDates: ['19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T000000','19261003T000000','19251004T000000','19241005T000000','19231007T000000','19221008T000000','19211026T000000','19201024T000000','19191005T000000','19181111T120000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19781001T030000','19770925T030000','19461007T030000','19450916T030000','19440917T030000','19431004T030000','19421102T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '19141108T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19141108T000000']
			},
			{
				dtStart: '18920501T120000',
				tzName: 'WET',
				tzOffsetFROM: '+001730',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 12,
				rDates: ['18920501T120000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+001730',
				tzOffsetTO: '+001730',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Helsinki': {
		daylightComponents:
		[
			{
				dtStart: '19830327T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19420402T235959',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 59,
				startHours: 23,
				rDates: ['19820328T020000','19810329T020000','19420402T235959']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19830101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830101T000000']
			},
			{
				dtStart: '19421004T010000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T040000','19940925T040000','19930926T040000','19920927T040000','19910929T040000','19900930T040000','19890924T040000','19880925T040000','19870927T040000','19860928T040000','19850929T040000','19840930T040000','19830925T040000','19820926T030000','19810927T030000','19421004T010000']
			},
			{
				dtStart: '19210501T000000',
				tzName: 'EET',
				tzOffsetFROM: '+013949',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210501T000000']
			},
			{
				dtStart: '18780531T000000',
				tzName: 'HMT',
				tzOffsetFROM: '+013949',
				tzOffsetTO: '+013949',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18780531T000000']
			}
		]
	},
	'Europe/London': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410810T030000',
				tzName: 'BST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19470810T030000','19450715T030000','19440917T030000','19430815T030000','19420809T030000','19410810T030000']
			},
			{
				dtStart: '19410504T020000',
				tzName: 'BDST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470413T020000','19450402T020000','19440402T020000','19430404T020000','19420405T020000','19410504T020000']
			},
			{
				dtStart: '19160521T020000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800316T020000','19790318T020000','19780319T020000','19770320T020000','19760321T020000','19750316T020000','19740317T020000','19730318T020000','19720319T020000','19680218T020000','19670319T020000','19660320T020000','19650321T020000','19640322T020000','19630331T020000','19620325T020000','19610326T020000','19600410T020000','19590419T020000','19580420T020000','19570414T020000','19560422T020000','19550417T020000','19540411T020000','19530419T020000','19520420T020000','19510415T020000','19500416T020000','19490403T020000','19480314T020000','19470316T020000','19460414T020000','19400225T020000','19390416T020000','19380410T020000','19370418T020000','19360419T020000','19350414T020000','19340422T020000','19330409T020000','19320417T020000','19310419T020000','19300413T020000','19290421T020000','19280422T020000','19270410T020000','19260418T020000','19250419T020000','19240413T020000','19230422T020000','19220326T020000','19210403T020000','19200328T020000','19190330T020000','19180324T020000','19170408T020000','19160521T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19960101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000']
			},
			{
				dtStart: '19681027T000000',
				tzName: 'BST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681027T000000']
			},
			{
				dtStart: '19161001T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19951022T020000','19941023T020000','19931024T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881023T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831023T020000','19821024T020000','19811025T020000','19801026T030000','19791028T030000','19781029T030000','19771023T030000','19761024T030000','19751026T030000','19741027T030000','19731028T030000','19721029T030000','19711031T030000','19671029T030000','19661023T030000','19651024T030000','19641025T030000','19631027T030000','19621028T030000','19611029T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521026T030000','19511021T030000','19501022T030000','19491030T030000','19481031T030000','19471102T030000','19461006T030000','19451007T030000','19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19240921T030000','19230916T030000','19221008T030000','19211003T030000','19201025T030000','19190929T030000','19180930T030000','19170917T030000','19161001T030000']
			},
			{
				dtStart: '18471201T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-000115',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18471201T000000']
			}
		]
	},
	'Europe/Mariehamn': {
		daylightComponents:
		[
			{
				dtStart: '19830327T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19420402T235959',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 59,
				startHours: 23,
				rDates: ['19820328T020000','19810329T020000','19420402T235959']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19830101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830101T000000']
			},
			{
				dtStart: '19421004T010000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T040000','19940925T040000','19930926T040000','19920927T040000','19910929T040000','19900930T040000','19890924T040000','19880925T040000','19870927T040000','19860928T040000','19850929T040000','19840930T040000','19830925T040000','19820926T030000','19810927T030000','19421004T010000']
			},
			{
				dtStart: '19210501T000000',
				tzName: 'EET',
				tzOffsetFROM: '+013949',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210501T000000']
			},
			{
				dtStart: '18780531T000000',
				tzName: 'HMT',
				tzOffsetFROM: '+013949',
				tzOffsetTO: '+013949',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18780531T000000']
			}
		]
	},
	'Europe/Chisinau': {
		daylightComponents:
		[
			{
				dtStart: '19970330T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000']
			},
			{
				dtStart: '19410717T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410717T000000']
			},
			{
				dtStart: '19320521T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T020000','19400815T000000','19390402T000000','19380403T000000','19370404T000000','19360405T000000','19350407T000000','19340408T000000','19330402T000000','19320521T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19971026T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19910101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970101T000000','19920101T000000','19910101T000000']
			},
			{
				dtStart: '19900101T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900101T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19440824T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440824T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000']
			},
			{
				dtStart: '19321002T010000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19961027T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T030000','19900506T000000','19391001T010000','19381002T010000','19371003T010000','19361004T010000','19351006T010000','19341007T010000','19331001T010000','19321002T010000']
			},
			{
				dtStart: '19310724T000000',
				tzName: 'EET',
				tzOffsetFROM: '+014424',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310724T000000']
			},
			{
				dtStart: '19180215T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+0155',
				tzOffsetTO: '+014424',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180215T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'CMT',
				tzOffsetFROM: '+015520',
				tzOffsetTO: '+0155',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Busingen': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410505T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19420504T010000','19410505T010000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000']
			},
			{
				dtStart: '19411006T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19421005T020000','19411006T020000']
			},
			{
				dtStart: '18940601T000000',
				tzName: 'CET',
				tzOffsetFROM: '+002946',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18940601T000000']
			},
			{
				dtStart: '18530716T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+003408',
				tzOffsetTO: '+002946',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18530716T000000']
			}
		]
	},
	'Europe/Malta': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160603T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800331T020000','19790415T020000','19780416T020000','19770417T020000','19760418T020000','19750420T020000','19740421T000000','19730331T000000','19720528T000000','19710523T000000','19700531T000000','19690601T000000','19680526T000000','19670528T000000','19660522T000000','19480229T020000','19470316T000000','19460317T020000','19450402T020000','19440403T020000','19430329T020000','19400615T000000','19200321T000000','19190302T000000','19180310T000000','19170401T000000','19160603T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800921T020000','19790916T020000','19780917T020000','19770918T020000','19760919T020000','19750921T020000','19740916T010000','19730929T010000','19721001T000000','19710926T010000','19700927T000000','19690928T000000','19680922T000000','19670924T000000','19660925T000000','19481003T030000','19471005T010000','19461006T030000','19450915T010000','19441002T030000','19431004T030000','19421102T030000','19200919T010000','19191005T010000','19181006T010000','19170930T010000','19161001T010000']
			},
			{
				dtStart: '18931102T000000',
				tzName: 'CET',
				tzOffsetFROM: '+005804',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18931102T000000']
			}
		]
	},
	'Europe/Amsterdam': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800406T020000','19790401T020000','19780402T020000','19770403T020000','19450402T020000','19440403T020000','19430329T020000']
			},
			{
				dtStart: '19400516T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0020',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400516T000000']
			},
			{
				dtStart: '19380515T020000',
				tzName: 'NEST',
				tzOffsetFROM: '+0020',
				tzOffsetTO: '+0120',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19390515T020000','19380515T020000']
			},
			{
				dtStart: '19370701T000000',
				tzName: 'NEST',
				tzOffsetFROM: '+011932',
				tzOffsetTO: '+0120',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19370701T000000']
			},
			{
				dtStart: '19160501T000000',
				tzName: 'NST',
				tzOffsetFROM: '+001932',
				tzOffsetTO: '+011932',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19370522T020000','19360515T020000','19350515T020000','19340515T020000','19330515T020000','19320522T020000','19310515T020000','19300515T020000','19290515T020000','19280515T020000','19270515T020000','19260515T020000','19250605T020000','19240330T020000','19230601T020000','19220326T020000','19210404T020000','19200405T020000','19190407T020000','19180401T020000','19170416T020000','19160501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19770101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19781001T030000','19770925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '19371003T030000',
				tzName: 'NET',
				tzOffsetFROM: '+0120',
				tzOffsetTO: '+0020',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19391008T030000','19381002T030000','19371003T030000']
			},
			{
				dtStart: '19161001T000000',
				tzName: 'AMT',
				tzOffsetFROM: '+011932',
				tzOffsetTO: '+001932',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19241005T030000','19231007T030000','19221008T030000','19210926T030000','19200927T030000','19190929T030000','19180930T030000','19170917T030000','19161001T000000']
			},
			{
				dtStart: '18350101T000000',
				tzName: 'AMT',
				tzOffsetFROM: '+001932',
				tzOffsetTO: '+001932',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18350101T000000']
			}
		]
	},
	'Europe/Vatican': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19440701T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440701T000000']
			},
			{
				dtStart: '19160603T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800406T020000','19790527T000000','19780528T000000','19770522T000000','19760530T000000','19750601T000000','19740526T000000','19730603T000000','19720528T000000','19710523T000000','19700531T000000','19690601T000000','19680526T000000','19670528T000000','19660522T000000','19480229T020000','19470316T000000','19460317T020000','19450402T020000','19440403T020000','19430329T020000','19400615T000000','19200321T000000','19190302T000000','19180310T000000','19170401T000000','19160603T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T010000','19781001T010000','19770925T010000','19760926T010000','19750928T010000','19740929T000000','19730930T000000','19721001T000000','19710926T010000','19700927T000000','19690928T000000','19680922T000000','19670924T000000','19660925T000000','19481003T030000','19471005T010000','19461006T030000','19450915T010000','19440917T010000','19431004T030000','19421102T030000','19200919T010000','19191005T010000','19181006T010000','19170930T010000','19161001T010000']
			},
			{
				dtStart: '18931101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+004956',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18931101T000000']
			},
			{
				dtStart: '18660922T000000',
				tzName: 'RMT',
				tzOffsetFROM: '+004956',
				tzOffsetTO: '+004956',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18660922T000000']
			}
		]
	},
	'Europe/Berlin': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450924T030000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19470629T030000','19450924T030000']
			},
			{
				dtStart: '19450524T020000',
				tzName: 'CEMT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470511T030000','19450524T020000']
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19490410T020000','19480418T020000','19470406T030000','19460414T020000','19450402T020000','19440403T020000','19430329T020000','19400401T020000','19180415T020000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19460101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000','19460101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19491002T030000','19481003T030000','19471005T030000','19461007T030000','19451118T030000','19441002T030000','19431004T030000','19421102T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '18930401T000000',
				tzName: 'CET',
				tzOffsetFROM: '+005328',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18930401T000000']
			}
		]
	},
	'Europe/Sofia': {
		daylightComponents:
		[
			{
				dtStart: '19970330T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19820926T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19820926T020000']
			},
			{
				dtStart: '19790331T230000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840325T020000','19830327T020000','19820403T230000','19810404T230000','19800405T230000','19790331T230000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19971026T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19910101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970101T000000','19910101T000000']
			},
			{
				dtStart: '19791001T010000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19961027T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T000000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T020000','19800929T010000','19791001T010000']
			},
			{
				dtStart: '19450402T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19450402T030000']
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450101T000000']
			},
			{
				dtStart: '19421102T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19441002T030000','19431004T030000','19421102T020000']
			},
			{
				dtStart: '18941130T000000',
				tzName: 'EET',
				tzOffsetFROM: '+015656',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18941130T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'IMT',
				tzOffsetFROM: '+013316',
				tzOffsetTO: '+015656',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Prague': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19790401T020000','19490409T020000','19480418T020000','19470420T020000','19460506T020000','19450408T020000','19440403T020000','19430329T020000','19400401T020000','19180415T020000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19790101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19491002T030000','19481003T030000','19471005T030000','19461006T030000','19451118T030000','19440917T030000','19431004T030000','19421102T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '18911001T000000',
				tzName: 'CET',
				tzOffsetFROM: '+005744',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18911001T000000']
			},
			{
				dtStart: '18500101T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+005744',
				tzOffsetTO: '+005744',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18500101T000000']
			}
		]
	},
	'Europe/Volgograd': {
		daylightComponents:
		[
			{
				dtStart: '19930328T020000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000']
			},
			{
				dtStart: '19920329T020000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920329T020000']
			},
			{
				dtStart: '19900325T020000',
				tzName: 'VOLST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19900325T020000']
			},
			{
				dtStart: '19890326T020000',
				tzName: 'VOLST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19890326T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'VOLST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'VOLT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19890924T030000',
				tzName: 'VOLT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19900930T030000','19890924T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'VOLT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19611111T000000',
				tzName: 'VOLT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19611111T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'STAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19250406T000000',
				tzName: 'STAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19250406T000000']
			},
			{
				dtStart: '19200103T000000',
				tzName: 'TSAT',
				tzOffsetFROM: '+025740',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200103T000000']
			}
		]
	},
	'Europe/Warsaw': {
		daylightComponents:
		[
			{
				dtStart: '19880327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19441001T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19441001T000000']
			},
			{
				dtStart: '19190415T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190415T020000']
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19870329T010000','19860330T010000','19850331T010000','19840325T010000','19830327T010000','19820328T010000','19810329T010000','19800406T010000','19790401T010000','19780402T010000','19770403T010000','19640531T010000','19630526T010000','19620527T010000','19610528T010000','19600403T010000','19590531T010000','19580330T010000','19570602T010000','19490410T020000','19480418T020000','19470504T020000','19460414T000000','19450429T000000','19440403T020000','19430329T020000','19400623T020000','19180415T020000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880101T000000','19770101T000000']
			},
			{
				dtStart: '19190916T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19190916T030000']
			},
			{
				dtStart: '19180916T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19180916T030000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T020000','19860928T020000','19850929T020000','19840930T020000','19830925T020000','19820926T020000','19810927T020000','19800928T020000','19790930T020000','19781001T020000','19770925T020000','19640927T020000','19630929T020000','19620930T020000','19611001T020000','19601002T020000','19591004T020000','19580928T020000','19570929T020000','19491002T030000','19481003T030000','19471005T030000','19461007T030000','19451101T000000','19441004T020000','19431004T030000','19421102T030000','19220601T000000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '19150805T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0124',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19150805T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'WMT',
				tzOffsetFROM: '+0124',
				tzOffsetTO: '+0124',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Gibraltar': {
		daylightComponents:
		[
			{
				dtStart: '19820328T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410810T030000',
				tzName: 'BST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19470810T030000','19450715T030000','19440917T030000','19430815T030000','19420809T030000','19410810T030000']
			},
			{
				dtStart: '19410504T020000',
				tzName: 'BDST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470413T020000','19450402T020000','19440402T020000','19430404T020000','19420405T020000','19410504T020000']
			},
			{
				dtStart: '19160521T020000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19560422T020000','19550417T020000','19540411T020000','19530419T020000','19520420T020000','19510415T020000','19500416T020000','19490403T020000','19480314T020000','19470316T020000','19460414T020000','19400225T020000','19390416T020000','19380410T020000','19370418T020000','19360419T020000','19350414T020000','19340422T020000','19330409T020000','19320417T020000','19310419T020000','19300413T020000','19290421T020000','19280422T020000','19270410T020000','19260418T020000','19250419T020000','19240413T020000','19230422T020000','19220326T020000','19210403T020000','19200328T020000','19190330T020000','19180324T020000','19170408T020000','19160521T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19820926T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000']
			},
			{
				dtStart: '19820101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19820101T000000']
			},
			{
				dtStart: '19570414T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19570414T020000']
			},
			{
				dtStart: '19161001T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521026T030000','19511021T030000','19501022T030000','19491030T030000','19481031T030000','19471102T030000','19461006T030000','19451007T030000','19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19240921T030000','19230916T030000','19221008T030000','19211003T030000','19201025T030000','19190929T030000','19180930T030000','19170917T030000','19161001T030000']
			},
			{
				dtStart: '18800802T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-002124',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800802T000000']
			}
		]
	},
	'Europe/Minsk': {
		daylightComponents:
		[
			{
				dtStart: '19920329T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920329T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000']
			},
			{
				dtStart: '19410628T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410628T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'FET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920927T010000','19910929T030000']
			},
			{
				dtStart: '19900101T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T010000','19900101T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440703T000000','19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0150',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+015016',
				tzOffsetTO: '+0150',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Tirane': {
		daylightComponents:
		[
			{
				dtStart: '19850331T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19840701T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19840701T000000']
			},
			{
				dtStart: '19400616T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19840401T000000','19830418T000000','19820502T000000','19810426T000000','19800503T000000','19790505T000000','19780506T000000','19770508T000000','19760502T000000','19750501T000000','19740504T000000','19430329T020000','19400616T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821003T000000','19810927T000000','19801004T000000','19790930T000000','19781001T000000','19771002T000000','19761003T000000','19751002T000000','19741002T000000','19430410T030000','19421102T030000']
			},
			{
				dtStart: '19140101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+011920',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19140101T000000']
			}
		]
	},
	'Europe/Samara': {
		daylightComponents:
		[
			{
				dtStart: '20100328T020000',
				tzName: 'SAMST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20100328T020000']
			},
			{
				dtStart: '19920328T230000',
				tzName: 'SAMST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19900325T020000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19900325T020000']
			},
			{
				dtStart: '19890326T020000',
				tzName: 'MSD',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19890326T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'KUYST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20101031T030000',
				tzName: 'SAMT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20101031T030000']
			},
			{
				dtStart: '19920926T230000',
				tzName: 'SAMT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'KUYT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910929T030000']
			},
			{
				dtStart: '19890924T030000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19900930T030000','19890924T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'KUYT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19350127T000000',
				tzName: 'KUYT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19350127T000000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'SAMT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20110327T020000','19911020T030000','19300621T000000']
			},
			{
				dtStart: '19190701T020000',
				tzName: 'SAMT',
				tzOffsetFROM: '+032020',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190701T020000']
			}
		]
	},
	'Europe/Budapest': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T010000','19570602T010000','19560603T000000','19550523T000000','19540523T000000','19500417T020000','19490410T020000','19480404T020000','19470406T020000','19460331T020000','19450501T230000','19440403T020000','19430329T020000','19410408T000000','19190415T030000','19180401T030000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19180101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450101T000000','19180101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19570929T030000','19560930T000000','19551003T000000','19541003T000000','19501023T030000','19491002T030000','19481003T030000','19471005T030000','19461006T030000','19451101T000000','19441002T030000','19431004T030000','19421102T030000','19191124T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '18901001T000000',
				tzName: 'CET',
				tzOffsetFROM: '+011620',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18901001T000000']
			}
		]
	},
	'Europe/Stockholm': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160514T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19160514T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19161001T010000']
			},
			{
				dtStart: '19000101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+010014',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19000101T000000']
			},
			{
				dtStart: '18790101T000000',
				tzName: 'SET',
				tzOffsetFROM: '+011212',
				tzOffsetTO: '+010014',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18790101T000000']
			}
		]
	},
	'Europe/Sarajevo': {
		daylightComponents:
		[
			{
				dtStart: '19830327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410418T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450508T020000','19440403T020000','19430329T020000','19410418T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821127T000000','19450101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Nicosia': {
		daylightComponents:
		[
			{
				dtStart: '19990328T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19980901T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980901T000000']
			},
			{
				dtStart: '19750413T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19980329T000000','19970330T000000','19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T000000','19890326T000000','19880327T000000','19870329T000000','19860330T000000','19850331T000000','19840325T000000','19830327T000000','19820328T000000','19810329T000000','19800406T000000','19790401T000000','19780402T000000','19770403T000000','19760515T000000','19750413T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19981025T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19751012T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970928T000000','19960929T000000','19950924T000000','19940925T000000','19930926T000000','19920927T000000','19910929T000000','19900930T000000','19890924T000000','19880925T000000','19870927T000000','19860928T000000','19850929T000000','19840930T000000','19830925T000000','19820926T000000','19810927T000000','19800928T000000','19790930T000000','19781002T000000','19770925T000000','19761011T000000','19751012T000000']
			},
			{
				dtStart: '19211114T000000',
				tzName: 'EET',
				tzOffsetFROM: '+021328',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19211114T000000']
			}
		]
	},
	'Europe/Uzhgorod': {
		daylightComponents:
		[
			{
				dtStart: '19950326T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19920329T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940327T000000','19930328T000000','19920329T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19441001T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19441001T000000']
			},
			{
				dtStart: '19400401T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000','19400401T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19920927T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950924T040000','19940925T000000','19930926T000000','19920927T000000']
			},
			{
				dtStart: '19920101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950101T000000','19920101T000000']
			},
			{
				dtStart: '19910331T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19910331T030000']
			},
			{
				dtStart: '19900701T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19900701T020000']
			},
			{
				dtStart: '19900101T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900101T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19450629T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450629T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19441026T000000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '18901001T000000',
				tzName: 'CET',
				tzOffsetFROM: '+012912',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18901001T000000']
			}
		]
	},
	'Europe/Kaliningrad': {
		daylightComponents:
		[
			{
				dtStart: '19920328T230000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19450429T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450429T000000']
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19440403T020000','19430329T020000','19400401T020000','19180415T020000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'FET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19460101T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19460101T000000']
			},
			{
				dtStart: '19451101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19451101T000000']
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19441002T030000','19431004T030000','19421102T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '18930401T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18930401T000000']
			}
		]
	},
	'Europe/Vilnius': {
		daylightComponents:
		[
			{
				dtStart: '20030330T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19980329T030000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19980329T030000']
			},
			{
				dtStart: '19920329T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920329T020000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19990328T020000','19440403T020000','19430329T020000']
			},
			{
				dtStart: '19410624T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410624T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20031026T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19980101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20030101T000000','19991031T030000','19980101T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19440801T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440801T000000']
			},
			{
				dtStart: '19400803T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400803T000000']
			},
			{
				dtStart: '19201009T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19981025T030000','19431004T030000','19421102T030000','19201009T000000']
			},
			{
				dtStart: '19200712T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19200712T000000']
			},
			{
				dtStart: '19191010T000000',
				tzName: 'CET',
				tzOffsetFROM: '+013536',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19191010T000000']
			},
			{
				dtStart: '19170101T000000',
				tzName: 'KMT',
				tzOffsetFROM: '+0124',
				tzOffsetTO: '+013536',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19170101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'WMT',
				tzOffsetFROM: '+014116',
				tzOffsetTO: '+0124',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Zurich': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410505T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19420504T010000','19410505T010000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000']
			},
			{
				dtStart: '19411006T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19421005T020000','19411006T020000']
			},
			{
				dtStart: '18940601T000000',
				tzName: 'CET',
				tzOffsetFROM: '+002946',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18940601T000000']
			},
			{
				dtStart: '18530716T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+003408',
				tzOffsetTO: '+002946',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18530716T000000']
			}
		]
	},
	'Europe/Jersey': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410810T030000',
				tzName: 'BST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19470810T030000','19450715T030000','19440917T030000','19430815T030000','19420809T030000','19410810T030000']
			},
			{
				dtStart: '19410504T020000',
				tzName: 'BDST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470413T020000','19450402T020000','19440402T020000','19430404T020000','19420405T020000','19410504T020000']
			},
			{
				dtStart: '19160521T020000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800316T020000','19790318T020000','19780319T020000','19770320T020000','19760321T020000','19750316T020000','19740317T020000','19730318T020000','19720319T020000','19680218T020000','19670319T020000','19660320T020000','19650321T020000','19640322T020000','19630331T020000','19620325T020000','19610326T020000','19600410T020000','19590419T020000','19580420T020000','19570414T020000','19560422T020000','19550417T020000','19540411T020000','19530419T020000','19520420T020000','19510415T020000','19500416T020000','19490403T020000','19480314T020000','19470316T020000','19460414T020000','19400225T020000','19390416T020000','19380410T020000','19370418T020000','19360419T020000','19350414T020000','19340422T020000','19330409T020000','19320417T020000','19310419T020000','19300413T020000','19290421T020000','19280422T020000','19270410T020000','19260418T020000','19250419T020000','19240413T020000','19230422T020000','19220326T020000','19210403T020000','19200328T020000','19190330T020000','19180324T020000','19170408T020000','19160521T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19960101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000']
			},
			{
				dtStart: '19681027T000000',
				tzName: 'BST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681027T000000']
			},
			{
				dtStart: '19161001T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19951022T020000','19941023T020000','19931024T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881023T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831023T020000','19821024T020000','19811025T020000','19801026T030000','19791028T030000','19781029T030000','19771023T030000','19761024T030000','19751026T030000','19741027T030000','19731028T030000','19721029T030000','19711031T030000','19671029T030000','19661023T030000','19651024T030000','19641025T030000','19631027T030000','19621028T030000','19611029T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521026T030000','19511021T030000','19501022T030000','19491030T030000','19481031T030000','19471102T030000','19461006T030000','19451007T030000','19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19240921T030000','19230916T030000','19221008T030000','19211003T030000','19201025T030000','19190929T030000','19180930T030000','19170917T030000','19161001T030000']
			},
			{
				dtStart: '18471201T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-000115',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18471201T000000']
			}
		]
	},
	'Europe/Madrid': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19490430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19790401T020000','19780402T230000','19770402T230000','19760327T230000','19750419T230000','19740413T230000','19490430T230000']
			},
			{
				dtStart: '19420902T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450930T010000','19441011T000000','19431004T000000','19420902T000000']
			},
			{
				dtStart: '19420502T230000',
				tzName: 'WEMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19460413T230000','19450414T230000','19440415T230000','19430417T230000','19420502T230000']
			},
			{
				dtStart: '19170505T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19400316T230000','19390415T230000','19380322T230000','19370522T230000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19240416T230000','19190405T230000','19180415T230000','19170505T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19790101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790101T000000']
			},
			{
				dtStart: '19460930T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19781001T010000','19770925T010000','19760926T010000','19751005T010000','19741006T010000','19490930T010000','19460930T000000']
			},
			{
				dtStart: '19171007T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19391008T000000','19381002T000000','19371003T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19241005T000000','19191007T000000','19181007T000000','19171007T000000']
			},
			{
				dtStart: '19010101T000000',
				tzName: 'WET',
				tzOffsetFROM: '-001444',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19010101T000000']
			}
		]
	},
	'Europe/Luxembourg': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19400514T030000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19440403T020000','19430329T020000','19400514T030000']
			},
			{
				dtStart: '19190301T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19400225T020000','19390416T020000','19380327T020000','19370404T020000','19360419T020000','19350331T020000','19340408T020000','19330326T020000','19320403T020000','19310419T020000','19300413T020000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19250405T230000','19240329T230000','19230421T230000','19220325T230000','19210314T230000','19200214T230000','19190301T230000']
			},
			{
				dtStart: '19160514T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19790401T020000','19780402T020000','19770403T020000','19460519T020000','19450402T020000','19180415T020000','19170428T230000','19160514T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19770101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'WET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000']
			},
			{
				dtStart: '19181125T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T010000','19271002T010000','19261003T010000','19251004T010000','19241005T010000','19231007T020000','19221008T010000','19211026T020000','19201024T020000','19191005T030000','19181125T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19781001T030000','19770925T030000','19461007T030000','19450916T030000','19440918T030000','19180916T030000','19170917T010000','19161001T010000']
			},
			{
				dtStart: '19040601T000000',
				tzName: 'CET',
				tzOffsetFROM: '+002436',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19040601T000000']
			}
		]
	},
	'Europe/Skopje': {
		daylightComponents:
		[
			{
				dtStart: '19830327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410418T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450508T020000','19440403T020000','19430329T020000','19410418T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821127T000000','19450101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Bratislava': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160430T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19790401T020000','19490409T020000','19480418T020000','19470420T020000','19460506T020000','19450408T020000','19440403T020000','19430329T020000','19400401T020000','19180415T020000','19170416T020000','19160430T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19790101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19790101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19491002T030000','19481003T030000','19471005T030000','19461006T030000','19451118T030000','19440917T030000','19431004T030000','19421102T030000','19180916T030000','19170917T030000','19161001T010000']
			},
			{
				dtStart: '18911001T000000',
				tzName: 'CET',
				tzOffsetFROM: '+005744',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18911001T000000']
			},
			{
				dtStart: '18500101T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+005744',
				tzOffsetTO: '+005744',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18500101T000000']
			}
		]
	},
	'Europe/Riga': {
		daylightComponents:
		[
			{
				dtStart: '20010325T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19900325T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19990328T030000','19980329T030000','19970330T030000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920329T020000','19910331T020000','19900325T020000']
			},
			{
				dtStart: '19890326T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19890326T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000']
			},
			{
				dtStart: '19410701T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410701T000000']
			},
			{
				dtStart: '19180415T020000',
				tzName: 'LST',
				tzOffsetFROM: '+013634',
				tzOffsetTO: '+023634',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190401T020000','19180415T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20011028T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19970121T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20010102T000000','20000229T000000','19970121T000000']
			},
			{
				dtStart: '19890924T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19991031T040000','19981025T040000','19971026T040000','19960929T030000','19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19441013T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19441013T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '19400805T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400805T000000']
			},
			{
				dtStart: '19260511T000000',
				tzName: 'EET',
				tzOffsetFROM: '+013634',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19260511T000000']
			},
			{
				dtStart: '19180916T030000',
				tzName: 'RMT',
				tzOffsetFROM: '+023634',
				tzOffsetTO: '+013634',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19190522T030000','19180916T030000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'RMT',
				tzOffsetFROM: '+013634',
				tzOffsetTO: '+013634',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Guernsey': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410810T030000',
				tzName: 'BST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19470810T030000','19450715T030000','19440917T030000','19430815T030000','19420809T030000','19410810T030000']
			},
			{
				dtStart: '19410504T020000',
				tzName: 'BDST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470413T020000','19450402T020000','19440402T020000','19430404T020000','19420405T020000','19410504T020000']
			},
			{
				dtStart: '19160521T020000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800316T020000','19790318T020000','19780319T020000','19770320T020000','19760321T020000','19750316T020000','19740317T020000','19730318T020000','19720319T020000','19680218T020000','19670319T020000','19660320T020000','19650321T020000','19640322T020000','19630331T020000','19620325T020000','19610326T020000','19600410T020000','19590419T020000','19580420T020000','19570414T020000','19560422T020000','19550417T020000','19540411T020000','19530419T020000','19520420T020000','19510415T020000','19500416T020000','19490403T020000','19480314T020000','19470316T020000','19460414T020000','19400225T020000','19390416T020000','19380410T020000','19370418T020000','19360419T020000','19350414T020000','19340422T020000','19330409T020000','19320417T020000','19310419T020000','19300413T020000','19290421T020000','19280422T020000','19270410T020000','19260418T020000','19250419T020000','19240413T020000','19230422T020000','19220326T020000','19210403T020000','19200328T020000','19190330T020000','19180324T020000','19170408T020000','19160521T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19960101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000']
			},
			{
				dtStart: '19681027T000000',
				tzName: 'BST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681027T000000']
			},
			{
				dtStart: '19161001T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19951022T020000','19941023T020000','19931024T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881023T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831023T020000','19821024T020000','19811025T020000','19801026T030000','19791028T030000','19781029T030000','19771023T030000','19761024T030000','19751026T030000','19741027T030000','19731028T030000','19721029T030000','19711031T030000','19671029T030000','19661023T030000','19651024T030000','19641025T030000','19631027T030000','19621028T030000','19611029T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521026T030000','19511021T030000','19501022T030000','19491030T030000','19481031T030000','19471102T030000','19461006T030000','19451007T030000','19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19240921T030000','19230916T030000','19221008T030000','19211003T030000','19201025T030000','19190929T030000','19180930T030000','19170917T030000','19161001T030000']
			},
			{
				dtStart: '18471201T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-000115',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18471201T000000']
			}
		]
	},
	'Europe/Zagreb': {
		daylightComponents:
		[
			{
				dtStart: '19830327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410418T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450508T020000','19440403T020000','19430329T020000','19410418T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821127T000000','19450101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Monaco': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19760328T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19800406T020000','19790401T020000','19780402T020000','19770403T020000','19760328T010000']
			},
			{
				dtStart: '19411006T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19441008T010000','19431004T030000','19421102T030000','19411006T000000']
			},
			{
				dtStart: '19410505T000000',
				tzName: 'WEMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450402T020000','19440403T020000','19430329T020000','19420309T000000','19410505T000000']
			},
			{
				dtStart: '19160614T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19400225T020000','19390415T230000','19380326T230000','19370403T230000','19360418T230000','19350330T230000','19340407T230000','19330325T230000','19320402T230000','19310418T230000','19300412T230000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19250404T230000','19240329T230000','19230526T230000','19220325T230000','19210314T230000','19200214T230000','19190301T230000','19180309T230000','19170324T230000','19160614T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19770101T000000']
			},
			{
				dtStart: '19450916T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19781001T030000','19770925T030000','19760926T010000','19450916T030000']
			},
			{
				dtStart: '19161002T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19391119T000000','19381002T000000','19371003T000000','19361004T000000','19351006T000000','19341007T000000','19331008T000000','19321002T000000','19311004T000000','19301005T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19251004T000000','19241005T000000','19231007T000000','19221008T000000','19211026T000000','19201024T000000','19191006T000000','19181007T000000','19171008T000000','19161002T000000']
			},
			{
				dtStart: '19110311T000000',
				tzName: 'WET',
				tzOffsetFROM: '+000921',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110311T000000']
			},
			{
				dtStart: '18910315T000000',
				tzName: 'PMT',
				tzOffsetFROM: '+002932',
				tzOffsetTO: '+000921',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18910315T000000']
			}
		]
	},
	'Europe/Moscow': {
		daylightComponents:
		[
			{
				dtStart: '19910331T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19210901T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210901T000000']
			},
			{
				dtStart: '19210320T230000',
				tzName: 'MSM',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19210320T230000']
			},
			{
				dtStart: '19210214T230000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 23,
				rDates: ['20100328T020000','20090329T020000','20080330T020000','20070325T020000','20060326T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920328T230000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000','19210214T230000']
			},
			{
				dtStart: '19190701T020000',
				tzName: 'MSD',
				tzOffsetFROM: '+043119',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19190701T020000']
			},
			{
				dtStart: '19190531T230000',
				tzName: 'MDST',
				tzOffsetFROM: '+033119',
				tzOffsetTO: '+043119',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19190531T230000']
			},
			{
				dtStart: '19180916T010000',
				tzName: 'MST',
				tzOffsetFROM: '+043119',
				tzOffsetTO: '+033119',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19180916T010000']
			},
			{
				dtStart: '19180531T220000',
				tzName: 'MDST',
				tzOffsetFROM: '+023119',
				tzOffsetTO: '+043119',
				startMinutes: 0,
				startHours: 22,
				rDates: ['19180531T220000']
			},
			{
				dtStart: '19170701T230000',
				tzName: 'MST',
				tzOffsetFROM: '+023119',
				tzOffsetTO: '+033119',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19170701T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20110327T020000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20110327T020000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920119T020000','19300621T000000']
			},
			{
				dtStart: '19221001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19910929T030000','19221001T000000']
			},
			{
				dtStart: '19190816T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','20101031T030000','20091025T030000','20081026T030000','20071028T030000','20061029T030000','20051030T030000','20041031T030000','20031026T030000','20021027T030000','20011028T030000','20001029T030000','19991031T030000','19981025T030000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920926T230000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000','19211001T000000','19190816T000000']
			},
			{
				dtStart: '19171228T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+033119',
				tzOffsetTO: '+023119',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19171228T000000']
			},
			{
				dtStart: '19160703T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+023017',
				tzOffsetTO: '+023119',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19160703T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+023017',
				tzOffsetTO: '+023017',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Paris': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450402T020000',
				tzName: 'WEMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19450402T020000']
			},
			{
				dtStart: '19441008T010000',
				tzName: 'WEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19441008T010000']
			},
			{
				dtStart: '19440825T000000',
				tzName: 'WEMT',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440825T000000']
			},
			{
				dtStart: '19400614T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19790401T020000','19780402T020000','19770403T020000','19760328T010000','19440403T020000','19430329T020000','19400614T230000']
			},
			{
				dtStart: '19160614T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19400225T020000','19390415T230000','19380326T230000','19370403T230000','19360418T230000','19350330T230000','19340407T230000','19330325T230000','19320402T230000','19310418T230000','19300412T230000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19250404T230000','19240329T230000','19230526T230000','19220325T230000','19210314T230000','19200214T230000','19190301T230000','19180309T230000','19170324T230000','19160614T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19770101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19770101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T030000','19781001T030000','19770925T030000','19760926T010000','19450916T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '19161002T000000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19391119T000000','19381002T000000','19371003T000000','19361004T000000','19351006T000000','19341007T000000','19331008T000000','19321002T000000','19311004T000000','19301005T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19251004T000000','19241005T000000','19231007T000000','19221008T000000','19211026T000000','19201024T000000','19191006T000000','19181007T000000','19171008T000000','19161002T000000']
			},
			{
				dtStart: '19110311T000100',
				tzName: 'WET',
				tzOffsetFROM: '+000921',
				tzOffsetTO: '+0000',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19110311T000100']
			},
			{
				dtStart: '18910315T000100',
				tzName: 'PMT',
				tzOffsetFROM: '+000921',
				tzOffsetTO: '+000921',
				startMinutes: 1,
				startHours: 0,
				rDates: ['18910315T000100']
			}
		]
	},
	'Europe/Kiev': {
		daylightComponents:
		[
			{
				dtStart: '19950326T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19920329T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940327T000000','19930328T000000','19920329T000000']
			},
			{
				dtStart: '19900701T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19900701T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19430329T020000']
			},
			{
				dtStart: '19410920T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410920T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19950101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950101T000000']
			},
			{
				dtStart: '19910929T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T040000','19940925T000000','19930926T000000','19920927T000000','19910929T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19431106T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19431106T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'EET',
				tzOffsetFROM: '+020204',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'KMT',
				tzOffsetFROM: '+020204',
				tzOffsetTO: '+020204',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Lisbon': {
		daylightComponents:
		[
			{
				dtStart: '19970330T010000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19960331T020000',
				tzName: 'WEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19960331T020000']
			},
			{
				dtStart: '19930328T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19950326T020000','19940327T020000','19930328T020000']
			},
			{
				dtStart: '19420816T000000',
				tzName: 'WEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19450826T000000','19440827T000000','19430829T000000','19420816T000000']
			},
			{
				dtStart: '19420425T230000',
				tzName: 'WEMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450421T230000','19440422T230000','19430417T230000','19420425T230000']
			},
			{
				dtStart: '19160617T230000',
				tzName: 'WEST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19920329T010000','19910331T010000','19900325T010000','19890326T010000','19880327T010000','19870329T010000','19860330T010000','19850331T010000','19840325T010000','19830327T020000','19820328T010000','19810329T010000','19800330T000000','19790401T000000','19780402T000000','19770327T000000','19650404T020000','19640405T020000','19630407T020000','19620401T020000','19610402T020000','19600403T020000','19590405T020000','19580406T020000','19570407T020000','19560401T020000','19550403T020000','19540404T020000','19530405T020000','19520406T020000','19510401T020000','19490403T020000','19480404T020000','19470406T020000','19460406T230000','19450310T230000','19440311T230000','19430313T230000','19420314T230000','19410405T230000','19400224T230000','19390415T230000','19380326T230000','19370403T230000','19360418T230000','19350330T230000','19340407T230000','19320402T230000','19310418T230000','19290420T230000','19280414T230000','19270409T230000','19260417T230000','19240416T230000','19210228T230000','19200229T230000','19190228T230000','19180301T230000','19170228T230000','19160617T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19930926T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000']
			},
			{
				dtStart: '19920927T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920927T020000']
			},
			{
				dtStart: '19660403T020000',
				tzName: 'CET',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19660403T020000']
			},
			{
				dtStart: '19161101T010000',
				tzName: 'WET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19910929T020000','19900930T020000','19890924T020000','19880925T020000','19870927T020000','19860928T020000','19850929T020000','19840930T020000','19830925T020000','19820926T020000','19810927T020000','19800928T020000','19790930T020000','19781001T010000','19770925T010000','19760926T010000','19651003T030000','19641004T030000','19631006T030000','19621007T030000','19611001T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521005T030000','19511007T030000','19491002T030000','19481003T030000','19471005T030000','19461006T000000','19451028T000000','19441029T000000','19431031T000000','19421025T000000','19411006T000000','19401006T000000','19391119T000000','19381002T000000','19371003T000000','19361004T000000','19351006T000000','19341007T000000','19321002T000000','19311004T000000','19291006T000000','19281007T000000','19271002T000000','19261003T000000','19241015T000000','19211015T000000','19201015T000000','19191015T000000','19181015T000000','19171015T000000','19161101T010000']
			},
			{
				dtStart: '19120101T000000',
				tzName: 'WET',
				tzOffsetFROM: '-003645',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19120101T000000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'LMT',
				tzOffsetFROM: '-003645',
				tzOffsetTO: '-003645',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Athens': {
		daylightComponents:
		[
			{
				dtStart: '19810329T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19430330T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19430330T000000']
			},
			{
				dtStart: '19410430T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410430T000000']
			},
			{
				dtStart: '19320707T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800401T000000','19790401T090000','19780402T020000','19770403T020000','19760411T020000','19750412T000000','19520701T000000','19410407T000000','19320707T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19810101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810101T000000']
			},
			{
				dtStart: '19440404T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440404T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T000000','19421102T030000']
			},
			{
				dtStart: '19320901T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950924T040000','19940925T040000','19930926T040000','19920927T040000','19910929T040000','19900930T040000','19890924T040000','19880925T040000','19870927T040000','19860928T040000','19850929T040000','19840930T040000','19830925T040000','19820926T040000','19810927T040000','19800928T000000','19790929T020000','19780924T040000','19770926T030000','19761010T030000','19751126T010000','19521102T000000','19320901T000000']
			},
			{
				dtStart: '19160728T000100',
				tzName: 'EET',
				tzOffsetFROM: '+013452',
				tzOffsetTO: '+0200',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19160728T000100']
			},
			{
				dtStart: '18950914T000000',
				tzName: 'AMT',
				tzOffsetFROM: '+013452',
				tzOffsetTO: '+013452',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950914T000000']
			}
		]
	},
	'Europe/San_Marino': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19440701T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440701T000000']
			},
			{
				dtStart: '19160603T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800406T020000','19790527T000000','19780528T000000','19770522T000000','19760530T000000','19750601T000000','19740526T000000','19730603T000000','19720528T000000','19710523T000000','19700531T000000','19690601T000000','19680526T000000','19670528T000000','19660522T000000','19480229T020000','19470316T000000','19460317T020000','19450402T020000','19440403T020000','19430329T020000','19400615T000000','19200321T000000','19190302T000000','19180310T000000','19170401T000000','19160603T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T010000','19781001T010000','19770925T010000','19760926T010000','19750928T010000','19740929T000000','19730930T000000','19721001T000000','19710926T010000','19700927T000000','19690928T000000','19680922T000000','19670924T000000','19660925T000000','19481003T030000','19471005T010000','19461006T030000','19450915T010000','19440917T010000','19431004T030000','19421102T030000','19200919T010000','19191005T010000','19181006T010000','19170930T010000','19161001T010000']
			},
			{
				dtStart: '18931101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+004956',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18931101T000000']
			},
			{
				dtStart: '18660922T000000',
				tzName: 'RMT',
				tzOffsetFROM: '+004956',
				tzOffsetTO: '+004956',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18660922T000000']
			}
		]
	},
	'Europe/Zaporozhye': {
		daylightComponents:
		[
			{
				dtStart: '19950326T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19920329T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19940327T000000','19930328T000000','19920329T000000']
			},
			{
				dtStart: '19910331T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19910331T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19430329T020000']
			},
			{
				dtStart: '19410825T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410825T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19950101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950101T000000']
			},
			{
				dtStart: '19910929T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950924T040000','19940925T000000','19930926T000000','19920927T000000','19910929T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19431025T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19431025T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0220',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'CUT',
				tzOffsetFROM: '+022040',
				tzOffsetTO: '+0220',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Isle_of_Man': {
		daylightComponents:
		[
			{
				dtStart: '19810329T010000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410810T030000',
				tzName: 'BST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19470810T030000','19450715T030000','19440917T030000','19430815T030000','19420809T030000','19410810T030000']
			},
			{
				dtStart: '19410504T020000',
				tzName: 'BDST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19470413T020000','19450402T020000','19440402T020000','19430404T020000','19420405T020000','19410504T020000']
			},
			{
				dtStart: '19160521T020000',
				tzName: 'BST',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19800316T020000','19790318T020000','19780319T020000','19770320T020000','19760321T020000','19750316T020000','19740317T020000','19730318T020000','19720319T020000','19680218T020000','19670319T020000','19660320T020000','19650321T020000','19640322T020000','19630331T020000','19620325T020000','19610326T020000','19600410T020000','19590419T020000','19580420T020000','19570414T020000','19560422T020000','19550417T020000','19540411T020000','19530419T020000','19520420T020000','19510415T020000','19500416T020000','19490403T020000','19480314T020000','19470316T020000','19460414T020000','19400225T020000','19390416T020000','19380410T020000','19370418T020000','19360419T020000','19350414T020000','19340422T020000','19330409T020000','19320417T020000','19310419T020000','19300413T020000','19290421T020000','19280422T020000','19270410T020000','19260418T020000','19250419T020000','19240413T020000','19230422T020000','19220326T020000','19210403T020000','19200328T020000','19190330T020000','19180324T020000','19170408T020000','19160521T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T020000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19960101T000000',
				tzName: 'GMT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000']
			},
			{
				dtStart: '19681027T000000',
				tzName: 'BST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19681027T000000']
			},
			{
				dtStart: '19161001T030000',
				tzName: 'GMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19951022T020000','19941023T020000','19931024T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881023T020000','19871025T020000','19861026T020000','19851027T020000','19841028T020000','19831023T020000','19821024T020000','19811025T020000','19801026T030000','19791028T030000','19781029T030000','19771023T030000','19761024T030000','19751026T030000','19741027T030000','19731028T030000','19721029T030000','19711031T030000','19671029T030000','19661023T030000','19651024T030000','19641025T030000','19631027T030000','19621028T030000','19611029T030000','19601002T030000','19591004T030000','19581005T030000','19571006T030000','19561007T030000','19551002T030000','19541003T030000','19531004T030000','19521026T030000','19511021T030000','19501022T030000','19491030T030000','19481031T030000','19471102T030000','19461006T030000','19451007T030000','19391119T030000','19381002T030000','19371003T030000','19361004T030000','19351006T030000','19341007T030000','19331008T030000','19321002T030000','19311004T030000','19301005T030000','19291006T030000','19281007T030000','19271002T030000','19261003T030000','19251004T030000','19240921T030000','19230916T030000','19221008T030000','19211003T030000','19201025T030000','19190929T030000','19180930T030000','19170917T030000','19161001T030000']
			},
			{
				dtStart: '18471201T000000',
				tzName: 'GMT',
				tzOffsetFROM: '-000115',
				tzOffsetTO: '+0000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18471201T000000']
			}
		]
	},
	'Europe/Istanbul': {
		daylightComponents:
		[
			{
				dtStart: '20150329T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19850420T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19850420T000000']
			},
			{
				dtStart: '19790401T030000',
				tzName: 'TRST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19790401T030000']
			},
			{
				dtStart: '19781015T000000',
				tzName: 'TRST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19830731T000000','19820328T030000','19810329T030000','19800406T030000','19781015T000000']
			},
			{
				dtStart: '19160501T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20140331T030000','20130331T030000','20120325T030000','20110328T030000','20100328T030000','20090329T030000','20080330T030000','20070325T030000','20060326T010000','20050327T010000','20040328T010000','20030330T010000','20020331T010000','20010325T010000','20000326T010000','19990328T010000','19980329T010000','19970330T010000','19960331T010000','19950326T010000','19940327T010000','19930328T010000','19920329T010000','19910331T010000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19780402T000000','19770403T000000','19760601T000000','19750330T000000','19740331T020000','19730603T010000','19720507T000000','19710502T000000','19700503T000000','19640515T000000','19620715T000000','19510422T000000','19500419T000000','19490410T000000','19480418T000000','19470420T000000','19460601T000000','19450402T000000','19420401T000000','19401201T000000','19400630T000000','19250501T000000','19240513T000000','19220326T000000','19210403T000000','19200328T000000','19160501T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20071028T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '20070101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20140330T030000','20110327T030000','20070101T000000']
			},
			{
				dtStart: '19791015T000000',
				tzName: 'TRT',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19831002T000000','19821011T000000','19811012T000000','19801013T000000','19791015T000000']
			},
			{
				dtStart: '19161001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19950924T020000','19940925T020000','19930926T020000','19920927T020000','19910929T020000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850928T000000','19771016T000000','19761031T000000','19751026T000000','19741103T050000','19731104T030000','19721008T000000','19711003T000000','19701004T000000','19641001T000000','19621008T000000','19511008T000000','19501008T000000','19491002T000000','19481003T000000','19471005T000000','19461001T000000','19451008T000000','19421101T000000','19410921T000000','19401005T000000','19251001T000000','19241001T000000','19221008T000000','19211003T000000','19201025T000000','19161001T000000']
			},
			{
				dtStart: '19101001T000000',
				tzName: 'EET',
				tzOffsetFROM: '+015656',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19101001T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'IMT',
				tzOffsetFROM: '+015552',
				tzOffsetTO: '+015656',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Copenhagen': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160514T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19800406T020000','19480509T020000','19470504T020000','19460501T020000','19450402T020000','19440403T020000','19430329T020000','19400515T000000','19160514T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19160930T230000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19480808T030000','19470810T030000','19460901T030000','19450815T030000','19441002T030000','19431004T030000','19421102T030000','19160930T230000']
			},
			{
				dtStart: '18940101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+005020',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18940101T000000']
			},
			{
				dtStart: '18900101T000000',
				tzName: 'CMT',
				tzOffsetFROM: '+005020',
				tzOffsetTO: '+005020',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18900101T000000']
			}
		]
	},
	'Europe/Podgorica': {
		daylightComponents:
		[
			{
				dtStart: '19830327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410418T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450508T020000','19440403T020000','19430329T020000','19410418T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821127T000000','19450101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Oslo': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19160522T010000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19800406T020000','19650425T020000','19640315T020000','19630317T020000','19620318T020000','19610319T020000','19600320T020000','19590315T020000','19450402T020000','19440403T020000','19430329T020000','19400810T230000','19160522T010000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19160930T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19650919T030000','19640920T030000','19630915T030000','19620916T030000','19610917T030000','19600918T030000','19590920T030000','19451001T030000','19441002T030000','19431004T030000','19421102T030000','19160930T000000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0043',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'Europe/Tallinn': {
		daylightComponents:
		[
			{
				dtStart: '20020331T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19900325T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19990328T030000','19980329T020000','19970330T020000','19960331T020000','19950326T020000','19940327T020000','19930328T020000','19920329T020000','19910331T020000','19900325T020000']
			},
			{
				dtStart: '19890326T020000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19980922T000000','19890326T020000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19410915T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19410915T000000']
			},
			{
				dtStart: '19180415T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000','19180415T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20021027T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19991101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20020221T000000','19991101T000000']
			},
			{
				dtStart: '19890924T030000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19991031T040000','19981025T040000','19971026T030000','19961027T030000','19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19400806T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440922T000000','19400806T000000']
			},
			{
				dtStart: '19210501T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0139',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19210501T000000']
			},
			{
				dtStart: '19190701T000000',
				tzName: 'TMT',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0139',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19190701T000000']
			},
			{
				dtStart: '19180916T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000','19180916T030000']
			},
			{
				dtStart: '19180201T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0139',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19180201T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'TMT',
				tzOffsetFROM: '+0139',
				tzOffsetTO: '+0139',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Belgrade': {
		daylightComponents:
		[
			{
				dtStart: '19830327T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19410418T230000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 23,
				rDates: ['19450508T020000','19440403T020000','19430329T020000','19410418T230000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19450101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19821127T000000','19450101T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19450916T030000','19441002T030000','19431004T030000','19421102T030000']
			},
			{
				dtStart: '18840101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0122',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18840101T000000']
			}
		]
	},
	'Europe/Rome': {
		daylightComponents:
		[
			{
				dtStart: '19810329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19440701T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440701T000000']
			},
			{
				dtStart: '19160603T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800406T020000','19790527T000000','19780528T000000','19770522T000000','19760530T000000','19750601T000000','19740526T000000','19730603T000000','19720528T000000','19710523T000000','19700531T000000','19690601T000000','19680526T000000','19670528T000000','19660522T000000','19480229T020000','19470316T000000','19460317T020000','19450402T020000','19440403T020000','19430329T020000','19400615T000000','19200321T000000','19190302T000000','19180310T000000','19170401T000000','19160603T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19961027T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19800101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19800101T000000']
			},
			{
				dtStart: '19161001T010000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19950924T030000','19940925T030000','19930926T030000','19920927T030000','19910929T030000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T030000','19790930T010000','19781001T010000','19770925T010000','19760926T010000','19750928T010000','19740929T000000','19730930T000000','19721001T000000','19710926T010000','19700927T000000','19690928T000000','19680922T000000','19670924T000000','19660925T000000','19481003T030000','19471005T010000','19461006T030000','19450915T010000','19440917T010000','19431004T030000','19421102T030000','19200919T010000','19191005T010000','19181006T010000','19170930T010000','19161001T010000']
			},
			{
				dtStart: '18931101T000000',
				tzName: 'CET',
				tzOffsetFROM: '+004956',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18931101T000000']
			},
			{
				dtStart: '18660922T000000',
				tzName: 'RMT',
				tzOffsetFROM: '+004956',
				tzOffsetTO: '+004956',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18660922T000000']
			}
		]
	},
	'Europe/Simferopol': {
		daylightComponents:
		[
			{
				dtStart: '19970330T040000',
				tzName: 'EEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 4,
				rDates: ['19970330T040000']
			},
			{
				dtStart: '19960331T040000',
				tzName: 'MSD',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 4,
				rDates: ['19960331T040000']
			},
			{
				dtStart: '19920329T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20130331T030000','20120325T030000','20110327T030000','20100328T030000','20090329T030000','20080330T030000','20070325T030000','20060326T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19940327T000000','19930328T000000','19920329T000000']
			},
			{
				dtStart: '19810401T000000',
				tzName: 'MSD',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960331T000000','19950326T000000','19940501T000000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840401T000000','19830401T000000','19820401T000000','19810401T000000']
			},
			{
				dtStart: '19430329T020000',
				tzName: 'CEST',
				tzOffsetFROM: '+0100',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440403T020000','19430329T020000']
			},
			{
				dtStart: '19411101T000000',
				tzName: 'CEST',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19411101T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20140330T020000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20140330T020000']
			},
			{
				dtStart: '19920101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920101T000000']
			},
			{
				dtStart: '19900701T020000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20131027T040000','20121028T040000','20111030T040000','20101031T040000','20091025T040000','20081026T040000','20071028T040000','20061029T040000','20051030T040000','20041031T040000','20031026T040000','20021027T040000','20011028T040000','20001029T040000','19991031T040000','19981025T040000','19971026T040000','19930926T000000','19920927T000000','19900701T020000']
			},
			{
				dtStart: '19900101T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970101T000000','19900101T000000']
			},
			{
				dtStart: '19811001T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20141026T020000','19961027T040000','19950924T000000','19940925T000000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19831001T000000','19821001T000000','19811001T000000']
			},
			{
				dtStart: '19421102T030000',
				tzName: 'CET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0100',
				startMinutes: 0,
				startHours: 3,
				rDates: ['19431004T030000','19421102T030000']
			},
			{
				dtStart: '19300621T000000',
				tzName: 'MSK',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19440413T000000','19300621T000000']
			},
			{
				dtStart: '19240502T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0216',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19240502T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'SMT',
				tzOffsetFROM: '+021624',
				tzOffsetTO: '+0216',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Europe/Bucharest': {
		daylightComponents:
		[
			{
				dtStart: '19970330T030000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 3,
				startMonth: 3,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19320521T000000',
				tzName: 'EEST',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960331T000000','19950326T000000','19940327T000000','19930328T000000','19920329T000000','19910331T000000','19900325T020000','19890326T020000','19880327T020000','19870329T020000','19860330T020000','19850331T020000','19840325T020000','19830327T020000','19820328T020000','19810329T020000','19800405T230000','19790527T000000','19390402T000000','19380403T000000','19370404T000000','19360405T000000','19350407T000000','19340408T000000','19330402T000000','19320521T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19971026T040000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 4,
				startMonth: 10,
				startDay: 0,
				startCount: -1
			},
			{
				dtStart: '19910101T000000',
				tzName: 'EET',
				tzOffsetFROM: '+0200',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19970101T000000','19940101T000000','19910101T000000']
			},
			{
				dtStart: '19321002T010000',
				tzName: 'EET',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 1,
				rDates: ['19961027T000000','19950924T000000','19940925T000000','19930926T010000','19920927T010000','19910929T010000','19900930T030000','19890924T030000','19880925T030000','19870927T030000','19860928T030000','19850929T030000','19840930T030000','19830925T030000','19820926T030000','19810927T030000','19800928T010000','19790930T000000','19391001T010000','19381002T010000','19371003T010000','19361004T010000','19351006T010000','19341007T010000','19331001T010000','19321002T010000']
			},
			{
				dtStart: '19310724T000000',
				tzName: 'EET',
				tzOffsetFROM: '+014424',
				tzOffsetTO: '+0200',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19310724T000000']
			},
			{
				dtStart: '18911001T000000',
				tzName: 'BMT',
				tzOffsetFROM: '+014424',
				tzOffsetTO: '+014424',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18911001T000000']
			}
		]
	},
	'Australia/Lord_Howe': {
		daylightComponents:
		[
			{
				dtStart: '20081005T020000',
				tzName: 'LHDT',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19851027T020000',
				tzName: 'LHDT',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20000827T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000']
			},
			{
				dtStart: '19811025T020000',
				tzName: 'LHDT',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+1130',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19841028T020000','19831030T020000','19821031T020000','19811025T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T020000',
				tzName: 'LHST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 2,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19860316T020000',
				tzName: 'LHST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T020000','20060402T020000','20050327T020000','20040328T020000','20030330T020000','20020331T020000','20010325T020000','20000326T020000','19990328T020000','19980329T020000','19970330T020000','19960331T020000','19950305T020000','19940306T020000','19930307T020000','19920301T020000','19910303T020000','19900304T020000','19890319T020000','19880320T020000','19870315T020000','19860316T020000']
			},
			{
				dtStart: '19820307T020000',
				tzName: 'LHST',
				tzOffsetFROM: '+1130',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19850303T020000','19840304T020000','19830306T020000','19820307T020000']
			},
			{
				dtStart: '19810301T000000',
				tzName: 'LHST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19810301T000000']
			},
			{
				dtStart: '18950201T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+103620',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Australia/Adelaide': {
		daylightComponents:
		[
			{
				dtStart: '20081005T020000',
				tzName: 'ACDT',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19170101T000100',
				tzName: 'ACDT',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+1030',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'ACST',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19710101T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'ACST',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950326T030000','19940320T030000','19930307T030000','19920322T030000','19910303T030000','19900318T030000','19890319T030000','19880320T030000','19870315T030000','19860316T030000','19850303T030000','19840304T030000','19830306T030000','19820307T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18990501T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18990501T000000']
			},
			{
				dtStart: '18950201T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+091420',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Australia/Eucla': {
		daylightComponents:
		[
			{
				dtStart: '19170101T000100',
				tzName: 'ACWDT',
				tzOffsetFROM: '+0845',
				tzOffsetTO: '+0945',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20081026T020000','20071028T020000','20061203T020000','19911117T020000','19831030T020000','19741027T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19430701T000000',
				tzName: 'ACWST',
				tzOffsetFROM: '+0845',
				tzOffsetTO: '+0845',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19430701T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'ACWST',
				tzOffsetFROM: '+0945',
				tzOffsetTO: '+0845',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20090329T030000','20080330T030000','20070325T030000','19920301T030000','19840304T030000','19750302T030000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18951201T000000',
				tzName: 'ACWST',
				tzOffsetFROM: '+083528',
				tzOffsetTO: '+0845',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18951201T000000']
			}
		]
	},
	'Australia/Broken_Hill': {
		daylightComponents:
		[
			{
				dtStart: '20081005T020000',
				tzName: 'ACDT',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '20000101T000000',
				tzName: 'ACDT',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+1030',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20000101T000000']
			},
			{
				dtStart: '19170101T000100',
				tzName: 'ACDT',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+1030',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20001029T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'ACST',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19710101T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'ACST',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950305T030000','19940306T030000','19930307T030000','19920301T030000','19910303T030000','19900304T030000','19890319T030000','19880320T030000','19870315T030000','19860316T030000','19850303T030000','19840304T030000','19830306T030000','19820404T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18990501T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18990501T000000']
			},
			{
				dtStart: '18960823T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18960823T000000']
			},
			{
				dtStart: '18950201T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+092548',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Australia/Currie': {
		daylightComponents:
		[
			{
				dtStart: '20011007T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19170201T000000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19170201T000000']
			},
			{
				dtStart: '19161001T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20000827T020000','19991003T020000','19981004T020000','19971005T020000','19961006T020000','19951001T020000','19941002T020000','19931003T020000','19921004T020000','19911006T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19161001T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19710701T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710701T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950326T030000','19940327T030000','19930328T030000','19920329T030000','19910331T030000','19900318T030000','19890319T030000','19880320T030000','19870315T030000','19860302T030000','19850303T030000','19840304T030000','19830327T030000','19820328T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18950901T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+093528',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950901T000000']
			}
		]
	},
	'Australia/Brisbane': {
		daylightComponents:
		[
			{
				dtStart: '19170101T000100',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19911027T020000','19901028T020000','19891029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19710101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19920301T030000','19910303T030000','19900304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+101208',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'Australia/Melbourne': {
		daylightComponents:
		[
			{
				dtStart: '20081005T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19170101T000100',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20000827T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871018T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19710101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950326T030000','19940306T030000','19930307T030000','19920301T030000','19910303T030000','19900318T030000','19890319T030000','19880320T030000','19870315T030000','19860316T030000','19850303T030000','19840304T030000','19830306T030000','19820307T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18950201T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+093952',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Australia/Hobart': {
		daylightComponents:
		[
			{
				dtStart: '20011007T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19170201T000000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19170201T000000']
			},
			{
				dtStart: '19161001T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20000827T020000','19991003T020000','19981004T020000','19971005T020000','19961006T020000','19951001T020000','19941002T020000','19931003T020000','19921004T020000','19911006T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19701025T020000','19691026T020000','19681027T020000','19671001T020000','19431003T020000','19420927T020000','19420101T020000','19161001T020000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19670101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19670101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950326T030000','19940327T030000','19930328T030000','19920329T030000','19910331T030000','19900318T030000','19890319T030000','19880320T030000','19870315T030000','19860302T030000','19850303T030000','19840304T030000','19830327T030000','19820328T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19710314T030000','19700308T030000','19690309T030000','19680331T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18950901T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+094916',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950901T000000']
			}
		]
	},
	'Australia/Darwin': {
		daylightComponents:
		[
			{
				dtStart: '19170101T000100',
				tzName: 'ACDT',
				tzOffsetFROM: '+0930',
				tzOffsetTO: '+1030',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19170325T020000',
				tzName: 'ACST',
				tzOffsetFROM: '+1030',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18990501T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0930',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18990501T000000']
			},
			{
				dtStart: '18950201T000000',
				tzName: 'ACST',
				tzOffsetFROM: '+084320',
				tzOffsetTO: '+0900',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Australia/Perth': {
		daylightComponents:
		[
			{
				dtStart: '19170101T000100',
				tzName: 'AWDT',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0900',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20081026T020000','20071028T020000','20061203T020000','19911117T020000','19831030T020000','19741027T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19430701T000000',
				tzName: 'AWST',
				tzOffsetFROM: '+0800',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19430701T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AWST',
				tzOffsetFROM: '+0900',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20090329T030000','20080330T030000','20070325T030000','19920301T030000','19840304T030000','19750302T030000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18951201T000000',
				tzName: 'AWST',
				tzOffsetFROM: '+074324',
				tzOffsetTO: '+0800',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18951201T000000']
			}
		]
	},
	'Australia/Sydney': {
		daylightComponents:
		[
			{
				dtStart: '20081005T020000',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 0,
				startHours: 2,
				startMonth: 10,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19170101T000100',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 1,
				startHours: 0,
				rDates: ['20071028T020000','20061029T020000','20051030T020000','20041031T020000','20031026T020000','20021027T020000','20011028T020000','20000827T020000','19991031T020000','19981025T020000','19971026T020000','19961027T020000','19951029T020000','19941030T020000','19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19881030T020000','19871025T020000','19861019T020000','19851027T020000','19841028T020000','19831030T020000','19821031T020000','19811025T020000','19801026T020000','19791028T020000','19781029T020000','19771030T020000','19761031T020000','19751026T020000','19741027T020000','19731028T020000','19721029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '20080406T030000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 3,
				startMonth: 4,
				startDay: 0,
				startCount: 1
			},
			{
				dtStart: '19710101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19710101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['20070325T030000','20060402T030000','20050327T030000','20040328T030000','20030330T030000','20020331T030000','20010325T030000','20000326T030000','19990328T030000','19980329T030000','19970330T030000','19960331T030000','19950305T030000','19940306T030000','19930307T030000','19920301T030000','19910303T030000','19900304T030000','19890319T030000','19880320T030000','19870315T030000','19860316T030000','19850303T030000','19840304T030000','19830306T030000','19820404T030000','19810301T030000','19800302T030000','19790304T030000','19780305T030000','19770306T030000','19760307T030000','19750302T030000','19740303T030000','19730304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18950201T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+100452',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Australia/Lindeman': {
		daylightComponents:
		[
			{
				dtStart: '19170101T000100',
				tzName: 'AEDT',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1100',
				startMinutes: 1,
				startHours: 0,
				rDates: ['19931031T020000','19921025T020000','19911027T020000','19901028T020000','19891029T020000','19711031T020000','19431003T020000','19420927T020000','19420101T020000','19170101T000100']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19710101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+1000',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19920701T000000','19710101T000000']
			},
			{
				dtStart: '19170325T020000',
				tzName: 'AEST',
				tzOffsetFROM: '+1100',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 2,
				rDates: ['19940306T030000','19930307T030000','19920301T030000','19910303T030000','19900304T030000','19720227T030000','19440326T020000','19430328T020000','19420329T020000','19170325T020000']
			},
			{
				dtStart: '18950101T000000',
				tzName: 'AEST',
				tzOffsetFROM: '+095556',
				tzOffsetTO: '+1000',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950101T000000']
			}
		]
	},
	'Indian/Mayotte': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Indian/Mauritius': {
		daylightComponents:
		[
			{
				dtStart: '19821010T000000',
				tzName: 'MUST',
				tzOffsetFROM: '+0400',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20081026T020000','19821010T000000']
			}
		],
		standardComponents:
		[
			{
				dtStart: '19830321T000000',
				tzName: 'MUT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['20090329T020000','19830321T000000']
			},
			{
				dtStart: '19070101T000000',
				tzName: 'MUT',
				tzOffsetFROM: '+0350',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19070101T000000']
			}
		]
	},
	'Indian/Cocos': {
		standardComponents:
		[
			{
				dtStart: '19000101T000000',
				tzName: 'CCT',
				tzOffsetFROM: '+062740',
				tzOffsetTO: '+0630',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19000101T000000']
			}
		]
	},
	'Indian/Chagos': {
		standardComponents:
		[
			{
				dtStart: '19960101T000000',
				tzName: 'IOT',
				tzOffsetFROM: '+0500',
				tzOffsetTO: '+0600',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19960101T000000']
			},
			{
				dtStart: '19070101T000000',
				tzName: 'IOT',
				tzOffsetFROM: '+044940',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19070101T000000']
			}
		]
	},
	'Indian/Maldives': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'MVT',
				tzOffsetFROM: '+0454',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '18800101T000000',
				tzName: 'MMT',
				tzOffsetFROM: '+0454',
				tzOffsetTO: '+0454',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18800101T000000']
			}
		]
	},
	'Indian/Antananarivo': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Indian/Christmas': {
		standardComponents:
		[
			{
				dtStart: '18950201T000000',
				tzName: 'CXT',
				tzOffsetFROM: '+070252',
				tzOffsetTO: '+0700',
				startMinutes: 0,
				startHours: 0,
				rDates: ['18950201T000000']
			}
		]
	},
	'Indian/Comoro': {
		standardComponents:
		[
			{
				dtStart: '19600101T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+0245',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19600101T000000']
			},
			{
				dtStart: '19400101T000000',
				tzName: 'BEAUT',
				tzOffsetFROM: '+0230',
				tzOffsetTO: '+0245',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19400101T000000']
			},
			{
				dtStart: '19300101T000000',
				tzName: 'BEAT',
				tzOffsetFROM: '+0300',
				tzOffsetTO: '+0230',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19300101T000000']
			},
			{
				dtStart: '19280701T000000',
				tzName: 'EAT',
				tzOffsetFROM: '+022716',
				tzOffsetTO: '+0300',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19280701T000000']
			}
		]
	},
	'Indian/Mahe': {
		standardComponents:
		[
			{
				dtStart: '19060601T000000',
				tzName: 'SCT',
				tzOffsetFROM: '+034148',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19060601T000000']
			}
		]
	},
	'Indian/Reunion': {
		standardComponents:
		[
			{
				dtStart: '19110601T000000',
				tzName: 'RET',
				tzOffsetFROM: '+034152',
				tzOffsetTO: '+0400',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19110601T000000']
			}
		]
	},
	'Indian/Kerguelen': {
		standardComponents:
		[
			{
				dtStart: '19500101T000000',
				tzName: 'TFT',
				tzOffsetFROM: '+0000',
				tzOffsetTO: '+0500',
				startMinutes: 0,
				startHours: 0,
				rDates: ['19500101T000000']
			}
		]
	}
}
var timezones_alt = {
	'Africa/Addis_Ababa': 'Africa/Nairobi',
	'Africa/Asmara': 'Africa/Nairobi',
	'Africa/Asmera': 'Africa/Asmara',
	'Africa/Bamako': 'Africa/Abidjan',
	'Africa/Bangui': 'Africa/Lagos',
	'Africa/Banjul': 'Africa/Abidjan',
	'Africa/Blantyre': 'Africa/Maputo',
	'Africa/Brazzaville': 'Africa/Lagos',
	'Africa/Bujumbura': 'Africa/Maputo',
	'Africa/Conakry': 'Africa/Abidjan',
	'Africa/Dakar': 'Africa/Abidjan',
	'Africa/Dar_es_Salaam': 'Africa/Nairobi',
	'Africa/Djibouti': 'Africa/Nairobi',
	'Africa/Douala': 'Africa/Lagos',
	'Africa/Freetown': 'Africa/Abidjan',
	'Africa/Gaborone': 'Africa/Maputo',
	'Africa/Harare': 'Africa/Maputo',
	'Africa/Juba': 'Africa/Khartoum',
	'Africa/Kampala': 'Africa/Nairobi',
	'Africa/Kigali': 'Africa/Maputo',
	'Africa/Kinshasa': 'Africa/Lagos',
	'Africa/Libreville': 'Africa/Lagos',
	'Africa/Lome': 'Africa/Abidjan',
	'Africa/Luanda': 'Africa/Lagos',
	'Africa/Lubumbashi': 'Africa/Maputo',
	'Africa/Lusaka': 'Africa/Maputo',
	'Africa/Malabo': 'Africa/Lagos',
	'Africa/Maseru': 'Africa/Johannesburg',
	'Africa/Mbabane': 'Africa/Johannesburg',
	'Africa/Mogadishu': 'Africa/Nairobi',
	'Africa/Niamey': 'Africa/Lagos',
	'Africa/Nouakchott': 'Africa/Abidjan',
	'Africa/Ouagadougou': 'Africa/Abidjan',
	'Africa/Porto-Novo': 'Africa/Lagos',
	'Africa/Sao_Tome': 'Africa/Abidjan',
	'Africa/Timbuktu': 'Africa/Abidjan',
	'America/Anguilla': 'America/Port_of_Spain',
	'America/Argentina/ComodRivadavia': 'America/Argentina/Catamarca',
	'America/Aruba': 'America/Curacao',
	'America/Atka': 'America/Adak',
	'America/Buenos_Aires': 'America/Argentina/Buenos_Aires',
	'America/Catamarca': 'America/Argentina/Catamarca',
	'America/Coral_Harbour': 'America/Atikokan',
	'America/Cordoba': 'America/Argentina/Cordoba',
	'America/Dominica': 'America/Port_of_Spain',
	'America/Ensenada': 'America/Tijuana',
	'America/Fort_Wayne': 'America/Indiana/Indianapolis',
	'America/Grenada': 'America/Port_of_Spain',
	'America/Guadeloupe': 'America/Port_of_Spain',
	'America/Indianapolis': 'America/Indiana/Indianapolis',
	'America/Jujuy': 'America/Argentina/Jujuy',
	'America/Knox_IN': 'America/Indiana/Knox',
	'America/Kralendijk': 'America/Curacao',
	'America/Louisville': 'America/Kentucky/Louisville',
	'America/Lower_Princes': 'America/Curacao',
	'America/Marigot': 'America/Port_of_Spain',
	'America/Mendoza': 'America/Argentina/Mendoza',
	'America/Montserrat': 'America/Port_of_Spain',
	'America/Porto_Acre': 'America/Rio_Branco',
	'America/Rosario': 'America/Argentina/Cordoba',
	'America/Shiprock': 'America/Denver',
	'America/St_Barthelemy': 'America/Port_of_Spain',
	'America/St_Kitts': 'America/Port_of_Spain',
	'America/St_Lucia': 'America/Port_of_Spain',
	'America/St_Thomas': 'America/Port_of_Spain',
	'America/St_Vincent': 'America/Port_of_Spain',
	'America/Tortola': 'America/Port_of_Spain',
	'America/Virgin': 'America/Port_of_Spain',
	'Antarctica/McMurdo': 'Pacific/Auckland',
	'Antarctica/South_Pole': 'Antarctica/McMurdo',
	'Antarctica/South_Pole': 'Pacific/Auckland',
	'Arctic/Longyearbyen': 'Europe/Oslo',
	'Asia/Ashkhabad': 'Asia/Ashgabat',
	'Asia/Calcutta': 'Asia/Kolkata',
	'Asia/Chongqing': 'Asia/Shanghai',
	'Asia/Chungking': 'Asia/Chongqing',
	'Asia/Chungking': 'Asia/Shanghai',
	'Asia/Dacca': 'Asia/Dhaka',
	'Asia/Harbin': 'Asia/Shanghai',
	'Asia/Istanbul': 'Europe/Istanbul',
	'Asia/Kashgar': 'Asia/Urumqi',
	'Asia/Katmandu': 'Asia/Kathmandu',
	'Asia/Macao': 'Asia/Macau',
	'Asia/Phnom_Penh': 'Asia/Bangkok',
	'Asia/Saigon': 'Asia/Ho_Chi_Minh',
	'Asia/Tel_Aviv': 'Asia/Jerusalem',
	'Asia/Thimbu': 'Asia/Thimphu',
	'Asia/Ujung_Pandang': 'Asia/Makassar',
	'Asia/Ulan_Bator': 'Asia/Ulaanbaatar',
	'Asia/Vientiane': 'Asia/Bangkok',
	'Atlantic/Faeroe': 'Atlantic/Faroe',
	'Atlantic/Jan_Mayen': 'Europe/Oslo',
	'Atlantic/St_Helena': 'Africa/Abidjan',
	'Australia/ACT': 'Australia/Sydney',
	'Australia/Canberra': 'Australia/Sydney',
	'Australia/LHI': 'Australia/Lord_Howe',
	'Australia/North': 'Australia/Darwin',
	'Australia/NSW': 'Australia/Sydney',
	'Australia/Queensland': 'Australia/Brisbane',
	'Australia/South': 'Australia/Adelaide',
	'Australia/Tasmania': 'Australia/Hobart',
	'Australia/Victoria': 'Australia/Melbourne',
	'Australia/West': 'Australia/Perth',
	'Australia/Yancowinna': 'Australia/Broken_Hill',
	'Brazil/Acre': 'America/Rio_Branco',
	'Brazil/DeNoronha': 'America/Noronha',
	'Brazil/East': 'America/Sao_Paulo',
	'Brazil/West': 'America/Manaus',
	'Canada/Atlantic': 'America/Halifax',
	'Canada/Central': 'America/Winnipeg',
	'Canada/Eastern': 'America/Toronto',
	'Canada/East-Saskatchewan': 'America/Regina',
	'Canada/Mountain': 'America/Edmonton',
	'Canada/Newfoundland': 'America/St_Johns',
	'Canada/Pacific': 'America/Vancouver',
	'Canada/Saskatchewan': 'America/Regina',
	'Canada/Yukon': 'America/Whitehorse',
	'Chile/Continental': 'America/Santiago',
	'Chile/EasterIsland': 'Pacific/Easter',
	'Cuba': 'America/Havana',
	'Egypt': 'Africa/Cairo',
	'Eire': 'Europe/Dublin',
	'Etc/GMT-0': 'Etc/GMT',
	'Etc/GMT+0': 'Etc/GMT',
	'Etc/GMT0': 'Etc/GMT',
	'Etc/Greenwich': 'Etc/GMT',
	'Etc/Universal': 'Etc/UTC',
	'Etc/Zulu': 'Etc/UTC',
	'Europe/Belfast': 'Europe/London',
	'Europe/Bratislava': 'Europe/Prague',
	'Europe/Busingen': 'Europe/Zurich',
	'Europe/Guernsey': 'Europe/London',
	'Europe/Isle_of_Man': 'Europe/London',
	'Europe/Jersey': 'Europe/London',
	'Europe/Ljubljana': 'Europe/Belgrade',
	'Europe/Mariehamn': 'Europe/Helsinki',
	'Europe/Nicosia': 'Asia/Nicosia',
	'Europe/Podgorica': 'Europe/Belgrade',
	'Europe/San_Marino': 'Europe/Rome',
	'Europe/Sarajevo': 'Europe/Belgrade',
	'Europe/Skopje': 'Europe/Belgrade',
	'Europe/Tiraspol': 'Europe/Chisinau',
	'Europe/Vaduz': 'Europe/Zurich',
	'Europe/Vatican': 'Europe/Rome',
	'Europe/Zagreb': 'Europe/Belgrade',
	'GB-Eire': 'Europe/London',
	'GB': 'Europe/London',
	'GMT-0': 'Etc/GMT',
	'GMT+0': 'Etc/GMT',
	'GMT0': 'Etc/GMT',
	'GMT': 'Etc/GMT',
	'Greenwich': 'Etc/GMT',
	'Hongkong': 'Asia/Hong_Kong',
	'Iceland': 'Atlantic/Reykjavik',
	'Indian/Antananarivo': 'Africa/Nairobi',
	'Indian/Comoro': 'Africa/Nairobi',
	'Indian/Mayotte': 'Africa/Nairobi',
	'Iran': 'Asia/Tehran',
	'Israel': 'Asia/Jerusalem',
	'Jamaica': 'America/Jamaica',
	'Japan': 'Asia/Tokyo',
	'Kwajalein': 'Pacific/Kwajalein',
	'Libya': 'Africa/Tripoli',
	'Mexico/BajaNorte': 'America/Tijuana',
	'Mexico/BajaSur': 'America/Mazatlan',
	'Mexico/General': 'America/Mexico_City',
	'Navajo': 'America/Denver',
	'NZ-CHAT': 'Pacific/Chatham',
	'NZ': 'Pacific/Auckland',
	'Pacific/Johnston': 'Pacific/Honolulu',
	'Pacific/Ponape': 'Pacific/Pohnpei',
	'Pacific/Samoa': 'Pacific/Pago_Pago',
	'Pacific/Truk': 'Pacific/Chuuk',
	'Pacific/Yap': 'Pacific/Chuuk',
	'Poland': 'Europe/Warsaw',
	'Portugal': 'Europe/Lisbon',
	'PRC': 'Asia/Shanghai',
	'ROC': 'Asia/Taipei',
	'ROK': 'Asia/Seoul',
	'Singapore': 'Asia/Singapore',
	'Turkey': 'Europe/Istanbul',
	'UCT': 'Etc/UCT',
	'Universal': 'Etc/UTC',
	'US/Alaska': 'America/Anchorage',
	'US/Aleutian': 'America/Adak',
	'US/Arizona': 'America/Phoenix',
	'US/Central': 'America/Chicago',
	'US/Eastern': 'America/New_York',
	'US/East-Indiana': 'America/Indiana/Indianapolis',
	'US/Hawaii': 'Pacific/Honolulu',
	'US/Indiana-Starke': 'America/Indiana/Knox',
	'US/Michigan': 'America/Detroit',
	'US/Mountain': 'America/Denver',
	'US/Pacific': 'America/Los_Angeles',
	'US/Pacific-New': 'America/Los_Angeles',
	'US/Samoa': 'Pacific/Pago_Pago',
	'UTC': 'Etc/UTC',
	'W-SU': 'Europe/Moscow',
	'Zulu': 'Etc/UTC'
}
