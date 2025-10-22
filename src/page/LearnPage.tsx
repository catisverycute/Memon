import { useState, type JSX } from 'react';
import Card from '../components/card/Card';
import { toeicWords } from '../data/mockWords';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/common/Header';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export default function LearnPage(): JSX.Element {
  const [currentWord, setCurrentWord] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleCardStart = (e: React.TouchEvent<HTMLElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleCardMove = (e: React.TouchEvent<HTMLElement>) => {
    setEndX(e.touches[0].clientX);
  };

  const handleCardEnd = () => {
    const diff = endX - startX;

    if (diff < -50) {
      goNext();
    } else if (diff > 50) {
      goPrev();
    }

    setStartX(0);
    setEndX(0);
  };

  const goPrev = () => {
    setCurrentWord((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goNext = () => {
    setCurrentWord((prev) => (prev < toeicWords.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      <Header />
      <div
        className="flex-col justify-center"
        onTouchStart={handleCardStart}
        onTouchMove={handleCardMove}
        onTouchEnd={handleCardEnd}
      >
        <div className="flex justify-center items-center mt-10 mb-5 font-semibold text-lg">
          {currentWord + 1}/{toeicWords.length}
        </div>
        <div className="flex justify-center items-center">
          <button onClick={goPrev}>
            <IoChevronBack />
          </button>
          <Card word={toeicWords[currentWord]} />
          <button onClick={goNext}>
            <IoChevronForward />
          </button>
        </div>
        <div>
          <button className="bg-dol">학습 필요</button>
          <button>학습 완료</button>
        </div>
      </div>
    </div>
  );
}
