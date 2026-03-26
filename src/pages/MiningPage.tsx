import { Pickaxe } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card } from '../components/UI.tsx'
import { miningStats } from '../data/serverData.ts'

export default function MiningPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Górnictwo"
        description="System wydobycia — Kilofy, Sztabki Złota, Tajemnicze Kryształy i Żyły Złota."
        icon={<Pickaxe className="w-5 h-5" />}
      />

      <SectionTitle>Podstawy Górnictwa</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="border-t-2 border-t-pandora-blue/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Kilof</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Startowy na +0. Zbieraj Punkty Kilofa podczas kopania. Na maks. punktach ulepsz u Deokbae. Max: <strong className="text-pandora-text/85">+9</strong>. Każdy lvl daje +3% do +30% efektywności.</p>
        </Card>
        <Card className="border-t-2 border-t-pandora-gold/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Żyła Złota</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Wszystkie żyły zamienione na Żyłę Złota. Wydobywasz <strong className="text-pandora-text/85">3-5 Sztabek Złota (5KK)</strong> z każdej.</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-t-2 border-t-pandora-orange/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Skrzynia Górnika</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Bonusowy drop podczas kopania. Szansa rośnie z każdym poziomem kilofa. Zawiera wartościowe przedmioty.</p>
        </Card>
        <Card className="border-t-2 border-t-pandora-purple/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Tajemniczy Kryształ</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Losowy drop przy kopaniu. Wrzuć do <strong className="text-pandora-text/85">Ołtarza</strong> w swoim królestwie. Po zebraniu 1000 kryształów przez królestwo — <strong className="text-pandora-text/85">1h podwójny drop</strong> dla wszystkich!</p>
        </Card>
      </div>
    </div>
  )
}
