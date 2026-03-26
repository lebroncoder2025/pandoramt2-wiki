import { lifefruits } from '../data/serverData'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/SectionDivider'
import Card from '../components/Card'
import InfoBox from '../components/InfoBox'

export default function LifeFruitsGuidePage() {
  // Organizuj Life Fruits po typach
  const lifeFruitsByLevel = lifefruits.reduce((acc: Record<number, typeof lifefruits>, fruit) => {
    if (!acc[fruit.level]) acc[fruit.level] = []
    acc[fruit.level].push(fruit)
    return acc
  }, {})

  const levels = Object.keys(lifeFruitsByLevel)
    .map(Number)
    .sort((a, b) => a - b)

  const getTierColor = (tier: string) => {
    if (tier.includes('Biały')) return 'text-gray-300'
    if (tier.includes('Zielony')) return 'text-green-400'
    if (tier.includes('Niebieski')) return 'text-blue-400'
    if (tier.includes('Purpurowy')) return 'text-purple-400'
    if (tier.includes('Pomarańczowy')) return 'text-orange-400'
    if (tier.includes('Czerwony')) return 'text-red-400'
    return 'text-pandora-text'
  }

  const getTierEmoji = (tier: string) => {
    if (tier.includes('Biały')) return '⚪'
    if (tier.includes('Zielony')) return '🟢'
    if (tier.includes('Niebieski')) return '🔵'
    if (tier.includes('Purpurowy')) return '🟣'
    if (tier.includes('Pomarańczowy')) return '🟠'
    if (tier.includes('Czerwony')) return '🔴'
    return '⭕'
  }

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Przewodnik Owoców Życia" 
        description="Wszystko o systemie Owoców Życia - jak zdobywać, gdzie użyć i jak maksymalizować HP"
      />

      {/* Intro */}
      <section className="space-y-4">
        <SectionTitle>O Owocach Życia</SectionTitle>
        <Card>
          <p className="text-pandora-text/85 mb-4">
            Owoce Życia to specjalne przedmioty, które zwiększają maksymalne HP Twojej postaci. Są kluczowe dla każdego gracza chcącego przetrwać trudniejsze boje, dungiony i PvP.
          </p>
          <p className="text-pandora-text/85">
            System Owoców Życia jest progresywny - każdy poziom oferuje owoce działające na różne rzadkości, od białych do czerwonych.
          </p>
        </Card>

        <InfoBox 
          title="💡 Porada"
          content="Im wyższy poziom owocu, tym większy bonus HP otrzymujesz. Czerwone owoce są najbardziej wartościowe, ale są też najtrudniejsze do zdobycia."
        />
      </section>

      <SectionDivider />

      {/* System explanation */}
      <section className="space-y-4">
        <SectionTitle>Jak Działa System</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">🎯 Zbieranie Owoców</h3>
            <p className="text-sm text-pandora-text/85">
              Owoce Życia zdobywasz z boss'ów, dungeon'ów i quest'ów. Im trudniejsze źródło, tym lepsze owoce.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">📦 Przechowywanie</h3>
            <p className="text-sm text-pandora-text/85">
              Każdy owoc zajmuje przestrzeń w ekwipunku. Uzbieraj je w liczbie wystarczającej dla Twoich planów.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">✨ Konsumpcja</h3>
            <p className="text-sm text-pandora-text/85">
              Użyj owocu aby trwale zwiększyć maksymalne HP. Efekt jest permanentny i nie można go cofnąć.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">📈 Progresja</h3>
            <p className="text-sm text-pandora-text/85">
              Gracze budują HP powoli, zbierając owoce na przestrzeni czasu w miarę osiągania wyższych level'i.
            </p>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Life Fruits by level */}
      {levels.map((level) => (
        <section key={level} className="space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle>Owoce Poziomu {level}</SectionTitle>
            <span className="text-sm text-pandora-muted">
              {lifeFruitsByLevel[level].length} variant{lifeFruitsByLevel[level].length !== 1 ? 'ów' : 'u'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lifeFruitsByLevel[level].map((fruit) => (
              <Card key={fruit.id} variant="highlighted">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm leading-tight">{fruit.name}</h3>
                      <span className="text-lg">{getTierEmoji(fruit.tier)}</span>
                    </div>
                    <p className={`text-xs font-medium ${getTierColor(fruit.tier)}`}>
                      {fruit.tier}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-pandora-border/20">
                    <div>
                      <p className="text-[10px] text-pandora-muted uppercase tracking-wider">HP Bonus</p>
                      <p className="text-lg font-bold text-pandora-gold">+{fruit.hp}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-pandora-muted uppercase tracking-wider">Poziom</p>
                      <p className="text-lg font-bold text-pandora-gold">{fruit.level}</p>
                    </div>
                  </div>

                  {fruit.description && (
                    <p className="text-[11px] text-pandora-text/60 italic">
                      "{fruit.description}"
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {level < levels[levels.length - 1] && <SectionDivider />}
        </section>
      ))}

      <SectionDivider />

      {/* Tier system explained */}
      <section className="space-y-4">
        <SectionTitle>System Rzadkości Owoców</SectionTitle>

        <Card>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚪</span>
              <div>
                <h4 className="font-semibold text-gray-300">Biały</h4>
                <p className="text-sm text-pandora-text/75">Najczęstsze, małe bonusy HP. Dobrze na początek, ale szybko staną się bezużyteczne.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-2xl">🟢</span>
              <div>
                <h4 className="font-semibold text-green-400">Zielony</h4>
                <p className="text-sm text-pandora-text/75">Rzadsze, umiarkowani bonusy HP. Warte zbierania na średnich poziomach.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🔵</span>
              <div>
                <h4 className="font-semibold text-blue-400">Niebieski</h4>
                <p className="text-sm text-pandora-text/75">Znacznie rzadsze, dobre bonusy HP. Stanowią większość potrzebnego HP dla gracza mid-game.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🟣</span>
              <div>
                <h4 className="font-semibold text-purple-400">Purpurowy</h4>
                <p className="text-sm text-pandora-text/75">Bardzo rzadkie, solidne bonusy HP. Poszukiwane przez graczy high-level.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🟠</span>
              <div>
                <h4 className="font-semibold text-orange-400">Pomarańczowy</h4>
                <p className="text-sm text-pandora-text/75">Egzotyczne, duże bonusy HP. Znajdują się na najwyższych levelach.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🔴</span>
              <div>
                <h4 className="font-semibold text-red-400">Czerwony</h4>
                <p className="text-sm text-pandora-text/75">Legendarne, ogromne bonusy HP. Godło osiągnięcia dla gracza na max levelu.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <SectionDivider />

      {/* Strategy */}
      <section className="space-y-4">
        <SectionTitle>Strategia Zbierania</SectionTitle>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">🎯 Early Game (lv. 1-50)</h3>
          <p className="text-sm text-pandora-text/85">
            Zbieraj białe owoce. Nie martw się optimizacją - każdy bonus HP się liczy. Konsumuj owoce gdy je masz.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">📊 Mid Game (lv. 51-150)</h3>
          <p className="text-sm text-pandora-text/85">
            Przejdź na zielone owoce. Białe będą rare, ale jeśli je spotkasz, możesz je sprzedać. Gromadziś znaczący HP.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">🏆 Late Game (lv. 151+)</h3>
          <p className="text-sm text-pandora-text/85">
            Szukaj niebieskich i fioletowych owoców. Wysokiej jakości owoce są rzadkie - każdy owoc odbijes do grania.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">👑 End Game (max level)</h3>
          <p className="text-sm text-pandora-text/85">
            Zbieraj pomarańczowe i czerwone owoce. Stajesz się tankowaniem - każdy punkt HP czyni Cię silniejszym.
          </p>
        </Card>
      </section>

      <SectionDivider />

      {/* Tips */}
      <section className="space-y-4">
        <SectionTitle>Przydatne Tipy</SectionTitle>

        <Card>
          <ul className="space-y-3 text-sm text-pandora-text/85">
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Nie zapomnij:</strong> Owoce są permanentne - pomyśl zanim zkonsumujesz rzadki owoc</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Handluj:</strong> Duplikaty białych owoców mogą być sprzedane złocie dla dochodu</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Prioretyzuj:</strong> W PvP, gracz z większym HP wygrywa. HP to najlepszy bonus dla wszystkich klas</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Exploruj:</strong> Różne boss'y i dungiony dropują owoce - odkryj swoje favorytowe farmy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Planuj:</strong> Przeglądaj tę listę i zaplanuj docelowe HP dla swojego postavy</span>
            </li>
          </ul>
        </Card>
      </section>

      <SectionDivider />

      {/* Quick summary */}
      <section className="space-y-4">
        <SectionTitle>Podsumowanie Kluczowych Faktów</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox 
            title="📊 Statystyki"
            content={`Dostępnych owoców: ${lifefruits.length}\nZakresów poziomów: ${Math.min(...levels)} - ${Math.max(...levels)}\nRzadkości: 6 (Biały → Czerwony)`}
          />

          <InfoBox 
            title="💪 Maksymalna Moc"
            content={`Najlepsze owoce znajdują się na max levelu\nWszystkie owoce daje permanentny bonus\nHP jest najważniejsze dla przetrwania`}
          />
        </div>
      </section>
    </div>
  )
}
