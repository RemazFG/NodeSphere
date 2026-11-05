// src/components/AppLayout.jsx
import { Link, useLocation } from 'react-router-dom';
import './AppLayout.css';

export default function AppLayout({ children }) {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/app/overview', icon: '⊞' },
        { name: 'Devices', path: '/app/devices', icon: '📡' },
        { name: 'Analytics', path: '/app/analytics', icon: '📊' },
        { name: 'Automation', path: '/app/automation', icon: '⚡' },
        { name: 'Alerts', path: '/app/alerts', icon: '🔔' },
        { name: 'Users', path: '/app/users', icon: '👥' },
        { name: 'Settings', path: '/app/settings', icon: '⚙️' },
    ];

    return (
        <div className="app-layout-wrapper">
        {/* Left Dark Sidebar */}
        <aside className="app-sidebar">
            <div className="sidebar-brand">
            <div className="brand-logo-app">⎈</div>
            <div className="brand-text">
                <strong>NodeSphere</strong>
                <span>v2.0</span>
            </div>
            </div>

            <nav className="sidebar-nav">
            {navItems.map((item) => (
                <Link 
                key={item.name} 
                to={item.path} 
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                <span className="nav-icon">{item.icon}</span>
                {item.name}
                </Link>
            ))}
            </nav>

            <div className="sidebar-user-profile">
            <div className="profile-avatar-blue">A</div>
            <div className="profile-info">
                <strong>Admin User</strong>
                <span>Super Admin</span>
            </div>
            </div>
        </aside>

        {/* Main Content Area */}
        <div className="app-main-content">
            {/* Top Header */}
            <header className="app-top-header">
            <div className="header-breadcrumbs">
                <span className="breadcrumb-path">Home / Dashboard</span>
                <h2>Dashboard Overview</h2>
            </div>
            <div className="header-actions">
                <button className="icon-btn">🔔</button>
                <div className="profile-avatar-blue small">A</div>
                <span className="admin-label">Admin</span>
            </div>
            </header>

            {/* The actual page content goes here */}
            <div className="app-page-content">
            {children}
            </div>
        </div>
        </div>
    );
}