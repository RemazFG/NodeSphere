// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DashboardPage from './pages/DashboardPage';
import CasesPage from './pages/CasesPage';
import './index.css';
import DocsPage from './pages/DocsPage';

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sandbox" element={<DashboardPage />} />
          <Route path="/docs" element={<DocsPage />} /> 
          <Route path="/cases" element={<CasesPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}