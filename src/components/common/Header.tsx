import type { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-between">
      <Link to={'/'}>
        <h2>Memon</h2>
      </Link>
      <div className="flex gap-2">
        <div>dark mode</div>
        <div>market</div>
      </div>
    </div>
  );
}
