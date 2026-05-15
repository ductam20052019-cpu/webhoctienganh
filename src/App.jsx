import { useEffect, useMemo, useState } from 'react';
import heroArt from './assets/hero.png';
import './index.css';

const sessionKey = 'english_class_session_v2';

const demoAccounts = [
  { id: 'admin-001', fullName: 'Nguyễn Lan', role: 'admin', email: 'admin@classroom.vn', password: 'admin123' },
  { id: 'teacher-001', fullName: 'Cô Minh Anh', role: 'teacher', email: 'teacher@classroom.vn', password: 'teacher123' },
  { id: 'student-001', fullName: 'Trần Gia Huy', role: 'student', email: 'student@classroom.vn', password: 'student123' },
];

const roleLabelMap = {
  admin: 'Quản trị viên',
  teacher: 'Giáo viên',
  student: 'Học sinh',
};

const basePages = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'archive', label: 'Tài liệu' },
];

const achievements = [
  { value: '1,250+', label: 'học viên đang học' },
  { value: '92%', label: 'hoàn thành mục tiêu' },
  { value: '180+', label: 'bài học và đề luyện' },
  { value: '12 năm', label: 'kinh nghiệm giảng dạy' },
];

const courses = [
  {
    title: 'Mất gốc lấy lại nền',
    level: 'A0 - A2',
    time: '8 tuần',
    desc: 'Học lại phát âm, từ vựng nền và ngữ pháp cốt lõi bằng lộ trình ngắn gọn, dễ theo dõi.',
    points: ['Kiểm tra đầu vào', 'Bài tập hằng buổi', 'Báo cáo cho phụ huynh'],
  },
  {
    title: 'THCS tăng điểm',
    level: 'Lớp 6 - 9',
    time: '12 tuần',
    desc: 'Bám sát chương trình trên lớp, luyện đọc hiểu, viết câu và các dạng bài kiểm tra thường gặp.',
    points: ['Ôn từ vựng theo unit', 'Mini test mỗi tuần', 'Sửa lỗi cá nhân'],
  },
  {
    title: 'THPT Exam Focus',
    level: 'Lớp 10 - 12',
    time: '16 tuần',
    desc: 'Tập trung chiến thuật làm đề, cấu trúc ngữ pháp nâng cao và tăng tốc điểm số trước kỳ thi.',
    points: ['Luyện đề theo chuyên đề', 'Chấm bài viết', 'Mock test định kỳ'],
  },
];

const methodSteps = [
  ['01', 'Chẩn đoán rõ đầu vào', 'Làm bài test ngắn để xác định điểm mạnh, điểm yếu và mục tiêu điểm số.'],
  ['02', 'Học theo lộ trình', 'Mỗi buổi học có mục tiêu cụ thể, tài liệu riêng và bài luyện sau giờ học.'],
  ['03', 'Luyện tập có phản hồi', 'Giáo viên sửa lỗi phát âm, ngữ pháp và cách diễn đạt ngay trong quá trình học.'],
  ['04', 'Đo tiến bộ hằng tuần', 'Bảng tiến độ giúp học sinh và phụ huynh biết cần ôn lại phần nào.'],
];

const reviews = [
  {
    name: 'Phụ huynh lớp 8',
    text: 'Con mình từ ngại học tiếng Anh sang tự tin làm bài trên lớp. Báo cáo hằng tuần rất dễ theo dõi.',
  },
  {
    name: 'Học sinh lớp 11',
    text: 'Phần flashcards và đề luyện giúp em nhớ cấu trúc nhanh hơn, không bị rối trước bài kiểm tra.',
  },
  {
    name: 'Phụ huynh lớp 6',
    text: 'Lớp học gọn, có mục tiêu từng buổi. Con có việc cần làm rõ ràng nên tự giác hơn.',
  },
];

