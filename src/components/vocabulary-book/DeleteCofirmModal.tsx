import { type JSX } from 'react';
import Button from '../common/Button';

interface DeleteCofirmModalProps {
  onConfirm?: () => void;
  onCancel: () => void;
  vocabularyName: string;
}

export default function DeleteConfirmModal({
  onConfirm,
  onCancel,
  vocabularyName,
}: DeleteCofirmModalProps): JSX.Element {
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onCancel();
    console.log('cancel');
  };

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onConfirm?.();
    console.log('confirm');
  };

  return (
    <div className="fixed inset-0 z-50  flex justify-center items-center">
      <div className="bg-[#f4f4f4] rounded-lg p-6 text-center">
        <p className="text-lg mb-6">{vocabularyName}을 삭제하겠습니까?</p>
        <div className="flex justify-center gap-8">
          <Button size="sm" className="bg-btnCancel" onClick={handleCancel}>
            취소
          </Button>
          <Button size="sm" className="bg-btnConfirm" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
