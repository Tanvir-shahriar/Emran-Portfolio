import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import AboutPage from './pages/AboutPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import { useSiteContent } from './hooks/useSiteContent.js';

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-mark" aria-hidden="true" />
      <span>Loading Yunus Centre</span>
    </div>
  );
}

export default function App() {
  const { content, loading } = useSiteContent();

  if (loading || !content) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header navigation={content.navigation} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage content={content} />} />
          <Route path="/about" element={<AboutPage content={content} />} />
          <Route path="/news" element={<NewsPage content={content} />} />
          <Route path="/gallery" element={<GalleryPage content={content} />} />
        </Routes>
      </main>
      <Footer footer={content.footer} navigation={content.navigation} />
    </>
  );
}
