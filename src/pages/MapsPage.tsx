import { Map } from 'lucide-react'
import { PageHeader, Badge, InfoBox } from '../components/UI.tsx'
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

      <div className="space-y-3">
        {maps.map((m, i) => (
          <div key={m.name} className="bg-pandora-card/50 border border-pandora-border/30 rounded-lg p-4 hover:border-pandora-border/50 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start gap-3.5">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pandora-gold/8 flex items-center justify-center font-display text-sm font-bold text-pandora-gold/70">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-pandora-text/90">{m.name}</h3>
                    <Badge color={m.level >= 200 ? 'red' : m.level >= 110 ? 'orange' : 'green'}>
                      Poziom {m.level}+
                    </Badge>
                  </div>
                </div>
                <p className="text-[13px] text-pandora-muted/55 leading-relaxed">{m.description}</p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="bg-pandora-dark/30 rounded-lg p-3 border border-pandora-border/15">
                  <p className="text-[10px] text-pandora-muted/50 uppercase tracking-widest mb-0.5">Bonus</p>
                  <p className="text-[13px] font-medium text-pandora-blue/80">{m.bonus}</p>
                </div>
                <div className="bg-pandora-dark/30 rounded-lg p-3 border border-pandora-border/15">
                  <p className="text-[10px] text-pandora-muted/50 uppercase tracking-widest mb-0.5">Bossy</p>
                  <p className="text-[13px] font-medium text-pandora-red/80">{m.bosses}</p>
                </div>
                <div className="bg-pandora-dark/30 rounded-lg p-3 border border-pandora-border/15">
                  <p className="text-[10px] text-pandora-muted/50 uppercase tracking-widest mb-0.5">Metiny</p>
                  <p className="text-[13px] font-medium text-pandora-purple/80">{m.metins}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
