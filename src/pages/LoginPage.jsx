// src/pages/LoginPage.jsx
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate successful authentication
        navigate('/sandbox');
    };

    return (
        <main className="auth-page-container">
        <div className="auth-split-layout">
            
            <div className="auth-branding">
            <span className="demo-icon auth-logo-icon">⎈</span>
            <h2>Welcome back to NodeSphere</h2>
            <p>Monitor your fleet, manage active tokens, and check your latest telemetry logs.</p>
            </div>

            <div className="auth-form-container">
            <div className="auth-form-box">
                <h3>Log in</h3>
                <p className="auth-subtitle">Enter your credentials to access your dashboard.</p>
                
                <form onSubmit={handleLogin} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <input type="email" id="email" placeholder="elena@company.com" required />
                </div>
                
                <div className="form-group">
                    <div className="password-label-row">
                    <label htmlFor="password">Password</label>
                    <a href="#" className="forgot-password-link">Forgot password?</a>
                    </div>
                    <input type="password" id="password" placeholder="••••••••" required />
                </div>

                <button type="submit" className="btn-solid auth-submit-btn">Log In</button>
                </form>

                <div className="auth-divider">
                <span>OR</span>
                </div>

                <button className="btn-outline-dark auth-oauth-btn">
                Continue with GitHub
                </button>

                <p className="auth-switch-text">
                Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
                </p>
            </div>
            </div>

        </div>
        </main>
    );
}