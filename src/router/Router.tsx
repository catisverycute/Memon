import { Route, Routes } from 'react-router-dom';
import HomePage from '../page/HomePage';
import MainLayout from '../layout/MainLayout';
import VocabularyPage from '../page/VocabularyPage';

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
      </Route>
    </Routes>
  );
}
