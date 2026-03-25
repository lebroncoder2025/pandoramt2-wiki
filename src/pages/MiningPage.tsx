import { Pickaxe } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card } from '../components/UI.tsx'
import { miningStats } from '../data/serverData.ts'

export default function MiningPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Górnictwo"
        description="System wydobycia — Kilofy, Sztabki Złota, Tajemnicze Kryształy i Żyły Złota."
        icon={<Pickaxe className="w-8 h-8" />}
      />

      <SectionTitle>Podstawy Górnictwa</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Kilof</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Startowy na +0. Zbieraj Punkty Kilofa podczas kopania. Na maks. punktach ulepsz u Deokbae. Max: <strong className="text-pandora-text/75">+9</strong>. Każdy lvl daje +3% do +30% efektywności.</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Żyła Złota</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Wszystkie żyły zamienione na Żyłę Złota. Wydobywasz <strong className="text-pandora-text/75">3-5 Sztabek Złota (5KK)</strong> z każdej.</p>
        </Card>
      </div>

      <SectionTitle>Umiejętność Górnictwa</SectionTitle>
      <InfoBox type="info">
        <p className="text-sm">Szkolenie przez Przewodniki do Górnictwa (drop z normalnych potworów, max 15 lvl różnicy). Rady Pustelnika i Zwoje Egzorcyzmu wpływają na szkolenie.</p>
      </InfoBox>
      <DataTable
        headers={['Poziom', 'Bonus']}
        rows={miningStats.map(m => [m.level, m.bonus])}
        highlightFirst
      />

      <SectionTitle>Specjalne Przedmioty Górnika</SectionTitle>
      <DataTable
        headers={['Przedmiot', 'Źródło', 'Bonus', 'Czas']}
        rows={[
          ['Specjalistyczny Kilof', 'ItemShop', 'Podwójne Wydobycie +10%', '30 dni'],
          ['Kostium Górnika', 'ItemShop', 'Podwójne Wydobycie +10%', '30 dni'],
          ['Fryzura Górnika', 'ItemShop', 'Podwójne Wydobycie +5%', '30 dni'],
          ['Kamienny Kilof', 'Skrzynia Górnika', 'Podwójne Wydobycie +10%', '30 min'],
        ]}
        highlightFirst
      />

      <SectionTitle>Bonusowe elementy</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Skrzynia Górnika</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Bonusowy drop podczas kopania. Szansa rośnie z każdym poziomem kilofa. Zawiera wartościowe przedmioty.</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Tajemniczy Kryształ</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Losowy drop przy kopaniu. Wrzuć do <strong className="text-pandora-text/75">Ołtarza</strong> w swoim królestwie. Po zebraniu 1000 kryształów przez królestwo — <strong className="text-pandora-text/75">1h podwójny drop</strong> dla wszystkich!</p>
        </Card>
      </div>
    </div>
  )
}
