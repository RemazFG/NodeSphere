// src/App.jsx
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DashboardPage from './pages/DashboardPage';
import DocsPage from './pages/DocsPage';
import CasesPage from './pages/CasesPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Import the new App Layout and Overview Dashboard
import AppLayout from './components/AppLayout';
import OverviewDashboard from './pages/OverviewDashboard';

import './index.css';

export default function App() {
  const location = useLocation();
  // Check if the current URL starts with "/app"
  const isAppRoute = location.pathname.startsWith('/app');

  return (
    <div className="app-container">
      {/* Hide marketing header if in the app */}
      {!isAppRoute && <Header />}
      
      <Routes>
        {/* Marketing Routes */}
        <Route path="/" element={<MainPage />} />
        <Route path="/sandbox" element={<DashboardPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Authenticated App Routes */}
        <Route path="/app/overview" element={
          <AppLayout>
            <OverviewDashboard />
          </AppLayout>
        } />
      </Routes>

      {/* Hide marketing footer if in the app */}
      {!isAppRoute && <Footer />}
    </div>
  );
}