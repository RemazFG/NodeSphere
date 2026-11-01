// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import SandboxPage from './pages/SandboxPage'; // MUST be imported
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sandbox" element={<SandboxPage />} /> {/* MUST be here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}