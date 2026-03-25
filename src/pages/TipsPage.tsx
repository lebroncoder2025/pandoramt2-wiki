import { Lightbulb } from 'lucide-react'
import { PageHeader, Card, SectionTitle, InfoBox } from '../components/UI.tsx'

const shortcuts = [
  { key: 'TAB', desc: 'Pierścień Teleportacji' },
  { key: 'P', desc: 'Okno Zwierzaka' },
  { key: 'Y (przytrzymaj)', desc: 'Statystyki Wojny Gildii' },
  { key: 'F7', desc: 'Auto Dopalacze' },
  { key: 'CTRL + F7', desc: 'Szybkie użycie dopalaczy' },
  { key: 'F8', desc: 'Spis Bonusów' },
  { key: 'CTRL + PPM', desc: 'Podgląd zawartości skrzyni (najedź kursorem)' },
  { key: 'PPM na potwora', desc: 'Pasek potwora → "Lista Przedmiotów" = drop list' },
]

const tips = [
  {
    title: 'Sklepy Offline',
    items: [
      'Otwieraj Tobołkiem z handlarki różności',
      'Możesz ustawiać dokładną pozycję sklepu',
      'VIP = Pakiet Dekorowania Sklepu',
    ]
  },
  {
    title: 'Wyszukiwarka Sklepów',
    items: [
      'Na górze klienta (przyklejona)',
      'Nad sklepami ze znalezionymi przedmiotami pojawiają się niebieskie strzałki',
      'Opcja ignorowania stopnia ulepszenia',
    ]
  },
  {
    title: 'Drop z potworów',
    items: [
      'Max 15 poziomów różnicy do potwora (oprócz map od Doliny Śmierci)',
      'VIP, Medal Szczęścia i Zwierzak zwiększają szansę',
      'PPM na potwora → "Lista Przedmiotów" aby zobaczyć drop',
    ]
  },
  {
    title: 'Bonus Switcher',
    items: [
      'Przycisk w Menu Gracza',
      'Zapis szablonów bonusów',
      'Nie działa na kostiumy',
    ]
  },
  {
    title: 'Zmiana kanałów',
    items: [
      'Przyciski na obramowaniu Minimapy',
      '5 kanałów aktywnych',
    ]
  },
  {
    title: 'Dungeony — porady',
    items: [
      'Jeśli wyrzuci cię z dungeonu — kliknij na NPC i wróć',
      'Musisz być na tym samym channelu',
      'Max 2 minuty na powrót',
    ]
  },
  {
    title: 'Małżeństwo',
    items: [
      'Proces jak na global. Obrączki = teleportacja do partnera',
      'Teleportacja działa gdy spełniasz wymagania mapy',
      'Potrzebny Pierścionek Zaręczynowy do ślubu',
    ]
  },
  {
    title: 'Koło Losu',
    items: [
      'Na stronie pandoramt2.pl',
      'Losuj drogocenne przedmioty',
      'Wymaga SM (Smocza Moneta)',
    ]
  },
]

export default function TipsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Porady & Skróty"
        description="Przydatne wskazówki, skróty klawiszowe i porady dla nowych i zaawansowanych graczy."
        icon={<Lightbulb className="w-5 h-5" />}
      />

      <SectionTitle>Skróty Klawiszowe</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
        {shortcuts.map(s => (
          <div key={s.key} className="bg-pandora-card/60 border border-pandora-border/40 rounded-lg p-3.5 hover:border-pandora-border/60 transition-colors">
            <kbd className="inline-block px-2 py-0.5 bg-pandora-dark/60 rounded text-pandora-gold/80 font-mono text-[12px] mb-1.5 border border-pandora-gold/15">
              {s.key}
            </kbd>
            <p className="text-[13px] text-pandora-muted/60">{s.desc}</p>
          </div>
        ))}
      </div>

      <SectionTitle>Porady</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {tips.map(t => (
          <Card key={t.title}>
            <h3 className="text-sm font-semibold text-pandora-text/85 mb-2.5">{t.title}</h3>
            <ul className="space-y-1.5">
              {t.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-pandora-muted/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-pandora-gold/30 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <SectionTitle>Poradnik dla Nowych Graczy</SectionTitle>
      <div className="space-y-4">
        <InfoBox type="tip">
          <h3 className="font-semibold mb-2">Krok 1: Start (lvl 1–30)</h3>
          <p className="text-sm">Wykorzystaj ekwipunek startowy (+9). Rób questy, zabijaj potwory na mapach M1. Użyj Peleryn Męstwa do ochrony. Koń 21 lvl daje szybkość.</p>
        </InfoBox>
        <InfoBox type="tip">
          <h3 className="font-semibold mb-2">Krok 2: Rozwój (lvl 30–75)</h3>
          <p className="text-sm">Wejdź na Wieżę Demonów (lvl 40+). Rozpocznij Badania Biologa. Zbieraj yang z farm. Zacznij szkolić Dowodzenie i Polimorfię.</p>
        </InfoBox>
        <InfoBox type="tip">
          <h3 className="font-semibold mb-2">Krok 3: Mid-game (lvl 75–150)</h3>
          <p className="text-sm">Farmuj Atlantydę V1/V2. Wchodź do Komnaty Pająków/Smoka (lvl 100). Rozwijaj Zwierzaka. Buduj rangę.</p>
        </InfoBox>
        <InfoBox type="tip">
          <h3 className="font-semibold mb-2">Krok 4: End-game (lvl 150–250)</h3>
          <p className="text-sm">Pustynia Wygnańców, Mityczna Atlantyda, Grota Dżinna, Świątynia Andun. Legendarne Kamienie Dusz. Poluj na Infernusa i Balathora!</p>
        </InfoBox>
      </div>
    </div>
  )
}
