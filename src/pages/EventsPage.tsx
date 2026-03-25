import { useState } from 'react'
import { Calendar, Gift } from 'lucide-react'
import { PageHeader, Card, Badge, TabGroup, InfoBox } from '../components/UI.tsx'

type EventCategory = 'all' | 'rates' | 'boss' | 'drop' | 'community' | 'special'

interface GameEvent {
  name: string
  icon: string
  category: EventCategory
  type: 'Stały' | 'Losowy' | 'Królestwo' | 'Community' | 'Sezonowy'
  description: string
  details: string[]
  rewards?: string[]
  color: 'gold' | 'green' | 'blue' | 'purple' | 'orange' | 'red'
}

const events: GameEvent[] = [
  {
    name: 'Raty Serwerowe',
    icon: '📈',
    category: 'rates',
    type: 'Stały',
    description: 'Regularne zwiększenie rat doświadczenia, dropu i yang na serwerze. Aktywowane przez administrację.',
    details: [
      'Zwiększone raty EXP — szybsze levelowanie',
      'Zwiększone raty DROP — więcej przedmiotów z potworów',
      'Zwiększone raty YANG — więcej złota',
      'Informacja o aktualnych ratach na stronie głównej serwera',
    ],
    color: 'green',
  },
  {
    name: 'Event Rybacki',
    icon: '🐟',
    category: 'community',
    type: 'Królestwo',
    description: 'Event aktywowany przez królestwo. Łowienie ryb przez 1 godzinę z nagrodą 1000 Pirackich Monet.',
    details: [
      'Aktywowany przez królestwo (wymagana aktywacja przez władcę)',
      'Czas trwania: 1 godzina',
      'Nagroda: 1000 Pirackich Monet',
      'Wymaga posiadania wędki i przynęty',
    ],
    rewards: ['1000 Pirackich Monet', 'Rzadkie ryby', 'Owoce Morza'],
    color: 'blue',
  },
  {
    name: 'Event Górniczy',
    icon: '⛏️',
    category: 'community',
    type: 'Królestwo',
    description: 'Event aktywowany przez królestwo. Wydobywanie rudy przez określony czas z nagrodą 1000 kryształów.',
    details: [
      'Aktywowany przez królestwo (wymagana aktywacja przez władcę)',
      'Nagroda: 1000 Tajemniczych Kryształów',
      'Wymaga posiadania kilofa',
      'Zwiększona szansa na rzadkie kamienie',
    ],
    rewards: ['1000 Tajemniczych Kryształów', 'Rzadkie rudy', 'Sztabki Złota'],
    color: 'orange',
  },
  {
    name: 'Deszcz Metinów',
    icon: '🌧️',
    category: 'boss',
    type: 'Losowy',
    description: 'Niezliczone metiny pojawiają się na wybranej mapie. Ogromna ilość dropu i doświadczenia.',
    details: [
      'Losowo aktywowany na wybranych mapach',
      'Duża ilość metinów pojawiających się jednocześnie',
      'Zwiększony drop z metinów podczas eventu',
      'Ograniczony czas trwania — kto szybszy, ten lepszy',
    ],
    rewards: ['Kamienie Dusz', 'Yang', 'Rzadkie przedmioty z metinów'],
    color: 'purple',
  },
  {
    name: 'Zuo',
    icon: '👹',
    category: 'boss',
    type: 'Losowy',
    description: 'Kombinacja eventów — pojawiają się Metiny, Bossy i Władcy jednocześnie.',
    details: [
      'Połączenie wielu eventów boss w jeden wielki event',
      'Metiny + Bossy + Władcy na raz',
      'Jeden z najbardziej dochodowych eventów',
      'Wymaga dobrego ekwipunku i drużyny',
    ],
    rewards: ['Legendarne przedmioty', 'Kamienie Dusz', 'Ogromne ilości Yang'],
    color: 'red',
  },
  {
    name: 'Podwójne Bossy',
    icon: '💀',
    category: 'boss',
    type: 'Losowy',
    description: '25% szansa na ponowne pojawienie się bossa zaraz po zabiciu. Podwójne nagrody!',
    details: [
      '25% szansa na natychmiastowy respawn bossa',
      'Dotyczy wszystkich bossów na mapach',
      'Podwójny drop z ponownie zabitego bossa',
      'Idealny moment na farmienie rzadkich itemów',
    ],
    color: 'red',
  },
  {
    name: 'Podwójni Władcy',
    icon: '👑',
    category: 'boss',
    type: 'Losowy',
    description: '25% szansa na ponowne pojawienie się bossa dungeonowego po zabiciu.',
    details: [
      '25% szansa na natychmiastowy respawn bossa w dungeonie',
      'Dotyczy wszystkich dungeonów',
      'Podwójne nagrody z end-bossów',
      'Stackuje się z innymi bonusami',
    ],
    color: 'purple',
  },
  {
    name: 'Loteria Tombola',
    icon: '🎰',
    category: 'special',
    type: 'Sezonowy',
    description: 'System loterii z trzema poziomami kuponów. Wymień kupony na cenne nagrody.',
    details: [
      'Trzy poziomy kuponów (Brązowy, Srebrny, Złoty)',
      'Kupony zdobywane z potworów i eventów',
      'Nagrody od mikstur po legendarne przedmioty',
      'Wymiana u NPC Tomboli w mieście',
    ],
    rewards: ['Kupony Brązowe → podstawowe nagrody', 'Kupony Srebrne → średnie nagrody', 'Kupony Złote → najlepsze nagrody'],
    color: 'gold',
  },
  {
    name: 'Drop Szkatułek Blasku Księżyca',
    icon: '🌙',
    category: 'drop',
    type: 'Losowy',
    description: 'Z potworów zaczynają padać Szkatułki Blasku Księżyca z cennymi przedmiotami.',
    details: [
      'Szkatułki dropią z potworów na wybranych mapach',
      'Zawierają losowe cenne przedmioty',
      'Ograniczony czas eventu',
      'Im silniejszy potwór, tym większa szansa na drop',
    ],
    color: 'blue',
  },
  {
    name: 'Heksagonalne Szkatułki',
    icon: '📦',
    category: 'drop',
    type: 'Losowy',
    description: 'Specjalna odmiana szkatułek z unikalnymi przedmiotami wewnątrz.',
    details: [
      'Odmiana szkatułek z lepszym lootem',
      'Zawierają heksagonalne kamienie i przedmioty',
      'Trudniejsze do zdobycia niż zwykłe szkatułki',
    ],
    color: 'purple',
  },
  {
    name: 'Owocowe Szaleństwo',
    icon: '🍎',
    category: 'drop',
    type: 'Sezonowy',
    description: 'Owoce Życia pojawiają się w miastach. Zbieraj je, aby uzyskać tymczasowe bonusy.',
    details: [
      'Owoce Życia spawnują się w miastach',
      'Zbieranie daje tymczasowe bonusy (EXP, HP, Siła)',
      'Każdy owoc daje inny bonus',
      'Event trwa kilka godzin',
    ],
    rewards: ['Owoce Życia', 'Tymczasowe bonusy', 'Specjalne efekty'],
    color: 'green',
  },
  {
    name: 'Mandarynkowy Szał',
    icon: '🍊',
    category: 'drop',
    type: 'Sezonowy',
    description: 'Mandarynki z potworów! Zbierz dużo, aby wymienić na specjalne nagrody.',
    details: [
      'Mandarynki dropią z potworów',
      'Wymienialne u specjalnego NPC',
      'Im więcej zbierzesz, tym lepsze nagrody',
    ],
    color: 'orange',
  },
  {
    name: 'Złota Żabokalipsa',
    icon: '🐸',
    category: 'special',
    type: 'Losowy',
    description: 'Złote żaby pojawiają się na mapach. Zabij je i zdobądź yang oraz cenne przedmioty!',
    details: [
      'Złote żaby spawnują się losowo na mapach',
      'Dropią duże ilości yang',
      'Szansa na rzadkie przedmioty',
      'Ograniczony czas trwania',
    ],
    rewards: ['Duże ilości Yang', 'Złote przedmioty', 'Kamienie ulepszenia'],
    color: 'gold',
  },
  {
    name: 'Cesarskie Mandarynki',
    icon: '👑',
    category: 'drop',
    type: 'Sezonowy',
    description: 'Ulepszona wersja mandarynkowego eventu z lepszymi nagrodami cesarskimi.',
    details: [
      'Cesarskie Mandarynki — ulepszona wersja',
      'Dropiją z silniejszych potworów',
      'Wymienialne na cesarskie przedmioty u NPC',
    ],
    color: 'gold',
  },
  {
    name: 'Skrzynie Expowisk',
    icon: '📦',
    category: 'drop',
    type: 'Losowy',
    description: 'Skrzynie pełne bonusów doświadczenia. Otwórz je, aby uzyskać boost EXP.',
    details: [
      'Skrzynie z bonusami EXP',
      'Dropią z potworów podczas eventu',
      'Różne poziomy boostu doświadczenia',
      'Stackują się z innymi bonusami',
    ],
    rewards: ['EXP Boost x2', 'EXP Boost x3', 'Rzadkie scrolle EXP'],
    color: 'blue',
  },
  {
    name: 'Cesarski Pościg',
    icon: '🏃',
    category: 'special',
    type: 'Losowy',
    description: 'Ścigaj NPC Najmena po mapie! Kto go złapie, dostaje cesarską nagrodę.',
    details: [
      'NPC Najmen pojawia się i ucieka po mapie',
      'Gracze muszą go dogonić i "złapać"',
      'Nagroda dla pierwszego gracza',
      'Dynamiczny event wymagający szybkości',
    ],
    rewards: ['Cesarskie przedmioty', 'Złoto', 'Unikalne nagrody'],
    color: 'gold',
  },
  {
    name: 'Kosmiczna Inwazja',
    icon: '🚀',
    category: 'community',
    type: 'Community',
    description: 'Event społecznościowy — całe serwer zbiera 100 000 przedmiotów, a w zamian wszyscy dostają zwiększone raty.',
    details: [
      'Całe serwer wspólnie zbiera przedmioty',
      'Cel: 100 000 przedmiotów łącznie',
      'Po osiągnięciu celu — raty dla WSZYSTKICH graczy',
      'Integruje społeczność we wspólnym celu',
    ],
    rewards: ['Zwiększone raty EXP/Drop dla całego serwera', 'Bonusowe nagrody za wkład'],
    color: 'purple',
  },
  {
    name: 'Kosmiczne Jaja',
    icon: '🥚',
    category: 'special',
    type: 'Sezonowy',
    description: 'Kosmiczne Jaja pojawiają się na mapach. Zbieraj je i otwieraj dla kosmicznych nagród.',
    details: [
      'Kosmiczne Jaja spawnują się losowo',
      'Zbieraj i otwieraj u NPC',
      'Losowe nagrody — od zwykłych po legendarne',
      'Powiązane z eventem Kosmiczna Inwazja',
    ],
    rewards: ['Kosmiczne przedmioty', 'Kamienie Dusz', 'Kostiumy'],
    color: 'blue',
  },
]

