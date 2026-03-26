import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import HomePage from './pages/HomePage.tsx'
import ServerInfoPage from './pages/ServerInfoPage.tsx'
import MapsPage from './pages/MapsPage.tsx'
import DungeonsPage from './pages/DungeonsPage.tsx'
import BossesPage from './pages/BossesPage.tsx'
import SoulStonesPage from './pages/SoulStonesPage.tsx'
import PetSystemPage from './pages/PetSystemPage.tsx'
import FishingPage from './pages/FishingPage.tsx'
import MiningPage from './pages/MiningPage.tsx'
import RankSystemPage from './pages/RankSystemPage.tsx'
import BiologistPage from './pages/BiologistPage.tsx'
import SkillsPage from './pages/SkillsPage.tsx'
import ClassesPage from './pages/ClassesPage.tsx'
import TipsPage from './pages/TipsPage.tsx'
import CalculatorPage from './pages/CalculatorPage.tsx'
import EventsPage from './pages/EventsPage.tsx'
import TournamentsPage from './pages/TournamentsPage.tsx'
import EnhancementPage from './pages/EnhancementPage.tsx'
import CostumeSystemPage from './pages/CostumeSystemPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="server-info" element={<ServerInfoPage />} />
        <Route path="classes" element={<ClassesPage />} />
        <Route path="maps" element={<MapsPage />} />
        <Route path="dungeons" element={<DungeonsPage />} />
        <Route path="bosses" element={<BossesPage />} />
        <Route path="soul-stones" element={<SoulStonesPage />} />
        <Route path="pet-system" element={<PetSystemPage />} />
        <Route path="fishing" element={<FishingPage />} />
        <Route path="mining" element={<MiningPage />} />
        <Route path="rank-system" element={<RankSystemPage />} />
        <Route path="biologist" element={<BiologistPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="tips" element={<TipsPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="tournaments" element={<TournamentsPage />} />
        <Route path="enhancement" element={<EnhancementPage />} />
        <Route path="costume-system" element={<CostumeSystemPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
