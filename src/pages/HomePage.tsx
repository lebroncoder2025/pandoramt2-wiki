import { Link } from 'react-router-dom'
import { Sword, Map, Castle, Skull, Shield, Gem, Dog, Fish, Pickaxe, Trophy, FlaskConical, Zap, Lightbulb, Calculator, Users, Download, ArrowRight } from 'lucide-react'
import { serverInfo } from '../data/serverData.ts'

const features = [
  { icon: Shield, title: 'Ekwipunek & Bonusy', desc: 'Pełna tabela bonusów, system ulepszeń, Magiczny Metal+', path: '/equipment' },
  { icon: Castle, title: 'Dungeony', desc: '7 unikalnych dungeonów — od Wieży Demonów po Świątynię Andun', path: '/dungeons' },
  { icon: Skull, title: 'Bossy', desc: 'Wszyscy bossy z czasami respawnu, lokacjami i nagrodami', path: '/bosses' },
  { icon: Gem, title: 'Kamienie Dusz', desc: 'Zwykłe i Legendarne Kamienie Dusz — pełny przegląd', path: '/soul-stones' },
  { icon: Dog, title: 'System Zwierzaków', desc: 'Umiejętności pupili, szkolenie, przedmioty i P+ bonusy', path: '/pet-system' },
  { icon: Map, title: 'Mapy', desc: 'Wszystkie mapy z wymaganymi poziomami i bossami', path: '/maps' },
  { icon: Fish, title: 'Rybołówstwo', desc: 'System wędek, Owoce Morza, Żetony Rybackie', path: '/fishing' },
  { icon: Pickaxe, title: 'Górnictwo', desc: 'Kilofy, Sztabki Złota, Tajemnicze Kryształy', path: '/mining' },
  { icon: Trophy, title: 'System Rang', desc: 'Od Parobka po Cesarza — bonusy PvP', path: '/rank-system' },
  { icon: FlaskConical, title: 'Biolog & Kolekcjoner', desc: 'Misje biologa, badania i kolekcje', path: '/biologist' },
  { icon: Zap, title: 'Umiejętności', desc: 'Dowodzenie, Polimorfia, szkolenie', path: '/skills' },
  { icon: Calculator, title: 'Kalkulator', desc: 'Oblicz koszt ulepszeń i rang', path: '/calculator' },
]

