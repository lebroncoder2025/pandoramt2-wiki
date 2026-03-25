import type { ReactNode } from 'react'

export function PageHeader({ title, description, icon }: { title: string; description: string; icon?: ReactNode }) {
  return (
    <div className="mb-12 animate-fade-in-up">
      <div className="flex items-center gap-4 mb-3">
        {icon && <span className="text-pandora-gold text-3xl">{icon}</span>}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gold-gradient">{title}</h1>
      </div>
      <p className="text-pandora-muted text-lg md:text-xl max-w-3xl leading-relaxed">{description}</p>
    </div>
  )
}

export function Card({ children, className = '', glow = false, onClick }: { children: ReactNode; className?: string; glow?: boolean; onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`bg-pandora-card border border-pandora-border rounded-2xl p-6 md:p-8 hover:border-pandora-gold/30 transition-all duration-300 ${glow ? 'animate-pulse-gold' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function StatBox({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="bg-pandora-card border border-pandora-border rounded-2xl p-5 md:p-6 hover:border-pandora-gold/30 transition-all">
      <div className="flex items-center gap-2.5 mb-2">
        {icon && <span className="text-pandora-gold">{icon}</span>}
        <span className="text-xs text-pandora-muted uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <p className="text-2xl font-bold text-pandora-gold">{value}</p>
    </div>
  )
}

export function DataTable({ headers, rows, highlightFirst = false }: { headers: string[]; rows: string[][]; highlightFirst?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-pandora-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-pandora-card">
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-4 text-left text-pandora-gold font-semibold text-xs uppercase tracking-wider border-b border-pandora-border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-pandora-border/50 hover:bg-pandora-card/50 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-5 py-4 ${ci === 0 && highlightFirst ? 'text-pandora-gold font-medium' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Badge({ children, color = 'gold' }: { children: ReactNode; color?: 'gold' | 'red' | 'green' | 'blue' | 'purple' | 'orange' }) {
  const colors = {
    gold: 'bg-pandora-gold/10 text-pandora-gold border-pandora-gold/20',
    red: 'bg-pandora-red/10 text-pandora-red border-pandora-red/20',
    green: 'bg-pandora-green/10 text-pandora-green border-pandora-green/20',
    blue: 'bg-pandora-blue/10 text-pandora-blue border-pandora-blue/20',
    purple: 'bg-pandora-purple/10 text-pandora-purple border-pandora-purple/20',
    orange: 'bg-pandora-orange/10 text-pandora-orange border-pandora-orange/20',
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors[color]}`}>
      {children}
    </span>
  )
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-pandora-gold-light mb-6 mt-12 first:mt-0 scroll-mt-20">
      {children}
    </h2>
  )
}

export function InfoBox({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'warning' | 'tip' }) {
  const styles = {
    info: 'border-pandora-blue/30 bg-pandora-blue/5',
    warning: 'border-pandora-orange/30 bg-pandora-orange/5',
    tip: 'border-pandora-green/30 bg-pandora-green/5',
  }
  const icons = { info: 'ℹ️', warning: '⚠️', tip: '💡' }
  return (
    <div className={`border rounded-2xl p-5 md:p-6 my-6 flex gap-4 items-start ${styles[type]}`}>
      <span className="text-xl shrink-0 mt-0.5">{icons[type]}</span>
      <div className="flex-1">{children}</div>
    </div>
  )
}

export function TabGroup({ tabs, activeTab, onTabChange }: { tabs: string[]; activeTab: number; onTabChange: (i: number) => void }) {
  return (
    <div className="flex gap-1.5 p-1.5 bg-pandora-card rounded-xl border border-pandora-border mb-8 overflow-x-auto">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onTabChange(i)}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
            i === activeTab
              ? 'bg-pandora-gold/15 text-pandora-gold shadow-sm'
              : 'text-pandora-muted hover:text-pandora-text hover:bg-pandora-dark/50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
