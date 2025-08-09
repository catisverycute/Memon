import { type JSX } from 'react';

interface AddButtonProps {
  addButton: () => void;
}

export default function AddVocabularyBookButton({
  addButton,
}: AddButtonProps): JSX.Element {
  return (
    <button className="bg-dol  w-12 h-12 rounded-full" onClick={addButton}>
      +
    </button>
  );
}
