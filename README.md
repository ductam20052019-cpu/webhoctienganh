# 🌍 English Learning Hub

A modern, interactive web application for learning English with vocabulary lessons, flashcards, quizzes, articles, and progress tracking.

## 🎯 Features

- **ℹ️ Introduction**: Learn about our mission and teaching approach
- **📚 Vocabulary Builder**: Learn new words with pronunciation, meanings, and examples
- **📇 Interactive Flashcards**: Practice vocabulary with flip cards and spaced repetition
- **🎯 Quiz System**: Test your knowledge with multiple-choice quizzes at different difficulty levels
- **📖 Article Archive**: Read expert articles on English learning tips and techniques
- **📊 Progress Tracking**: Monitor your learning progress with detailed statistics and achievements
- **👤 User Profiles**: Create an account to track your personal progress
- **🏆 Achievement System**: Unlock badges and achievements as you progress
- **🎨 Beautiful UI**: Modern, responsive design with Tailwind CSS

## 🛠️ Technologies

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Hooks

## 📋 Prerequisites

- Node.js 16.x or higher
- npm or yarn
- Firebase account (for database and authentication)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd english-learning-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Firebase
- Create a Firebase project at [https://firebase.google.com](https://firebase.google.com)
- Create a `.env.local` file in the project root (copy from `.env.example`)
- Add your Firebase configuration credentials

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header with login
│   ├── Navigation.jsx  # Main navigation bar
│   ├── Introduction.jsx # About page with features
│   ├── Vocabulary.jsx  # Vocabulary learning component
│   ├── Flashcards.jsx  # Interactive flashcard system
│   ├── Quiz.jsx        # Quiz component
│   ├── Articles.jsx    # Article archive component
│   └── Progress.jsx    # Progress tracking component
├── config/
│   └── firebase.js     # Firebase configuration
├── App.jsx             # Main app component
├── index.css           # Global styles + Tailwind
└── main.jsx            # Entry point
```

## 🎮 How to Use

### Learning with Flashcards
1. Navigate to the "Flashcards" section
2. Choose a flashcard set based on difficulty level
3. Click cards to flip between questions and answers
4. Mark cards as learned and track your progress

### Building Vocabulary
1. Go to the "Vocabulary" section
2. Browse and search for words
3. Click on a word to see detailed information
4. Filter by difficulty level

### Taking Quizzes
1. Visit the "Quiz" section
2. Choose a quiz based on difficulty
3. Answer the questions and see immediate feedback
4. View your score at the end

### Reading Articles
1. Access the "Articles" section
2. Browse articles by category or search by keywords
3. Read expert content on English learning
4. Use tags to find related topics

### Tracking Progress
1. Log in to your account
2. Visit the "Progress" section
3. View your learning statistics and achievements
4. See your weekly activity graph

## 🔒 Authentication

- Simple local authentication (for demonstration)
- Email and password registration
- User data stored in localStorage
- Ready to integrate with Firebase Authentication

## 🚀 Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🎨 Customization

### Add More Flashcard Sets
Edit `src/components/Flashcards.jsx` and add sets to the `flashcardSets` array:

```javascript
const flashcardSets = [
  {
    id: 4,
    name: 'Your Set Name',
    description: 'Description of the set',
    level: 'Beginner|Intermediate|Advanced',
    cards: [
      { id: 1, front: 'English', back: 'Tiếng Việt' },
      // ...
    ]
  },
  // ...
];
```

### Add More Vocabulary
Edit `src/components/Vocabulary.jsx` and add words to the `vocabularyData` array:

```javascript
const vocabularyData = [
  {
    id: 7,
    word: 'Your Word',
    pronunciation: 'pronunciation',
    meaning: 'Definition',
    example: 'Example sentence',
    level: 'Beginner|Intermediate|Advanced',
    category: 'Category'
  },
  // ...
];
```

### Add More Quizzes
Edit `src/components/Quiz.jsx` and add quizzes to the `quizzesData` array:

```javascript
const quizzesData = [
  {
    id: 3,
    title: 'Advanced Grammar',
    difficulty: 'Advanced',
    questions: [
      {
        id: 1,
        question: 'Question?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctAnswer: 'Option 1',
        explanation: 'Explanation here'
      },
      // ...
    ]
  },
  // ...
];
```

### Add More Articles
Edit `src/components/Articles.jsx` and add articles to the `articles` array:

```javascript
const articles = [
  {
    id: 5,
    title: 'Your Article Title',
    excerpt: 'Brief description...',
    content: 'Full article content...',
    author: 'Author Name',
    date: '2024-01-01',
    category: 'Category',
    readTime: '5 min read',
    tags: ['Tag1', 'Tag2']
  },
  // ...
];
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💼 Created For

This application was created to help English teachers provide interactive learning experiences for their students, inspired by leading Vietnamese English education platforms.

## 📧 Support

For questions or support, please reach out to the development team.

---

**Happy Learning! 🎓**
