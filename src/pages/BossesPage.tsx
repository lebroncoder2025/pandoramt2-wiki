import { Skull } from 'lucide-react'
import { PageHeader, Card, SectionTitle, Badge, InfoBox } from '../components/UI.tsx'
import { bosses } from '../data/serverData.ts'

export default function BossesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Bossy & Questy"
        description="Wszyscy bossy z lokacjami, czasami respawnu i nagrodami."
        icon={<Skull className="w-8 h-8" />}
      />

      <SectionTitle>Bossy na Mapach</SectionTitle>
      <div className="space-y-3 mb-8">
        {bosses.map(b => (
          <Card key={b.name}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="sm:w-1/4">
                <h3 className="font-display font-bold text-pandora-gold">{b.name}</h3>
                <Badge color={b.respawn.includes('48') ? 'red' : b.respawn.includes('12') ? 'orange' : b.respawn.includes('60') ? 'purple' : 'green'}>
                  Respawn: {b.respawn}
                </Badge>
              </div>
              <div className="sm:w-1/4">
                <p className="text-xs text-pandora-muted">Lokacja</p>
                <p className="text-sm font-medium">{b.map}</p>
              </div>
              <div className="sm:w-2/4">
                <p className="text-xs text-pandora-muted">Nagroda</p>
                <p className="text-sm font-medium text-pandora-gold">{b.reward}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <InfoBox type="info">
        <p className="text-sm">Dane o bossach pochodzą z oficjalnej <a href="https://forum.pandoramt2.pl/topic/31300-s2-prezentacja-serwera/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold underline">Prezentacji Serwera</a>. World bossy (Infernus, Balathor) wymagają dużej grupy graczy.</p>
      </InfoBox>
    </div>
  )
}
