import { Skull } from 'lucide-react'
import { PageHeader, SectionTitle, InfoBox } from '../components/UI.tsx'
import { bosses } from '../data/serverData.ts'

export default function BossesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Bossy & Questy"
        description="Wszyscy bossy z lokacjami, czasami respawnu i nagrodami."
        icon={<Skull className="w-5 h-5" />}
      />

      <SectionTitle>Bossy na Mapach</SectionTitle>
      <div className="space-y-2 mb-8">
        {bosses.map(b => (
          <div key={b.name} className={`bg-pandora-card/60 border border-pandora-border/40 border-l-2 rounded-lg p-4 hover:border-pandora-border/60 transition-colors group ${
              b.respawn.includes('48') ? 'border-l-pandora-red/50' : b.respawn.includes('12') ? 'border-l-pandora-orange/50' : b.respawn.includes('60') ? 'border-l-pandora-purple/50' : 'border-l-pandora-green/50'
            }`}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="sm:w-[28%] flex items-center gap-2.5">
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  b.respawn.includes('48') ? 'bg-pandora-red/60' : b.respawn.includes('12') ? 'bg-pandora-orange/60' : b.respawn.includes('60') ? 'bg-pandora-purple/60' : 'bg-pandora-green/60'
                }`} />
                <div>
                  <h3 className="text-sm font-semibold text-pandora-text/85 group-hover:text-pandora-gold/80 transition-colors">{b.name}</h3>
                  <span className="text-[11px] text-pandora-muted/60">{b.respawn}</span>
                </div>
              </div>
              <div className="sm:w-[22%]">
                <p className="text-[10px] text-pandora-muted/60 uppercase tracking-widest">Lokacja</p>
                <p className="text-[13px] text-pandora-text/85">{b.map}</p>
              </div>
              <div className="sm:w-[50%]">
                <p className="text-[10px] text-pandora-muted/60 uppercase tracking-widest">Nagroda</p>
                <p className="text-[13px] text-pandora-gold/80">{b.reward}</p>
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
