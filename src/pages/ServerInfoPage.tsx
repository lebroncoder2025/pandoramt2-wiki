import { Info, Server, Swords, Crown, Coins, Layers, Monitor, HardDrive, Cpu, MemoryStick } from 'lucide-react'
import { PageHeader, StatBox, SectionTitle, DataTable, InfoBox } from '../components/UI.tsx'
import { serverInfo, startingEquipment } from '../data/serverData.ts'

export default function ServerInfoPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <PageHeader
        title="Informacje o Serwerze"
        description="Podstawowe parametry serwera PandoraMT2 — typ, limity, waluty, królestwa i systemy."
        icon={<Info className="w-5 h-5" />}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatBox label="Typ serwera" value={serverInfo.type} icon={<Server className="w-4 h-4" />} />
        <StatBox label="Maks. poziom" value={String(serverInfo.maxLevel)} icon={<Crown className="w-4 h-4" />} />
        <StatBox label="Maks. statystyki" value={String(serverInfo.maxStats)} icon={<Swords className="w-4 h-4" />} />
        <StatBox label="Klasy postaci" value={String(serverInfo.classes)} icon={<Swords className="w-4 h-4" />} />
        <StatBox label="Waluta" value={serverInfo.currency} icon={<Coins className="w-4 h-4" />} />
        <StatBox label="Maks. Yang" value={serverInfo.maxYang} icon={<Coins className="w-4 h-4" />} />
        <StatBox label="Maks. Stack" value={String(serverInfo.maxStack)} icon={<Layers className="w-4 h-4" />} />
        <StatBox label="Kanały" value={String(serverInfo.channels)} icon={<Server className="w-4 h-4" />} />
      </div>

      <SectionTitle>Królestwa</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {serverInfo.kingdoms.map((k, i) => (
          <div key={k} className="bg-pandora-card/60 border border-pandora-border/40 rounded-lg p-4 flex items-center gap-3.5 hover:border-pandora-border/60 transition-colors">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold font-display ${
              i === 0 ? 'bg-pandora-red/8 text-pandora-red/80' : i === 1 ? 'bg-pandora-blue/8 text-pandora-blue/80' : 'bg-pandora-gold/8 text-pandora-gold/80'
            }`}>
              {k[0]}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-pandora-text/85">{k}</h3>
              <p className="text-[11px] text-pandora-muted/60">Królestwo #{i + 1}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle>Ekwipunek Startowy</SectionTitle>
      <p className="text-[13px] text-pandora-muted/60 mb-4">Każdy nowy gracz rozpoczyna przygodę z następującymi przedmiotami:</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { title: 'Drop Sztabek Złota', desc: 'Losowe Sztabki Złota (2KK / 5KK / 10KK) dropią z potworów. Na mapach od Pustyni Wygnańców dropią tylko najcenniejsze. Wymagana max. 15 poziomów różnicy do potwora (nie dotyczy map od Doliny Śmierci włącznie). VIP, Medal Szczęścia i Zwierzak zwiększają szansę.' },
          { title: 'Bonusy 6-7', desc: 'Przedmioty mogą mieć maks. 5 bonusów zwykłych + 2 dodatkowe bonusy (6-7) o stałych wartościach. Maks. wartości wyświetlają się na złoty kolor. Bloku Ciosów nie da się wybonować — występuje tylko jako bon wbudowany w przedmioty lub Kamienie Dusz.' },
          { title: 'Magiczny Metal+', desc: 'Daje +10% szansy na ulepszanie. Wymaga: Kamień Kowala + Magiczna Ruda Miedzi + 100.000.000 Yang. Kamienie zdobywane z silniejszych Bossów oraz Kamieni Metin.' },
          { title: 'Sklepy Offline & Wyszukiwarka', desc: 'Sklepy otwieramy Tobołkiem z handlarki różności. Możemy ustawiać dokładną pozycję sklepu. Wyszukiwarka sklepów na krawędzi klienta z opcją ignorowania stopnia ulepszenia. VIP pozwala na dekorowanie sklepu.' },
        ].map(m => (
          <div key={m.title} className="bg-pandora-card/60 border border-pandora-border/40 rounded-lg p-4 hover:border-pandora-border/60 transition-colors">
            <h3 className="text-sm font-semibold text-pandora-text/85 mb-2">{m.title}</h3>
            <p className="text-[13px] text-pandora-muted/60 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <SectionTitle>Wymagania Systemowe</SectionTitle>
      <InfoBox type="info">
        <p className="text-sm leading-relaxed">Klient gry waży ok. <strong>3.56 GB</strong>. Pandora działa na większości komputerów — nawet starszych. Wymagany system: <strong>Windows 8.1</strong> lub nowszy.</p>
      </InfoBox>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Procesor', value: '1 GHz+', icon: Cpu },
          { label: 'RAM', value: '512 MB', icon: MemoryStick },
          { label: 'Dysk', value: '2 GB wolnego', icon: HardDrive },
          { label: 'Grafika', value: '32 MB VRAM', icon: Monitor },
        ].map(r => {
          const Icon = r.icon
          return (
            <div key={r.label} className="bg-pandora-card/60 border border-pandora-border/40 rounded-lg p-4 text-center hover:border-pandora-border/60 transition-colors">
              <Icon className="w-5 h-5 text-pandora-gold/60 mx-auto mb-2" />
              <div className="text-[10px] text-pandora-muted/60 uppercase tracking-widest mb-1">{r.label}</div>
              <div className="text-sm font-bold text-pandora-text/85">{r.value}</div>
            </div>
          )
        })}
      </div>

      <SectionTitle>Oficjalne Linki</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { label: 'Strona główna', url: serverInfo.website },
          { label: 'Forum', url: serverInfo.forum },
          { label: 'Discord', url: serverInfo.discord },
          { label: 'Pobierz grę', url: serverInfo.download },
          { label: 'Facebook', url: serverInfo.facebook },
          { label: 'Instagram', url: serverInfo.instagram },
        ].map(link => (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-pandora-card/60 border border-pandora-border/40 rounded-lg px-4 py-3 hover:border-pandora-border/60 transition-colors">
            <div>
              <div className="text-sm font-medium text-pandora-text/85 group-hover:text-pandora-gold transition-colors">{link.label}</div>
              <div className="text-[11px] text-pandora-muted/60 truncate max-w-48">{link.url}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
