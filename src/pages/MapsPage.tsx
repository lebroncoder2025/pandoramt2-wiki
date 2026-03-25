import { Map } from 'lucide-react'
import { PageHeader, Card, Badge, InfoBox } from '../components/UI.tsx'
import { maps } from '../data/serverData.ts'

export default function MapsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Mapy"
        description="Przegląd wszystkich unikalnych map na serwerze — wymagane poziomy, bossy, bonusy i Metiny."
        icon={<Map className="w-8 h-8" />}
      />

      <InfoBox type="info">
        <p className="text-sm"><strong>Drop Sztabek Złota:</strong> Na mapach od Pustyni Wygnańców dropią najcenniejsze Sztabki (10KK). Wymagana max. 15 lvl różnicy do potwora. Od Doliny Śmierci różnica ta nie obowiązuje. VIP, Medal Szczęścia i Zwierzak zwiększają szansę.</p>
      </InfoBox>

      <div className="space-y-4">
        {maps.map((m, i) => (
          <Card key={m.name}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-pandora-gold/10 flex items-center justify-center font-display font-bold text-pandora-gold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-pandora-gold">{m.name}</h3>
                    <Badge color={m.level >= 200 ? 'red' : m.level >= 110 ? 'orange' : 'green'}>
                      Poziom {m.level}+
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-pandora-muted">{m.description}</p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                  <p className="text-xs text-pandora-muted mb-1">Działający bonus</p>
                  <p className="text-sm font-medium text-pandora-blue">{m.bonus}</p>
                </div>
                <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                  <p className="text-xs text-pandora-muted mb-1">Bossy</p>
                  <p className="text-sm font-medium text-pandora-red">{m.bosses}</p>
                </div>
                <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                  <p className="text-xs text-pandora-muted mb-1">Metiny</p>
                  <p className="text-sm font-medium text-pandora-purple">{m.metins}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
