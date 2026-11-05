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

import AppLayout from './components/AppLayout';
import OverviewDashboard from './pages/OverviewDashboard';
import PlaceholderPage from './pages/PlaceholderPage'; 

import './index.css';

export default function App() {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');

  return (
    <div className="app-container">
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
        <Route path="/app/overview" element={<AppLayout><OverviewDashboard /></AppLayout>} />
        
        {/* 2. Add the missing routes using the Placeholder */}
        <Route path="/app/devices" element={<AppLayout><PlaceholderPage title="Devices Management" /></AppLayout>} />
        <Route path="/app/analytics" element={<AppLayout><PlaceholderPage title="Analytics & Reports" /></AppLayout>} />
        <Route path="/app/automation" element={<AppLayout><PlaceholderPage title="Automation Rules" /></AppLayout>} />
        <Route path="/app/alerts" element={<AppLayout><PlaceholderPage title="System Alerts" /></AppLayout>} />
        <Route path="/app/users" element={<AppLayout><PlaceholderPage title="User Access Control" /></AppLayout>} />
        <Route path="/app/settings" element={<AppLayout><PlaceholderPage title="Platform Settings" /></AppLayout>} />
      </Routes>

      {!isAppRoute && <Footer />}
    </div>
  );
}