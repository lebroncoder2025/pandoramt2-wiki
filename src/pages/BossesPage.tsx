import { Skull } from 'lucide-react'
import { PageHeader, SectionTitle, InfoBox, SectionDivider } from '../components/UI.tsx'
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
      <div className="space-y-8 mb-16">
        {bosses.map(b => {
          const respawnColor = b.respawn.includes('48') ? 'text-pandora-red/70 bg-pandora-red/8 border-pandora-red/20' : b.respawn.includes('12') ? 'text-pandora-orange/70 bg-pandora-orange/8 border-pandora-orange/20' : b.respawn.includes('60') ? 'text-pandora-purple/70 bg-pandora-purple/8 border-pandora-purple/20' : 'text-pandora-green/70 bg-pandora-green/8 border-pandora-green/20'
          const accentColor = b.respawn.includes('48') ? 'border-l-pandora-red/50' : b.respawn.includes('12') ? 'border-l-pandora-orange/50' : b.respawn.includes('60') ? 'border-l-pandora-purple/50' : 'border-l-pandora-green/50'
          return (
            <div key={b.name} className={`bg-pandora-card/60 border border-pandora-border/40 border-l-4 ${accentColor} rounded-xl p-7 hover:border-pandora-border/60 transition-colors`}>
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-base font-bold text-pandora-text/85">{b.name}</h3>
                <span className={`text-[11px] font-semibold border px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 ${respawnColor}`}>
                  {b.respawn}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-pandora-dark/30 rounded-xl p-5 border border-pandora-border/20">
                  <p className="text-[11px] text-pandora-muted/80 uppercase tracking-widest mb-2">Lokacja</p>
                  <p className="text-sm font-medium text-pandora-text/85">{b.map}</p>
                </div>
                <div className="bg-pandora-dark/30 rounded-xl p-5 border border-pandora-border/20 border-l-2 border-l-pandora-gold/20">
                  <p className="text-[11px] text-pandora-muted/80 uppercase tracking-widest mb-2">Nagroda</p>
                  <p className="text-sm font-medium text-pandora-gold/80">{b.reward}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <SectionDivider />

      <InfoBox type="info">
        <p className="text-sm">Dane o bossach pochodza z oficjalnej <a href="https://forum.pandoramt2.pl/topic/31300-s2-prezentacja-serwera/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold underline">Prezentacji Serwera</a>. World bossy (Infernus, Balathor) wymagaja duzej grupy graczy.</p>
      </InfoBox>
    </div>
  )
}


