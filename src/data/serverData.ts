export const serverInfo = {
  name: 'PandoraMT2',
  type: 'Easy (Old School)',
  maxLevel: 250,
  maxStats: 125,
  currency: 'Yang',
  maxYang: '1.999.999.999.999',
  maxStack: 200,
  classes: 4,
  kingdoms: ['Shinsoo', 'Jinno', 'Chunjo'],
  channels: 5,
  website: 'https://pandoramt2.pl',
  download: 'https://pandoramt2.pl/main/download',
  forum: 'https://forum.pandoramt2.pl',
  discord: 'https://discord.pandoramt2.pl',
  facebook: 'https://www.facebook.com/PandoraPL',
  instagram: 'https://www.instagram.com/pandoramt2.pl',
}

export const startingEquipment = [
  { name: 'Buty Wiatru', description: 'Szybkość ruchu na start' },
  { name: 'Pierścień Teleportacji', description: 'Pod klawiszem TAB' },
  { name: '200x Peleryna Męstwa', description: 'Ochrona na start' },
  { name: 'Koń 21 poziomu', description: 'Szybki transport' },
  { name: 'Podstawowy ekwipunek +9', description: 'Gotowy do walki' },
  { name: '10 Zielonych i Fioletowych Mikstur', description: 'Leczenie' },
  { name: 'Wszystkie języki na M1', description: 'Rozwinięte umiejętności' },
  { name: '100% szansa na przywołanie konia', description: 'Pewne przywołanie' },
]

export const maps = [
  {
    name: 'Atlantyda V1', level: 75, bonus: 'Silny przeciwko Diabłom',
    bosses: 'Lodowa Wiedźma (co 4 godz.)', metins: 'Brak',
    description: 'Pierwsza wersja Atlantydy dla graczy od 75 poziomu.'
  },
  {
    name: 'Atlantyda V2', level: 95, bonus: 'Silny przeciwko Diabłom',
    bosses: '4x Generał Yonghan (2 godz.), Silna Lodowa Wiedźma (6 godz.)', metins: 'Brak',
    description: 'Trudniejsza wersja Atlantydy z potężniejszymi bossami.'
  },
  {
    name: 'Dolina Śmierci', level: 110, bonus: 'Silny przeciwko Diabłom',
    bosses: 'Minotaur (1 godz.)', metins: '10x Metin Zagłady (1 godz.)',
    description: 'Niebezpieczna dolina pełna potężnych diabłów.'
  },
  {
    name: 'Pustynia Wygnańców', level: 150, bonus: 'Silny przeciwko Mistykom',
    bosses: 'Elit. Olbrzymi Żółw (1 godz.)', metins: '4x Metin Zbawienia (1 godz.), 4x Metin Demona (1 godz.)',
    description: 'Rozległa pustynia z Mistykami. Dropią tu najcenniejsze Sztabki.'
  },
  {
    name: 'Mityczna Atlantyda', level: 200, bonus: 'Silny przeciwko Diabłom',
    bosses: '4x Mityczny Generał (2h), Mityczna Wiedźma (8h)', metins: 'Brak',
    description: 'Endgame mapa z najsilniejszymi potworami i najlepszym dropem.'
  },
]

export const dungeons = [
  {
    name: 'Wieża Demonów', level: 40, ticket: 'Brak', type: 'Solo, Grupowy',
    bonus: 'Silny przeciwko Nieumarłym',
    description: 'Klasyczna wieża z wieloma piętrami pełnymi nieumarłych. Idealna na początek przygody z dungeonami.'
  },
  {
    name: 'Komnata Pająków', level: 100, ticket: '5x Skamieniała Łza', type: 'Solo, Grupowy',
    bonus: 'Brak',
    description: 'Mroczna komnata pełna pająków. Wymaga zebrania Skamieniałych Łez.'
  },
  {
    name: 'Komnata Smoka', level: 100, ticket: '5x Kręty Klucz', type: 'Solo, Grupowy',
    bonus: 'Silny przeciwko Diabłom',
    description: 'Ognista komnata ze smokami i diabłami. Potrzebne Kręte Klucze.'
  },
  {
    name: 'Piekielne Katakumby', level: 120, ticket: 'Brak', type: 'Solo, Grupowy',
    bonus: 'Silny przeciwko Nieumarłym',
    description: 'Podziemne katakumby pełne nieumarłych potworów. Nie wymaga przepustki.'
  },
  {
    name: 'Grota Dżinna', level: 150, ticket: 'Bransoleta Sułtana',
    type: 'Solo, Grupowy', bonus: 'Silny przeciwko Mistykom',
    cooldown: '4 godz.',
    description: 'Egzotyczna grota z Mistykami. Wytwórz Bransoletkę Sułtana u Wędrowca Ham.',
    reward: 'Skrzynia Dżinna'
  },
  {
    name: 'Mityczna Komnata', level: 200, ticket: '5x Mityczny Klucz', type: 'Solo, Grupowy',
    bonus: 'Silny przeciwko Diabłom',
    description: 'Najtrudniejsza komnata — wymaga Mitycznych Kluczy z endgame map.'
  },
  {
    name: 'Świątynia Andun', level: 200, ticket: '1x Klejnot Ochrony Duszy',
    type: 'Solo, Grupowy', bonus: 'Silny przeciwko Nieumarłym',
    cooldown: '6 godz.',
    description: 'Najtrudniejszy dungeon w grze. Klejnot tworzy się z 10x Skamieniała Łza + 10x Kręty Klucz + 10x Mityczny Klucz.',
    reward: 'Skrzynia Cesarza'
  },
]

