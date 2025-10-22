// import { PlusCircle } from 'lucide-react';

import { LuCirclePlus } from 'react-icons/lu';

interface AddButtonProps {
  addWord: () => void;
}

export default function AddWordButton({ addWord }: AddButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        className="px-10 py-3 rounded flex font-semibold gap-2 bg-primary"
        onClick={addWord}
      >
        단어 추가 <LuCirclePlus />
      </button>
    </div>
  );
}
