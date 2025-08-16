import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import Footer from './components/footer';

function App() {
  return (
    <span>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </span>
  );
}

export default App;
