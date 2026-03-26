import { useState } from 'react'
import { Shield, Sword, Gem } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, TabGroup, SectionDivider, Badge, Card } from '../components/UI.tsx'
import { bonusTable, bonus67Table, costumeBonus, equipmentWeapons, equipmentArmors, equipmentHelmets, equipmentBoots, equipmentShields, equipmentJewelry, equipmentTiers } from '../data/serverData.ts'

const TIER_COLORS: Record<string, string> = {
  'Startowe':   'bg-pandora-dark/60 text-pandora-muted border-pandora-border/20',
  'Podstawowy': 'bg-pandora-card/60 text-pandora-text/70 border-pandora-border/30',
  'Ulepszony':  'bg-pandora-green/10 text-pandora-green border-pandora-green/25',
  'Rzadki':     'bg-pandora-blue/10 text-pandora-blue border-pandora-blue/25',
  'Epikowy':    'bg-pandora-purple/10 text-pandora-purple border-pandora-purple/25',
  'Legendarny': 'bg-pandora-orange/10 text-pandora-orange border-pandora-orange/25',
  'Mityczny':   'bg-pandora-gold/10 text-pandora-gold border-pandora-gold/30',
}

const JEWELRY_ICONS: Record<string, string> = {
  'Naszyjnik': '📿',
  'Bransoletka': '💎',
  'Kolczyki': '✨',
  'Pierścień': '💍',
}

