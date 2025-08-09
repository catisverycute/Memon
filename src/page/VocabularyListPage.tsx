import { useState, type JSX } from 'react';
import WordList from '../components/word-list/WordList';
import WordListHeader from '../components/word-list/WordListHeader';
import SearchWord from '../components/word-list/SearchWord';
import AddWordButton from '../components/word-list/AddWordButton';
import CreateWordModal from '../components/word-list/CreateWordModal';

export default function VocabularyListPage(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <WordListHeader listName="HI" />
      <SearchWord />
      <WordList />
      <AddWordButton addWord={() => setOpenModal(true)} />
      {openModal && <CreateWordModal />}
    </div>
  );
}