export const bosses = [
  { name: 'Wódz Orków', map: 'Dolina Orków', level: 30, respawn: '30 min', reward: '40M Yang + Pierśćień Doświadczenia', killCount: 1 },
  { name: 'Królowa Pąjaków', map: 'Loch Pąjaków', level: 40, respawn: '30 min', reward: '50M Yang + Rękawica Złodzieja', killCount: 1 },
  { name: 'Olbrzymi Żółw', map: 'Pustynia', level: 60, respawn: '30 min', reward: '60M Yang + Szczęśliwa Złota Moneta', killCount: 1 },
  { name: 'Ognisty Król', map: 'Ognista Ziemia', level: 70, respawn: '30 min', reward: '70M Yang + Dodanie 6/7 Bon + Owoc Życia III', killCount: 1 },
  { name: 'Dziewięć Ogońów', map: 'Góra Sohan', level: 80, respawn: '30 min', reward: '80M Yang + Dodanie 6/7 Bon + Owoc Życia III', killCount: 1 },
  { name: 'Zjawa Żółtego Tygrysa', map: 'Świątynia Hwang', level: 80, respawn: '30 min', reward: '80M Yang + Tęczowy Kamień + Owoc Życia III', killCount: 1 },
  { name: 'Minotaur', map: 'Dolina Śmierci', level: 110, respawn: '60 min', reward: '100M Yang + Bryłka Złota + Owoc Życia IV', killCount: 1 },
  { name: 'Infernus', map: 'Arena Infernusa', level: 110, respawn: '12 godz.', reward: 'Legendarny drop (pancerze, bronie, kamienie)', killCount: 1 },
  { name: 'Balathor', map: 'Grota Balathora', level: 150, respawn: '48 godz.', reward: 'Najlepszy drop w grze', killCount: 1 },
]

export const bonusTable = [
  { name: 'Maks. PŻ', max: '+2000' },
  { name: 'Maks. PE', max: '+500' },
  { name: 'Witalność / Inteligencja / Siła / Zręczność', max: '+15' },
  { name: 'Szybkość Zaklęć', max: '+20%' },
  { name: 'Szybkość Ataku', max: '+15%' },
  { name: 'Szybkość Ruchu', max: '+15%' },
  { name: 'Kradzież PŻ', max: '+50%' },
  { name: 'Kradzież PE', max: '+50%' },
  { name: 'Obrona', max: '+50' },
  { name: 'Wartość Ataku', max: '+50' },
  { name: 'Regeneracja PŻ / PE', max: '+20%' },
  { name: 'Szansa na Otrucie', max: '+8%' },
  { name: 'Szansa na Omdlenie', max: '+15%' },
  { name: 'Szansa na Spowolnienie', max: '+15%' },
  { name: 'Szansa na Krytyczne Uderzenie', max: '+10%' },
  { name: 'Szansa na Przeszywające Uderzenie', max: '+10%' },
  { name: 'Silny przeciwko Ludziom', max: '+10%' },
  { name: 'Obrażenia oddawane do PŻ / PE', max: '+10%' },
  { name: 'Szansa na Odbicie Ciosu', max: '+15%' },
  { name: 'Odporność na Bronie', max: '+15%' },
  { name: 'Silny przeciwko Rasom', max: '+15%' },
  { name: 'Odporność na Klasy', max: '+15%' },
  { name: 'Silny przeciwko Klasom', max: '+15%' },
]

export const bonus67Table = [
  { name: 'Maks. PŻ', value: '+3000' },
  { name: 'Maks. PE', value: '+500' },
  { name: 'Witalność / Inteligencja / Siła / Zręczność', value: '+10' },
  { name: 'Szansa na Krytyczne Uderzenie', value: '+10%' },
  { name: 'Szansa na Przeszywające Uderzenie', value: '+10%' },
  { name: 'Szybkość Ataku', value: '+10%' },
  { name: 'Szybkość Ruchu', value: '+10%' },
  { name: 'Wartość Ataku', value: '+250' },
  { name: 'Odporność na Klasy', value: '+15%' },
  { name: 'Silny przeciwko Klasom / Potworom', value: '+15%' },
]

