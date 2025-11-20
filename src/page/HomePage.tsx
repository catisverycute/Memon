import { useState, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockVocabulary } from '../data/mockVocabulary';
import Header from '../components/common/Header';
import AddVocabularyButton from '../components/vocabulary-book/AddVocabularyButton';
import CreateVocabularyModal from '../components/vocabulary-book/CreateVocabularyModal';
import VocabularyBook from '../components/vocabulary-book/VocabularyBook';
import type { Vocabulary } from '../types/vocabulary';

export default function HomePage(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => setOpenModal(false);

  const handleClick = (voca: Vocabulary) => {
    navigate(`/vocabulary/${voca.id}/list`, {
      state: voca,
    });
  };

  return (
    <div>
      <Header />
      {mockVocabulary.map((voca) => (
        <div key={voca.id} onClick={() => handleClick(voca)}>
          <VocabularyBook title={voca.title} color={voca.color} />
        </div>
      ))}

      {openModal && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800/30"
          onClick={handleCloseModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CreateVocabularyModal />
          </div>
        </div>
      )}

      <div className="fixed right-5 bottom-10">
        <AddVocabularyButton addButton={() => setOpenModal(true)} />
      </div>
    </div>
  );
}
