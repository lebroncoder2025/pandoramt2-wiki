import { Trophy } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card } from '../components/UI.tsx'
import { ranks, lifefruits } from '../data/serverData.ts'

export default function RankSystemPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="System Rang"
        description="Od Parobka po Cesarza — zdobywaj punkty rangi i otrzymuj bonusy PvP."
        icon={<Trophy className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm">Maks. punkty rangi: <strong>10.000.000</strong>. Zdobywasz je zabijając potwory i używając Owoców Życia. Bonusy: Maks. PŻ i Silny pko Ludziom.</p>
      </InfoBox>

      <SectionTitle>Tabela Rang</SectionTitle>
      <DataTable
        headers={['Ranga', 'Zakres punktów', 'Maks. PŻ', 'Silny pko Ludziom']}
        rows={ranks.map(r => [r.name, r.range, r.bonusHP, r.bonusPvP])}
        highlightFirst
      />

      <SectionTitle>Owoce Życia</SectionTitle>
      <p className="text-[13px] text-pandora-muted/60 mb-4">Alternatywny sposób zdobywania punktów rangi — z Bossów:</p>
      <DataTable
        headers={['Owoc', 'Punkty rangi']}
        rows={lifefruits.map(f => [f.name, String(f.points)])}
        highlightFirst
      />
      <InfoBox type="tip">
        <p className="text-sm">Wszystkie Owoce Życia można używać bez ograniczeń czasowych i bez progów rangi. Im trudniejszy Boss — tym lepszy owoc!</p>
      </InfoBox>

      <SectionTitle>Szacunkowy czas zdobywania rang</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Rycerz (20K pkt)</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Osiągalny relatywnie szybko przez zwykły farm. Pierwszy bonus PvP.</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Cesarz (10M pkt)</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Najwyższa ranga. +2500 PŻ i +30% SPL. Wymaga ogromnej ilości farmu i Owoców Życia.</p>
        </Card>
      </div>
    </div>
  )
}