export const soulStones = [
  { name: 'Kamień Duszy Penetracji+5', type: 'Broń', bonus: 'Szansa na przeszywające Uderzenie: +15%' },
  { name: 'Kamień Duszy Śmierci+5', type: 'Broń', bonus: 'Szansa na cios krytyczny: +15%' },
  { name: 'Kamień Duszy Powtórki+5', type: 'Broń', bonus: 'Szybkość Zaklęcia: +40%' },
  { name: 'Kamień Duszy Wojownika+5', type: 'Broń', bonus: 'Silny przeciwko Wojownikom: +35%' },
  { name: 'Kamień Duszy Ninja+5', type: 'Broń', bonus: 'Silny przeciwko Ninja: +35%' },
  { name: 'Kamień Duszy Sury+5', type: 'Broń', bonus: 'Silny przeciwko Sura: +35%' },
  { name: 'Kamień Duszy Szamana+5', type: 'Broń', bonus: 'Silny przeciwko Szamanom: +35%' },
  { name: 'Kamień Duszy Potwora+5', type: 'Broń', bonus: 'Silny przeciwko Potworom: +15%' },
  { name: 'Kamień Duszy Uchylenia+5', type: 'Zbroja', bonus: 'Szansa na blok ciosów: +15%' },
  { name: 'Kamień Duszy Uniku+5', type: 'Zbroja', bonus: 'Szansa na uniknięcie Strzały: +15%' },
  { name: 'Kamień Duszy Magii+5', type: 'Zbroja', bonus: 'Maks. PE: +500' },
  { name: 'Kamień Witalności+5', type: 'Zbroja', bonus: 'Maks. PŻ: +1000' },
  { name: 'Kamień Duszy Obrony+5', type: 'Zbroja', bonus: 'Obrona: +100' },
  { name: 'Kamień Duszy Przyspieszenia+5', type: 'Zbroja', bonus: 'Szybkość Ruchu: +40%' },
]

export const legendarySoulStones = [
  { name: 'Kamień Duszy Wojny+5', type: 'Broń', bonus: 'Silny przeciwko Ludziom: +15%, Obrażenia Umiejętności: +15%' },
  { name: 'Kamień Duszy Zniszczenia+5', type: 'Broń', bonus: 'Silny przeciwko Bossom: +15%, Silny przeciwko Metinom: +15%' },
  { name: 'Kamień Duszy Mocy+5', type: 'Zbroja', bonus: 'Odporność na Obrażenia: +15%, Odporność na Obraż. Umiejętności: +15%' },
]

export const petSkills = [
  { name: 'Kamienna Skóra', bonus: 'Maks. PŻ', perLevel: '+50', m1: '+500', g1: '+1000', p: '+1500', pPlus: '+3000' },
  { name: 'Smocza Fortuna', bonus: 'Szansa na drop Sztabek', perLevel: '0.5%', m1: '5%', g1: '10%', p: '15%', pPlus: '20%' },
  { name: 'Instynkt Przetrwania', bonus: 'Odporność na Potwory', perLevel: '0.5%', m1: '5%', g1: '10%', p: '15%', pPlus: '25%' },
  { name: 'Instynkt Drapieżcy', bonus: 'Silny przeciwko Potworom', perLevel: '0.5%', m1: '5%', g1: '10%', p: '15%', pPlus: '25%' },
  { name: 'Łowca Dusz', bonus: 'Silny przeciwko Ludziom', perLevel: '0.5%', m1: '5%', g1: '10%', p: '15%', pPlus: '25%' },
]

export const ranks = [
  { name: 'Parobek', range: '1000 – 3999', bonusHP: '—', bonusPvP: '—' },
  { name: 'Paź', range: '4000 – 7999', bonusHP: '—', bonusPvP: '—' },
  { name: 'Giermek', range: '8000 – 11999', bonusHP: '—', bonusPvP: '—' },
  { name: 'Szlachcic', range: '12000 – 19999', bonusHP: '—', bonusPvP: '—' },
  { name: 'Rycerz', range: '20000 – 49999', bonusHP: '+250', bonusPvP: '+3%' },
  { name: 'Baron', range: '50000 – 99999', bonusHP: '+500', bonusPvP: '+6%' },
  { name: 'Hrabia', range: '100000 – 199999', bonusHP: '+750', bonusPvP: '+9%' },
  { name: 'Centurion', range: '200000 – 499999', bonusHP: '+1000', bonusPvP: '+12%' },
  { name: 'Trybun', range: '500000 – 999999', bonusHP: '+1250', bonusPvP: '+15%' },
  { name: 'Legat', range: '1000000 – 1999999', bonusHP: '+1500', bonusPvP: '+18%' },
  { name: 'Konsul', range: '2000000 – 3999999', bonusHP: '+1750', bonusPvP: '+21%' },
  { name: 'Władca', range: '4000000 – 6999999', bonusHP: '+2000', bonusPvP: '+24%' },
  { name: 'Imperator', range: '7000000 – 9999999', bonusHP: '+2250', bonusPvP: '+27%' },
  { name: 'Cesarz', range: '10 000 000+', bonusHP: '+2500', bonusPvP: '+30%' },
]

