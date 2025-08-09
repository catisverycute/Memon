import type { JSX } from 'react';

export default function CreateWordModal(): JSX.Element {
  return (
    <div className="flex flex-col bg-amber-300 px-4 py-6">
      <label htmlFor="wordName">단어</label>
      <input id="wordName" type="text" placeholder="hi" />
      <label htmlFor="wordMeaning">뜻</label>
      <input id="wordMeaning" type="text" placeholder="hi" />
      <div className="flex justify-center items-center gap-4 mt-4">
        <button className="border px-4 py-2">취소</button>
        <button className="border px-4 py-2">확인</button>
      </div>
    </div>
  );
}
