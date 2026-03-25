import { Skull } from 'lucide-react'
import { PageHeader, DataTable, Card, SectionTitle, Badge } from '../components/UI.tsx'
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

      <SectionTitle>Misje fabularne</SectionTitle>
      <Card>
        <h3 className="font-display font-bold text-pandora-gold mb-3">Zabójca PVP</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-pandora-muted">Wymagane zabójstwa</p>
            <p className="text-lg font-bold">500 graczy</p>
          </div>
          <div>
            <p className="text-xs text-pandora-muted">Nagroda</p>
            <p className="text-lg font-bold text-pandora-gold">500M Yang + Tęczowy Kamień</p>
          </div>
        </div>
      </Card>

      <SectionTitle>Hierarchia trudności Bossów</SectionTitle>
      <div className="overflow-x-auto rounded-xl border border-pandora-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-pandora-card">
              <th className="px-4 py-3 text-left text-pandora-gold font-semibold text-xs uppercase">Boss</th>
              <th className="px-4 py-3 text-left text-pandora-gold font-semibold text-xs uppercase">Trudność</th>
              <th className="px-4 py-3 text-left text-pandora-gold font-semibold text-xs uppercase">Rekomendowany lvl</th>
              <th className="px-4 py-3 text-left text-pandora-gold font-semibold text-xs uppercase">Typ</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Wódz Orków', '⭐', '30+', 'Solo'],
              ['Królowa Pająków', '⭐⭐', '45+', 'Solo'],
              ['Olbrzymi Żółw', '⭐⭐', '55+', 'Solo'],
              ['Ognisty Król', '⭐⭐⭐', '70+', 'Solo / Grupa'],
              ['Dziewięć Ogonów', '⭐⭐⭐', '75+', 'Solo / Grupa'],
              ['Zjawa Żółtego Tygrysa', '⭐⭐⭐', '80+', 'Solo / Grupa'],
              ['Minotaur', '⭐⭐⭐⭐', '120+', 'Grupa'],
              ['Infernus', '⭐⭐⭐⭐⭐', '150+', 'Duża Grupa'],
              ['Balathor', '⭐⭐⭐⭐⭐', '200+', 'Raid'],
            ].map(row => (
              <tr key={row[0]} className="border-b border-pandora-border/50 hover:bg-pandora-card/50">
                <td className="px-4 py-3 text-pandora-gold font-medium">{row[0]}</td>
                <td className="px-4 py-3">{row[1]}</td>
                <td className="px-4 py-3">{row[2]}</td>
                <td className="px-4 py-3">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