export const biologistQuests = [
  { item: 'Ząb Orka', level: 30, count: 10, reward: 'Szybkość Ruchu: +10%' },
  { item: 'Księga Klątw', level: 40, count: 15, reward: 'Szybkość Ataku: +10%, Szkatułka Królowej Pająków' },
  { item: 'Pamiątka Po Demonie', level: 50, count: 15, reward: 'Obrona: +150, Szkatułka Dziewięciu Ogonów' },
  { item: 'Matowy Lód', level: 60, count: 20, reward: 'Wartość Ataku: +100, Szkatułka Żółtego Tygrysa' },
  { item: 'Konar Zelkova', level: 70, count: 25, reward: 'Odporność na Obrażenia: +10%, Szybkość Ruchu: +15%, Szkatułka Ognistego Króla' },
  { item: 'Certyfikat Tugyisa', level: 80, count: 30, reward: 'Szybkość Ataku: +15%, Wartość Ataku: +10%, Szkatułka Umarłego Rozpruwacza' },
  { item: 'Czerwony Konar', level: 130, count: 40, reward: 'Odporność na Ludzi: +10%, Szkatułka Minotaura' },
  { item: 'Notatka Przywódcy', level: 160, count: 50, reward: 'Silny przeciwko Ludziom: +8%, Szkatułka Elit. Olbrz. Żółwia' },
  { item: 'Klejnot Zawiści', level: 190, count: 10, reward: 'Maks. PŻ: +500, Wart. Mag. Ataku: +50, Wart. Ataku: +50, Szkatułka Berana Setaou' },
  { item: 'Klejnot Mądrości', level: 220, count: 10, reward: 'Maks. PŻ: +1100, Wart. Mag. Ataku: +60, Wart. Ataku: +60, Szkatułka Azraela' },
]

export const fisherBiologist = [
  { item: 'Karaś', level: 100, count: 20, reward: 'Odporność na Potwory: +5%' },
  { item: 'Ryba Mandaryna', level: 130, count: 20, reward: 'Silny przeciwko Potworom: +5%' },
  { item: 'Duży Karaś', level: 160, count: 10, reward: 'Maks. PŻ: +500' },
  { item: 'Karp', level: 190, count: 10, reward: 'Wartość Ataku: +50' },
  { item: 'Łosoś', level: 220, count: 10, reward: 'Odporność na wszystkie obrażenia: +5%' },
  { item: 'Amur', level: 250, count: 10, reward: 'Silny przeciwko Ludziom: +5%' },
]

export const seafood = [
  { name: 'Krewetka', bonus: 'Silny Przeciwko Potworom +5%', duration: '30 minut' },
  { name: 'Wężogłów', bonus: 'Szybkość Zaklęć +10%', duration: '30 minut' },
  { name: 'Rak', bonus: 'Średnie Obrażenia +5%', duration: '30 minut' },
  { name: 'Krab', bonus: 'Maksymalne PŻ +5%', duration: '30 minut' },
  { name: 'Tylomelania', bonus: 'Doświadczenie +10%', duration: '30 minut' },
]

export const miningStats = [
  { level: '1', bonus: 'Szansa na Wydobycie +1%' },
  { level: 'M1', bonus: 'Szansa na Wydobycie +10%' },
  { level: 'G1', bonus: 'Szansa na Wydobycie +15%' },
  { level: 'P', bonus: 'Szansa na Wydobycie +20%' },
]

export const collections = [
  { name: 'Kolekcja Kamieni', items: 'Legendarne Kamienie Duszy +0', count: 'x15', reward: 'Obrażenia Umiejętności +5%' },
  { name: 'Kolekcja Morza', items: 'Wszystkie Owoce Morza', count: 'x20', reward: 'Szansa na Owoce Morza +2%' },
  { name: 'Kolekcja Ulepszaczy', items: 'Wszystkie Ulepszacze', count: 'x100-200', reward: 'Średnie Obrażenia +5%' },
  { name: 'Kolekcja Bossów', items: 'Standardowe Skrzynie Bossów', count: 'x25', reward: 'Silny Przeciwko Bossom +10%' },
  { name: 'Kolekcja Władców', items: 'Skrzynie z Dungeonów', count: 'x10-25', reward: 'Silny Przeciwko Dungeonom +10%' },
]

export const leadershipBonuses = [
  { level: '1', skillDmg: '+1%', atkSpeed: '+1', defense: '+6', atkValue: '+12', maxHP: '+122', duration: '+7' },
  { level: 'M1', skillDmg: '+3%', atkSpeed: '+4', defense: '+20', atkValue: '+40', maxHP: '+774', duration: '+27' },
  { level: 'G1', skillDmg: '+5%', atkSpeed: '+6', defense: '+29', atkValue: '+59', maxHP: '+1238', duration: '+41' },
  { level: 'P', skillDmg: '+7%', atkSpeed: '+9', defense: '+42', atkValue: '+84', maxHP: '+1862', duration: '+61' },
]

export const polymorphValues = [
  { level: '1', damage: '+1%', duration: '10 minut' },
  { level: 'M1', damage: '+5%', duration: '22 minuty' },
  { level: 'G1', damage: '+15%', duration: '28 minut' },
  { level: 'P', damage: '+30%', duration: '35 minut' },
]

