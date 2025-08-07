import type { JSX } from 'react';

export default function CreateWordModal(): JSX.Element {
  return (
    <div className="flex flex-col">
      <label htmlFor="wordName">hello</label>
      <input id="wordName" type="text" placeholder="hi" />
      <label htmlFor="wordMeaning">hello</label>
      <input id="wordMeaning" type="text" placeholder="hi" />
    </div>
  );
}
