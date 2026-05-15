export default function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: '🏠 Home', icon: '🏠' },
    { id: 'introduction', label: 'ℹ️ Introduction', icon: 'ℹ️' },
    { id: 'vocabulary', label: '📚 Vocabulary', icon: '📚' },
    { id: 'flashcards', label: '📇 Flashcards', icon: '📇' },
    { id: 'quiz', label: '🎯 Quiz', icon: '🎯' },
    { id: 'articles', label: '📖 Articles', icon: '📖' },
    { id: 'progress', label: '📊 Progress', icon: '📊' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-3 font-semibold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                currentPage === item.id
                  ? 'text-blue-600 border-b-4 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
