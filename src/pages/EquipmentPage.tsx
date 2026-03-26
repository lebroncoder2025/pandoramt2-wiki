import { useState } from 'react'
import { Shield, Sword } from 'lucide-react'
import { PageHeader, DataTable, InfoBox, TabGroup, SectionDivider } from '../components/UI.tsx'
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

const TIER_ACCENT: Record<string, string> = {
  'Startowe':   'border-l-pandora-border/30',
  'Podstawowy': 'border-l-pandora-border/50',
  'Ulepszony':  'border-l-pandora-green/50',
  'Rzadki':     'border-l-pandora-blue/50',
  'Epikowy':    'border-l-pandora-purple/50',
  'Legendarny': 'border-l-pandora-orange/50',
  'Mityczny':   'border-l-pandora-gold/60',
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
    <div className={`flex items-center justify-between py-2.5 px-4 border-b border-pandora-border/12 last:border-0 hover:bg-pandora-card/30 transition-colors border-l-2 ${TIER_ACCENT[tier] ?? ''}`}>
      <div className="flex-1 min-w-0">
        <span className="text-xs text-pandora-text/88">{name}</span>
        {note && <span className="text-[10px] text-pandora-orange/70 italic ml-2 hidden sm:inline">– {note}</span>}
      </div>
      <div className="flex items-center gap-2.5 shrink-0 ml-4">
        <span className="text-[11px] text-pandora-muted/70 font-mono">lv {level}</span>
        <TierBadge tier={tier} />
      </div>
    </div>
  )
}

function ItemList({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-pandora-card/50 border border-pandora-border/35 rounded-xl overflow-hidden">
      {children}
    </div>
  )
}

function ItemListHeader({ icon, title }: { icon?: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-pandora-dark/50 border-b border-pandora-border/30">
      {icon && <span className="text-pandora-gold/60">{icon}</span>}
      <span className="text-xs font-bold text-pandora-text/85 tracking-wide">{title}</span>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-4 mt-7 first:mt-0">
      <div className="w-0.5 h-4 rounded-full bg-pandora-gold/50 shrink-0" />
      <h3 className="text-sm font-bold text-pandora-text/80">{children}</h3>
    </div>
  )
}