export const costumeBonus = [
  { name: 'Maksymalne PŻ', slots: 'Wszystkie', perLevel: '50', max: '500' },
  { name: 'Maksymalne PE', slots: 'Wszystkie', perLevel: '10', max: '50' },
  { name: 'Witalność / Int / Siła / Zręcz.', slots: 'Wszystkie', perLevel: '1', max: '5' },
  { name: 'Szybkość Ataku', slots: 'Nakładka', perLevel: '2', max: '10' },
  { name: 'Szybkość Ruchu', slots: 'Kostium, Fryzura', perLevel: '2', max: '10' },
  { name: 'Szybkość Zaklęcia', slots: 'Nakładka', perLevel: '2', max: '10' },
  { name: 'Regeneracja PŻ/PE', slots: 'Wszystkie', perLevel: '2', max: '10' },
  { name: 'Szansa na cios Krytyczny/Przeszywający', slots: 'Nakładka', perLevel: '1', max: '5' },
  { name: 'Silny przeciwko Ludziom', slots: 'Wszystkie', perLevel: '1', max: '5' },
  { name: 'Silny przeciwko Rasom', slots: 'Wszystkie', perLevel: '2', max: '10' },
  { name: 'Odporność na Żywioły', slots: 'Kostium, Fryzura', perLevel: '1', max: '5' },
  { name: 'Odporność na Magię', slots: 'Kostium, Fryzura', perLevel: '1', max: '5' },
  { name: 'Odporność na Obrażenia', slots: 'Kostium, Fryzura', perLevel: '1', max: '5' },
  { name: 'Wartość Ataku', slots: 'Nakładka', perLevel: '5', max: '25' },
]

export const classes = [
  {
    name: 'Wojownik',
    nameEn: 'Warrior',
    color: 'red',
    description: 'Potężny walczący w zwarciu. Dysponuje ogromną siłą fizyczną i wytrzymałością.',
    subclasses: [
      { name: 'Ciało', description: 'Skupia się na przetrwaniu i obronie. Świetny tank dzięki wysokiemu PŻ i obronie.', stats: 'WIT / SIŁ' },
      { name: 'Umysł', description: 'Ofensywny wojownik z potężnymi umiejętnościami obszarowymi. Świetny w PvP i PvE.', stats: 'SIŁ / ZRE' },
    ]
  },
  {
    name: 'Ninja',
    nameEn: 'Ninja',
    color: 'blue',
    description: 'Szybki i zwinny zabójca. Może walczyć zarówno bronią białą jak i łukiem.',
    subclasses: [
      { name: 'Bliski zasięg', description: 'Walczy sztyletami — szybkie, śmiercionośne ataki. Doskonały w PvP.', stats: 'ZRE / SIŁ' },
      { name: 'Daleki zasięg', description: 'Łucznik zadający obrażenia z dystansu. Dobry w PvE i wspieraniu grupy.', stats: 'ZRE / INT' },
    ]
  },
  {
    name: 'Sura',
    nameEn: 'Sura',
    color: 'purple',
    description: 'Mroczny mag-wojownik łączący magię z walką wręcz. Wszechstronny i potężny.',
    subclasses: [
      { name: 'Broń Magiczna', description: 'Wzmacnia swoją broń mroczną magią. Devastujące obrażenia w walce wręcz.', stats: 'INT / SIŁ' },
      { name: 'Czarna Magia', description: 'Potężny mag korzystający z czarów ofensywnych. Silne AoE i kontrola tłumu.', stats: 'INT / WIT' },
    ]
  },
  {
    name: 'Szaman',
    nameEn: 'Shaman',
    color: 'green',
    description: 'Mistyczny uzdrowiciel i buforacz. Niezbędny w każdej grupie dzięki potężnym wzmocnieniom.',
    subclasses: [
      { name: 'Smok', description: 'Ofensywny szaman z potężnymi atakami żywiołowymi. Doskonały solo i w PvP.', stats: 'INT / SIŁ' },
      { name: 'Leczenie', description: 'Lekarz grupy — leczy sojuszników i nakłada potężne buffy. Niezastąpiony support.', stats: 'INT / WIT' },
    ]
  },
]

export const lifefruits = [
  { name: 'Owoc Życia (I)', points: 500 },
  { name: 'Owoc Życia (II)', points: 1000 },
  { name: 'Owoc Życia (III)', points: 2000 },
  { name: 'Owoc Życia (IV)', points: 5000 },
  { name: 'Owoc Życia (V)', points: 10000 },
]

// ─── EQUIPMENT DATA ──────────────────────────────────────────────────────────

export const equipmentTiers = [
  { tier: 'Podstawowy', levelRange: '40–60', color: 'gray' as const },
  { tier: 'Ulepszony', levelRange: '65–90', color: 'green' as const },
  { tier: 'Rzadki', levelRange: '95–125', color: 'blue' as const },
  { tier: 'Epikowy', levelRange: '130–160', color: 'purple' as const },
  { tier: 'Legendarny', levelRange: '165–180', color: 'orange' as const },
  { tier: 'Mityczny', levelRange: '200+', color: 'gold' as const },
]

