import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: '10 Essential English Phrases for Business Meetings',
    excerpt: 'Master these key phrases to communicate effectively in professional settings and impress your colleagues.',
    content: `Business meetings require specific vocabulary and phrases that differ from everyday conversation. Here are 10 essential phrases every professional should know:

1. "Let's get started" - Bắt đầu cuộc họp
2. "I'd like to discuss..." - Tôi muốn thảo luận về...
3. "What are your thoughts on this?" - Bạn nghĩ sao về vấn đề này?
4. "I agree with your point" - Tôi đồng ý với ý kiến của bạn
5. "Could you please elaborate?" - Bạn có thể giải thích chi tiết hơn không?
6. "Let's schedule a follow-up meeting" - Hãy lên lịch cuộc họp tiếp theo
7. "I appreciate your input" - Tôi đánh giá cao ý kiến đóng góp của bạn
8. "That's a valid point" - Đó là một ý kiến hợp lệ
9. "Let's move forward with this" - Hãy tiến hành với vấn đề này
10. "Thank you for your time" - Cảm ơn bạn đã dành thời gian

Practice these phrases regularly to build confidence in business communication.`,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Business English',
    readTime: '5 min read',
    tags: ['Business', 'Communication', 'Professional']
  },
  {
    id: 2,
    title: 'The Power of Context Clues in Reading Comprehension',
    excerpt: 'Learn how to use context clues effectively to understand unfamiliar words and improve your reading skills.',
    content: `Context clues are hints found within a sentence, paragraph, or passage that help readers understand the meanings of unfamiliar words. Here are the main types of context clues:

**Definition Context Clues**
The meaning is directly stated in the sentence.
Example: "The archaeologist studied petroglyphs, which are ancient drawings carved into rocks."

**Synonym Context Clues**
A familiar word with similar meaning appears nearby.
Example: "The teacher was ecstatic, or extremely happy, about her students' test scores."

**Antonym Context Clues**
A word with opposite meaning provides contrast.
Example: "Unlike the timid mouse, the brave lion roared loudly."

**Example Context Clues**
Examples help explain the meaning of the unknown word.
Example: "Omnivores, such as bears and humans, eat both plants and animals."

**Inference Context Clues**
You must infer the meaning from the surrounding context.
Example: "The marathon runner was exhausted after running 26 miles without stopping."

Practice identifying these context clues while reading to significantly improve your vocabulary and comprehension skills.`,
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    category: 'Reading Skills',
    readTime: '7 min read',
    tags: ['Reading', 'Vocabulary', 'Comprehension']
  },
  {
    id: 3,
    title: 'Common English Idioms and Their Meanings',
    excerpt: 'Discover popular English idioms that native speakers use every day and learn how to incorporate them into your conversations.',
    content: `Idioms are expressions that have meanings different from their literal interpretations. Here are some commonly used English idioms:

**"Break a leg"**
Meaning: Good luck (especially before a performance)
Example: "Break a leg in your presentation tomorrow!"

**"Hit the books"**
Meaning: Study hard
Example: "I need to hit the books if I want to pass the exam."

**"Piece of cake"**
Meaning: Very easy
Example: "The math problem was a piece of cake for Sarah."

**"Under the weather"**
Meaning: Feeling ill
Example: "I'm feeling a bit under the weather today."

**"Bite the bullet"**
Meaning: Face a difficult situation courageously
Example: "I had to bite the bullet and tell my boss about the mistake."

**"Spill the beans"**
Meaning: Reveal a secret
Example: "Don't spill the beans about the surprise party!"

**"Cost an arm and a leg"**
Meaning: Very expensive
Example: "That new car costs an arm and a leg."

**"Kick the bucket"**
Meaning: Die (informal)
Example: "My old computer finally kicked the bucket."

Practice using these idioms in appropriate contexts to sound more natural in English conversations.`,
    author: 'Emma Thompson',
    date: '2024-01-05',
    category: 'Idioms & Expressions',
    readTime: '6 min read',
    tags: ['Idioms', 'Speaking', 'Culture']
  },
  {
    id: 4,
    title: 'Effective Study Techniques for Language Learning',
    excerpt: 'Research-based methods to accelerate your English learning and retain information more effectively.',
    content: `Scientific research has identified several effective techniques for language learning. Here are proven methods to enhance your English studies:

**Spaced Repetition**
Review material at increasing intervals to move information from short-term to long-term memory.
- Use flashcards with spaced repetition algorithms
- Review vocabulary weekly, then monthly, then quarterly

**Active Recall**
Actively retrieve information from memory rather than passively reviewing.
- Test yourself before looking at answers
- Use the "cover and recall" method when reading

**Interleaved Practice**
Mix different topics or skills during study sessions instead of focusing on one topic.
- Alternate between vocabulary, grammar, and reading practice
- Switch between different verb tenses or vocabulary categories

**Contextual Learning**
Learn words and phrases in meaningful contexts rather than isolation.
- Read authentic materials (news, books, articles)
- Watch movies and TV shows with subtitles
- Engage in conversations with native speakers

**The Pomodoro Technique**
Study in focused 25-minute intervals with 5-minute breaks.
- Maintain concentration during work periods
- Use breaks for physical activity or relaxation

**Sleep and Memory Consolidation**
Get adequate sleep to allow your brain to process and store new information.
- Study before bedtime for better retention
- Avoid cramming late at night

Combine these techniques with consistent daily practice for optimal results.`,
    author: 'Prof. David Williams',
    date: '2023-12-28',
    category: 'Study Methods',
    readTime: '8 min read',
    tags: ['Study Tips', 'Memory', 'Learning Strategies']
  }
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(articles.map(article => article.category))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedArticle(null)}
          className="text-blue-600 hover:text-blue-800 font-semibold mb-6"
        >
          ← Back to Articles
        </button>

        <article className="card">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <span className="font-semibold">{selectedArticle.author}</span>
              <span>•</span>
              <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {selectedArticle.category}
              </span>
            </div>
            <p className="text-xl text-gray-700 italic">{selectedArticle.excerpt}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {selectedArticle.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < paragraph.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <footer className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">📚 Article Archive</h2>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="card cursor-pointer transform hover:scale-105"
            onClick={() => setSelectedArticle(article)}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{article.readTime}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
              {article.title}
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{article.author}</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>

            <div className="flex flex-wrap gap-1 mt-3">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No articles found matching your search.</p>
        </div>
      )}
    </div>
  );
}
