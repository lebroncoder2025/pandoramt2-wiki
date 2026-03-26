import { useState } from 'react'
import { Trophy, Shield, Swords, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { PageHeader, Card, Badge, SectionTitle, InfoBox, TabGroup } from '../components/UI.tsx'

interface Match {
  nr: number
  round: string
  teamA: string
  teamB: string
  score: string
  winner: string
  date?: string
  note?: string
}

interface Tournament {
  id: number
  edition: string
  dateLabel: string
  dateRange: string
  server: 'OLD' | 'S2'
  format: string
  totalGuilds: number
  guilds: string[]
  winner: string
  finalist: string
  finalScore: string
  finalResult: string
  semifinalists?: string[]
  matches: Match[]
  forumUrl: string
  status?: 'completed' | 'no-results'
}

const tournaments: Tournament[] = [
  /* ─── EDYCJA 1 ─── */
  {
    id: 9,
    edition: 'Edycja #9',
    dateLabel: 'Marzec 2026',
    dateRange: '21–22 Marca 2026',
    server: 'S2',
    format: 'Double Elimination | Faza grupowa BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 14,
    guilds: [
      'Respect', 'Harpagany', 'Wizards', 'Rezerwa', 'Trauma', 'Grozni',
      'LEGENDS', 'Sikarios', 'szmex', 'Anarchy', 'Complete', 'Panzerfaust',
      'x6tence', 'Adrenaline',
    ],
    winner: 'x6tence',
    finalist: 'Grozni',
    finalScore: '3:0',
    finalResult: '100:64 / 100:70 / 100:73',
    semifinalists: ['Trauma', 'Grozni', 'x6tence', 'Complete'],
    matches: [
      { nr: 1,  round: 'Runda 1',   teamA: 'Respect',     teamB: 'Harpagany',   score: '34:100',   winner: 'Harpagany',   date: '21.03.2026 ~15:00' },
      { nr: 2,  round: 'Runda 1',   teamA: 'Wizards',     teamB: 'Rezerwa',     score: '100:69',   winner: 'Wizards',     date: '21.03.2026 ~15:00' },
      { nr: 3,  round: 'Runda 1',   teamA: 'Trauma',      teamB: 'Grozni',      score: '100:89',   winner: 'Trauma',      date: '21.03.2026 ~15:00' },
      { nr: 4,  round: 'Runda 1',   teamA: 'LEGENDS',     teamB: 'Sikarios',    score: '72:100',   winner: 'Sikarios',    date: '21.03.2026 ~15:00' },
      { nr: 5,  round: 'Runda 1',   teamA: 'szmex',       teamB: 'Anarchy',     score: '100:80',   winner: 'szmex',       date: '21.03.2026 ~15:00' },
      { nr: 6,  round: 'Runda 1',   teamA: 'Complete',    teamB: 'Panzerfaust', score: '11:100',   winner: 'Panzerfaust', date: '21.03.2026 ~15:00' },
      { nr: 7,  round: 'Runda 2',   teamA: 'x6tence',     teamB: 'Sikarios',    score: '100:63',   winner: 'x6tence',     date: '21.03.2026 ~16:43' },
      { nr: 8,  round: 'Runda 2',   teamA: 'Wizards',     teamB: 'Trauma',      score: '27:100',   winner: 'Trauma',      date: '21.03.2026 ~15:54' },
      { nr: 9,  round: 'Runda 2',   teamA: 'Adrenaline',  teamB: 'Harpagany',   score: '27:100',   winner: 'Harpagany',   date: '21.03.2026 ~16:06' },
      { nr: 10, round: 'Runda 2',   teamA: 'szmex',       teamB: 'Panzerfaust', score: '100:61',   winner: 'szmex',       date: '21.03.2026 ~16:22' },
      { nr: 11, round: 'Runda 2',   teamA: 'Wizards',     teamB: 'LEGENDS',     score: '37:100',   winner: 'LEGENDS',     date: '21.03.2026 ~16:53' },
      { nr: 12, round: 'Runda 2',   teamA: 'Adrenaline',  teamB: 'Anarchy',     score: '34:100',   winner: 'Anarchy',     date: '21.03.2026 ~16:59' },
      { nr: 13, round: 'Runda 2',   teamA: 'Rezerwa',     teamB: 'Grozni',      score: '11:100',   winner: 'Grozni',      date: '21.03.2026 ~15:22' },
      { nr: 14, round: 'Runda 2',   teamA: 'Complete',    teamB: 'Anarchy',     score: '21:100',   winner: 'Anarchy',     date: '21.03.2026 ~15:34' },
      { nr: 15, round: 'Runda 3',   teamA: 'Sikarios',    teamB: 'Grozni',      score: '64:100',   winner: 'Grozni',      date: '21.03.2026 ~17:22' },
      { nr: 16, round: 'Runda 3',   teamA: 'Panzerfaust', teamB: 'Respect',     score: '100:23',   winner: 'Panzerfaust', date: '21.03.2026 ~17:28' },
      { nr: 17, round: 'Runda 3',   teamA: 'Panzerfaust', teamB: 'Grozni',      score: '49:100',   winner: 'Grozni',      date: '21.03.2026 ~17:48' },
      { nr: 18, round: 'Runda 3',   teamA: 'LEGENDS',     teamB: 'Anarchy',     score: '71:100',   winner: 'Anarchy',     date: '21.03.2026 ~17:53' },
      { nr: 19, round: 'Runda 3',   teamA: 'Harpagany',   teamB: 'Trauma',      score: '38:100',   winner: 'Trauma',      date: '21.03.2026 ~18:06' },
      { nr: 20, round: 'Runda 3',   teamA: 'Harpagany',   teamB: 'Grozni',      score: '62:100',   winner: 'Grozni',      date: '21.03.2026 ~18:30' },
      { nr: 21, round: 'Runda 3',   teamA: 'szmex',       teamB: 'x6tence',     score: '84:100',   winner: 'x6tence',     date: '21.03.2026 ~18:50', note: 'Crash na końcu, wynik zatwierdzony ze screenshotów' },
      { nr: 22, round: 'Runda 3',   teamA: 'szmex',       teamB: 'Anarchy',     score: '100:74',   winner: 'szmex',       date: '21.03.2026 ~19:12' },
      { nr: 23, round: 'Runda 3',   teamA: 'szmex',       teamB: 'Grozni',      score: '91:100',   winner: 'Grozni',      date: '21.03.2026 ~19:46', note: 'Powtórka przez naruszenie zasad fair-play' },
      { nr: 24, round: 'Półfinał (BO3)', teamA: 'Trauma',  teamB: 'x6tence',    score: '0:2 (60:100, 61:100)', winner: 'x6tence',   date: '22.03.2026 ~16:00' },
      { nr: 25, round: 'Półfinał (BO3)', teamA: 'Trauma',  teamB: 'Grozni',     score: '0:2 (100:89, 100:86)', winner: 'Grozni',    date: '22.03.2026 ~19:00' },
      { nr: 26, round: '🏆 FINAŁ (BO5)', teamA: 'x6tence', teamB: 'Grozni',    score: '3:0 (100:64, 100:70, 100:73)', winner: 'x6tence', date: '22.03.2026 ~21:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/42268-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 8 ─── */
  {
    id: 8,
    edition: 'Edycja #8',
    dateLabel: 'Grudzień 2025',
    dateRange: '13–14 Grudnia 2025',
    server: 'OLD',
    format: 'Double Elimination | Faza grupowa BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 12,
    guilds: [
      'Octopus', 'Undivers', 'Ohana', 'WOJANKI', 'Rose', 'x6tence',
      'Max1muS', 'DisneyWorld', 'EsportowySen', 'GumaTurbo', 'SixDays', 'Error404',
    ],
    winner: 'EsportowySen',
    finalist: 'Ohana',
    finalScore: '3:0',
    finalResult: '100:92 / 100:99 / 100:85',
    semifinalists: ['EsportowySen', 'x6tence', 'Ohana', 'GumaTurbo'],
    matches: [
      { nr: 1,  round: 'Runda 1',   teamA: 'Octopus',      teamB: 'Undivers',    score: '58:100',   winner: 'Undivers',    date: '13.12.2025 ~16:00' },
      { nr: 2,  round: 'Runda 1',   teamA: 'WOJANKI',      teamB: 'Ohana',       score: '52:100',   winner: 'Ohana',       date: '13.12.2025 ~16:00' },
      { nr: 3,  round: 'Runda 1',   teamA: 'Rose',         teamB: 'x6tence',     score: '84:100',   winner: 'x6tence',     date: '13.12.2025 ~16:00' },
      { nr: 4,  round: 'Runda 1',   teamA: 'Max1muS',      teamB: 'DisneyWorld', score: '100:55',   winner: 'Max1muS',     date: '13.12.2025 ~16:00' },
      { nr: 5,  round: 'Runda 2',   teamA: 'EsportowySen', teamB: 'Undivers',    score: '100:58',   winner: 'EsportowySen',date: '13.12.2025 ~17:00' },
      { nr: 6,  round: 'Runda 2',   teamA: 'GumaTurbo',    teamB: 'Ohana',       score: '100:84',   winner: 'GumaTurbo',   date: '13.12.2025 ~17:00' },
      { nr: 7,  round: 'Runda 2',   teamA: 'SixDays',      teamB: 'x6tence',     score: '63:100',   winner: 'x6tence',     date: '13.12.2025 ~17:00' },
      { nr: 8,  round: 'Runda 2',   teamA: 'Error404',     teamB: 'Max1muS',     score: '43:100',   winner: 'Max1muS',     date: '13.12.2025 ~17:00' },
      { nr: 9,  round: 'Runda 3',   teamA: 'Undivers',     teamB: 'DisneyWorld', score: '100:59',   winner: 'Undivers',    date: '13.12.2025 ~18:00' },
      { nr: 10, round: 'Runda 3',   teamA: 'Ohana',        teamB: 'Rose',        score: '100:86',   winner: 'Ohana',       date: '13.12.2025 ~18:00' },
      { nr: 11, round: 'Runda 3',   teamA: 'WOJANKI',      teamB: 'SixDays',     score: '82:100',   winner: 'SixDays',     date: '13.12.2025 ~18:00' },
      { nr: 12, round: 'Runda 3',   teamA: 'Octopus',      teamB: 'Error404',    score: '96:100',   winner: 'Error404',    date: '13.12.2025 ~18:00' },
      { nr: 13, round: 'Runda 4',   teamA: 'Undivers',     teamB: 'Ohana',       score: '78:100',   winner: 'Ohana',       date: '13.12.2025 ~19:00' },
      { nr: 14, round: 'Runda 4',   teamA: 'SixDays',      teamB: 'Error404',    score: '100:65',   winner: 'SixDays',     date: '13.12.2025 ~19:00' },
      { nr: 15, round: 'Runda 4',   teamA: 'EsportowySen', teamB: 'GumaTurbo',   score: '100:64',   winner: 'EsportowySen',date: '13.12.2025 ~19:30' },
      { nr: 16, round: 'Runda 4',   teamA: 'x6tence',      teamB: 'Max1muS',     score: '100:81',   winner: 'x6tence',     date: '13.12.2025 ~19:30' },
      { nr: 17, round: 'Runda 5',   teamA: 'GumaTurbo',    teamB: 'SixDays',     score: '100:77',   winner: 'GumaTurbo',   date: '13.12.2025 ~20:00' },
      { nr: 18, round: 'Runda 5',   teamA: 'Max1muS',      teamB: 'Ohana',       score: '67:100',   winner: 'Ohana',       date: '13.12.2025 ~20:00' },
      { nr: 19, round: 'Runda 5',   teamA: 'GumaTurbo',    teamB: 'Ohana',       score: '82:100',   winner: 'Ohana',       date: '13.12.2025 ~20:30' },
      { nr: 20, round: 'Półfinał (BO3)', teamA: 'EsportowySen', teamB: 'x6tence', score: '2:0 (100:87, 100:94)', winner: 'EsportowySen', date: '14.12.2025 16:00' },
      { nr: 21, round: 'Półfinał (BO3)', teamA: 'x6tence',  teamB: 'Ohana',      score: '0:2 (68:100, 64:100)', winner: 'Ohana',       date: '14.12.2025 17:00' },
      { nr: 22, round: '🏆 FINAŁ (BO5)', teamA: 'EsportowySen', teamB: 'Ohana',  score: '3:0 (100:92, 100:99, 100:85)', winner: 'EsportowySen', date: '14.12.2025 18:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/31127-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 7 ─── */
  {
    id: 7,
    edition: 'Edycja #7',
    dateLabel: 'Sierpień 2025',
    dateRange: '16–17 Sierpnia 2025',
    server: 'OLD',
    format: 'Tura otwarcia BO1 → Ćwierćfinały BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 12,
    guilds: [
      'x6tence', 'EsportowySen', 'WorldOrder', 'UwUCrew', 'PalGume', 'UnRealGodS',
      'Abaddon', 'DisneyLand', 'ChangeLog', 'MakeWar', 'LupiiAlbi', 'Murzyny',
    ],
    winner: 'ChangeLog',
    finalist: 'PalGume',
    finalScore: '3:1',
    finalResult: '100:78 / 98:100 / 100:97 / 100:72',
    semifinalists: ['Abaddon', 'ChangeLog', 'UwUCrew', 'PalGume'],
    matches: [
      { nr: 1,  round: 'Tura otwarcia', teamA: 'x6tence',   teamB: 'EsportowySen', score: '100:94',  winner: 'x6tence',  date: '16.08.2025 ~17:00' },
      { nr: 2,  round: 'Tura otwarcia', teamA: 'WorldOrder', teamB: 'UwUCrew',      score: '12:100',  winner: 'UwUCrew',  date: '16.08.2025 ~17:00' },
      { nr: 3,  round: 'Tura otwarcia', teamA: 'PalGume',    teamB: 'UnRealGodS',   score: '100:7',   winner: 'PalGume',  date: '16.08.2025 ~17:00' },
      { nr: 4,  round: 'Ćwierćfinał',  teamA: 'Abaddon',    teamB: 'DisneyLand',   score: '100:73',  winner: 'Abaddon',  date: '16.08.2025 ~17:30' },
      { nr: 5,  round: 'Ćwierćfinał',  teamA: 'ChangeLog',  teamB: 'MakeWar',      score: '100:85',  winner: 'ChangeLog',date: '16.08.2025 ~18:00' },
      { nr: 6,  round: 'Ćwierćfinał',  teamA: 'UwUCrew',    teamB: 'Murzyny',      score: '100:55',  winner: 'UwUCrew',  date: '16.08.2025' },
      { nr: 7,  round: 'Ćwierćfinał',  teamA: 'PalGume',    teamB: 'LupiiAlbi',    score: '100:57',  winner: 'PalGume',  date: '16.08.2025' },
      { nr: 8,  round: 'Półfinał (BO3)',teamA: 'Abaddon',    teamB: 'ChangeLog',    score: '0:2 (23:100, 33:100)', winner: 'ChangeLog', date: '16.08.2025 ~18:30' },
      { nr: 9,  round: 'Półfinał (BO3)',teamA: 'UwUCrew',    teamB: 'PalGume',      score: '0:2 (96:100, 93:100)', winner: 'PalGume',  date: '16.08.2025 ~19:00' },
      { nr: 10, round: '🏆 FINAŁ (BO5)',teamA: 'PalGume',    teamB: 'ChangeLog',    score: '1:3 (78:100, 100:98, 97:100, 72:100)', winner: 'ChangeLog', date: '17.08.2025 18:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/25144-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 6 ─── */
  {
    id: 6,
    edition: 'Edycja #6',
    dateLabel: 'Marzec 2025',
    dateRange: '22–23 Marca 2025',
    server: 'OLD',
    format: 'Double Elimination | Faza grupowa BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 13,
    guilds: [
      'Anonymous', 'LEGENDS', 'TimeToDie', 'AvideDeLutte', 'SixDays', 'Trzynastka',
      'Harpagany', 'OwocZycia', 'szmex', 'NewFaces', '22DoSpania', 'NieZaZero', 'inne',
    ],
    winner: 'szmex',
    finalist: 'NewFaces',
    finalScore: '3:0',
    finalResult: '100:72 / 100:90 / 100:91',
    semifinalists: ['szmex', 'SixDays', 'NewFaces', 'TimeToDie'],
    matches: [
      { nr: 1,  round: 'Runda 1',   teamA: 'Anonymous',   teamB: 'LEGENDS',      score: '100:62',  winner: 'Anonymous',  date: '22.03.2025 ~16:00' },
      { nr: 2,  round: 'Runda 1',   teamA: 'TimeToDie',   teamB: 'AvideDeLutte', score: '100:11',  winner: 'TimeToDie',  date: '22.03.2025 ~16:00' },
      { nr: 3,  round: 'Runda 1',   teamA: 'SixDays',     teamB: 'Trzynastka',   score: '100:9',   winner: 'SixDays',    date: '22.03.2025 ~16:00' },
      { nr: 4,  round: 'Runda 1',   teamA: 'Harpagany',   teamB: 'OwocZycia',    score: '68:100',  winner: 'OwocZycia',  date: '22.03.2025 ~16:00' },
      { nr: 5,  round: 'Runda 2',   teamA: 'NewFaces',    teamB: 'Anonymous',    score: '100:77',  winner: 'NewFaces',   date: '22.03.2025' },
      { nr: 6,  round: 'Runda 2',   teamA: 'TimeToDie',   teamB: 'SixDays',      score: '72:100',  winner: 'SixDays',    date: '22.03.2025' },
      { nr: 7,  round: 'Runda 2',   teamA: 'szmex',       teamB: 'OwocZycia',    score: '100:24',  winner: 'szmex',      date: '22.03.2025' },
      { nr: 8,  round: 'Runda 2',   teamA: 'AvideDeLutte',teamB: 'Trzynastka',   score: '45:100',  winner: 'Trzynastka', date: '22.03.2025' },
      { nr: 9,  round: 'Runda 3',   teamA: '22DoSpania',  teamB: 'NieZaZero',    score: '100:12',  winner: '22DoSpania', date: '22.03.2025' },
      { nr: 10, round: 'Runda 3',   teamA: 'TimeToDie',   teamB: 'NieZaZero',    score: '100:3',   winner: 'TimeToDie',  date: '22.03.2025' },
      { nr: 11, round: 'Runda 3',   teamA: 'Anonymous',   teamB: 'Harpagany',    score: '100:17',  winner: 'Anonymous',  date: '22.03.2025' },
      { nr: 12, round: 'Runda 3',   teamA: 'LEGENDS',     teamB: 'OwocZycia',    score: '76:100',  winner: 'OwocZycia',  date: '22.03.2025' },
      { nr: 13, round: 'Runda 3',   teamA: 'Anonymous',   teamB: 'TimeToDie',    score: '74:100',  winner: 'TimeToDie',  date: '22.03.2025' },
      { nr: 14, round: 'Runda 3',   teamA: 'szmex',       teamB: '22DoSpania',   score: '100:23',  winner: 'szmex',      date: '22.03.2025' },
      { nr: 15, round: 'Runda 3',   teamA: 'OwocZycia',   teamB: 'Trzynastka',   score: '100:82',  winner: 'OwocZycia',  date: '22.03.2025' },
      { nr: 16, round: 'Runda 3',   teamA: 'TimeToDie',   teamB: '22DoSpania',   score: '100:32',  winner: 'TimeToDie',  date: '22.03.2025' },
      { nr: 17, round: 'Runda 3',   teamA: 'SixDays',     teamB: 'NewFaces',     score: '100:76',  winner: 'SixDays',    date: '22.03.2025' },
      { nr: 18, round: 'Runda 3',   teamA: 'OwocZycia',   teamB: 'NewFaces',     score: '45:100',  winner: 'NewFaces',   date: '22.03.2025' },
      { nr: 19, round: 'Runda 3',   teamA: 'TimeToDie',   teamB: 'NewFaces',     score: '93:100',  winner: 'NewFaces',   date: '22.03.2025' },
      { nr: 20, round: 'Półfinał (BO3)', teamA: 'szmex',  teamB: 'SixDays',      score: '2:0 (100:60, 100:67)', winner: 'szmex',    date: '23.03.2025 16:00' },
      { nr: 21, round: 'Półfinał (BO3)', teamA: 'NewFaces',teamB: 'SixDays',     score: '2:0 (100:80, 100:52)', winner: 'NewFaces', date: '23.03.2025 17:00' },
      { nr: 22, round: '🏆 FINAŁ (BO5)', teamA: 'szmex',  teamB: 'NewFaces',     score: '3:0 (100:72, 100:90, 100:91)', winner: 'szmex', date: '23.03.2025 18:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/16624-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 5 ─── */
  {
    id: 5,
    edition: 'Edycja #5',
    dateLabel: 'Grudzień 2024',
    dateRange: '14–15 Grudnia 2024',
    server: 'OLD',
    format: 'Tura otwarcia BO1 → Ćwierćfinały BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 11,
    guilds: [
      'MDM', 'StareDziady', 'wtfdmg', 'ConseQuence', 'Eternals', 'AirFrajer',
      'ButyWiatru', 'Malze', 'FamilyTeam', 'MieczaAura', 'Hunters',
    ],
    winner: 'ButyWiatru',
    finalist: 'Hunters',
    finalScore: '3:0',
    finalResult: '100:58 / 100:77 / 100:58',
    semifinalists: ['ButyWiatru', 'Malze', 'wtfdmg', 'Hunters'],
    matches: [
      { nr: 1,  round: 'Tura otwarcia', teamA: 'MDM',       teamB: 'StareDziady',          score: '48:100',  winner: 'StareDziady', date: '14.12.2024 17:00' },
      { nr: 2,  round: 'Tura otwarcia', teamA: 'wtfdmg',    teamB: 'ConseQuence',          score: '100:11',  winner: 'wtfdmg',      date: '14.12.2024 17:00' },
      { nr: 3,  round: 'Tura otwarcia', teamA: 'Eternals',  teamB: 'AirFrajer',            score: '3:100',   winner: 'AirFrajer',   date: '14.12.2024 17:00' },
      { nr: 4,  round: 'Ćwierćfinał',  teamA: 'ButyWiatru',teamB: 'StareDziady',          score: '100:48',  winner: 'ButyWiatru',  date: '14.12.2024 17:30' },
      { nr: 5,  round: 'Ćwierćfinał',  teamA: 'Malze',     teamB: 'FamilyTeam',           score: '100:29',  winner: 'Malze',       date: '14.12.2024 17:30' },
      { nr: 6,  round: 'Ćwierćfinał',  teamA: 'wtfdmg',    teamB: 'MieczaAura',           score: '100:7',   winner: 'wtfdmg',      date: '14.12.2024 17:30', note: 'MieczaAura grała jako MafiaPuszkuf (problemy techniczne)' },
      { nr: 7,  round: 'Ćwierćfinał',  teamA: 'AirFrajer', teamB: 'Hunters',              score: '79:100',  winner: 'Hunters',     date: '14.12.2024 17:30' },
      { nr: 8,  round: 'Półfinał (BO3)',teamA: 'ButyWiatru',teamB: 'Malze',               score: '2:0 (100:82, 100:78)', winner: 'ButyWiatru', date: '14.12.2024 18:00' },
      { nr: 9,  round: 'Półfinał (BO3)',teamA: 'wtfdmg',    teamB: 'Hunters',              score: '1:2 (39:100, 100:72, 76:100)', winner: 'Hunters', date: '14.12.2024 18:00' },
      { nr: 10, round: '🏆 FINAŁ (BO5)',teamA: 'ButyWiatru',teamB: 'Hunters',              score: '3:0 (100:58, 100:77, 100:58)', winner: 'ButyWiatru', date: '15.12.2024 18:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/10667-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 4 ─── */
  {
    id: 4,
    edition: 'Edycja #4',
    dateLabel: 'Czerwiec 2024',
    dateRange: '22–23 Czerwca 2024',
    server: 'OLD',
    format: 'Ćwierćfinały BO1 (z fazą dogrywki dla przegranych) → Półfinały BO3 → Finał BO5',
    totalGuilds: 7,
    guilds: ['WrogRezimu', 'GloriaVictis', 'Kuciapki', 'SkillTEST', 'TimeToDie', 'ChaosTheory', 'EsportowySen'],
    winner: 'WrogRezimu',
    finalist: 'Kuciapki',
    finalScore: '3:0',
    finalResult: '100:93 / 100:88 / 100:85',
    semifinalists: ['WrogRezimu', 'TimeToDie', 'Kuciapki', 'SkillTEST'],
    matches: [
      { nr: 1, round: 'Ćwierćfinał #1', teamA: 'TimeToDie',    teamB: 'GloriaVictis', score: '100:32',                        winner: 'TimeToDie',   date: '22.06.2024 17:00' },
      { nr: 2, round: 'Ćwierćfinał #2', teamA: 'WrogRezimu',   teamB: 'ChaosTheory',  score: '100:9',                         winner: 'WrogRezimu',  date: '22.06.2024 17:30' },
      { nr: 3, round: 'Ćwierćfinał #3', teamA: 'EsportowySen', teamB: 'SkillTEST',    score: '84:100',                        winner: 'SkillTEST',   date: '22.06.2024 18:00' },
      { nr: 4, round: 'Ćwierćfinał #4', teamA: 'Kuciapki',     teamB: 'EsportowySen', score: '100:52',                        winner: 'Kuciapki',    date: '22.06.2024 18:30', note: 'EsportowySen jako najlepsza z przegranych ćw. #1–#3' },
      { nr: 5, round: 'Półfinał #1 (BO3)', teamA: 'TimeToDie', teamB: 'WrogRezimu',   score: '0:2 (38:100, 36:100)',          winner: 'WrogRezimu',  date: '22.06.2024 19:00' },
      { nr: 6, round: 'Półfinał #2 (BO3)', teamA: 'SkillTEST', teamB: 'Kuciapki',     score: '0:2 (60:100, 42:100)',          winner: 'Kuciapki',    date: '22.06.2024 20:00' },
      { nr: 7, round: '🏆 FINAŁ (BO5)',    teamA: 'WrogRezimu', teamB: 'Kuciapki',     score: '3:0 (100:93, 100:88, 100:85)', winner: 'WrogRezimu',  date: '23.06.2024 18:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/8419-turniej-gildii-lista-walk/',
  } as Tournament,
  /* ─── EDYCJA 3 ─── */
  {
    id: 3,
    edition: 'Edycja #3',
    dateLabel: 'Maj 2024',
    dateRange: '26 Maja 2024',
    server: 'OLD',
    format: 'Round Robin (każdy na każdego) BO1 — gildia z naj. wygranych zwycięzcą',
    totalGuilds: 5,
    guilds: ['Kuciapki', 'SixDays', 'EsportowySen', 'SevenDays', 'Octopus'],
    winner: 'SixDays',
    finalist: 'EsportowySen',
    finalScore: '4:0',
    finalResult: 'Wyniki Round Robin: SixDays 4W-0L | EsportowySen 3W-1L | Kuciapki 2W-2L | Octopus 1W-3L | SevenDays 0W-4L',
    matches: [
      { nr: 1,  round: 'Round Robin', teamA: 'Kuciapki',    teamB: 'SevenDays',    score: '100:14',  winner: 'Kuciapki',    date: '26.05.2024 16:30' },
      { nr: 2,  round: 'Round Robin', teamA: 'SixDays',     teamB: 'EsportowySen', score: '100:59',  winner: 'SixDays',     date: '26.05.2024 16:30' },
      { nr: 3,  round: 'Round Robin', teamA: 'SevenDays',   teamB: 'Octopus',      score: '69:100',  winner: 'Octopus',     date: '26.05.2024 16:30' },
      { nr: 4,  round: 'Round Robin', teamA: 'SixDays',     teamB: 'Kuciapki',     score: '100:99',  winner: 'SixDays',     date: '26.05.2024 17:00', note: 'Najciekawy mecz — wynik 100:99!' },
      { nr: 5,  round: 'Round Robin', teamA: 'EsportowySen',teamB: 'Octopus',      score: '100:42',  winner: 'EsportowySen',date: '26.05.2024 17:00' },
      { nr: 6,  round: 'Round Robin', teamA: 'EsportowySen',teamB: 'SevenDays',    score: '100:35',  winner: 'EsportowySen',date: '26.05.2024 17:30' },
      { nr: 7,  round: 'Round Robin', teamA: 'Octopus',     teamB: 'Kuciapki',     score: '38:100',  winner: 'Kuciapki',    date: '26.05.2024 17:30' },
      { nr: 8,  round: 'Round Robin', teamA: 'EsportowySen',teamB: 'Kuciapki',     score: '100:51',  winner: 'EsportowySen',date: '26.05.2024 18:00' },
      { nr: 9,  round: 'Round Robin', teamA: 'SevenDays',   teamB: 'SixDays',      score: '43:100',  winner: 'SixDays',     date: '26.05.2024 18:00' },
      { nr: 10, round: 'Round Robin', teamA: 'SixDays',     teamB: 'Octopus',      score: '100:14',  winner: 'SixDays',     date: '26.05.2024' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/7955-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 2 ─── */
  {
    id: 2,
    edition: 'Edycja #2',
    dateLabel: 'Kwiecień 2024',
    dateRange: '20–21 Kwietnia 2024',
    server: 'OLD',
    format: 'Bitwa otwarcia BO1 → Ćwierćfinały BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 9,
    guilds: ['Shine', 'SixDays', 'OldBoys', 'Madness', 'PalGume', 'Octopus', 'LionKing', 'Whatever', 'MakeMoreFun'],
    winner: 'OldBoys',
    finalist: 'LionKing',
    finalScore: '3:0',
    finalResult: '100:86 / 100:74 / 100:86',
    semifinalists: ['OldBoys', 'Madness', 'LionKing', 'Whatever'],
    matches: [
      { nr: 1,  round: 'Bitwa otwarcia', teamA: 'Shine',    teamB: 'SixDays',    score: '27:100',   winner: 'SixDays',   date: '20.04.2024 17:30' },
      { nr: 2,  round: 'Ćwierćfinał',   teamA: 'OldBoys',  teamB: 'SixDays',    score: '100:73',   winner: 'OldBoys',   date: '20.04.2024 18:00' },
      { nr: 3,  round: 'Ćwierćfinał',   teamA: 'Madness',  teamB: 'PalGume',    score: '100:73',   winner: 'Madness',   date: '20.04.2024 18:00' },
      { nr: 4,  round: 'Ćwierćfinał',   teamA: 'Octopus',  teamB: 'LionKing',   score: '14:100',   winner: 'LionKing',  date: '20.04.2024 18:00' },
      { nr: 5,  round: 'Ćwierćfinał',   teamA: 'MakeMoreFun',teamB:'Whatever',  score: '15:100',   winner: 'Whatever',  date: '20.04.2024 18:00' },
      { nr: 6,  round: 'Półfinał (BO3)', teamA: 'OldBoys', teamB: 'Madness',    score: '2:0 (100:50, 100:65)', winner: 'OldBoys', date: '20.04.2024 18:30' },
      { nr: 7,  round: 'Półfinał (BO3)', teamA: 'Whatever',teamB: 'LionKing',   score: '1:2 (100:91, 61:100, 84:100)', winner: 'LionKing', date: '20.04.2024 18:30' },
      { nr: 8,  round: '🏆 FINAŁ (BO5)', teamA: 'OldBoys', teamB: 'LionKing',   score: '3:0 (100:86, 100:74, 100:86)', winner: 'OldBoys', date: '21.04.2024 18:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/7110-turniej-gildii-lista-walk/',
  },
  /* ─── EDYCJA 1 ─── */
  {
    id: 1,
    edition: 'Edycja #1',
    dateLabel: 'Marzec 2024',
    dateRange: '9–10 Marca 2024',
    server: 'OLD',
    format: 'Fazy grupowe (A/B/C + D) BO1 → Ćwierćfinały BO1 → Półfinały BO3 → Finał BO5',
    totalGuilds: 14,
    guilds: [
      'Psycha', 'Fairest', 'MaxImu5', 'Berety',         // Grupa A
      'SixDays', 'Champions', 'NewFaces', 'RodzinaKraba', // Grupa B
      'OldBoys', 'TimeToDie', 'Harmony', 'Respect',      // Grupa C
      'NATO', 'Astuteness',                              // Grupa D
    ],
    winner: 'RodzinaKraba',
    finalist: 'OldBoys',
    finalScore: '3:2',
    finalResult: '99:100 / 97:100 / 101:86 / 100:55 / 94:100',
    semifinalists: ['Fairest', 'RodzinaKraba', 'OldBoys', 'TimeToDie'],
    matches: [
      { nr: 1,  round: 'Gr. A runda',   teamA: 'Psycha',      teamB: 'Fairest',     score: '12:100',  winner: 'Fairest',      date: '09.03.2024 18:30' },
      { nr: 2,  round: 'Gr. A runda',   teamA: 'MaxImu5',     teamB: 'Berety',      score: '100:8',   winner: 'MaxImu5',      date: '09.03.2024 18:30' },
      { nr: 3,  round: 'Gr. B runda',   teamA: 'SixDays',     teamB: 'Champions',   score: '101:39',  winner: 'SixDays',      date: '09.03.2024 18:30' },
      { nr: 4,  round: 'Gr. B runda',   teamA: 'NewFaces',    teamB: 'RodzinaKraba',score: '29:100',  winner: 'RodzinaKraba', date: '09.03.2024 18:30' },
      { nr: 5,  round: 'Gr. C runda',   teamA: 'OldBoys',     teamB: 'TimeToDie',   score: '100:52',  winner: 'OldBoys',      date: '09.03.2024 19:00' },
      { nr: 6,  round: 'Gr. C runda',   teamA: 'Harmony',     teamB: 'Respect',     score: '100:10',  winner: 'Harmony',      date: '09.03.2024 19:00' },
      { nr: 7,  round: 'Gr. D runda',   teamA: 'NATO',        teamB: 'Astuteness',  score: '38:100',  winner: 'Astuteness',   date: '09.03.2024 19:00' },
      { nr: 8,  round: 'Ćwierćfinał #1',teamA: 'MaxImu5',    teamB: 'Fairest',     score: '88:100',  winner: 'Fairest',      date: '09.03.2024 19:30' },
      { nr: 9,  round: 'Ćwierćfinał #2',teamA: 'SixDays',    teamB: 'RodzinaKraba',score: '31:100',  winner: 'RodzinaKraba', date: '09.03.2024 19:30' },
      { nr: 10, round: 'Ćwierćfinał #3',teamA: 'Harmony',    teamB: 'OldBoys',     score: '53:100',  winner: 'OldBoys',      date: '09.03.2024 19:30' },
      { nr: 11, round: 'Ćwierćfinał #4',teamA: 'Astuteness', teamB: 'TimeToDie',   score: '13:100',  winner: 'TimeToDie',    date: '09.03.2024 19:30' },
      { nr: 12, round: 'Półfinał #1 (BO3)',teamA: 'Fairest',  teamB: 'RodzinaKraba',score: '0:2 (79:100, 87:100)', winner: 'RodzinaKraba', date: '10.03.2024 19:00' },
      { nr: 13, round: 'Półfinał #2 (BO3)',teamA: 'OldBoys',  teamB: 'TimeToDie',  score: '2:0 (100:35, 100:59)', winner: 'OldBoys', date: '10.03.2024 18:00' },
      { nr: 14, round: '🏆 FINAŁ (BO5)', teamA: 'OldBoys',    teamB: 'RodzinaKraba',score: '2:3 (99:100, 97:100, 101:86, 100:55, 94:100)', winner: 'RodzinaKraba', date: '10.03.2024 20:00' },
    ],
    forumUrl: 'https://forum.pandoramt2.pl/topic/5475-turniej-gildii-lista-walk/',
  },
]

// Hall of champions (deduplicated)
const champions = [
  { guild: 'x6tence',      editions: [9],    color: 'gold' as const },
  { guild: 'EsportowySen', editions: [8],    color: 'gold' as const },
  { guild: 'ChangeLog',    editions: [7],    color: 'gold' as const },
  { guild: 'szmex',        editions: [6],    color: 'gold' as const },
  { guild: 'ButyWiatru',   editions: [5],    color: 'gold' as const },
  { guild: 'WrogRezimu',   editions: [4],    color: 'gold' as const },
  { guild: 'SixDays',      editions: [3],    color: 'gold' as const },
  { guild: 'OldBoys',      editions: [2],    color: 'gold' as const },
  { guild: 'RodzinaKraba', editions: [1],    color: 'gold' as const },
]

// Compute finalist counts for the Top Finalistów strip
const finalistCounts: Record<string, number> = {}
tournaments.forEach(t => {
  if (t.finalist && t.finalist !== '—') {
    finalistCounts[t.finalist] = (finalistCounts[t.finalist] ?? 0) + 1
  }
})

const allTabs = ['Wszystkie', '2026', '2025', '2024'] as const
type TabLabel = typeof allTabs[number]

function MatchRow({ m }: { m: Match }) {
  const isFinal = m.round.includes('FINAŁ')
  return (
    <tr className={`border-b border-pandora-border/15 last:border-0 transition-colors ${isFinal ? 'bg-pandora-gold/[0.04]' : 'hover:bg-pandora-card/30'}`}>
      <td className="px-3 py-2.5 text-pandora-muted text-xs w-8 text-right">{m.nr}</td>
      <td className="px-3 py-2.5 text-[11px] text-pandora-muted/80">{m.round}</td>
      <td className="px-3 py-2.5 text-xs font-semibold text-pandora-text/90">{m.teamA}</td>
      <td className="px-3 py-2.5 text-center text-xs text-pandora-muted">vs</td>
      <td className="px-3 py-2.5 text-xs font-semibold text-pandora-text/90">{m.teamB}</td>
      <td className="px-3 py-2.5 text-center text-xs font-mono text-pandora-muted/80">{m.score}</td>
      <td className={`px-3 py-2.5 text-xs font-bold ${isFinal ? 'text-pandora-gold' : 'text-pandora-green'}`}>
        {m.winner}
      </td>
      {m.note && (
        <td className="px-3 py-2.5 text-[10px] text-pandora-orange/80 italic break-words">{m.note}</td>
      )}
    </tr>
  )
}

function TournamentCard({ t }: { t: Tournament }) {
  const [expanded, setExpanded] = useState(false)
  const hasResults = t.status !== 'no-results'

  return (
    <Card className="mb-6">
      {/* Header row */}
      <div className="flex flex-wrap items-start gap-4 mb-5">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="font-display text-lg font-bold text-pandora-gold">{t.edition}</span>
            <Badge color={t.server === 'S2' ? 'blue' : 'purple'}>{t.server} Serwer</Badge>
            <span className="text-pandora-muted text-xs">{t.dateLabel}</span>
          </div>
          <p className="text-pandora-muted text-xs">{t.dateRange}</p>
        </div>
        {hasResults && (
          <div className="text-right shrink-0">
            <div className="flex items-center gap-1.5 justify-end mb-1">
              <Trophy className="w-4 h-4 text-pandora-gold" />
              <span className="font-display font-bold text-pandora-gold text-base">{t.winner}</span>
            </div>
            <span className="text-pandora-muted text-xs">Wynik finałowy: {t.finalScore}</span>
          </div>
        )}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="bg-pandora-dark/50 rounded-lg px-3 py-2.5">
          <p className="text-[10px] text-pandora-muted uppercase tracking-wide mb-0.5">Format</p>
          <p className="text-xs text-pandora-text/80 leading-snug">{t.format.split('|')[0].trim()}</p>
        </div>
        <div className="bg-pandora-dark/50 rounded-lg px-3 py-2.5">
          <p className="text-[10px] text-pandora-muted uppercase tracking-wide mb-0.5">Gildie</p>
          <p className="text-sm font-bold text-pandora-gold">{t.totalGuilds}</p>
        </div>
        {hasResults && (
          <>
            <div className="bg-pandora-dark/50 rounded-lg px-3 py-2.5">
              <p className="text-[10px] text-pandora-muted uppercase tracking-wide mb-0.5">Finalista</p>
              <p className="text-xs font-semibold text-pandora-text/90">{t.finalist}</p>
            </div>
            <div className="bg-pandora-dark/50 rounded-lg px-3 py-2.5">
              <p className="text-[10px] text-pandora-muted uppercase tracking-wide mb-0.5">Wynik finału</p>
              <p className="text-xs font-mono text-pandora-text/90">{t.finalResult.substring(0, 32)}{t.finalResult.length > 32 ? '…' : ''}</p>
            </div>
          </>
        )}
        {!hasResults && (
          <div className="col-span-2 bg-pandora-orange/5 border border-pandora-orange/15 rounded-lg px-3 py-2.5">
            <p className="text-[10px] text-pandora-orange uppercase tracking-wide mb-0.5">Uwaga</p>
            <p className="text-xs text-pandora-text/70">{t.finalResult}</p>
          </div>
        )}
      </div>

      {/* Guilds */}
      <div className="mb-5">
        <p className="text-[10px] text-pandora-muted uppercase tracking-widest mb-2">Uczestnicy</p>
        <div className="flex flex-wrap gap-1.5">
          {t.guilds.filter(g => g !== 'inne').map(g => (
            <span
              key={g}
              className={`text-[11px] px-2 py-0.5 rounded border font-medium transition-colors
                ${g === t.winner
                  ? 'bg-pandora-gold/12 text-pandora-gold border-pandora-gold/25'
                  : g === t.finalist
                    ? 'bg-pandora-silver/8 text-pandora-text/80 border-pandora-silver/15'
                    : 'bg-pandora-dark/40 text-pandora-muted border-pandora-border/25'}
              `}
            >
              {g === t.winner ? '🏆 ' : g === t.finalist ? '🥈 ' : ''}{g}
            </span>
          ))}
          {t.guilds.includes('inne') && (
            <span className="text-[11px] px-2 py-0.5 rounded border text-pandora-muted/60 border-pandora-border/15 italic">+inne</span>
          )}
        </div>
      </div>

      {/* Expandable matches */}
      {t.matches.length > 0 && (
        <>
          <button
            onClick={() => setExpanded(p => !p)}
            className="flex items-center gap-2 text-pandora-gold/80 hover:text-pandora-gold text-xs font-semibold transition-colors"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {expanded ? 'Ukryj listę walk' : `Pokaż listę walk (${t.matches.length} meczów)`}
          </button>

          {expanded && (
            <div className="mt-4 overflow-x-auto rounded-lg border border-pandora-border/30">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-pandora-dark/60">
                    <th className="px-3 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest w-8">#</th>
                    <th className="px-3 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest">Runda</th>
                    <th className="px-3 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest">Gildia A</th>
                    <th className="px-3 py-2.5 text-center w-6"></th>
                    <th className="px-3 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest">Gildia B</th>
                    <th className="px-3 py-2.5 text-center text-pandora-gold/80 text-[10px] uppercase tracking-widest">Wynik</th>
                    <th className="px-3 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest">Zwycięzca</th>
                  </tr>
                </thead>
                <tbody>
                  {t.matches.map(m => <MatchRow key={m.nr} m={m} />)}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Forum link */}
      <a
        href={t.forumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-pandora-blue/70 hover:text-pandora-blue text-[11px] transition-colors"
      >
        <ExternalLink className="w-3 h-3" />
        Wątek na forum
      </a>
    </Card>
  )
}

export default function TournamentsPage() {
  const [tabIndex, setTabIndex] = useState(0)
  const activeTab = allTabs[tabIndex]

  const filtered = tournaments.filter(t => {
    if (activeTab === 'Wszystkie') return true
    return t.dateLabel.includes(activeTab)
  })

  return (
    <div className="">
      <PageHeader
        title="Turnieje Gildii"
        description="Kompletna historia wszystkich edycji Turnieju Gildii na serwerze PandoraMT2. Każda edycja zawiera pełną listę uczestników, wyniki walk i mistrza turnieju."
        icon={<Trophy className="w-6 h-6" />}
      />

      {/* Hall of Champions */}
      <SectionTitle>Hall of Fame — Mistrzowie Turniejów</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {champions.map((c, idx) => {
          const rank = idx + 1
          const isTop3 = rank <= 3
          return (
            <div
              key={c.guild}
              className={`relative bg-pandora-card/60 border rounded-xl p-4 text-center transition-all card-hover
                ${rank === 1
                  ? 'border-pandora-gold/40 hover:border-pandora-gold/60 shadow-[0_0_18px_-4px_rgba(212,175,55,0.18)]'
                  : isTop3
                    ? 'border-pandora-gold/20 hover:border-pandora-gold/35'
                    : 'border-pandora-border/30 hover:border-pandora-gold/20'}`}
            >
              {/* Rank badge */}
              <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border
                ${rank === 1 ? 'bg-pandora-gold text-pandora-dark border-pandora-gold/80' :
                  rank === 2 ? 'bg-pandora-text/20 text-pandora-text/80 border-pandora-border/40' :
                  rank === 3 ? 'bg-pandora-orange/20 text-pandora-orange border-pandora-orange/30' :
                  'bg-pandora-dark/80 text-pandora-muted border-pandora-border/20'}`}
              >
                {rank}
              </div>
              <div className="text-xl mb-1.5">{rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏆'}</div>
              <p className={`font-display font-bold text-sm leading-tight mb-1
                ${rank === 1 ? 'text-pandora-gold' : 'text-pandora-text/85'}`}>
                {c.guild}
              </p>
              <p className="text-[10px] text-pandora-muted">
                {c.editions.length > 1 ? `Edycje #${c.editions.join(', #')}` : `Edycja #${c.editions[0]}`}
              </p>
              {c.editions.length > 1 && (
                <span className="inline-block mt-1.5 text-[9px] px-1.5 py-0.5 rounded bg-pandora-gold/10 text-pandora-gold border border-pandora-gold/20 font-semibold uppercase tracking-wide">
                  {c.editions.length}× mistrz
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* Top Finalistów strip */}
      {Object.keys(finalistCounts).length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-12 bg-pandora-card/30 border border-pandora-border/25 rounded-xl px-5 py-3">
          <span className="text-[10px] uppercase tracking-widest text-pandora-muted font-semibold mr-1">Wielokrotni finaliści:</span>
          {Object.entries(finalistCounts)
            .filter(([, n]) => n > 1)
            .sort((a, b) => b[1] - a[1])
            .map(([guild, n]) => (
              <span key={guild} className="text-[11px] px-2 py-0.5 rounded border bg-pandora-silver/5 text-pandora-text/80 border-pandora-border/30 font-medium">
                🥈 {guild} <span className="text-pandora-muted">×{n}</span>
              </span>
            ))}
        </div>
      )}

      {/* Summary stats */}
      <SectionTitle>Statystyki Globalne</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Edycje łącznie',  value: `${tournaments.length}`,                    icon: <Trophy className="w-4 h-4" /> },
          { label: 'Różnych gildii',  value: `${new Set(tournaments.flatMap(t => t.guilds)).size}+`, icon: <Shield className="w-4 h-4" /> },
          { label: 'Walki łącznie',   value: `${tournaments.reduce((a, t) => a + t.matches.length, 0)}`,  icon: <Swords className="w-4 h-4" /> },
          { label: 'Lata aktywności', value: '2024–2026',                                 icon: <Trophy className="w-4 h-4" /> },
        ].map(s => (
          <div key={s.label} className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5 hover:border-pandora-gold/20 transition-all group">
            <div className="flex items-center gap-2 mb-2 text-pandora-gold/70 group-hover:text-pandora-gold transition-colors">
              {s.icon}
              <span className="text-[10px] uppercase tracking-widest text-pandora-muted">{s.label}</span>
            </div>
            <p className="font-display text-xl font-bold text-pandora-gold">{s.value}</p>
          </div>
        ))}
      </div>

      <InfoBox type="info">
        Turnieje odbywają się w formie Guild Wars — każdy mecz to <strong>Wojna Gildii</strong> (100 punktów, maks. 10 graczy na stronę). Format <strong>BO1</strong> = pojedyncza walka wyłania zwycięzcę. <strong>BO3</strong> = dwie wygrane awansują. <strong>BO5</strong> = trzy wygrane to zwycięstwo. Finał jest zawsze rozgrywany w formacie BO5.
      </InfoBox>

      {/* Tournament list with tabs */}
      <SectionTitle>Wszystkie Edycje</SectionTitle>
      <TabGroup
        tabs={[...allTabs]}
        activeTab={tabIndex}
        onTabChange={setTabIndex}
      />

      {filtered.map(t => (
        <TournamentCard key={t.id} t={t} />
      ))}

      {filtered.length === 0 && (
        <p className="text-pandora-muted text-center py-12">Brak turniejów dla wybranego roku.</p>
      )}
    </div>
  )
}
