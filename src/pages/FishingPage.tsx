import { Fish } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card } from '../components/UI.tsx'
import { seafood } from '../data/serverData.ts'

export default function FishingPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Rybołówstwo"
        description="System wędek, łowienia, Owoców Morza, Żetonów Rybackich i Pirackiej Monety."
        icon={<Fish className="w-5 h-5" />}
      />

      <SectionTitle>Podstawy łowienia</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <Card className="border-t-2 border-t-pandora-blue/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">Wędka</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Startowa wędka +0. Za każde wyłowienie zdobywasz 1 Punkt Wędki. Na maks. punktach — ulepsz u Rybaka. Max poziom: <strong className="text-pandora-text/85">+9</strong>. Każdy szlach zwiększa różnorodność połowów.</p>
        </Card>
        <Card className="border-t-2 border-t-pandora-gold/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">Skrzynia Rybaka</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Bonusowy drop podczas łowienia. Szansa rośnie z każdym poziomem wędki. Zawiera ciekawe przedmioty.</p>
        </Card>
      </div>

      <SectionTitle>Owoce Morza</SectionTitle>
      <InfoBox type="info">
        <p className="text-sm">Owoce można jeść na surowo. Czas trwania upływa niezależnie od obecności w grze. Do wyłowienia potrzebne specjalne przedmioty rybackie.</p>
      </InfoBox>
      <DataTable
        headers={['Owoc Morza', 'Bonus', 'Czas']}
        rows={seafood.map(s => [s.name, s.bonus, s.duration])}
        highlightFirst
      />

      <SectionTitle>Specjalne Przedmioty Rybaka</SectionTitle>
      <DataTable
        headers={['Przedmiot', 'Źródło', 'Bonus', 'Czas']}
        rows={[
          ['Specjalistyczna Wędka', 'ItemShop', 'Owoce Morza +2%', '30 dni'],
          ['Kostium Marynarza', 'ItemShop', 'Owoce Morza +2%', '30 dni'],
          ['Fryzura Marynarza', 'ItemShop', 'Owoce Morza +1%', '30 dni'],
          ['Bambusowa Wędka', 'Skrzynia Rybaka', 'Owoce Morza +2%', '30 min'],
        ]}
        highlightFirst
      />

      <SectionTitle>Żetony Rybackie</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <Card className="border-t-2 border-t-pandora-green/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">Wymiana na Żetony</h3>
          <div className="space-y-1.5 text-[13px] text-pandora-muted/60">
            <p>Pospolite Ryby → 1x Żeton Rybacki</p>
            <p>Rzadkie Ryby → 2x Żeton Rybacki</p>
            <p>Najrzadsze Ryby → 3x Żeton Rybacki</p>
          </div>
          <p className="text-[11px] text-pandora-muted/50 mt-2">Przeciągnij rybę na Rybaka aby wymienić.</p>
        </Card>
        <Card className="border-t-2 border-t-pandora-orange/20">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">Sklep Żetonów</h3>
          <p className="text-[13px] text-pandora-muted/60">Za Żetony kupisz Nakładkę na Wędkę, Skrzynie Rybaka i inne wartościowe przedmioty u Rybaka.</p>
        </Card>
      </div>

      <SectionTitle>Piracka Moneta</SectionTitle>
      <InfoBox type="tip">
        <p className="text-sm">Podczas łowienia masz szansę na wyłowienie <strong>Pirackiej Monety</strong>. Wrzuć ją do <strong>Skrzyni</strong> w swoim królestwie (obok rybaka) — otrzymasz losową nagrodę!</p>
      </InfoBox>
    </div>
  )
}
