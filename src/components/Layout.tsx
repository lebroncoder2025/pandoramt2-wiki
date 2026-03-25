import { useEffect, useState } from 'react'
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

const SIDEBAR_WIDTH = 288 // px = w-72 = 18rem

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<string[]>(navGroups.map(g => g.label))
  const location = useLocation()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev =>
      prev.includes(label) ? prev.filter(g => g !== label) : [...prev, label]
    )
  }

  return (
    <div className="bg-pandora-darker text-pandora-text font-body">
      {/* Mobile overlay */}
      {sidebarOpen && !isDesktop && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — inline styles guarantee positioning */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 50,
          height: '100dvh',
          width: SIDEBAR_WIDTH,
          transform: (sidebarOpen || isDesktop) ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          overflow: 'hidden',
        }}
        className="bg-pandora-dark border-r border-pandora-border/50"
      >
        <div className="h-full overflow-y-auto">
        <div className="p-6 border-b border-pandora-border/50 sticky top-0 bg-pandora-dark z-10">
          <Link to="/" className="flex items-center gap-4 group" onClick={() => setSidebarOpen(false)}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pandora-gold to-yellow-600 flex items-center justify-center shadow-lg shadow-pandora-gold/20 group-hover:shadow-pandora-gold/40 transition-all">
              <Sword className="w-6 h-6 text-pandora-dark" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pandora-gold to-pandora-gold-light">PandoraMT2</h1>
              <p className="text-xs text-pandora-muted font-medium tracking-wide">Kompletny Przewodnik</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-6">
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-2">
              <button
                onClick={() => toggleGroup(group.label)}
                className="w-full flex items-center justify-between px-2 text-xs font-bold uppercase tracking-widest text-pandora-muted hover:text-pandora-gold transition-colors"
              >
                {group.label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedGroups.includes(group.label) ? '' : '-rotate-90'}`} />
              </button>
              
              <div className={`space-y-1 overflow-hidden transition-all duration-300 ${expandedGroups.includes(group.label) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive
                          ? 'bg-gradient-to-r from-pandora-gold/10 to-transparent text-pandora-gold border-l-2 border-pandora-gold shadow-sm'
                          : 'text-pandora-text hover:bg-pandora-card hover:text-white border-l-2 border-transparent hover:border-pandora-border'
                        }
                      `}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-pandora-gold' : 'text-pandora-muted'}`} />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-5 mx-4 mt-8 mb-6 rounded-2xl bg-gradient-to-br from-pandora-card to-pandora-dark relative overflow-hidden border border-pandora-border/50 group hover:border-pandora-gold/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-r from-pandora-gold/5 to-pandora-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-xs font-bold uppercase tracking-widest text-pandora-muted mb-4">Oficjalne linki</p>
          <div className="space-y-3 relative z-10">
            <a href="https://pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-pandora-text hover:text-pandora-gold transition-colors">
              <ExternalLink className="w-4 h-4 text-pandora-muted" /> Strona główna
            </a>
            <a href="https://pandoramt2.pl/main/download" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-pandora-text hover:text-pandora-gold transition-colors">
              <ExternalLink className="w-4 h-4 text-pandora-muted" /> Pobierz grę
            </a>
            <a href="https://forum.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-pandora-text hover:text-pandora-gold transition-colors">
              <ExternalLink className="w-4 h-4 text-pandora-muted" /> Forum
            </a>
            <a href="https://discord.pandoramt2.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-pandora-text hover:text-pandora-gold transition-colors">
              <ExternalLink className="w-4 h-4 text-pandora-muted" /> Discord
            </a>
          </div>
        </div>
        </div>
      </aside>

      {/* Main content — inline styles guarantee the offset */}
      <div
        style={{
          marginLeft: isDesktop ? SIDEBAR_WIDTH : 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
          transition: 'margin-left 0.3s ease',
        }}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-pandora-darker/80 backdrop-blur-xl border-b border-pandora-border/50" style={{ minHeight: 64 }}>
          <div className="flex items-center justify-between px-6 py-3">
            {!isDesktop && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl text-pandora-muted hover:text-white hover:bg-pandora-card transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
            {isDesktop && <div />}
            <a
              href="https://pandoramt2.pl/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-pandora-gold to-yellow-600 text-pandora-dark font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-pandora-gold/20 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Zagraj Teraz
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-pandora-border/50 py-8 px-6 text-center bg-pandora-dark/50">
          <p className="text-sm text-pandora-muted/80 max-w-2xl mx-auto leading-relaxed">
            Nieoficjalny przewodnik stworzony dla społeczności PandoraMT2.pl © 2020–2026.<br/>
            Wszystkie prawa do gry Metin2 należą do ich właścicieli.
          </p>
        </footer>
      </div>
    </div>
  )
}
