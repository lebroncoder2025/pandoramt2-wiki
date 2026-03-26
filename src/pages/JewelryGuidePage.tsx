import { jewelry } from '../data/serverData'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import SectionDivider from '../components/SectionDivider'
import Card from '../components/Card'
import InfoBox from '../components/InfoBox'

export default function JewelryGuidePage() {
  // Organize jewelry by type
  const jewelryByType = jewelry.reduce((acc: Record<string, typeof jewelry>, item) => {
    if (!acc[item.type]) acc[item.type] = []
    acc[item.type].push(item)
    return acc
  }, {})

  const types = Object.keys(jewelryByType).sort()

  const getTierColor = (tier: string) => {
    if (tier === 'Zwykły') return 'text-gray-300'
    if (tier === 'Rzadki') return 'text-green-400'
    if (tier === 'Epicki') return 'text-blue-400'
    if (tier === 'Legendarny') return 'text-purple-400'
    return 'text-pandora-text'
  }

  const getTierEmoji = (tier: string) => {
    if (tier === 'Zwykły') return '⚪'
    if (tier === 'Rzadki') return '🟢'
    if (tier === 'Epicki') return '🔵'
    if (tier === 'Legendarny') return '🟣'
    return '⭕'
  }

  const classRecommendations = {
    'Warrior': {
      emoji: '⚔️',
      description: 'Wojownicy preferują biżuterię zwiększającą Atak i Życie',
      bonuses: ['Atak Minimalny', 'Atak Maksymalny', 'HP'],
    },
    'Assassin': {
      emoji: '🗡️',
      description: 'Asasini szukają szybkości i penetracji dla maksymalnych obrażeń',
      bonuses: ['Atak Maksymalny', 'AttackSpeed', 'AttackSpeed'],
    },
    'Sura': {
      emoji: '🔱',
      description: 'Surowie łączą atak z obroną dla zrównoważonego playstyle\'u',
      bonuses: ['Atak Maksymalny', 'Defence', 'HP'],
    },
    'Shaman': {
      emoji: '📿',
      description: 'Szamani skupiają się na mocy magicznej i ochronie',
      bonuses: ['Atak Maksymalny', 'Defence', 'HP'],
    },
  }

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Przewodnik Biżuterii" 
        description="Kompletny katalog pierścionków, naszyjników i bransoletek - bonusy, strategie i rekomendacje buildów"
      />

      {/* Intro */}
      <section className="space-y-4">
        <SectionTitle>O Biżuterii</SectionTitle>
        <Card>
          <p className="text-pandora-text/85 mb-4">
            Biżuteria to esencja buildowania postavy. Pierścionki, naszyjniki i bransolety zapewniają bonusy statystyczne, które definiują Twoją moc w walce. Każdy kawałek biżuterii może być wzmacniany w zależności od Twojego budgeту i strategii.
          </p>
          <p className="text-pandora-text/85">
            Istnieje wiele kombinacji, i każdy build powinien być starannie zaplanowany żeby maksymalizować potencjał Twojej klasy.
          </p>
        </Card>

        <InfoBox 
          title="💡 Wskazówka"
          content="Biżuteria to kluczowy element twojego ekwipunku. Zanim kupisz lub craftujesz biżuterię, zaplanuj swój build i upewnij się, że bonusy są dla Ciebie optymalne."
        />
      </section>

      <SectionDivider />

      {/* System explanation */}
      <section className="space-y-4">
        <SectionTitle>Jak Działa System Biżuterii</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">💍 Pierścionki</h3>
            <p className="text-sm text-pandora-text/85">
              Tradycyjnie noszone w parach. Zapewniają szerokie spektrum bonusów - od ataku po defensę.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">⛓️ Naszyjniki</h3>
            <p className="text-sm text-pandora-text/85">
              Pojedyncze kawałki noszące do 3 bonusów. Są głównym źródłem statystyk dla wielu graczy.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">🔗 Bransolety</h3>
            <p className="text-sm text-pandora-text/85">
              Noszą się parami, zapewniają dodatkowe bonusy. Są często underestimated ale bardzo wartościowe.
            </p>
          </Card>

          <Card variant="highlighted">
            <h3 className="font-semibold text-pandora-gold mb-2">✨ Синергия</h3>
            <p className="text-sm text-pandora-text/85">
              Kluczem do potężnego builda jest kombinacja - wszystkie kawałki biżuterii pracujące razem.
            </p>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Jewelry by type */}
      {types.map((type) => (
        <section key={type} className="space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle>{type}</SectionTitle>
            <span className="text-sm text-pandora-muted">
              {jewelryByType[type].length} pozycj{jewelryByType[type].length > 1 ? 'i' : 'a'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jewelryByType[type].map((item) => (
              <Card key={`${item.type}-${item.name}`} variant="highlighted">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm leading-tight">{item.name}</h3>
                      <span className="text-lg">{getTierEmoji(item.tier)}</span>
                    </div>
                    <p className={`text-xs font-medium ${getTierColor(item.tier)}`}>
                      {item.tier}
                    </p>
                  </div>

                  {item.bonuses && item.bonuses.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-pandora-border/20">
                      {item.bonuses.map((bonus: string, idx: number) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <span className="text-pandora-text/70">{bonus.split(': ')[0]}</span>
                          <span className="text-pandora-gold font-semibold">{bonus.split(': ')[1] || bonus}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.description && (
                    <p className="text-[11px] text-pandora-text/60 italic mt-2">
                      "{item.description}"
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {type !== types[types.length - 1] && <SectionDivider />}
        </section>
      ))}

      <SectionDivider />

      {/* Rarity system */}
      <section className="space-y-4">
        <SectionTitle>System Rzadkości Biżuterii</SectionTitle>

        <Card>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚪</span>
              <div>
                <h4 className="font-semibold text-gray-300">Zwykłe</h4>
                <p className="text-sm text-pandora-text/75">Dostępne dla każdego. Podstawowe bonusy dla nowych graczy i levelu-upów.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-2xl">🟢</span>
              <div>
                <h4 className="font-semibold text-green-400">Rzadkie</h4>
                <p className="text-sm text-pandora-text/75">Solidne wybory. Stanowią większość ekwipunku dla gracza mid-level.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🔵</span>
              <div>
                <h4 className="font-semibold text-blue-400">Epickie</h4>
                <p className="text-sm text-pandora-text/75">Znacznie lepsze bonusy. Główne cele dla graczy próbujących się ulepszyć.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🟣</span>
              <div>
                <h4 className="font-semibold text-purple-400">Legendarne</h4>
                <p className="text-sm text-pandora-text/75">Najlepsze możliwe bonusy. Rare, drogi, ale warte każdej złoci jeśli je posiadasz.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <SectionDivider />

      {/* Class recommendations */}
      <section className="space-y-4">
        <SectionTitle>Rekomendacje po Klasach</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(classRecommendations).map(([className, rec]: [string, any]) => (
            <Card key={className} variant="highlighted">
              <div className="space-y-2">
                <h3 className="font-semibold text-pandora-gold">
                  {rec.emoji} {className}
                </h3>
                <p className="text-sm text-pandora-text/85">
                  {rec.description}
                </p>
                <div className="pt-2 border-t border-pandora-border/20">
                  <p className="text-xs text-pandora-muted mb-2">Priorytetowe bonusy:</p>
                  <div className="flex flex-wrap gap-1">
                    {rec.bonuses.map((bonus: string, idx: number) => (
                      <span 
                        key={idx}
                        className="text-[10px] px-2 py-1 rounded bg-pandora-gold/10 text-pandora-gold"
                      >
                        {bonus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Building strategy */}
      <section className="space-y-4">
        <SectionTitle>Strategie Budowania Biżuterii</SectionTitle>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">🎯 Skoncentrowany Build</h3>
          <p className="text-sm text-pandora-text/85">
            Wszystka biżuteria skupia się na 1-2 stat'ach (np. tylko Atak). To daje maksymalny bonus do wybranego atrybutu, ale pozostałe statystyki mogą być słabe.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">📊 Zrównoważony Build</h3>
          <p className="text-sm text-pandora-text/85">
            Mieszanka bonusów - np. Atak, Obrona i HP. To daje wszechstronność i czyni cię trudnym do pokonania dla wielu przeciwników.
          </p>
        </Card>

        <Card variant="highlighted">
          <h3 className="font-semibold text-pandora-gold mb-2">⚡ Hyperspecjalistyczny Build</h3>
          <p className="text-sm text-pandora-text/85">
            Unikalna kombinacja bonusów dostosowana do specyficznych umiejętności Twojej klasy. To wymaga wiedzy i może być niezwykle potężne.
          </p>
        </Card>

        <InfoBox 
          title="💡 Porada Budowania"
          content="Testuj różne kombinacje. Różne budowy działają dla różnych stylów gry - agresywny PvP, grinding, grupowe dungiony. Znajdź co działa dla Ciebie."
        />
      </section>

      <SectionDivider />

      {/* Tips */}
      <section className="space-y-4">
        <SectionTitle>Przydatne Tipy</SectionTitle>

        <Card>
          <ul className="space-y-3 text-sm text-pandora-text/85">
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Zaplanuj z góry:</strong> Zanim zaczniesz crafting'ować biżuterię, wiem jaki build chcesz</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Negocjuj ceny:</strong> Biżuteria jest droga. Handluj z innymi graczami aby znaleźć najlepsze ceny</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Wzmacniaj stopniowo:</strong> Nie wzmacniaj wszystkiego na raz. Priorytetyzuj najlepsze kawałki</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Synchronizuj z levelami:</strong> Twoja biżuteria powinna rosnąć wraz z Twoim poziomem postaci</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pandora-gold">✓</span>
              <span><strong>Eksperymentuj:</strong> Gra oferuje tyle możliwości - spróbuj nietraditionalnych buildów!</span>
            </li>
          </ul>
        </Card>
      </section>

      <SectionDivider />

      {/* Summary */}
      <section className="space-y-4">
        <SectionTitle>Podsumowanie</SectionTitle>

        <InfoBox 
          title="📊 Statystyki Biżuterii"
          content={`Łączna ilość przedmiotów: ${jewelry.length}\nTypy: ${types.join(', ')}\nOsnowny system: 4 poziomy rzadkości\nKluczowy element: Budowanie jest sztuką, nie nauką`}
        />

        <Card variant="highlighted">
          <p className="text-sm text-pandora-text/85">
            Biżuteria jest serce twojego builda. Z odpowiednim wyborem kawałków i strategi, możesz być prawie nie do pokonania. 
            Pamiętaj, najlepsza biżuteria to ta dopasowana do Twojego playstyle'u i zasobów. Powodzenia w gromadzeniu!
          </p>
        </Card>
      </section>
    </div>
  )
}
