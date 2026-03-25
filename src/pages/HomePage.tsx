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
      <section className="relative rounded-2xl overflow-hidden mb-12 bg-hero-pattern border border-pandora-border">
        <div className="absolute inset-0 bg-gradient-to-br from-pandora-gold/5 via-transparent to-pandora-purple/5" />
        <div className="relative px-6 py-16 lg:px-12 lg:py-24 text-center">
          <h1 className="font-display text-4xl lg:text-6xl font-black mb-4">
            <span className="gold-gradient">PandoraMT2</span>
          </h1>
          <p className="text-xl lg:text-2xl text-pandora-muted mb-2 font-display">
            Jedyna poprawnie odwzorowana legenda Metin2
          </p>
          <p className="text-pandora-muted max-w-2xl mx-auto mb-8">
            Kompletny przewodnik po serwerze — mapy, dungeony, bossy, ekwipunek, systemy rozgrywki i porady 
            dla nowych i doświadczonych graczy.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="https://pandoramt2.pl/main/download" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pandora-gold to-yellow-600 text-pandora-dark font-bold rounded-xl hover:shadow-xl hover:shadow-pandora-gold/20 transition-all">
              <Download className="w-5 h-5" /> Pobierz Grę
            </a>
            <a href="https://pandoramt2.pl/auth/register" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-pandora-gold text-pandora-gold font-bold rounded-xl hover:bg-pandora-gold/10 transition-all">
              <Users className="w-5 h-5" /> Zarejestruj się
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-xl mx-auto">
            {quickStats.map(s => (
              <div key={s.label} className="glass-card rounded-xl p-3">
                <div className="text-xs text-pandora-muted">{s.label}</div>
                <div className="text-lg font-bold text-pandora-gold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting Equipment */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold gold-gradient mb-6">🎒 Ekwipunek Startowy</h2>
        <div className="glass-card rounded-xl p-6">
          <p className="text-pandora-muted mb-4">Jako gracz Pandory nie rozpoczniesz przygody z pustymi rękoma. Oto co otrzymujesz na start:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Buty Wiatru', 'Pierścień Teleportacji (TAB)', '200x Peleryna Męstwa', 'Koń 21 poziomu',
              'Podstawowy EQ +9', '10 Ziel. + Fiol. Mikstur', 'Wszystkie języki na M1', '100% szansa na konia'
            ].map(item => (
              <div key={item} className="flex items-center gap-2 bg-pandora-dark/50 rounded-lg p-3 border border-pandora-border/50">
                <div className="w-2 h-2 rounded-full bg-pandora-gold shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold gold-gradient mb-6">📖 Przewodnik po Serwerze</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {features.map(f => {
            const Icon = f.icon
            return (
              <Link
                key={f.path}
                to={f.path}
                className="group bg-pandora-card border border-pandora-border rounded-xl p-5 hover:border-pandora-gold/40 hover:bg-pandora-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pandora-gold/10 flex items-center justify-center shrink-0 group-hover:bg-pandora-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-pandora-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-pandora-text group-hover:text-pandora-gold transition-colors flex items-center gap-2">
                      {f.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-pandora-muted mt-1">{f.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Server Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Strona Główna', url: serverInfo.website, desc: 'Oficjalna strona serwera' },
          { label: 'Forum', url: serverInfo.forum, desc: 'Społeczność i dyskusje' },
          { label: 'Discord', url: serverInfo.discord, desc: 'Czat głosowy i tekstowy' },
        ].map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 hover:border-pandora-gold/40 transition-all group">
            <h3 className="font-semibold text-pandora-gold group-hover:text-pandora-gold-light">{link.label}</h3>
            <p className="text-sm text-pandora-muted">{link.desc}</p>
          </a>
        ))}
      </section>
    </div>
  )
}
