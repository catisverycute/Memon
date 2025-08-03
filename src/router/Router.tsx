import { Route, Routes } from 'react-router-dom';
import HomePage from '../page/HomePage';
import MainLayout from '../layout/MainLayout';
import LearnPage from '../page/LearnPage';

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn/:id" element={<LearnPage />} />
      </Route>
    </Routes>
  );
}
