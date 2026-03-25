import type { ReactNode } from 'react'

export function PageHeader({ title, description, icon }: { title: string; description: string; icon?: ReactNode }) {
  return (
    <div className="mb-8 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-pandora-gold">{icon}</span>}
        <h1 className="font-display text-3xl lg:text-4xl font-bold gold-gradient-text">{title}</h1>
      </div>
      <p className="text-pandora-muted text-lg max-w-3xl leading-relaxed">{description}</p>
    </div>
  )
}

export function Card({ children, className = '', glow = false }: { children: ReactNode; className?: string; glow?: boolean }) {
  return (
    <div className={`rounded-xl border border-pandora-border bg-pandora-card p-5 transition-all duration-300 hover:border-pandora-gold/30 ${glow ? 'animate-pulse-gold' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function StatBox({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="rounded-xl border border-pandora-border bg-pandora-card p-4 transition-all hover:border-pandora-gold/30">
      <div className="mb-1 flex items-center gap-2">
        {icon && <span className="text-pandora-gold">{icon}</span>}
        <span className="text-xs uppercase tracking-wider text-pandora-muted">{label}</span>
      </div>
      <p className="text-xl font-bold text-pandora-gold">{value}</p>
    </div>
  )
}

export function DataTable({ headers, rows, highlightFirst = false }: { headers: string[]; rows: string[][]; highlightFirst?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-pandora-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-pandora-card">
            {headers.map((h, i) => (
              <th key={i} className="border-b border-pandora-border px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-pandora-gold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-pandora-border/50 transition-colors hover:bg-pandora-card/50">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-3 ${ci === 0 && highlightFirst ? 'font-medium text-pandora-gold' : ''}`}>{cell}</td>
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
    gold: 'border-pandora-gold/20 bg-pandora-gold/10 text-pandora-gold',
    red: 'border-pandora-red/20 bg-pandora-red/10 text-pandora-red',
    green: 'border-pandora-green/20 bg-pandora-green/10 text-pandora-green',
    blue: 'border-pandora-blue/20 bg-pandora-blue/10 text-pandora-blue',
    purple: 'border-pandora-purple/20 bg-pandora-purple/10 text-pandora-purple',
    orange: 'border-pandora-orange/20 bg-pandora-orange/10 text-pandora-orange',
  }
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  )
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-4 mt-8 scroll-mt-20 font-display text-xl font-bold text-pandora-gold-light first:mt-0 lg:text-2xl">
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
  return (
    <div className={`my-4 rounded-xl border p-4 ${styles[type]}`}>
      {children}
    </div>
  )
}

export function TabGroup({ tabs, activeTab, onTabChange }: { tabs: string[]; activeTab: number; onTabChange: (i: number) => void }) {
  return (
    <div className="mb-6 flex gap-1 overflow-x-auto rounded-lg border border-pandora-border bg-pandora-card p-1">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onTabChange(i)}
          className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all ${
            i === activeTab
              ? 'bg-pandora-gold/15 text-pandora-gold'
              : 'text-pandora-muted hover:text-pandora-text'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
