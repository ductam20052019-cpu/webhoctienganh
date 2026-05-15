# English Learning Hub - Project Instructions

This is an interactive React + Firebase web application for learning English with vocabulary lessons, quizzes, and progress tracking.

## Project Overview

- **Type**: React + Vite + Firebase Web Application
- **Styling**: Tailwind CSS
- **Target**: English Learning Platform for Teachers and Students
- **Features**: 
  - Vocabulary learning with pronunciation
  - Interactive quizzes with multiple difficulty levels
  - User authentication and progress tracking
  - Achievement system
  - Responsive design

## Getting Started

### Installation
```bash
npm install
```

### Configuration
1. Create a `.env.local` file based on `.env.example`
2. Add your Firebase credentials

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Project Structure

- `src/components/` - React components (Header, Navigation, Vocabulary, Quiz, Progress)
- `src/config/` - Firebase configuration
- `src/index.css` - Tailwind CSS setup
- `public/` - Static assets

## Key Features

1. **Vocabulary Module**: Browse and learn English words with definitions and examples
2. **Quiz System**: Test knowledge with interactive quizzes at different levels
3. **Progress Dashboard**: Track learning progress, streaks, and achievements
4. **User Authentication**: Simple login/sign-up system
5. **Responsive Design**: Works seamlessly on all devices

## Firebase Setup

For the app to work fully, configure Firebase with:
- Authentication (Email/Password)
- Firestore Database (for storing user progress)
- Storage (for media files)

## Customization

- **Add Vocabulary**: Edit `vocabularyData` array in `src/components/Vocabulary.jsx`
- **Add Quizzes**: Edit `quizzesData` array in `src/components/Quiz.jsx`
- **Styling**: Modify Tailwind config in `tailwind.config.js`

## Environment Variables

Required environment variables in `.env.local`:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- Firebase Hosting
- Any static hosting service

## Next Steps

1. Configure Firebase credentials in `.env.local`
2. Run `npm run dev` to start development server
3. Open browser and test all features
4. Customize vocabulary and quizzes as needed
5. Deploy when ready

---
**Created for English language learning - Interactive platform for students and teachers**
