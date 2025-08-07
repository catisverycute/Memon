import { useState, type JSX } from 'react';
import { Link } from 'react-router-dom';
import { mockVocabulary } from '../data/mockVocabulary';
import Header from '../components/common/Header';
import AddVocabularyButton from '../components/vocabulary-book/AddVocabularyButton';
import CreateVocabularyModal from '../components/vocabulary-book/CreateVocabularyModal';
import VocabularyBook from '../components/vocabulary-book/VocabularyBook';

export default function HomePage(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Header />
      {mockVocabulary.map((voca) => (
        <Link to={`/vocabulary/${voca.id}/list`}>
          <VocabularyBook key={voca.id} title={voca.title} color={voca.color} />
        </Link>
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

      <AddVocabularyButton addButton={() => setOpenModal(true)} />
    </div>
  );
}
