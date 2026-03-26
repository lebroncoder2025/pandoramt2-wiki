import { Zap } from 'lucide-react'
import { PageHeader, Card, SectionTitle, SectionDivider, Badge, InfoBox } from '../components/UI.tsx'
import { bonus67Table } from '../data/serverData.ts'

export default function EnhancementPage() {
  return (
    <div>
      <PageHeader
        title="System Ulepszeń Ekwipunku"
        description="Kompleksowy przewodnik po systemie +0 do +9 i specjalnych bonusach +6/+7."
        icon={<Zap className="w-5 h-5" />}
      />

      <SectionTitle>Podstawy Systemu Ulepszeń</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <h3 className="font-semibold text-sm mb-3">Co to jest ulepszenie?</h3>
          <p className="text-xs text-pandora-muted leading-relaxed mb-3">
            Ulepszenie (enhancement) to proces zwiększania statystyk ekwipunku od +0 (brak ulepsz) do +9 (maksymum). Każdy poziom ulepsz dodaje procentowy bonus do wybranego atrybutu.
          </p>
          <p className="text-xs text-pandora-muted">Ekwipunek można ulepszać wielokrotnie, a każde ulepszenie zwiększa moc postaci.</p>
        </Card>

        <Card>
          <h3 className="font-semibold text-sm mb-3">Ryzyko i nagrody</h3>
          <p className="text-xs text-pandora-muted leading-relaxed mb-3">
            Ulepszanie nie ma progu porażki - każdy krok zawsze się powiedzie. Koszt materiałów rośnie wraz z poziomem ulepsz.
          </p>
          <p className="text-xs text-pandora-muted">Im wyższe ulepszenie, tym drożej, ale i bardziej warte - zwłaszcza +6/+7.</p>
        </Card>
      </div>

      <SectionDivider />

      <SectionTitle>Standardowe Ulepszenia +0 do +5</SectionTitle>
      <div className="bg-pandora-card/60 border border-pandora-border/25 rounded-lg p-5 mb-8">
        <p className="text-xs text-pandora-muted mb-4 leading-relaxed">
          Ulepszenia od +0 do +5 stanowią <strong>fundament każdego ekwipunku</strong>. Są relatywnie tanie i dostępne dla wszystkich poziomów gracza. Każdy krok dodaje stały bonus do wybranego atrybutu.
        </p>

        <div className="space-y-3">
          <div className="bg-pandora-dark/40 rounded-lg p-3">
            <p className="text-xs font-semibold text-pandora-gold mb-2">+0 → +1</p>
            <p className="text-[11px] text-pandora-muted">Początkowy krok - najprostszy i najtańszy. Rekomendowany dla nowych graczy.</p>
          </div>

          <div className="bg-pandora-dark/40 rounded-lg p-3">
            <p className="text-xs font-semibold text-pandora-gold mb-2">+1 → +3</p>
            <p className="text-[11px] text-pandora-muted">Solidny fundament - większość casual playerów stabilizuje się tutaj. Nie wymaga mega-inwestycji.</p>
          </div>

          <div className="bg-pandora-dark/40 rounded-lg p-3">
            <p className="text-xs font-semibold text-pandora-gold mb-2">+4 → +5</p>
            <p className="text-[11px] text-pandora-muted">Koniec "taniej" - od tutaj koszty zaczynają расти. Już czuć znaczną różnicę w statystykach.</p>
          </div>
        </div>
      </div>

      <SectionDivider />

      <SectionTitle>Specjalne Ulepszenia +6 i +7</SectionTitle>
      <InfoBox type="warning">
        <h3 className="font-semibold mb-2">🔥 Bonusy +6/+7 — Game Changer!</h3>
        <p className="text-sm mb-3">
          Poziomy +6 i +7 to <strong>specjalne ulepszenia</strong> które dodają UNIKALNE bonusy dodatkowo do statystyk podstawowych. Nie tylko zwiększają liczbę, ale otwierają nowe możliwości bojowe.
        </p>
      </InfoBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {bonus67Table.map((bonus) => (
          <div key={bonus.name} className="bg-pandora-card/70 border border-pandora-border/30 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xs font-bold text-pandora-gold/90">{bonus.name}</h4>
              <Badge color="gold" className="text-[10px]">+6/+7</Badge>
            </div>
            <p className="text-xs text-pandora-muted leading-relaxed">{bonus.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-pandora-gold/[0.08] border border-pandora-gold/20 rounded-lg p-5 mb-8">
        <h3 className="text-sm font-semibold text-pandora-gold mb-3">💡 Strategia +6/+7</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-xs text-pandora-muted">
            <span className="text-pandora-gold font-bold">•</span>
            <span><strong>Priorytet:</strong> Wybierz bonus +6/+7 który pasuje do Twojej klasy (np. dla maga Szybkość Zaklęć, dla wojownika Krytyczne Uderzenie)</span>
          </li>
          <li className="flex items-start gap-2 text-xs text-pandora-muted">
            <span className="text-pandora-gold font-bold">•</span>
            <span><strong>Inwestycja:</strong> +6 i +7 są drogie - zaplanuj budżet i docelowy ekwipunek</span>
          </li>
          <li className="flex items-start gap-2 text-xs text-pandora-muted">
            <span className="text-pandora-gold font-bold">•</span>
            <span><strong>Progresja:</strong> Nie musisz mieć wszystko na +7 - nawet jedno ulepszenie +6/+7 zmienia wiele</span>
          </li>
          <li className="flex items-start gap-2 text-xs text-pandora-muted">
            <span className="text-pandora-gold font-bold">•</span>
            <span><strong>PvP vs PvE:</strong> Różne bonusy są lepsze do PvP (Krytyczne, Omdlenie) vs PvE (Obrażenia, Regeneracja)</span>
          </li>
        </ul>
      </div>

      <SectionDivider />

      <SectionTitle>Ścieżka Ulepszania — Od Nowa do Pro</SectionTitle>
      <div className="space-y-3 mb-8">
        <InfoBox type="info">
          <h3 className="font-semibold mb-2">Poziom 50-100: Fundament</h3>
          <p className="text-sm">Celem jest osiągnięcie +2 do +3 na całym ekwipunku. Skoncentruj się na tanich materiałach i budź solidne pierwsze wrażenie.</p>
        </InfoBox>

        <InfoBox type="info">
          <h3 className="font-semibold mb-2">Poziom 100-150: Konsolidacja</h3>
          <p className="text-sm">Pnij się do +4 na głównym ekwipunku (broń, zbroja). Zacznij gromadzić materiały do +6/+7.</p>
        </InfoBox>

        <InfoBox type="info">
          <h3 className="font-semibold mb-2">Poziom 150-200: Specjalizacja</h3>
          <p className="text-sm">Doprowadź broń do +5 (minimum), wybierz jeden bonus +6/+7 do inwestycji. To jest power spike!</p>
        </InfoBox>

        <InfoBox type="info">
          <h3 className="font-semibold mb-2">Poziom 200+: Optymalizacja</h3>
          <p className="text-sm">Celem jest +6 na kluczowym ekwipunku (broń głównie) i rozbudowa dodatkowych bonusów +6/+7 na pancerzu.</p>
        </InfoBox>
      </div>

      <SectionDivider />

      <SectionTitle>Porównanie Bonusów +6/+7 Po Klasach</SectionTitle>
      <Card>
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-bold text-pandora-gold/90 uppercase tracking-wide mb-2">🗡️ Wojownik/Ninja</h4>
            <p className="text-[11px] text-pandora-muted">Priorytet: <strong>Szansa na Krytyczne Uderzenie</strong> (DPS), <strong>Wartość Ataku</strong> (raw damage), <strong>Szybkość Ataku</strong> (consistency)</p>
          </div>
          <div className="border-t border-pandora-border/15 pt-4">
            <h4 className="text-xs font-bold text-pandora-gold/90 uppercase tracking-wide mb-2">🔮 Mag/Łucznik</h4>
            <p className="text-[11px] text-pandora-muted">Priorytet: <strong>Szybkość Zaklęć</strong> (attack speed), <strong>Szybkość Ataku</strong> (spell/arrow velocity), <strong>Krytyczne Uderzenie</strong> (burst)</p>
          </div>
          <div className="border-t border-pandora-border/15 pt-4">
            <h4 className="text-xs font-bold text-pandora-gold/90 uppercase tracking-wide mb-2">🛡️ Rycerz/Paładin</h4>
            <p className="text-[11px] text-pandora-muted">Priorytet: <strong>Regeneracja PŻ/PE</strong> (sustain), <strong>Obrona</strong> (damage reduction), <strong>Maksymalne PŻ</strong> (HP pool)</p>
          </div>
        </div>
      </Card>

      <SectionDivider />

      <SectionTitle>FAQ — Pytania o Ulepszenia</SectionTitle>
      <div className="space-y-3 mb-8">
        <details className="bg-pandora-card/60 border border-pandora-border/25 rounded-lg p-4 cursor-pointer group">
          <summary className="text-xs font-semibold text-pandora-gold/90 uppercase tracking-wide flex items-center gap-2">
            <span>+</span> Czy mogę wybrać więcej niż jeden bonus +6/+7?
          </summary>
          <p className="text-xs text-pandora-muted mt-2 leading-relaxed">
            Tak! Możesz mieć wiele bonusów +6/+7 jednocześnie na różnych przedmiotach. Każdy ekwipunek może być ulepszony niezależnie.
          </p>
        </details>

        <details className="bg-pandora-card/60 border border-pandora-border/25 rounded-lg p-4 cursor-pointer group">
          <summary className="text-xs font-semibold text-pandora-gold/90 uppercase tracking-wide flex items-center gap-2">
            <span>+</span> Ile kosztuje ulepszenie +6/+7?
          </summary>
          <p className="text-xs text-pandora-muted mt-2 leading-relaxed">
            Koszt rośnie eksponencjalnie - od ~10k złota na +1 do milionów na +6/+7. Plan finansowy jest kluczowy!
          </p>
        </details>

        <details className="bg-pandora-card/60 border border-pandora-border/25 rounded-lg p-4 cursor-pointer group">
          <summary className="text-xs font-semibold text-pandora-gold/90 uppercase tracking-wide flex items-center gap-2">
            <span>+</span> Czy mogę "zresetować" ulepszenia?
          </summary>
          <p className="text-xs text-pandora-muted mt-2 leading-relaxed">
            Zwykle nie - ulepszenia są permanentne. Wybieraj mądrze! Możesz jednak grać wieloma egzemplarzami ekwipunku.
          </p>
        </details>

        <details className="bg-pandora-card/60 border border-pandora-border/25 rounded-lg p-4 cursor-pointer group">
          <summary className="text-xs font-semibold text-pandora-gold/90 uppercase tracking-wide flex items-center gap-2">
            <span>+</span> Jakie ulepszenie da mi największy boost?
          </summary>
          <p className="text-xs text-pandora-muted mt-2 leading-relaxed">
            Broń +6/+7 > Zbroja +4 > Reszta. Ulepsz broń jako primum - to daje największy DPS boost.
          </p>
        </details>
      </div>

      <SectionDivider />

      <SectionTitle>Podsumowanie — Checklist Ulepszania</SectionTitle>
      <div className="bg-pandora-green/[0.08] border border-pandora-green/20 rounded-lg p-5">
        <ul className="space-y-2.5">
          <li className="flex items-center gap-2.5 text-xs">
            <span className="w-5 h-5 rounded-full bg-pandora-green/20 border border-pandora-green/40 flex items-center justify-center">
              <span className="text-[10px] text-pandora-green font-bold">✓</span>
            </span>
            <span>Ulepsz broń do +4-5 jako pierwszeństwo (DPS rośnie najszybciej)</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <span className="w-5 h-5 rounded-full bg-pandora-green/20 border border-pandora-green/40 flex items-center justify-center">
              <span className="text-[10px] text-pandora-green font-bold">✓</span>
            </span>
            <span>Następnie rozważ +6/+7 na broni (biggest power spike)</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <span className="w-5 h-5 rounded-full bg-pandora-green/20 border border-pandora-green/40 flex items-center justify-center">
              <span className="text-[10px] text-pandora-green font-bold">✓</span>
            </span>
            <span>Wybierz bonus +6/+7 pasujący do Twojej klasy i play-style'u</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <span className="w-5 h-5 rounded-full bg-pandora-green/20 border border-pandora-green/40 flex items-center justify-center">
              <span className="text-[10px] text-pandora-green font-bold">✓</span>
            </span>
            <span>Zbieraj materiały stopniowo - nie czekaj na 100% zasobów</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs">
            <span className="w-5 h-5 rounded-full bg-pandora-green/20 border border-pandora-green/40 flex items-center justify-center">
              <span className="text-[10px] text-pandora-green font-bold">✓</span>
            </span>
            <span>+6/+7 na broni > +4-5 wszędzie - skoncentruj się na quality, nie quantity</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
