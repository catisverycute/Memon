import { useState, type JSX } from 'react';
import WordList from '../components/word-list/WordList';
import WordListHeader from '../components/word-list/WordListHeader';
import SearchWord from '../components/word-list/SearchWord';
import AddWordButton from '../components/word-list/AddWordButton';
import CreateWordModal from '../components/word-list/CreateWordModal';
import { toeicWords } from '../data/mockWords';
import { useLocation } from 'react-router-dom';

export default function VocabularyListPage(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const state = location.state;
  const title = state.title;

  return (
    <div>
      <WordListHeader listName={title} />
      <SearchWord />
      <div className="my-4">총 단어 수 : {toeicWords.length}개</div>
      {toeicWords.map((words) => (
        <WordList word={words.word} meaning={words.meaning} />
      ))}
      <AddWordButton addWord={() => setOpenModal(true)} />
      {openModal && <CreateWordModal />}
    </div>
  );
}
