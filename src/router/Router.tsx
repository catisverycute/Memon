import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../page/HomePage';
import LearnPage from '../page/LearnPage';
import VocabularyListPage from '../page/VocabularyListPage';
import SignupPage from '../page/SignupPage';
import LoginPage from '../page/LoginPage';

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/learn/:id" element={<LearnPage />} />
        <Route path="/vocabulary/:id/list" element={<VocabularyListPage />} />
      </Route>
    </Routes>
  );
}
