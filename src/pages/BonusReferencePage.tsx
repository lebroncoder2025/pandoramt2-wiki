import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { PageHeader, SectionTitle, SectionDivider, InfoBox, DataTable } from '../components/UI.tsx'
import { bonusTable, bonus67Table } from '../data/serverData.ts'

export default function BonusReferencePage() {
  const [filter, setFilter] = useState<'all' | 'regular' | 'special'>('all')
  const [search, setSearch] = useState('')

  const regular = bonusTable.map(b => ({ name: b.name, value: b.max, type: 'regular' as const }))
  const special = bonus67Table.map(b => ({ name: b.name, value: b.value, type: 'special' as const }))
  const all = [...regular, ...special]

  const filtered = all.filter(b => {
    const matchType = filter === 'all' || b.type === filter
    const matchSearch = b.name.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  const regularRows = regular.map(b => [b.name, b.value])
  const specialRows = special.map(b => [b.name, b.value])

  return (
    <div>
      <PageHeader
        title="Encyklopedia Bonusów"
        description="Kompletna lista wszystkich bonusów dostępnych w grze — zwykłych i specjalnych (+6/+7)."
        icon={<BookOpen className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm"><strong className="text-pandora-gold">Bonusy zwykłe</strong> ({bonusTable.length}) — dostępne z większości źródeł (ekwipunek, kamienie, kostiumy). <strong className="text-pandora-gold">Bonusy specjalne +6/+7</strong> ({bonus67Table.length}) — otrzymywane wyłącznie po ulepszeniu broni/zbroi do +6 lub +7.</p>
      </InfoBox>

      <SectionDivider />

      <SectionTitle>Bonusy Zwykłe</SectionTitle>
      <p className="text-sm text-pandora-muted mb-4">Bonusy dostępne z ekwipunku, kamieni dusz, kostiumów i innych źródeł. Kolumna "Maks." oznacza najwyższą możliwą wartość na jednym przedmiocie.</p>
      <DataTable
        headers={['Nazwa Bonusu', 'Maks. Wartość']}
        rows={regularRows}
        highlightFirst
      />

      <SectionDivider />

      <SectionTitle>Bonusy Specjalne (+6 / +7)</SectionTitle>
      <p className="text-sm text-pandora-muted mb-4">Dodatkowy bonus losowany przy ulepszeniu ekwipunku na poziom +6 lub +7. Możesz wybrać jeden z poniższych.</p>
      <DataTable
        headers={['Nazwa Bonusu', 'Wartość']}
        rows={specialRows}
        highlightFirst
      />

      <SectionDivider />

      <SectionTitle>Wyszukiwarka Bonusów</SectionTitle>
      <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5 mb-6">
        <input
          type="text"
          placeholder="Szukaj bonusu..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-pandora-darker border border-pandora-border/30 rounded-lg text-pandora-text placeholder-pandora-muted text-sm focus:outline-none focus:border-pandora-gold/50"
        />
        <div className="flex flex-wrap gap-2">
          {(['all', 'regular', 'special'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filter === f ? 'bg-pandora-gold text-pandora-darker' : 'bg-pandora-darker border border-pandora-border/30 text-pandora-text hover:border-pandora-gold/40'}`}
            >
              {f === 'all' ? `Wszystkie (${all.length})` : f === 'regular' ? `Zwykłe (${regular.length})` : `Specjalne (${special.length})`}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-pandora-muted text-sm text-center py-8">Brak wyników dla "{search}"</p>
      ) : (
        <DataTable
          headers={['Bonus', 'Wartość', 'Typ']}
          rows={filtered.map(b => [b.name, b.value, b.type === 'regular' ? 'Zwykły' : 'Specjalny +6/+7'])}
          highlightFirst
        />
      )}
    </div>
  )
}


