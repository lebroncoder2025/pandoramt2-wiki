import { Castle } from 'lucide-react'
import { PageHeader, Card, Badge, InfoBox, SectionDivider } from '../components/UI.tsx'
import { dungeons } from '../data/serverData.ts'

export default function DungeonsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Dungeony"
        description="Wszystkie instancje — wymagania wejścia, bonusy, nagrody i przepustki."
        icon={<Castle className="w-5 h-5" />}
      />

      <InfoBox type="tip">
        <p className="text-sm"><strong>Powrót do Dungeonu:</strong> Jeśli zostaniesz wyrzucony, kliknij na NPC aby wrócić. Musisz być na tym samym channelu. Masz max. 2 minuty na powrót.</p>
      </InfoBox>

      <div className="space-y-7">
        {dungeons.map(d => (
          <div key={d.name} className="bg-pandora-card/60 border border-pandora-border/40 rounded-lg p-7 hover:border-pandora-border/60 transition-colors">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-base font-bold text-pandora-text/85">{d.name}</h3>
                <Badge color={d.level >= 200 ? 'red' : d.level >= 120 ? 'orange' : d.level >= 100 ? 'blue' : 'green'}>
                  Poziom {d.level}+
                </Badge>
                <Badge color="purple">{d.type}</Badge>
              </div>

              <p className="text-[13px] text-pandora-muted/60 leading-relaxed">{d.description}</p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-pandora-dark/30 rounded-lg p-5 border border-pandora-border/20 border-l-2 border-l-pandora-text/10">
                  <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Przepustka</p>
                  <p className="text-sm font-medium text-pandora-text/85">{d.ticket}</p>
                </div>
                <div className="bg-pandora-dark/30 rounded-lg p-5 border border-pandora-border/20 border-l-2 border-l-pandora-blue/20">
                  <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Bonus</p>
                  <p className="text-sm font-medium text-pandora-blue/80">{d.bonus}</p>
                </div>
                {d.cooldown && (
                  <div className="bg-pandora-dark/30 rounded-lg p-5 border border-pandora-border/20 border-l-2 border-l-pandora-orange/20">
                    <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Cooldown</p>
                    <p className="text-sm font-medium text-pandora-orange/80">{d.cooldown}</p>
                  </div>
                )}
                {d.reward && (
                  <div className="bg-pandora-dark/30 rounded-lg p-5 border border-pandora-border/20 border-l-2 border-l-pandora-gold/20">
                    <p className="text-[11px] text-pandora-muted/60 uppercase tracking-widest mb-2">Nagroda</p>
                    <p className="text-sm font-medium text-pandora-gold/80">{d.reward}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />

      <Card className="mt-0">
        <h3 className="text-sm font-semibold text-pandora-text/85 mb-5">Tworzenie przepustek</h3>
        <div className="space-y-4 text-[13px] text-pandora-muted/60">
          <div className="bg-pandora-dark/30 rounded-lg p-5 border border-pandora-border/20">
            <span className="text-pandora-gold/80 font-medium">Klejnot Ochrony Duszy</span> (Świątynia Andun) = 10x Skamieniała Łza + 10x Kręty Klucz + 10x Mityczny Klucz
          </div>
          <div className="bg-pandora-dark/30 rounded-lg p-5 border border-pandora-border/20">
            <span className="text-pandora-gold/80 font-medium">Bransoleta Sułtana</span> (Grota Dżinna) = Złota Czaszka Demona (Wędrowca Ham) LUB 10x Złoty Pył
          </div>
        </div>
      </Card>
    </div>
  )
}
