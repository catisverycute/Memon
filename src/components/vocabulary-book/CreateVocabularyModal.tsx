import { type JSX } from 'react';
import ColorPicker from './ColorPicker';

export default function CreateVocabularyBookModal(): JSX.Element {
  return (
    <div className="relative p-5 bg-white border rounded-t-lg">
      <button className="absolute right-0 mr-5">체크</button>
      <div className="text-xl text-center">새 단어장 만들기</div>
      <input
        className="my-4 w-full px-4 py-2"
        placeholder="단어장 이름"
        autoFocus
      />
      <div className="px-4 py-2 ">색상</div>
      <ColorPicker />
    </div>
  );
}
