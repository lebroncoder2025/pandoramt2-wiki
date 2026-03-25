import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Sword, Map, Castle, Skull, Shield, Gem, Dog, Fish, Pickaxe, Trophy, FlaskConical, Zap, BookOpen, Lightbulb, Calculator, ChevronDown, ExternalLink, Info } from 'lucide-react'

const navGroups = [
  {
    label: 'Podstawy',
    items: [
      { path: '/server-info', label: 'Informacje o Serwerze', icon: Info },
      { path: '/classes', label: 'Klasy Postaci', icon: Sword },
      { path: '/tips', label: 'Porady & Skróty', icon: Lightbulb },
    ]
  },
  {
    label: 'Świat Gry',
    items: [
      { path: '/maps', label: 'Mapy', icon: Map },
      { path: '/dungeons', label: 'Dungeony', icon: Castle },
      { path: '/bosses', label: 'Bossy & Questy', icon: Skull },
    ]
  },
  {
    label: 'Systemy',
    items: [
      { path: '/equipment', label: 'Ekwipunek & Bonusy', icon: Shield },
      { path: '/soul-stones', label: 'Kamienie Dusz', icon: Gem },
      { path: '/pet-system', label: 'System Zwierzaków', icon: Dog },
      { path: '/skills', label: 'Umiejętności', icon: Zap },
    ]
  },
  {
    label: 'Profesje',
    items: [
      { path: '/fishing', label: 'Rybołówstwo', icon: Fish },
      { path: '/mining', label: 'Górnictwo', icon: Pickaxe },
    ]
  },
  {
    label: 'Postęp',
    items: [
      { path: '/rank-system', label: 'System Rang', icon: Trophy },
      { path: '/biologist', label: 'Biolog & Kolekcjoner', icon: FlaskConical },
      { path: '/calculator', label: 'Kalkulator', icon: Calculator },
    ]
  },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<string[]>(navGroups.map(g => g.label))
  const location = useLocation()

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev =>
      prev.includes(label) ? prev.filter(g => g !== label) : [...prev, label]
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72
        bg-pandora-dark border-r border-pandora-border
        overflow-y-auto transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-5 border-b border-pandora-border">
          <Link to="/" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pandora-gold to-yellow-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-pandora-dark" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold gold-gradient">PandoraMT2</h1>
              <p className="text-xs text-pandora-muted">Kompletny Przewodnik</p>
            </div>
          </Link>
        </div>

        <nav className="p-3">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-1">
              <button
                onClick={() => toggleGroup(group.label)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-pandora-muted hover:text-pandora-gold transition-colors"
              >
                {group.label}
                <ChevronDown className={`w-3 h-3 transition-transform ${expandedGroups.includes(group.label) ? '' : '-rotate-90'}`} />
              </button>
              {expandedGroups.includes(group.label) && (
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.path
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
                          ${isActive
                            ? 'bg-pandora-gold/10 text-pandora-gold border border-pandora-gold/20'
                            : 'text-pandora-text hover:bg-pandora-card hover:text-pandora-gold-light border border-transparent'
                          }
                        `}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 m-3 mt-4 rounded-lg bg-gradient-to-br from-pandora-gold/10 to-pandora-purple/10 border border-pandora-gold/20">
          <p className="text-xs text-pandora-muted mb-2">Oficjalne linki</p>
          <div className="space-y-1.5">
            <a href="https://pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-pandora-gold hover:text-pandora-gold-light transition-colors">
              <ExternalLink className="w-3 h-3" /> Strona główna
            </a>
            <a href="https://pandoramt2.pl/main/download" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-pandora-gold hover:text-pandora-gold-light transition-colors">
              <ExternalLink className="w-3 h-3" /> Pobierz grę
            </a>
            <a href="https://forum.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-pandora-gold hover:text-pandora-gold-light transition-colors">
              <ExternalLink className="w-3 h-3" /> Forum
            </a>
            <a href="https://discord.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-pandora-gold hover:text-pandora-gold-light transition-colors">
              <ExternalLink className="w-3 h-3" /> Discord
            </a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-pandora-darker/80 backdrop-blur-xl border-b border-pandora-border">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-pandora-card transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="hidden lg:block" />
            <div className="flex items-center gap-3">
              <a
                href="https://pandoramt2.pl/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-pandora-gold to-yellow-600 text-pandora-dark font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-pandora-gold/20 transition-all"
              >
                Zagraj Teraz
              </a>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-pandora-border px-4 py-6 text-center">
          <p className="text-xs text-pandora-muted">
            Nieoficjalny przewodnik stworzony dla społeczności PandoraMT2.pl © 2020–2026. Wszystkie prawa do gry Metin2 należą do ich właścicieli.
          </p>
        </footer>
      </div>
    </div>
  )
}
