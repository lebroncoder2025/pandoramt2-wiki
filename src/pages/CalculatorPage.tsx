import { useState } from 'react'
import { Calculator } from 'lucide-react'
import { PageHeader, Card, SectionTitle, TabGroup } from '../components/UI.tsx'
import { ranks, lifefruits } from '../data/serverData.ts'

function RankCalculator() {
  const [currentPoints, setCurrentPoints] = useState(0)
  const [targetRank, setTargetRank] = useState('Cesarz')

  const targetData = ranks.find(r => r.name === targetRank)
  const targetPoints = targetData ? parseInt(targetData.range.replace(/[^0-9]/g, '')) : 10000000
  const needed = Math.max(0, targetPoints - currentPoints)

  return (
    <Card>
      <h3 className="font-semibold text-pandora-gold mb-4">Kalkulator Rang</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-pandora-muted mb-1">Aktualne punkty rangi</label>
          <input
            type="number"
            value={currentPoints}
            onChange={e => setCurrentPoints(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full px-4 py-2 bg-pandora-dark border border-pandora-border rounded-lg text-pandora-text focus:border-pandora-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-pandora-muted mb-1">Docelowa ranga</label>
          <select
            value={targetRank}
            onChange={e => setTargetRank(e.target.value)}
            className="w-full px-4 py-2 bg-pandora-dark border border-pandora-border rounded-lg text-pandora-text focus:border-pandora-gold focus:outline-none"
          >
            {ranks.filter(r => r.bonusHP !== '—').map(r => (
              <option key={r.name} value={r.name}>{r.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-pandora-dark/50 rounded-xl p-4 border border-pandora-border/50 mb-4">
        <p className="text-sm text-pandora-muted mb-1">Potrzebne punkty</p>
        <p className="text-2xl font-bold text-pandora-gold">{needed.toLocaleString('pl-PL')}</p>
      </div>

      {needed > 0 && (
        <div className="space-y-2 text-sm">
          <p className="text-pandora-muted font-medium">Ile Owoców Życia potrzebujesz:</p>
          {lifefruits.map(f => (
            <div key={f.name} className="flex justify-between py-1 border-b border-pandora-border/30">
              <span className="text-pandora-text">{f.name} ({f.points} pkt)</span>
              <span className="text-pandora-gold font-medium">{Math.ceil(needed / f.points)}x</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

function UpgradeCalculator() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [targetLevel, setTargetLevel] = useState(9)
  const [metalPlus, setMetalPlus] = useState(false)

  const baseChances: Record<number, number> = {
    1: 100, 2: 100, 3: 90, 4: 70, 5: 50, 6: 30, 7: 20, 8: 15, 9: 10
  }

  const results = []
  let totalAvgAttempts = 0
  for (let lvl = currentLevel + 1; lvl <= targetLevel; lvl++) {
    const base = baseChances[lvl] || 10
    const chance = Math.min(100, base + (metalPlus ? 10 : 0))
    const avgAttempts = 100 / chance
    totalAvgAttempts += avgAttempts
    results.push({ level: `+${lvl}`, chance: `${chance}%`, avgAttempts: avgAttempts.toFixed(1) })
  }

  return (
    <Card>
      <h3 className="font-semibold text-pandora-gold mb-4">Kalkulator Ulepszeń</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-pandora-muted mb-1">Aktualny poziom</label>
          <select
            value={currentLevel}
            onChange={e => setCurrentLevel(parseInt(e.target.value))}
            className="w-full px-4 py-2 bg-pandora-dark border border-pandora-border rounded-lg text-pandora-text focus:border-pandora-gold focus:outline-none"
          >
            {[0,1,2,3,4,5,6,7,8].map(l => (
              <option key={l} value={l}>+{l}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-pandora-muted mb-1">Docelowy poziom</label>
          <select
            value={targetLevel}
            onChange={e => setTargetLevel(parseInt(e.target.value))}
            className="w-full px-4 py-2 bg-pandora-dark border border-pandora-border rounded-lg text-pandora-text focus:border-pandora-gold focus:outline-none"
          >
            {[1,2,3,4,5,6,7,8,9].filter(l => l > currentLevel).map(l => (
              <option key={l} value={l}>+{l}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={metalPlus}
              onChange={e => setMetalPlus(e.target.checked)}
              className="w-4 h-4 accent-amber-500"
            />
            <span className="text-sm text-pandora-muted">Magiczny Metal+ (+10%)</span>
          </label>
        </div>
      </div>

      <p className="text-xs text-pandora-muted mb-3 italic">*Szanse są szacunkowe. Rzeczywiste wartości mogą się różnić.</p>

      {results.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-pandora-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pandora-card">
                <th className="px-4 py-2 text-left text-pandora-gold">Poziom</th>
                <th className="px-4 py-2 text-left text-pandora-gold">Szansa</th>
                <th className="px-4 py-2 text-left text-pandora-gold">Śr. prób</th>
              </tr>
            </thead>
            <tbody>
              {results.map(r => (
                <tr key={r.level} className="border-b border-pandora-border/50">
                  <td className="px-4 py-2 text-pandora-gold font-medium">{r.level}</td>
                  <td className="px-4 py-2">{r.chance}</td>
                  <td className="px-4 py-2">{r.avgAttempts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 bg-pandora-dark/50 rounded-xl p-4 border border-pandora-border/50">
        <p className="text-sm text-pandora-muted">Łączna średnia prób od +{currentLevel} do +{targetLevel}:</p>
        <p className="text-xl font-bold text-pandora-gold">{totalAvgAttempts.toFixed(1)} prób</p>
      </div>
    </Card>
  )
}

export default function CalculatorPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Kalkulator"
        description="Kalkulator rang, ulepszeń i potrzebnych materiałów."
        icon={<Calculator className="w-8 h-8" />}
      />

      <TabGroup tabs={['Kalkulator Rang', 'Kalkulator Ulepszeń']} activeTab={tab} onTabChange={setTab} />

      {tab === 0 && <RankCalculator />}
      {tab === 1 && <UpgradeCalculator />}
    </div>
  )
}
