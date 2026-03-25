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
    <div className="mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden rounded-2xl border border-pandora-border bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-pandora-gold/5 via-transparent to-pandora-purple/5" />
        <div className="relative px-6 py-16 text-center lg:px-12 lg:py-24">
          <h1 className="font-display text-4xl font-black mb-4 lg:text-6xl">
            <span className="gold-gradient-text">PandoraMT2</span>
          </h1>
          <p className="mb-2 font-display text-xl text-pandora-muted lg:text-2xl">
            Jedyna poprawnie odwzorowana legenda Metin2
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-pandora-muted">
            Kompletny przewodnik po serwerze — mapy, dungeony, bossy, ekwipunek, systemy rozgrywki i porady 
            dla nowych i doświadczonych graczy.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <a href="https://pandoramt2.pl/main/download" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pandora-gold to-yellow-600 px-6 py-3 font-bold text-pandora-dark transition-all hover:shadow-xl hover:shadow-pandora-gold/20">
              <Download className="h-5 w-5" /> Pobierz Grę
            </a>
            <a href="https://pandoramt2.pl/auth/register" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-pandora-gold px-6 py-3 font-bold text-pandora-gold transition-all hover:bg-pandora-gold/10">
              <Users className="h-5 w-5" /> Zarejestruj się
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 lg:grid-cols-4">
            {quickStats.map(s => (
              <div key={s.label} className="glass-card p-3">
                <div className="text-xs text-pandora-muted">{s.label}</div>
                <div className="text-lg font-bold text-pandora-gold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting Equipment */}
      <section className="mb-12">
        <h2 className="mb-6 font-display text-2xl font-bold gold-gradient-text">🎒 Ekwipunek Startowy</h2>
        <div className="glass-card p-6">
          <p className="mb-4 text-pandora-muted">Jako gracz Pandory nie rozpoczniesz przygody z pustymi rękoma. Oto co otrzymujesz na start:</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Buty Wiatru', 'Pierścień Teleportacji (TAB)', '200x Peleryna Męstwa', 'Koń 21 poziomu',
              'Podstawowy EQ +9', '10 Ziel. + Fiol. Mikstur', 'Wszystkie języki na M1', '100% szansa na konia'
            ].map(item => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-pandora-border/50 bg-pandora-dark/50 p-3">
                <div className="h-2 w-2 shrink-0 rounded-full bg-pandora-gold" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <h2 className="mb-6 font-display text-2xl font-bold gold-gradient-text">📖 Przewodnik po Serwerze</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map(f => {
            const Icon = f.icon
            return (
              <Link
                key={f.path}
                to={f.path}
                className="group rounded-xl border border-pandora-border bg-pandora-card p-5 transition-all duration-300 hover:border-pandora-gold/40 hover:bg-pandora-card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pandora-gold/10 transition-colors group-hover:bg-pandora-gold/20">
                    <Icon className="h-5 w-5 text-pandora-gold" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-2 font-semibold text-pandora-text transition-colors group-hover:text-pandora-gold">
                      {f.title}
                      <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-1 text-sm text-pandora-muted">{f.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Server Links */}
      <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { label: 'Strona Główna', url: serverInfo.website, desc: 'Oficjalna strona serwera' },
          { label: 'Forum', url: serverInfo.forum, desc: 'Społeczność i dyskusje' },
          { label: 'Discord', url: serverInfo.discord, desc: 'Czat głosowy i tekstowy' },
        ].map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
            className="glass-card p-5 transition-all hover:border-pandora-gold/40 group">
            <h3 className="font-semibold text-pandora-gold group-hover:text-pandora-gold-light">{link.label}</h3>
            <p className="text-sm text-pandora-muted">{link.desc}</p>
          </a>
        ))}
      </section>
    </div>
  )
}
