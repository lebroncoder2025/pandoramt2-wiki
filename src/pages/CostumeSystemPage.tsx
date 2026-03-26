import { costumeBonus } from '../data/serverData'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/SectionDivider'
import Card from '../components/Card'
import InfoBox from '../components/InfoBox'
import DataTable from '../components/DataTable'

export default function CostumeSystemPage() {
  const costumeTypes = [
    { type: 'Hełm', description: 'Ochrona głowy', slot: 1 },
    { type: 'Zbroja', description: 'Ochrona ciała', slot: 2 },
    { type: 'Spodnie', description: 'Ochrona nóg', slot: 3 },
    { type: 'Buty', description: 'Ochrona stóp', slot: 4 },
    { type: 'Rękawice', description: 'Ochrona rąk', slot: 5 },
    { type: 'Akcesoria', description: 'Dodatkowe bonusy', slot: 6 },
  ]

  const bonuses = Object.entries(costumeBonus).map(([name, bonus]) => ({
    name,
    ...bonus,
  }))

  const categories = [
    { name: 'Ataku', emoji: '⚔️' },
    { name: 'Defence', emoji: '🛡️' },
    { name: 'HP', emoji: '❤️' },
    { name: 'MovementSpeed', emoji: '💨' },
    { name: 'AttackSpeed', emoji: '⚡' },
    { name: 'MinAttack', emoji: '🔻' },
    { name: 'MaxAttack', emoji: '🔺' },
  ]

  const getBonus = (key: string) => bonuses.find(b => b.name === key)
  const getBonusCategory = (name: string) => {
    if (name.includes('MinAttack')) return 'MinAttack'
    if (name.includes('MaxAttack')) return 'MaxAttack'
    if (name.includes('Attack') && !name.includes('Speed')) return 'Ataku'
    if (name.includes('Defence')) return 'Defence'
    if (name.includes('HP')) return 'HP'
    if (name.includes('MovementSpeed')) return 'MovementSpeed'
    if (name.includes('AttackSpeed')) return 'AttackSpeed'
    return 'Inne'
  }

  return (
    <div className="space-y-8">
      <PageHeader 
        title="System Kostiumów" 
        description="Przewodnik po systemie kostiumów i bonusach estetyczno-statystycznych"
      />

      {/* Ogólnie */}
      <section className="space-y-4">
        <SectionTitle>O Systemie Kostiumów</SectionTitle>
        <Card>
          <p className="text-pandora-text/85">
            Kostiumy są estetycznym sposobem na zmianę wyglądu postaci, jednocześnie dodając bonusy statystyczne. System to kombinacja wariantów ubioru z dodatkowymi atrybutami, które wspierają grę i pozwalają na personalizację postaci zarówno wizualnie, jak i mechanicznie.
          </p>
        </Card>

        <InfoBox 
          title="💡 Wskazówka"
          content="Każdy kostium może posiadać różne rzadkości i poziomy wzmocnienia. Zbieraj różne warianty aby znaleźć najlepsze kombinacje dla swojego buildów."
        />
      </section>

      <SectionDivider />

      {/* Sloty kostiumów */}
      <section className="space-y-4">
        <SectionTitle>Sloty Kostiumów</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {costumeTypes.map((type) => (
            <Card key={type.slot} variant="highlighted">
              <div className="space-y-2">
                <h3 className="font-semibold text-pandora-gold text-lg">{type.type}</h3>
                <p className="text-sm text-pandora-text/75">{type.description}</p>
                <p className="text-xs text-pandora-muted">Slot: {type.slot}</p>
              </div>
            </Card>
          ))}
        </div>

        <InfoBox 
          title="📋 Uwaga"
          content="Każdy slot może mieć tylko jeden kostium na raz. Postacie mogą nosić kostiumy ze wszystkich slotów jednocześnie dla maksymalnych bonusów."
        />
      </section>

      <SectionDivider />

      {/* Typy bonusów */}
      <section className="space-y-4">
        <SectionTitle>Dostępne Bonusy Kostiumów</SectionTitle>
        <Card>
          <p className="text-pandora-text/85 mb-4">
            Kostiumy mogą przyznawać różnorodne bonusy statystyczne. Poniżej lista wszystkich możliwych typów bonusów:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const bonus = getBonus(cat.name)
              return (
                <div key={cat.name} className="p-3 rounded-lg bg-pandora-darker/50 border border-pandora-border/20 hover:border-pandora-gold/30 transition-colors">
                  <div className="text-2xl mb-2">{cat.emoji}</div>
                  <div className="text-sm font-medium text-pandora-text">{cat.name}</div>
                  {bonus && (
                    <div className="text-xs text-pandora-muted mt-1">
                      Max: <span className="text-pandora-gold">+{bonus.value}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Card>
      </section>

      <SectionDivider />

      {/* Tabela bonusów */}
      <section className="space-y-4">
        <SectionTitle>Tabela Bonusów Kostiumów</SectionTitle>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pandora-border/30">
                  <th className="text-left py-3 px-3 font-semibold text-pandora-gold">Nazwa Bonusu</th>
                  <th className="text-right py-3 px-3 font-semibold text-pandora-gold">Maksymalna Wartość</th>
                  <th className="text-center py-3 px-3 font-semibold text-pandora-gold">Typ</th>
                </tr>
              </thead>
              <tbody>
                {bonuses.map((bonus, idx) => (
                  <tr key={bonus.name} className={idx % 2 === 0 ? 'bg-pandora-darker/25' : ''}>
                    <td className="py-3 px-3 text-pandora-text/85">{bonus.name}</td>
                    <td className="text-right py-3 px-3 text-pandora-gold font-semibold">+{bonus.value}</td>
                    <td className="text-center py-3 px-3">
                      <span className="text-xs px-2 py-1 rounded bg-pandora-gold/10 text-pandora-gold">
                        {getBonusCategory(bonus.name)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <SectionDivider />

      {/* Strategie */}
      <section className="space-y-4">
        <SectionTitle>Strategie Wyboru Kostiumów</SectionTitle>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">⚔️ Build Ataku (Warrior/Sura)</h3>
          <p className="text-sm text-pandora-text/85">
            Dla klas skoncentrowanych na pokucie, priorytet to <span className="text-pandora-gold font-semibold">Atak Minimalny</span>, <span className="text-pandora-gold font-semibold">Atak Maksymalny</span> i <span className="text-pandora-gold font-semibold">Atak Prędkość</span>. Obrona jest drugorzędna.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">🛡️ Build Defensywny (Assassin/Shaman)</h3>
          <p className="text-sm text-pandora-text/85">
            Dla klas potrzebujących warstw ochrony, skupij się na <span className="text-pandora-gold font-semibold">Obronie</span> i <span className="text-pandora-gold font-semibold">HP</span>. Prędkość ataku pomagałaby, ale obrona jest priorytetem.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">❤️ Build Hybrydowy</h3>
          <p className="text-sm text-pandora-text/85">
            Mieszaj bonusy w zależności od Twojego systemu umiejętności. Większość dla ataku, mniej dla obrony. HP zawsze pomogą niezależnie od builda.
          </p>
        </Card>

        <InfoBox 
          title="💡 Tip"
          content="Kostiumu mogą być zmienianie w dowolnym momencie. Eksperymentuj z różnymi kombinacjami, aby znaleźć to, które najlepiej pasuje do Twojego stylu gry!"
        />
      </section>

      <SectionDivider />

      {/* Zasobniki jak zdobyć */}
      <section className="space-y-4">
        <SectionTitle>Jak Zdobywać Kostiumy</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">📍 Z Boss'ów</h3>
            <p className="text-sm text-pandora-text/85">
              Wiele boss'ów dropa kostiumy jako rzadkie nagrody. Im wyższy poziom boss'a, tym lepsze kostiumy.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">⚱️ Z Dungeon'ów</h3>
            <p className="text-sm text-pandora-text/85">
              Dungeony zawierają kostiumy jako część drop'ów. Wyższa trudność = lepsze nagrody.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">🎁 Z Event'ów</h3>
            <p className="text-sm text-pandora-text/85">
              Specjalne eventy regularnie oferują ekskluzywnekostiumy jako nagrody. Nie przegap okazji!
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">💰 Z Shop'u</h3>
            <p className="text-sm text-pandora-text/85">
              Niektóre kostiumy można kupić za walutę gracza lub gemów w oficjalnym sklepie.
            </p>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Szybkie tipy */}
      <section className="space-y-4">
        <SectionTitle>Szybkie Tipy</SectionTitle>
        <Card>
          <ul className="space-y-3 text-sm text-pandora-text/85">
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span>Kostiumu są wymienialne - łatwo zmień je później</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span>Każdy slot może wzmacniać się oddzielnie - stawiaj na najwartościowsze części</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span>Zbieraj duplikaty - mogą być użyteczne dla alt'ów lub turniejów</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span>Śledź news o nowych kostiumach w event'ach - mogą zawierać ciekawe bonusy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span>Handluj z innymi graczami aby znaleźć rzadkie kawałki dla swojego builda</span>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  )
}
