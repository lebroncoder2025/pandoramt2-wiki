import { Shirt } from 'lucide-react'
import { PageHeader, SectionTitle, SectionDivider, InfoBox, DataTable } from '../components/UI.tsx'
import { costumeBonus } from '../data/serverData.ts'

export default function CostumeSystemPage() {
  const slots = [
    { name: 'Kostium (korpus)', desc: 'Główna część stroju — największy wpływ na wygląd postaci.' },
    { name: 'Nakładka (broń)', desc: 'Wizualny efekt nałożony na broń, daje bonusy ofensywne.' },
    { name: 'Fryzura', desc: 'Nakrycie głowy / styl włosów. Bonusy do ruchu lub obrony.' },
    { name: 'Ochrona', desc: 'Slot obronny — pancerz twarzy lub inne akcesoria.' },
  ]

  const rows = costumeBonus.map(b => [b.name, b.slots, `+${b.perLevel}`, `+${b.max}`])

  return (
    <div>
      <PageHeader
        title="System Kostiumów"
        description="Sloty, bonusy statystyczne i strategie wyboru kostiumów."
        icon={<Shirt className="w-5 h-5" />}
      />

      <SectionTitle>Sloty Kostiumów</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {slots.map(s => (
          <div key={s.name} className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
            <p className="text-sm font-semibold text-pandora-gold mb-1">{s.name}</p>
            <p className="text-xs text-pandora-muted">{s.desc}</p>
          </div>
        ))}
      </div>

      <SectionDivider />

      <SectionTitle>Bonusy Kostiumów — Tabela</SectionTitle>
      <p className="text-sm text-pandora-muted mb-4">Każdy slot kostiumit jest ulepszany od poziomu 0 do 10. Poniżej bonus za każdy poziom i łączny max (+10).</p>
      <DataTable
        headers={['Bonus', 'Sloty', 'Za poziom', 'Maks. (+10)']}
        rows={rows}
        highlightFirst
      />

      <SectionDivider />

      <SectionTitle>Jak Zdobywać Kostiumy</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">🏆 Z Boss'ów i Dungeon'ów</p>
          <p className="text-xs text-pandora-muted">Im wyższy poziom bossa/dungeonu, tym lepszy tier kostiumu w dropu.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">🎁 Z Event'ów</p>
          <p className="text-xs text-pandora-muted">Eventy cykliczne oferują ekskluzywne kostiumy czasowe lub permanentne.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">💰 Ze Sklepu / Handlu</p>
          <p className="text-xs text-pandora-muted">Niektóre kostiumy są dostępne w premium shopie lub handlu z innymi graczami.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-semibold text-pandora-gold mb-2">📜 Z Quest'ów</p>
          <p className="text-xs text-pandora-muted">Część aktywności fabularnych nagradza unikatowymi kostiumami niedostępnymi nigdzie indziej.</p>
        </div>
      </div>

      <SectionDivider />

      <SectionTitle>Rekomendacje dla Klas</SectionTitle>
      <div className="space-y-4 mb-10">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-2">⚔️ Wojownik / Sura — Build Ofensywny</p>
          <p className="text-sm text-pandora-muted">Priorytet: <span className="text-pandora-text/85">Szybkość Ataku</span> (nakładka) i <span className="text-pandora-text/85">Wartość Ataku</span> (nakładka). Max bonusy ofensywne z nakładki na broń.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-2">🗡️ Ninja — Build Prędkości</p>
          <p className="text-sm text-pandora-muted">Priorytet: <span className="text-pandora-text/85">Szybkość Ataku</span> i <span className="text-pandora-text/85">Szybkość Ruchu</span>. Mobilność jest kluczowa dla ninja.</p>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <p className="text-sm font-bold text-pandora-gold mb-2">📿 Szaman — Build Wsparcia</p>
          <p className="text-sm text-pandora-muted">Priorytet: <span className="text-pandora-text/85">Maksymalne PŻ</span> i <span className="text-pandora-text/85">Szybkość Zaklęcia</span> (nakładka). Shaman musi przeżyć i leczyć szybko.</p>
        </div>
      </div>

      <InfoBox type="tip">
        <p className="text-sm">Każdy slot kostiumu ulepsza się niezależnie — <strong className="text-pandora-gold">nie</strong> musisz ulepszać wszystkich naraz. Zacznij od nakładki na broń, bo daje największy wpływ na DPS.</p>
      </InfoBox>
    </div>
  )
}

