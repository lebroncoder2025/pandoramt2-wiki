import { Sword } from 'lucide-react'
import { PageHeader, Card, Badge, SectionDivider } from '../components/UI.tsx'
import { classes } from '../data/serverData.ts'

const colorMap: Record<string, string> = {
  red: 'border-pandora-red/20 hover:border-pandora-red/35',
  blue: 'border-pandora-blue/20 hover:border-pandora-blue/35',
  purple: 'border-pandora-purple/20 hover:border-pandora-purple/35',
  green: 'border-pandora-green/20 hover:border-pandora-green/35',
}

const bgColorMap: Record<string, string> = {
  red: 'bg-pandora-red/15 text-pandora-red/90',
  blue: 'bg-pandora-blue/15 text-pandora-blue/90',
  purple: 'bg-pandora-purple/15 text-pandora-purple/90',
  green: 'bg-pandora-green/15 text-pandora-green/90',
}

const badgeColorMap: Record<string, 'red' | 'blue' | 'purple' | 'green'> = {
  red: 'red', blue: 'blue', purple: 'purple', green: 'green',
}

export default function ClassesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Klasy Postaci"
        description="Na PandoraMT2 dostępne są 4 podstawowe klasy, każda z dwoma podklasami."
        icon={<Sword className="w-5 h-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {classes.map(cls => (
          <div key={cls.name} className={`bg-pandora-card/60 border rounded-xl overflow-hidden transition-all duration-200 ${colorMap[cls.color]}`}>
            <div className="p-7">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-base font-bold font-display shrink-0 ${bgColorMap[cls.color]}`}>
                  {cls.name[0]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-pandora-text/85">{cls.name}</h3>
                  <p className="text-[11px] text-pandora-muted">{cls.nameEn}</p>
                </div>
              </div>
              <p className="text-[13px] text-pandora-muted mb-6 leading-relaxed">{cls.description}</p>

              <div className="space-y-5">
                {cls.subclasses.map(sub => (
                  <div key={sub.name} className="bg-pandora-dark/30 rounded-xl p-5 border border-pandora-border/20">
                    <div className="flex items-center justify-between mb-2.5">
                      <h4 className="text-sm font-semibold text-pandora-text/85">{sub.name}</h4>
                      <Badge color={badgeColorMap[cls.color]}>{sub.stats}</Badge>
                    </div>
                    <p className="text-[13px] text-pandora-muted leading-relaxed">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      <Card className="mt-0">
        <h3 className="text-sm font-semibold text-pandora-text/85 mb-4">Wskazówki przy wyborze klasy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px] text-pandora-muted">
          <div>
            <p className="font-medium text-pandora-text/85 mb-1">PvP (Gracz vs Gracz)</p>
            <p>Wojownik Umysł, Ninja Bliski, Sura Broń Magiczna — najlepsze wybory na PvP.</p>
          </div>
          <div>
            <p className="font-medium text-pandora-text/85 mb-1">PvE (Gracz vs Potwory)</p>
            <p>Szaman Smok, Ninja Daleki, Wojownik Umysł — świetni w farmie i dungeonach.</p>
          </div>
          <div>
            <p className="font-medium text-pandora-text/85 mb-1">Tank / Support</p>
            <p>Wojownik Ciało (tank), Szaman Leczenie (support) — kluczowi w grupach.</p>
          </div>
          <div>
            <p className="font-medium text-pandora-text/85 mb-1">Farm Yang</p>
            <p>Każda klasa nadaje się do farmu. Ninja Daleki i Szaman Smok są najszybsi w czyszczeniu map.</p>
          </div>
        </div>
      </Card>
    </div>
  )
}


