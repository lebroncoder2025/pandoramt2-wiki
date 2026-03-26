import { useState } from 'react'
import { bonusTable, bonus67Table } from '../data/serverData'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/SectionDivider'
import Card from '../components/Card'
import InfoBox from '../components/InfoBox'

export default function BonusReferncePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'regular' | 'special'>('all')

  const regularBonuses = Object.entries(bonusTable).map(([name, value]) => ({
    name,
    value,
    type: 'regular',
  }))

  const specialBonuses = Object.entries(bonus67Table).map(([name, value]) => ({
    name,
    value,
    type: 'special',
  }))

  const allBonuses = [...regularBonuses, ...specialBonuses]

  const filteredBonuses = allBonuses.filter(bonus => {
    const matchesSearch = bonus.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || bonus.type === selectedFilter
    return matchesSearch && matchesFilter
  })

  const categorizeBonus = (name: string) => {
    if (name.includes('Attack')) return '⚔️ Atak'
    if (name.includes('Defense') || name.includes('Defence')) return '🛡️ Obrona'
    if (name.includes('HP')) return '❤️ Życie'
    if (name.includes('Prayer')) return '📿 Modlitwa'
    if (name.includes('Critical')) return '💥 Krytyk'
    if (name.includes('Penetrate')) return '🔫 Przebicie'
    if (name.includes('Parry')) return '⚡ Parowanie'
    if (name.includes('Block')) return '🛡️ Blokada'
    if (name.includes('Speed')) return '💨 Prędkość'
    if (name.includes('Resist')) return '⚔️ Opór'
    if (name.includes('Poison')) return '☠️ Trucizna'
    if (name.includes('Bleeding')) return '💉 Krwawienie'
    if (name.includes('Curse')) return '😈 Klątwa'
    if (name.includes('Slow')) return '❄️ Spowolnienie'
    if (name.includes('Fire')) return '🔥 Ogień'
    if (name.includes('Cold')) return '❄️ Zimno'
    if (name.includes('Lightning')) return '⚡ Błysk'
    if (name.includes('Magic')) return '✨ Magia'
    return '📊 Inne'
  }

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Encyklopedia Bonusów" 
        description="Pełna referenca wszystkich dostępnych bonusów w grze - od podstawowych statystyk po specjalne efekty"
      />

      {/* Intro */}
      <section className="space-y-4">
        <Card>
          <p className="text-pandora-text/85">
            Bonusy to modyfikatory, które wpływają na statystyki Twojej postaci. Mogą pochodzić z ekwipunku, kostiumów, kamieni dusz, zwierzaków i wielu innych źródeł.
            Poniżej znajdziesz kompletną bazę wszystkich bonusów dostępnych w grze.
          </p>
        </Card>

        <InfoBox 
          title="📋 Typy Bonusów"
          content="Zwykłe bonusy (23) pochodzą z większości źródeł. Specjalne bonusy +6/+7 (10) są dostępne tylko na wysokich poziomach wzmocnienia ekwipunku."
        />
      </section>

      <SectionDivider />

      {/* Search and filters */}
      <section className="space-y-4">
        <SectionTitle>Wyszukaj Bonus</SectionTitle>
        
        <Card>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Wpisz nazwę bonusu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-pandora-darker border border-pandora-border/30 rounded-lg text-pandora-text placeholder-pandora-muted focus:outline-none focus:border-pandora-gold/50 focus:ring-1 focus:ring-pandora-gold/30"
            />

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-pandora-gold text-pandora-darker'
                    : 'bg-pandora-darker border border-pandora-border/30 text-pandora-text hover:border-pandora-gold/50'
                }`}
              >
                Wszystkie ({allBonuses.length})
              </button>
              <button
                onClick={() => setSelectedFilter('regular')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'regular'
                    ? 'bg-pandora-gold text-pandora-darker'
                    : 'bg-pandora-darker border border-pandora-border/30 text-pandora-text hover:border-pandora-gold/50'
                }`}
              >
                Zwykłe ({regularBonuses.length})
              </button>
              <button
                onClick={() => setSelectedFilter('special')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'special'
                    ? 'bg-pandora-gold text-pandora-darker'
                    : 'bg-pandora-darker border border-pandora-border/30 text-pandora-text hover:border-pandora-gold/50'
                }`}
              >
                Specjalne +6/+7 ({specialBonuses.length})
              </button>
            </div>

            {searchTerm && (
              <p className="text-sm text-pandora-muted">
                Znaleźliśmy <span className="text-pandora-gold font-semibold">{filteredBonuses.length}</span> wyników
              </p>
            )}
          </div>
        </Card>
      </section>

      <SectionDivider />

      {/* Bonuses list */}
      <section className="space-y-4">
        <SectionTitle>
          {filteredBonuses.length > 0 ? `Bonusy (${filteredBonuses.length})` : 'Brak wyników'}
        </SectionTitle>

        {filteredBonuses.length === 0 ? (
          <Card>
            <p className="text-pandora-text/60 text-center py-8">
              🔍 Nie znaleźliśmy żadnych bonusów pasujących do Twojego wyszukiwania. Spróbuj innego terminu.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBonuses.map((bonus) => (
              <Card key={`${bonus.type}-${bonus.name}`} variant="highlighted">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-pandora-gold text-sm leading-tight">
                        {bonus.name}
                      </h3>
                      <p className="text-xs text-pandora-muted mt-1">
                        {categorizeBonus(bonus.name)}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-lg bg-pandora-gold/10 text-pandora-gold whitespace-nowrap font-semibold">
                      +{bonus.value}
                    </span>
                  </div>
                  
                  <div className="pt-2 border-t border-pandora-border/20">
                    <p className="text-[11px] text-pandora-text/50">
                      {bonus.type === 'special' ? '🔒 Bonus +6/+7' : '📌 Bonus Zwykły'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      <SectionDivider />

      {/* Categories breakdown */}
      <section className="space-y-4">
        <SectionTitle>Kategorie Bonusów</SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from(new Set(allBonuses.map(b => categorizeBonus(b.name)))).map((category) => {
            const bonusesInCategory = allBonuses.filter(b => categorizeBonus(b.name) === category)
            const total = bonusesInCategory.reduce((sum, b) => sum + b.value, 0)
            
            return (
              <Card key={category} variant="highlighted">
                <div className="text-center space-y-2">
                  <div className="text-2xl">{category.split(' ')[0]}</div>
                  <div className="text-sm font-medium text-pandora-text">{category.substring(2)}</div>
                  <div className="text-xs text-pandora-muted">
                    {bonusesInCategory.length} bonus{bonusesInCategory.length !== 1 ? 'ów' : 'u'}
                  </div>
                  <div className="text-xs text-pandora-gold font-semibold">
                    Razem: +{total}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Tips */}
      <section className="space-y-4">
        <SectionTitle>Wskazówki Wyszukiwania</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold text-pandora-gold mb-2">🔍 Szukanie po Słowach Kluczowych</h3>
            <p className="text-sm text-pandora-text/85">
              Wpisz część nazwy bonusu, np. "Attack" aby znaleźć wszystkie bonusy związane z atakiem.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-pandora-gold mb-2">📊 Filtrowanie po Typie</h3>
            <p className="text-sm text-pandora-text/85">
              Wybierz "Zwykłe" aby zobaczyć tylko standardowe bonusy, lub "Specjalne" dla bonusów +6/+7.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-pandora-gold mb-2">📈 Porównywanie Wartości</h3>
            <p className="text-sm text-pandora-text/85">
              Każdy bonus pokazuje swoją maksymalną wartość. Pomocne do planowania buildów i equipu.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-pandora-gold mb-2">🎯 Optymalizacja Ekwipunku</h3>
            <p className="text-sm text-pandora-text/85">
              Używaj tej encyklopedii do wyboru ekwipunku i kamieni dusz dostosowanych do Twojego builda.
            </p>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Legend */}
      <section className="space-y-4">
        <SectionTitle>Legenda</SectionTitle>
        
        <Card>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded bg-pandora-darker text-pandora-text border border-pandora-border/30">📌 Zwykły</span>
              <span className="text-pandora-text/75">Bonus dostępny z większości źródeł (ekwipunek, kamienie, kostiumu itp.)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded bg-pandora-darker text-pandora-text border border-pandora-border/30">🔒 Specjalny</span>
              <span className="text-pandora-text/75">Bonus +6/+7 dostępny tylko na wzmocnionym ekwipunku (poziomi +6 i +7)</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
