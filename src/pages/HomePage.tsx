import { Link } from 'react-router-dom'
import { Shield, Castle, Skull, Gem, Dog, Map, Fish, Pickaxe, Trophy, FlaskConical, Zap, Lightbulb, Calculator, Calendar, Download, ArrowRight } from 'lucide-react'
import { serverInfo } from '../data/serverData.ts'

const guides = [
  { icon: Shield, title: 'Ekwipunek & Bonusy', desc: 'Tabela bonusów, ulepszenia, Metal+', path: '/equipment' },
  { icon: Castle, title: 'Dungeony', desc: '7 dungeonów z nagrodami', path: '/dungeons' },
  { icon: Skull, title: 'Bossy', desc: 'Respawny, lokacje, nagrody', path: '/bosses' },
  { icon: Gem, title: 'Kamienie Dusz', desc: 'Zwykłe i Legendarne KD', path: '/soul-stones' },
  { icon: Dog, title: 'Zwierzaki', desc: 'Umiejętności, szkolenie, P+', path: '/pet-system' },
  { icon: Map, title: 'Mapy', desc: 'Poziomy, bossy, metiny', path: '/maps' },
  { icon: Fish, title: 'Rybołówstwo', desc: 'Wędki, Owoce Morza', path: '/fishing' },
  { icon: Pickaxe, title: 'Górnictwo', desc: 'Kilofy, Sztabki Złota', path: '/mining' },
  { icon: Trophy, title: 'System Rang', desc: 'Od Parobka po Cesarza', path: '/rank-system' },
  { icon: FlaskConical, title: 'Biolog', desc: 'Misje i kolekcje', path: '/biologist' },
  { icon: Zap, title: 'Umiejętności', desc: 'Dowodzenie, Polimorfia', path: '/skills' },
  { icon: Calculator, title: 'Kalkulator', desc: 'Koszty ulepszeń i rang', path: '/calculator' },
  { icon: Calendar, title: 'Eventy', desc: '16 eventów serwerowych', path: '/events' },
  { icon: Lightbulb, title: 'Porady', desc: 'Skróty i wskazówki', path: '/tips' },
]

const stats = [
  { label: 'Typ', value: serverInfo.type },
  { label: 'Maks. Poziom', value: String(serverInfo.maxLevel) },
  { label: 'Kanały', value: String(serverInfo.channels) },
  { label: 'Klasy', value: String(serverInfo.classes) },
]

const startingItems = [
  { text: 'Buty Wiatru', detail: 'Szybkość +40' },
  { text: 'Pierścień Teleportacji', detail: 'Klawisz TAB' },
  { text: '200x Peleryna Męstwa', detail: 'Ochrona' },
  { text: 'Koń 21 lvl', detail: 'Transport' },
  { text: 'Podstawowy EQ +9', detail: 'Broń + Zbroja' },
  { text: 'Mikstury+', detail: '10 Zielonych + Fiolet.' },
  { text: 'Wszystkie skille M1', detail: 'Gotowe umiejętności' },
  { text: '100% szansa na konia', detail: 'Pewne przywołanie' },
]

