import { useState } from 'react'
import { Shield } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, TabGroup } from '../components/UI.tsx'
import { bonusTable, bonus67Table, costumeBonus } from '../data/serverData.ts'

export default function EquipmentPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Ekwipunek & Bonusy"
        description="Pełna tabela bonusów na przedmiotach, bonusy 6-7 oraz system kostiumów."
        icon={<Shield className="w-5 h-5" />}
      />

      <TabGroup tabs={['Bonusy Zwykłe', 'Bonusy 6-7', 'Bonusy Kostiumów']} activeTab={tab} onTabChange={setTab} />

      {tab === 0 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Przedmioty mogą posiadać <strong>maksymalnie 5 bonusów</strong> zwykłych. Wartości maksymalne podświetlane są na <span className="text-pandora-gold font-bold">złoty kolor</span>. <strong>Blok Ciosów</strong> nie wchodzi jako bonus — tylko z KD lub przedmiotów wbudowanych.</p>
          </InfoBox>
          <DataTable
            headers={['Nazwa Bonusu', 'Maksymalna Wartość']}
            rows={bonusTable.map(b => [b.name, b.max])}
            highlightFirst
          />
        </>
      )}

      {tab === 1 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Poza zwykłymi bonusami, przedmiot może mieć <strong>dwa bonusy 6-7</strong>. Ich wartości są stałe i mogą wejść w każdy element ekwipunku.</p>
          </InfoBox>
          <DataTable
            headers={['Nazwa Bonusu', 'Wartość']}
            rows={bonus67Table.map(b => [b.name, b.value])}
            highlightFirst
          />
        </>
      )}

      {tab === 2 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Kostiumy można ulepszać. Każdy poziom zwiększa bonusy. Poniżej znajdziesz wartości za poziom i max.</p>
          </InfoBox>
          <DataTable
            headers={['Bonus', 'Sloty', 'Za Poziom', 'Maksimum']}
            rows={costumeBonus.map(b => [b.name, b.slots, b.perLevel, b.max])}
            highlightFirst
          />
        </>
      )}

      <SectionTitle>System Ulepszeń</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-pandora-card/50 border border-pandora-border/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Magiczny Metal+</h3>
          <p className="text-[13px] text-pandora-muted/60 mb-3">Daje dodatkowe +10% szansy na ulepszenie przedmiotu.</p>
          <div className="space-y-1.5 text-[13px]">
            <p className="text-pandora-text/70 text-[11px] uppercase tracking-widest font-medium mb-1">Wymagane materiały:</p>
            {['Kamień Kowala', 'Magiczna Ruda Miedzi', '100.000.000 Yang'].map(m => (
              <div key={m} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pandora-gold/40" />
                <span className="text-pandora-muted/60">{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-pandora-card/50 border border-pandora-border/30 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Bonus Switcher</h3>
          <p className="text-[13px] text-pandora-muted/60 mb-3">System szybkiej zamiany bonusów w Menu Gracza.</p>
          <div className="space-y-1.5 text-[13px] text-pandora-muted/60">
            <p>Możliwość zapisu szablonu</p>
            <p>Ustawienie alternatywnych bonusów</p>
            <p>Nie działa na kostiummy</p>
          </div>
        </div>
      </div>

      <SectionTitle>Odporności</SectionTitle>
      <InfoBox type="warning">
        <p className="text-sm">Bonusy typu <strong>Odporność na Omdlenie</strong> działają tylko w <strong>90%</strong>. Oznacza to, że istnieje niewielka szansa iż dana niewrażliwość nie zadziała.</p>
      </InfoBox>
    </div>
  )
}
