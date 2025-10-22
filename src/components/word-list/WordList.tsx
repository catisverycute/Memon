import { type JSX } from 'react';
import FavoriteButton from './FavoriteButton';
import { getBook } from '../../api/bookApi';
// import { fetchUsers } from '../../api/wordApi';

export default function WordList(): JSX.Element {
  const handleFetch = () => {
    getBook();
  };
  return (
    <div className="my-5">
      <div>150 글자</div>
      <div className="flex justify-between gap-2 border p-4 rounded-md">
        <div>border</div>
        <div onClick={handleFetch}>n. 경계</div>
        <FavoriteButton />
      </div>
    </div>
  );
}
