// src/pages/SignupPage.jsx
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css'; // Shared CSS for both Auth pages

export default function SignupPage() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault(); // Prevents the default form reload
        // In a real app, you would validate and send data to your backend here.
        // For the demo, we instantly route them to their new dashboard.
        navigate('/sandbox'); 
    };

    return (
        <main className="auth-page-container">
        <div className="auth-split-layout">
            
            {/* Left Side: Branding / Value Prop */}
            <div className="auth-branding">
            <span className="demo-icon auth-logo-icon">⎈</span>
            <h2>Deploy your custom dashboard</h2>
            <p>Join thousands of engineers managing high-volume IoT payloads without the infrastructure bottlenecks.</p>
            
            <ul className="auth-feature-list">
                <li>✓ Secure JWT token generation</li>
                <li>✓ Custom webhook alerts</li>
                <li>✓ Unlimited device registration</li>
            </ul>
            </div>

            {/* Right Side: The Form */}
            <div className="auth-form-container">
            <div className="auth-form-box">
                <h3>Create your account</h3>
                <p className="auth-subtitle">Get started with NodeSphere for free.</p>
                
                <form onSubmit={handleSignup} className="auth-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Elena Vasquez" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <input type="email" id="email" placeholder="elena@company.com" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="••••••••" required />
                </div>

                <button type="submit" className="btn-solid auth-submit-btn">Create Account</button>
                </form>

                <div className="auth-divider">
                <span>OR</span>
                </div>

                <button className="btn-outline-dark auth-oauth-btn">
                Continue with GitHub
                </button>

                <p className="auth-switch-text">
                Already have an account? <Link to="/login" className="auth-link">Log in</Link>
                </p>
            </div>
            </div>

        </div>
        </main>
    );
}