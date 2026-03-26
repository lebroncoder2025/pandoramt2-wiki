import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'
import { PageHeader, Card, Badge, TabGroup, InfoBox } from '../components/UI.tsx'

type EventType = 'Stały' | 'Losowy' | 'Królestwo'
type EventCategory = 'all' | 'rates' | 'boss' | 'drop' | 'community'

interface GameEvent {
  name: string
  icon: string
  category: Exclude<EventCategory, 'all'>
  type: EventType
  timeLimited: boolean
  trigger: string
  description: string
}

const events: GameEvent[] = [
  {
    name: 'Raty Serwerowe',
    icon: '📈',
    category: 'rates',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: [Rodzaj] wzrosło o [Wartość]%.',
    description: 'Wartość jednego lub wielu z poniższych: Szansa na drop przedmiotów, Pozyskiwanie Yang oraz Sztabek Złota, Ilość zdobywanego doświadczenia — zostaje zwiększona o dany procent. Przykładowo komunikat "Doświadczenie wzrosło o 50%" oznacza, że wartość wynosi 150% (100+50) standardowej.',
  },
  {
    name: 'Event Rybacki',
    icon: '🐟',
    category: 'community',
    type: 'Królestwo',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Wydarzenie Rybackie jest aktualnie aktywne! Gdy aktywny przez królestwo: Rybacy z Twojego Królestwa aktywowali prywatne Manwoo, korzystaj póki możesz!',
    description: 'Możliwy do odpalenia przez królestwo, które uzbiera 1000 sztuk Pirackiej Monety w kufrze przy swoim rybaku na 1 godzinę. Gdy event jest aktywny, szansa na wyłowienie Skrzyni Rybaka zostaje zwiększona.',
  },
  {
    name: 'Event Górniczy',
    icon: '⛏️',
    category: 'community',
    type: 'Królestwo',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Wydarzenie Górnicze jest aktualnie aktywne! Gdy aktywny przez królestwo: Górnicy z Twojego Królestwa aktywowali prywatne Wydarzenie Górnicze, korzystaj póki możesz!',
    description: 'Możliwy do odpalenia przez królestwo, które uzbiera 1000 sztuk Tajemniczego Kryształu w ołtarzu w swoim M1 na 1 godzinę. Gdy event jest aktywny, szansa na wydobycie Skrzyni Górnika zostaje zwiększona.',
  },

  {
    name: 'Podwójne Bossy',
    icon: '💀',
    category: 'boss',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Wydarzenie odradzających się Bossów jest aktualnie aktywne!',
    description: 'Gdy event jest aktywny, gracze po zabiciu bossa mają 25% szansę na jego ponowny respawn. Dotyczy tylko bossów nie znajdujących się na dungeonach.',
  },
  {
    name: 'Podwójni Władcy',
    icon: '👑',
    category: 'boss',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Wydarzenie odradzających się Władców jest aktualnie aktywne!',
    description: 'Gdy event jest aktywny, gracze po zabiciu bossa dungeonu (władcy) mają 25% szansę na jego ponowny respawn. Dotyczy tylko bossów znajdujących się na dungeonach.',
  },
  {
    name: 'Loteria Tombola',
    icon: '🎰',
    category: 'drop',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Drop Kuponów na Tombolę jest aktualnie aktywny!',
    description: 'Gdy event jest aktywny, gracze mogą uzyskać z Metinów, Bossów oraz Władców dungeonów Kupony na Loterię. Kupon I: Metiny lv. 5–80. Kupon II: Metiny lv. 85–175, Bossy mapowe (poza Królową Pająków), Umarły Rozpruwacz. Kupon III: Minotaur, Władcy (poza Umarłym Rozpruwaczem).',
  },
  {
    name: 'Drop Szkatułek Blasku Księżyca',
    icon: '🌙',
    category: 'drop',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Drop Szkatułek Blasku Księżyca jest aktualnie aktywny!',
    description: 'Gracze mogą uzyskać z potworów Szkatułki Blasku Księżyca. Na mapach poniżej 110 poziomu szansa nie działa, gdy różnica poziomu między graczem a potworem przekracza 15. Szkatułki nie dropią na dungeonach.',
  },
  {
    name: 'Drop Heksagonalnych Szkatułek',
    icon: '📦',
    category: 'drop',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Drop Heksagonalnych Szkatułek jest aktualnie aktywny!',
    description: 'Gracze mogą uzyskać z potworów Heksagonalną Szkatułkę. Na mapach poniżej 110 poziomu szansa nie działa, gdy różnica poziomu między graczem a potworem przekracza 15. Szkatułki nie dropią na dungeonach.',
  },
  {
    name: 'Owocowe Szaleństwo',
    icon: '🍎',
    category: 'drop',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Owocowego Szaleństwa zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Owocowego Szaleństwa jest aktualnie aktywne!',
    description: 'Gracze mają za zadanie przeszukać wszystkie miasta (M1 i M2) na wszystkich kanałach i odnaleźć ukryte w losowych miejscach Owoce Życia różnego stopnia. Wystarczy podejść i kliknąć. Na czacie globalnym publikowany jest komunikat o zebraniu z dokładnością do kanału i mapy. Owoce odrastają w losowych miejscach.',
  },
  {
    name: 'Mandarynkowy Szał',
    icon: '🍊',
    category: 'drop',
    type: 'Stały',
    timeLimited: true,
    trigger: 'Komunikat po wejściu na mapę: Mandarynkowy Szał jest aktualnie aktywny!',
    description: 'Gracze mogą uzyskać z potworów Mistyczną Mandarynkę. Na mapach poniżej 110 poziomu szansa nie działa, gdy różnica poziomu przekracza 15. Mandarynki nie dropią na dungeonach.',
  },
  {
    name: 'Złota Żabokalipsa',
    icon: '🐸',
    category: 'drop',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Złotej Żabokalipsy zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Złotej Żabokalipsy jest aktualnie aktywne!',
    description: 'Gracze mają za zadanie przeszukać miasta (M1 i M2) na wszystkich kanałach i zniszczyć Złote Żaby oraz Prawdziwe Złote Żaby respione w losowych miejscach. Na czacie globalnym komunikat o zniszczeniu. Żaby odradzają się w losowych miejscach.',
  },
  {
    name: 'Cesarskie Mandarynki',
    icon: '🍊',
    category: 'drop',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Cesarskich Mandarynek zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Cesarskich Mandarynek jest aktualnie aktywne!',
    description: 'Gracze mają za zadanie przeszukać wszystkie expowiska (powyżej Atlantydy V1 włącznie) na wszystkich kanałach i zniszczyć Mandarynki w losowych miejscach. Na czacie globalnym komunikat o zniszczeniu. Mandarynki odradzają się.',
  },
  {
    name: 'Skrzynie Expowisk',
    icon: '🗝️',
    category: 'drop',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Skrzyni Expowisk zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Skrzyni Expowisk jest aktualnie aktywne!',
    description: 'Gracze otwierają Skrzynie Expowisk na początku każdego expowiska (powyżej Atlantydy V1 włącznie) na wszystkich kanałach za pomocą specjalnego Klucza dropiącego z potworów. Na mapach poniżej 110 poziomu szansa nie działa, gdy różnica poziomów przekracza 15.',
  },
  {
    name: 'Cesarski Pościg',
    icon: '🏃',
    category: 'drop',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Cesarskiego Pościgu zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Cesarskiego Pościgu jest aktualnie aktywne!',
    description: 'Gracze mają za zadanie przeszukać wszystkie expowiska (powyżej Atlantydy V1 włącznie) na wszystkich kanałach i zabijać uciekających w losowych kierunkach Najmanów. Odradzają się w losowych miejscach.',
  },
  {
    name: 'Kosmiczna Inwazja',
    icon: '🛸',
    category: 'community',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Kosmicznej Inwazji zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Kosmicznej Inwazji jest aktualnie aktywne!',
    description: 'Gracze zabijają Ufoludków na expowiskach (powyżej Atlantydy V1 włącznie) na wszystkich kanałach. Drop oddają Organizatorowi Wydarzeń w M1. Gdy gracze kolektywnie nazbierają 100 000, aktywowane zostają raty na cały dzień.',
  },
  {
    name: 'Kosmiczne Jaja',
    icon: '🥚',
    category: 'community',
    type: 'Losowy',
    timeLimited: true,
    trigger: 'Komunikat: Wydarzenie Kosmicznych Jaj zostało właśnie aktywowane! / Komunikat po wejściu na mapę: Wydarzenie Kosmicznych Jaj jest aktualnie aktywne!',
    description: 'Gracze zabijają Kosmiczne Jaja na expowiskach (powyżej Atlantydy V1 włącznie) na wszystkich kanałach. Po pokonaniu jaj z ich szczątków wyskakują Kosmiczni Najeźdzcy, których również należy zabić.',
  },
]

