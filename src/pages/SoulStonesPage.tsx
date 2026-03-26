import { useState } from 'react'
import { Gem } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card, TabGroup, Badge } from '../components/UI.tsx'
import { soulStones, legendarySoulStones, legendarySoulStoneProgression } from '../data/serverData.ts'

export default function SoulStonesPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="">
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
            <p className="text-sm">Legendarne KD mają <strong>kilka bonusów</strong> i są znacznie silniejsze. Tworzysz je w <strong>Ołtarzu Dusz</strong>. Mogą <strong>pęknąć</strong> podczas wkładania! Kamień zaczyna na <strong>+0</strong> i można go ulepszyć maksymalnie do <strong>+5</strong>.</p>
          </InfoBox>

          <div className="space-y-8 mb-6">
            {legendarySoulStoneProgression.map(stone => (
              <div key={stone.name} className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl overflow-hidden">
                {/* Stone header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-pandora-border/30 bg-pandora-dark/40">
                  <span className="text-xl">{stone.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-pandora-text/90">{stone.name}</h3>
                  </div>
                  <Badge color={stone.type === 'Zbroja' ? 'blue' : 'purple'}>{stone.type}</Badge>
                </div>

                {/* Upgrade table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-pandora-dark/50">
                        <th className="px-4 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest w-16">Poziom</th>
                        <th className="px-4 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest">Bonus 1</th>
                        <th className="px-4 py-2.5 text-left text-pandora-gold/80 text-[10px] uppercase tracking-widest">Bonus 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stone.levels.map((lvl, i) => (
                        <tr
                          key={lvl.level}
                          className={`border-b border-pandora-border/15 last:border-0 transition-colors
                            ${lvl.level === '+5' ? 'bg-pandora-gold/[0.06] hover:bg-pandora-gold/[0.09]' : 'hover:bg-pandora-card/30'}`}
                        >
                          <td className="px-4 py-2.5">
                            <span className={`text-xs font-bold font-mono
                              ${lvl.level === '+5' ? 'text-pandora-gold' :
                                i === 0 ? 'text-pandora-muted' :
                                'text-pandora-blue'}`}>
                              {lvl.level}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-xs text-pandora-text/80">{lvl.b1}</td>
                          <td className="px-4 py-2.5 text-xs text-pandora-text/80">{lvl.b2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <InfoBox type="info">
            <p className="text-sm">Nie ma osobnego slotu — Legendarny KD wchodzi w standardowy slot KD w przedmiocie. Do ulepszania potrzebujesz <strong>Odłamków Kamienia Duszy</strong> pozyskiwanych w Ołtarzu Dusz.</p>
          </InfoBox>
        </>
      )}

      {tab === 2 && (
        <>
          <SectionTitle>Ołtarz Dusz</SectionTitle>
          <p className="text-[13px] text-pandora-muted mb-4">Ołtarz Dusz znajduje się w każdym M1. Oferuje trzy główne funkcje:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-t-2 border-t-pandora-orange/20">
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Przepalanie</h3>
              <p className="text-[13px] text-pandora-muted leading-relaxed">Wymiana zbędnych Kamieni Dusz na Odłamki Kamienia Duszy. Kamienie automatycznie wskakują do okna.</p>
            </Card>
            <Card className="border-t-2 border-t-pandora-blue/20">
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Wymiana</h3>
              <p className="text-[13px] text-pandora-muted leading-relaxed">Za Odłamki możesz kupić różne przedmioty, w tym Legendarny Kamień potrzebny do tworzenia LKD.</p>
            </Card>
            <Card className="border-t-2 border-t-pandora-purple/20">
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Wytwarzanie</h3>
              <p className="text-[13px] text-pandora-muted leading-relaxed">Tworzenie Legendarnych Kamieni Dusz z materiałów. Wytworzony kamień to +0; ulepszaj do +5.</p>
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


