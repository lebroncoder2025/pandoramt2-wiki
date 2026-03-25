import { Link } from 'react-router-dom'
import { Sword, Map, Castle, Skull, Shield, Gem, Dog, Fish, Pickaxe, Trophy, FlaskConical, Zap, Lightbulb, Calculator, Users, Download, ArrowRight, Calendar } from 'lucide-react'
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
  { icon: Calendar, title: 'Eventy', desc: 'Lista wszystkich eventów serwerowych i ich nagrody', path: '/events' },
  { icon: Lightbulb, title: 'Porady & Skróty', desc: 'Przydatne wskazówki dla nowych graczy', path: '/tips' },
]

const quickStats = [
  { label: 'Typ', value: serverInfo.type },
  { label: 'Maks. Poziom', value: String(serverInfo.maxLevel) },
  { label: 'Kanały', value: String(serverInfo.channels) },
  { label: 'Klasy', value: String(serverInfo.classes) },
]

const systemRequirements = [
  { label: 'Klient', value: '~3.56 GB' },
  { label: 'System', value: 'Windows 8.1+' },
]

const serverHighlights = [
  { icon: '🏰', title: 'Old School Metin2', desc: 'Wierne odwzorowanie klasycznego Metin2. Projekt urozmaicony o kilka dodatków by umilić czas w grze.' },
  { icon: '⚔️', title: 'PvP Zbalansowane', desc: 'Raty poddano wielu korektom, aby dobrze wyważyć poszczególne etapy rozwoju. Przywrócono znaczenie PvP.' },
  { icon: '🌍', title: '5 Kanałów, 3 Królestwa', desc: 'Shinsoo, Jinno i Chunjo. Dynamiczna rozgrywka z handlem i gildiami.' },
  { icon: '🎪', title: '18 Eventów Serwerowych', desc: 'Deszcz Metinów, Zuo, Kosmiczna Inwazja, Loteria Tombola i wiele więcej.' },
  { icon: '🐉', title: 'Dungeony & Bossy', desc: '7 dungeonów od Wieży Demonów po Świątynię Andun. Bossy mapowe i dwaj Władcy: Infernus i Balathor.' },
  { icon: '🔄', title: 'Ciągłe Aktualizacje', desc: 'Aktywny zespół developerski. Najnowsza wersja klienta: v1.0.2.' },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden bg-hero-pattern border border-pandora-border/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-pandora-darker/90 via-pandora-dark/80 to-pandora-darker/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pandora-gold/10 via-transparent to-transparent" />
        
        <div className="relative px-6 py-20 md:py-24 lg:px-12 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pandora-gold/10 border border-pandora-gold/20 text-pandora-gold text-sm font-bold tracking-wider mb-8 uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pandora-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pandora-gold"></span>
            </span>
            Sezon 2026/2027
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pandora-gold via-pandora-gold-light to-pandora-gold animate-gradient-x">
              PandoraMT2
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-pandora-muted mb-4 font-display font-medium">
            Jedyna poprawnie odwzorowana legenda Metin2
          </p>
          <p className="text-pandora-muted/80 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto relative z-10">
            {quickStats.map(s => (
              <div key={s.label} className="bg-pandora-card/60 backdrop-blur-md rounded-2xl p-6 border border-pandora-border/50 hover:border-pandora-gold/30 hover:bg-pandora-card transition-all group">
                <div className="text-xs font-bold uppercase tracking-widest text-pandora-muted group-hover:text-pandora-muted/80 mb-3">{s.label}</div>
                <div className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-pandora-gold to-yellow-600">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starting Equipment */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gold-gradient text-center">🎁 Ekwipunek Startowy</h2>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="glass-card rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pandora-gold/5 blur-[100px] rounded-full pointer-events-none" />
          <p className="text-pandora-muted text-lg mb-10 text-center max-w-2xl mx-auto leading-relaxed">Jako gracz Pandory nie rozpoczniesz przygody z pustymi rękoma. Oto pakiet startowy ułatwiający pierwsze kroki:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {[
              { text: 'Buty Wiatru', icon: '👟', desc: 'Szybkość ruchu +40' },
              { text: 'Pierścień Teleportacji', icon: '💍', desc: 'Pod klawiszem TAB' },
              { text: '200x Peleryna Męstwa', icon: '🧣', desc: 'Ochrona dla nowych' },
              { text: 'Koń 21 poziomu', icon: '🐎', desc: 'Szybki transport' },
              { text: 'Podstawowy EQ +9', icon: '⚔️', desc: 'Broń + Zbroja' },
              { text: 'Mikstury+', icon: '🧪', desc: '10 Zielonych i Fioletowych' },
              { text: 'Wszystkie języki na M1', icon: '📚', desc: 'Gotowe umiejętności' },
              { text: '100% szansa na konia', icon: '⭐', desc: 'Pewne przywołanie' }
            ].map(item => (
              <div key={item.text} className="flex items-center gap-4 bg-pandora-dark/60 hover:bg-pandora-card rounded-xl p-5 border border-pandora-border/50 hover:border-pandora-gold/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-pandora-card border border-pandora-border flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-pandora-gold/40 transition-all text-2xl shadow-inner">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-semibold text-pandora-text/90 group-hover:text-white transition-colors block">{item.text}</span>
                  <span className="text-xs text-pandora-muted">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Highlights */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gold-gradient text-center">✨ Cechy Serwera</h2>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverHighlights.map(item => (
            <div key={item.title} className="bg-pandora-card/80 border border-pandora-border/60 rounded-2xl p-7 hover:border-pandora-gold/40 hover:bg-pandora-card transition-all group">
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-pandora-text group-hover:text-pandora-gold transition-colors mb-3">{item.title}</h3>
              <p className="text-sm text-pandora-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Preview */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gold-gradient text-center">📅 Eventy Serwerowe</h2>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="glass-card rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Raty Serwerowe', type: 'Stały', desc: 'Zwiększenie Exp, Drop i Yang o dany procent' },
              { name: 'Deszcz Metinów / Zuo', type: 'Losowy', desc: 'Metiny, Bossy i Władcy na wybranej mapie' },
              { name: 'Kosmiczna Inwazja', type: 'Community', desc: 'Zbierz 100 000 przedmiotów = raty dla serwera' },
            ].map(e => (
              <div key={e.name} className="bg-pandora-dark/60 rounded-xl p-6 border border-pandora-border/50 hover:border-pandora-gold/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-pandora-gold" />
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    e.type === 'Stały' ? 'bg-pandora-green/10 text-pandora-green border border-pandora-green/20' :
                    e.type === 'Losowy' ? 'bg-pandora-orange/10 text-pandora-orange border border-pandora-orange/20' :
                    'bg-pandora-purple/10 text-pandora-purple border border-pandora-purple/20'
                  }`}>{e.type}</span>
                </div>
                <h3 className="font-bold text-pandora-text mb-2">{e.name}</h3>
                <p className="text-sm text-pandora-muted leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/events" className="inline-flex items-center gap-2 text-pandora-gold hover:text-pandora-gold-light font-semibold transition-colors">
              Zobacz wszystkie 18 eventów <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gold-gradient text-center">📖 Przewodnik po Serwerze</h2>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => {
            const Icon = f.icon
            return (
              <Link
                key={f.path}
                to={f.path}
                className="group bg-pandora-card/80 border border-pandora-border/60 rounded-2xl p-7 hover:border-pandora-gold/50 hover:bg-pandora-card hover:-translate-y-1 hover:shadow-xl hover:shadow-pandora-gold/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-pandora-gold/5 blur-[50px] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pandora-dark to-pandora-card border border-pandora-border flex items-center justify-center shrink-0 group-hover:border-pandora-gold/40 group-hover:shadow-[0_0_15px_rgba(212,168,67,0.15)] transition-all">
                    <Icon className="w-7 h-7 text-pandora-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-pandora-text group-hover:text-pandora-gold transition-colors flex items-center gap-2 mb-2">
                      {f.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pandora-gold" />
                    </h3>
                    <p className="text-sm text-pandora-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Download Info */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-pandora-gold/50 rounded-full" />
          <h2 className="font-display text-2xl md:text-3xl font-bold gold-gradient text-center">📥 Pobierz i Graj</h2>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-pandora-gold/50 rounded-full" />
        </div>
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-pandora-gold">Informacje o kliencie</h3>
              <div className="space-y-3">
                {systemRequirements.map(r => (
                  <div key={r.label} className="flex items-center justify-between p-4 bg-pandora-dark/40 rounded-xl border border-pandora-border/30">
                    <span className="text-sm text-pandora-muted">{r.label}</span>
                    <span className="text-sm font-bold text-pandora-text">{r.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-pandora-dark/40 rounded-xl border border-pandora-border/30">
                  <span className="text-sm text-pandora-muted">Wersja klienta</span>
                  <span className="text-sm font-bold text-pandora-text">v1.0.2</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-pandora-gold">Oficjalne linki</h3>
              <div className="space-y-3">
                {[
                  { label: 'Strona główna', url: serverInfo.website, icon: '🌐' },
                  { label: 'Pobierz grę', url: serverInfo.download, icon: '📥' },
                  { label: 'Forum', url: serverInfo.forum, icon: '💬' },
                  { label: 'Discord', url: serverInfo.discord, icon: '🎮' },
                ].map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-pandora-dark/40 rounded-xl border border-pandora-border/30 hover:border-pandora-gold/30 transition-colors group">
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-semibold text-pandora-text group-hover:text-pandora-gold transition-colors">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="relative border-t border-pandora-border/50 pt-10">
        <p className="text-center text-sm text-pandora-muted/70 leading-relaxed max-w-2xl mx-auto">
          Dane na tej stronie pochodzą z oficjalnej <a href="https://forum.pandoramt2.pl/topic/31300-s2-prezentacja-serwera/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline">Prezentacji Serwera</a> oraz{' '}
          <a href="https://forum.pandoramt2.pl/topic/484-spis-event%C3%B3w/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline">Spisu Eventów</a> na forum PandoraMT2.<br />
          Wszelkie prawa do gry Metin2 należą do ich właścicieli. © 2020–2026 PandoraMT2.pl
        </p>
      </section>
    </div>
  )
}
