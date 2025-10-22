import { useState, type JSX } from 'react';
import DeleteConfirmModal from './DeleteCofirmModal';
import { TiPin } from 'react-icons/ti';
import Button from '../common/Button';

interface VocabularyBookProps {
  title: string;
  color: string;
}

export default function VocabularyBook({
  title,
  color,
}: VocabularyBookProps): JSX.Element {
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
    <div className="border">
      <div className="flex flex-col justify-center my-8">
        <div
          className={`flex justify-between ${color} w-full rounded-lg`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Button
            className={`bg-blue-300 w-20 h-20 p-2 border ${showPinButton ? 'block' : 'hidden'}`}
          >
            <TiPin size={32} />
          </Button>
          <div className="p-6 w-full">{title}</div>

          {/* <button
                className={`bg-red-400 w-20 rounded-r-lg ${
                  showDeleteButton ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleDeleteClick}
              >
                삭제
              </button> */}
          <Button
            className={`bg-red-400 w-20 h-20 rounded-r-lg ${
              showDeleteButton ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleDeleteClick}
          >
            삭제
          </Button>

          {showDeleteModal && (
            <DeleteConfirmModal
              onCancel={() => setShowDeleteModal(false)}
              vocabularyName={title}
            />
          )}
        </div>
      </div>
    </div>
  );
}
