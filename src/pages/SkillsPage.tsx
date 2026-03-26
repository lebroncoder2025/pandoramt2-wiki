import { useState } from 'react'
import { Zap } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card, TabGroup } from '../components/UI.tsx'
import { leadershipBonuses, polymorphValues } from '../data/serverData.ts'

export default function SkillsPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Umiejętności"
        description="Dowodzenie, Polimorfia, szkolenie umiejętności i księgi."
        icon={<Zap className="w-5 h-5" />}
      />

      <TabGroup tabs={['Szkolenie Umiejętności', 'Dowodzenie', 'Polimorfia']} activeTab={tab} onTabChange={setTab} />

      {tab === 0 && (
        <>
          <SectionTitle>Rozwój umiejętności</SectionTitle>
          <DataTable
            headers={['Przedmiot', 'Zakres']}
            rows={[
              ['Księga Umiejętności', 'M1 → G1'],
              ['Kamień Duchowy', 'G1 → P'],
              ['Tęczowy Kamień', 'M1 → P'],
            ]}
            highlightFirst
          />

          <InfoBox type="info">
            <p className="text-sm">Rady Pustelnika oraz Zwoje Egzorcyzmu oddziałują na szkolenie umiejętności postaci.</p>
          </InfoBox>

          <Card className="mt-4">
            <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">Przełączanie umiejętności ciągłych</h3>
            <p className="text-[13px] text-pandora-muted">Umiejętności aktywne można włączać/wyłączać jak np. Ognisty Duch. Nie wyłączają się po przelogowaniu!</p>
          </Card>
        </>
      )}

      {tab === 1 && (
        <>
          <SectionTitle>Dowodzenie</SectionTitle>
          <p className="text-[13px] text-pandora-muted mb-4">Pasywna umiejętność pozwalająca na nadanie ról członkom drużyny. Lider nie może wybrać roli dla siebie.</p>

          <DataTable
            headers={['Poziom', 'Obraż. Umiejęt.', 'Szyb. Ataku', 'Obrona', 'Wart. Ataku', 'Maks. PŻ', 'Czas']}
            rows={leadershipBonuses.map(l => [l.level, l.skillDmg, l.atkSpeed, l.defense, l.atkValue, l.maxHP, l.duration])}
            highlightFirst
          />

          <SectionTitle>Szkolenie Dowodzenia</SectionTitle>
          <DataTable
            headers={['Księga', 'Zakres']}
            rows={[
              ['Sztuka Wojny Sun Zi', '0 → M1'],
              ['Sztuka Wojny Wu Zi', 'M1 → G1'],
              ['WeiLiao Zi', 'M1 → P'],
            ]}
            highlightFirst
          />

          <InfoBox type="info">
            <p className="text-sm">Księgi Dowodzenia dropią ze wszystkich potworów na normalnych mapach (max 15 lvl różnicy). Rady Pustelnika i Zwoje Egzorcyzmu wpływają na szkolenie.</p>
          </InfoBox>
        </>
      )}

      {tab === 2 && (
        <>
          <SectionTitle>Polimorfia</SectionTitle>
          <p className="text-[13px] text-pandora-muted mb-4">System przemiany w potwory — zwiększa obrażenia. Działanie analogiczne do serwera globalnego z ułatwieniami w zdobywaniu marmurów.</p>

          <DataTable
            headers={['Poziom', 'Obrażenia', 'Czas trwania']}
            rows={polymorphValues.map(p => [p.level, p.damage, p.duration])}
            highlightFirst
          />

          <SectionTitle>Szkolenie Polimorfii</SectionTitle>
          <DataTable
            headers={['Księga', 'Zakres']}
            rows={[
              ['Księga Polimorfii', '0 → M1'],
              ['Zaawansowana Księga Polimorfii', 'M1 → G1'],
              ['Mistrzowska Księga Polimorfii', 'M1 → P'],
            ]}
            highlightFirst
          />

          <SectionTitle>Wymiana Marmurów</SectionTitle>
          <Card>
            <p className="text-[13px] text-pandora-muted mb-2">U <strong className="text-pandora-text/85">Uriela</strong> (każde M1) możesz wymienić:</p>
            <p className="text-[13px] text-pandora-text/85"><strong>5x dowolny Marmur Polimorfii + 50M Yang</strong> → Marmur Dzikiego Sługi, Czarnego Orka lub Młodego Pająka</p>
          </Card>

          <InfoBox type="info">
            <p className="text-sm">Marmury dropią z większości potworów na standardowych mapach (max 15 lvl różnicy). VIP i Rękawica Złodzieja zwiększają szansę.</p>
          </InfoBox>
        </>
      )}
    </div>
  )
}


