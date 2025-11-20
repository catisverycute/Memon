import { type JSX } from 'react';
import { FaPlus } from 'react-icons/fa6';
import Button from '../common/Button';

interface AddButtonProps {
  addButton: () => void;
}

export default function AddVocabularyBookButton({
  addButton,
}: AddButtonProps): JSX.Element {
  return (
    <Button
      variant="icon"
      size="addBtn"
      className="bg-dol rounded-full text-white flex justify-center items-center"
      onClick={addButton}
    >
      <FaPlus size={18} />
    </Button>
  );
}