const highlights = [
  { title: 'Old School Metin2', desc: 'Wierne odwzorowanie klasycznego Metin2 urozmaicone o kilka dodatków.' },
  { title: 'PvP Zbalansowane', desc: 'Raty poddano wielu korektom aby wyważyć etapy rozwoju.' },
  { title: '5 Kanałów, 3 Królestwa', desc: 'Shinsoo, Jinno i Chunjo. Dynamiczna rozgrywka z gildiami.' },
  { title: '16 Eventów', desc: 'Kosmiczna Inwazja, Loteria Tombola, Owocowe Szaleństwo i więcej.' },
  { title: '7 Dungeonów + Bossy', desc: 'Od Wieży Demonów po Świątynię Andun. Infernus i Balathor.' },
  { title: 'Aktywny Rozwój', desc: 'Ciągłe aktualizacje. Najnowsza wersja klienta: v1.0.2.' },
]

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="py-8 md:py-12 relative">
        {/* Subtle ambient glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pandora-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pandora-purple/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-pandora-gold/60">
            Sezon 2026/2027
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gold-text mb-4 tracking-tight leading-[1.1]">
            PandoraMT2
          </h1>
          <p className="text-pandora-muted/60 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Kompletny przewodnik po serwerze — mapy, dungeony, bossy, systemy rozgrywki i porady dla nowych oraz doświadczonych graczy.
          </p>

          {/* Hero Screenshot */}
          <div className="rounded-xl overflow-hidden border border-pandora-border/30 mb-12">
            <img
              src="https://i.imgur.com/gF2cU1z.png"
              alt="PandoraMT2 — Old School Metin2"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
          <a href="https://pandoramt2.pl/main/download" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-pandora-gold/90 border border-pandora-gold text-pandora-darker font-semibold text-sm rounded-lg hover:bg-pandora-gold transition-all">
            <Download className="w-4 h-4" /> Pobierz Grę
          </a>
          <a href="https://pandoramt2.pl/auth/register" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-pandora-card/60 border border-pandora-border/40 text-pandora-text/85 font-medium text-sm rounded-lg hover:border-pandora-border/60 hover:bg-pandora-card-hover/80 transition-all">
            Zarejestruj się
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(s => (
            <div key={s.label} className="bg-pandora-card/60 rounded-lg p-6 border border-pandora-border/40 border-t-2 border-t-pandora-gold/20 hover:border-pandora-border/60 transition-colors">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-pandora-muted/60 mb-1">{s.label}</div>
              <div className="text-xl font-display font-bold text-pandora-gold">{s.value}</div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Starting Equipment */}
      <section>
        <h2 className="font-display text-lg font-bold gold-text mb-10 flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-pandora-gold/40" />
          Ekwipunek Startowy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {startingItems.map(item => (
            <div key={item.text} className="flex items-center gap-3 bg-pandora-card/60 rounded-lg px-4 py-3.5 border border-pandora-border/40 hover:border-pandora-border/60 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-pandora-gold/50 shrink-0" />
              <div>
                <span className="text-sm text-pandora-text/85 font-medium">{item.text}</span>
                <span className="text-[11px] text-pandora-muted/60 ml-2">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Server Highlights */}
      <section>
        <h2 className="font-display text-lg font-bold gold-text mb-10 flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-pandora-gold/40" />
          O Serwerze
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const accents = ['border-t-pandora-gold/30', 'border-t-pandora-blue/30', 'border-t-pandora-green/30', 'border-t-pandora-purple/30', 'border-t-pandora-red/30', 'border-t-pandora-orange/30']
            return (
            <div key={item.title} className={`bg-pandora-card/60 border border-pandora-border/40 border-t-2 ${accents[i]} rounded-lg p-6 hover:border-pandora-border/60 transition-colors`}>
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">{item.title}</h3>
              <p className="text-[13px] text-pandora-muted/60 leading-relaxed">{item.desc}</p>
            </div>
            )
          })}
        </div>
      </section>

      {/* Events Preview */}
      <section>
        <h2 className="font-display text-lg font-bold gold-text mb-10 flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-pandora-gold/40" />
          Eventy Serwerowe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Raty Serwerowe', type: 'Stały', color: 'text-pandora-green', accent: 'border-t-pandora-green/30', desc: 'Zwiększenie Exp, Drop i Yang' },
            { name: 'Loteria Tombola', type: 'Losowy', color: 'text-pandora-orange', accent: 'border-t-pandora-orange/30', desc: 'Kupony z Metinów i Bossów' },
            { name: 'Kosmiczna Inwazja', type: 'Community', color: 'text-pandora-purple', accent: 'border-t-pandora-purple/30', desc: '100K przedmiotów = raty' },
          ].map(e => (
            <div key={e.name} className={`bg-pandora-card/60 rounded-lg p-5 border border-pandora-border/40 border-t-2 ${e.accent} hover:border-pandora-border/60 transition-colors`}>
              <div className={`text-[10px] font-bold uppercase tracking-widest ${e.color} mb-2`}>{e.type}</div>
              <h3 className="text-sm font-semibold text-pandora-text/85 mb-1">{e.name}</h3>
              <p className="text-[12px] text-pandora-muted/60">{e.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/events" className="inline-flex items-center gap-1.5 text-[13px] text-pandora-gold/80 hover:text-pandora-gold transition-colors">
          Zobacz wszystkie 16 eventów <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* Guide Navigation */}
      <section>
        <h2 className="font-display text-lg font-bold gold-text mb-10 flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-pandora-gold/40" />
          Przewodnik
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map(f => {
            const Icon = f.icon
            return (
              <Link
                key={f.path}
                to={f.path}
                className="group flex items-center gap-3.5 bg-pandora-card/40 border border-pandora-border/25 rounded-lg px-5 py-4 hover:border-pandora-border/60 hover:bg-pandora-card/60 transition-all"
              >
                <Icon className="w-4 h-4 text-pandora-muted/50 group-hover:text-pandora-gold/80 shrink-0 transition-colors" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-pandora-text/85 group-hover:text-pandora-text transition-colors">{f.title}</div>
                  <div className="text-[11px] text-pandora-muted/60">{f.desc}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-pandora-muted/20 group-hover:text-pandora-gold/50 ml-auto shrink-0 transition-colors" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* Download */}
      <section className="bg-pandora-card/40 border border-pandora-border/30 rounded-xl p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Klient gry</h3>
            <div className="space-y-2 text-[13px]">
              {[
                ['Rozmiar', '~3.56 GB'],
                ['System', 'Windows 8.1+'],
                ['Wersja', 'v1.0.2'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-pandora-border/20">
                  <span className="text-pandora-muted/60">{k}</span>
                  <span className="text-pandora-text/85 font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-pandora-text/85 mb-3">Linki</h3>
            <div className="space-y-1.5">
              {[
                { label: 'Strona główna', url: serverInfo.website },
                { label: 'Pobierz grę', url: serverInfo.download },
                { label: 'Forum', url: serverInfo.forum },
                { label: 'Discord', url: serverInfo.discord },
              ].map(link => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-pandora-muted/60 hover:text-pandora-gold transition-colors py-1">
                  <ArrowRight className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Source */}
      <p className="text-[11px] text-pandora-muted/35 leading-relaxed border-t border-pandora-border/20 pt-6">
        Dane pochodzą z oficjalnej <a href="https://forum.pandoramt2.pl/topic/31300-s2-prezentacja-serwera/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold/50 hover:text-pandora-gold/80">Prezentacji Serwera</a> oraz{' '}
        <a href="https://forum.pandoramt2.pl/topic/484-spis-event%C3%B3w/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold/50 hover:text-pandora-gold/80">Spisu Eventów</a> na forum PandoraMT2.
      </p>
    </div>
  )
}
