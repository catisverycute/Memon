import { type JSX } from 'react';

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
  return (
    <div className="fixed inset-0 z-50  flex justify-center items-center">
      <div className="bg-yellow-200 rounded-lg p-6 text-center">
        <p className="text-lg mb-6">{vocabularyName}을 삭제하겠습니까?</p>
        <div className="flex justify-center gap-8">
          <button
            className="w-20 h-10 rounded-md bg-red-400"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            className="w-20 h-10 rounded-md bg-green-400"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
