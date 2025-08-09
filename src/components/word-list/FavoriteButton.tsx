import { StarIcon } from 'lucide-react';
import type { JSX } from 'react';

interface FavoriteButtonProps {
  isChecked: boolean;
  handleStarBtn: () => void;
}

export default function FavoriteButton({
  isChecked,
  handleStarBtn,
}: FavoriteButtonProps): JSX.Element {
  return (
    <button onClick={handleStarBtn}>
      {isChecked ? <StarIcon fill="yellow" /> : <StarIcon />}
    </button>
  );
}
