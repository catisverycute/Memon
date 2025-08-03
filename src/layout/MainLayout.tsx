import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayout(): JSX.Element {
  return (
    <div className="flex flex-col h-full bg-white">
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
  