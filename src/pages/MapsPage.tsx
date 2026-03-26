import { Map } from 'lucide-react'
import { PageHeader, Badge, InfoBox } from '../components/UI.tsx'
import { maps } from '../data/serverData.ts'

export default function MapsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Mapy"
        description="Przegląd wszystkich unikalnych map na serwerze — wymagane poziomy, bossy, bonusy i Metiny."
        icon={<Map className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm"><strong>Drop Sztabek Złota:</strong> Na mapach od Pustyni Wygnańców dropią najcenniejsze Sztabki (10KK). Wymagana max. 15 lvl różnicy do potwora. Od Doliny Śmierci różnica ta nie obowiązuje. VIP, Medal Szczęścia i Zwierzak zwiększają szansę.</p>
      </InfoBox>

      <div className="space-y-8">
        {maps.map((m, i) => (
          <div key={m.name} className="bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-7 hover:border-pandora-border/60 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pandora-gold/8 flex items-center justify-center font-display text-sm font-bold text-pandora-gold/80 shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-pandora-text/85">{m.name}</h3>
                    <Badge color={m.level >= 200 ? 'red' : m.level >= 110 ? 'orange' : 'green'}>
                      Poziom {m.level}+
                    </Badge>
                  </div>
                </div>
                <p className="text-[13px] text-pandora-muted/60 leading-relaxed">{m.description}</p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-pandora-dark/30 rounded-xl p-5 border border-pandora-border/20 border-l-2 border-l-pandora-blue/20">
                  <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Bonus</p>
                  <p className="text-sm font-medium text-pandora-blue/80">{m.bonus}</p>
                </div>
                <div className="bg-pandora-dark/30 rounded-xl p-5 border border-pandora-border/20 border-l-2 border-l-pandora-red/20">
                  <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Bossy</p>
                  <p className="text-sm font-medium text-pandora-red/80">{m.bosses}</p>
                </div>
                <div className="bg-pandora-dark/30 rounded-xl p-5 border border-pandora-border/20 border-l-2 border-l-pandora-purple/20">
                  <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Metiny</p>
                  <p className="text-sm font-medium text-pandora-purple/80">{m.metins}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
