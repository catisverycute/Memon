// import { StarIcon } from 'lucide-react';
import type { JSX } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface FavoriteButtonProps {
  isChecked?: boolean;
  handleStarBtn?: () => void;
}

export default function FavoriteButton({
  isChecked,
  handleStarBtn,
}: FavoriteButtonProps): JSX.Element {
  return (
    <button onClick={handleStarBtn}>
      {isChecked ? <FaStar fill="yellow" /> : <FaRegStar />}
    </button>
  );
}
