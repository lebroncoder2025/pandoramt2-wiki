import type { ReactNode } from 'react'

export function PageHeader({ title, description, icon }: { title: string; description: string; icon?: ReactNode }) {
  return (
    <div className="mb-8 pb-6 border-b border-pandora-border/30 animate-fade-in">
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-pandora-gold/8 border border-pandora-gold/15 flex items-center justify-center text-pandora-gold">
            {icon}
          </div>
        )}
        <h1 className="font-display text-2xl md:text-3xl font-bold gold-text tracking-tight">{title}</h1>
      </div>
      <p className="text-pandora-muted text-sm md:text-base max-w-2xl leading-relaxed">{description}</p>
    </div>
  )
}

export function Card({ children, className = '', glow = false, onClick }: { children: ReactNode; className?: string; glow?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-pandora-card/60 border border-pandora-border/40 rounded-xl p-5 md:p-6
        hover:border-pandora-border/60 transition-all duration-200 card-hover
        ${glow ? 'animate-pulse-gold' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export function StatBox({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="bg-pandora-card/60 border border-pandora-border/40 rounded-lg p-4 md:p-5 hover:border-pandora-gold/20 transition-all group">
      <div className="flex items-center gap-2 mb-1.5">
        {icon && <span className="text-pandora-gold/80 group-hover:text-pandora-gold transition-colors">{icon}</span>}
        <span className="text-[11px] text-pandora-muted uppercase tracking-widest font-medium">{label}</span>
      </div>
      <p className="text-xl md:text-2xl font-bold text-pandora-gold font-display">{value}</p>
    </div>
  )
}

export function DataTable({ headers, rows, highlightFirst = false }: { headers: string[]; rows: string[][]; highlightFirst?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-pandora-border/40 mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-pandora-dark/60">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-pandora-gold/90 font-semibold text-[11px] uppercase tracking-widest border-b border-pandora-border/40">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-pandora-border/20 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-3 ${ci === 0 && highlightFirst ? 'text-pandora-gold font-medium' : 'text-pandora-text/85'}`}>{cell}</td>
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
    gold: 'bg-pandora-gold/8 text-pandora-gold border-pandora-gold/15',
    red: 'bg-pandora-red/8 text-pandora-red border-pandora-red/15',
    green: 'bg-pandora-green/8 text-pandora-green border-pandora-green/15',
    blue: 'bg-pandora-blue/8 text-pandora-blue border-pandora-blue/15',
    purple: 'bg-pandora-purple/8 text-pandora-purple border-pandora-purple/15',
    orange: 'bg-pandora-orange/8 text-pandora-orange border-pandora-orange/15',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${colors[color]}`}>
      {children}
    </span>
  )
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-display text-lg md:text-xl font-bold text-pandora-gold-light mb-4 mt-8 first:mt-0 scroll-mt-20 flex items-center gap-3">
      <div className="w-1 h-6 rounded-full bg-pandora-gold/40" />
      {children}
    </h2>
  )
}

export function InfoBox({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'warning' | 'tip' }) {
  const styles = {
    info: 'border-pandora-blue/20 bg-pandora-blue/4',
    warning: 'border-pandora-orange/20 bg-pandora-orange/4',
    tip: 'border-pandora-green/20 bg-pandora-green/4',
  }
  const labels = { info: 'Info', warning: 'Uwaga', tip: 'Porada' }
  const labelColors = {
    info: 'text-pandora-blue',
    warning: 'text-pandora-orange',
    tip: 'text-pandora-green',
  }
  return (
    <div className={`border-l-2 rounded-lg p-4 my-5 ${styles[type]}`}>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${labelColors[type]} mb-1 block`}>{labels[type]}</span>
      <div className="text-pandora-text/85">{children}</div>
    </div>
  )
}

export function TabGroup({ tabs, activeTab, onTabChange }: { tabs: string[]; activeTab: number; onTabChange: (i: number) => void }) {
  return (
    <div className="flex gap-0 border-b border-pandora-border/40 mb-6 overflow-x-auto">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onTabChange(i)}
          className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
            i === activeTab
              ? 'border-pandora-gold text-pandora-gold'
              : 'border-transparent text-pandora-muted hover:text-pandora-text hover:border-pandora-border'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
