import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Sword, Map, Castle, Skull, Shield, Gem, Dog, Fish, Pickaxe, Trophy, FlaskConical, Zap, Lightbulb, Calculator, ChevronRight, ExternalLink, Info, Calendar } from 'lucide-react'

const navGroups = [
  {
    label: 'Podstawy',
    items: [
      { path: '/server-info', label: 'Informacje o Serwerze', icon: Info },
      { path: '/classes', label: 'Klasy Postaci', icon: Sword },
      { path: '/tips', label: 'Porady & Skróty', icon: Lightbulb },
      { path: '/events', label: 'Eventy', icon: Calendar },
    ]
  },
  {
    label: 'Świat Gry',
    items: [
      { path: '/maps', label: 'Mapy', icon: Map },
      { path: '/dungeons', label: 'Dungeony', icon: Castle },
      { path: '/bosses', label: 'Bossy', icon: Skull },
    ]
  },
  {
    label: 'Systemy',
    items: [
      { path: '/equipment', label: 'Ekwipunek & Bonusy', icon: Shield },
      { path: '/soul-stones', label: 'Kamienie Dusz', icon: Gem },
      { path: '/pet-system', label: 'Zwierzaki', icon: Dog },
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

const SIDEBAR_WIDTH = 272

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<string[]>(navGroups.map(g => g.label))
  const location = useLocation()

  useEffect(() => { setSidebarOpen(false) }, [location.pathname])

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
      {sidebarOpen && !isDesktop && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 50,
          height: '100dvh',
          width: SIDEBAR_WIDTH,
          transform: (sidebarOpen || isDesktop) ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease',
          overflow: 'hidden',
        }}
        className="bg-pandora-dark border-r border-pandora-border/30"
      >
        <div className="h-full overflow-y-auto flex flex-col">
          {/* Logo */}
          <div className="px-5 py-5 border-b border-pandora-border/20 sticky top-0 bg-pandora-dark z-10">
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setSidebarOpen(false)}>
              <div className="w-9 h-9 rounded-lg bg-pandora-gold/10 border border-pandora-gold/20 flex items-center justify-center group-hover:bg-pandora-gold/15 transition-colors">
                <Sword className="w-[18px] h-[18px] text-pandora-gold" />
              </div>
              <div>
                <h1 className="font-display text-base font-bold gold-text leading-tight">PandoraMT2</h1>
                <p className="text-[10px] text-pandora-muted/60 tracking-wider uppercase">Przewodnik</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-5">
            {navGroups.map((group) => (
              <div key={group.label}>
                <button
                  onClick={() => toggleGroup(group.label)}
                  className="w-full flex items-center gap-1.5 px-2 mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-pandora-muted/50 hover:text-pandora-muted/70 transition-colors"
                >
                  <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${expandedGroups.includes(group.label) ? 'rotate-90' : ''}`} />
                  {group.label}
                </button>
                
                <div className={`space-y-0.5 overflow-hidden transition-all duration-250 ${expandedGroups.includes(group.label) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.path
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          flex items-center gap-2.5 px-3 py-[7px] rounded-lg text-[13px] transition-all duration-150 relative
                          ${isActive
                            ? 'bg-pandora-gold/8 text-pandora-gold font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-4 before:rounded-full before:bg-pandora-gold/60'
                            : 'text-pandora-text/55 hover:text-pandora-text/80 hover:bg-pandora-card/40'
                          }
                        `}
                      >
                        <Icon className={`w-[15px] h-[15px] shrink-0 ${isActive ? 'text-pandora-gold' : 'text-pandora-muted/40'}`} />
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Links */}
          <div className="px-4 py-4 mt-auto border-t border-pandora-border/15">
            <div className="space-y-0.5">
              {[
                { label: 'pandoramt2.pl', url: 'https://pandoramt2.pl' },
                { label: 'Pobierz grę', url: 'https://pandoramt2.pl/main/download' },
                { label: 'Forum', url: 'https://forum.pandoramt2.pl' },
                { label: 'Discord', url: 'https://discord.pandoramt2.pl' },
              ].map(link => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-pandora-muted/40 hover:text-pandora-muted/70 transition-colors rounded">
                  <ExternalLink className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div
        style={{
          marginLeft: isDesktop ? SIDEBAR_WIDTH : 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
          transition: 'margin-left 0.25s ease',
        }}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 bg-pandora-darker/90 backdrop-blur-lg border-b border-pandora-border/20" style={{ minHeight: 52 }}>
          <div className="flex items-center justify-between px-5 py-2">
            {!isDesktop ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 -ml-2 rounded-lg text-pandora-muted hover:text-pandora-text transition-colors"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                <Link to="/" className="font-display text-sm font-bold gold-text">PandoraMT2</Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {(() => {
                  const currentItem = navGroups.flatMap(g => g.items).find(i => i.path === location.pathname)
                  if (!currentItem) return null
                  const Icon = currentItem.icon
                  return (
                    <>
                      <Icon className="w-4 h-4 text-pandora-muted/50" strokeWidth={1.5} />
                      <span className="text-[13px] text-pandora-muted/60 font-medium">{currentItem.label}</span>
                    </>
                  )
                })()}
              </div>
            )}
            <a
              href="https://pandoramt2.pl/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-pandora-gold/8 border border-pandora-gold/15 text-pandora-gold text-[12px] font-semibold rounded-lg hover:bg-pandora-gold/12 hover:border-pandora-gold/25 transition-all"
            >
              Zagraj Teraz
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-5 py-8 md:px-8 md:py-10 lg:px-12">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-pandora-border/15 py-5 px-5 text-center">
          <p className="text-[11px] text-pandora-muted/40 leading-relaxed">
            Nieoficjalny przewodnik PandoraMT2.pl © 2020–2026 · Wszystkie prawa do Metin2 należą do ich właścicieli
          </p>
        </footer>
      </div>
    </div>
  )
}
