// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import SandboxPage from './pages/SandboxPage';
import './index.css';

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sandbox" element={<SandboxPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}