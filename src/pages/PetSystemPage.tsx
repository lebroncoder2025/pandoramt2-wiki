import { Dog } from 'lucide-react'
import { PageHeader, DataTable, SectionTitle, InfoBox, Card } from '../components/UI.tsx'
import { petSkills } from '../data/serverData.ts'

export default function PetSystemPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        title="System Zwierzaków"
        description="Twój pupil zdobywa poziomy, uczy się umiejętności i wzmacnia twoją postać."
        icon={<Dog className="w-5 h-5" />}
      />

      <InfoBox type="info">
        <p className="text-sm">Okno Zwierzaka: klawisz <strong>P</strong> lub przycisk w Menu Gracza. Maks. poziom pupila: <strong>50</strong>. Zwierzak zdobywa doświadczenie gdy zabijasz potwory (nie zmniejsza twojego XP).</p>
      </InfoBox>

      <SectionTitle>Umiejętności Zwierzaka</SectionTitle>
      <DataTable
        headers={['Umiejętność', 'Bonus', 'Za lvl', 'M1', 'G1', 'P', 'P+']}
        rows={petSkills.map(s => [s.name, s.bonus, s.perLevel, s.m1, s.g1, s.p, s.pPlus])}
        highlightFirst
      />

      <SectionTitle>Szkolenie Umiejętności</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Zwoje Tresury</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Od M1 szkolenie wymaga Zwojów. Szansa na wbicie: <strong className="text-pandora-text/75">50%</strong>. Zwoje losowe ze Skrzynki Tresury.</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Kamień Zwierzaka</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Od G1 potrzebny Kamień Zwierzaka (z Dungeonów) + Zwoje Tresury. Wytwarza się u Podstarzałego Tresera. Szansa: <strong className="text-pandora-text/75">50%</strong>.</p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-pandora-text/80 mb-2">Poziom P+</h3>
          <p className="text-[13px] text-pandora-muted/60 leading-relaxed">Zwierzak musi być na 50 lvl. Wymaga Kamienia Zwierzaka+. Szansa: <strong className="text-pandora-text/75">tylko 10%</strong>!</p>
        </Card>
      </div>

      <InfoBox type="warning">
        <p className="text-sm">Rady Pustelnika i Zwoje Egzorcyzmu <strong>NIE</strong> oddziałują na szkolenie umiejętności zwierzaka.</p>
      </InfoBox>

      <SectionTitle>Przedmioty Zwierzaka</SectionTitle>
      <DataTable
        headers={['Przedmiot', 'Działanie', 'Czas', 'Koszt']}
        rows={[
          ['Smakołyk (I)', 'EXP: 20K-100K (przed 50lvl) / 1% najedzenia (50lvl)', '—', 'Drop / Sklep'],
          ['Smakołyk (II)', 'EXP: 100K-1M (przed 50lvl) / 3% najedzenia (50lvl)', '—', 'Drop / Sklep'],
          ['Smakołyk (III)', 'EXP: 1M-5M (przed 50lvl) / 5% najedzenia (50lvl)', '—', 'Drop / Sklep'],
          ['Obroża Doświadczenia', 'Podwaja EXP pupila', '1h', '100x Odłamek Przedm. Zwierzaka'],
          ['Złota Sakwa', 'Szansa na drop Sztabek +10%', '1h', '100x Odłamek Przedm. Zwierzaka'],
          ['Mistyczny Medalion', 'EXP właściciela +10%', '1h', '100x Odłamek Przedm. Zwierzaka'],
          ['Krwawy Gryzak', 'Obrażenia potworom +5%', '1h', '100x Odłamek Przedm. Zwierzaka'],
          ['Pancerz Grzbietowy', 'Obrażenia na Dungeonach +10%', '1h', '100x Odłamek Przedm. Zwierzaka'],
        ]}
        highlightFirst
      />
      <InfoBox type="info">
        <p className="text-sm">Zwierzak może nosić <strong>maks. 1 specjalny przedmiot</strong>. Przedmioty wytwarza się u Podstarzałego Tresera za Odłamki (z przepalania przedmiotów zwierzaka).</p>
      </InfoBox>
    </div>
  )
}
