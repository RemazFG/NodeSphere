// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Header() {
  const navigate = useNavigate(); // Initialize the hook

    return (
        <header className="app-header">
        <div className="header-left">
            {/* Use navigate for the logo too! */}
            <img 
            src={logo} 
            alt="NodeSphere Logo" 
            className="logo-image" 
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')} 
            />
        </div>
        
        <nav className="header-center">
            <a onClick={() => navigate('/')} className="nav-link" style={{ cursor: 'pointer' }}>
                Home
            </a>
            <a href="#docs" className="nav-link">Developer docs</a>
            <a href="#api" className="nav-link">API specs</a>
            <a href="#cases" className="nav-link">Case studies</a>
            <div className="nav-dropdown">
            <a href="#tracking" className="nav-link">Asset tracking</a>
            <span className="dropdown-arrow">v</span>
            </div>
        </nav>

        <div className="header-right">
            {/* React Router's programmatic navigation */}
            <button className="sandbox-btn" onClick={() => navigate('/sandbox')}>
            Sandbox
            </button>
        </div>
        </header>
    );
}