const flashcards = [
  {
    topic: 'Daily Routine',
    front: 'How often do you review vocabulary?',
    back: 'I review vocabulary every evening for at least 20 minutes.',
    note: 'Mẫu trả lời tần suất: always, usually, often, sometimes, rarely.',
  },
  {
    topic: 'School Life',
    front: 'What subject do you enjoy the most?',
    back: 'I enjoy English the most because I can use it to communicate globally.',
    note: 'Dùng cấu trúc: I enjoy ... the most because ...',
  },
  {
    topic: 'Grammar',
    front: 'Choose: She ____ to school by bus every day.',
    back: 'She goes to school by bus every day.',
    note: 'Hiện tại đơn với chủ ngữ ngôi thứ ba số ít thêm -s/-es.',
  },
  {
    topic: 'Communication',
    front: 'How do you politely ask for help?',
    back: 'Could you help me with this exercise, please?',
    note: 'Mẫu lịch sự: Could you ... please?',
  },
];

const articles = [
  {
    title: '6 bước học từ vựng nhớ lâu cho học sinh THCS',
    excerpt: 'Kết hợp sơ đồ từ vựng, mini test và ôn lặp lại ngắt quãng để học nhanh mà không bị quên.',
    level: 'THCS',
    category: 'Từ vựng',
    date: '12/05/2026',
  },
  {
    title: 'Mẹo xử lý phát âm và trọng âm trong đề thi',
    excerpt: 'Nhận diện quy luật trọng âm thường gặp và cách loại trừ đáp án sai trong 30 giây.',
    level: 'THPT',
    category: 'Phát âm',
    date: '08/05/2026',
  },
  {
    title: 'Kế hoạch tự học tiếng Anh 30 ngày cho người mất gốc',
    excerpt: 'Lịch học theo ngày gồm từ vựng nền, mẫu câu giao tiếp và bài tập nghe ngắn.',
    level: 'Mất gốc',
    category: 'Lộ trình',
    date: '02/05/2026',
  },
  {
    title: 'Câu điều kiện từ cơ bản đến nâng cao',
    excerpt: 'Tổng hợp 4 dạng câu điều kiện cùng ví dụ dễ hiểu và bài tập thực hành.',
    level: 'THPT',
    category: 'Ngữ pháp',
    date: '27/04/2026',
  },
  {
    title: 'Checklist ôn thi giữa kỳ môn tiếng Anh lớp 8',
    excerpt: 'Danh sách chủ điểm cần hoàn thành trước kỳ thi để tránh bỏ sót kiến thức quan trọng.',
    level: 'THCS',
    category: 'Ôn thi',
    date: '22/04/2026',
  },
  {
    title: '10 chủ đề nói giúp tăng phản xạ giao tiếp',
    excerpt: 'Bộ câu hỏi theo tình huống thường gặp để luyện nói tại lớp và tự luyện tại nhà.',
    level: 'Giao tiếp',
    category: 'Kỹ năng',
    date: '18/04/2026',
  },
];

