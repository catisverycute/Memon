import type { JSX } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5';
// import { ChevronLeft, SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WordListHeaderProps {
  listName: string;
}

export default function WordListHeader({
  listName,
}: WordListHeaderProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center h-14 px-4">
      <button className="absolute left-4" onClick={() => navigate(-1)}>
        <IoChevronBack />
      </button>
      <h1 className="mx-auto text-lg font-semibold">{listName}</h1>
      <button className="absolute right-4" onClick={() => navigate(-1)}>
        <BsSearch />
      </button>
    </div>
  );
}