const quickStats = [
  { label: 'Typ', value: serverInfo.type },
  { label: 'Maks. Poziom', value: String(serverInfo.maxLevel) },
  { label: 'Kanały', value: String(serverInfo.channels) },
  { label: 'Klasy', value: String(serverInfo.classes) },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden mb-16 bg-hero-pattern border border-pandora-border/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-pandora-darker/90 via-pandora-dark/80 to-pandora-darker/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pandora-gold/10 via-transparent to-transparent" />
        
        <div className="relative px-6 py-20 lg:px-12 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pandora-gold/10 border border-pandora-gold/20 text-pandora-gold text-sm font-bold tracking-wider mb-8 uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pandora-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pandora-gold"></span>
            </span>
            Sezon 2026/2027
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pandora-gold via-pandora-gold-light to-pandora-gold animate-gradient-x">
              PandoraMT2
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-pandora-muted mb-6 font-display font-medium">
            Jedyna poprawnie odwzorowana legenda Metin2
          </p>
          <p className="text-pandora-muted/80 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Kompletny przewodnik po serwerze — mapy, dungeony, bossy, ekwipunek, systemy rozgrywki i porady 
            dla nowych oraz doświadczonych graczy. Wkrocz do gry perfekcyjnie przygotowany.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
            <a href="https://pandoramt2.pl/main/download" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pandora-gold to-yellow-600 text-pandora-dark font-black text-lg rounded-2xl hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] hover:-translate-y-1 transition-all duration-300">
              <Download className="w-6 h-6" /> Pobierz Grę
            </a>
            <a href="https://pandoramt2.pl/auth/register" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-pandora-dark/50 border-2 border-pandora-gold/50 text-pandora-gold hover:text-pandora-gold-light hover:border-pandora-gold hover:bg-pandora-gold/10 font-bold text-lg rounded-2xl backdrop-blur-sm transition-all duration-300">
              <Users className="w-6 h-6" /> Zarejestruj się
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto relative z-10">
            {quickStats.map(s => (
              <div key={s.label} className="bg-pandora-card/60 backdrop-blur-md rounded-2xl p-5 border border-pandora-border/50 hover:border-pandora-gold/30 hover:bg-pandora-card transition-all group">
                <div className="text-xs font-bold uppercase tracking-widest text-pandora-muted group-hover:text-pandora-muted/80 mb-2">{s.label}</div>
                <div className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-pandora-gold to-yellow-600">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting Equipment */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-3xl font-bold gold-gradient text-center">Ekwipunek Startowy</h2>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 bg-pandora-gold/5 blur-[100px] rounded-full pointer-events-none" />
          <p className="text-pandora-muted text-lg mb-8 text-center max-w-2xl mx-auto leading-relaxed">Jako gracz Pandory nie rozpoczniesz przygody z pustymi rękoma. Oto pakiet startowy ułatwiający pierwsze kroki:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              { text: 'Buty Wiatru', icon: <img src="https://wiki.pandoramt2.pl/images/items/72701.png" alt="buty" className="w-6 h-6 object-contain drop-shadow" onError={(e) => e.currentTarget.style.display = 'none'} /> },
              { text: 'Pierścień Teleportacji', icon: '💍' },
              { text: '200x Peleryna Męstwa', icon: '🧣' },
              { text: 'Koń 21 poziomu', icon: '🐎' },
              { text: 'Podstawowy EQ +9', icon: '⚔️' },
              { text: 'Mikstury+', icon: '🧪' },
              { text: 'Wszystkie języki na M1', icon: '📚' },
              { text: '100% szansa na konia', icon: '⭐' }
            ].map(item => (
              <div key={item.text} className="flex items-center gap-4 bg-pandora-dark/60 hover:bg-pandora-card rounded-xl p-4 border border-pandora-border/50 hover:border-pandora-gold/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-pandora-card border border-pandora-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-pandora-gold/40 transition-all text-xl shadow-inner">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-pandora-text/90 group-hover:text-white transition-colors">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-3xl font-bold gold-gradient text-center">Przewodnik po Serwerze</h2>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => {
            const Icon = f.icon
            return (
              <Link
                key={f.path}
                to={f.path}
                className="group bg-pandora-card/80 border border-pandora-border/60 rounded-2xl p-6 hover:border-pandora-gold/50 hover:bg-pandora-card hover:-translate-y-1 hover:shadow-xl hover:shadow-pandora-gold/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 bg-pandora-gold/5 blur-[50px] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pandora-dark to-pandora-card border border-pandora-border flex items-center justify-center shrink-0 group-hover:border-pandora-gold/40 group-hover:shadow-[0_0_15px_rgba(212,168,67,0.15)] transition-all">
                    <Icon className="w-7 h-7 text-pandora-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-pandora-text group-hover:text-pandora-gold transition-colors flex items-center gap-2 mb-2">
                      {f.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pandora-gold" />
                    </h3>
                    <p className="text-sm text-pandora-muted leading-relaxed line-clamp-2">{f.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Server Links */}
      <section className="mt-16 mb-8 relative border-t border-pandora-border/50 pt-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-pandora-darker text-xs font-bold tracking-widest uppercase text-pandora-muted">Przydatne Odnośniki</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Strona Główna', url: serverInfo.website, desc: 'Oficjalna strona serwera', icon: '🌐' },
            { label: 'Forum', url: serverInfo.forum, desc: 'Społeczność i dyskusje', icon: '💬' },
            { label: 'Discord', url: serverInfo.discord, desc: 'Czat głosowy i tekstowy', icon: '🎮' },
          ].map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 hover:border-pandora-gold/40 hover:bg-pandora-card hover:-translate-y-1 transition-all group flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pandora-dark border border-pandora-border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <div>
                <h3 className="font-bold text-pandora-gold group-hover:text-pandora-gold-light transition-colors">{link.label}</h3>
                <p className="text-xs text-pandora-muted mt-1">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
