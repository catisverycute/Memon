import { PlusCircle } from 'lucide-react';

export default function AddWordButton() {
  return (
    <div className="flex justify-center">
      <button className="px-10 py-3 rounded flex font-semibold gap-2 bg-primary">
        단어 추가 <PlusCircle />
      </button>
    </div>
  );
}