// Pill-style class/category switcher — used INSIDE tabs so we avoid nested tab bars
function PillSelector({ options, active, onChange }: { options: string[]; active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => onChange(i)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
            i === active
              ? 'bg-pandora-gold/15 text-pandora-gold border-pandora-gold/40'
              : 'bg-transparent text-pandora-muted border-pandora-border/40 hover:text-pandora-text/80 hover:border-pandora-border/60'
          }`}
        >
          {opt}
        </button>
      ))}
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
        description="Bronie, zbroje, hełmy, buty, tarcze i biżuteria — pełna progresja tierów oraz tabele bonusów."
        icon={<Shield className="w-5 h-5" />}
      />

      {/* Tier legend — shows once, always visible above tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {equipmentTiers.map(t => (
          <TierBadge key={t.tier} tier={t.tier} />
        ))}
      </div>

      <TabGroup
        tabs={['Bronie', 'Zbroje & Hełmy', 'Tarcze & Buty', 'Biżuteria', 'Bonusy Zwykłe', 'Bonusy 6-7', 'Bonusy Kostiumów']}
        activeTab={tab}
        onTabChange={setTab}
      />

      {/* ── TAB 0: Bronie ── */}
      {tab === 0 && (
        <>
          <PillSelector
            options={equipmentWeapons.map(c => `${c.icon} ${c.class}`)}
            active={weaponClass}
            onChange={setWeaponClass}
          />
          {equipmentWeapons[weaponClass] && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {equipmentWeapons[weaponClass].types.map(wt => (
                <ItemList key={wt.name}>
                  <ItemListHeader icon={<Sword className="w-3.5 h-3.5" />} title={wt.name} />
                  {wt.items.map(it => (
                    <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
                  ))}
                </ItemList>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── TAB 1: Zbroje & Hełmy ── */}
      {tab === 1 && (
        <>
          <SubHeading>Zbroje</SubHeading>
          <PillSelector
            options={equipmentArmors.map(c => `${c.icon} ${c.class}`)}
            active={armorClass}
            onChange={setArmorClass}
          />
          {equipmentArmors[armorClass] && (
            <ItemList>
              {equipmentArmors[armorClass].items.map(it => (
                <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
              ))}
            </ItemList>
          )}

          <SubHeading>Hełmy <span className="text-[10px] font-normal text-pandora-muted ml-1">(wszystkie klasy)</span></SubHeading>
          <ItemList>
            {equipmentHelmets.map(it => (
              <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
            ))}
          </ItemList>
        </>
      )}

      {/* ── TAB 2: Tarcze & Buty ── */}
      {tab === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <SubHeading>Tarcze <span className="text-[10px] font-normal text-pandora-muted ml-1">(Wojownik & Sura)</span></SubHeading>
            <ItemList>
              {equipmentShields.map(it => (
                <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} />
              ))}
            </ItemList>
          </div>
          <div>
            <SubHeading>Buty <span className="text-[10px] font-normal text-pandora-muted ml-1">(wszystkie klasy)</span></SubHeading>
            <ItemList>
              {equipmentBoots.map(it => (
                <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} note={'note' in it ? (it as { note?: string }).note : undefined} />
              ))}
            </ItemList>
          </div>
        </div>
      )}

      {/* ── TAB 3: Biżuteria ── */}
      {tab === 3 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Możesz nosić: <strong>naszyjnik, kolczyki, 2× bransoletka i 2× pierścień</strong>. Biżuteria jest wspólna dla wszystkich klas.</p>
          </InfoBox>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(['Naszyjnik', 'Bransoletka', 'Kolczyki', 'Pierścień'] as const).map(type => {
              const items = equipmentJewelry.filter(j => j.type === type)
              return (
                <ItemList key={type}>
                  <ItemListHeader icon={<span className="text-sm">{JEWELRY_ICONS[type]}</span>} title={type} />
                  {items.map(it => (
                    <ItemRow key={it.name} name={it.name} level={it.level} tier={it.tier} note={'note' in it ? (it as { note?: string }).note : undefined} />
                  ))}
                </ItemList>
              )
            })}
          </div>
        </>
      )}

      {/* ── TAB 4: Bonusy Zwykłe ── */}
      {tab === 4 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Przedmioty mogą posiadać <strong>maks. 5 bonusów</strong> zwykłych. <strong>Blok Ciosów</strong> nie wchodzi jako bonus — tylko z KD lub przedmiotów wbudowanych.</p>
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
            <p className="text-sm">Kostiumy można ulepszać. Każdy poziom zwiększa bonusy. Poniżej znajdziesz wartości za poziom i maksimum.</p>
          </InfoBox>
          <DataTable
            headers={['Bonus', 'Sloty', 'Za Poziom', 'Maksimum']}
            rows={costumeBonus.map(b => [b.name, b.slots, b.perLevel, b.max])}
            highlightFirst
          />
        </>
      )}

      <SectionDivider />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <h3 className="text-sm font-bold text-pandora-text/85 mb-2.5 flex items-center gap-2">⚒️ Magiczny Metal+</h3>
          <p className="text-xs text-pandora-muted mb-3 leading-relaxed">Daje dodatkowe <strong className="text-pandora-text/80">+10%</strong> szansy na ulepszenie przedmiotu.</p>
          <ul className="space-y-1.5">
            {['Kamień Kowala', 'Magiczna Ruda Miedzi', '100.000.000 Yang'].map(m => (
              <li key={m} className="flex items-center gap-2 text-xs text-pandora-muted">
                <span className="w-1 h-1 rounded-full bg-pandora-gold/50 shrink-0" />{m}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5">
          <h3 className="text-sm font-bold text-pandora-text/85 mb-2.5 flex items-center gap-2">🔄 Bonus Switcher</h3>
          <p className="text-xs text-pandora-muted mb-3 leading-relaxed">System szybkiej zamiany bonusów dostępny w Menu Gracza.</p>
          <ul className="space-y-1.5">
            {['Zapis szablonu bonusów', 'Ustawienie alternatywnych bonusów', 'Nie działa na kostiumy'].map(m => (
              <li key={m} className="flex items-center gap-2 text-xs text-pandora-muted">
                <span className="w-1 h-1 rounded-full bg-pandora-blue/50 shrink-0" />{m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <InfoBox type="warning">
        <p className="text-sm">Bonusy <strong>Odporność na Omdlenie</strong> działają tylko w <strong>90%</strong> — istnieje mała szansa, że dana niewrażliwość nie zadziała.</p>
      </InfoBox>
    </div>
  )
}
