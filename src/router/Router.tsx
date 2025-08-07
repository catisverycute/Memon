import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../page/HomePage';
import LearnPage from '../page/LearnPage';
import VocabularyListPage from '../page/VocabularyListPage';

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn/:id" element={<LearnPage />} />
        <Route path="/vocabulary/:id/list" element={<VocabularyListPage />} />
      </Route>
    </Routes>
  );
}
