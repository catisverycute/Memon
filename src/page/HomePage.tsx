import { useState, type JSX } from 'react';
import VocabularyCard from '../components/vocabulary/VocabularyCard';
import Header from '../components/common/Header';
import AddVocabularyButton from '../components/vocabulary/AddVocabularyButton';
import CreateVocabularyModal from '../components/vocabulary/CreateVocabularyModal';

const wordList = ['TOEIC 단어장', 'JLPT N3 단어장'];

export default function HomePage(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header />
      {wordList.map((word) => (
        <VocabularyCard key={word} title={word} />
      ))}
      {openModal && <CreateVocabularyModal />}
      <AddVocabularyButton addButton={() => setOpenModal(true)} />
    </div>
  );
}
