import { SearchIcon } from 'lucide-react';

export default function SearchWord() {
  return (
    <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
      <SearchIcon className="w-4 h-4 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="단어 검색"
        className="w-full outline-none text-sm"
      />
    </div>
  );
}