export const equipmentWeapons = [
  {
    class: 'Wojownik',
    icon: '⚔️',
    color: 'red' as const,
    types: [
      {
        name: 'Miecz jednoręczny',
        items: [
          { name: 'Bojowy Miecz', level: 40, tier: 'Podstawowy' },
          { name: 'Miecz Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Śmiercionośne Ostrze', level: 70, tier: 'Ulepszony' },
          { name: 'Diamentowy Miecz', level: 90, tier: 'Ulepszony' },
          { name: 'Odwieczne Ostrze', level: 105, tier: 'Rzadki' },
          { name: 'Krwawnik', level: 120, tier: 'Rzadki' },
          { name: 'Miecz Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Miecz Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczny Miecz', level: 200, tier: 'Mityczny' },
        ],
      },
      {
        name: 'Miecz dwuręczny',
        items: [
          { name: 'Wielki Bojowy Miecz', level: 40, tier: 'Podstawowy' },
          { name: 'Wielki Miecz Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Wielkie Śmiercionośne Ostrze', level: 70, tier: 'Ulepszony' },
          { name: 'Wielki Diamentowy Miecz', level: 90, tier: 'Ulepszony' },
          { name: 'Wielkie Odwieczne Ostrze', level: 105, tier: 'Rzadki' },
          { name: 'Wielki Krwawnik', level: 120, tier: 'Rzadki' },
          { name: 'Wielki Miecz Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Wielki Miecz Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Wielki Mityczny Miecz', level: 200, tier: 'Mityczny' },
        ],
      },
    ],
  },
  {
    class: 'Ninja',
    icon: '🗡️',
    color: 'blue' as const,
    types: [
      {
        name: 'Sztylet',
        items: [
          { name: 'Sztylet Bojowy', level: 40, tier: 'Podstawowy' },
          { name: 'Sztylet Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Sztylet Śmierci', level: 70, tier: 'Ulepszony' },
          { name: 'Diamentowy Sztylet', level: 90, tier: 'Ulepszony' },
          { name: 'Odwieczny Sztylet', level: 105, tier: 'Rzadki' },
          { name: 'Sztylet Krwi', level: 120, tier: 'Rzadki' },
          { name: 'Sztylet Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Sztylet Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczny Sztylet', level: 200, tier: 'Mityczny' },
        ],
      },
      {
        name: 'Łuk',
        items: [
          { name: 'Łuk Bojowy', level: 40, tier: 'Podstawowy' },
          { name: 'Łuk Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Łuk Śmierci', level: 70, tier: 'Ulepszony' },
          { name: 'Diamentowy Łuk', level: 90, tier: 'Ulepszony' },
          { name: 'Odwieczny Łuk', level: 105, tier: 'Rzadki' },
          { name: 'Łuk Krwi', level: 120, tier: 'Rzadki' },
          { name: 'Łuk Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Łuk Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczny Łuk', level: 200, tier: 'Mityczny' },
        ],
      },
    ],
  },
  {
    class: 'Sura',
    icon: '🌑',
    color: 'purple' as const,
    types: [
      {
        name: 'Miecz runiczny',
        items: [
          { name: 'Runiczny Miecz Bojowy', level: 40, tier: 'Podstawowy' },
          { name: 'Runiczny Miecz Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Runiczna Śmiercionośna Broń', level: 70, tier: 'Ulepszony' },
          { name: 'Runiczna Diamentowa Broń', level: 90, tier: 'Ulepszony' },
          { name: 'Runiczna Odwieczna Broń', level: 105, tier: 'Rzadki' },
          { name: 'Runiczna Broń Krwi', level: 120, tier: 'Rzadki' },
          { name: 'Runiczna Broń Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Runiczna Broń Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczna Runiczna Broń', level: 200, tier: 'Mityczny' },
        ],
      },
      {
        name: 'Różdżka',
        items: [
          { name: 'Różdżka Bojowa', level: 40, tier: 'Podstawowy' },
          { name: 'Różdżka Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Różdżka Śmierci', level: 70, tier: 'Ulepszony' },
          { name: 'Diamentowa Różdżka', level: 90, tier: 'Ulepszony' },
          { name: 'Odwieczna Różdżka', level: 105, tier: 'Rzadki' },
          { name: 'Różdżka Krwi', level: 120, tier: 'Rzadki' },
          { name: 'Różdżka Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Różdżka Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczna Różdżka', level: 200, tier: 'Mityczny' },
        ],
      },
    ],
  },
  {
    class: 'Szaman',
    icon: '🌿',
    color: 'green' as const,
    types: [
      {
        name: 'Wachlarz',
        items: [
          { name: 'Wachlarz Bojowy', level: 40, tier: 'Podstawowy' },
          { name: 'Wachlarz Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Wachlarz Śmierci', level: 70, tier: 'Ulepszony' },
          { name: 'Diamentowy Wachlarz', level: 90, tier: 'Ulepszony' },
          { name: 'Odwieczny Wachlarz', level: 105, tier: 'Rzadki' },
          { name: 'Wachlarz Krwi', level: 120, tier: 'Rzadki' },
          { name: 'Wachlarz Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Wachlarz Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczny Wachlarz', level: 200, tier: 'Mityczny' },
        ],
      },
      {
        name: 'Flet',
        items: [
          { name: 'Flet Bojowy', level: 40, tier: 'Podstawowy' },
          { name: 'Flet Trytona', level: 55, tier: 'Podstawowy' },
          { name: 'Flet Śmierci', level: 70, tier: 'Ulepszony' },
          { name: 'Diamentowy Flet', level: 90, tier: 'Ulepszony' },
          { name: 'Odwieczny Flet', level: 105, tier: 'Rzadki' },
          { name: 'Flet Krwi', level: 120, tier: 'Rzadki' },
          { name: 'Flet Gromu', level: 145, tier: 'Epikowy' },
          { name: 'Flet Smoka', level: 175, tier: 'Legendarny' },
          { name: 'Mityczny Flet', level: 200, tier: 'Mityczny' },
        ],
      },
    ],
  },
]

