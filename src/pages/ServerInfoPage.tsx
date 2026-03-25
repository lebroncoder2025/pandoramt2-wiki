import { Info, Server, Swords, Crown, Coins, Layers, Monitor, HardDrive, Cpu, MemoryStick } from 'lucide-react'
import { PageHeader, StatBox, Card, SectionTitle, DataTable, InfoBox } from '../components/UI.tsx'
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

      <SectionTitle>Ekwipunek Startowy</SectionTitle>
      <p className="text-pandora-muted mb-5">Każdy nowy gracz rozpoczyna przygodę z następującymi przedmiotami:</p>
      <DataTable
        headers={['Przedmiot', 'Opis']}
        rows={startingEquipment.map(e => [e.name, e.description])}
        highlightFirst
      />

      <SectionTitle>Kluczowe Mechaniki</SectionTitle>
      <InfoBox type="info">
        <p className="text-sm leading-relaxed">
          Wszystkie informacje na tej stronie pochodzą z oficjalnej <a href="https://forum.pandoramt2.pl/topic/31300-s2-prezentacja-serwera/" target="_blank" rel="noopener noreferrer" className="text-pandora-gold hover:underline font-semibold">Prezentacji Serwera</a> na forum PandoraMT2.
        </p>
      </InfoBox>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">💰 Drop Sztabek Złota</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Losowe Sztabki Złota (2KK / 5KK / 10KK) dropią z potworów. Na mapach od Pustyni Wygnańców dropią tylko najcenniejsze. Wymagana max. 15 poziomów różnicy do potwora (nie dotyczy map od Doliny Śmierci włącznie). Pakiet VIP, Medal Szczęścia i Zwierzak zwiększają szansę.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">✨ Bonusy 6-7</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Przedmioty mogą mieć maks. 5 bonusów zwykłych + 2 dodatkowe bonusy (6-7) o stałych wartościach. Maks. wartości wyświetlają się na złoty kolor. Bloku Ciosów nie da się wybonować — występuje tylko jako bon wbudowany w przedmioty lub Kamienie Dusz.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">🔧 Magiczny Metal+</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Daje +10% szansy na ulepszanie. Wymaga: Kamień Kowala + Magiczna Ruda Miedzi + 100.000.000 Yang. Kamienie zdobywane z silniejszych Bossów oraz Kamieni Metin.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg text-pandora-gold mb-3">🏪 Sklepy Offline & Wyszukiwarka</h3>
          <p className="text-sm text-pandora-muted leading-relaxed">Sklepy otwieramy Tobołkiem z handlarki różności. Możemy ustawiać dokładną pozycję sklepu. Wyszukiwarka sklepów na krawędzi klienta z opcją ignorowania stopnia ulepszenia. VIP pozwala na dekorowanie sklepu.</p>
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
