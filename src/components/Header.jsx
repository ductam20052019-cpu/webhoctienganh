import { useState } from 'react';

export default function Header({ user, setUser, setCurrentPage }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '', name: '' });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    if (loginForm.email && loginForm.password) {
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email: loginForm.email,
        name: loginForm.name || loginForm.email.split('@')[0],
        joinDate: new Date().toLocaleDateString(),
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      setShowLoginModal(false);
      setLoginForm({ email: '', password: '', name: '' });
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setCurrentPage('home');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>
          🌍 English Hub
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm">Welcome, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {isSignUp ? 'Create Account' : 'Login'}
            </h2>
            
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                value={loginForm.name}
                onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            )}
            
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            
            <input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            
            <button
              onClick={handleLogin}
              className="btn-primary w-full mb-2"
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
            
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 text-center w-full mb-2 hover:underline"
            >
              {isSignUp ? 'Already have an account?' : 'Create new account'}
            </button>
            
            <button
              onClick={() => setShowLoginModal(false)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