function TierBadge({ tier }: { tier: string }) {
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold uppercase tracking-wide ${TIER_COLORS[tier] ?? 'text-pandora-muted'}`}>
      {tier}
    </span>
  )
}

function ItemRow({ name, level, tier, note }: { name: string; level: number; tier: string; note?: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-pandora-border/15 last:border-0 hover:bg-pandora-card/20 px-2 rounded transition-colors">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-xs text-pandora-text/85 truncate">{name}</span>
        {note && <span className="text-[10px] text-pandora-orange/70 italic hidden sm:inline truncate">– {note}</span>}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[11px] text-pandora-muted font-mono">Lvl {level}</span>
        <TierBadge tier={tier} />
      </div>
    </div>
  )
}

export default function EquipmentPage() {
  const [tab, setTab] = useState(0)
  const [weaponClass, setWeaponClass] = useState(0)
  const [armorClass, setArmorClass] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Ekwipunek & Bonusy"
        description="Pełna tabela bonusów, przedmioty na serwerze — bronie, zbroje, hełmy, buty, tarcze oraz biżuteria."
        icon={<Shield className="w-5 h-5" />}
      />

      <TabGroup tabs={['Bronie', 'Zbroje & Hełmy', 'Tarcze & Buty', 'Biżuteria', 'Bonusy Zwykłe', 'Bonusy 6-7', 'Bonusy Kostiumów']} activeTab={tab} onTabChange={setTab} />

      {/* ── TAB 0: Bronie ── */}
      {tab === 0 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Każda klasa używa dwóch typów broni. Bronie można ulepszać poprzez System Ulepszeń. Najlepszy ekwipunek dropuje z Bossów Infernusa i Balathora.</p>
          </InfoBox>

          {/* Tiers legend */}
          <div className="flex flex-wrap gap-2 mb-6">
            {equipmentTiers.map(t => (
              <TierBadge key={t.tier} tier={t.tier} />
            ))}
          </div>

          <TabGroup
            tabs={equipmentWeapons.map(c => `${c.icon} ${c.class}`)}
            activeTab={weaponClass}
            onTabChange={setWeaponClass}
          />

          {equipmentWeapons[weaponClass] && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentWeapons[weaponClass].types.map(wt => (
                <Card key={wt.name}>
                  <h3 className="text-sm font-semibold text-pandora-text/85 mb-4 flex items-center gap-2">
                    <Sword className="w-4 h-4 text-pandora-gold/60" />
                    {wt.name}
                  </h3>
                  <div>
                    {wt.items.map(it => (
                      <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── TAB 1: Zbroje & Hełmy ── */}
      {tab === 1 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Każda klasa ma własną serię zbroi. Hełmy są wspólne dla wszystkich klas w danym tierie.</p>
          </InfoBox>

          <div className="flex flex-wrap gap-2 mb-6">
            {equipmentTiers.map(t => (
              <TierBadge key={t.tier} tier={t.tier} />
            ))}
          </div>

          <SectionTitle>Zbroje</SectionTitle>
          <TabGroup
            tabs={equipmentArmors.map(c => `${c.icon} ${c.class}`)}
            activeTab={armorClass}
            onTabChange={setArmorClass}
          />
          {equipmentArmors[armorClass] && (
            <Card>
              {equipmentArmors[armorClass].items.map(it => (
                <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
              ))}
            </Card>
          )}

          <SectionTitle>Hełmy</SectionTitle>
          <Card>
            {equipmentHelmets.map(it => (
              <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
            ))}
          </Card>
        </>
      )}

      {/* ── TAB 2: Tarcze & Buty ── */}
      {tab === 2 && (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            {equipmentTiers.map(t => (
              <TierBadge key={t.tier} tier={t.tier} />
            ))}
          </div>

          <SectionTitle>Tarcze</SectionTitle>
          <InfoBox type="info">
            <p className="text-sm">Tarcze są dostępne wyłącznie dla klas <strong>Wojownik</strong> i <strong>Sura</strong>.</p>
          </InfoBox>
          <Card>
            {equipmentShields.map(it => (
              <div key={it.name} className="flex items-center justify-between py-2 border-b border-pandora-border/15 last:border-0 hover:bg-pandora-card/20 px-2 rounded transition-colors">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-pandora-text/85">{it.name}</span>
                  <span className="text-[11px] text-pandora-muted/70 hidden sm:inline">— {it.classes}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] text-pandora-muted font-mono">Lvl {it.level}</span>
                  <TierBadge tier={it.tier} />
                </div>
              </div>
            ))}
          </Card>

          <SectionTitle>Buty</SectionTitle>
          <Card>
            {equipmentBoots.map(it => (
              <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} note={'note' in it ? (it as { note?: string }).note : undefined} />
            ))}
          </Card>
        </>
      )}

      {/* ── TAB 3: Biżuteria ── */}
      {tab === 3 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Biżuteria jest wspólna dla wszystkich klas. Możesz nosić <strong>naszyjnik, kolczyki, dwie bransoletki i dwa pierścienie</strong>.</p>
          </InfoBox>

          <div className="flex flex-wrap gap-2 mb-8">
            {equipmentTiers.map(t => (
              <TierBadge key={t.tier} tier={t.tier} />
            ))}
          </div>

          {(['Naszyjnik', 'Bransoletka', 'Kolczyki', 'Pierścień'] as const).map(type => {
            const items = equipmentJewelry.filter(j => j.type === type)
            return (
              <div key={type} className="mb-8">
                <h3 className="text-sm font-semibold text-pandora-text/80 mb-3 flex items-center gap-2">
                  <span>{JEWELRY_ICONS[type]}</span>
                  {type}s
                </h3>
                <Card>
                  {items.map(it => (
                    <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} note={'note' in it ? (it as { note?: string }).note : undefined} />
                  ))}
                </Card>
              </div>
            )
          })}
        </>
      )}

      {/* ── TAB 4: Bonusy Zwykłe ── */}
      {tab === 4 && (
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

      {/* ── TAB 5: Bonusy 6-7 ── */}
      {tab === 5 && (
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

      {/* ── TAB 6: Bonusy Kostiumów ── */}
      {tab === 6 && (
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

      <SectionDivider />

      <SectionTitle>System Ulepszeń</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-7 hover:border-pandora-border/60 transition-colors">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Magiczny Metal+</h3>
          <p className="text-[13px] text-pandora-muted mb-4">Daje dodatkowe +10% szansy na ulepszenie przedmiotu.</p>
          <div className="space-y-2.5 text-[13px]">
            <p className="text-pandora-muted text-[11px] uppercase tracking-widest font-medium mb-1">Wymagane materiały:</p>
            {['Kamień Kowala', 'Magiczna Ruda Miedzi', '100.000.000 Yang'].map(m => (
              <div key={m} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pandora-gold/40" />
                <span className="text-pandora-muted">{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-7 hover:border-pandora-border/60 transition-colors">
          <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Bonus Switcher</h3>
          <p className="text-[13px] text-pandora-muted mb-4">System szybkiej zamiany bonusów w Menu Gracza.</p>
          <div className="space-y-2.5 text-[13px] text-pandora-muted">
            {['Możliwość zapisu szablonu', 'Ustawienie alternatywnych bonusów', 'Nie działa na kostiumy'].map(m => (
              <div key={m} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pandora-blue/40" />
                <span>{m}</span>
              </div>
            ))}
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
