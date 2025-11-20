import { LuCirclePlus } from 'react-icons/lu';
import Button from '../common/Button';

interface AddButtonProps {
  addWord: () => void;
}

export default function AddWordButton({ addWord }: AddButtonProps) {
  return (
    <div className="flex justify-center">
      <Button size="md" onClick={addWord}>
        <div className="flex leading-none gap-4 justify-center">
          <LuCirclePlus />
          <span>단어 추가</span>
        </div>
      </Button>
    </div>
  );
}
