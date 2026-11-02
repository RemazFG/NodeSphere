// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import './Header.css';
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
            {/* I use 'end' on the Home link so it only highlights when exactly on '/' */}
            <NavLink to="/" className="nav-link" end>Home</NavLink>
            <NavLink to="/docs" className="nav-link">Developer docs</NavLink>
            <NavLink to="/api" className="nav-link">API specs</NavLink>
            <NavLink to="/cases" className="nav-link">Case studies</NavLink>
            <div className="nav-dropdown">
            <NavLink to="/tracking" className="nav-link">Asset tracking</NavLink>
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