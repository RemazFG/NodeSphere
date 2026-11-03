// src/components/Header.jsx
import { NavLink, useNavigate } from 'react-router-dom';
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
            <NavLink to="/sandbox" className="nav-link">Dashboard</NavLink>
            <NavLink to="/docs" className="nav-link">Developer docs & API</NavLink>
            <NavLink to="/cases" className="nav-link">Case studies</NavLink>
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