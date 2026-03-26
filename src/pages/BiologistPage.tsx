import { FlaskConical } from 'lucide-react'
import { useState } from 'react'
import { PageHeader, DataTable, SectionTitle, InfoBox, TabGroup } from '../components/UI.tsx'
import { biologistQuests, fisherBiologist, collections } from '../data/serverData.ts'

export default function BiologistPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="">
      <PageHeader
        title="Biolog & Kolekcjoner"
        description="Badania Biologa, Badania Rybaka i system Kolekcjonera — wszystkie misje i nagrody."
        icon={<FlaskConical className="w-5 h-5" />}
      />

      <TabGroup tabs={['Badania Biologa', 'Badania Rybaka', 'Kolekcjoner']} activeTab={tab} onTabChange={setTab} />

      {tab === 0 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Biolog wymaga oddania określonych przedmiotów z potworów. Każda ukończona misja daje <strong>stałe bonusy</strong> + Szkatułkę z nagrodą jednorazową.</p>
          </InfoBox>
          <DataTable
            headers={['Przedmiot', 'Wymagany lvl', 'Ilość', 'Nagroda']}
            rows={biologistQuests.map(b => [b.item, String(b.level), String(b.count), b.reward])}
            highlightFirst
          />
        </>
      )}

      {tab === 1 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Badania Rybaka wymagają oddawania złowionych ryb. Nagrody to stałe bonusy + Szkatułki Bossów.</p>
          </InfoBox>
          <DataTable
            headers={['Ryba', 'Wymagany lvl', 'Ilość', 'Nagroda']}
            rows={fisherBiologist.map(b => [b.item, String(b.level), String(b.count), b.reward])}
            highlightFirst
          />
        </>
      )}

      {tab === 2 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Kolekcjoner — zbieraj przedmioty bez ograniczeń czasowych. Nagrody to <strong>stałe bonusy pasywne</strong>.</p>
          </InfoBox>
          <DataTable
            headers={['Kolekcja', 'Wymagane', 'Ilość', 'Nagroda']}
            rows={collections.map(c => [c.name, c.items, c.count, c.reward])}
            highlightFirst
          />
        </>
      )}
    </div>
  )
}