const categories = [
  { key: 'all' as EventCategory, label: 'Wszystkie' },
  { key: 'rates' as EventCategory, label: 'Raty' },
  { key: 'boss' as EventCategory, label: 'Bossy' },
  { key: 'drop' as EventCategory, label: 'Drop' },
  { key: 'community' as EventCategory, label: 'Społeczność' },
  { key: 'special' as EventCategory, label: 'Specjalne' },
]

const typeColors: Record<string, 'gold' | 'green' | 'blue' | 'purple' | 'orange' | 'red'> = {
  'Stały': 'green',
  'Losowy': 'orange',
  'Królestwo': 'blue',
  'Community': 'purple',
  'Sezonowy': 'red',
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all')
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const filteredEvents = activeCategory === 'all'
    ? events
    : events.filter(e => e.category === activeCategory)

  return (
    <div className="space-y-8">
      <PageHeader
        title="Eventy Serwerowe"
        description="Kompletna lista wszystkich eventów na PandoraMT2 — od stałych rat, przez losowe deszcze metinów po community eventy."
        icon={<Calendar className="w-8 h-8" />}
      />

      <InfoBox type="tip">
        <p className="text-sm leading-relaxed">
          <strong>Wskazówka:</strong> Śledź ogłoszenia na <a href="https://forum.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline">forum</a> i 
          <a href="https://discord.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline"> Discordzie</a>, 
          aby nie przegapić żadnego eventu. Większość eventów jest ogłaszana z wyprzedzeniem!
        </p>
      </InfoBox>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-pandora-card border border-pandora-border rounded-2xl p-5 text-center">
          <div className="text-3xl font-display font-black text-pandora-gold">{events.length}</div>
          <div className="text-xs text-pandora-muted uppercase tracking-wider mt-1 font-semibold">Eventów</div>
        </div>
        <div className="bg-pandora-card border border-pandora-border rounded-2xl p-5 text-center">
          <div className="text-3xl font-display font-black text-pandora-green">{events.filter(e => e.type === 'Stały').length}</div>
          <div className="text-xs text-pandora-muted uppercase tracking-wider mt-1 font-semibold">Stałych</div>
        </div>
        <div className="bg-pandora-card border border-pandora-border rounded-2xl p-5 text-center">
          <div className="text-3xl font-display font-black text-pandora-orange">{events.filter(e => e.type === 'Losowy').length}</div>
          <div className="text-xs text-pandora-muted uppercase tracking-wider mt-1 font-semibold">Losowych</div>
        </div>
        <div className="bg-pandora-card border border-pandora-border rounded-2xl p-5 text-center">
          <div className="text-3xl font-display font-black text-pandora-purple">{events.filter(e => e.type === 'Community' || e.type === 'Królestwo').length}</div>
          <div className="text-xs text-pandora-muted uppercase tracking-wider mt-1 font-semibold">Community</div>
        </div>
      </div>

      {/* Category Filter */}
      <TabGroup
        tabs={categories.map(c => c.label)}
        activeTab={categories.findIndex(c => c.key === activeCategory)}
        onTabChange={(i) => setActiveCategory(categories[i].key)}
      />

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.name} className="cursor-pointer group" onClick={() => setExpandedEvent(expandedEvent === event.name ? null : event.name)}>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-pandora-dark border border-pandora-border flex items-center justify-center text-3xl shrink-0 group-hover:border-pandora-gold/40 group-hover:scale-105 transition-all">
                {event.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="font-display text-lg font-bold text-pandora-text group-hover:text-pandora-gold transition-colors">{event.name}</h3>
                  <Badge color={typeColors[event.type]}>{event.type}</Badge>
                </div>
                <p className="text-sm text-pandora-muted leading-relaxed">{event.description}</p>
              </div>
            </div>
            
            {/* Expandable Details */}
            <div className={`overflow-hidden transition-all duration-300 ${expandedEvent === event.name ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-pandora-border/50 pt-5 space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-pandora-gold-light uppercase tracking-wider mb-3">Szczegóły</h4>
                  <ul className="space-y-2">
                    {event.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-pandora-muted">
                        <span className="text-pandora-gold mt-0.5">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {event.rewards && (
                  <div>
                    <h4 className="text-sm font-bold text-pandora-gold-light uppercase tracking-wider mb-3">Nagrody</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.rewards.map((r, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pandora-dark/60 border border-pandora-border/50 text-xs font-medium text-pandora-text">
                          <Gift className="w-3.5 h-3.5 text-pandora-gold" />
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card>
        <h3 className="font-display text-lg font-bold text-pandora-gold mb-5">Legenda Typów Eventów</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { type: 'Stały', color: 'green' as const, desc: 'Aktywne regularnie lub cały czas' },
            { type: 'Losowy', color: 'orange' as const, desc: 'Aktywowane losowo przez administrację' },
            { type: 'Królestwo', color: 'blue' as const, desc: 'Wymagają aktywacji przez władcę królestwa' },
            { type: 'Community', color: 'purple' as const, desc: 'Wymagają wspólnego wysiłku społeczności' },
            { type: 'Sezonowy', color: 'red' as const, desc: 'Dostępne w określonych okresach/sezonach' },
          ].map(item => (
            <div key={item.type} className="flex items-center gap-3 p-3 rounded-xl bg-pandora-dark/40">
              <Badge color={item.color}>{item.type}</Badge>
              <span className="text-xs text-pandora-muted">{item.desc}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