export const equipmentArmors = [
  {
    class: 'Wojownik',
    icon: '🛡️',
    items: [
      { name: 'Zbroja Ognistego Ptaka', level: 50, tier: 'Podstawowy' },
      { name: 'Zbroja Smoka', level: 75, tier: 'Ulepszony' },
      { name: 'Zbroja Ze Skóry Smoka', level: 100, tier: 'Rzadki' },
      { name: 'Zbroja Gromu', level: 120, tier: 'Rzadki' },
      { name: 'Zbroja Upadłego Anioła', level: 150, tier: 'Epikowy' },
      { name: 'Zbroja Smoczego Boga', level: 175, tier: 'Legendarny' },
      { name: 'Mityczna Zbroja Wojownika', level: 200, tier: 'Mityczny' },
    ],
  },
  {
    class: 'Ninja',
    icon: '🥷',
    items: [
      { name: 'Skóra Ognistego Ptaka', level: 50, tier: 'Podstawowy' },
      { name: 'Skóra Smoka', level: 75, tier: 'Ulepszony' },
      { name: 'Skóra Ze Skóry Smoka', level: 100, tier: 'Rzadki' },
      { name: 'Skóra Gromu', level: 120, tier: 'Rzadki' },
      { name: 'Skóra Upadłego Anioła', level: 150, tier: 'Epikowy' },
      { name: 'Skóra Smoczego Boga', level: 175, tier: 'Legendarny' },
      { name: 'Mityczna Skóra Ninja', level: 200, tier: 'Mityczny' },
    ],
  },
  {
    class: 'Sura',
    icon: '🌑',
    items: [
      { name: 'Szata Ognistego Ptaka', level: 50, tier: 'Podstawowy' },
      { name: 'Szata Smoka', level: 75, tier: 'Ulepszony' },
      { name: 'Szata Ze Skóry Smoka', level: 100, tier: 'Rzadki' },
      { name: 'Szata Gromu', level: 120, tier: 'Rzadki' },
      { name: 'Szata Upadłego Anioła', level: 150, tier: 'Epikowy' },
      { name: 'Szata Smoczego Boga', level: 175, tier: 'Legendarny' },
      { name: 'Mityczna Szata Sury', level: 200, tier: 'Mityczny' },
    ],
  },
  {
    class: 'Szaman',
    icon: '🌿',
    items: [
      { name: 'Kimono Ognistego Ptaka', level: 50, tier: 'Podstawowy' },
      { name: 'Kimono Smoka', level: 75, tier: 'Ulepszony' },
      { name: 'Kimono Ze Skóry Smoka', level: 100, tier: 'Rzadki' },
      { name: 'Kimono Gromu', level: 120, tier: 'Rzadki' },
      { name: 'Kimono Upadłego Anioła', level: 150, tier: 'Epikowy' },
      { name: 'Kimono Smoczego Boga', level: 175, tier: 'Legendarny' },
      { name: 'Mityczne Kimono Szamana', level: 200, tier: 'Mityczny' },
    ],
  },
]

export const equipmentHelmets = [
  { name: 'Hełm Ognistego Ptaka', level: 50, tier: 'Podstawowy' },
  { name: 'Hełm Smoka', level: 75, tier: 'Ulepszony' },
  { name: 'Hełm Ze Skóry Smoka', level: 100, tier: 'Rzadki' },
  { name: 'Hełm Gromu', level: 120, tier: 'Rzadki' },
  { name: 'Hełm Upadłego Anioła', level: 150, tier: 'Epikowy' },
  { name: 'Hełm Smoczego Boga', level: 175, tier: 'Legendarny' },
  { name: 'Mityczny Hełm', level: 200, tier: 'Mityczny' },
]

export const equipmentBoots = [
  { name: 'Buty Wiatru', level: 1, tier: 'Startowe', note: 'Startowy ekwipunek' },
  { name: 'Buty Ognistego Ptaka', level: 50, tier: 'Podstawowy' },
  { name: 'Buty Smoka', level: 75, tier: 'Ulepszony' },
  { name: 'Buty Ze Skóry Smoka', level: 100, tier: 'Rzadki' },
  { name: 'Buty Gromu', level: 120, tier: 'Rzadki' },
  { name: 'Buty Upadłego Anioła', level: 150, tier: 'Epikowy' },
  { name: 'Buty Smoczego Boga', level: 175, tier: 'Legendarny' },
  { name: 'Mityczne Buty', level: 200, tier: 'Mityczny' },
]

export const equipmentShields = [
  { name: 'Tarcza Bojowa', level: 40, tier: 'Podstawowy', classes: 'Wojownik, Sura' },
  { name: 'Tarcza Smoka', level: 75, tier: 'Ulepszony', classes: 'Wojownik, Sura' },
  { name: 'Tarcza Ze Skóry Smoka', level: 100, tier: 'Rzadki', classes: 'Wojownik, Sura' },
  { name: 'Tarcza Gromu', level: 120, tier: 'Rzadki', classes: 'Wojownik, Sura' },
  { name: 'Tarcza Upadłego Anioła', level: 150, tier: 'Epikowy', classes: 'Wojownik, Sura' },
  { name: 'Mityczna Tarcza', level: 200, tier: 'Mityczny', classes: 'Wojownik, Sura' },
]

