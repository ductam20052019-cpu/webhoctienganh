import { useState } from 'react';

const quizzesData = [
  {
    id: 1,
    title: 'Beginner Vocabulary Quiz',
    difficulty: 'Beginner',
    questions: [
      {
        id: 1,
        question: 'What is the opposite of "hot"?',
        options: ['Cold', 'Warm', 'Sunny', 'Bright'],
        correctAnswer: 'Cold',
        explanation: 'Cold is the opposite of hot.'
      },
      {
        id: 2,
        question: 'Complete the sentence: "She ___ a doctor."',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'is',
        explanation: 'Use "is" with third person singular (she).'
      },
      {
        id: 3,
        question: 'Which word means "very big"?',
        options: ['Small', 'Tiny', 'Huge', 'Little'],
        correctAnswer: 'Huge',
        explanation: '"Huge" means very big or very large.'
      },
    ]
  },
  {
    id: 2,
    title: 'Intermediate Grammar Quiz',
    difficulty: 'Intermediate',
    questions: [
      {
        id: 1,
        question: 'Which sentence is correct?',
        options: [
          'He have went to the store',
          'He has gone to the store',
          'He has go to the store',
          'He have go to the store'
        ],
        correctAnswer: 'He has gone to the store',
        explanation: 'Use "has gone" (present perfect) for this context.'
      },
      {
        id: 2,
        question: 'Choose the correct form: "If I ___ you were coming, I would have prepared dinner."',
        options: ['know', 'knew', 'had known', 'would know'],
        correctAnswer: 'had known',
        explanation: 'Use past perfect "had known" in conditional sentences.'
      },
    ]
  },
];

export default function Quiz() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const handleAnswerClick = (option) => {
    if (!answered) {
      setSelectedAnswer(option);
      if (option === selectedQuiz.questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setAnswered(true);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  if (!selectedQuiz) {
    return (
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">🎯 Interactive Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzesData.map((quiz) => (
            <div key={quiz.id} className="card">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.questions.length} questions</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {quiz.difficulty}
              </span>
              <button
                onClick={() => handleStartQuiz(quiz)}
                className="btn-primary w-full"
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Complete! 🎉</h2>
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {score}/{selectedQuiz.questions.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">
            You got {Math.round((score / selectedQuiz.questions.length) * 100)}% correct!
          </p>
          <button
            onClick={() => setSelectedQuiz(null)}
            className="btn-primary"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const question = selectedQuiz.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600">
              Question {currentQuestion + 1}/{selectedQuiz.questions.length}
            </h2>
            <div className="text-sm text-gray-600">Score: {score}</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h3>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={answered}
              className={`w-full p-4 text-left rounded-lg font-semibold transition-all ${
                selectedAnswer === option
                  ? option === question.correctAnswer
                    ? 'bg-green-100 border-2 border-green-500 text-green-800'
                    : 'bg-red-100 border-2 border-red-500 text-red-800'
                  : 'bg-gray-100 border-2 border-gray-300 text-gray-800 hover:border-blue-400'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <div className={`p-4 rounded-lg mb-6 ${
            selectedAnswer === question.correctAnswer
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className="font-semibold mb-2">
              {selectedAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        {answered && (
          <button
            onClick={handleNext}
            className="btn-primary w-full"
          >
            {currentQuestion === selectedQuiz.questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
