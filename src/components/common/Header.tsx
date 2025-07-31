import type { JSX } from 'react';

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-between">
      <h2>Memon</h2>
      <div className="flex gap-2">
        <div>dark mode</div>
        <div>market</div>
      </div>
    </div>
  );
}