export const equipmentJewelry = [
  { type: 'Naszyjnik', name: 'Naszyjnik Z Niebiańskich Łez', level: 40, tier: 'Podstawowy' },
  { type: 'Naszyjnik', name: 'Naszyjnik Smoka', level: 85, tier: 'Ulepszony' },
  { type: 'Naszyjnik', name: 'Diamentowy Naszyjnik', level: 115, tier: 'Rzadki' },
  { type: 'Naszyjnik', name: 'Mityczny Naszyjnik', level: 200, tier: 'Mityczny' },
  { type: 'Bransoleta', name: 'Bransoleta Z Niebiańskich Łez', level: 40, tier: 'Podstawowy' },
  { type: 'Bransoleta', name: 'Bransoleta Smoka', level: 85, tier: 'Ulepszony' },
  { type: 'Bransoleta', name: 'Diamentowa Bransoleta', level: 115, tier: 'Rzadki' },
  { type: 'Bransoleta', name: 'Mityczna Bransoleta', level: 200, tier: 'Mityczny' },
  { type: 'Kolczyki', name: 'Kolczyki Z Niebiańskich Łez', level: 40, tier: 'Podstawowy' },
  { type: 'Kolczyki', name: 'Kolczyki Smoka', level: 85, tier: 'Ulepszony' },
  { type: 'Kolczyki', name: 'Diamentowe Kolczyki', level: 115, tier: 'Rzadki' },
  { type: 'Kolczyki', name: 'Mityczne Kolczyki', level: 200, tier: 'Mityczny' },
  { type: 'Pierścień', name: 'Pierścień Doświadczenia', level: 1, tier: 'Startowe', note: 'Nagroda za quest Wódz Orków' },
  { type: 'Pierścień', name: 'Pierścień Z Niebiańskich Łez', level: 40, tier: 'Podstawowy' },
  { type: 'Pierścień', name: 'Pierścień Smoka', level: 85, tier: 'Ulepszony' },
  { type: 'Pierścień', name: 'Diamentowy Pierścień', level: 115, tier: 'Rzadki' },
  { type: 'Pierścień', name: 'Mityczny Pierścień', level: 200, tier: 'Mityczny' },
]

// Legendary Soul Stone upgrade progression (+0 to +5)
export const legendarySoulStoneProgression = [
  {
    name: 'Kamień Duszy Wojny',
    type: 'Broń',
    icon: '⚔️',
    levels: [
      { level: '+0', b1: 'Silny przeciwko Ludziom: +3%', b2: 'Obrażenia Umiejętności: +3%' },
      { level: '+1', b1: 'Silny przeciwko Ludziom: +6%', b2: 'Obrażenia Umiejętności: +6%' },
      { level: '+2', b1: 'Silny przeciwko Ludziom: +9%', b2: 'Obrażenia Umiejętności: +9%' },
      { level: '+3', b1: 'Silny przeciwko Ludziom: +12%', b2: 'Obrażenia Umiejętności: +12%' },
      { level: '+4', b1: 'Silny przeciwko Ludziom: +14%', b2: 'Obrażenia Umiejętności: +14%' },
      { level: '+5', b1: 'Silny przeciwko Ludziom: +15%', b2: 'Obrażenia Umiejętności: +15%' },
    ],
  },
  {
    name: 'Kamień Duszy Zniszczenia',
    type: 'Broń',
    icon: '💥',
    levels: [
      { level: '+0', b1: 'Silny przeciwko Bossom: +3%', b2: 'Silny przeciwko Metinom: +3%' },
      { level: '+1', b1: 'Silny przeciwko Bossom: +6%', b2: 'Silny przeciwko Metinom: +6%' },
      { level: '+2', b1: 'Silny przeciwko Bossom: +9%', b2: 'Silny przeciwko Metinom: +9%' },
      { level: '+3', b1: 'Silny przeciwko Bossom: +12%', b2: 'Silny przeciwko Metinom: +12%' },
      { level: '+4', b1: 'Silny przeciwko Bossom: +14%', b2: 'Silny przeciwko Metinom: +14%' },
      { level: '+5', b1: 'Silny przeciwko Bossom: +15%', b2: 'Silny przeciwko Metinom: +15%' },
    ],
  },
  {
    name: 'Kamień Duszy Mocy',
    type: 'Zbroja',
    icon: '🛡️',
    levels: [
      { level: '+0', b1: 'Odporność na Obrażenia: +3%', b2: 'Odporność na Obraż. Umiejętności: +3%' },
      { level: '+1', b1: 'Odporność na Obrażenia: +6%', b2: 'Odporność na Obraż. Umiejętności: +6%' },
      { level: '+2', b1: 'Odporność na Obrażenia: +9%', b2: 'Odporność na Obraż. Umiejętności: +9%' },
      { level: '+3', b1: 'Odporność na Obrażenia: +12%', b2: 'Odporność na Obraż. Umiejętności: +12%' },
      { level: '+4', b1: 'Odporność na Obrażenia: +14%', b2: 'Odporność na Obraż. Umiejętności: +14%' },
      { level: '+5', b1: 'Odporność na Obrażenia: +15%', b2: 'Odporność na Obraż. Umiejętności: +15%' },
    ],
  },
]

