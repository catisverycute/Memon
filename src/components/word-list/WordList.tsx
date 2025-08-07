import type { JSX } from 'react';

export default function WordList(): JSX.Element {
  return (
    <div className="my-5">
      <div>150 글자</div>
      <div className="flex gap-2 border p-2">
        <div> border</div>
        <div>n. 경계</div>
      </div>
      <div className="border my-2 p-2">
        <div> border</div>
        <div>n. 경계</div>
      </div>
    </div>
  );
}