const workspaceData = {
  admin: {
    title: 'Bảng điều khiển quản trị',
    desc: 'Quản lý tài khoản, nội dung và tình trạng lớp học trong một màn hình.',
    stats: [
      ['1,250', 'Tài khoản'],
      ['12', 'Bài chờ duyệt'],
      ['18', 'Lớp đang mở'],
    ],
    tasks: ['Duyệt tài liệu mới', 'Khóa hoặc mở tài khoản', 'Theo dõi số liệu hệ thống', 'Phân quyền giáo viên'],
  },
  teacher: {
    title: 'Không gian giáo viên',
    desc: 'Theo dõi lớp, giao bài tập và chuẩn bị học liệu cho từng nhóm học sinh.',
    stats: [
      ['86', 'Học sinh'],
      ['24', 'Bài đã giao'],
      ['180', 'Flashcards'],
    ],
    tasks: ['Tạo bài học mới', 'Giao bài tập về nhà', 'Chấm bài viết', 'Xem tiến độ học sinh'],
  },
  student: {
    title: 'Tiến độ học tập cá nhân',
    desc: 'Ôn flashcards, đọc tài liệu và xem các mục tiêu cần hoàn thành trong tuần.',
    stats: [
      ['72%', 'Hoàn thành tuần'],
      ['48', 'Thẻ đã ôn'],
      ['6', 'Bài nên đọc'],
    ],
    tasks: ['Ôn tập flashcards', 'Làm mini test', 'Đọc tài liệu gợi ý', 'Xem mục tiêu tuần'],
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cardIndex, setCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const [authForm, setAuthForm] = useState({ email: '', password: '' });

  useEffect(() => {
    const savedSession = localStorage.getItem(sessionKey);
    if (!savedSession) return;

    try {
      const parsed = JSON.parse(savedSession);
      if (parsed?.id && parsed?.role) setUser(parsed);
    } catch {
      localStorage.removeItem(sessionKey);
    }
  }, []);

  const navPages = useMemo(() => {
    if (!user) return basePages;
    return [...basePages, { id: 'workspace', label: 'Khu học tập' }];
  }, [user]);

  const levels = useMemo(() => ['Tất cả', ...new Set(articles.map((article) => article.level))], []);
  const filteredArticles = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();
    return articles.filter((article) => {
      const levelMatch = selectedLevel === 'Tất cả' || selectedLevel === article.level;
      const text = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
      return levelMatch && (!keyword || text.includes(keyword));
    });
  }, [selectedLevel, searchTerm]);

  const currentCard = flashcards[cardIndex];
  const workspace = user ? workspaceData[user.role] : null;

  const openLoginPage = (message = '') => {
    setAuthError(message);
    setCurrentPage('login');
  };

  const goToPage = (pageId) => {
    if ((pageId === 'flashcards' || pageId === 'archive' || pageId === 'workspace') && !user) {
      openLoginPage('Bạn cần đăng nhập để dùng chức năng này.');
      return;
    }
    setAuthError('');
    setCurrentPage(pageId);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = authForm.email.trim().toLowerCase();
    const password = authForm.password.trim();
    const account = demoAccounts.find((item) => item.email === email && item.password === password);

    if (!account) {
      setAuthError('Sai email hoặc mật khẩu. Hãy chọn tài khoản mẫu bên trái để thử nhanh.');
      return;
    }

    const safeUser = {
      id: account.id,
      fullName: account.fullName,
      role: account.role,
      email: account.email,
    };
    setUser(safeUser);
    localStorage.setItem(sessionKey, JSON.stringify(safeUser));
    setAuthForm({ email: '', password: '' });
    setAuthError('');
    setCurrentPage('workspace');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem(sessionKey);
    setCurrentPage('home');
  };

  const fillAccount = (email, password) => {
    setAuthForm({ email, password });
    setAuthError('');
  };

  const moveCard = (direction) => {
    setShowBack(false);
    setCardIndex((prev) => (prev + direction + flashcards.length) % flashcards.length);
  };

  if (currentPage === 'login' && !user) {
    return (
      <div className="site auth-site">
        <header className="simple-header">
          <button className="brand-button" onClick={() => setCurrentPage('home')} type="button">
            <span>MA</span>
            <strong>Minh Anh English</strong>
          </button>
          <button className="btn ghost" onClick={() => setCurrentPage('home')} type="button">
            Về trang chủ
          </button>
        </header>

        <section className="auth-card reveal">
          <div className="auth-copy">
            <p className="eyebrow">Đăng nhập hệ thống</p>
            <h1>Chọn đúng vai trò để vào khu học tập</h1>
            <p>
              Bản demo có sẵn 3 tài khoản mẫu cho học sinh, giáo viên và quản trị viên. Bấm nút bên dưới để điền nhanh.
            </p>
            <div className="demo-row">
              <button onClick={() => fillAccount('student@classroom.vn', 'student123')} type="button">
                Học sinh
              </button>
              <button onClick={() => fillAccount('teacher@classroom.vn', 'teacher123')} type="button">
                Giáo viên
              </button>
              <button onClick={() => fillAccount('admin@classroom.vn', 'admin123')} type="button">
                Admin
              </button>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <label>
              Email
              <input
                type="email"
                value={authForm.email}
                onChange={(event) => setAuthForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="student@classroom.vn"
              />
            </label>
            <label>
              Mật khẩu
              <input
                type="password"
                value={authForm.password}
                onChange={(event) => setAuthForm((prev) => ({ ...prev, password: event.target.value }))}
                placeholder="student123"
              />
            </label>
            {authError && <p className="auth-error">{authError}</p>}
            <button className="btn primary" type="submit">
              Đăng nhập
            </button>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="site">
      <header className="site-header">
        <button className="brand-button" onClick={() => goToPage('home')} type="button">
          <span>MA</span>
          <strong>Minh Anh English</strong>
        </button>

        <nav className="main-nav" aria-label="Điều hướng chính">
          {navPages.map((page) => (
            <button
              key={page.id}
              className={currentPage === page.id ? 'active' : ''}
              onClick={() => goToPage(page.id)}
              type="button"
            >
              {page.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          {user ? (
            <>
              <div className="user-chip">
                <span>{user.fullName}</span>
                <small>{roleLabelMap[user.role]}</small>
              </div>
              <button className="btn ghost" onClick={handleLogout} type="button">
                Đăng xuất
              </button>
            </>
          ) : (
            <button className="btn primary" onClick={() => openLoginPage()} type="button">
              Đăng nhập
            </button>
          )}
        </div>
      </header>

      <main>
        {currentPage === 'home' && (
          <div className="home-page reveal">
            <section className="hero-section">
              <div className="hero-copy">
                <p className="eyebrow">Lớp tiếng Anh cá nhân hóa cho học sinh</p>
                <h1>Học đúng lộ trình, thấy tiến bộ rõ từng tuần</h1>
                <p>
                  Website gồm khóa học, flashcards, tài liệu ôn tập và khu theo dõi tiến độ cho học sinh, giáo viên,
                  phụ huynh. Giao diện được thiết kế gọn, rõ và có cảm giác như một trung tâm học tập hiện đại.
                </p>
                <div className="hero-actions">
                  <button className="btn primary" onClick={() => goToPage('flashcards')} type="button">
                    Học thử flashcards
                  </button>
                  <button className="btn secondary" onClick={() => goToPage('archive')} type="button">
                    Xem tài liệu
                  </button>
                </div>
              </div>

              <div className="hero-visual" aria-label="Bảng tổng quan lớp học">
                <div className="hero-card">
                  <img src={heroArt} alt="" />
                  <div>
                    <p>Hôm nay</p>
                    <strong>5 bài cần hoàn thành</strong>
                  </div>
                </div>
                <div className="score-card">
                  <span>IELTS / School</span>
                  <strong>+18%</strong>
                  <small>tăng độ chính xác sau 4 tuần</small>
                </div>
              </div>
            </section>

            <section className="stats-band">
              {achievements.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </section>

            <section className="section-block">
              <div className="section-head">
                <p className="eyebrow">Lộ trình học</p>
                <h2>Khóa học theo mục tiêu thật của học sinh</h2>
              </div>
              <div className="course-grid">
                {courses.map((course) => (
                  <article className="course-card" key={course.title}>
                    <div className="course-top">
                      <span>{course.level}</span>
                      <small>{course.time}</small>
                    </div>
                    <h3>{course.title}</h3>
                    <p>{course.desc}</p>
                    <ul>
                      {course.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="method-section">
              <div className="method-intro">
                <p className="eyebrow">Phương pháp</p>
                <h2>Một quy trình học rõ ràng, dễ đo tiến bộ</h2>
                <p>
                  Cách học tập trung vào việc biết mình đang yếu phần nào, luyện đúng phần đó và nhận phản hồi đều
                  đặn.
                </p>
              </div>
              <div className="method-list">
                {methodSteps.map(([step, title, text]) => (
                  <article key={step}>
                    <span>{step}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="teacher-section">
              <div>
                <p className="eyebrow">Giáo viên phụ trách</p>
                <h2>Cô Minh Anh đồng hành như một coach học tập</h2>
                <p>
                  Bài học được chia nhỏ, có bài tập sau lớp và có báo cáo tiến độ. Học sinh không chỉ học để làm bài,
                  mà còn xây thói quen tự học bền vững.
                </p>
              </div>
              <div className="teacher-panel">
                <strong>Chuyên môn</strong>
                <span>Ngữ pháp ứng dụng</span>
                <span>Đọc hiểu và viết câu</span>
                <span>Phản xạ giao tiếp</span>
              </div>
            </section>

            <section className="section-block">
              <div className="section-head">
                <p className="eyebrow">Phản hồi</p>
                <h2>Học sinh và phụ huynh thấy được tiến bộ</h2>
              </div>
              <div className="review-grid">
                {reviews.map((review) => (
                  <article key={review.name}>
                    <p>"{review.text}"</p>
                    <strong>{review.name}</strong>
                  </article>
                ))}
              </div>
            </section>

            <section className="cta-section">
              <div>
                <p className="eyebrow">Bắt đầu học thử</p>
                <h2>Vào hệ thống để ôn tập và xem tài liệu ngay</h2>
              </div>
              <button className="btn primary" onClick={() => (user ? goToPage('workspace') : openLoginPage())} type="button">
                {user ? 'Mở khu học tập' : 'Đăng nhập học thử'}
              </button>
            </section>
          </div>
        )}

        {currentPage === 'flashcards' && user && (
          <section className="page reveal">
            <div className="section-head">
              <p className="eyebrow">Flashcards</p>
              <h1>Luyện phản xạ tiếng Anh mỗi ngày</h1>
              <p>Bấm vào thẻ để lật đáp án. Mỗi thẻ có ghi chú ngắn giúp ghi nhớ nhanh hơn.</p>
            </div>

            <div className="flashcard-wrap">
              <button className="switch-card" onClick={() => moveCard(-1)} type="button">
                Trước
              </button>
              <button className={`flashcard ${showBack ? 'is-back' : ''}`} onClick={() => setShowBack((prev) => !prev)} type="button">
                <span>{currentCard.topic}</span>
                <h2>{showBack ? currentCard.back : currentCard.front}</h2>
                <p>{showBack ? currentCard.note : 'Nhấn để xem đáp án'}</p>
              </button>
              <button className="switch-card" onClick={() => moveCard(1)} type="button">
                Sau
              </button>
            </div>
            <div className="progress-line">
              <span style={{ width: `${((cardIndex + 1) / flashcards.length) * 100}%` }} />
            </div>
          </section>
        )}

        {currentPage === 'archive' && user && (
          <section className="page reveal">
            <div className="section-head">
              <p className="eyebrow">Kho tài liệu</p>
              <h1>Bài viết và bài luyện cập nhật theo tuần</h1>
              <p>Lọc nhanh theo trình độ, chủ đề hoặc từ khóa cần ôn.</p>
            </div>

            <div className="archive-tools">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Tìm theo từ khóa: ngữ pháp, từ vựng, ôn thi..."
              />
              <div className="level-filter">
                {levels.map((level) => (
                  <button className={selectedLevel === level ? 'active' : ''} key={level} onClick={() => setSelectedLevel(level)} type="button">
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div className="article-grid">
              {filteredArticles.map((article) => (
                <article className="article-card" key={article.title}>
                  <div>
                    <span>{article.level}</span>
                    <span>{article.category}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <small>{article.date}</small>
                </article>
              ))}
            </div>
            {filteredArticles.length === 0 && <p className="empty-state">Chưa có tài liệu phù hợp với bộ lọc này.</p>}
          </section>
        )}

        {currentPage === 'workspace' && user && workspace && (
          <section className="page reveal">
            <div className="workspace-hero">
              <p className="eyebrow">Xin chào, {user.fullName}</p>
              <h1>{workspace.title}</h1>
              <p>{workspace.desc}</p>
              <div className="workspace-stats">
                {workspace.stats.map(([value, label]) => (
                  <article key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="task-grid">
              {workspace.tasks.map((task) => (
                <article key={task}>
                  <h3>{task}</h3>
                  <p>Trạng thái sẵn sàng. Đây là khu vực demo cho chức năng theo vai trò.</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <strong>Minh Anh English</strong>
        <span>Hotline: 09xx xxx xxx</span>
        <span>Email: englishclass.minhanh@gmail.com</span>
      </footer>
    </div>
  );
}

export default App;
