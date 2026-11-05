// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DashboardPage from './pages/DashboardPage';
import CasesPage from './pages/CasesPage';
import LoginPage from './pages/LoginPage'; 
import SignupPage from './pages/SignupPage';
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
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignupPage />} /> 
        </Routes>
        <Footer />
      </div>
    </>
  );
}