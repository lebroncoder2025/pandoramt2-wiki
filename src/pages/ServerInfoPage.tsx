import { Info, Server, Swords, Crown, Coins, Layers, Star, Gem, Monitor, HardDrive, Cpu, MemoryStick } from 'lucide-react'
import { PageHeader, StatBox, Card, SectionTitle, DataTable, InfoBox, Badge } from '../components/UI.tsx'
import { serverInfo, startingEquipment } from '../data/serverData.ts'

export default function ServerInfoPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <PageHeader
        title="Informacje o Serwerze"
        description="Podstawowe parametry serwera PandoraMT2 — typ, limity, waluty, królestwa i systemy."
        icon={<Info className="w-8 h-8" />}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Typ serwera" value={serverInfo.type} icon={<Server className="w-5 h-5" />} />
        <StatBox label="Maks. poziom" value={String(serverInfo.maxLevel)} icon={<Crown className="w-5 h-5" />} />
        <StatBox label="Maks. statystyki" value={String(serverInfo.maxStats)} icon={<Swords className="w-5 h-5" />} />
        <StatBox label="Klasy postaci" value={String(serverInfo.classes)} icon={<Swords className="w-5 h-5" />} />
        <StatBox label="Waluta" value={serverInfo.currency} icon={<Coins className="w-5 h-5" />} />
        <StatBox label="Maks. Yang" value={serverInfo.maxYang} icon={<Coins className="w-5 h-5" />} />
        <StatBox label="Maks. Stack" value={String(serverInfo.maxStack)} icon={<Layers className="w-5 h-5" />} />
        <StatBox label="Kanały" value={String(serverInfo.channels)} icon={<Server className="w-5 h-5" />} />
      </div>

      <SectionTitle>Królestwa</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {serverInfo.kingdoms.map((k, i) => (
          <Card key={k}>
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold ${
                i === 0 ? 'bg-red-500/10 text-red-400' : i === 1 ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {k[0]}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pandora-gold">{k}</h3>
                <p className="text-sm text-pandora-muted">Królestwo #{i + 1}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <SectionTitle>🐉 Smocze Monety</SectionTitle>
      <Card>
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-pandora-gold/10 border border-pandora-gold/20 flex items-center justify-center text-3xl shrink-0">
            🪙
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-pandora-gold">System Smoczych Monet</h3>
            <p className="text-sm text-pandora-muted leading-relaxed">
              Smocze Monety to unikalna waluta PandoraMT2 zdobywana za aktywność na serwerze. Można je wydawać w specjalnym Smoczym Sklepie 
              na ekskluzywne przedmioty, kostiumy, bonusy i ulepszenia niedostępne gdzie indziej.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="bg-pandora-dark/40 rounded-xl p-4 border border-pandora-border/30 text-center">
                <div className="text-xs text-pandora-muted uppercase tracking-wider mb-1">Źródło</div>
                <div className="text-sm font-semibold text-pandora-text">Aktywność / Eventy</div>
              </div>
              <div className="bg-pandora-dark/40 rounded-xl p-4 border border-pandora-border/30 text-center">
                <div className="text-xs text-pandora-muted uppercase tracking-wider mb-1">Sklep</div>
                <div className="text-sm font-semibold text-pandora-text">Smoczy Sklep NPC</div>
              </div>
              <div className="bg-pandora-dark/40 rounded-xl p-4 border border-pandora-border/30 text-center">
                <div className="text-xs text-pandora-muted uppercase tracking-wider mb-1">Zawartość</div>
                <div className="text-sm font-semibold text-pandora-text">Kostiumy, Bonusy, Itemy</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <SectionTitle>👑 System VIP</SectionTitle>
      <Card>
        <div className="space-y-4">
          <p className="text-sm text-pandora-muted leading-relaxed">
            System VIP na Pandorze daje graczom wymierne korzyści w grze. VIP jest opcjonalny — gra jest w pełni grywalna bez niego.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Zwiększone raty EXP', desc: 'Szybsze levelowanie postaci' },
              { label: 'Zwiększony Drop', desc: 'Więcej przedmiotów z potworów' },
              { label: 'Więcej Yang', desc: 'Dodatkowe złoto za potwory' },
              { label: 'Efekty wizualne', desc: 'Ekskluzywne efekty i aury' },
              { label: 'VIP Sklep', desc: 'Dostęp do specjalnego sklepu' },
              { label: 'Darmowa kostka/teleport', desc: 'Codzienne darmowe użycia' },
            ].map(b => (
              <div key={b.label} className="flex items-start gap-3 p-4 bg-pandora-dark/40 rounded-xl border border-pandora-border/30">
                <Star className="w-5 h-5 text-pandora-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-pandora-text">{b.label}</div>
                  <div className="text-xs text-pandora-muted">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <SectionTitle>Ekwipunek Startowy</SectionTitle>
      <p className="text-pandora-muted mb-5">Każdy nowy gracz rozpoczyna przygodę z następującymi przedmiotami:</p>
      <DataTable
        headers={['Przedmiot', 'Opis']}
        rows={startingEquipment.map(e => [e.name, e.description])}
        highlightFirst
      />

      <SectionTitle>Kluczowe Mechaniki</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">💰 Drop Sztabek Złota</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Losowe Sztabki Złota (2KK / 5KK / 10KK) dropią z potworów. Na mapach od Pustyni dropią najcenniejsze. Wymagana max. 15 poziomów różnicy do potwora. VIP, Medal Szczęścia i Zwierzak zwiększają szansę.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">✨ Bonusy 6-7</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Przedmioty mogą mieć 5 zwykłych + 2 dodatkowe bonusy (6-7). Maks. wartości wyświetlają się na złoto. Blok Ciosów nie wchodzi jako bonus zwykły — tylko z KD i przedmiotów.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">🔧 Magiczny Metal+</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Daje +10% szansy na ulepszenie. Wymaga Kamienia Kowala + Magicznej Rudy Miedzi + 100M Yang. Kamienie z Bossów i Metinów.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">🏪 Sklepy Offline</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Otwierane Tobołkiem z handlarki. Można ustawiać dokładną pozycję. Wyszukiwarka sklepów na górze klienta z filtrem ulepszenia.</p>
        </Card>
      </div>

      <SectionTitle>💻 Wymagania Systemowe</SectionTitle>
      <InfoBox type="info">
        <p className="text-sm leading-relaxed">Klient gry waży ok. <strong>3.56 GB</strong>. Pandora działa na większości komputerów — nawet starszych. Wymagany system: <strong>Windows 8.1</strong> lub nowszy.</p>
      </InfoBox>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Procesor', value: '1 GHz+', icon: Cpu },
          { label: 'RAM', value: '512 MB', icon: MemoryStick },
          { label: 'Dysk', value: '2 GB wolnego', icon: HardDrive },
          { label: 'Grafika', value: '32 MB VRAM', icon: Monitor },
        ].map(r => {
          const Icon = r.icon
          return (
            <Card key={r.label}>
              <div className="text-center">
                <Icon className="w-8 h-8 text-pandora-gold mx-auto mb-3" />
                <div className="text-xs text-pandora-muted uppercase tracking-wider mb-1">{r.label}</div>
                <div className="text-lg font-bold text-pandora-text">{r.value}</div>
              </div>
            </Card>
          )
        })}
      </div>

      <SectionTitle>🔗 Oficjalne Linki</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: 'Strona główna', url: serverInfo.website, icon: '🌐' },
          { label: 'Forum', url: serverInfo.forum, icon: '💬' },
          { label: 'Discord', url: serverInfo.discord, icon: '🎮' },
          { label: 'Pobierz grę', url: serverInfo.download, icon: '📥' },
          { label: 'Facebook', url: serverInfo.facebook, icon: '📘' },
          { label: 'Instagram', url: serverInfo.instagram, icon: '📸' },
        ].map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="hover:border-pandora-gold/40 group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{link.icon}</div>
                <div>
                  <div className="font-semibold text-pandora-text group-hover:text-pandora-gold transition-colors">{link.label}</div>
                  <div className="text-xs text-pandora-muted">{link.url}</div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