const categories = [
  { key: 'all' as EventCategory, label: 'Wszystkie' },
  { key: 'rates' as EventCategory, label: 'Raty' },
  { key: 'boss' as EventCategory, label: 'Bossy & Metiny' },
  { key: 'drop' as EventCategory, label: 'Drop & Szkatułki' },
  { key: 'community' as EventCategory, label: 'Społeczność' },
]

const typeColors: Record<EventType, 'gold' | 'green' | 'blue' | 'purple' | 'orange' | 'red'> = {
  'Stały': 'green',
  'Losowy': 'orange',
  'Królestwo': 'blue',
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all')
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const filteredEvents = activeCategory === 'all'
    ? events
    : events.filter(e => e.category === activeCategory)

  return (
    <div className="max-w-5xl mx-auto space-y-14">
      <PageHeader
        title="Eventy Serwerowe"
        description="Oficjalny spis wszystkich eventów na PandoraMT2 — raty, bossy, drop i eventy społecznościowe."
        icon={<Calendar className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm leading-relaxed">
          Wszystkie informacje pochodzą z oficjalnego <a href="https://forum.pandoramt2.pl/topic/484-spis-event%C3%B3w/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline font-semibold">Spisu Eventów</a> na forum PandoraMT2.
          Śledź ogłoszenia na <a href="https://forum.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline">forum</a> i{' '}
          <a href="https://discord.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline">Discordzie</a>, aby nie przegapić żadnego eventu.
        </p>
      </InfoBox>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { value: events.length, label: 'Eventów', color: 'text-pandora-gold' },
          { value: events.filter(e => e.type === 'Stały').length, label: 'Stałych', color: 'text-pandora-green' },
          { value: events.filter(e => e.type === 'Losowy').length, label: 'Losowych', color: 'text-pandora-orange' },
          { value: events.filter(e => e.type === 'Królestwo').length, label: 'Królestwa', color: 'text-pandora-blue' },
        ].map(s => (
          <div key={s.label} className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-7 text-center hover:border-pandora-border/60 transition-colors">
            <div className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mt-3 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <TabGroup
        tabs={categories.map(c => c.label)}
        activeTab={categories.findIndex(c => c.key === activeCategory)}
        onTabChange={(i) => setActiveCategory(categories[i].key)}
      />

      {/* Events List */}
      <div className="space-y-7">
        {filteredEvents.map(event => {
          const isExpanded = expandedEvent === event.name
          return (
            <Card key={event.name} className="cursor-pointer group" onClick={() => setExpandedEvent(isExpanded ? null : event.name)} aria-expanded={isExpanded}>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-pandora-dark/60 border border-pandora-border/40 flex items-center justify-center text-xl shrink-0 group-hover:border-pandora-gold/30 transition-all">
                  {event.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <h3 className="font-display text-base font-bold text-pandora-text/85 group-hover:text-pandora-gold transition-colors">{event.name}</h3>
                    <Badge color={typeColors[event.type]}>{event.type}</Badge>
                    <Badge color={event.timeLimited ? 'gold' : 'purple'}>
                      {event.timeLimited ? 'Ograniczony czasowo' : 'Bez limitu czasu'}
                    </Badge>
                  </div>
                  <p className="text-[13px] text-pandora-muted/60 leading-relaxed line-clamp-2">{event.description}</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-pandora-muted shrink-0 mt-1 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
              </div>

              {/* Expanded Details */}
              <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-pandora-border/40 pt-5 space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-pandora-gold/80 uppercase tracking-widest mb-2">Komunikat w grze</h4>
                    <p className="text-[13px] text-pandora-muted/60 bg-pandora-dark/30 rounded-lg p-3.5 border border-pandora-border/20 italic leading-relaxed">{event.trigger}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-pandora-gold/80 uppercase tracking-widest mb-2">Opis</h4>
                    <p className="text-[13px] text-pandora-text/85 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Legend */}
      <Card>
        <h3 className="text-sm font-semibold text-pandora-text/85 mb-6">Legenda Typów Eventów</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { type: 'Stały', color: 'green' as const, desc: 'Aktywowane regularnie przez administrację' },
            { type: 'Losowy', color: 'orange' as const, desc: 'Aktywowane losowo, ogłaszane na czacie' },
            { type: 'Królestwo', color: 'blue' as const, desc: 'Aktywowane przez graczy królestwa' },
          ].map(item => (
            <div key={item.type} className="flex flex-col gap-3 p-5 rounded-xl bg-pandora-dark/30 border border-pandora-border/20">
              <Badge color={item.color}>{item.type}</Badge>
              <span className="text-[13px] text-pandora-muted/60 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
