import { useState } from 'react';

const flashcardSets = [
  {
    id: 1,
    name: 'Common Phrases',
    description: 'Essential English phrases for daily use',
    level: 'Beginner',
    cards: [
      { id: 1, front: 'Hello', back: 'Xin chào' },
      { id: 2, front: 'How are you?', back: 'Bạn khỏe không?' },
      { id: 3, front: 'Thank you', back: 'Cảm ơn bạn' },
      { id: 4, front: 'Please', back: 'Vui lòng' },
      { id: 5, front: 'Sorry', back: 'Xin lỗi' },
      { id: 6, front: 'Goodbye', back: 'Tạm biệt' },
    ]
  },
  {
    id: 2,
    name: 'Business English',
    description: 'Professional vocabulary for workplace',
    level: 'Intermediate',
    cards: [
      { id: 1, front: 'Meeting', back: 'Cuộc họp' },
      { id: 2, front: 'Deadline', back: 'Hạn chót' },
      { id: 3, front: 'Presentation', back: 'Thuyết trình' },
      { id: 4, front: 'Project', back: 'Dự án' },
      { id: 5, front: 'Budget', back: 'Ngân sách' },
    ]
  },
  {
    id: 3,
    name: 'Academic Words',
    description: 'Important vocabulary for academic writing',
    level: 'Advanced',
    cards: [
      { id: 1, front: 'Hypothesis', back: 'Giả thuyết' },
      { id: 2, front: 'Methodology', back: 'Phương pháp luận' },
      { id: 3, front: 'Conclusion', back: 'Kết luận' },
      { id: 4, front: 'Analyze', back: 'Phân tích' },
    ]
  }
];

export default function Flashcards() {
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learned, setLearned] = useState([]);

  if (!selectedSet) {
    return (
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">📇 Flashcard Sets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcardSets.map((set) => (
            <div key={set.id} className="card cursor-pointer transform hover:scale-105" onClick={() => {
              setSelectedSet(set);
              setCurrentCard(0);
              setIsFlipped(false);
              setLearned([]);
            }}>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{set.name}</h3>
              <p className="text-gray-600 mb-4">{set.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  set.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  set.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {set.level}
                </span>
                <span className="text-gray-600 font-semibold">{set.cards.length} cards</span>
              </div>
              <button className="btn-primary w-full mt-4">Start Learning</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const card = selectedSet.cards[currentCard];
  const progress = ((currentCard + 1) / selectedSet.cards.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => setSelectedSet(null)}
          className="text-blue-600 hover:text-blue-800 font-semibold mb-4"
        >
          ← Back to Sets
        </button>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedSet.name}</h2>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Card {currentCard + 1} of {selectedSet.cards.length}</span>
          <span className="text-green-600 font-semibold">{learned.length} learned</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div
        className="card h-64 flex flex-col items-center justify-center cursor-pointer transform transition-all hover:shadow-2xl mb-6"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transitionDuration: '0.6s'
        }}
      >
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">{isFlipped ? 'Answer' : 'Question'}</p>
          <p className="text-4xl font-bold text-blue-600">
            {isFlipped ? card.back : card.front}
          </p>
          <p className="text-gray-400 mt-4">Click to flip</p>
        </div>
      </div>

      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => {
            if (currentCard > 0) {
              setCurrentCard(currentCard - 1);
              setIsFlipped(false);
            }
          }}
          disabled={currentCard === 0}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() => {
            if (!learned.includes(currentCard)) {
              setLearned([...learned, currentCard]);
            }
            if (currentCard < selectedSet.cards.length - 1) {
              setCurrentCard(currentCard + 1);
              setIsFlipped(false);
            }
          }}
          className="btn-secondary px-8"
        >
          {currentCard === selectedSet.cards.length - 1 ? 'Finish' : 'Mark as Learned & Next'}
        </button>

        <button
          onClick={() => {
            if (currentCard < selectedSet.cards.length - 1) {
              setCurrentCard(currentCard + 1);
              setIsFlipped(false);
            }
          }}
          disabled={currentCard === selectedSet.cards.length - 1}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold disabled:opacity-50"
        >
          Skip
        </button>
      </div>

      {currentCard === selectedSet.cards.length - 1 && learned.length === selectedSet.cards.length && (
        <div className="card bg-green-50 border-2 border-green-500 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Excellent!</h3>
          <p className="text-green-700">You've learned all cards in this set!</p>
          <button
            onClick={() => {
              setSelectedSet(null);
              setCurrentCard(0);
              setIsFlipped(false);
              setLearned([]);
            }}
            className="btn-primary mt-4"
          >
            Choose Another Set
          </button>
        </div>
      )}
    </div>
  );
}
