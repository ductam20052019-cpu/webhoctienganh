import { useState, useEffect } from 'react';

export default function Progress({ user }) {
  const [stats, setStats] = useState({
    wordsLearned: 42,
    quizzesTaken: 8,
    averageScore: 78,
    streakDays: 5,
    totalMinutes: 245,
  });

  const [achievements, setAchievements] = useState([
    { id: 1, name: 'First Steps', description: 'Complete your first lesson', unlocked: true },
    { id: 2, name: 'Quiz Master', description: 'Score 100% on a quiz', unlocked: true },
    { id: 3, name: 'Vocabulary Pro', description: 'Learn 50 words', unlocked: false },
    { id: 4, name: 'Consistency King', description: 'Maintain a 10-day streak', unlocked: false },
    { id: 5, name: 'Quick Learner', description: 'Complete 5 quizzes in one day', unlocked: false },
    { id: 6, name: 'Language Expert', description: 'Complete all advanced lessons', unlocked: false },
  ]);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="card text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
          <p className="text-gray-600">Please login to view your progress and achievements.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title">📊 Your Learning Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{stats.wordsLearned}</div>
          <div className="text-gray-600">Words Learned</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">{stats.quizzesTaken}</div>
          <div className="text-gray-600">Quizzes Taken</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">{stats.averageScore}%</div>
          <div className="text-gray-600">Average Score</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{stats.streakDays}</div>
          <div className="text-gray-600">Day Streak</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">{stats.totalMinutes}</div>
          <div className="text-gray-600">Minutes Studied</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Progress</h3>
        <div className="space-y-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
            <div key={day} className="flex items-center gap-4">
              <span className="w-24 text-gray-700 font-semibold">{day}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all"
                  style={{ width: `${30 + (index * 10)}%` }}
                ></div>
              </div>
              <span className="text-gray-600">{30 + (index * 10)}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🏆 Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`card ${achievement.unlocked ? 'border-2 border-yellow-400' : 'opacity-50'}`}
            >
              <div className="text-3xl mb-2">{achievement.unlocked ? '🏅' : '🔒'}</div>
              <h4 className="font-bold text-gray-800 mb-1">{achievement.name}</h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              {achievement.unlocked && (
                <div className="mt-2 text-xs text-green-600 font-semibold">✓ Unlocked</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Keep it up! 🎯</h3>
        <p>You're doing great! Study 15 more minutes today to maintain your streak.</p>
      </div>
    </div>
  );
}
