import { useState } from 'react';

const vocabularyData = [
  {
    id: 1,
    word: 'Serendipity',
    pronunciation: 'ser-uhn-dip-i-tee',
    meaning: 'The occurrence of events by chance in a happy or beneficial way',
    example: 'Meeting my best friend was pure serendipity.',
    level: 'Advanced',
    category: 'Abstract Concepts'
  },
  {
    id: 2,
    word: 'Ephemeral',
    pronunciation: 'uh-fem-er-uhl',
    meaning: 'Lasting for a very short time; transitory',
    example: 'The beauty of cherry blossoms is ephemeral.',
    level: 'Advanced',
    category: 'Descriptive'
  },
  {
    id: 3,
    word: 'Ubiquitous',
    pronunciation: 'yoo-bik-wi-tuhs',
    meaning: 'Present, appearing, or found everywhere',
    example: 'Smartphones have become ubiquitous in modern society.',
    level: 'Intermediate',
    category: 'General'
  },
  {
    id: 4,
    word: 'Eloquent',
    pronunciation: 'el-uh-kwuhnt',
    meaning: 'Fluent, persuasive, and expressive in speaking or writing',
    example: 'The speaker delivered an eloquent speech about peace.',
    level: 'Intermediate',
    category: 'Communication'
  },
  {
    id: 5,
    word: 'Benevolent',
    pronunciation: 'buh-nev-uh-luhnt',
    meaning: 'Kind, generous, and charitable',
    example: 'The benevolent organization helped thousands of families.',
    level: 'Intermediate',
    category: 'Personality'
  },
  {
    id: 6,
    word: 'Resilient',
    pronunciation: 'rih-zil-yuhnt',
    meaning: 'Able to recover quickly from difficulties',
    example: 'After many setbacks, she proved to be resilient.',
    level: 'Intermediate',
    category: 'Personality'
  },
];

export default function Vocabulary() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [filterLevel, setFilterLevel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVocabulary = vocabularyData.filter((item) => {
    const matchesLevel = filterLevel === 'All' || item.level === filterLevel;
    const matchesSearch = item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">📚 Vocabulary Builder</h2>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVocabulary.map((word) => (
            <div
              key={word.id}
              onClick={() => setSelectedWord(word)}
              className="card cursor-pointer transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">{word.word}</h3>
              <p className="text-sm text-gray-500 mb-2">/{word.pronunciation}/</p>
              <p className="text-sm text-gray-700 mb-3">{word.meaning}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                word.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                word.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {word.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">{selectedWord.word}</h2>
            <p className="text-gray-500 mb-4 italic">/{selectedWord.pronunciation}/</p>
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Meaning:</h3>
              <p className="text-gray-700">{selectedWord.meaning}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Example:</h3>
              <p className="text-gray-700 italic">"{selectedWord.example}"</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Category:</h3>
              <p className="text-gray-700">{selectedWord.category}</p>
            </div>

            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                selectedWord.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                selectedWord.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {selectedWord.level}
              </span>
            </div>

            <button
              onClick={() => setSelectedWord(null)}
              className="btn-primary w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
