import { useState, type JSX } from 'react';
import VocabularyCard from '../components/vocabulary/VocabularyCard';
import Header from '../components/common/Header';
import AddVocabularyButton from '../components/vocabulary/AddVocabularyButton';
import CreateVocabularyModal from '../components/vocabulary/CreateVocabularyModal';
import { mockVocabulary } from '../data/mockVocabulary';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Header />
      {mockVocabulary.map((voca) => (
        <Link to={`/learn/${voca.id}`}>
          <VocabularyCard key={voca.id} title={voca.title} color={voca.color} />
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
