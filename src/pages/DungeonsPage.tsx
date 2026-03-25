import { Castle } from 'lucide-react'
import { PageHeader, Card, Badge, InfoBox } from '../components/UI.tsx'
import { dungeons } from '../data/serverData.ts'

export default function DungeonsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Dungeony"
        description="Wszystkie instancje — wymagania wejścia, bonusy, nagrody i przepustki."
        icon={<Castle className="w-8 h-8" />}
      />

      <InfoBox type="tip">
        <p className="text-sm"><strong>Powrót do Dungeonu:</strong> Jeśli zostaniesz wyrzucony, kliknij na NPC aby wrócić. Musisz być na tym samym channelu. Masz max. 2 minuty na powrót.</p>
      </InfoBox>

      <div className="space-y-4">
        {dungeons.map(d => (
          <Card key={d.name}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-bold text-pandora-gold">{d.name}</h3>
                <Badge color={d.level >= 200 ? 'red' : d.level >= 120 ? 'orange' : d.level >= 100 ? 'blue' : 'green'}>
                  Poziom {d.level}+
                </Badge>
                <Badge color="purple">{d.type}</Badge>
              </div>

              <p className="text-sm text-pandora-muted">{d.description}</p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                  <p className="text-xs text-pandora-muted mb-1">Przepustka</p>
                  <p className="text-sm font-medium">{d.ticket}</p>
                </div>
                <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                  <p className="text-xs text-pandora-muted mb-1">Działający bonus</p>
                  <p className="text-sm font-medium text-pandora-blue">{d.bonus}</p>
                </div>
                {d.cooldown && (
                  <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                    <p className="text-xs text-pandora-muted mb-1">Cooldown</p>
                    <p className="text-sm font-medium text-pandora-orange">{d.cooldown}</p>
                  </div>
                )}
                {d.reward && (
                  <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                    <p className="text-xs text-pandora-muted mb-1">Nagroda za ukończenie</p>
                    <p className="text-sm font-medium text-pandora-gold">{d.reward}</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <h3 className="font-display text-lg font-bold text-pandora-gold mb-3">Tworzenie przepustek</h3>
        <div className="space-y-3 text-sm text-pandora-muted">
          <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
            <span className="text-pandora-gold font-medium">Klejnot Ochrony Duszy</span> (Świątynia Andun) = 10x Skamieniała Łza + 10x Kręty Klucz + 10x Mityczny Klucz
          </div>
          <div className="bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
            <span className="text-pandora-gold font-medium">Bransoleta Sułtana</span> (Grota Dżinna) = Złota Czaszka Demona (Wędrowca Ham) LUB 10x Złoty Pył
          </div>
        </div>
      </Card>
    </div>
  )
}
