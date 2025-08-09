import type { JSX } from 'react';
import type { Word } from '../../types/vocabulary';

interface CardProps {
  word: Word;
}

export default function Card({ word }: CardProps): JSX.Element {
  return (
    <div className="flex justify-center items-center shadow-xl border border-amber-200 rounded-lg w-64 h-48 mx-4 bg-amber-50">
      <div className="text-2xl font-semibold ">{word.word}</div>
    </div>
  );
}
