import { type JSX } from 'react';
import FavoriteButton from './FavoriteButton';
import { getBook } from '../../api/bookApi';
// import { fetchUsers } from '../../api/wordApi';
interface WordListProps {
  word: string;
  meaning: string;
}

export default function WordList({
  word,
  meaning,
}: WordListProps): JSX.Element {
  const handleFetch = () => {
    getBook();
  };
  return (
    <div className="my-5">
      <div className="flex justify-between gap-2 border p-4 rounded-md">
        <div>{word}</div>
        <div onClick={handleFetch}>{meaning}</div>
        <FavoriteButton />
      </div>
    </div>
  );
}
