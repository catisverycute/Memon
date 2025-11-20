import type { JSX } from 'react';
import Button from '../common/Button';

export default function CreateWordModal(): JSX.Element {
  return (
    <div className="flex flex-col bg-amber-300 px-4 py-6">
      <label htmlFor="wordName">단어</label>
      <input id="wordName" type="text" placeholder="hi" />
      <label htmlFor="wordMeaning">뜻</label>
      <input id="wordMeaning" type="text" placeholder="hi" />
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button variant="cancel" className="rounded-md px-8 py-3">
          취소
        </Button>
        <Button variant="confirm" className="rounded-md px-8 py-3">
          확인
        </Button>
      </div>
    </div>
  );
}
