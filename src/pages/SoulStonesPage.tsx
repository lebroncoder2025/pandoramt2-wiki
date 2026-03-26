import { useState } from 'react'
import { Gem } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card, TabGroup, Badge } from '../components/UI.tsx'
import { soulStones, legendarySoulStones } from '../data/serverData.ts'

export default function SoulStonesPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Kamienie Dusz"
        description="Zwykłe i Legendarne Kamienie Dusz — bonusy, tworzenie i ulepszanie."
        icon={<Gem className="w-5 h-5" />}
      />

      <TabGroup tabs={['Zwykłe Kamienie', 'Legendarne Kamienie', 'Ołtarz Dusz']} activeTab={tab} onTabChange={setTab} />

      {tab === 0 && (
        <>
          <InfoBox type="info">
            <p className="text-sm">Kamienie Dusz kupujemy u <strong>Handlarki Różności</strong> za <strong>25.000.000 Yang</strong>. Niektóre można pozyskać ze Sakwy Szczęścia.</p>
          </InfoBox>
          <DataTable
            headers={['Nazwa', 'Slot', 'Bonus na +5']}
            rows={soulStones.map(s => [s.name, s.type, s.bonus])}
            highlightFirst
          />
        </>
      )}

      {tab === 1 && (
        <>
          <InfoBox type="warning">
            <p className="text-sm">Legendarne KD mają <strong>kilka bonusów</strong> i są znacznie silniejsze. Tworzysz je w <strong>Ołtarzu Dusz</strong>. Mogą <strong>pęknąć</strong> podczas wkładania!</p>
          </InfoBox>

          <div className="space-y-6 mb-12">
            {legendarySoulStones.map(s => (
              <div key={s.name} className="bg-pandora-card/60 border border-pandora-border/40 border-l-2 border-l-pandora-purple/20 rounded-xl p-7 hover:border-pandora-border/60 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="sm:w-1/3">
                    <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">{s.name}</h3>
                    <Badge color="purple">{s.type}</Badge>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-[13px] text-pandora-text/85 leading-relaxed">{s.bonus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <InfoBox type="info">
            <p className="text-sm">Wytworzony kamień zaczyna na +0 i można go ulepszać do +5. Nie ma osobnego slotu — wchodzi w standardowy slot KD w przedmiocie.</p>
          </InfoBox>
        </>
      )}

      {tab === 2 && (
        <>
          <SectionTitle>Ołtarz Dusz</SectionTitle>
          <p className="text-[13px] text-pandora-muted/60 mb-4">Ołtarz Dusz znajduje się w każdym M1. Oferuje trzy główne funkcje:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-t-2 border-t-pandora-orange/20">
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Przepalanie</h3>
              <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Wymiana zbędnych Kamieni Dusz na Odłamki Kamienia Duszy. Kamienie automatycznie wskakują do okna.</p>
            </Card>
            <Card className="border-t-2 border-t-pandora-blue/20">
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Wymiana</h3>
              <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Za Odłamki możesz kupić różne przedmioty, w tym Legendarny Kamień potrzebny do tworzenia LKD.</p>
            </Card>
            <Card className="border-t-2 border-t-pandora-purple/20">
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Wytwarzanie</h3>
              <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Tworzenie Legendarnych Kamieni Dusz z materiałów. Wytworzony kamień to +0; ulepszaj do +5.</p>
            </Card>
          </div>

          <InfoBox type="warning">
            <p className="text-sm"><strong>Uwaga!</strong> Legendarny Kamień Dusz może pęknąć podczas wkładania do przedmiotu. Nie ma osobnego slotu — zajmuje standardowy.</p>
          </InfoBox>
        </>
      )}
    </div>
  )
}
