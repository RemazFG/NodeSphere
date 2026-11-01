// src/components/Footer.jsx
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import x from '../assets/x.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';

export default function Footer() {
    return (
        <footer className="app-footer">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
            <div className="newsletter-text">
            <h3>Join our newsletter</h3>
            <p>Get technical updates on NodeSphere infrastructure and device management</p>
            </div>
            <div className="newsletter-form-container">
            <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button type="submit" className="newsletter-submit">Subscribe</button>
            </form>
            <p className="newsletter-disclaimer">
                By subscribing you agree to with our Privacy Policy
            </p>
            </div>
        </div>

        {/* Main Links Grid */}
        <div className="footer-links-grid">
            <div className="footer-logo-col">
            <img src={logo} alt="NodeSphere Logo" className="footer-logo" />
            </div>
            
            <div className="footer-nav-col">
            <h4>Product</h4>
            <a href="#">Overview</a>
            <a href="#">Sandbox</a>
            <a href="#">API Specs</a>
            <a href="#">Docs</a>
            <a href="#">Pricing</a>
            </div>

            <div className="footer-nav-col">
            <h4>Solutions</h4>
            <a href="#">Asset Tracking</a>
            <a href="#">Maintenance</a>
            <a href="#">Integrations</a>
            <a href="#">Field Tech</a>
            <a href="#">Data Centers</a>
            </div>

            <div className="footer-nav-col">
            <h4>Resources</h4>
            <a href="#">Case Studies</a>
            <a href="#">Blog</a>
            <a href="#">GitHub</a>
            <a href="#">Status</a>
            <a href="#">Changelog</a>
            </div>

            <div className="footer-nav-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Partners</a>
            <a href="#">Press</a>
            </div>

            <div className="footer-nav-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
            <a href="#">Licenses</a>
            <a href="#">Security</a>
            </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Legal & Socials */}
        <div className="footer-bottom">
            <div className="footer-bottom-links">
            <span>© 2025 NodeSphere. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
            </div>
            
            <div className="footer-socials">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={x} alt="X" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={youtube} alt="YouTube" /></a>
            </div>
        </div>
        </footer>
    );
}