import { Sword } from 'lucide-react'
import { PageHeader, Card, Badge } from '../components/UI.tsx'
import { classes } from '../data/serverData.ts'

const colorMap: Record<string, string> = {
  red: 'border-pandora-red/30 hover:border-pandora-red/50',
  blue: 'border-pandora-blue/30 hover:border-pandora-blue/50',
  purple: 'border-pandora-purple/30 hover:border-pandora-purple/50',
  green: 'border-pandora-green/30 hover:border-pandora-green/50',
}

const bgColorMap: Record<string, string> = {
  red: 'bg-pandora-red/10 text-pandora-red',
  blue: 'bg-pandora-blue/10 text-pandora-blue',
  purple: 'bg-pandora-purple/10 text-pandora-purple',
  green: 'bg-pandora-green/10 text-pandora-green',
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
        icon={<Sword className="w-8 h-8" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map(cls => (
          <div key={cls.name} className={`bg-pandora-card border rounded-xl overflow-hidden transition-all duration-300 ${colorMap[cls.color]}`}>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black font-display ${bgColorMap[cls.color]}`}>
                  {cls.name[0]}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-pandora-text">{cls.name}</h3>
                  <p className="text-xs text-pandora-muted">{cls.nameEn}</p>
                </div>
              </div>
              <p className="text-sm text-pandora-muted mb-5">{cls.description}</p>

              <div className="space-y-3">
                {cls.subclasses.map(sub => (
                  <div key={sub.name} className="bg-pandora-dark/50 rounded-lg p-4 border border-pandora-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-pandora-text">{sub.name}</h4>
                      <Badge color={badgeColorMap[cls.color]}>{sub.stats}</Badge>
                    </div>
                    <p className="text-xs text-pandora-muted">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card className="mt-8">
        <h3 className="font-display text-lg font-bold text-pandora-gold mb-3">Wskazówki przy wyborze klasy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-pandora-muted">
          <div>
            <p className="font-medium text-pandora-text mb-1">🗡️ PvP (Gracz vs Gracz)</p>
            <p>Wojownik Umysł, Ninja Bliski, Sura Broń Magiczna — najlepsze wybory na PvP.</p>
          </div>
          <div>
            <p className="font-medium text-pandora-text mb-1">🐉 PvE (Gracz vs Potwory)</p>
            <p>Szaman Smok, Ninja Daleki, Wojownik Umysł — świetni w farmie i dungeonach.</p>
          </div>
          <div>
            <p className="font-medium text-pandora-text mb-1">🛡️ Tank / Support</p>
            <p>Wojownik Ciało (tank), Szaman Leczenie (support) — kluczowi w grupach.</p>
          </div>
          <div>
            <p className="font-medium text-pandora-text mb-1">💰 Farm Yang</p>
            <p>Każda klasa nadaje się do farmu. Ninja Daleki i Szaman Smok są najszybsi w czyszczeniu map.</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
