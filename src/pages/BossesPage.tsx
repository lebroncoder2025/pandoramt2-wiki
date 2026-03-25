import { Skull } from 'lucide-react'
import { PageHeader, SectionTitle, Badge, InfoBox } from '../components/UI.tsx'
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
      <div className="space-y-2 mb-8">
        {bosses.map(b => (
          <div key={b.name} className="bg-pandora-card/50 border border-pandora-border/30 rounded-lg p-4 hover:border-pandora-border/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="sm:w-1/4">
                <h3 className="text-sm font-semibold text-pandora-text/90">{b.name}</h3>
                <Badge color={b.respawn.includes('48') ? 'red' : b.respawn.includes('12') ? 'orange' : b.respawn.includes('60') ? 'purple' : 'green'}>
                  {b.respawn}
                </Badge>
              </div>
              <div className="sm:w-1/4">
                <p className="text-[10px] text-pandora-muted/50 uppercase tracking-widest">Lokacja</p>
                <p className="text-[13px] text-pandora-text/75 font-medium">{b.map}</p>
              </div>
              <div className="sm:w-2/4">
                <p className="text-[10px] text-pandora-muted/50 uppercase tracking-widest">Nagroda</p>
                <p className="text-[13px] text-pandora-gold/80 font-medium">{b.reward}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="info">
        <p className="text-sm">Dane o bossach pochodzą z oficjalnej <a href="https://forum.pandoramt2.pl/topic/31300-s2-prezentacja-serwera/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold underline">Prezentacji Serwera</a>. World bossy (Infernus, Balathor) wymagają dużej grupy graczy.</p>
      </InfoBox>
    </div>
  )
}
