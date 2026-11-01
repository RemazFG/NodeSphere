// src/components/Header.jsx
import logo from '../assets/logo.png'; // Update extension to .svg or .jpg if needed

export default function Header() {
    return (
        <header className="app-header">
        <div className="header-left">
            <img src={logo} alt="NodeSphere Logo" className="logo-image" />
        </div>
        
        <nav className="header-center">
            <a href="#home" className="nav-link">Home</a>
            <a href="#docs" className="nav-link">Developer docs</a>
            <a href="#api" className="nav-link">API specs</a>
            <a href="#cases" className="nav-link">Case studies</a>
            <div className="nav-dropdown">
            <a href="#tracking" className="nav-link">Asset tracking</a>
            <span className="dropdown-arrow">v</span>
            </div>
        </nav>

        <div className="header-right">
            <button className="sandbox-btn">Sandbox</button>
        </div>
        </header>
    );
}