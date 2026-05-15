export default function Introduction() {
  const features = [
    {
      icon: '🎯',
      title: 'Interactive Learning',
      description: 'Engage with flashcards, quizzes, and vocabulary exercises designed for effective learning.'
    },
    {
      icon: '📚',
      title: 'Comprehensive Content',
      description: 'Access a wide range of articles, lessons, and resources covering various English topics.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed statistics and achievement badges.'
    },
    {
      icon: '👥',
      title: 'Personalized Experience',
      description: 'Create your account to save progress and customize your learning path.'
    },
    {
      icon: '🎨',
      title: 'Modern Interface',
      description: 'Enjoy a beautiful, responsive design that works seamlessly on all devices.'
    },
    {
      icon: '🌟',
      title: 'Expert Content',
      description: 'Learn from carefully crafted materials inspired by leading English education platforms.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Vocabulary Words' },
    { number: '50+', label: 'Interactive Quizzes' },
    { number: '100+', label: 'Articles & Lessons' },
    { number: '24/7', label: 'Access Anytime' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">English Learning Hub</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your comprehensive platform for mastering English language skills.
          Designed specifically for Vietnamese students learning English with interactive tools,
          engaging content, and personalized learning experiences.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-primary text-lg px-8 py-3">Start Learning Now</button>
          <button className="btn-secondary text-lg px-8 py-3">Explore Features</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-semibold">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="section-title text-center">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We believe that learning English should be engaging, accessible, and effective for every student.
            Our platform combines proven teaching methodologies with modern technology to create an optimal
            learning environment. Whether you're a beginner starting your English journey or an advanced learner
            preparing for important exams, we provide the tools and resources you need to succeed.
          </p>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="mb-16">
        <h2 className="section-title text-center">Our Learning Approach</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive & Engaging</h3>
            <p className="text-gray-600 mb-6">
              We incorporate interactive elements like flashcards, quizzes, and progress tracking
              to make learning more engaging and effective. Research shows that active learning
              leads to better retention and understanding.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Content</h3>
            <p className="text-gray-600 mb-6">
              Our content covers all aspects of English learning: vocabulary, grammar, reading,
              writing, listening, and speaking. Each topic is carefully structured to build
              upon previous knowledge.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Learning</h3>
            <p className="text-gray-600">
              Track your progress, identify strengths and weaknesses, and receive personalized
              recommendations to accelerate your learning journey.
            </p>
          </div>
          <div className="card">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Learning Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Interactive flashcards with spaced repetition</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Comprehensive quiz system with instant feedback</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Detailed progress tracking and analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Extensive article library with expert content</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Mobile-responsive design for learning anywhere</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span>Achievement system to motivate continued learning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your English Journey?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join thousands of students who are improving their English skills with our platform.
        </p>
        <button className="bg-white text-blue-600 font-bold text-lg px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Get Started Today
        </button>
      </section>
    </div>
  );
}
