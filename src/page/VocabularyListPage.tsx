import type { JSX } from 'react';
import WordList from '../components/word-list/WordList';
import WordListHeader from '../components/word-list/WordListHeader';
import SearchWord from '../components/word-list/SearchWord';
import AddWordButton from '../components/word-list/AddWordButton';
import CreateWordModal from '../components/word-list/CreateWordModal';

export default function VocabularyListPage(): JSX.Element {
  return (
    <div>
      <WordListHeader listName="HI" />
      <SearchWord />
      <WordList />
      <AddWordButton />
      <CreateWordModal />
    </div>
  );
}
