import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/landing/landing';
import Footer from './components/footer';
import NewsContent from './components/news-content';
import ScrollHandler from './scroll-handler';
import Content from './components/content';

function App() {



  return (
    <span className='root-class'>
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/content/:id" element={<NewsContent />} />
          <Route path="/employment-guide" element={<Content />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </span>
  );
}

export default App;
