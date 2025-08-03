import { useState, type JSX } from 'react';
import DeleteConfirmModal from './DeleteCofirmModal';

interface VocabularyCardProps {
  title: string;
  color: string;
}

export default function VocabularyCard({
  title,
  color,
}: VocabularyCardProps): JSX.Element {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPinButton, setShowPinButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [touchX, setTouchX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = e.touches[0].clientX - touchX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    if (translateX < -50) {
      setShowDeleteButton(true);
      setShowPinButton(false);
    } else if (translateX > 50) {
      setShowDeleteButton(false);
      setShowPinButton(true);
    } else {
      setShowDeleteButton(false);
      setShowPinButton(false);
    }
    setTranslateX(0);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('삭제 클릭');
    setShowDeleteModal(true);
  };

  return (
    <div className="flex flex-col justify-center my-8">
      <div
        className={`flex justify-between ${color} w-72 rounded-lg`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className={`bg-blue-300 w-20 rounded-l-lg ${showPinButton ? 'block' : 'hidden'}`}
        >
          pin
        </button>

        <div className="p-6 w-full">{title}</div>

        <button
          className={`bg-red-400 w-20 rounded-r-lg ${
            showDeleteButton ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleDeleteClick}
        >
          삭제
        </button>

        {showDeleteModal && (
          <DeleteConfirmModal
            onCancel={() => setShowDeleteModal(false)}
            vocabularyName={title}
          />
        )}
      </div>
    </div>
  );
}
