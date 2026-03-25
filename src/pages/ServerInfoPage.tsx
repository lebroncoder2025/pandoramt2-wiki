import { Info, Server, Swords, Crown, Coins, Layers } from 'lucide-react'
import { PageHeader, StatBox, Card, SectionTitle, DataTable } from '../components/UI.tsx'
import { serverInfo, startingEquipment } from '../data/serverData.ts'

export default function ServerInfoPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="Informacje o Serwerze"
        description="Podstawowe parametry serwera PandoraMT2 — typ, limity, waluty i królestwa."
        icon={<Info className="w-8 h-8" />}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {serverInfo.kingdoms.map((k, i) => (
          <Card key={k}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                i === 0 ? 'bg-red-500/10 text-red-400' : i === 1 ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {k[0]}
              </div>
              <div>
                <h3 className="font-semibold text-pandora-gold">{k}</h3>
                <p className="text-xs text-pandora-muted">Królestwo #{i + 1}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <SectionTitle>Ekwipunek Startowy</SectionTitle>
      <p className="text-pandora-muted mb-4">Każdy nowy gracz rozpoczyna przygodę z następującymi przedmiotami:</p>
      <DataTable
        headers={['Przedmiot', 'Opis']}
        rows={startingEquipment.map(e => [e.name, e.description])}
        highlightFirst
      />

      <SectionTitle>Kluczowe Mechaniki</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold text-pandora-gold mb-2">Drop Sztabek Złota</h3>
          <p className="text-sm text-pandora-muted">Losowe Sztabki Złota (2KK / 5KK / 10KK) dropią z potworów. Na mapach od Pustyni dropią najcenniejsze. Wymagana max. 15 poziomów różnicy do potwora. VIP, Medal Szczęścia i Zwierzak zwiększają szansę.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-pandora-gold mb-2">Bonusy 6-7</h3>
          <p className="text-sm text-pandora-muted">Przedmioty mogą mieć 5 zwykłych + 2 dodatkowe bonusy (6-7). Maks. wartości wyświetlają się na złoto. Blok Ciosów nie wchodzi jako bonus zwykły — tylko z KD i przedmiotów.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-pandora-gold mb-2">Magiczny Metal+</h3>
          <p className="text-sm text-pandora-muted">Daje +10% szansy na ulepszenie. Wymaga Kamienia Kowala + Magicznej Rudy Miedzi + 100M Yang. Kamienie z Bossów i Metinów.</p>
        </Card>
        <Card>
          <h3 className="font-semibold text-pandora-gold mb-2">Sklepy Offline</h3>
          <p className="text-sm text-pandora-muted">Otwierane Tobołkiem z handlarki. Można ustawiać dokładną pozycję. Wyszukiwarka sklepów na górze klienta z filtrem ulepszenia.</p>
        </Card>
      </div>
    </div>
  )
}
