import { Apple } from 'lucide-react'
import { PageHeader, SectionTitle, SectionDivider, InfoBox, DataTable } from '../components/UI.tsx'
import { lifefruits } from '../data/serverData.ts'

export default function LifeFruitsGuidePage() {
  const rows = lifefruits.map((f, i) => [`${i + 1}`, f.name, `${f.points.toLocaleString('pl-PL')} pkt`])

  return (
    <div>
      <PageHeader
        title="Owoce Życia"
        description="System trwałego zwiększania maksymalnego HP — owoce życia i wymagane punkty."
        icon={<Apple className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm">Owoce Życia to <strong className="text-pandora-gold">permanentne</strong> zwiększenie maksymalnego PŻ. Każde spożycie jest nieodwracalne — zdecyduj świadomie, kiedy użyć wyższego owocu.</p>
      </InfoBox>

      <SectionDivider />

      <SectionTitle>Owoce Życia — Typy i Wymagania</SectionTitle>
      <p className="text-sm text-pandora-muted mb-4">
        Aby skonsumować owoc wyższego poziomu, musisz posiadać odpowiednią ilość punktów życia (PŻ bez ekwipunku). Każdy owoc daje stały, permanentny przyrost HP.
      </p>
      <DataTable
        headers={['Poziom', 'Nazwa', 'Wymagane Punkty PŻ']}
        rows={rows}
        highlightFirst
      />

      <SectionDivider />

      <SectionTitle>Jak Zdobywać Owoce Życia</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">👹 Z Boss'ów</p>
          <p className="text-xs text-pandora-muted">Bossowie świata dropują owoce życia jako nagrody — im mocniejszy boss, tym wyższy poziom owocu.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">⚔️ Z Dungeon'ów</p>
          <p className="text-xs text-pandora-muted">Skrzynie końcowe dungeon'ów zawierają owoce życia jako stałe nagrody. Rób dungiony regularnie.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">🎁 Z Event'ów</p>
          <p className="text-xs text-pandora-muted">Eventy sezonowe często nagradzają owocami wyższych poziomów. Warto uczestniczyć.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">📜 Z Quest'ów</p>
          <p className="text-xs text-pandora-muted">Niektóre questy i zadania cykliczne mają owoce życia w puli nagród.</p>
        </div>
      </div>

      <SectionDivider />

      <SectionTitle>Strategia Progresji</SectionTitle>
      <div className="space-y-3 mb-10">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">🟢 Early game (lv. 1–80)</p>
          <p className="text-sm text-pandora-muted">Konsumuj owoce I i II kiedy tylko je zdobędziesz. Każde HP się liczy na niskich poziomach.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">🔵 Mid game (lv. 81–160)</p>
          <p className="text-sm text-pandora-muted">Gromadź owoce III, ostrożnie planuj użycie — przyrost PŻ staje się kluczowy w PvP i dungeonach.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-1">🟣 End game (lv. 161+)</p>
          <p className="text-sm text-pandora-muted">Owoce IV i V to priorytet. Im wyższe bazowe PŻ, tym bardziej efektywna staje się ranga i wzmocnienia obrony.</p>
        </div>
      </div>

      <InfoBox type="tip">
        <p className="text-sm">HP jest <strong className="text-pandora-gold">najważniejszym</strong> single statem w grze. Wyższe PŻ bazowe = więcej z rang, kamieni i bonusów. Inwestuj w owoce życia na każdym etapie gry.</p>
      </InfoBox>
    </div>
  )
}
