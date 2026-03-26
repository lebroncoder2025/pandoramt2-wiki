import { Star } from 'lucide-react'
import { PageHeader, SectionTitle, SectionDivider, InfoBox, DataTable, Badge } from '../components/UI.tsx'
import { equipmentJewelry } from '../data/serverData.ts'

export default function JewelryGuidePage() {
  const types = [...new Set(equipmentJewelry.map(j => j.type))]

  const tierColor = (tier: string): 'gold' | 'purple' | 'blue' | 'green' | 'orange' | 'red' => {
    if (tier === 'Mityczny') return 'gold'
    if (tier === 'Legendarny') return 'orange'
    if (tier === 'Epikowy') return 'purple'
    if (tier === 'Rzadki') return 'blue'
    if (tier === 'Ulepszony') return 'green'
    return 'gold'
  }

  return (
    <div>
      <PageHeader
        title="Biżuteria"
        description="Pierścienie, naszyjniki, bransolety i kolczyki — tiery, poziomy i priorytety."
        icon={<Star className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm">Biżuteria nie daje stałych bonusów — jej moc pochodzi z <strong className="text-pandora-gold">wzmocnienia (+)</strong> i <strong className="text-pandora-gold">kamieni dusz</strong> osadzonych w slotach. Im wyższy tier, tym więcej slotów i lepszy base do wzmocnienia.</p>
      </InfoBox>

      <SectionDivider />

      {types.map(type => {
        const items = equipmentJewelry.filter(j => j.type === type)
        const rows = items.map(j => [
          j.name,
          `lv. ${j.level}`,
          j.tier,
          (j as any).note ?? '—',
        ])
        return (
          <div key={type} className="mb-10">
            <SectionTitle>{type}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {items.map(item => (
                <div key={item.name} className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5 hover:border-pandora-border/60 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="text-sm font-semibold text-pandora-text/90 leading-tight">{item.name}</p>
                    <Badge color={tierColor(item.tier)}>{item.tier}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-pandora-muted">
                    <span>Poziom: <span className="text-pandora-text/80">{item.level}</span></span>
                    {(item as any).note && <span className="text-pandora-gold/70 italic">{(item as any).note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      <SectionDivider />

      <SectionTitle>Kiedy Wymieniać Biżuterię</SectionTitle>
      <div className="space-y-3 mb-10">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">Poziom 40 — Startowa Biżuteria</p>
          <p className="text-sm text-pandora-muted">Biżuteria z Niebiańskich Łez to pierwsza dostępna linia. Zakładaj zaraz po osiągnięciu lv. 40.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">Poziom 85 — Biżuteria Smoka</p>
          <p className="text-sm text-pandora-muted">Znaczny upgrade. Priorytetowo wymień na Biżuterię Smoka kiedy osiągniesz lv. 85.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">Poziom 115 — Diamentowa Biżuteria</p>
          <p className="text-sm text-pandora-muted">Tier rzadki z lepszymi slotami na kamienie. Podstawa dla graczy mid-game.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">Poziom 200 — Mityczna Biżuteria</p>
          <p className="text-sm text-pandora-muted">Najlepsza dostępna biżuteria. End-game chase item — inwestuj wzmocnienia i kamienie dopiero tutaj.</p>
        </div>
      </div>

      <InfoBox type="tip">
        <p className="text-sm">Nie wzmacniaj mocno biżuterii niższego tieru — przy wymianie tracisz te inwestycje. Wzmacniaj po osiągnięciu <strong className="text-pandora-gold">Diamentowej lub Mitycznej</strong> biżuterii.</p>
      </InfoBox>
    </div>
  )
}
