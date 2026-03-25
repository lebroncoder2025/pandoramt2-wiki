import { useState, useEffect } from 'react'
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

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev =>
      prev.includes(label) ? prev.filter(g => g !== label) : [...prev, label]
    )
  }

  return (
    <div className="relative min-h-screen bg-pandora-darker">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — always fixed */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-pandora-border bg-pandora-dark transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-pandora-border px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pandora-gold to-yellow-600">
              <BookOpen className="h-5 w-5 text-pandora-dark" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold gold-gradient-text">PandoraMT2</h1>
              <p className="text-xs text-pandora-muted">Kompletny Przewodnik</p>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1.5 text-pandora-muted hover:bg-pandora-card hover:text-pandora-text lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar nav — scrollable */}
        <nav className="sidebar-scroll flex-1 overflow-y-auto p-3">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-1">
              <button
                onClick={() => toggleGroup(group.label)}
                className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-pandora-muted transition-colors hover:text-pandora-gold"
              >
                {group.label}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${expandedGroups.includes(group.label) ? '' : '-rotate-90'}`} />
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
                        className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all ${
                          isActive
                            ? 'border-pandora-gold/20 bg-pandora-gold/10 text-pandora-gold'
                            : 'border-transparent text-pandora-text hover:bg-pandora-card hover:text-pandora-gold-light'
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar footer — links */}
        <div className="border-t border-pandora-border p-4">
          <p className="mb-2 text-xs text-pandora-muted">Oficjalne linki</p>
          <div className="space-y-1.5">
            {[
              { label: 'Strona główna', url: 'https://pandoramt2.pl' },
              { label: 'Pobierz grę', url: 'https://pandoramt2.pl/main/download' },
              { label: 'Forum', url: 'https://forum.pandoramt2.pl' },
              { label: 'Discord', url: 'https://discord.pandoramt2.pl' },
            ].map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-pandora-gold transition-colors hover:text-pandora-gold-light"
              >
                <ExternalLink className="h-3 w-3 shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content area — offset by sidebar width on lg */}
      <div className="flex min-h-screen flex-col lg:ml-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-pandora-border bg-pandora-darker/90 backdrop-blur-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-pandora-muted transition-colors hover:bg-pandora-card hover:text-pandora-text lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden lg:block" />
            <a
              href="https://pandoramt2.pl/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-pandora-gold to-yellow-600 px-4 py-2 text-sm font-semibold text-pandora-dark transition-all hover:shadow-lg hover:shadow-pandora-gold/20"
            >
              Zagraj Teraz
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden p-4 lg:p-8">
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
